const OptionsRadioOperation = ({ data, setData, name }) => {
    const options = [
      "0-50 miles",
      "51-100 miles",
      "101-200 miles",
      "201-300 miles",
      "301-500 miles",
      "501+ miles",
    ];

    const handleOnChange = (op) => {
      setData({
        ...data,
        radiusOfOperations: {
          ...data.radiusOfOperations,
          [op]: !data.radiusOfOperations[op],
        },
      });
    };

    return (
      <>
        <div className="title">Radius of Operations</div>
        <div className="columns">
          {options.map((op, index) => {
            return (
              <div className="column" key={index}>
                <label
                  className="checkbox"
                  htmlFor={`custom-checkbox-${index}`}
                  key={index}
                >
                  <input
                    type="checkbox"
                    key={index}
                    name={op}
                    value={op}
                    checked={data.radiusOfOperations[op]}
                    onChange={() => handleOnChange(op)}
                  />
                  &nbsp; {options[index]}
                </label>
              </div>
            );
          })}
        </div>
      </>
    );
  };


export default OptionsRadioOperation;