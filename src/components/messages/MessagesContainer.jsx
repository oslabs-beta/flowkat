import React, { Component } from 'react';
import TableRows from './TableRows.jsx';
// import visFuncs from './visFuncs.js';
import consumeAllMessages from '../../kafka/consumeAllMessages.js';
import getTopicMessages from '../../kafka/getTopicMessages.js';
// import ReactDOM from 'react-dom'
// import { path } from 'path';

class MessagesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [
        {
          message: 'Here is a message',
          timestamp: `${Date.now()}`,
          topic: 'Users',
          partition: '0',
        }
      ],
      rowsToRender: [
        <TableRows 
          timestamp={`${Date.now()}`}
          topicName=''
          partition=''
          messageContent='Waiting for messages...'
        />
      ],
    }

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
    this.messageCache = {};
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
    console.log(`Clicked topic: ${topic}. Now making Kafka call...`);

    // Make a call to the cluster for the topic results
    const results = [];
    await getTopicMessages(this.props.state.brokerAddress, topic, results);

    // Wait 3 seconds for cluster to respond
    await setTimeout(async () => {
      // Cache all of the messages received; also grab the 100 most recent messages
      await results.forEach(message => this.messageCache[topic].push(message));
      const recentResults = this.messageCache[topic].slice(-100);

      // Render the messages by adding them to rowsToRender
      while (this.state.rowsToRender.length < 100 && recentResults.length) {
        const currentMessage = recentResults.shift();

        this.rowsToRenderVar.unshift(
          <TableRows
            timestamp={currentMessage.message.timestamp}
            topicName={currentMessage.topic}
            partition={currentMessage.partition}
            messageContent={currentMessage.message.value.toString()}
          />
        );
      }

      await this.setState({
        rowsToRender: this.rowsToRenderVar,
      });
    }, 3000)
  }

  async componentDidMount() {
    this.props.state.topics.forEach(topic => {
      this.messageCache[topic] = [];
    });

    console.log('MessagesContainer Mounted');
    // let rowsToRender = []

    // if (this.props.state.connectStatus === 'success') {
    //   console.log('Trying to consume Kafka messages...');
    //   const users = []
    //   // await this.props.state.topics.forEach(async topic => {
    //   //   console.log(`Topic: ${topic}`);
    //   //   await getTopicMessages(this.props.state.brokerAddress, topic);
    //   // });
    //   await getTopicMessages(this.props.state.brokerAddress, 'pancake', users);
    //   setTimeout(() => console.log(users), 3000);
    // }
  }

  render() {
    // let rowsToRender = [];

    // for (let i = 0; i < 100; i++) {
    //   rowsToRender.push(
    //     <TableRows
    //       messageContent = {messagesArr[i]['message']}
    //       timeStamp = {messageArr[i]['timeStamp']}
    //       topicName = {messageArr[i]['topic']}
    //       partition = {messageArr[i]['partition']}
    //     />
    //   )
    // }

    return (
      <div id="messages-container">
        <div>
          {this.topicButtons()}
        </div>
        <table className="table" id="messages-table">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Topic</th>
              <th>Partition</th>
              <th>Message Content</th>
            </tr>
          </thead>
          <tbody>
            {this.state.rowsToRender}
          </tbody>
        </table>
      </div>
    );
  };
}

export default MessagesContainer;
















