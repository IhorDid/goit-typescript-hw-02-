import styles from "./ImageCard.module.css";

interface Articles {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}

interface ImageCardProps {
  image: Articles;
  modalIsOpen: (image: Articles) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, modalIsOpen }) => {
  const handleClick = () => {
    modalIsOpen(image);
  };
  return (
    <div className={styles.wrapper}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageCard;
