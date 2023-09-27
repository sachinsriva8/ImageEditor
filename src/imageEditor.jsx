import { useCallback, useRef, useState } from "react";

import filters from "./filter.json";
import { getFilterByName } from "./utils/filters";
import { downloadImage } from "./utils/image";

const ImageEditor = () => {
  const [image, setImage] = useState(null);
  const [nextFlag, setNextFlag] = useState(false);
  const [adjust, setAdjust] = useState(false);
  const [filter, setFilter] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const domRef = useRef(null);

  const onEditedImageDownload = async () => {
    if (!domRef.current) return;
    await downloadImage(domRef.current);
  };

  const onSliderChange = (e) => {
    const { name, value } = e.target;

    setFiltered((prevFilter) => {
      return [
        ...prevFilter.filter((item) => item.split("(")[0] !== name),
        `${name}(${value})`,
      ];
    });

    /*     let filtrArr = [...filtered];
    if (filtrArr.length == 0) {
      filtrArr.push(`${name}(${value})`);
      setFiltered(filtrArr);
      return;
    }
    filtrArr = filtrArr.filter((item) => item.split("(")[0] !== name);
    filtrArr.push(`${name}(${value})`);
    console.log("arr", filtrArr);
    setFiltered(filtrArr); */
  };

  const onFilterChange = useCallback((e) => {
    setFiltered([getFilterByName(e?.target?.name)]);
  }, []);

  const showfilters = () => {
    return (
      <div style={{ display: "flex", flexWrap: "wrap", width: 250, gap: 10 }}>
        {Object.keys(filters).map((item, index) => {
          return (
            <div key={index} style={{ border: "1px solid black" }}>
              <img
                src="/ballon.jpeg"
                alt={item}
                name={item}
                style={{ filter: `${item}(100)`, objectFit: "cover" }}
                height={50}
                width={50}
                onClick={onFilterChange}
              />
            </div>
          );
        })}
      </div>
    );
  };

  const showAdjustments = () => {
    return (
      <div>
        {Object.keys(filters)
          .filter((item) => {
            return (
              ["hue-rotate", "blur", "drop-shadow", "none"].indexOf(item) == -1
            );
          })
          .map((item, index) => {
            return (
              <div key={index}>
                <input
                  type="range"
                  name={item}
                  id={item}
                  step={10}
                  onChange={onSliderChange}
                  min={0}
                  max={100}
                />
                {item}
              </div>
            );
          })}
      </div>
    );
  };

  const handelChange = (e) => {
    console.log("file", e.target.files);
    console.log("file", e.target.files[0]);
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const showImage = () => {
    return (
      <>
        <button
          onClick={() => {
            setNextFlag(true);
            setFilter(true);
          }}
        >
          next
        </button>
        <img
          ref={domRef}
          src={image}
          alt="Uplaoded Image"
          height={300}
          width={450}
          style={{ objectFit: "cover", filter: `${filtered.join(" ")}` }}
        />
        <div>
          {nextFlag && (
            <>
              <button
                onClick={() => {
                  setFilter(true);
                  setAdjust(false);
                }}
              >
                filters
              </button>{" "}
              <button
                onClick={() => {
                  setFilter(false);
                  setAdjust(true);
                }}
              >
                Adjustments
              </button>
            </>
          )}
          {filter && showfilters()}
        </div>
        <div>{adjust && showAdjustments()}</div>
      </>
    );
  };
  //   const handelImageClick = () => {};

  return (
    <div>
      <input type="file" name="image" id="img" onChange={handelChange} />
      <div>{image ? showImage() : ""}</div>
      <div>
        {image ? <button onClick={onEditedImageDownload}>Downlaod</button> : ""}
      </div>
    </div>
  );
};

export default ImageEditor;
