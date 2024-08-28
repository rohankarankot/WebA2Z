import React, { useContext, useEffect, useState } from "react";
import HighlightComponent from "../../components/highlights/highlight.component";
import HeroComponent from "../../components/HeroSection/Hero.component";
import BodySectionComponent from "../../components/bodySection/bodySection.component";
import axios from "axios";
import { CartContext } from "../../context/cart.context";

function HomePage() {
  const [products, setter] = useState();
  const { setLocation } = useContext(CartContext);


  useEffect(() => {
    let config = {
      method: "get",
      url: "https://api.escuelajs.co/api/v1/products",
    };
    axios
      .request(config)
      .then((response) => {
        setter(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    getUserLocation();
  }, []);

  const getUserLocation = () => {

    navigator.geolocation.getCurrentPosition(
      (data) => {
        axios
          .request({
            method: "get",
            url: `https://us1.locationiq.com/v1/reverse?key=pk.35b5f73e3594bb5040aff02f200a5696&lat=${data.coords.latitude}&lon=${data.coords.longitude}&format=json&`,
          })
          .then((response) => {
            setLocation(response.data);
          })
          .catch((error) => {
            console.error(error);
          });


      },
      (error) => {
        console.error("Error getting location:", error.message);
        // Handle errors or provide user feedback here
      },
      {
        enableHighAccuracy: true,  // Request high accuracy
        timeout: 5000,             // 5 seconds timeout
        maximumAge: 0              // Do not use cached location
      }
    );


  };
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
