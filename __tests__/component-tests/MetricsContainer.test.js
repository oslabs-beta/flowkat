window.URL.createObjectURL = function() {};
//testing-library IMPORTS
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';

// REACT IMORT
import * as React from 'react';

//COMPONENT BEING TESTED
import MetricsContainer from '../../src/components/metrics/MetricsContainer.jsx';

//RENDER COMPONENT WITH DUMMY PARAMETERS BEFORE ALL
beforeAll(() => {
  render(<MetricsContainer/>);
});

//TESTING FUNCTIONALITY
test('should render two main \'buttons\'; one dropdown with eleven sub-buttons, and another main', async () => {  
  const buttons = await screen.findAllByRole('button');
  
  expect(buttons).toHaveLength(12);
});