import React, { useEffect } from "react";
import Button from "../../components/common/Button";
import { withAsync } from "../../helpers/withAsync";
import useToken from "../../hooks/useToken";
import { getComments, postComment } from "../../api/CommentApi";
import useFetchProfile from "../../hooks/useFetchProfile";
import { IComment } from "../../types/comment.type";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { FileServerURL } from "../../api/FileApi";
import { Link } from "react-router-dom";

interface CommentProps {
  publicationId: string;
}

const Comments: React.FC<CommentProps> = ({ publicationId }) => {
  const token = useToken();
  const [content, setContent] = React.useState<string>();
  const [comments, setComments] = React.useState<IComment[]>();
  const profile = useFetchProfile();

  const addComment = async () => {
    const { error } = await withAsync(() =>
      postComment(token, profile?._id, content, publicationId)
    );
    if (error instanceof AxiosError) {
      const error_message: string =
        error?.response?.data.description ||
        error?.response?.data ||
        error.message;
      toast.error(error_message);
    }
  };

  const fetchComments = async () => {
    const { error, response } = await withAsync(() =>
      getComments(token, publicationId)
    );
    if (error instanceof AxiosError) {
      const error_message: string =
        error?.response?.data.description ||
        error?.response?.data ||
        error.message;
      toast.error(error_message);
    } else {
      setComments(response?.data as Array<IComment>);
      console.log(response?.data);
    }
  };

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publicationId]);

  return (
    <div className="w-full bg-white rounded-lg -mt-6 my-4 mx-6 z-50">
      <h3 className="font-bold -mt-6 pb-2">Commentaires</h3>
      <div className="flex flex-col overflow-y-auto custom-height-comment">
        <form>
          <div className="flex flex-col">
            {comments?.map((comment) => (
              <div className=" rounded-md p-3 border my-1 ">
                <div className="flex gap-3 items-center">
                  <Link
                    className="flex gap-3 items-center"
                    to={`/profile/${comment.profile._id}`}
                  >
                    <img
                      src={
                        comment.profile.image
                          ? FileServerURL + comment.profile.image
                          : "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                      }
                      className="object-cover w-8 h-8 rounded-full   shadow-emerald-400 "
                      alt="comments"
                    />

                    <h3 className="font-bold">{comment.profile.name}</h3>
                  </Link>
                </div>

                <p className="flex text-left text-gray-600 mt-2">
                  {comment.content}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white w-full custom-form-comment">
            <input
              className="bg-gray-100 rounded  border leading-normal resize-none w-full h-20 py-2 pl-3 font-normal placeholder-gray-700 focus:outline-none focus:bg-white"
              name="body"
              placeholder="Your comment..."
              onChange={(e) => setContent(e.target.value)}
            />

            <Button
              name="Post comment"
              className="w-full flex justify-end px-3 mt-2"
              onClick={addComment}
              isDisabled={!content ? true : false}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comments;
