import React from "react";
import "../components/MainContent.css";

class MainContent2 extends React.Component {
  renderList() {
    return (
      <div style={{ marginTop: "600px" }}>
        <h1 style={{ textAlign: "center" }}>
          An open platform for closed loop marketing
        </h1>
        <div
          className="ui three column grid"
          style={{ marginTop: "50px", textAlign: "center" }}
        >
          <div className="column">
            <div className="ui segment" style={{ background: "#daeae6" }}>
              <img
                src="https://kenshoo.com/wp-content/uploads/2020/08/Strategy-Image.png"
                alt="Strategy"
                style={{ marginTop: "15px", marginBottom: "30px" }}
              />
              <h1>Strategy</h1>
              <p>
                SaaS solutions and services to guide strategic planning of
                digital programs based on insights derived from a configurable
                data lake and your optimal media mix.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="ui segment" style={{ background: "#eff4f6" }}>
              <img
                src="https://kenshoo.com/wp-content/uploads/2020/08/Activation-Image.png"
                alt="Activation"
                style={{ marginTop: "15px", marginBottom: "30px" }}
              />
              <h1>Activation</h1>
              <p>
                Industry-leading, cross channel campaign management based on a
                foundation of data intelligence to drive marketing performance
                and efficiency with predictive budget management.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="ui segment" style={{ background: "#dae6ea" }}>
              <img
                src="https://kenshoo.com/wp-content/uploads/2020/08/Measurement-Image-e1595367584400.png"
                alt="Measurement"
                style={{ marginTop: "15px", marginBottom: "30px" }}
              />
              <h1>Measurement</h1>
              <p>
                Testing, auditing and incrementality measurement solutions that
                bring speed, integrity and transparency to attribution and media
                mix for seamless workflows from insight to action to business
                value.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return <div>{this.renderList()}</div>;
  }
}

export default MainContent2;
