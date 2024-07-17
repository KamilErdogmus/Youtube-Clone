import { IoMdThumbsUp, IoMdThumbsDown } from "react-icons/io";
import millify from "millify";

const ChannelInfo = ({ video }) => {
  if (!video || !video.channelThumbnail || !video.channelThumbnail[0]) {
    return <p>Loading channel info...</p>;
  }

  return (
    <div className="flex justify-between px-5 py-10">
      {/* Left Side */}
      <div className="flex gap-3 items-center">
        <img
          className="rounded-full w-12 h-12"
          src={video.channelThumbnail[0].url}
          alt="Channel Thumbnail"
        />
        <div className="flex flex-col gap-2">
          <h2>{video.channelTitle}</h2>
          <h3 className="text-gray-400">{video.subscriberCountText}</h3>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex gap-3 items-center">
        <button className="rounded-[60px] bg-slate-500 px-[20px] text-black h-14 text-xl hover:scale-110 hover:bg-gray-100 transition">
          Subscribe
        </button>
        <div className="flex items-center justify-center bg-gray-400 rounded-full h-12">
          <button className="p-4 hover:opacity-75 text-2xl mr-1 flex gap-3">
            <IoMdThumbsUp />
            <span className="text-sm border-r pr-2 items-center pt-1">
              {millify(video.likeCount)}
            </span>
          </button>
          <button className="pr-5 hover:opacity-75 text-2xl">
            <IoMdThumbsDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChannelInfo;
