import style from "./AppHeader.module.css";
import scrollToFooter from "../../utils/scrollToFooter";
import scrollToServices from "../../utils/scrollToServices";

function AppHeader() {


  const scrollServices = () => {
    const componenteB = document.querySelector('#sevices');
    componenteB.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="p-0 m-0">
      <div
        className={`${style.body} container-fluid align-items-center justify-content-start justify-content-md-center vh-100 `}
      >
        <div
          className={`${style.textBlock} row justify-content-center align-items-start `}
        >
          <div className="row w-75">
            <h1 className={`${style.title} text-center tx-primary`}>
              LA SOLUZIONE DEFINITIVA PER LE PERSONE CON 1000 IMPEGNI
            </h1>
          </div>
          <div className="row px-5 my-2">
            <p className="text-center tx-primary">
              Sperimenta anche tu la convenienza di un barbiere a domicilio
            </p>
          </div>
          <div className="row w-50 justify-content-center">
            <div className="row justify-content-center ">
              <div className="col-12 col-md-6 d-flex justify-content-center p-0 ">
                <button className={`button1 btn`} onClick={scrollToFooter}>
                  Prenota un appuntamento
                </button>
              </div>
              <div className="col-12 col-md-6 my-2 my-md-0 d-flex justify-content-center p-0">
                <button className={`${style.button2} btn`} onClick={scrollToServices}>
                  Scopri i nostri servizi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center">
        <div className={`${style.informationBlock} row w-75 mt-3`}>
          <div className="col-12 col-md-4 bg-white pt-5">
            <div className="row justify-content-center">
              <img
                src="../../../public/address_img.png"
                alt="indirizzoImg"
                className={`${style.img}`}
              />
            </div>
            <div className="row">
              <h4 className="text-center my-2">INDIRIZZO</h4>
            </div>
            <div className={`${style.line} row w-50 mx-auto`}></div>
            <div className="row mt-3">
              <p className="text-center">
                3696 LYNDEN ROAD, LEFROY ONTARIO CANADA
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4 bg-white pt-5">
            <div className="row justify-content-center">
              <img
                src="../../../public/phone_img.png"
                alt="TelefonoImg"
                className={`${style.img}`}
              />
            </div>
            <div className="row">
              <h4 className="text-center my-2">TELEFONO</h4>
            </div>
            <div className={`${style.line} row w-50 mx-auto`}></div>
            <div className="row mt-3">
              <p className="text-center">+39 123-456-7890</p>
            </div>
          </div>
          <div className="col-12 col-md-4 bg-white pt-5">
            <div className="row justify-content-center">
              <img
                src="../../../public/hours_img.png"
                alt="Orologio"
                className={`${style.img}`}
              />
            </div>
            <div className="row">
              <h4 className="text-center my-2">ORARI</h4>
            </div>
            <div className={`${style.line} row w-50 mx-auto`}></div>
            <div className="row mt-3">
              <p className="text-center">
                LUN-VEN: 9-18 <br /> SAB-DOM: 9-13
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppHeader;
