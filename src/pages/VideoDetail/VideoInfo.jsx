import { useState } from "react";
import millify from "millify";

const VideoInfo = ({ video }) => {
  const [expand, setExpand] = useState(false);
  const text = expand
    ? video.description
    : video.description?.slice(0, 300) + "   Read more";

  const viewCount = isNaN(video.viewCount) ? 0 : Number(video.viewCount);

  return (
    <div
      onClick={() => setExpand(!expand)}
      className="bg-[#272727] p-2 cursor-pointer rounded hover:bg-opacity-70"
    >
      <div className="flex gap-5 p-1 mb-4">
        <p className="font-bold">{millify(viewCount)} Views</p>
        <span className="font-bold">
          {new Date(video.uploadDate).toLocaleDateString("tr", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
      </div>
      {/* Description */}
      <div>
        {text?.split("\n").map((line, index) => (
          <div key={index}>
            {line}
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoInfo;
