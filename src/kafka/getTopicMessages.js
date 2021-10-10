const { Kafka, logLevel } = require('kafkajs');

// Connect to Kafka cluster and get messages from passed in topic, push messages to the passed in array
async function getTopicMessages(address, topic) {
  try {
    // Connect to Kafka with user provided address, suppress console logs so that console does not get clogged up.
    const kafka = new Kafka({
      clientId: 'flowkat-consumer',
      brokers: [address],
      logLevel: logLevel.NOTHING, // ! why is log level nothing used?
    });

    // Connect as a consumer with ID flowkat
    const consumer = kafka.consumer({ groupId: 'flowkat' });
    await consumer.connect();

    // Subscribe to topic from beginning to read all messages
    await consumer.subscribe({ topic, fromBeginning: true });

    // For each message received, add the message to the passed in array
    const messages = [];
    await consumer.run({
      eachMessage: async result => {
        messages.push(result);
      }
    });

    // Give the cluster some time to return messages before disconnecting
    // ! so connection must be open to receive messages, consider refactoring to a streaming approach instead
    await new Promise((resolve) => {
      setTimeout(async () => {
        await consumer.disconnect();
        resolve();
      }, 3000);
    });

    return messages;
  } catch (err) {
    console.log(`There was an error consuming messages from the Kafka cluster: ${err}`);
    throw err;
  }
}

export default getTopicMessages;
