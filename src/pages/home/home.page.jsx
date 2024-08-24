import React, { useEffect, useState } from "react";
import HighlightComponent from "../../components/highlights/highlight.component";
import HeroComponent from "../../components/HeroSection/Hero.component";
import BodySectionComponent from "../../components/bodySection/bodySection.component";
import axios from "axios";

function HomePage() {
  const [products, setter] = useState();

  useEffect(() => {
    let config = {
      method: 'get',
      url: 'https://api.escuelajs.co/api/v1/products',


    };
    axios.request(config)
      .then((response) => {
        setter(response.data);
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.error(error);
      });
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
