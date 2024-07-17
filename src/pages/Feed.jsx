import { useContext, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { VideoContext } from "../context/VideoContext";
import VideoCard from "../components/VideoCard";
import Loader from "./VideoDetail/Loader";

const Feed = () => {
  const { videos, isLoading, error, setSelectedCategory } =
    useContext(VideoContext);

  // Assuming you want to load 'home' videos initially
  useEffect(() => {
    setSelectedCategory({ type: "home" });
  }, [setSelectedCategory]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="videos">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <p>Error: {error}</p>
        ) : videos?.length > 0 ? (
          videos?.map(
            (item) =>
              item.type === "video" && (
                <VideoCard video={item} key={item?.videoId} />
              )
          )
        ) : (
          <p>No videos found.</p>
        )}
      </div>
    </div>
  );
};

export default Feed;
