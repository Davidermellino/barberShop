import { useEffect, useRef, useState } from "react";
import style from "./AppInformations.module.css";
import useElementOnScreen from "../../hooks/useElementOnScreen";

function AppInformations() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  });

  const initialCounter = useRef(0);
  const initialCounter2 = useRef(0);

  useEffect(() => {
    initialCounter.current = counter;
    initialCounter2.current = counter2;
  }, [counter, counter2]);

  useEffect(() => {
    let intervalId1, intervalId2;

    if (isVisible) {
      intervalId1 = setInterval(() => {
        if (initialCounter.current < 99) {
          setCounter((prevCount) => prevCount + 1);
        }
      }, 20);

      intervalId2 = setInterval(() => {
        if (initialCounter2.current < 10) {
          setCounter2((prevCount) => prevCount + 1);
        }
      }, 200);
    }

    return () => {
      clearInterval(intervalId1);
      clearInterval(intervalId2);
    };
  }, [isVisible]);

  return (
    <section className={`container-fluid mt-0 mt-md-5 p-0`}>
      <div className="row w-100 my-0 my-md-5">
        <div className="col-12 my-5 col-md-6">
          <div className="row mx-auto w-75">
            <h2 className="fs-1">TAGLIATI I CAPELLI DIRETTAMENTE A CASA</h2>
          </div>
          <div className="row mx-auto w-75 my-4">
            <p className="text-secondary">
              Con il nostro servizio non dovrai più perdere tempo a prepararti,
              uscire e fare la fila dal parrucchiere
            </p>
          </div>
          <div className="row mx-auto w-75 my-4" ref={containerRef}>
            <div className="col-6">
              <div className="row">
                <p
                  className={`fs-1 ${counter === 99 ? `${style.effect}` : ""}`}
                >
                  {counter} <span className="tx-secondary">%</span>
                </p>
              </div>
              <div className="row">
                <p>CLIENTI SODDISFATTI</p>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <p
                  className={`fs-1 ${counter2 === 10 ? `${style.effect}` : ""}`}
                >
                  {counter2} <span className="tx-secondary">+</span>
                </p>
              </div>
              <div className="row">ANNI DI ESPERIENZA</div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 p-0">
          <img src="src/assets/Image.png" alt="" className="img-fluid" />
        </div>
      </div>
    </section>
  );
}

export default AppInformations;
