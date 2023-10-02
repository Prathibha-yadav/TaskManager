import { useEffect } from "react";
import { useCommentDispatch, useCommentState } from "../../context/comment/context"
import { fetchComment } from "../../context/comment/actions";
import { useParams } from "react-router-dom";
import { useMembersState } from "../../context/members/context";

export const DisplayComments: React.FC = () => {
  const commentState = useCommentState();
  const { comments } = commentState;
  const commentDispatch = useCommentDispatch();
  const memberState = useMembersState();
  const { projectID, taskID } = useParams();
  useEffect(() => {
    fetchComment(commentDispatch, projectID!, taskID!);
  }, [commentDispatch, projectID, taskID]);
  const getDate = (date: Date): string => {
    const newDate = new Date(date);
    return `${newDate.toLocaleDateString("en-In")} ${newDate.toLocaleTimeString(
      "en-In")}`
  }
  const getuser = (owner: number) => {
    const user = memberState?.users.filter((member) => member.id === owner)[0];
    return user?.name;
  }
  return (
    <>
      {Array.isArray(comments) && comments.map((comment) => {
        return (
          <div key={comment.id} className="comment flex text-gray-800">

              <p className=" mr-3">{comment.description}</p>
              <p className=" mr-3">{getDate(comment.createdAt)}</p>
              <p className=" mr-3">{getuser(comment.owner)}</p>

            </div>
        )
      })}
    </>
  )
}