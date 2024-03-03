import "./styles.css";

const ErrorMessage = ({ callBack }) => {
  return (
    <div className="error" onClick={callBack}>
      <div className="error__text">Произошла ошибка!</div>
      <button className="error__button">Повторить запрос</button>
    </div>
  );
};

export { ErrorMessage };
