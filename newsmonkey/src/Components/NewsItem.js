import React from "react";
import { Link } from "react-router-dom";

const NewsItem = (props) => {
    let { title, description, imgUrl, newsUrl, author, date, source } =
      props;
    return (
      <div className="my-3">
        <div className="card">
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ zIndex: 1, left: "90%" }}
          >
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <div className="card-footer">
              <small className="text-body-secondary">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </div>
            <Link to={newsUrl} className="btn btn-primary btn-sm my-2">
              View More
            </Link>
          </div>
        </div>
      </div>
    );
  }

  export default NewsItem;

