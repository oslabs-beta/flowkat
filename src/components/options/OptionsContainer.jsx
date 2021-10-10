import React, { useCallback } from 'react';

// Container for selecting number of messages to display from a topic
export default function OptionsContainer({
  maxMessagesToRender,
  setMaxMessagesToRender,
}) {
  const onChange = useCallback(event => {
    setMaxMessagesToRender(event.target.value);
  }, [setMaxMessagesToRender]);

  return (
    <div id="options-container">
      <div>
        <p>Maximum Messages Displayed</p>
        <div className="select is-primary">
          <select value={maxMessagesToRender} onChange={onChange}>
            <option>100</option>
            <option>250</option>
            <option>500</option>
          </select>
        </div>
      </div>
    </div>
  );
}
