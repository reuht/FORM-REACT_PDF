import { useState } from "react";
import AgencyInformation from "../AgencyInformation/AgencyInformation";
import ApplicantInformation from "../ApplicantInformation/ApplicantInformation";
import ScheduleOfDrivers from "../ScheduleOfDrivers/ScheduleOfDrivers";
import PriorYearCarrierInformation from "../PriorYearCarrierInformation/PriorYearCarrierInformation";
import LossHistory from "../LossHistory/LossHistory";
import AdditionalRemarks from "../AdditionalRemarks/AdditionalRemarks";
import OptionsCoverageLimitsOfLiability from "../OptionsCoverageLimitsOfLiability/OptionsCoverageLimitsOfLiability";
import RadiusOfOperations from "../RadiusOfOperations/RadiusOfOperations"; 
import emailjs from '@emailjs/browser';


const Form = () => {

    const [data, setData] = useState({
      agencyInformation: {
        agencyName: "SOLANO CONSULTANTS",
        contactPerson: "ALAIN SOLANO",
        email: "as@solanoconsultants.com",
        phone: "(601)770-9640",
        fax: "(601)770-9682",
      },

      applicantInformation: {
        businessName: "",
        federalIDorSSN: "",
        principalOwner: "",
        yearBusinessStarted: "",
        mailingAddress1: "",
        dateCoverageDesired: "",
        mailingAddress2: "",
        currentPremium: "",

        cityStateZip: {
          state: "",
          city: "",
          zip: "",
        },

        uSDOTNumber: "",
        county: "",

        mc: {
          mcValue: "",
          areStatefilingsneeded: "",
        },

        phone: "",

        listStateandAuth: "",

        GarageAddress1: "",

        gvwNotListedInThisApplication: "",

        garageAddress2: "",

        doesApplicantHireAnyEquipment: "",

        garageCityStateZip: {
          state: "",
          city: "",
          zip: "",
        },

        WhatIsTheAnnualCostOfhire: "",

        garageCounty: "",

        descriptionOfBusiness: "",
      },

      radiusOfOperations: {
        "0-50 miles": false,
        "51-100 miles": false,
        "101-200 miles": false,
        "201-300 miles": false,
        "301-500 miles": false,
        "501+ miles": false,
      },

      additionalRemarks: "",

      scheduleOfDrivers: {
        1: {
          name: "",
          dateOfBirth: "",
          stateyLicense: "",
          YrAccyViolHistory: "",
          yrsExp: "",
          dateOfHire: "",
        },
        2: {
          name: "",
          dateOfBirth: "",
          stateyLicense: "",
          YrAccyViolHistory: "",
          yrsExp: "",
          dateOfHire: "",
        },
        3: {
          name: "",
          dateOfBirth: "",
          stateyLicense: "",
          YrAccyViolHistory: "",
          yrsExp: "",
          dateOfHire: "",
        },
        4: {
          name: "",
          dateOfBirth: "",
          stateyLicense: "",
          YrAccyViolHistory: "",
          yrsExp: "",
          dateOfHire: "",
        },
        5: {
          name: "",
          dateOfBirth: "",
          stateyLicense: "",
          YrAccyViolHistory: "",
          yrsExp: "",
          dateOfHire: "",
        },
      },

      vehicleSchedule: {
        1: {
          year: "",
          tradeName: "",
          typeofVehicle: "",
          gvw: "",
          currentValue: "",
          maximumRadius: "",
        },
        2: {
          year: "",
          tradeName: "",
          typeofVehicle: "",
          gvw: "",
          currentValue: "",
          maximumRadius: "",
        },
        3: {
          year: "",
          tradeName: "",
          typeofVehicle: "",
          gvw: "",
          currentValue: "",
          maximumRadius: "",
        },
        4: {
          year: "",
          tradeName: "",
          typeofVehicle: "",
          gvw: "",
          currentValue: "",
          maximumRadius: "",
        },
        5: {
          year: "",
          tradeName: "",
          typeofVehicle: "",
          gvw: "",
          currentValue: "",
          maximumRadius: "",
        },
      },

      fiveMostLargestCities: {
        1: {
          fiveMostCommonHaulsByDestination: "",
          largestCitiesEntered: "",
        },
        2: {
          fiveMostCommonHaulsByDestination: "",
          largestCitiesEntered: "",
        },
        3: {
          fiveMostCommonHaulsByDestination: "",
          largestCitiesEntered: "",
        },
        4: {
          fiveMostCommonHaulsByDestination: "",
          largestCitiesEntered: "",
        },
        5: {
          fiveMostCommonHaulsByDestination: "",
          largestCitiesEntered: "",
        },
      },

      cargoHauledAverageValue: {
        1: { cargoHauled: "", percentage: "", averageValue: "" },
        2: { cargoHauled: "", percentage: "", averageValue: "" },
        3: { cargoHauled: "", percentage: "", averageValue: "" },
        4: { cargoHauled: "", percentage: "", averageValue: "" },
        5: { cargoHauled: "", percentage: "", averageValue: "" },
      },

      mainShippingCustomersPercentage: {
        1: {
          mainShippingCustomers: "",
          percentageofLoads: "",
          numberofYearsHaulingFor: "",
        },
        2: {
          mainShippingCustomers: "",
          percentageofLoads: "",
          numberofYearsHaulingFor: "",
        },
        3: {
          mainShippingCustomers: "",
          percentageofLoads: "",
          numberofYearsHaulingFor: "",
        },
        4: {
          mainShippingCustomers: "",
          percentageofLoads: "",
          numberofYearsHaulingFor: "",
        },
        5: {
          mainShippingCustomers: "",
          percentageofLoads: "",
          numberofYearsHaulingFor: "",
        },
      },

      lossHistory: {
        1: {
          Losses: "",
          lossAmountPaid: "",
          lossDescription: "",
          driverName: "",
        },
        2: {
          Losses: "",
          lossAmountPaid: "",
          lossDescription: "",
          driverName: "",
        },
        3: {
          Losses: "",
          lossAmountPaid: "",
          lossDescription: "",
          driverName: "",
        },
      },

      operationHistory: {
        1: { Projected: "", pastyear: "", pastyear2: "", pastyear3: "" },
        2: { Projected: "", pastyear: "", pastyear2: "", pastyear3: "" },
        3: { Projected: "", pastyear: "", pastyear2: "", pastyear3: "" },
      },

      PercentageReceivedFreightBrokers: "",

      priorYearCarrierInformation: {
        1: { liabilityCarrier: "", physDamCarrier: "", cargoCarrier: "" },
        2: { liabilityCarrier: "", physDamCarrier: "", cargoCarrier: "" },
        3: { liabilityCarrier: "", physDamCarrier: "", cargoCarrier: "" },
      },

      coverage: {
        "Bodily Injury Liability/Property Damage Liability": false,
        Hired: false,
        "N/O":false,
        Uninsured: false,
        "Uninsured Motorist Liability": false,
        "Medical Payments": false,
        "Personal Injury Protection": false,

        Comprehensive: false,
        Collision: false,
        Cargo: false,
        "General Liability": false,
        Other: false,
      },

      limitsOfLiablity: {
        cls1: "",
        typecls: "",
        costofhire: "",
        employesmum: "",
        cls2: "",
        eachperson: "",
        deductible1: "",
        deductible2: "",
        limit: "",
        deductible3: "",
        mountperoccurrence: "",
        generalaggregate: "",
        peroccurrence: "",
      },
    });


    const handlerSubmit  = (e) =>{
      e.preventDefault();
      const dataForm = JSON.stringify(data); 
      localStorage.setItem("Commercial-Auto-Quick", dataForm);
      emailjs.send(process.env.REACT_APP_SERVICEID, process.env.REACT_APP_TEMPLETEID, data, process.env.REACT_APP_PUBLICKEYS)
      .then((result) => {
          alert(result.text);
      }, (error) => {
          alert(error.text);
      });
      // alert("Submitted successfully")
      // e.target.reset();
    }

    const handlerPrint = () => {
      let nameFile = data.agencyInformation.email.split('@'); 
      document.title = nameFile.shift();
      window.print(); 
    }

    return (
      
        <form onSubmit={handlerSubmit}>
          <div className="container">
          <AgencyInformation 
            setData={setData} 
            data={data} 
            />

          <ApplicantInformation 
            setData={setData} 
            data={data} 
            />

          <ScheduleOfDrivers
            titleSection="Schedule of Drivers"
            t1="Name"
            t2="Date of Birth"
            t3="State & License #"
            t4="3 Yr Acc & Viol History"
            t5="Yrs Exp"
            t6="Date of Hire"
            c1="name"
            c2="dateOfBirth"
            c3="stateyLicense"
            c4="YrAccyViolHistory"
            c5="yrsExp"
            c6="dateOfHire"
            name="scheduleOfDrivers"
            require={true}
            data={data}
            setData={setData}
            
          />

          <ScheduleOfDrivers
            titleSection="Vehicle Schedule"
            t1="Year"
            t2="Trade Name"
            t3="Type of Vehicle"
            t4="GVW"
            t5="Current Value"
            t6="Maximum Radius"
            c1="year"
            c2="tradeName"
            c3="typeofVehicle"
            c4="gvw"
            c5="currentValue"
            c6="maximumRadius"
            name="vehicleSchedule"
            data={data}
            setData={setData}
            
          />

          <RadiusOfOperations
            setData={setData}
            data={data}
            name={"radiusOfOperations"}
          />

          <PriorYearCarrierInformation
            titleSection="Prior 3 Year Carrier Information"
            t1="Liability Carrier"
            t2="Phys Dam Carrier"
            t3="Cargo Carrier"
            c1="liabilityCarrier"
            c2="physDamCarrier"
            c3="cargoCarrier"
            data={data}
            setData={setData}
          />
          <LossHistory
            titleSection="Loss History"
            t1="# Losses"
            t2="Loss Amount Paid"
            t3="Loss Description"
            t4="Driver Name"
            col1="Last Yr"
            col2="1 Yr Prior"
            col3="2-Yr-Prior"
            c1="Losses"
            c2="lossAmountPaid"
            c3="lossDescription"
            c4="driverName"
            name="lossHistory"
            data={data}
            setData={setData}
          />

          <LossHistory
            titleSection="Operation History"
            t1="Projected"
            t2="Past Year"
            t3="Past Year 2"
            t4="Past Year 3"
            col1="Revenue"
            col2="Mileage"
            col3="Units Operated"
            c1="Projected"
            c2="pastyear"
            c3="pastyear2"
            c4="pastyear3"
            name="operationHistory"
            data={data}
            setData={setData}
          />
          <OptionsCoverageLimitsOfLiability 
            setData={setData} 
            data={data} 
            />

          <AdditionalRemarks setData={setData} data={data} />
          <br/>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" >Send</button>
            </div>
            <button className="button is-primary" onClick={() => handlerPrint()}>Print</button>
          </div>
          </div>
        </form>
        
      
    );
  };


export default Form



