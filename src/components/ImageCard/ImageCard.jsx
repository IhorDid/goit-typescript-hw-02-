import styles from "./ImageCard.module.css";

const ImageCard = ({ image, modalIsOpen }) => {
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
