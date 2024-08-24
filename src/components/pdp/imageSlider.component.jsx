import React from "react";

function ImageSliderComponent(props) {
  const { images } = props;
  return (
    <div style={{ width: "500px" }}>
      <div className="carousel slide">
        <div className="carousel-inner">
          {images?.map((image, i) => {
            return (
              <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={i}>
                <img
                  src={image}
                  style={{
                    width: "500px",
                    objectFit: "cover",
                    height: "300px",
                  }}
                  alt="..."
                />
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default ImageSliderComponent;
