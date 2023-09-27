import { useRef, useState } from "react";
import Filters from "./filter";
import ShowImage from "./showImage";
import Slider from "./slider";
import Download from "./download";
import ImportImages from "./importImage";

const Editor = () => {
  const [image, setImage] = useState(null);
  const [filterFlag, setFilterFlag] = useState(false);
  const [filter, setFilter] = useState([]);
  const [adjustmentFlag, setAdjustmentFlag] = useState(false);
  const domRef = useRef(null);

  return (
    <div>
      <ImportImages image={setImage} />
      <div>
        {image && (
          <ShowImage
            img={image}
            flag={setFilterFlag}
            filter={filter}
            adjustmet={setAdjustmentFlag}
            reference={domRef}
          />
        )}
      </div>
      <div>{image && <Download reference={domRef} />}</div>
      <div>
        {filterFlag && (
          <Filters
            filter={setFilter}
            flag={setAdjustmentFlag}
            filterFlag={setFilterFlag}
          />
        )}
      </div>
      <div>
        {adjustmentFlag && (
          <Slider
            filter={setFilter}
            flag={setAdjustmentFlag}
            filterFlag={setFilterFlag}
          />
        )}
      </div>
    </div>
  );
};

export default Editor;
