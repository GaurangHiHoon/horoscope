import React, { Component } from "react";
import Sign from "./common/dropdown";
import Input from "./common/input";
import * as Dates from "./common/date";
import validator from "validator";
import Radio from "./common/radio";

class Form extends Component {
  state = {
    form: {
      name: "",
      email: "",
      selectSign: "",
      selDate:""
    },

    yesterday: "",
    today: "",
    tomorrow: "",

    sign: [
      "aries",
      "taurus",
      "gemini",
      "cancer",
      "leo",
      "virgo",
      "libra",
      "scorpio",
      "sagittarius",
      "capricorn",
      "aquarius",
      "pisces",
    ],
    errors: {},
  };
  constructor(props) {
    super(props);
    this.state.yesterday = Dates.yesterday();
    this.state.today = Dates.today();
    this.state.tomorrow = Dates.tomorrow();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();

    this.setState({ errors });
    let errCount = Object.keys(errors).length;
    if (errCount > 0) return;
    console.log(this.state.form.selDate,this.state.form.selectSign,this.state.form.name);
    console.log(this.state.form.selDate,this.state.form.selectSign,this.state.form.name);
    let path="/horoscope/"+this.state.form.name;
    let params="?sign="+this.state.form.selectSign+"&day="+this.state.form.selDate;
    this.props.history.push({
        pathname:path,
        search:params
    })
  };

  validate() {
    const { name, email, selectSign,selDate } = this.state.form;

    let err = {};
    if (!name.trim()) {
      err.name = "Name is required";
    }
    if (!email.trim()) {
      err.email = "Email is required";
    } else if (!validator.isEmail(email)) {
      err.email = "Enter a valid email";
    }
    if (!selectSign.trim()) {
      err.selectSign = "Sign is required";
    }
    if (!selDate.trim()) {
      err.selDate = "Choose a date";
    }
    return err;
  }

  handleChange = (e) => {
    const data = { ...this.state.form };

    data[e.currentTarget.name] = e.currentTarget.value;

    this.setState({ form: data });
  };
  render() {
    const { name, email, selectSign,selDate } = this.state.form;
    const { yesterday,today,tomorrow, sign, errors } = this.state;

    return (
      <>
        <div className="bg-dark text-light p-3 text-center">
          Get Your Horoscope!
        </div>
        <div
          className="container border p-2 mt-4
        "
        >
          <form>
            <Input
              name="name"
              label="Name"
              value={name}
              onChange={this.handleChange}
              type="text"
            />
            {errors.name ? (
              <div className="alert alert-danger mt-1" role="alert">
                {errors.name}
              </div>
            ) : (
              ""
            )}
            <Input
              name="email"
              label="Email"
              value={email}
              onChange={this.handleChange}
              type="email"
            />

            {errors.email ? (
              <div className="alert alert-danger mt-1" role="alert">
                {errors.email}
              </div>
            ) : (
              ""
            )}
            <Sign
              sign={sign}
              onChange={this.handleChange}
              name="selectSign"
              value={selectSign}
              label="Select Your Sign"
            />

            {errors.selectSign ? (
              <div className="alert alert-danger mt-1" role="alert">
                {errors.selectSign}
              </div>
            ) : (
              ""
            )}
            <div className="text-center p-2">
            <div>Date:</div>
            <Radio date={yesterday} name="selDate" onChange={this.handleChange} value="yesterday" check={selDate}/>
            <Radio date={today} name="selDate" onChange={this.handleChange} value="today" check={selDate}/>
            <Radio date={tomorrow} name="selDate" onChange={this.handleChange} value="tomorrow" check={selDate}/>
            </div>
            {errors.selDate ? (
              <div className="alert alert-danger mt-1" role="alert">
                {errors.selDate}
              </div>
            ) : (
              ""
            )}
          </form>
          <button
            className="btn btn-primary"
            style={{ margin: "2rem", float: "right" }}
            onClick={this.handleSubmit}
          >
            Horoscope Here 🔮
          </button>
        </div>
      </>
    );
  }
}

export default Form;
