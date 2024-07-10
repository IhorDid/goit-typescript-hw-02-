import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, modalIsOpen }) => {
  return (
    <ul className={styles.items}>
      {images.map((image) => (
        <li className={styles.wrapper} key={image.id}>
          <ImageCard image={image} modalIsOpen={modalIsOpen} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
