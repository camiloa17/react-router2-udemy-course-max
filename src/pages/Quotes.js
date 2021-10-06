import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Camilo', text: 'Learning React is Fun!' },
  { id: 'q2', author: 'Andres', text: 'Learning Node is awesome!' },
];

const Quotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default Quotes;
