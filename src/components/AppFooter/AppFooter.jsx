import style from "./AppFooter.module.css";
import * as React from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

function AppFooter() {
  const [buttonState, setButtonState] = useState("PRENOTA UN APPUNTAMENTO");
  const [sentMessage, setSentMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      fullName: "",
      object: "",
      phone: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("* Nome Obbligatorio"),
      object: Yup.string().required("* Oggetto della email obbligatorio"),
      email: Yup.string().email("email non valida").required("* email obbligatoria"),
      message: Yup.string().required("* messaggio obbligatorio"),
      phone: Yup.string().required("* Numero di telefono obbligatorio"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const serviceId = import.meta.env.VITE_SERVICE_ID;
        const templateId = import.meta.env.VITE_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_PUBLIC_KEY;
        await emailjs.send(serviceId, templateId, values, publicKey);
        setSentMessage("Email inviata con successo!");
        setButtonState("PRENOTA UN APPUNTAMENTO");
        resetForm();
      } catch (error) {
        setSentMessage("Si è verificato un errore durante l'invio dell'email.");
        console.error("Errore durante l'invio dell'email:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <section className={`${style.body} container-fluid`} id="footer">
      <div className="row">
        <div className="col-12 col-md-6 p-5 pb-0 pb-md-5">
          <div className="row mt-5">
            <h2 className="fs-1 tx-primary">PRENOTA UN APPUNTAMENTO</h2>
          </div>
          <div className="row">
            <div className="p text-secondary">
              Prenota il tuo appuntamento oggi stesso per goderti i nostri servizi di grooming personalizzati direttamente a casa tua. Scegli comodamente la data e l'orario che preferisci tramite la nostra sezione di prenotazione online. Assicurati di garantirti il trattamento di bellezza che meriti senza dover lasciare il comfort del tuo ambiente domestico.
            </div>
          </div>
          <div className="row my-5">
            <div className="col-5 col-md-2">
              <img src="src/assets/phoneimg.png" alt="" className={`${style.image} bg-white p-3`} />
            </div>
            <div className="col-7 col-md-10">
              <div className="row">
                <h5 className="tx-primary">CHIAMACI</h5>
              </div>
              <div className="row">
                <p className="text-secondary">(+310) 123 456 7890</p>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-5 col-md-2">
              <img src="src/assets/Envelopeicon.png" alt="" className={`${style.image} bg-white p-3`} />
            </div>
            <div className="col-7 col-md-10">
              <div className="row">
                <h5 className="tx-primary">INVIA CI UNA EMAIL</h5>
              </div>
              <div className="row">
                <p className="text-secondary">superbarber@barber.it</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 p-4 ">
          <form action="" className=" bg-white p-5 rounded-4" onSubmit={formik.handleSubmit}>
            <div className="row my-3">
              <label htmlFor="fullName">NOME COMPLETO</label>
              <input
                name="fullName"
                id="fullName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.fullName}
              />
              <div className={`expandable text-danger ${formik.touched.fullName && formik.errors.fullName ? "show" : ""}`}>
                {formik.errors.fullName}
              </div>
            </div>
            <div className="row my-3">
              <label htmlFor="object">OGGETTO</label>
              <input
                name="object"
                id="object"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.object}
              />
              <div className={`expandable text-danger ${formik.touched.object && formik.errors.object ? "show" : ""}`}>
                {formik.errors.object}
              </div>
            </div>
            <div className="row my-3">
              <div className="col-6 p-0">
                <label htmlFor="phone">NUMERO TEL.</label>
                <br />
                <input
                  name="phone"
                  id="phone"
                  type="text"
                  className="w-100"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                />
                <div className={`expandable text-danger ${formik.touched.phone && formik.errors.phone ? "show" : ""}`}>
                  {formik.errors.phone}
                </div>
              </div>
              <div className="col-6">
                <label htmlFor="email">EMAIL</label>
                <br />
                <input
                  name="email"
                  id="email"
                  type="text"
                  className="w-100"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <div className={`expandable text-danger ${formik.touched.email && formik.errors.email ? "show" : ""}`}>
                  {formik.errors.email}
                </div>
              </div>
            </div>
            <div className="row my-3">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                onChange={formik.handleChange}
                value={formik.values.message}
              ></textarea>
              <div className={`expandable text-danger ${formik.touched.message && formik.errors.message ? "show" : ""}`}>
                {formik.errors.message}
              </div>
            </div>
            <div className="row">
              <button type="submit" className="button1">
                {buttonState}
              </button>
            </div>
          </form>
          <div className="row">
            {sentMessage && <p className={sentMessage.includes("success") ? "success" : "error"}>{sentMessage}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppFooter;
