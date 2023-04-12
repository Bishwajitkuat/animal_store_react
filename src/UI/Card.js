import "./Card.css";

const Card = (props) => {
  return (
    <div className="cardDiv">
      <button className="cardDeletBtn" onClick={props.cardDelete}>
        X
      </button>
      <img className="cardImg" src={props.url} alt="" />
      <h2 className="cardHeading">{props.name}</h2>
      <div className="cardLikeBtn">
        <button className="likeBtn" onClick={props.cardLike}>
          &#128077;
        </button>
        {props.likeCount >= 0 ? (
          <p>❤️{props.likeCount}</p>
        ) : (
          <p>💔{props.likeCount}</p>
        )}
        {/* it does not work
        <p>
          {props.likes >= 0 ? `❤️` : `💔`}
          {props.likeCount}
        </p> */}
        <button className="disLikeBtn" onClick={props.cardDisLike}>
          &#128078;
        </button>
      </div>
    </div>
  );
};

export default Card;
