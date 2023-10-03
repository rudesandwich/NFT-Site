import WaterQueen from "./waterqueen/WaterQueen";
import Storm from "./storm/Storm";
import { waterQueenImg } from "./waterqueen/waterQueenDetails";
import "./collection.css";

function Collection() {
  return (
    <div className="collectionSection">
      <div className="sectionInfo" data-aos="fade-up">
        <p className="title">Collections</p>
        <p className="details">Our Top Collections</p>
      </div>
      <p className="title waterTitle">Water Queen</p>
      <div className="waterQueen">
        {waterQueenImg.map((waterQueenImg) => (
          <WaterQueen img={waterQueenImg.img} />
        ))}
      </div>

      <Storm />
    </div>
  );
}

export default Collection;
