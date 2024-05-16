import { useState } from "react";
import millify from "millify";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video, isRow }) => {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/watch?v=${video.videoId}`)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`${isRow ? "row" : ""} cursor-pointer`}
    >
      {/* Resim */}
      <div>
        <img
          alt=""
          src={
            isHover && video.richThumbnail
              ? video.richThumbnail[0].url
              : video.thumbnail[0].url
          }
          className="w-full h-full rounded-lg"
        />
      </div>
      {/* Video alt detay alanı */}
      <div className="flex gap-4 mt-5">
        <img
          className="w-14 h-14 c-pic rounded-full"
          alt="logo"
          src={video.channelThumbnail && video.channelThumbnail[0].url}
        />
        <div>
          <h4 className="font-bold line-clamp-2">{video.title}</h4>
          <p>{video.channelTitle}</p>
          <div className="flex gap-2">
            <p className="flex gap-1">
              <span>{millify(video.viewCount)} |</span>
              <span className="text">Görüntülenme</span>
            </p>
            <p>{video.publishedTimeText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
