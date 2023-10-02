/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, SubmitHandler } from 'react-hook-form';
import { DisplayComments } from "../tasks/DisplayComments";
import { useParams } from 'react-router-dom';
import { addComments } from '../../context/comment/actions';
import { useCommentDispatch } from '../../context/comment/context';

type Inputs = {
  description: string;
}

export const NewComment = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm<Inputs>();
  const { projectID, taskID } = useParams();
  const commentDispatch = useCommentDispatch();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const comment = {
      description: data.description,
    }
    await addComments(commentDispatch, projectID ?? "", taskID ?? "", comment);
  }
  return (
    <>
      <h1 className="my-2">Comments</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          id='commentBox'
          placeholder="Enter comment"
          {...register('description', { required: true })}
          className={` border rounded-md py-1 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${errors.description ? 'border-red-500' : ''}`}
        />
        <button
          type="submit"
          id='addCommentBtn'
          className="justify-center rounded-md border border-transparent bg-blue-600 px-4 py-1 mx-2 my-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          Add Comment
        </button>
        <DisplayComments />
      </form>
      
    </>
  )
} 