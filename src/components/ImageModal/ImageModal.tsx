import styles from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface Articles {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}

interface ImageModalProps {
  selectedImage: Articles | null;
  modalIsOpen: boolean;
  closeModal: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  modalIsOpen,
  closeModal,
  selectedImage,
}) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {selectedImage && (
          <div>
            <img
              className={styles.modal}
              src={selectedImage.urls.regular}
              alt={selectedImage.alt_description}
            />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ImageModal;
