import { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import { getAllQuotes } from "../../lib/api";
import NoQuotesFound from "../quotes/NoQuotesFound";
import QuoteList from "../quotes/QuoteList";
import LoadingSpinner from "../UI/LoadingSpinner";

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuote,
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

  if(error) {
      return <p className="centered focused">{error}</p>
  }

  if(status === "completed" && (!loadedQuote || loadedQuote.length === 0)) {
      return <NoQuotesFound />
  }

  return <QuoteList quotes={loadedQuote}></QuoteList>;
};

export default AllQuotes;
