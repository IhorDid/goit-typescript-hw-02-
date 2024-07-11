import { Audio } from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <Audio
      height="80"
      width="80"
      color="green"
      ariaLabel="loading"
      wrapperStyle={{}}
      wrapperClass={styles.loader}
    />
  );
};

export default Loader;
