import { useContext } from "react";
import Sidebar from "../components/Sidebar";
import { VideoContext } from "../context/VideoContext";
import VideoCard from "../components/VideoCard";

const Feed = () => {
  const { videos, isloading, error } = useContext(VideoContext);
  return (
    <div className="flex">
      <Sidebar />
      <div className="videos">
        {isloading ? (
          <p>Yükleniyor...</p>
        ) : error ? (
          <p>error</p>
        ) : (
          videos?.map(
            (item) =>
              item.type === "video" && (
                <VideoCard video={item} key={item.video.Id} />
              )
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
