import React, { Component } from "react";
import fetchHoro from "./../fetch";
import Description from "./common/desc";
class Result extends Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const { data } = await fetchHoro(this.props.location.search);
    this.setState({ data });
  }

  render() {
    const { data } = this.state;
   

    return (
      <>
        <div className="bg-dark text-light p-3">
          <img
            src="https://i.giphy.com/media/Yrrx1sYXgn6Xk1QtwS/giphy.webp"
            style={{ height: "2rem", width: "auto" }}
            alt="astro"
          />
          <span> Hi {this.props.match.params.name}!</span>
          <img
            src="https://i.giphy.com/media/Yrrx1sYXgn6Xk1QtwS/giphy.webp"
            style={{ marginLeft: "2px", height: "2rem", width: "auto" }}
            alt="astro"
          />
        </div>
        <div className="container border mt-3 p-2">
          <strong> Your Horoscope Says:</strong>

          <blockquote className="blockquote">
            <p className="mb-0">
              <em> {data.description}</em>
            </p>
            <footer className="blockquote-footer">
              <cite title="Source Title">Your Stars</cite>
            </footer>
          </blockquote>

          
          <Description name="Date Range " data={data.date_range} />
          <Description
            name="Your Compatibility will be good with💟 "
            data={data.compatibility}
          />
          <Description name="Your mood today will be " data={data.mood} />
          <Description name="Color for today " data={data.color} />
          <Description name="Lucky Number " data={data.lucky_number} />
          <Description name="Lucky Time ⏲" data={data.lucky_time} />
        </div>
        <div className="container text-center" >
          <img
          style={{width:"40%" }}
            src="https://media3.giphy.com/media/tBNWj9Yn0DEKnyTJVk/giphy.gif?cid=ecf05e47eq7ui1uzrk5g6qhg9yx1y1fstqvrd81waafhk2s9&rid=giphy.gif&ct=s"
            alt="babaji"
          />
        </div>
        <footer className=" container-fluid bg-dark text-light text-center mt-2 p-4">
          Made with Dedication by Gaurang Pant
        </footer>
      </>
    );
  }
}

export default Result;
