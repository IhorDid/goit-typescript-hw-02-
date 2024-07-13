import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { fetchArticles } from "../../api";
import Loader from "../Loader/Loader";
import "modern-normalize";
import "./App.css";
import ImageModal from "../ImageModal/ImageModal";

interface Articles {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}
interface ArticleResponse {
  results: any[];
  total: number;
  total_pages: number;
}

const App = () => {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [articles, setArticles] = useState<Articles[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Articles | null>(null);

  const searchArticles = async (newQuery: string): Promise<void> => {
    setQuery(`${Date.now()}/${newQuery}`);
    setArticles([]);
    setPage(1);
  };

  const handleMore = (): void => {
    setPage(page + 1);
  };

  const handleOpenModal = (image: Articles): void => {
    setSelectedImage(image);
    setIsOpen(true);
  };
  const handleCloseModal = (): void => {
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
        const data: ArticleResponse = await fetchArticles(
          query.split("/")[1],
          page
        );
        setArticles((prev) => [...prev, ...data.results]);
        console.log(data.results);
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
