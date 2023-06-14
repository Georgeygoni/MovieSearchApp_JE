import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from '../app/layout/App';
import MovieSearch from '../features/movie/MovieSearch';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

test('Show Search Input', async () => {
  render(<BrowserRouter>
            <App />
        </BrowserRouter>);
  const input = screen.getByLabelText('Search Movie by Title');
  const button = screen.getByText('Search Movie');
  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test('Show Recent Search Queries', async () =>{
  render(<BrowserRouter>
    <App />
</BrowserRouter>);
  const listItems = await screen.getByText('Recent Search Queries');
  expect(listItems).toBeInTheDocument();
});

test('Clicking of View Details button Loads Movie Details Page', ()=>{
  render(<BrowserRouter>
    <App />
</BrowserRouter>);
  const button = screen.getByRole('button', {
    name: /VIEW DETAILSW/i
  });
  fireEvent.click(button);
  expect(window.location.pathname).toBe('/movie/movie/:imdbID');
});

test('Clicking of Search Movie button Loads Moview', async () =>{
  render(<BrowserRouter>
    <App />
    </BrowserRouter>);  
  const input = screen.getByPlaceholderText('Search Movie by Title');
    const button = screen.getByText('Search Movie');
    fireEvent.change(input, { target: { value: 'Die Hard' } });
    fireEvent.click(button);
    expect(screen.findAllByRole('img')).toBeInTheDocument();
 
  });




