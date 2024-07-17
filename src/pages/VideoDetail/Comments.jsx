import { IoMdThumbsUp, IoMdThumbsDown } from "react-icons/io";
import { BsCaretDownFill } from "react-icons/bs";
import millify from "millify";

const Comments = ({ data }) => {
  if (!data) {
    return <p>Loading comments...</p>;
  }

  return (
    <div className="my-6 flex flex-col">
      {/* Count & Input */}
      <h2 className="font-bold text-xl">
        {millify(data.commentsCount)} Comments
      </h2>
      <input
        className="indent-2 bg-transparent outline-none w-full mt-5 py-2"
        placeholder="Add a comment..."
        type="text"
      />
      <hr />

      {/* Comments */}
      {data.data.map((comment, index) => (
        <div key={index} className="flex gap-3 items-start px-1 py-4">
          <img
            src={comment.authorThumbnail[0].url}
            className="rounded-full mt-3 h-13 w-16"
            alt="Author"
          />
          <div className="flex flex-col gap-3">
            <h5 className="flex gap-2 items-center">
              <span className="font-semibold">{comment.authorText}</span>
              <span className="text-sm text-gray-400">
                {comment.publishedTimeText}
              </span>
            </h5>
            <p>{comment.textDisplay}</p>
            <div className="flex items-center gap-5">
              <span className="flex items-center my-1 gap-1">
                <IoMdThumbsUp className="cursor-pointer mr-1 hover:text-blue-500" />
                <p>{comment.likesCount}</p>
              </span>
              <IoMdThumbsDown className="cursor-pointer hover:text-blue-500" />
              <p className="ms-2 hover:text-blue-500 cursor-pointer">Reply</p>
            </div>
            {comment.replyCount > 0 && (
              <div className="flex gap-2 items-center hover:bg-blue-900 rounded-full px-2 w-fit text-blue-300 cursor-pointer">
                <BsCaretDownFill />
                <p>{comment.replyCount} replies</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
