import { Wrapper } from "./styles";
import Image from "next/image";
import tempSearch01 from "../../../assets/onboarding/tempSearch01.jpg";
import tempSearch02 from "../../../assets/onboarding/tempSearch02.jpg";

const SearchItem = () => {
  return (
    <Wrapper>
      <div className="subcontent-wrap">
        <div className="img">
          <div className="img-wrap">
            <div className="back-wrap">
              <div className="back-img">
                <Image
                  src={tempSearch01}
                  alt="똑분 식물 검색 이미지 1"
                  className="banner-img"
                  layout="fill"
                />
              </div>
            </div>
            <div className="front-wrap">
              <div className="front-img">
                <Image
                  src={tempSearch02}
                  alt="똑분 식물 검색 이미지 2"
                  className="banner-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="title">
          <h2>Ddokbun's Smart Plant Pot</h2>
          <h3>똑분만의 스마트화분을 지금 만나보세요</h3>
        </div>
      </div>
    </Wrapper>
  );
};

export default SearchItem;