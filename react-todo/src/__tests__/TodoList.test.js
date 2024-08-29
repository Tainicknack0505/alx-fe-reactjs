// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';

test('renders TodoList component', () => {
  render(<TodoList />);
  expect(screen.getByText('Todo List')).toBeInTheDocument();
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Learn Jest')).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'New Todo' } });
  fireEvent.click(screen.getByText('Add Todo'));
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('toggles a todo', () => {
  render(<TodoList />);
  fireEvent.click(screen.getByText('Learn React'));
  expect(screen.getByText('Learn React')).toHaveStyle('text-decoration: line-through');

  // Click again to untoggle
  fireEvent.click(screen.getByText('Learn React'));
  
  // Assert that the style is back to normal
  expect(screen.getByText('Learn React')).toHaveStyle('text-decoration: none');
});

test('deletes a todo', async () => {
    render(<TodoList />);
    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[0]); // Click the first delete button
    
    await waitFor(() => {
      // Wait until the 'Learn React' item is removed from the DOM
      expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    });
});
