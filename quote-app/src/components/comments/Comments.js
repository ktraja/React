import { useEffect, useState, useCallback } from "react";
import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import { getComments } from "../lib";
import useHttp from "../use-http";
import { useParams } from "react-router";
import CommentsList from "./CommentsList";
import LoadingSpinner from "../UI/LoadingSpinner";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { sendRequest, data, status } = useHttp(getComments);
  const param = useParams();
  const { quoteId } = param;

  const commentAddHandler = useCallback(() => {
    sendRequest(quoteId);
    setIsAddingComment(false);
  }, [quoteId, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  function tst() {
    let comments;
    if (status === "pending") {
      comments = (
        <div className="centered">
          <LoadingSpinner />
        </div>
      );
    }
    if (status === "completed" && data && data.length > 0) {
      comments = <CommentsList comments={data} />;
    }
    if (status === "completed" && (!data || data.length === 0)) {
      comments = <p>No Comments added Yet.Be the first to Comment.</p>;
    }
    return comments;
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm onAddedComment={commentAddHandler} />}
      {tst()}
    </section>
  );
};

export default Comments;
