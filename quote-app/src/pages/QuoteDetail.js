import { Fragment, useEffect } from "react";
import { Route, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NotFound from "./NotFound";
import useHttp from "../components/use-http";
import { getSingleQuote } from "../components/lib";

// const DummyList = [
//   { id: "1", author: "Raja", text: "To be or not to be?" },
//   { id: "2", author: "Shakespear", text: "All the world is a stage" },
// ];

const QuoteDetail = () => {
  const { sendRequest, data: quote } = useHttp(getSingleQuote);

  const match = useRouteMatch();
  const param = useParams();

  useEffect(() => {
    sendRequest(param.quoteId);
  }, [sendRequest, param.quoteId]);

  if (!quote) {
    return <NotFound />;
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
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
