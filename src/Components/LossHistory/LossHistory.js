
const LossHistory = ({
    titleSection,
    t1,
    t2,
    t3,
    t4,
    col1,
    col2,
    col3,
    c1,
    c2,
    c3,
    c4,
    data,
    setData,
    name,
  }) => {
    const handlerData = (e) => {
      if (name === "lossHistory") {
        setData({
          ...data,
          lossHistory: {
            ...data.lossHistory,
            [e.target.id]: {
              ...data.lossHistory[e.target.id],
              [e.target.name]: e.target.value,
            },
          },
        });
      }

      if (name === "operationHistory") {
        setData({
          ...data,
          operationHistory: {
            ...data.operationHistory,
            [e.target.id]: {
              ...data.operationHistory[e.target.id],
              [e.target.name]: e.target.value,
            },
          },
        });
      }
    };

    return (
      <>
        <div className="title is-3">{titleSection}</div>
        <div className="columns">
          <div className="column">
            <div className="table-container">
              <table className="table is-hoverable is-striped is-fullwidth">
                <thead>
                  <tr>
                    <th></th>
                    <th>{t1}</th>
                    <th>{t2}</th>
                    <th>{t3}</th>
                    <th>{t4}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{col1}</td>
                    <td>
                      <input
                        className="input"
                        type="text"
                        id={1}
                        name={c1}
                        onChange={handlerData}
                      />
                    </td>
                    <td>
                      <input
                        className="input"
                        type="text"
                        id={1}
                        name={c2}
                        onChange={handlerData}
                      />
                    </td>
                    <td>
                      <input
                        className="input"
                        type="text"
                        id={1}
                        name={c3}
                        onChange={handlerData}
                      />
                    </td>
                    <td>
                      <input
                        className="input"
                        type="text"
                        id={1}
                        name={c4}
                        onChange={handlerData}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>{col2}</td>
                    <td>
                      <input
                        className="input"
                        type="text"
                        id={2}
                        name={c1}
                        onChange={handlerData}
                      />
                    </td>
                    <td>
                      <input
                        className="input"
                        type="text"
                        id={2}
                        name={c2}
                        onChange={handlerData}
                      />
                    </td>
                    <td>
                      <input
                        className="input"
                        type="text"
                        id={2}
                        name={c3}
                        onChange={handlerData}
                      />
                    </td>
                    <td>
                      <input
                        className="input"
                        type="text"
                        id={2}
                        name={c4}
                        onChange={handlerData}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>{col3}</td>
                    <td>
                      <input
                        className="input"
                        type="text"
                        id={3}
                        name={c1}
                        onChange={handlerData}
                      />
                    </td>
                    <td>
                      <input
                        className="input"
                        type="text"
                        id={3}
                        name={c2}
                        onChange={handlerData}
                      />
                    </td>
                    <td>
                      <input
                        className="input"
                        type="text"
                        id={3}
                        name={c3}
                        onChange={handlerData}
                      />
                    </td>
                    <td>
                      <input
                        className="input"
                        type="text"
                        id={3}
                        name={c4}
                        onChange={handlerData}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  };


export default LossHistory; 
