import QuoteList from "../components/quotes/QuoteList";
import LoadingSppinner from "../components/UI/LoadingSpinner";
import { getAllQuotes } from "../components/lib";
import useHttp from "../components/use-http";
import { useEffect } from "react";

const AllQuotes = () => {
  const { sendRequest, status, data } = useHttp(getAllQuotes, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSppinner />
      </div>
    );
  }

  return <QuoteList quotes={data} />;
};
export default AllQuotes;
