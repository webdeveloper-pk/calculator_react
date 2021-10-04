import React, { useState } from "react";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  const onClickHandler = (e) => {
    setResult(result.concat(e.target.name));
  };

  const onClear = () => {
    setResult("");
    setHistory([]);
  };

  const onBackspace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const onCalculate = () => {
    try {
      setResult(eval(result).toString());
      setHistory([...history, result]);
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.calculator}>
        <div className={styles.historyStyle}>
          {history.map((value, ind) => {
            return <div>{`${value} = ${eval(value)}`}</div>;
          })}
        </div>
        <div className={styles.screen}>
          <input type="text" value={result} />
        </div>
        <div className={styles.keyboard}>
          <div className={styles.inner_keyboard}>
            <button
              className={styles.funtions_buttons}
              name="clear"
              onClick={onClear}
            >
              CE
            </button>

            <button
              className={styles.funtions_buttons}
              name="c"
              onClick={onBackspace}
            >
              C
            </button>

            <button
              className={styles.funtions_buttons}
              name="%"
              onClick={onClickHandler}
            >
              %
            </button>

            <button
              className={styles.funtions_buttons}
              name="/"
              onClick={onClickHandler}
            >
              /
            </button>
          </div>

          <div className={styles.inner_keyboard}>
            <button name="7" onClick={onClickHandler}>
              7
            </button>

            <button name="8" onClick={onClickHandler}>
              8
            </button>

            <button name="9" onClick={onClickHandler}>
              9
            </button>

            <button
              className={styles.funtions_buttons}
              name="*"
              onClick={onClickHandler}
            >
              *
            </button>
          </div>

          <div className={styles.inner_keyboard}>
            <button name="4" onClick={onClickHandler}>
              4
            </button>

            <button name="5" onClick={onClickHandler}>
              5
            </button>

            <button name="6" onClick={onClickHandler}>
              6
            </button>

            <button
              className={styles.funtions_buttons}
              name="-"
              onClick={onClickHandler}
            >
              -
            </button>
          </div>

          <div className={styles.inner_keyboard}>
            <button name="1" onClick={onClickHandler}>
              1
            </button>

            <button name="2" onClick={onClickHandler}>
              2
            </button>

            <button name="3" onClick={onClickHandler}>
              3
            </button>

            <button
              className={styles.funtions_buttons}
              name="+"
              onClick={onClickHandler}
            >
              +
            </button>
          </div>
          <div className={styles.inner_keyboard}>
            <button name="" onClick={onClickHandler}></button>

            <button name="0" onClick={onClickHandler}>
              0
            </button>
            <button name="" onClick={onClickHandler}></button>
            <button
              className={styles.funtions_buttons}
              name="="
              onClick={onCalculate}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
