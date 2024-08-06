import React, { useState } from "react";

function HeroComponent() {
  const [activeImg, setActiveImg] = useState("");
  const [blur, setBlur] = useState("");
  console.log("activeImg: ", activeImg);
  return (
    <div>
      <div className="card">
        <div className="image-output">
          <p>img</p>
        </div>
        <div className="card-input">
          {activeImg && (
            <img
              src={activeImg}
              alt="choose"
              style={{
                height: "500px",
                width: "500px",
                objectFit: "contain",
                filter: `blur(${blur}px) grayscale(${50}%) saturate(${100}%) brightness(100%)`,
              }}
            />
          )}
          <br />
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
            onChange={(e) => {
              if (e.target.files.length > 0) {
                setActiveImg(URL.createObjectURL(e.target.files[0]));
              }
            }}
          />
          <input
            type="text"
            value={blur}
            onChange={(e) => setBlur(e.target.value)}
            name=""
            id=""
          />
        </div>
      </div>
    </div>
  );
}

export default HeroComponent;
