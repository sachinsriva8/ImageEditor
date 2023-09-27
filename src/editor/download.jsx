import { downloadImage } from "../utils/image";

const Download = (prop) => {
  const handleClick = async () => {
    await downloadImage(prop.reference.current);
  };
  return (
    <div>
      <button onClick={handleClick}>Downlaod</button>
    </div>
  );
};

export default Download;
