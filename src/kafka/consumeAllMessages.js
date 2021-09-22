const { Kafka } = require('kafkajs');

async function consumeAllMessages(address, topicArr) {
  const messageCounter = [];
  
  try {
    // Connect to Kafka with user provided address
    const kafka = new Kafka({
      'clientId': 'flowkat-consumer',
      'brokers': [address],
    });

    // Connect as a consumer
    const consumer = kafka.consumer({ groupId: 'flowkat' });
    await consumer.connect();

    topicArr.forEach(async topic => {
      await consumer.subscribe({ topic: topic, fromBeginning: true });
      await consumer.run({
        eachMessage: async result => {
          console.log({
            key: result.key.toString(),
            value: result.value.toString(),
            headers: result.headers,
          });
        }
      });
    });

    await consumer.disconnect();

  } catch (err) {
    console.log(`There was an error consuming messages from the Kafka cluster: ${err}`);
  } finally {
    if (messageCounter[0]) return messageCounter;
  }
}

export default consumeAllMessages;
