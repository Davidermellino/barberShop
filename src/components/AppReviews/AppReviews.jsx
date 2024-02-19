import style from "./AppReviews.module.css";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function AppReviews() {
  return (
    <section className={`${style.body} container-fluid`}>
      <div className={`${style.title}`}>
        <h2 className="fs-1 text-center">COSA PENSANO DI NOI</h2>
      </div>
      <div className="row align-items-center">
        <div className="col-12 col-md-4 d-flex flex-column alignitems-center order-2 order-md-1 ">
          <div className="row">
            <img
              src="src/assets/icon-google.png"
              alt="google icon"
              className={`${style.logo}`}
            />
          </div>
          <div className="row">
            <h4 className="text-center my-2">GOOGLE</h4>
          </div>
          <div className="row">
            <p className="text-center fs-1 m-0">4.9</p>
          </div>
          <div className="row w-50 mx-auto my-2 justify-content-center ">
            <div className="col-1">
              <FaStar className="text-warning" />
            </div>
            <div className="col-1">
              <FaStar className="text-warning" />
            </div>
            <div className="col-1">
              <FaStar className="text-warning" />
            </div>
            <div className="col-1">
              <FaStar className="text-warning" />
            </div>
            <div className="col-1">
              <FaStar className="text-warning" />
            </div>
          </div>
          <div className="row">
            <p className="text-secondary text-center">196 recensioni</p>
          </div>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="col-12 col-md-4  my-5 m-md-0 pt-5 order-1 order-md-2 mySwiper"
        >
          {/* SLIDE 1 */}
          <SwiperSlide className="border border-secondary rounded-5 pb-5">
            <div className={`row justify-content-center align-items-center`}>
              <div className={`${style.profileContainer}`}>
                <img
                  src="src/assets/Image_Thumbnail.png"
                  alt=""
                  className={`${style.profile}`}
                />
              </div>
            </div>
            <div className="row  w-50 mx-auto mb-3 justify-content-center">
              <div className="col-2">
                <FaStar className="text-warning" />
              </div>
              <div className="col-2">
                <FaStar className="text-warning" />
              </div>
              <div className="col-2">
                <FaStar className="text-warning" />
              </div>
              <div className="col-2">
                <FaStar className="text-warning" />
              </div>
              <div className="col-2">
                <FaStar className="text-warning" />
              </div>
            </div>
            <div className="row">
              <h5 className="text-center">MIGLIOR BARBIERE IN CIRCOLAZIONE</h5>
            </div>
            <div className="row w-75 mx-auto">
              <p className="text-secondary">
                Una barberia di eccellenza! Con professionisti certificati, il
                vostro servizio è impeccabile e le vostre competenze
                straordinarie.
              </p>
            </div>
            <div className="row">
              <p className="text-center">MARIO ROSSI</p>
            </div>
          </SwiperSlide>
          {/* SLIDE 2 */}
          <SwiperSlide className="border border-secondary rounded-5 pb-5">
            <div className={`row justify-content-center align-items-center`}>
              <div className={`${style.profileContainer}`}>
                <img
                  src="src/assets/carlo_conti.jpg"
                  alt=""
                  className={`${style.profile}`}
                />
              </div>
            </div>
            <div className="row  w-50 mx-auto mb-3 justify-content-center">
              <div className="col-2">
                <FaStar className="text-warning" />
              </div>
              <div className="col-2">
                <FaStar className="text-warning" />
              </div>
              <div className="col-2">
                <FaStar className="text-warning" />
              </div>
              <div className="col-2">
                <FaStar className="text-warning" />
              </div>
              <div className="col-2">
                <FaStar className="text-warning" />
              </div>
            </div>
            <div className="row">
              <h5 className="text-center">OTTIMO SERVIZIO</h5>
            </div>
            <div className="row w-75 mx-auto">
              <p className="text-secondary">
                Il servizio di taglio per adulti di questo parrucchiere a
                domicilio è semplicemente eccellente. I parrucchieri sono
                professionisti esperti che creano tagli personalizzati perfetti
                per esprimere la propria personalità. Consiglio vivamente!
              </p>
            </div>
            <div className="row">
              <p className="text-center">CARLO CONTI</p>
            </div>
          </SwiperSlide>
          {/* SLIDE 3 */}
          <SwiperSlide className="border border-secondary rounded-5 pb-5">
            <div className={`row justify-content-center align-items-center`}>
              <div className={`${style.profileContainer}`}>
                <img
                  src="src/assets/SaraMarras.jpg"
                  alt=""
                  className={`${style.profile}`}
                />
              </div>
            </div>
            <div className="row  w-50 mx-auto mb-3 justify-content-center">
              <div className="col-2">
                <FaStar className="text-warning" />
              </div>
              <div className="col-2">
                <FaStar className="text-warning" />
              </div>
              <div className="col-2">
                <FaStar className="text-warning" />
              </div>
              <div className="col-2">
                <FaStar className="text-warning" />
              </div>
              <div className="col-2">
                <FaStar className="text-warning" />
              </div>
            </div>
            <div className="row">
              <h5 className="text-center">TAGLI FANTASTICI PER I BAMBINI</h5>
            </div>
            <div className="row w-75 mx-auto">
              <p className="text-secondary">
                Utilizzare il barbiere a domicilio per i miei bambini è sempre
                un piacere. I parrucchieri sono pazienti e abili nel creare
                tagli divertenti e alla moda che soddisfano sia i piccoli che i
                genitori. Un'esperienza davvero positiva!
              </p>
            </div>
            <div className="row">
              <p className="text-center">SARA MARRAS</p>
            </div>
          </SwiperSlide>
          {/* SLIDE 4 */}
          <SwiperSlide className="border border-secondary rounded-5 pb-5">
            <div className={`row justify-content-center align-items-center`}>
              <div className={`${style.profileContainer}`}>
                <img
                  src="src/assets/kratos.jpg"
                  alt=""
                  className={`${style.profile}`}
                />
              </div>
            </div>
            <div className="row  w-50 mx-auto mb-3 justify-content-center">
              <div className="col-2">
                <FaStar className="text-warning" />
              </div>
              <div className="col-2">
                <FaStar className="text-warning" />
              </div>
              <div className="col-2">
                <FaStar className="text-warning" />
              </div>
              <div className="col-2">
                <FaStar className="text-warning" />
              </div>
              <div className="col-2">
                <FaStar className="text-warning" />
              </div>
            </div>
            <div className="row">
              <h5 className="text-center">BARBA RIFINITA CON PRECISIONE</h5>
            </div>
            <div className="row w-75 mx-auto">
              <p className="text-secondary">
                Ho provato il servizio di rifinitura barba e sono rimasto
                estremamente soddisfatto. La precisione e l'attenzione ai
                dettagli del parrucchiere hanno reso la mia barba impeccabile.
                Sicuramente riutilizzerò questo servizio per ulteriori
                trattamenti
              </p>
            </div>
            <div className="row">
              <p className="text-center">KRATOS</p>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="col-12 col-md-4 d-flex flex-column alignitems-center order-3 mt-5 mt-md-0">
          <div className="row">
            <img
              src="src/assets/icon-tripadvisor.png"
              alt="google icon"
              className={`${style.logo}`}
            />
          </div>
          <div className="row">
            <h4 className="text-center my-2">TRIPADVISOR</h4>
          </div>
          <div className="row">
            <p className="text-center fs-1 m-0">5.0</p>
          </div>
          <div className="row w-50 mx-auto my-2 justify-content-center ">
            <div className="col-1">
              <FaStar className="text-warning" />
            </div>
            <div className="col-1">
              <FaStar className="text-warning" />
            </div>
            <div className="col-1">
              <FaStar className="text-warning" />
            </div>
            <div className="col-1">
              <FaStar className="text-warning" />
            </div>
            <div className="col-1">
              <FaStar className="text-warning" />
            </div>
          </div>
          <div className="row">
            <p className="text-secondary text-center">147 recensioni</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppReviews;
