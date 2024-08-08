import React, { useEffect, useState } from "react";
import HighlightComponent from "../../components/highlights/highlight.component";
import HeroComponent from "../../components/HeroSection/Hero.component";
import BodySectionComponent from "../../components/bodySection/bodySection.component";
import data from "../../mock/feed.json";

function HomePage() {
  const [products, setter] = useState();

  useEffect(() => {
    setter(data.data);
  }, []);
  return (
    <div>
      <HighlightComponent />
      <HeroComponent />

      <div>
        <BodySectionComponent allProducts={products} />
      </div>
    </div>
  );
}

export default HomePage;
