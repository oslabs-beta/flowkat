const { Kafka } = require('kafkajs');

// NOT YET IMPLEMENTED IN FRONT END

async function getTopicMetadata(address, topic) {
  try {
    // Connect to Kafka with user provided address
    const kafka = new Kafka({
      clientId: 'admin',
      brokers: [address],
    });

    // Connect as admin
    const admin = kafka.admin();
    await admin.connect();

    // Get passed in topic metadata from Kafka, then disconnect
    const metadata = await admin.fetchTopicMetadata({ topics: [topic] });

    await admin.disconnect();

    return metadata;
  } catch (err) {
    console.log(`There was an error fetching data from topic ${topic}: ${err}`);
    throw err;
  }
}

export default getTopicMetadata;
