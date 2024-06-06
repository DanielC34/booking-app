import "./featuredProperties.css";
import Granada from "../../assets/granada.jpg";
import LyonMetropole from "../../assets/lyonmetrople.jpg";
import Lisboa from "../../assets/lisboa.jpg";
import Luxembourg from "../../assets/luxembourg.jpg";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img src={Granada} alt="Granada" className="fpImg" />
        <span className="fpName">Gran Hotel Luna de Granada</span>
        <span className="fpCity">Granada</span>
        <span className="fpPrice">Starting from $210</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src={LyonMetropole} alt="Lyon" className="fpImg" />
        <span className="fpName">Hôtel Lyon Métropole</span>
        <span className="fpCity">Lyon</span>
        <span className="fpPrice">Starting from $240</span>
        <div className="fpRating">
          <button>9.2</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img src={Lisboa} alt="Lisbon" className="fpImg" />
        <span className="fpName">Four Seasons Hotel</span>
        <span className="fpCity">Lisbon</span>
        <span className="fpPrice">Starting from $99</span>
        <div className="fpRating">
          <button>8.6</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src={Luxembourg} alt="Luxembourg" className="fpImg" />
        <span className="fpName">LÉGÈRE HOTEL Luxembourg</span>
        <span className="fpCity">Luxembourg</span>
        <span className="fpPrice">Starting from $205</span>
        <div className="fpRating">
          <button>8.4</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
