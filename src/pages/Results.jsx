import { useSearchParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import api from "../utils/api";
import VideoCard from "../components/VideoCard";

const Results = () => {
  const [page, setPage] = useState(1);
  const [token, setToken] = useState();
  const [data, setData] = useState([]);

  const [searchParams] = useSearchParams();
  //   Urlden aratılan terime uygun verileri alır
  const query = searchParams.get("search_query");

  useEffect(() => {
    const params = {
      query: query,
      token: page > 1 ? token : undefined,
    };
    api.get("/search", { params }).then((res) => {
      // Verilerin devamını almamızı sağlayacak token state

      setToken(res.data.contination);

      setData((prev) => prev.concat(res.data.data));
    });
  }, [query, page]);
  return (
    <div className="flex gap-3">
      <Sidebar />
      <div className="overflow-auto mx-auto">
        <h2 className="text-xl my-5">
          <span className="font-bold">{query}</span> için sonuçlar
        </h2>
        <div className="flex flex-col justify-center gap-4">
          {data.map(
            (item) =>
              item.type === "video" && (
                <VideoCard video={item} key={item.id} isRow={true} />
              )
          )}
          <button
            onClick={() => setPage(page + 1)}
            className="w-full  bg-zinc-600 py-3 px-5 rounded-md my-10 hover:bg-zinc-900 transition"
          >
            Daha Fazla
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
