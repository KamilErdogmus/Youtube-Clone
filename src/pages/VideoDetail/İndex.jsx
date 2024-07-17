import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import ReactPlayer from "react-player";
import ChannelInfo from "./ChannelInfo";
import VideoInfo from "./VideoInfo";
import Comments from "./Comments";
import VideoCard from "../../components/VideoCard";
import Loader from "./Loader";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Access search parameters
  const [searchParams] = useSearchParams();
  // Access 'v' parameter from the URL
  const id = searchParams.get("v");

  // Fetch video and comments data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const videoResponse = await api.get(`/video/info?id=${id}&extend=1`);
        setVideo(videoResponse.data);

        const commentsResponse = await api.get(`/comments?id=${id}`);
        setComments(commentsResponse.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!video) {
    return <p>No video found</p>;
  }

  return (
    <div className="detail-page h-screen overflow-auto">
      <div>
        {/* Video Content */}
        <div className="h-[50vh] lg:h-[60vh] rounded-md overflow-hidden">
          <ReactPlayer
            controls
            width="100%"
            height="100%"
            url={`https://www.youtube.com/watch?v=${id}`}
          />
        </div>

        {!video ? (
          <p>Loading...</p>
        ) : (
          <>
            {/* Title */}
            <h1 className="my-3 text-xl font-bold">{video.title}</h1>
            {/* Channel Info */}
            <ChannelInfo video={video} />
            {/* Video Info */}
            <VideoInfo video={video} />
            {/* Comments */}
            <Comments data={comments} />
          </>
        )}
      </div>
      <div className="flex flex-col gap-5 p-1 rounded-3">
        {video?.relatedVideos?.data.map(
          (item) =>
            item.type === "video" && (
              <VideoCard key={item.videoId} video={item} isRow />
            )
        )}
      </div>
    </div>
  );
};

export default VideoDetail;
