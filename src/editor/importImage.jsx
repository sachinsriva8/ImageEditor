import { memo } from "react";

const ImportImage = (prop) => {
  const handelChange = (e) => {
    prop.image(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <input type="file" name="image" id="img" onChange={handelChange} />
    </>
  );
};

const ImportImages = memo(ImportImage);

export default ImportImages;
