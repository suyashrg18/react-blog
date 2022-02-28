import { Fragment } from "react";
import { useParams, Route, Link,useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "srg", text: "Quote 1" },
  { id: "q2", author: "srg18", text: "Quote 2" },
];

const QuoteDetails = () => {
  const params = useParams();
  const match = useRouteMatch(); //this hook helps in avoiding hardcoding of routes
  const selectedQuote = DUMMY_QUOTES.find(
    (quote) => quote.id === params.quoteId
  );

  if (!selectedQuote) {
    return <h1>No quote found</h1>;
  }
  return (
    <Fragment>
      <HighlightedQuote
        text={selectedQuote.text}
        author={selectedQuote.author}
      />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;
