const InputWithOption = ({
    type,
    label3,
    name2,
    name,
    data,
    value1,
    value2,
    setData,
    text1,
    text2,
    Placeholder,
    require2
  }) => {
    const handlerData = (e) => {
      if (type === "applicantInformation") {
        setData({
          ...data,
          applicantInformation: {
            ...data.applicantInformation,
            mc: {
              ...data.applicantInformation.mc,
              [e.target.name]: e.target.value,
            },
          },
        });
      }

      if (type === "limitsOfLiablity") {
        setData({
          ...data,
          limitsOfLiablity: {
            ...data.limitsOfLiablity,
            [e.target.name]: e.target.value,
          },
        });
      }
    };

    return (
      <>
      <div className="field">
        <div className="control">
        <input
          className="input"
          type="text"
          placeholder={Placeholder}
          name={name2}
          onChange={handlerData}
        />
        </div>
      </div>
        <p className="help">{label3}</p>
        <div className="control">
          <label className="radio">
            <input
              type="radio"
              name={name}
              value={value1}
              onChange={handlerData}
            />
            {text1}
          </label>
          <label className="radio">
            <input
              type="radio"
              name={name}
              value={value2}
              onChange={handlerData}
              required={require2}
            />
            {text2}
          </label>
        </div>
      </>
    );
  };

  const SmallForm = ({
    label1,
    label2,
    label3,
    name,
    name1,
    name2,
    option,
    data,
    setData,
    require1,
    require2
  }) => {
    
    const handlerData = (e) => {
      setData({
        ...data,
        applicantInformation: {
          ...data.applicantInformation,
          [e.target.name]: e.target.value,
        },
      });
    };

    return (
      <div className="columns">
        <div className="column">
          <label className="label">{label1}{
            require1 && <span className="requiredata">*</span>
          }</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder=""
              name={name1}
              onChange={handlerData}
              required={require1}
            />
          </div>
        </div>
        <div className="column">
          <label className="label">{label2}{label1}{
            require2 && <span className="requiredata">*</span>
          }</label>
          {option === "true" ? (
            <InputWithOption
              type="applicantInformation"
              label3={label3}
              name={name}
              name2={name2}
              data={data}
              setData={setData}
              text1="Yes"
              text2="No"
              value1="yes"
              value2="no"
              require2={require2}
            />
          ) : (
            <input
              className="input"
              type="text"
              placeholder=""
              name={name2}
              onChange={handlerData}
              required={require2}
              
            />
          )}
        </div>
      </div>
    );
  };

  const CityStateZip = ({ data, setData, nameSelect, require1}) => {
    const states = [
      " ",
      "AL",
      "AK",
      "AZ",
      "AR",
      "CA",
      "CO",
      "CT",
      "DE",
      "DC",
      "FL",
      "GA",
      "HI",
      "ID",
      "IL",
      "IN",
      "IA",
      "KS",
      "KY",
      "LA",
      "ME",
      "MD",
      "MA",
      "MI",
      "MN",
      "MS",
      "MO",
      "MT",
      "NE",
      "NV",
      "NH",
      "NJ",
      "NM",
      "NY",
      "NC",
      "ND",
      "OH",
      "OK",
      "OR",
      "PA",
      "RI",
      "SC",
      "SD",
      "TN",
      "TX",
      "UT",
      "VT",
      "VA",
      "WA",
      "WV",
      "WI",
      "WY",
      "AB",
      "BC",
      "MB",
      "NB",
      "NF",
      "NS",
      "ON",
      "QB",
      "SA",
    ];

    const handlerData = (e) => {
      if (nameSelect === "cityStateZip") {
        setData({
          ...data,
          applicantInformation: {
            ...data.applicantInformation,
            cityStateZip: {
              ...data.applicantInformation.cityStateZip,
              [e.target.name]: e.target.value,
            },
          },
        });
      }

      if (nameSelect === "garageCityStateZip") {
        setData({
          ...data,
          applicantInformation: {
            ...data.applicantInformation,
            garageCityStateZip: {
              ...data.applicantInformation.garageCityStateZip,
              [e.target.name]: e.target.value,
            },
          },
        });
      }
    };

    return (
      <div className="columns">
        <div className="column">
          <div className="field">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="city"
                name="city"
                onChange={handlerData}
                required={require1}
              />
            </div>
          </div>
        </div>

        <div className="column is-one-third">
          <div className="select">
            <select name="state" 
             onChange={handlerData}>
              {states.map((state, index) => (
                <option name="state" value={state} key={index}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="column">
          <div className="control">
            <input
              className="input"
              type="number"
              placeholder="zip"
              name="zip"
              onChange={handlerData}
              required={require1}
            />
          </div>
        </div>
      </div>
    );
  };

  const SmallFormWihtSelect = ({
    name,
    label1,
    label2,
    nameSelect,
    data,
    setData,
    require1,
    require2
  }) => {
    const handlerData = (e) => {
      setData({
        ...data,
        applicantInformation: {
          ...data.applicantInformation,
          [e.target.name]: e.target.value,
        },
      });
    };

    return (
      <div className="field">
      <div className="columns">
        <div className="column">
          <label className="label">{label1}{
            require1 && <span className="requiredata">*</span>
          }</label>
          <CityStateZip
            data={data}
            setData={setData}
            nameSelect={nameSelect}
            require1={require1}
          />
        </div>
        <div className="column">
          <label className="label">{label2}{
            require2 && <span className="requiredata">*</span>
          }</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder=""
              name={name}
              onChange={handlerData}
              required={require2}
            />
          </div>
        </div>
      </div>
    </div>
    );
  };

  const SmallFormWihtRadio = ({
    label1,
    label2,
    name,
    name1,
    data,
    setData,
  }) => {
    const handlerData = (e) => {
      setData({
        ...data,
        applicantInformation: {
          ...data.applicantInformation,
          [e.target.name]: e.target.value,
        },
      });
    };

    return (
      <div className="columns">
        <div className="column">
          <label className="label">{label1}</label>
          <div className="control">
            <input
              className="input"
              type="tel"
              name={name1}
              placeholder=""
              onChange={handlerData}
            />
          </div>
        </div>
        <div className="column">
          <label className="label">{label2}</label>
          <label className="radio">
            <input
              type="radio"
              value="yes"
              name={name}
              onChange={handlerData}
            />
            Yes
          </label>
          <label className="radio">
            <input
              type="radio"
              value="no"
              name={name}
              onChange={handlerData}
            />
            No
          </label>
        </div>
      </div>
    );
  };


export {
    SmallForm,
    SmallFormWihtRadio,
    SmallFormWihtSelect,
    InputWithOption
}