import React, { Component } from 'react';

const buttonStyle = {
  margin: "10px"
};

const formStyle = {
  border: "1px solid black",
  display: "block",
  padding: "20px",
  width: "40%"
};

const inputStyle = {
  marginBottom: "10px"
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
        lastName:""
      },

    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }


  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    let niValue = this.state.formInfo.networkId;
    console.log(name + " " + value);
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
        lastName: "",
        about: ""
      }
    });
  }

createPayload(){
  let startPayload = {
      "pricepoints": [{
        "amzninvp1": "15.00",
      }],
      "targeting_key" : "amznslots",
      "video_placement_targeting_enabled": false,
      "competitiveseparation_enabled": true,
    "aax_category_to_labels_map": {

    },
      "order_prefix": "Full Eps Video_G",
      "lineitem_prefix": "Full Eps Video_G",
      "task_name": "dfp-create-setup-ott",
      "client_secret": "Z2gPApCulSAX3Cj9DbO7HVSs",
      "client_id": "136982470967-35btkf8u5ooak91keaqatr2ep348v339.apps.googleusercontent.com",
      "refresh_token": "1/jbw-ReBCdaeeaVQIIkmelDf251pPzVa_Z53rokPT_S8",
      "network_id": `${niValue}`,
      "encoding_key": "",
      "callback_url": "adasd",
      "sizes": ["480x360v"],
      "placement_ids": "1118258, 1115498, 1111058",
      "ad_unit_names": "",
      "sourceId": "0",
      "trafficker_id": "245114637",
      "advertiser_id": "4635577434",
      "creative_name": "",
      "encoded_policy_value": "c75udc",
      "start_time": "2018-12-15T00:00:00",
      "end_time": "2018-12-31T00:00:00",
      "impression_target": "5000"
  }

  let textPayload = JSON.stringify(startPayload, undefined, 4);
}


  render() {
    return (
      <div>
        <form className="mainForm" onSubmit={this.handleFormSubmit} style={formStyle}>
          <Input
            inputtype={"text"}
            title={"Network ID: "}
            name={"networkId"}
            value={this.state.formInfo.networkId}
            placeholder={"Enter your first name"}
            handleChange={this.handleInput}
            style={inputStyle}
          />

          <Input
            inputtype={"text"}
            title={"Last Name: "}
            name={"lastName"}
            value={this.state.formInfo.lastName}
            placeholder={"Enter your last name"}
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

        <div>
          <pre>
            <code>
              {textPayload}
            </code>
          </pre>
        </div>
      </div>
    );
  }
};



export default FormContainer;
