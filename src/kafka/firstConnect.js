const { Kafka } = require('kafkajs');

async function firstConnect(address) {
  let topics;
  let cluster;
  let error;
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
    topics = await admin.listTopics();
    cluster = await admin.describeCluster();

    await admin.disconnect();
  } catch (err) {
    // Log the error if one occurs
    console.log(`There was an error connecting to the Kafka cluster: ${err}`);
    error = err;
  } finally {
    // Return values back to react app in an array if there is a response, otherwise return the error
    if (cluster) return [cluster, topics];
    else return error;
  }
}

export default firstConnect;
