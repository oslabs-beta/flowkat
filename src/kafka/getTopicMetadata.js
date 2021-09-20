const { Kafka } = require('kafkajs');

async function getTopicMetadata(address, topic) {
  let metadata;
  let error;
  try {
    // Connect to Kafka with user provided address
    const kafka = new Kafka({
      'clientId': 'admin',
      'brokers': [address],
    });

    // Connect as admin
    const admin = kafka.admin();
    await admin.connect();

    // Get topic metadata from Kafka, then disconnect
    metadata = await admin.fetchTopicMetadata({ topics: [topic] });

    await admin.disconnect();
  } catch(err) {
    console.log(`There was an error fetching data from topic ${topic}: ${err}`);
    error = err;
  } finally {
    // Return values back to react app
    if (metadata) return metadata;
    else return error;
  }
}

export default getTopicMetadata;