/*
      producers: {
        producer1: { cy: 50, connections: ['broker1', 'broker2'] },
        producer2: { cy: 50, connections: [] },
        producer3: { cy: 50, connections: ['broker1'] },
      },
      brokers: {
        broker1: { y: 290, connections: ['consumer1', 'consumer3']},
        broker2: { y: 290, connections: ['consumer2']},
      },
      consumers: {
        consumer1: { cy: 600 },
        consumer2: { cy: 600 },
        consumer3: { cy: 600 },
      },
      svgWidth: null,

    // // if (this.state.svgWidth === null) {
    // //   this.setState({
    // //     svgWidth: document.getElementById('svg-container').clientWidth,
    // //   }, () => {
    // //     console.log('setState callback logs:', this.state.svgWidth);
    // //   });
    // // } else {
    // //   console.log(this.state.producers);
    // // }

    // await this.setState({
    //   svgWidth: document.getElementById('svg-container').clientWidth,
    // }, () => {
    //   console.log('setState callback logs:', this.state.svgWidth);
    // });
    
    // //will calculate x coords and then render the svgs
    // await this.setState({
    //   producers: visFuncs.calcXCoords(this.state.producers, this.state.svgWidth, 'producer'),
    //   brokers: visFuncs.calcXCoords(this.state.brokers, this.state.svgWidth, 'broker'),
    //   consumers: visFuncs.calcXCoords(this.state.consumers, this.state.svgWidth, 'consumer'),
    // }, () => {
    //   visFuncs.renderProds(this.state.producers);
    //   visFuncs.renderBrokers(this.state.brokers);
    //   visFuncs.renderCons(this.state.consumers);
    //   visFuncs.renderPipes(this.state);
    // });

// const producers_group = d3.select('#producers')
//       .append('g')
//       .attr('width', 500)
//       .attr('height', 500)

//       producers_group.selectAll('svg')
//       .data(['Service 1', 'Service 2', 'Service 3'])
//       .enter()
//       .append('svg')
//       // .attr('viewBox', '0 0 25 25')
//       .attr('width', 100)
//       .attr('height', 100)
//       .append('circle')
//       // .text(dta => dta)
//       .attr('r', 30)
//       .attr('cx', 50)
//       .attr('cy', 50)
//       .attr('fill', '#0cc440')
//       .attr('stroke', 'black')
//       .attr('stroke-width', 3)

//       const brokers_group = d3.select('#brokers')
//       .append('g')
//       .attr('width', 500)
//       .attr('height', 500)

//       brokers_group.selectAll('svg')
//       .data(['Broker 1', 'Broker 2'])
//       .enter()
//       .append('svg')
//       // .attr('viewBox', '0 0 25 25')
//       .attr('width', 150)
//       .attr('height', 150)
//       .append('rect')
//       // .text(dta => dta)
//       .attr('x', 50)
//       .attr('y', 50)
//       .attr('width', 50)
//       .attr('height', 50)
//       .attr('rx', 10)
//       .attr('ry', 10)
//       .attr('fill', '#b02068') //hibiscus!
//       .attr('stroke', 'black')
//       .attr('stroke-width', 3)

//       const consumers_group = d3.select('#consumers')
//       .append('g')
//       .attr('width', 500)
//       .attr('height', 500)

//       consumers_group.selectAll('svg')
//       .data(['Service 1', 'Service 2', 'Service 3'])
//       .enter()
//       .append('svg')
//       // .attr('viewBox', '0 0 25 25')
//       .attr('width', 100)
//       .attr('height', 100)
//       .append('circle')
//       // .text(dta => dta)
//       .attr('r', 30)
//       .attr('cx', 50)
//       .attr('cy', 50)
//       .attr('fill', '#0cc440')
//       .attr('stroke', 'black')
//       .attr('stroke-width', 3)

//       const prodBrokePipes_group = d3.select('#prod-broke-pipes')
//       .append('g')

//       prodBrokePipes_group.selectAll('svg')
//       .data(['service1ToBroker1'])
//       .enter()
//       .append('svg')
//       .attr('width', 300)
//       .attr('height', 300)
//       // .attr('viewBox', '0 0 25 25')
//       .append('line')
//       .attr('x1', 10)
//       .attr('y1', 0)
//       .attr('x2', 150)
//       .attr('y2', 30)
//       // .text(dta => dta)
//       .attr('stroke', 'red')
//       .attr('stroke-width', 15)
//       .attr('opacity', 0.8)

// !!! HTML FOR MAKING NODES !!!

// NOTE: IN ORDER FOR ELEMENTS TO PROPERLY OVERLAP, *ALL* SVGs ELEMENTS *MUST* BE IN THE SAVE SVG TAG

// <div id="vis-container">
//   <div id="producers">
//     <svg width="300" height="500" id="we1">
//         <circle r="20" cx="50" cy="50" fill="#0cc440" stroke="black" stroke-width="3"></circle>
//         <circle r="20" cx="100" cy="50" fill="#0cc440" stroke="black" stroke-width="3"></circle>
//         <circle r="20" cx="150" cy="50" fill="#0cc440" stroke="black" stroke-width="3"></circle>
//         <line x1="50" y1="70" x2="80" y2="250" stroke="red" stroke-width="8" opacity="0.7"></line>
//       </svg>
//   </div>
//   <div id="prod-broke-pipes">
//     <svg width="300" height="300">
//         <line x1="50" y1="50" x2="" y2="" stroke="red" stroke-width="15" opacity="0.8"></line>
//       </svg>
//   </div>
//   <div id="brokers">
//     <svg width="150" height="150">
//         <rect x="50" y="50" width="50" height="50" rx="10" ry="10" fill="#b02068" stroke="black" stroke-width="3"></rect>
//       </svg><svg width="150" height="150">
//         <rect x="50" y="50" width="50" height="50" rx="10" ry="10" fill="#b02068" stroke="black" stroke-width="3"></rect>
//       </svg>
//   </div>
//   <div id="broke-con-pipes"></div>
//   <div id="consumers">
//     <svg width="100" height="100">
//         <circle r="30" cx="50" cy="50" fill="#0cc440" stroke="black" stroke-width="3"></circle>
//       </svg><svg width="100" height="100">
//         <circle r="30" cx="50" cy="50" fill="#0cc440" stroke="black" stroke-width="3"></circle>
//       </svg><svg width="100" height="100">
//         <circle r="30" cx="50" cy="50" fill="#0cc440" stroke="black" stroke-width="3"></circle>
//       </svg>
//   </div>
// </div>
// */