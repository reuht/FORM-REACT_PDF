

const AgencyInformation = ({ setData, data }) => {
    const handlerDataAgency = (e) => {
      setData({
        ...data,
        agencyInformation: {
          ...data.agencyInformation,
          [e.target.name]: e.target.value,
        },
      });
    };

    return (
      <>
        <div className="title">Agency Information</div>

        <div className="field">
          <label className="label">Agency Name<span className="requiredata">*</span></label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="agencyName"
              placeholder="SOLANO CONSULTANTS"
              value = "SOLANO CONSULTANTS"
             
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Contact Person<span className="requiredata">*</span></label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="contactPerson"
              value= "ALAIN SOLANO"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Email<span className="requiredata">*</span></label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              name="email"
              value="as@solanoconsultants.com"      
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>
          {/*<p className="help">This email is invalid</p>*/}
        </div>

        <div className="columns">
          <div className="column">
            <div className="field">
            <label className="label">Phone<span className="requiredata">*</span></label>
            <div className="control">
              <input
                className="control input"
                type="tel"
                value= "(601)770-9640"
                placeholder="(601)770-9640"
                
              />
            </div>
            </div>
          </div>
          <div className="column">
            <label className="label">Fax</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value="(601)770-9682"
              />
            </div>
          </div>
        </div>
      </>
    );
  };


  export default AgencyInformation;
  