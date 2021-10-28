//testing-library IMPORTS
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';

// REACT IMORT
import * as React from 'react';

//REACT-ROUTER IMPORTS
import { BrowserRouter, Switch, Route } from "react-router-dom";

//COMPONENT BEING TESTED
import NavBar from '../../src/components/NavBar.jsx';

//RENDER COMPONENT WITH DUMMY PARAMETERS BEFORE ALL
beforeAll(() => {
  render(
    <BrowserRouter>
      <NavBar/>
    </BrowserRouter>
  );
})

//TESTING FUNCTIONALITY
test('should render four \'a\' links', async () => {  
  const buttons = await screen.findAllByRole('link');

  expect(buttons).toHaveLength(4);
});