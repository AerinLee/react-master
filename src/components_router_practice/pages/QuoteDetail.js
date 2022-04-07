import { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import Comments from "./../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Erin", text: "Learning React is Fun!" },
  { id: "q2", author: "Erin", text: "Learning React is great!" },
  { id: "q3", author: "Erin", text: "Learning Redux is Fun!" },
  { id: "q4", author: "Erin", text: "Learning Next.js is Fun!" },
];

const QuoteDetail = () => {
  const match = useRouteMatch()
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No Data!</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments></Comments>
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
