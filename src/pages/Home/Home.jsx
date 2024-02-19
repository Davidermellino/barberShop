import AppHeader from "../../components/AppHeader/AppHeader";
import AppInformations from "../../components/AppInformations/AppInformations";
import AppPopup from "../../components/AppPopup/AppPopup";
import AppReviews from "../../components/AppReviews/AppReviews";
import AppServices from "../../components/AppSevices/AppServices";
import AppWhyUs from "../../components/AppWhyUs/AppWhyUs";

function Home() {
  return (
    <div className="container-fluid p-0">
        <div className="row p-0 m-0">
            <AppHeader /> 
        </div>
        <div className="row p-0 m-0">
            <AppInformations />
        </div>
        <div className="row p-0 m-0">
            <AppServices />
        </div>
        <div className="row p-0 m-0">
            <AppPopup />
        </div>
        <div className="row p-0 m-0">
            <AppWhyUs />
        </div>
        <div className="row p-0 m-0">
            <AppReviews />
        </div>
    </div>
  );
}
export default Home;
