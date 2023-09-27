import filterList from "../filter.json";
import { getFilterByName } from "../utils/filters";

const Filters = (prop) => {
  const handelClick = (e) => {
    prop.filter([getFilterByName(e?.target?.name)]);
  };
  //   console.log(Object.keys(filterList));

  return (
    <div>
      <button
        onClick={() => {
          prop.flag(false);
          prop.filterFlag(true);
        }}
      >
        Filter
      </button>
      <button
        onClick={() => {
          prop.flag(true);
          prop.filterFlag(false);
        }}
      >
        Adjustment
      </button>
      <div
        style={{
          display: "flex",
          gap: 12,
          width: 240,
          padding: 10,
          flexWrap: "wrap",
        }}
      >
        {Object.keys(filterList).map((item, index) => {
          return (
            <img
              src="/ballon.jpeg"
              alt={item}
              name={item}
              style={{ objectFit: "cover", filter: `${item}(100)` }}
              onClick={handelClick}
              height={50}
              width={50}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
