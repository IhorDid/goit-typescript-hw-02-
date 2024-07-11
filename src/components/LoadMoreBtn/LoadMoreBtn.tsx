interface LoadBtnProps {
  onMore: () => void;
}

const LoadMoreBtn: React.FC<LoadBtnProps> = ({ onMore }) => {
  return <button onClick={onMore}>Load more</button>;
};

export default LoadMoreBtn;
