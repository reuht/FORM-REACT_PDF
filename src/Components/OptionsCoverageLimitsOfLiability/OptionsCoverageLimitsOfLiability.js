import { InputWithOption } from "../SmallForms/SmallForms"; 

const OptionsCoverageLimitsOfLiability = ({ data, setData }) => {

    const handleOnChange = (op) => {
      setData({
        ...data,
        coverage: {
          ...data.coverage,
          [op]: !data.coverage[op],
        },
      });
    };
  
    const handlerData = (e) => {
      setData({
        ...data,
        limitsOfLiablity: {
          ...data.limitsOfLiablity,
          [e.target.name]: e.target.value,
        },
      });
    };
  
    return (
      <>
        <div className="columns">
          <div className="column">
            <div className="title">Coverages</div>
            <label className="checkbox">
              <input
                type="checkbox"
                name={"Bodily Injury Liability/Property Damage Liability"}
                value={"Bodily Injury Liability/Property Damage Liability"}
                checked={
                  data.coverage[
                    "Bodily Injury Liability/Property Damage Liability"
                  ]
                }
                onChange={() =>
                  handleOnChange(
                    "Bodily Injury Liability/Property Damage Liability"
                  )
                }
              />
              &nbsp; Bodily Injury Liability/Property Damage Liability
            </label>
            <br />
            <br />
            <label className="checkbox">
              <input
                type="checkbox"
                name={"Hired"}
                value={"Hired"}
                checked={data.coverage["Hired"]}
                onChange={() => handleOnChange("Hired")}
              />
              &nbsp; Hired
            </label>
            <br />
            <br />
            <label className="checkbox">
              <input
                type="checkbox"
                name={"N/O"}
                value={"N/O"}
                checked={data.coverage["N/O"]}
                onChange={() => handleOnChange("N/O")}
              />
              &nbsp; N/O
            </label>
            <br />
            <br />
            <div className="columns">
              <div className="column">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    name={"Uninsured"}
                    value={"Uninsured"}
                    checked={data.coverage["Uninsured"]}
                    onChange={() => handleOnChange("Uninsured")}
                  />
                  &nbsp; Uninsured
                </label>
              </div>
              <div className="column">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    name={"Uninsured Motorist Liability"}
                    value={"Uninsured Motorist Liability"}
                    checked={data.coverage["Uninsured Motorist Liability"]}
                    onChange={() =>
                      handleOnChange("Uninsured Motorist Liability")
                    }
                  />
                  &nbsp; Uninsured Motorist Liability
                </label>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    name={"Medical Payments"}
                    value={"Medical Payments"}
                    checked={data.coverage["Medical Payments"]}
                    onChange={() => handleOnChange("Medical Payments")}
                  />
                  &nbsp; Medical Payments
                </label>
              </div>
              <div className="column">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    name={"Personal Injury Protection"}
                    value={"Personal Injury Protection"}
                    checked={data.coverage["Personal Injury Protection"]}
                    onChange={() =>
                      handleOnChange("Personal Injury Protection")
                    }
                  />
                  &nbsp; Personal Injury Protection
                </label>
              </div>
            </div>
            <label className="checkbox">
              <input
                type="checkbox"
                name={"Comprehensive"}
                value={"Comprehensive"}
                checked={data.coverage["Comprehensive"]}
                onChange={() => handleOnChange("Comprehensive")}
              />
              &nbsp; Comprehensive
            </label>
            <br />
            <br />
            <label className="checkbox">
              <input
                type="checkbox"
                name={"Collision"}
                value={"Collision"}
                checked={data.coverage["Collision"]}
                onChange={() => handleOnChange("Collision")}
              />
              &nbsp; Collision
            </label>
            <br />
            <br />
            <label className="checkbox">
              <input
                type="checkbox"
                name={"Cargo"}
                value={"Cargo"}
                checked={data.coverage["Cargo"]}
                onChange={() => handleOnChange("Cargo")}
              />
              &nbsp; Cargo
            </label>
            <br />
            <br />
            <label className="checkbox">
              <input
                type="checkbox"
                name={"General Liability"}
                value={"General Liability"}
                checked={data.coverage["General Liability"]}
                onChange={() => handleOnChange("General Liability")}
              />
              &nbsp; General Liability
            </label>
            <br />
            <br />
            <label className="checkbox">
              <input
                type="checkbox"
                name={"Other"}
                value={"Other"}
                checked={data.coverage["Other"]}
                onChange={() => handleOnChange("Other")}
              />
              &nbsp; Other
            </label>
          </div>
          <div className="column">
            <div className="title">Limits of Liability</div>
            <InputWithOption
              type="limitsOfLiablity"
              name="typecls"
              name2="cls1"
              data={data}
              setData={setData}
              Placeholder="CLS"
              text1="Primary"
              text2="Non Trucking"
              value1="primary"
              value2="non Trucking"
            />
            <br />
            <input
              className="input"
              type="text"
              placeholder="Cost of hire"
              name="costofhire"
              onChange={handlerData}
            />
            <br />
            <br />
            <input
              className="input"
              type="text"
              placeholder="#Employees"
              name="employesmum"
              onChange={handlerData}
            />
            <br />
            <br />
            <input
              className="input"
              type="text"
              placeholder="CSL"
              name="cls2"
              onChange={handlerData}
            />
            <br />
            <br />
            <input
              className="input"
              type="text"
              placeholder="Each Person"
              name="eachperson"
              onChange={handlerData}
            />
            <br />
            <br />
            <input
              className="input"
              type="text"
              placeholder="$ Deductible"
              name="deductible1"
              onChange={handlerData}
            />
            <br />
            <br />
            <input
              className="input"
              type="text"
              placeholder="$ Deductible"
              name="deductible2"
              onChange={handlerData}
            />
            <br />
            <br />
            <div className="columns">
              <div className="column">
                <input
                  className="input"
                  type="text"
                  placeholder="$ Limit"
                  name="limit"
                  onChange={handlerData}
                />
              </div>
              <div className="column">
                <input
                  className="input"
                  type="text"
                  placeholder="$ Deductible"
                  name="deductible3"
                  onChange={handlerData}
                />
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <input
                  className="input"
                  type="text"
                  placeholder="$"
                  name="mountperoccurrence"
                  onChange={handlerData}
                />
              </div>
              <div className="column">
                <input
                  className="input"
                  type="text"
                  placeholder="General Aggregate"
                  name="generalaggregate"
                  onChange={handlerData}
                />
              </div>
              <div className="column">
                <input
                  className="input"
                  type="text"
                  placeholder="Per Occurrence"
                  name="peroccurrence"
                  onChange={handlerData}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

export default OptionsCoverageLimitsOfLiability; 