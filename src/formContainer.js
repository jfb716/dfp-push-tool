import React, { Component } from "react";

const mainDiv = {
  display: "block",
  padding: "10px",
  width: "1050px",
  border: "1px solid black",
  fontFamily: "Veranda",
  margin: "0 auto",
  marginTop: "50px",
};

const buttonStyle = {
  margin: "10px"
};

const formStyle = {
  border: "1px solid black",
  padding: "15px",
  float: "left",
  height: "685px",
  boxSizing: "border-box",
  marginBottom: "15px"
};

const inputStyle = {
  marginBottom: "10px"
};

const payloadBoxStyle = {
  border: "1px solid black",
  padding: "15px",
  marginLeft: "10px",
  float: "right",
  height: "685px",
  boxSizing: "border-box",
};

const noteStyle = {
  marginLeft: "5px",
  marginTop: "-10px"
};

const printTopBoxStyle = {
  clear: "both",
  border: "1px solid black",
  padding: "15px",
  boxSizing: "border-box",
  marginTop: "15px",
  width: "1050px",
};

const printBotBoxStyle = {
  padding: "15px",
  boxSizing: "border-box",
  margin: "0 auto",
  width: "100%",
  backgroundColor: "black",
  color: "lightgreen"
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
    let userData = window.textPayload;
    alert(userData);
    fetch("https://aax-console.amazon.com/api/dfp-job-api.php", {
      method: "POST",
      body: JSON.stringify(userData),
      mode: "no-cors",
      headers: {
        Accept: "application/json"
      }
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
 window.textPayload = textPayload;


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
          <hr></hr>
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
          <h3>Standard Payload:</h3>
          <pre>
            <code>
              {textPayload}
            </code>
          </pre>
          <hr/>
          <h3>Extra Payload for Guaranteed Lines:</h3>
          <pre>
            <code>
              {guaranteeText}
            </code>
          </pre>
        </div>
        <div style={printTopBoxStyle}>
        <h2>Response:</h2>
          <div style={printBotBoxStyle}>
            {textPayload}
          </div>
        </div>
      </div>
    );
  }
};



export default FormContainer;
