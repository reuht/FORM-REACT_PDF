
import { SmallFormWihtRadio, SmallFormWihtSelect, SmallForm} from "../SmallForms/SmallForms";

const ApplicantInformation = ({ data, setData }) => {
    return (
      <>
        <div className="title is-3">Applicant Information</div>

        <SmallForm
          label1="Business Name"
          label2="Federal ID or SSN"
          name1="businessName"
          name2="federalIDorSSN"
          data={data}
          setData={setData}
          require1={true}
          require2={false}
        />

        <SmallForm
          label1="Principal Owner"
          label2="Year Business Started"
          name1="principalOwner"
          name2="yearBusinessStarted"
          data={data}
          setData={setData}
          require1={true}
          require2={true}
        />

        <SmallForm
          label1="Mailing Address 1"
          label2="Date Coverage Desired"
          name1="mailingAddress1"
          name2="dateCoverageDesired"
          data={data}
          setData={setData}
          require1={true}
          require2={false}
        />

        <SmallForm
          label1="Mailing Address 2"
          label2="Current Premium"
          name1="mailingAddress2"
          name2="currentPremium"
          data={data}
          setData={setData}
          require1={false}
          require2={false}
        />

        <SmallFormWihtSelect
          label1="City, State Zip"
          label2="U.S. DOT Number"
          name="uSDOTNumber"
          nameSelect="cityStateZip"
          data={data}
          setData={setData}
          require1={true}
          require2={true}
        />

        <SmallForm
          label1="County"
          label2="MC#"
          option="true"
          label3="Are State filings needed?"
          name1="county"
          name2="mcValue"
          name="areStatefilingsneeded"
          data={data}
          setData={setData}
        />

        {/*falta aqui el de radio buttom*/}

        <SmallForm
          label1="Phone"
          label2="List State(s) and Auth# (if app)"
          name1="phone"
          name2="listStateandAuth"
          data={data}
          setData={setData}
        />

        <SmallFormWihtRadio
          label1="Garage Address 1 if Different from Mailing Address"
          label2="GVW not listed in this application?"
          name="gvwNotListedInThisApplication"
          name1="GarageAddress1"
          data={data}
          setData={setData}
        />

        <SmallFormWihtRadio
          label1="Garage Address 2"
          label2="Does applicant hire any equipment?"
          name="doesApplicantHireAnyEquipment"
          name1="garageAddress2"
          data={data}
          setData={setData}
        />

        <SmallFormWihtSelect
          label1="Garage City, State Zip"
          label2="What is the annual cost of hire?"
          name="WhatIsTheAnnualCostOfhire"
          nameSelect="garageCityStateZip"
          data={data}
          setData={setData}
          require1={false}
          require2={true}
        />

        <SmallForm
          label1="Garage County"
          label2="Description of Business"
          name1="garageCounty"
          name2="descriptionOfBusiness"
          data={data}
          setData={setData}
        />
      </>
    );
  };


  export default ApplicantInformation;