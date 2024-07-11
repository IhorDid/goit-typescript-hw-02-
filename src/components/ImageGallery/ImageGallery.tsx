import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

interface Articles {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}
interface ImageGalleryProps {
  images: Articles[];
  modalIsOpen: (image: Articles) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, modalIsOpen }) => {
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
