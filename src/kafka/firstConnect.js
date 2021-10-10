const { Kafka } = require('kafkajs');

async function firstConnect(address) {
  try {
    // Connect to the Kafka cluster with user provided address
    const kafka = new Kafka({
      clientId: 'admin',
      brokers: [address],
    });

    // Connect as admin
    const admin = kafka.admin();
    await admin.connect();

    // Get a list of topics and general cluster info, then disconnect
    const topics = await admin.listTopics();
    const cluster = await admin.describeCluster();

    await admin.disconnect();

    if (cluster) return [cluster, topics];
  } catch (err) {
    console.log(`There was an error connecting to the Kafka cluster: ${err}`);
    throw err;
  }
}

export default firstConnect;
