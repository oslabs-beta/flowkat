import { useParams } from 'react-router';

const { Kafka, logLevel } = require('kafkajs');

async function getTopicMessages(address, topic, messages) {
//   const messages = [];
  console.log(address, topic)
  
  try {
    // Connect to Kafka with user provided address
    const kafka = new Kafka({
      'clientId': 'flowkat-consumer',
      'brokers': [address],
      'logLevel': logLevel.NOTHING,
    });

    // Connect as a consumer
    const consumer = kafka.consumer({ groupId: 'flowkat' });
    await consumer.connect();

    console.log(`Connected to Kafka, subscribing to ${topic}`);

    await consumer.subscribe({ 'topic': topic, 'fromBeginning': true });

    console.log('Subscribed to topic');
    
    await consumer.run({
      'eachMessage': async result => {
        console.log('Here is a message: ');
        console.log(result.message.value.toString());
        console.log(result);
        messages.push(result);
      }
    });

    setTimeout(async () => await consumer.disconnect(), 3000);

  } catch (err) {
    console.log(`There was an error consuming messages from the Kafka cluster: ${err}`);
  } finally {
    if (messages[0]) return messages;
  }
}

export default getTopicMessages;
