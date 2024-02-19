import style from "./AppPopup.module.css"
import scrollToFooter from "../../utils/scrollToFooter"


function AppPopup() {
  return (
    <section className={`${style.body} d-flex flex-column justify-content-center my-5`}>
        <div className="row w-50 mx-auto">
            <h2 className="tx-primary fs-1">
                SPERIMENTA IL LUSSO DI UTILIZZARE I SERVIZI DI UN PARRUCCHIERE DIRETTAMENTE A CASA TUA
            </h2>
        </div>
        <div className="row mx-auto mt-4">
            <button className="button1" onClick={scrollToFooter}>PRENOTA UN APPUNTAMENTO</button>
        </div>
    </section>
  );
}

export default AppPopup;
