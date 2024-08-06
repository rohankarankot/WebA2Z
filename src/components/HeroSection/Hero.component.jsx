import React from "react";

function HeroComponent() {
  return <div>
    <div className="card">
      <div className="image-output">
        <p>img</p>
      </div>
      <div className="card-input">
        <button><input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />Add Image</button>
      </div>
    </div>
  </div>;
}

export default HeroComponent;
