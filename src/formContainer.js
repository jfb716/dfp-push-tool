import React, { Component } from 'react';

const mainDiv = {
  display: "flex",
  padding: "10px"
};

const buttonStyle = {
  margin: "10px"
};

const formStyle = {
  border: "1px solid black",
  padding: "15px",
};

const inputStyle = {
  marginBottom: "10px"
};

const payloadBoxStyle = {
  border: "1px solid black",
  padding: "10px",
  marginLeft: "10px"
};

const noteStyle = {
  marginLeft: "5px",
  marginTop: "-15px"
};

const Button = props => {
  return (
    <button
      style={props.style}
      onClick={props.action}
    >
      {props.title}
    </button>
  );
};

const Input = props => {
  return (
    <div>
      <label>
        {props.title}
      </label>
      <input
        id={props.name}
        name={props.name}
        type={props.inputtype}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        {...props}
      />
    </div>
  );
};

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formInfo: {
        networkId: "",
        orderPrefix: "",
        linePrefix: "",
        sizes: "",
        placementIds: "",
        adUnits: "",
        creativeName: "",
        traffickerId: "",
        advertiserId: "",
        policyValue: "",
        startTime: "",
        endTime: "",
        impressionGoal: "",

      },

    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }


  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;

    this.setState(
      prevState => ({
        formInfo: {
          ...prevState.formInfo,
          [name]: value
        }
      }),
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.formInfo;

    fetch("http://example.com", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      formInfo: {
        networkId: "",
        orderPrefix: "",
        linePrefix: "",
        sizes: "",
        placementIds: "",
        adUnits: "",
        creativeName: "",
        traffickerId: "",
        advertiserId: "",
        policyValue: "",
        startTime: "",
        endTime: "",
        impressionGoal: "",
      }
    });
  }


  render() {

    const guaranteeInfo = {
      "encoded_policy_value": `${this.state.formInfo.policyValue}`,
      "start_time": `${this.state.formInfo.startTime}`,
      "end_time": `${this.state.formInfo.endTime}`,
      "impression_target": `${this.state.formInfo.impressionGoal}`
    }

    const startPayload = {
         "pricepoints": [{
           "amzninvp1": "15.00",
         }],
         "targeting_key" : "amznslots",
         "video_placement_targeting_enabled": false,
         "competitiveseparation_enabled": true,
         "aax_category_to_labels_map": {

         },
         "order_prefix": `${this.state.formInfo.orderPrefix}`,
         "lineitem_prefix": `${this.state.formInfo.linePrefix}`,
         "task_name": "dfp-create-setup-ott",
         "client_secret": "Z2gPApCulSAX3Cj9DbO7HVSs",
         "client_id": "136982470967-35btkf8u5ooak91keaqatr2ep348v339.apps.googleusercontent.com",
         "refresh_token": "1/jbw-ReBCdaeeaVQIIkmelDf251pPzVa_Z53rokPT_S8",
         "network_id": `${this.state.formInfo.networkId}`,
         "encoding_key": "",
         "callback_url": "adasd",
         "sizes": [`${this.state.formInfo.sizes}`],
         "placement_ids": `${this.state.formInfo.placementIds}`,
         "ad_unit_names": `${this.state.formInfo.adUnits}`,
         "sourceId": "0",
         "trafficker_id": `${this.state.formInfo.traffickerId}`,
         "advertiser_id": `${this.state.formInfo.advertiserId}`,
         "creative_name": `${this.state.formInfo.creativeName}`,

     }


 const textPayload = JSON.stringify(startPayload, undefined, 4);
 const guaranteeText = JSON.stringify(guaranteeInfo, undefined, 4);

 console.log(textPayload);
 
    return (
      <div style={mainDiv}>
        <form className="mainForm" onSubmit={this.handleFormSubmit} style={formStyle}>
        <h3>Standard Payload Inputs:</h3>
          <Input
            inputtype={"text"}
            title={"Network ID: "}
            name={"networkId"}
            value={this.state.formInfo.networkId}
            placeholder={"DFP Network ID"}
            handleChange={this.handleInput}
            style={inputStyle}
          />

          <Input
            inputtype={"text"}
            title={"Order Prefix: "}
            name={"orderPrefix"}
            value={this.state.formInfo.orderPrefix}
            placeholder={"Order Name Prefix"}
            handleChange={this.handleInput}
            style={inputStyle}
          />

          <Input
            inputtype={"text"}
            title={"Line Prefix: "}
            name={"linePrefix"}
            value={this.state.formInfo.linePrefix}
            placeholder={"Line Name Prefix"}
            handleChange={this.handleInput}
            style={inputStyle}
          />

          <Input
            inputtype={"text"}
            title={"Creative Name: "}
            name={"creativeName"}
            value={this.state.formInfo.creativeName}
            placeholder={"Creative Name"}
            handleChange={this.handleInput}
            style={inputStyle}
          />

          <Input
            inputtype={"text"}
            title={"Size(s): "}
            name={"sizes"}
            value={this.state.formInfo.sizes}
            placeholder={"Comma Separated"}
            handleChange={this.handleInput}
            style={inputStyle}
          />

          <Input
            inputtype={"text"}
            title={"Placement ID(s): "}
            name={"placementIds"}
            value={this.state.formInfo.placementIds}
            placeholder={"Comma Separated"}
            handleChange={this.handleInput}
            style={inputStyle}
          />

          <Input
            inputtype={"text"}
            title={"Ad Unit(s): "}
            name={"adUnits"}
            value={this.state.formInfo.adUnits}
            placeholder={"Comma Separated"}
            handleChange={this.handleInput}
            style={inputStyle}
          />

          <Input
            inputtype={"text"}
            title={"Trafficker ID: "}
            name={"traffickerId"}
            value={this.state.formInfo.traffickerId}
            placeholder={"Trafficker ID"}
            handleChange={this.handleInput}
            style={inputStyle}
          />

          <Input
            inputtype={"text"}
            title={"Advertiser ID: "}
            name={"advertiserId"}
            value={this.state.formInfo.advertiserId}
            placeholder={"Advertiser ID"}
            handleChange={this.handleInput}
            style={inputStyle}
          />

          <h3>Extra Inputs for Guaranteed</h3>
          <h5 style={noteStyle} >*Leave Blank if pushing Open Auction*</h5>

          <Input
            inputtype={"text"}
            title={"Policy Value: "}
            name={"policyValue"}
            value={this.state.formInfo.policyValue}
            placeholder={""}
            handleChange={this.handleInput}
            style={inputStyle}
          />

          <Input
            inputtype={"text"}
            title={"Start Time: "}
            name={"startTime"}
            value={this.state.formInfo.startTime}
            placeholder={""}
            handleChange={this.handleInput}
            style={inputStyle}
          />

          <Input
            inputtype={"text"}
            title={"End Time: "}
            name={"endTime"}
            value={this.state.formInfo.endTime}
            placeholder={""}
            handleChange={this.handleInput}
            style={inputStyle}
          />

          <Input
            inputtype={"text"}
            title={"Impression Goal: "}
            name={"impressionGoal"}
            value={this.state.formInfo.impressionGoal}
            placeholder={""}
            handleChange={this.handleInput}
            style={inputStyle}
          />

          <Button
            action={this.handleFormSubmit}
            type={"submit"}
            title={"Submit"}
            style={buttonStyle}
          />

          <Button
            action={this.handleClearForm}
            type={"clear"}
            title={"Clear"}
            style={buttonStyle}
          />
        </form>

        <div style={payloadBoxStyle}>
          <pre>
            <code>
              <h2>Standard Payload</h2>
              {textPayload}
              <hr/>
              <h2>Extra Payload for Guaranteed Lines</h2>
              {guaranteeText}
            </code>
          </pre>

        </div>
      </div>
    );
  }
};



export default FormContainer;
