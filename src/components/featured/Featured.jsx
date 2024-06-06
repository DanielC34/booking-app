import "./featured.css";
import Vienna from '../../assets/vienna.jpg'
import Athens from '../../assets/athens.jpg'
import Lyon from '../../assets/lyon.jpg'

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src={Lyon}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Lyon</h1>
          <h2>43 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src={Vienna}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Vienna</h1>
          <h2>33 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src={Athens}
          className="featuredImg"
          alt="Athens"
        />
        <div className="featuredTitles">
          <h1>Athens</h1>
          <h2>52 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
