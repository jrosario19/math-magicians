import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Calculator from './components/Calculator';

describe('Reder Home Page', () => {
  test('Test to render home page', () => {
    render(<App />);
    expect(document.body.textContent).toMatch(/Welcome to our page!/i);
  });

  test('Test to render Calculator link', () => {
    render(<App />);
    const navLinkCalculator = document.querySelector('[href="/calculator"]');
    expect(navLinkCalculator.innerHTML).toMatch(/Calculator/i);
  });
  
  
});