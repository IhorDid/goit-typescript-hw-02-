import styles from "./SearchBar.module.css";
import toast from "react-hot-toast";
const SearchBar = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (evt.target.elements.query.value.trim() === "") {
      toast.error("Empty String!");
      return;
    }
    onSearch(evt.target.elements.query.value);
    evt.target.reset();
  };
  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </>
  );
};

export default SearchBar;
