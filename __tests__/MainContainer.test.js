//testing-library IMPORTS
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';

// REACT IMORT
import * as React from 'react';

//COMPONENT BEING TESTED
import MainContainer from '../src/components/main/MainContainer.jsx';

//RENDER COMPONENT WITH DUMMY PARAMETERS BEFORE EACH
beforeAll(() => {
  render(<MainContainer
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
})

//TESTING FUNCTIONALITY
test('for rendering two \'buttons\', two \'inputs\'', async () => {  
  const mainContButtons = await screen.findAllByRole('button');
  const mainContInputs = await screen.findAllByRole('textbox');
  
  expect(mainContButtons).toHaveLength(2);
  expect(mainContInputs).toHaveLength(2);
});