import scrollToFooter from "../../utils/scrollToFooter"

function AppServices() {
  return (
    <section className="container-fluid my-5" id="services">
      <div className="container-fluid">
        <div className="row">
          <h2 className="text-center fs-1">SCOPRI I NOSTRI SERVIZI</h2>
        </div>
        <div className="row w-50 mx-auto my-4">
          <p className="text-center text-secondary">
            Esplora i nostri servizi, con tagli moderni e trattamenti
            specializzati per la cura della barba. Dai tagli alla moda al
            grooming della barba, garantiamo un look impeccabile anche per i più
            piccoli. Scopri il comfort e la praticità di un parrucchiere a
            domicilio pensato per tutta la famiglia.
          </p>
        </div>
      </div>
      <div className="container p-5 bg-white">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="row my-5">
              <div className="col-4 d-flex justify-content-end p-4 align-items-start">
                <img src="../../../public/Adulthaircutimg.png" alt="" />
              </div>
              <div className="col-8">
                <div className="row">
                  <h4 className="p-0">TAGLIO ADULTO</h4>
                </div>
                <div className="row w-75">
                  <p className="p-0 text-secondary">
                    Per un look impeccabile e personalizzato, affidati al nostro
                    servizio di taglio per adulti, curato nei dettagli per
                    esprimere al meglio la tua personalità
                  </p>
                </div>
                <div className="row fs-3">€39</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="row my-5">
              <div className="col-4 d-flex justify-content-end p-4 align-items-start">
                <img src="../../../public/Kidshaircutimg.png" alt="" />
              </div>
              <div className="col-8">
                <div className="row">
                  <h4 className="p-0">TAGLIO BAMBINO</h4>
                </div>
                <div className="row w-75">
                  <p className="p-0 text-secondary">
                    I nostri parrucchieri specializzati offrono tagli divertenti
                    e alla moda per i più piccoli, garantendo un'esperienza
                    piacevole e risultati sorprendenti
                  </p>
                </div>
                <div className="row fs-3">€19</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="row my-5">
              <div className="col-4 d-flex justify-content-end p-4 align-items-start">
                <img src="../../../public/Beardtrimimg.png" alt="" />
              </div>
              <div className="col-8">
                <div className="row">
                  <h4 className="p-0">RIFINITURA BARBA</h4>
                </div>
                <div className="row w-75">
                  <p className="p-0 text-secondary">
                    Con la nostra attenta rifinitura, la tua barba sarà sempre
                    ben curata e definisce, completando il tuo look con stile e
                    precisione
                  </p>
                </div>
                <div className="row fs-3">€29</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="row my-5 ">
              <div className="col-4 d-flex justify-content-end p-4 align-items-start">
                <img src="../../../public/Barbershop.png" alt="" />
              </div>
              <div className="col-8">
                <div className="row">
                  <h4 className="p-0">RASATURA COLLO</h4>
                </div>
                <div className="row w-75">
                  <p className="p-0 text-secondary">
                    La nostra rasatura del collo assicura una linea netta e
                    professionale, conferendo al tuo taglio un aspetto ordinato
                    e impeccabile
                  </p>
                </div>
                <div className="row fs-3">€39</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="row my-5">
              <div className="col-4 d-flex justify-content-end p-4 align-items-start">
                <img src="../../../public/Scalpmoisturizingimg.png" alt="" />
              </div>
              <div className="col-8">
                <div className="row">
                  <h4 className="p-0">IDRATAZIONE CUOIO CAPELLUTO</h4>
                </div>
                <div className="row w-75">
                  <p className="p-0 text-secondary">
                    Nutri e riequilibra il tuo cuoio capelluto con il nostro
                    trattamento idratante, per capelli sani e una sensazione di
                    freschezza duratura
                  </p>
                </div>
                <div className="row fs-3">€10</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="row my-5">
              <div className="col-4 d-flex justify-content-end p-4 align-items-start">
                <img src="../../../public/Barbershop-1.png" alt="" />
              </div>
              <div className="col-8">
                <div className="row">
                  <h4 className="p-0">CURA BARBA</h4>
                </div>
                <div className="row w-75">
                  <p className="p-0 text-secondary">
                    Dai forma e cura alla tua barba con i nostri trattamenti
                    mirati, pensati per mantenere la tua barba in condizioni
                    ottimali e valorizzare il tuo viso
                  </p>
                </div>
                <div className="row fs-3">€49</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <button className="button1 my-4 justify-self-center" onClick={scrollToFooter}>
          PRENOTA UN APPUNTAMENTO
        </button>
      </div>
    </section>
  );
}

export default AppServices;
