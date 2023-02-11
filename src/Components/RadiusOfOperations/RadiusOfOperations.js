import {TableTwoColumn, TableTreeColumn} from "../Tables/Tables";
import OptionsRadioOperation from "../OptionsRadioOperation/OptionsRadioOperation";

const RadiusOfOperations = ({ data, setData, name }) => {
    const handlerData = (e) => {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    };

    return (
      <>

        <OptionsRadioOperation 
            data={data} 
            setData={setData} 
            name={name} 
            />

        <TableTwoColumn
          t1="Five Most Common Hauls By Destination"
          t2="Largest Cities Entered (Pick Up or Drop Off)"
          c1="fiveMostCommonHaulsByDestination"
          c2="largestCitiesEntered"
          data={data}
          setData={setData}
        />
        <TableTreeColumn
          t1="Cargo Hauled"
          t2="%"
          t3="Average Value"
          c1="cargoHauled"
          c2="percentage"
          c3="averageValue"
          name="cargoHauledAverageValue"
          data={data}
          setData={setData}
          require={true}
        />
        <TableTreeColumn
          t1="Main Shipping Customers"
          t2="Percentage of Loads"
          t3="Number of Years Hauling For"
          c1="mainShippingCustomers"
          c2="percentageofLoads"
          c3="numberofYearsHaulingFor"
          name="mainShippingCustomersPercentage"
          data={data}
          setData={setData}
        />

        <label className="label">
          Percentage of Loads Received Through Freight Brokers:
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder=""
            name="PercentageReceivedFreightBrokers"
            onChange={handlerData}
          />
        </div>
        <br />
      </>
    );
  };


export default RadiusOfOperations; 