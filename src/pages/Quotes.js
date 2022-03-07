import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

const Quotes = () => {
  const {
    sendRequest,
    status,
    data: loadedquotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="cenetered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedquotes || loadedquotes.length === 0)) {
    return <NoQuotesFound />;
  }
  return <QuoteList quotes={loadedquotes} />;
};

export default Quotes;
