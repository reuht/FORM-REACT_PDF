

const TableTwoColumn = ({ t1, t2, data, setData, c1, c2 }) => {
    const handlerData = (e) => {
      setData({
        ...data,
        fiveMostLargestCities: {
          ...data.fiveMostLargestCities,
          [e.target.id]: {
            ...data.fiveMostLargestCities[e.target.id],
            [e.target.name]: e.target.value,
          },
        },
      });
    };

    return (
      <>
        <div className="columns">
          <div className="column">
            <div className="table-container">
              <table className="table is-hoverable is-striped is-fullwidth">
                <thead>
                  <tr>
                    <th>{t1}</th>
                    <th>{t2}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
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
                  </tr>
                  <tr>
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
                  </tr>
                  <tr>
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
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input"
                        type="text"
                        id={4}
                        name={c1}
                        onChange={handlerData}
                      />
                    </td>
                    <td>
                      <input
                        className="input"
                        type="text"
                        id={4}
                        name={c2}
                        onChange={handlerData}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input"
                        type="text"
                        id={5}
                        name={c1}
                        onChange={handlerData}
                      />
                    </td>
                    <td>
                      <input
                        className="input"
                        type="text"
                        id={5}
                        name={c2}
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

  const TableTreeColumn = ({
    t1,
    t2,
    t3,
    data,
    setData,
    c1,
    c2,
    c3,
    name,
    require
  }) => {
    const handlerData = (e) => {
      if (name === "cargoHauledAverageValue") {
        setData({
          ...data,
          cargoHauledAverageValue: {
            ...data.cargoHauledAverageValue,
            [e.target.id]: {
              ...data.cargoHauledAverageValue[e.target.id],
              [e.target.name]: e.target.value,
            },
          },
        });
      }

      if (name === "mainShippingCustomersPercentage") {
        setData({
          ...data,
          mainShippingCustomersPercentage: {
            ...data.mainShippingCustomersPercentage,
            [e.target.id]: {
              ...data.mainShippingCustomersPercentage[e.target.id],
              [e.target.name]: e.target.value,
            },
          },
        });
      }
    };

    return (
      <>
        <div className="columns">
          <div className="column">
            <div className="table-container">
              <table className="table is-hoverable is-striped is-fullwidth">
                <thead>
                  <tr>
                    <th>{t1}{
            require && <span className="requiredata">*</span>
          }</th>
                    <th>{t2}{
            require && <span className="requiredata">*</span>
          }</th>
                    <th>{t3}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input
                        className="input"
                        type="text"
                        id={1}
                        name={c1}
                        onChange={handlerData}
                        required={require}
                      />
                    </td>
                    <td>
                      <input
                        className="input"
                        type="text"
                        id={1}
                        name={c2}
                        onChange={handlerData}
                        required={require}
                      />
                    </td>
                    <td>
                      <input
                        className="input"
                        type="text"
                        id={1}
                        name={c3}
                        onChange={handlerData}
                        required={require}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input"
                        type="text"
                        id={2}
                        name={c1}
                        onChange={handlerData}
                        required={require}
                      />
                    </td>
                    <td>
                      <input
                        className="input"
                        type="text"
                        id={2}
                        name={c2}
                        onChange={handlerData}
                        required={require}
                      />
                    </td>
                    <td>
                      <input
                        className="input"
                        type="text"
                        id={2}
                        name={c3}
                        onChange={handlerData}
                        required={require}
                      />
                    </td>
                  </tr>
                  <tr>
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
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input"
                        type="text"
                        id={4}
                        name={c1}
                        onChange={handlerData}
                      />
                    </td>
                    <td>
                      <input
                        className="input"
                        type="text"
                        id={4}
                        name={c2}
                        onChange={handlerData}
                      />
                    </td>
                    <td>
                      <input
                        className="input"
                        type="text"
                        id={4}
                        name={c3}
                        onChange={handlerData}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="input"
                        type="text"
                        id={5}
                        name={c1}
                        onChange={handlerData}
                      />
                    </td>
                    <td>
                      <input
                        className="input"
                        type="text"
                        id={5}
                        name={c2}
                        onChange={handlerData}
                      />
                    </td>
                    <td>
                      <input
                        className="input"
                        type="text"
                        id={5}
                        name={c3}
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


export {
    TableTwoColumn,
    TableTreeColumn
}