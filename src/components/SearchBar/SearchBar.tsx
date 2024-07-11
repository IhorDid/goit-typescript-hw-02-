import { FormEvent } from "react";
import styles from "./SearchBar.module.css";
import toast from "react-hot-toast";

interface SearchProps {
  onSearch: (newQuery: string) => void;
}

const SearchBar: React.FC<SearchProps> = ({ onSearch }) => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const queryInput = form.elements.namedItem("query") as HTMLInputElement;
    if (queryInput.value.trim() === "") {
      toast.error("Empty String!");
      return;
    }
    onSearch(queryInput.value);
    form.reset();
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
