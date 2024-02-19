import ScrollAnimation from "react-animate-on-scroll";
import style from "./AppWhyUs.module.css"

function AppWhyUs() {
  return (
    <section className="container-fluid mt-5">
      <div className="row my-3">
        <h2 className="fs-1 text-center">PERCHE SCEGLIERCI</h2>
      </div>
      <div className="row w-50 mx-auto my-3 mb-5">
        <p className="text-secondary">
          Sceglierci significa garantirti la migliore cura per capelli e barba
          da parte di professionisti fidati e con esperienza, offrendoti un
          servizio personalizzato e risultati di alta qualità che superano le
          aspettative
        </p>
      </div>
      <ScrollAnimation className="row mt-5" animateIn="fadeInUp">
            <div  className="col-12 col-md-4 d-flex flex-column align-items-center">
                <div className="row justify-content-center">
                    <img src="src/assets/licensed_icon.png" alt="licensed" />
                </div>
                <div className="row">
                    <h4>CERTIFICATI</h4>
                </div>
                <div className={`${style.line} mb-3 row w-25`}></div>
                <div className="row w-50">
                    <p className="text-secondary text-center">Garanzia di qualità e competenza</p>
                </div>
            </div>
            <div  className="col-12 col-md-4 d-flex flex-column align-items-center">
                <div className="row justify-content-center">
                    <img src="src/assets/masters_icon.png" alt="master" />
                </div>
                <div className="row">
                    <h4>ESPERTI</h4>
                </div>
                <div className={`${style.line} mb-3 row w-25 `}></div>
                <div className="row w-50">
                    <p className="text-secondary text-center">Esperienza e conoscenza approfondita del settore</p>
                </div>
            </div>
            <div className="col-12 col-md-4 d-flex flex-column align-items-center">
                <div className="row justify-content-center">
                    <img src="src/assets/trusted_icon.png" alt="affidabilità" />
                </div>
                <div className="row">
                    <h4>AFFIDABILI</h4>
                </div>
                <div className={`${style.line} mb-3 row w-25`}></div>
                <div className="row w-50">
                    <p className="text-secondary text-center">Fiducia e sicurezza nei risultati.</p>
                </div>
            </div>
      </ScrollAnimation>
    </section>
  );
}

export default AppWhyUs;
