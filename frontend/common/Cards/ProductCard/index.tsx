import React from "react";
import { Wrapper } from "./styles";

import Temp from "../../../assets/Temp2.png";
import Image from "next/image";
import ProductLabel from "../../Labels/ProductsLabel";
import { PriceButtonStyle } from "../../Button/styles";
import { BuyTextButton } from "../../Button";

interface CardProps {
  price: number;
}

const ProductCard: React.FC<CardProps> = ({ price }) => {
  return (
    <Wrapper>
      <div className="img-wrap">
        <Image
          objectFit="contain"
          src={Temp}
          layout="responsive"
          alt="임시상품이미지"
        />
      </div>
      <div className="text-wrap">
        <div className="title">
          <h2>임시상품명</h2>
          <h3>Swiss Chress</h3>
        </div>
        <ProductLabel>초보집사</ProductLabel>
        <h3>₩ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
        <BuyTextButton />
      </div>
    </Wrapper>
  );
};

export default ProductCard;
