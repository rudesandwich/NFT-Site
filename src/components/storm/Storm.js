import { stormInfo, stormInfo1 } from "./stormInfo";
import StormCard from "./StormCard";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../style/storm.css"


function Storm() {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


  return (
    <div className="Storm">
    <p className="title">Storm</p>
      <div className="stormSection" >
        <div className="topStorm" data-aos= "fade-right">
        <Slider {...settings}>
        {stormInfo.map((stormInfo) => (
            <StormCard
              key={stormInfo.key}
              img={stormInfo.img}
              title={stormInfo.title}
              collectionId={stormInfo.collectionId}
              collectionName={stormInfo.collectionName}
              price={stormInfo.price}
            />
          ))}
        </Slider>
          
        </div>
        <div className="bottomStorm" data-aos= "fade-right">
        <Slider {...settings}>
        {stormInfo1.map((stormInfo1) => (
            <StormCard
              key={stormInfo1.key}
              img={stormInfo1.img}
              title={stormInfo1.title}
              collectionId={stormInfo1.collectionId}
              collectionName={stormInfo1.collectionName}
              price={stormInfo1.price}
            />
          ))}
        </Slider>
        </div>
      </div>
    </div>
  );
}

export default Storm;
