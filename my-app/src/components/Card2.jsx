import { FaArrowRight } from "react-icons/fa";

function Card({ title, description, image, image2 }) {
  return (
    <div className="cards-group">
      <div className="card">
        
        <div className="card-container">
        <img src={image2} alt="" className="background-fifths" />
          <div className="card-image-container">
            <img src={image} alt={title} className="card-image" />
          </div>

          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
          <div className="secondpage-button">
            <button className="secondpage-button-input">
              <span>

                GET STARTED
              </span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card