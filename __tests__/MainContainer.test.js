//testing-library IMPORTS
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';

// REACT IMORT
import * as React from 'react';

//COMPONENT BEING TESTED
import MainContainer from '../src/components/main/MainContainer.jsx';

//TESTING FUNCTIONALITY
test('renders two \'button\' components', async () => {
  render(<MainContainer
    //dummy parameters
    kafka = {
      {
        brokerAddress: 'fakeAddress',
        connectStatus: false,
        clusterInfo: {
          brokers: []
        },
        topics: [],
      }
    }
  />);
  const mainContButtons = await screen.findAllByRole('button');
  expect(mainContButtons).toHaveLength(2);
});