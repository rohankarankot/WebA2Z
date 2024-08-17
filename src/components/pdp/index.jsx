import React, { useEffect, useState } from "react";
import ImageSliderComponent from "./imageSlider.component";
import { useSearchParams } from "react-router-dom";
import data from "../../mock/feed.json";

function ProductDec() {
  let [searchParams] = useSearchParams();
  const [currentProd, setcurrentProd] = useState();

  useEffect(() => {
    const productId = searchParams.get("id");
    const currentProduct = data.data?.filter(
      (product) => product.id == productId
    );
    setcurrentProd(currentProduct[0]);
  }, [searchParams]);

  return (
    <div className="container ">
      <div className="my-4">
        <div className="row">
          <ImageSliderComponent images={currentProd?.images} />
          <div className="pdp col-md-6">
            <p style={{ fontSize: "24px" }}>{currentProd?.title}</p>
            askldfklsdf Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellat dolores enim delectus pariatur error, sapiente quam eaque
            culpa nobis ipsam rerum eius aspernatur non fugit laboriosam, rem
            cum magni aliquam! Repellat eligendi repudiandae velit dolorem
            adipisci. Assumenda qui nulla debitis nisi, voluptas rem
            necessitatibus earum veritatis, ut natus expedita quibusdam quam
            officiis tempora doloremque repellendus deleniti ullam quos repellat
            sit laudantium cumque, perspiciatis molestiae. Totam vel deleniti
            labore officia, quisquam illum quis quos inventore tempore minus
            eius autem numquam eligendi delectus repellendus assumenda impedit
            praesentium. Non recusandae exercitationem debitis commodi possimus
            in soluta quis, laudantium nisi, doloribus placeat eum odio ratione
            quaerat illum facilis dolor dicta voluptatem repellendus iusto?
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDec;
