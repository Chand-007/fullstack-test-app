import "./message.css";

export default function MessageContainer({
  name,
  email,
  id,
  body,
  check,
  setCheck,
  onChangeCheck,
  favorite,
  setFavorite,
  changeFavorite,
  handleModal,
}) {
  return (
    <div
      className={
        check.indexOf(id) !== -1
          ? "message-container check-message"
          : "message-container"
      }
    >
      <div className="check-button-title-container">
        <div className="checkbox-container">
          <input
            type="checkbox"
            checked={check.indexOf(id) !== -1}
            onChange={() => onChangeCheck(id)}
          />
        </div>
        <div className="button-container">
          <button
            className={favorite.includes(id) ? "favorite-button" : ""}
            onClick={() => changeFavorite(id)}
          >
            Favorite
          </button>
        </div>
        <div className="title-container">
          <p onClick={() => handleModal(id)}>{name.slice(0, 10)}</p>
        </div>
      </div>
      <div className="body-container">
        <p>
          [{body.slice(0, 15)}] {body.slice(15, 85)}
        </p>
      </div>
    </div>
  );
}
