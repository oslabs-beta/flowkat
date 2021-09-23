import { useParams } from 'react-router';

const { Kafka, logLevel } = require('kafkajs');

// Connect to Kafka cluster and get messages from passed in topic, push messages to the passed in array
async function getTopicMessages(address, topic, messages) {
  let error;
  try {
    // Connect to Kafka with user provided address, suppress console logs so that console does not get clogged up.
    const kafka = new Kafka({
      'clientId': 'flowkat-consumer',
      'brokers': [address],
      'logLevel': logLevel.NOTHING,
    });

    // Connect as a consumer with ID flowkat
    const consumer = kafka.consumer({ groupId: 'flowkat' });
    await consumer.connect();

    // Subscribe to topic from beginning to read all messages
    await consumer.subscribe({ 'topic': topic, 'fromBeginning': true });
    
    // For each message received, add the message to the passed in array
    await consumer.run({
      'eachMessage': async result => {
        messages.push(result);
      }
    });

    // Give the cluster some time to return messages before disconnecting
    setTimeout(async () => await consumer.disconnect(), 3000);

  } catch (err) {
    // Console log if there was an error
    console.log(`There was an error consuming messages from the Kafka cluster: ${err}`);
    error = err;
  } finally {
    // If there are messages, return messages. If there is an error, return error.
    if (messages[0]) return messages;
    else if (error) return error;
  }
}

export default getTopicMessages;
