const { Kafka } = require('kafkajs');

// NOT YET IMPLEMENTED IN FRONT END

async function consumeAllMessages(address, topicArr) {
  const messageCounter = {};
  let error;
  
  try {
    // Connect to Kafka with user provided address
    const kafka = new Kafka({
      'clientId': 'flowkat-consumer',
      'brokers': [address],
    });

    // Connect as a consumer
    const consumer = kafka.consumer({ groupId: 'flowkat' });
    await consumer.connect();

    // Subscribe to each topic in the array
    topicArr.forEach(async topic => {
      await consumer.subscribe({ topic: topic, fromBeginning: true });
      // For each topic, add it to the counter object, then count the messages in that topic
      messageCounter[topic] = 0;
      await consumer.run({
        eachMessage: async result => {
          messageCounter[topic] += 1;
        }
      });
    });

    // Give the cluster some time to return messages before disconnecting
    setTimeout(async () => await consumer.disconnect(), 3000);

  } catch (err) {
    // If there was an error, log it
    console.log(`There was an error consuming messages from the Kafka cluster: ${err}`);
    error = err;
  } finally {
    if (messageCounter[topicArr[0]]) return messageCounter;
    else if (error) return error;
  }
}

export default consumeAllMessages;
