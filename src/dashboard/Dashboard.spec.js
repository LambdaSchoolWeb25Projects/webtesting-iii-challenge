// can't test the toggle bc it is declared in the dashboard but you can use a timeout
// can test the text that appears

// tests to run
// renders without crashing and test default state
// toggleLocked text Unlocked, Open
// toggleClosed button text Lock, Close

// import testing libraries
import React from 'react';
import { render } from '@testing-library/react';

// import component
import Dashboard from './Dashboard';

// unit tests

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('dashboard component renders without crashing', () => {
    const wrapper = render(
      <Dashboard />
    );
  });

test('unlocked displays when button displays lock gate', () => {
    const container = render(<Dashboard/>)
    if (container.getByText(/Lock Gate/i)) {
        container.getByText(/unlocked/i);
    }
});

