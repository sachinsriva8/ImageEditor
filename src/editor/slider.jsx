import filterList from "../filter.json";
const Slider = (prop) => {
  const handelChange = (e) => {
    const { name, value } = e.target;

    prop.filter((prevState) => {
      return [
        ...prevState.filter((item) => item.split("(")[0] !== name),
        `${name}(${value})`,
      ];
    });
  };

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
      {Object.keys(filterList)
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
                max={100}
                min={0}
                step={10}
                onChange={handelChange}
              />
              {item}
            </div>
          );
        })}
    </div>
  );
};

export default Slider;
