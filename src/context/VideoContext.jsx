import { createContext, useEffect, useState } from "react";
import { categories } from "../constants";
import api from "../utils/api";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [videos, setVideos] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const type = selectedCategory.type;
    const url =
      type === "home" || type === "trending"
        ? "/trending"
        : type === "category"
        ? `search?query=${selectedCategory.name}`
        : "";
    api
      .get(url)
      .then((res) => setVideos(res.data.data))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [selectedCategory]);
  return (
    <VideoContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        videos,
        error,
        isLoading,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
