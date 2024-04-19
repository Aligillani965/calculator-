import styles from "./ButtonsContainer.module.css";

function ButtonsContainer({ onButtonClick }) {
  const Bnames = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    "=",
    ".",
  ];
  
  return (
    <div className={styles.buttonsContainer}>
      {Bnames.map((name) => (
        name === "c" ? (
          <button
            key={name}
            className={styles.button}
            onClick={() => onButtonClick(name)}
          >
            {name}
          </button>
        ) : (
          <button
            key={name}
            className={styles.button}
            onClick={() => onButtonClick(name)}
          >
            {name}
          </button>
        )
      ))}
    </div>
  );
}

export default ButtonsContainer;
