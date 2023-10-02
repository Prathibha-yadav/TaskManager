import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form"; // Import the comment-related function
import { CommentDetailsPayload } from "../../context/comment/types";
import {
  useCommentsDispatch,
  useCommentsState,
} from "../../context/comment/context";
import { createComment, fetchComments } from "../../context/comment/actions";

const NewComment = () => {
  console.log("hello");
  const [isOpen, setIsOpen] = useState(true);
  const { projectID, taskID } = useParams();

  const navigate = useNavigate();

  // Use react-hook-form to create form submission handler and state.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentDetailsPayload>();
  const commentDispatch = useCommentsDispatch();
  const commentState = useCommentsState();

  const { commentsData, isLoading, isError, errorMessage } = commentState;
  useEffect(() => {
    fetchComments(commentDispatch, projectID ?? "", parseInt(taskID ?? ""));
  }, [commentDispatch, projectID, taskID]);

  // Sort comments in reverse chronological order
  const sortedComments = commentsData.slice().sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  function closeModal() {
    setIsOpen(false);
    navigate("../../");
  }

  const onSubmit: SubmitHandler<CommentDetailsPayload> = async (data) => {
    try {
      const { description } = data;

      createComment(
        commentDispatch,
        projectID ?? "",
        taskID ?? "",
        description
      );
    } catch (error) {
      console.error("Operation failed:", error);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="mt-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Comment
              </label>
              <textarea
                id="commentBox"
                {...register("description", { required: true })}
                className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your comment..."
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-xs mt-1">
                  Comment is required.
                </p>
              )}
            </div>
            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                id="addCommentBtn"
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
              >
                Add Comment
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="ml-2 bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Comments</h3>
        {isLoading ? (
          <p>Loading comments...</p>
        ) : isError ? (
          <p>Error: {errorMessage}</p>
        ) : (
          <ul>
            {sortedComments.map((comment, index) => (
              <li key={index} className="comment">
                <p>
                  <strong>User:</strong> {comment.User.name}
                </p>
                <p>
                  <strong>Created At:</strong>{" "}
                  {new Date(comment.createdAt).toLocaleString()}{" "}
                  {/* Format timestamp */}
                </p>
                <p>
                  <strong>Description:</strong> {comment.description}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default NewComment;