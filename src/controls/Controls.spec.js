// tests
// - provide buttons to toggle the `closed` and `locked` states.
// - buttons' text changes to reflect the state the door will be in if clicked
// - the closed toggle button is disabled if the gate is locked
// - the locked toggle button is disabled if the gate is open

// import testing libraries
import React from 'react';
import { render, rerender, fireEvent } from '@testing-library/react';

// import component
import Controls from './Controls';
import Dashboard from '../dashboard/Dashboard';

//tests

test('controls component renders without crashing', () => {
    const wrapper = render(
      <Controls />
    );
  });

test('button text = open when button state = open', () => {
    const gate = render(<Dashboard />)
    if(gate.getByText(/Close Gate/i)){
        gate.getByText(/Open/i)
    }
})

test('top button toggles on click', () => {
    const {getByTestId} = render(<Dashboard />)
    fireEvent.click = getByTestId(/button1/i)
})

test('bottom button toggles on click', () => {
    const {getByTestId} = render(<Dashboard />)
    fireEvent.click = getByTestId(/button2/i)
})