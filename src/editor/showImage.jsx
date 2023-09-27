const ShowImage = (prop) => {
  return (
    <div>
      <div>
        <img
          src={prop.img}
          alt="uploadedImage"
          style={{ filter: `${prop.filter.join(" ")}`, objectFit: "cover" }}
          height={400}
          width={400}
          ref={prop.reference}
        />
      </div>
      <button onClick={() => prop.flag(true)}>Next</button>
    </div>
  );
};

export default ShowImage;
