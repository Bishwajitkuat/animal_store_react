import "./Card.css";

const Card = (props) => {
  return (
    <div id={props.id} className="cardDiv">
      <button className="cardDeletBtn" onClick={props.cardDelete}>
        X
      </button>
      <img className="cardImg" src={props.url} alt="Animal" />
      <h2 className="cardHeading">{props.name}</h2>
      <div className="cardLikeBtn">
        <button className="likeBtn" onClick={props.cardLike}>
          &#128077;
        </button>
        <button className="loveBtn">&#10084;</button>
        <p>{props.likeCount}</p>
        <button className="disLieeBtn" onClick={props.cardDisLike}>
          &#128078;
        </button>
      </div>
    </div>
  );
};

export default Card;
