/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
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
  let [isOpen, setIsOpen] = useState(true);
  let { projectID, taskID } = useParams();

  let navigate = useNavigate();

  // Use react-hook-form to create form submission handler and state.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentDetailsPayload>();
  const commentDispatch = useCommentsDispatch();
  const commentState = useCommentsState();

  const { commentsData, isLoading, isError, errorMessage } = commentState;
  console.log("...", commentState);
  useEffect(() => {
    fetchComments(commentDispatch, projectID ?? "", parseInt(taskID ?? ""));
  }, [commentDispatch, projectID, taskID]);
  function closeModal() {
    setIsOpen(false);
    navigate("../../");
  }

  const onSubmit: SubmitHandler<CommentDetailsPayload> = async (data) => {
    try {
      const { description } = data;

      // Call the createComment function to add the comment
      createComment(
        commentDispatch,
        projectID ?? "",
        taskID ?? "",
        description 
      );
      closeModal();
    } catch (error) {
      console.error("Operation failed:", error);
    }
  };

  return (
    <>
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
              <p className="text-red-500 text-xs mt-1">Comment is required.</p>
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
      <div className=" comment mt-8">
        <h3 className="text-xl font-semibold mb-4">Comments</h3>
        {isLoading ? (
          <p>Loading comments...</p>
        ) : isError ? (
          <p>Error: {errorMessage}</p>
        ) : (
          <ul>
            {commentsData.map((comment, index) => (
              <li key={index}>
                <p>
                  <strong>User:</strong> {comment.user.name}
                </p>
                <p>
                  <strong>Description:</strong> {comment.description}
                </p>
                <p>
                  <strong>Created At:</strong> {comment.createdAt}
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