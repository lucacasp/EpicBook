import React from 'react';
import App from './App';
import AddComment from './components/AddComment';
import SearchBook from './components/SearchBook';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';


// Es. 1
import Welcome from './components/Welcome';

test('il componente Welcome viene montato correttamente', () => {
  const { getByText } = render(<Welcome />);
  const welcomeElement = getByText(/Welcome to EpicBook/i);
  expect(welcomeElement).toBeInTheDocument();
});
afterEach(cleanup);

// Es. 2 
// Verifica che vengano effettivamente renderizzate tante bootstrap cards quanti sono i libri nel file json utilizzato

test('verifica che tutte le card siano renderizzate', () => {
  render(<App />);
  const cards = screen.getAllByTestId('cards');
  expect(cards).toHaveLength(fantasy.length);
});

// Es. 3
// Verifica che il componente CommentArea venga renderizzato correttamente

test('verifica che il componente CommentArea venga renderizzato correttamente', () => {
  render (<AddComment />);
  const commentArea = screen.getAllByPlaceholderText(/Inserisci qui il tuo commento/i);
  expect(commentArea).toBeInTheDocument();
});
cleanup();
// Es. 4
// Verifica magari con più testi che il filtraggio dei libri tramite navbar si comporti come previsto
render (<SearchBook />);
const input = screen.getByPlaceholderText(/Cerca un libro.../i); 
fireEvent.change(input, {target: {value: 'Sword'}});
const libriFiltrati = screen.getAllByTestId('ricerca');
expect(libriFiltrati).toHaveLength(1);
cleanup();
// Es. 5 
// Verifica che, cliccando su un libro, il suo bordo cambi colore
test('verifica che, cliccando su un libro, il suo bordo cambi colore', () => {
  render (<App />);
  const firstBook = screen.getAllByTestId('cards')[0];
  fireEvent.click(firstBook);
  expect(firstBook).toHaveStyle({border: '2px solid red'});
})