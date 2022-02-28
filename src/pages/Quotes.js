import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTES = [
  { id: "q1", author: "srg", text: "Quote 1" },
  { id: "q2", author: "srg18", text: "Quote 2" },
];

const Quotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default Quotes;
