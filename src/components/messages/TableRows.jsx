import React from 'react';

// Formatter for rows of messages
export default function TableRows({
  timestamp,
  topicName,
  partition,
  messageContent,
}) {
  return (
    <tr>
      <td>{timestamp}</td>
      <td>{topicName}</td>
      <td>{partition}</td>
      <td>{messageContent}</td>
    </tr>
  );
}
