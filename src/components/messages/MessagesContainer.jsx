import React, { Component } from 'react';
import TableRows from './TableRows.jsx';

import consumeAllMessages from '../../kafka/consumeAllMessages.js';
import getTopicMessages from '../../kafka/getTopicMessages.js';

class MessagesContainer extends Component {
  constructor(props) {
    super(props);

    // A starting value for what will actually be displayed on the screen
    this.rowsToRenderVar = [
      <TableRows 
        timestamp={`${Date.now()}`}
        topicName=''
        partition=''
        messageContent='Waiting for messages...'
      />
    ];

    // Somewhere to cache messages we pull off the cluster so we don't lose them if another topic is clicked
    this.localMessageCache = {};
  }

  // Render a button for each topic on the cluster
  topicButtons() {
    const buttonArr = [];
    if (this.props.state.connectStatus === 'success') {
      this.props.state.topics.forEach(topic => {
        buttonArr.push(
          <button key={topic} value={topic} onClick={(e) => this.displayMessages(e.target.value)} className="button">{topic}</button>
        );
      });
      return buttonArr;
    } else {
      return <p>Please connect to a Kafka cluster in the Main tab.</p>
    }
  }

  // Get messages for a topic from the cluster, cache them, and display 100 on screen
  async displayMessages(topic) {
    // Make a call to the cluster for the topic results
    const results = [];
    await getTopicMessages(this.props.state.brokerAddress, topic, results);

    // Wait 3 seconds for cluster to respond
    await setTimeout(async () => {
      // Cache all of the messages received; also grab the 100 most recent messages
      await results.forEach(message => this.localMessageCache[topic].push(message));
      this.props.updateMessageCache(this.localMessageCache);
      const recentResults = this.localMessageCache[topic].slice(-100);

      // Render the messages by adding them to rowsToRender
      let i = 0;
      while (recentResults.length) {
        const currentMessage = recentResults.shift();

        this.rowsToRenderVar.unshift(
          <TableRows
            timestamp={currentMessage.message.timestamp}
            topicName={currentMessage.topic}
            partition={currentMessage.partition}
            messageContent={currentMessage.message.value.toString()}
            key={`tablerows${i}`}
          />
        );

        i++;
      }
 
      // await this.setState({
      //   rowsToRender: this.rowsToRenderVar,
      // });
      this.props.updateMessageRowsToRender(this.rowsToRenderVar);
    }, 3000)
  }

  async componentDidMount() {
    this.localMessageCache = this.props.state.messageCache;

    this.props.state.topics.forEach(topic => {
      if (!this.localMessageCache.hasOwnProperty(topic)) {
        this.localMessageCache[topic] = [];
      }
    });
  }

  render() {
    return (
      <div id="messages-container">
        <div>
          {this.topicButtons()}
        </div>
        <table className="table" id="messages-table" >
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Topic</th>
              <th>Partition</th>
              <th>Message Content</th>
            </tr>
          </thead>
          <tbody>
            {this.props.state.messageRowsToRender}
          </tbody>
        </table>
      </div>  
    );
  };
}

export default MessagesContainer;