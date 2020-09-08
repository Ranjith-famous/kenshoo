import React from "react";
import "../components/MainContent.css";

class MainContent extends React.Component {
  renderCard() {
    return (
      <div>
        <div className="container2">
          <div>
            <img
              src="data:image/png;base64,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"
              className="iconDetails"
            />
          </div>
          <div style={{ marginLeft: "60px" }}>
            <h2>Kenshoo has integrated with Amazon Attribution.</h2>
            <div>
              <a href="">Learn what this means for you.</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  renderContent() {
    return (
      <div>
        <h1 className="ui header">
          <div>Total market intelligence.</div>
          <div>Totally intelligent marketing.</div>
        </h1>
        <p>
          It's a new era for digital marketing, with new challenges and
          opportunities. From the contextual relevance of your data to making
          sound, fast decisions across all of the most important go-to-market
          channels to amazing performance and unbiased measurement—we have you
          covered today and tomorrow. Join the world's most successful brands
          and agencies who leverage the Kenshoo platform for smart decisions and
          strong outcomes that empower your business to achieve strategic
          growth.
        </p>

        <button
          style={{ borderRadius: "100px", height: "50px", marginTop: "30px" }}
          className="ui inverted green button"
        >
          Request a Demo
        </button>
      </div>
    );
  }
  render() {
    return (
      <div style={{ float: "left", width: "50%", margin: "80px 0px 0px 70px" }}>
        {this.renderContent()}
        {this.renderCard()}
      </div>
    );
  }
}

export default MainContent;
