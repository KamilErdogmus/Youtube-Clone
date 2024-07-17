import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { FaVideo } from "react-icons/fa6";
import { MdVideoLibrary } from "react-icons/md";

const Header = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Arama içerisi boş olursa çalıştırma
    const text = e.target[0].value;
    if (text.trim() === "") return;

    navigate(`/results?search_query=${text}`);
  };

  return (
    <header className="flex justify-between items-center p-4">
      <Link className="flex items-center gap-2" to="/">
        <img className="w-[50px]" src="/youtube.png" />
        <h1 className="text-2xl font-mono max-sm:hidden">YouTube</h1>
      </Link>

      <form
        onSubmit={handleSubmit}
        className="gruop flex border border-gray-400 rounded-[20px] overflow-hidden"
      >
        <input
          className="group-hover:border-blue-500 group-hover:border border border-transparent rounded-l-[20px] focus:border-blue-500 bg-black text-white py-2 px-6 outline-none "
          placeholder="Ara..."
          type="text"
        />
        <button className="px-4 text-2xl bg-zinc-800 ">
          <CiSearch />
        </button>
      </form>

      <div className="flex gap-3 text-2xl cursor-pointer">
        <IoIosNotifications className="hover:text-gray-400 transition duration-300" />
        <FaVideo className="hover:text-gray-400 transition duration-300" />
        <MdVideoLibrary className="hover:text-gray-400 transition duration-300" />
      </div>
    </header>
  );
};

export default Header;
