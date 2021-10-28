//testing-library IMPORTS
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';

// REACT IMORT
import * as React from 'react';

//COMPONENT BEING TESTED
import OptionsContainer from '../../src/components/options/OptionsContainer.jsx';

//RENDER COMPONENT WITH DUMMY PARAMETERS BEFORE ALL
beforeAll(() => {
  render(<OptionsContainer/>);
})

//TESTING FUNCTIONALITY
test('should render a single \'combobox\'', async () => {  
  const dropdowns = await screen.findAllByRole('combobox');
  
  expect(dropdowns).toHaveLength(1);
});