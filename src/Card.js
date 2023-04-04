import "./Card.css";

const Card = (props) => {
  return (
    <div className="cardDiv">
      <button className="cardDeletBtn" onClick={props.cardDelete}>
        X
      </button>
      <img className="cardImg" src={props.url} alt="Animal" />
      <h2 className="cardHeading">{props.name}</h2>
      <div className="cardLikeBtn">
        <button className="cardLikeBtn" onClick={props.cardLike}>
          <span className="material-symbols-outlined">heart_plus</span>
        </button>
        <span className="material-symbols-outlined favorite">favorite</span>
        <p>{props.likeCount}</p>
        <button className="cardDisLieeBtn" onClick={props.cardDisLike}>
          <span className="material-symbols-outlined">heart_minus</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
