
const AdditionalRemarks = ({ data, setData }) => {
    const handlerData = (e) => {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    };
    return (
      <>
        <label className="label">Additional Remarks</label>
        <textarea
          className="textarea"
          name="additionalRemarks"
          placeholder=""
          onChange={handlerData}
        ></textarea>
      </>
    );
  };


  export default AdditionalRemarks;

  