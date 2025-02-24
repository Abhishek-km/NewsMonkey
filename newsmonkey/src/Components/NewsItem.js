import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://www.jalopnik.com/img/gallery/elon-musk-rejected-ubers-advances-to-partner-on-tesla-robotaxi/l-intro-1740415948.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/newsDetails" className="btn btn-primary">
              View More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
