import React, { useCallback } from 'react';

import TableRows from './TableRows.jsx';

import getTopicMessages from '../../kafka/getTopicMessages.js';

// Messages tab
export default function MessagesContainer({
  kafka,
  maxMessagesToRender,
  messagesToRender,
  setMessagesToRender,
}) {

  /**
   * Get messages for a topic from the cluster and store them in App state
   */
  const displayMessages = useCallback(async function displayMessages(topic) {
    // Make a call to the cluster for the topic results
    try {
      const messages = await getTopicMessages(kafka.brokerAddress, topic);

      if (messages.length > 0) setMessagesToRender(messages);
    } catch (error) {
      console.error(error);
    }
  }, [kafka.brokerAddress, setMessagesToRender]);

  const handleTopicButtonClick = useCallback(function handleTopicButtonClick(event) {
    displayMessages(event.target.value);
  }, [displayMessages]);

  /**
   * @returns Either an array of button ReactElements for each topic in the cluster, or a typography ReactElement 
   * message indicating that the user hasn't connected to a Kafka cluster
   */
  const topicButtons = useCallback(function topicButtons() {
    if (kafka.connectStatus === 'success' && kafka.topics.length > 0) {
      return kafka.topics.map(topic =>
        <button
          key={topic}
          value={topic}
          onClick={handleTopicButtonClick}
          className="button"
        >{topic}</button>
      );
    } else {
      return <p>Please connect to a Kafka cluster in the Main tab.</p>;
    }
  }, [handleTopicButtonClick, kafka.connectStatus, kafka.topics]);

  return (
    <div id="messages-container">
      <div>
        {topicButtons()}
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
          {messagesToRender.length === 0 &&
            <TableRows
              timestamp={`${Date.now().toLocaleString()}`}
              topicName=''
              partition=''
              messageContent='Waiting for messages...'
            />
          }
          {messagesToRender.length > 0 &&
            messagesToRender.slice(-maxMessagesToRender).map((currentMessage, i) =>
              <TableRows
                key={`tablerows${i}`}
                timestamp={new Date(Number(currentMessage.message.timestamp)).toLocaleString()}
                topicName={currentMessage.topic}
                partition={currentMessage.partition}
                messageContent={currentMessage.message.value.toString()}
              />)
          }
        </tbody>
      </table>
    </div>
  );
}
