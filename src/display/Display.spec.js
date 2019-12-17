// tests to run

// import testing libraries
import React from 'react';
import { render } from "@testing-library/react";

// import component
import Display from './Display';

test('display component renders without crashing', () => {
    const wrapper = render(
      <Display />
    );
  });

