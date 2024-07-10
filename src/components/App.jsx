import ImageGallery from "./ImageGallery/ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./SearchBar/SearchBar";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { fetchArticles } from "../api";
import Loader from "./Loader/Loader";
import "modern-normalize";
import "./App.css";
import ImageModal from "./ImageModal/ImageModal";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const searchArticles = async (newQuery) => {
    setQuery(`${Date.now()}/${newQuery}`);
    setArticles([]);
    setPage(1);
  };

  const handleMore = () => {
    setPage(page + 1);
  };

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchArticles(query.split("/")[1], page);
        setArticles((prev) => [...prev, ...data.results]);
        if (page >= data.total_pages) {
          setLoadMore(true);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  return (
    <>
      <SearchBar onSearch={searchArticles} />
      {articles.length > 0 && (
        <ImageGallery images={articles} modalIsOpen={handleOpenModal} />
      )}
      {articles.length > 0 && !loading && !loadMore && (
        <LoadMoreBtn onMore={handleMore} />
      )}
      {loading && <Loader />}
      {error && <p>Oop, there was an error, please try reloading or submit</p>}

      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={handleCloseModal}
        selectedImage={selectedImage}
      />
      <Toaster position="top-center" reverseOrder={true} />
    </>
  );
};

export default App;
