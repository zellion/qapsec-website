import React, { useState } from "react";
import Section from "../utils/Section";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import Button from "../utils/Button";
import { contact } from "../../assets";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const form = React.useRef(null);
  const [message, setMessage] = useState<string | null>(null);
  const [messageLength, setMessageLength] = useState<number>(0);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageLength(e.target.value.length);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      throw new Error(
        "Environment variables SERVICE_ID, TEMPLATE_ID, or PUBLIC_KEY are not defined"
      );
    }

    if (form.current) {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
          publicKey: PUBLIC_KEY,
        })
        .then(
          () => {
            console.log("SUCCESS!");
            setMessage(t("email_send_ok"));
            form.current?.reset();
          },
          (error) => {
            console.log("FAILED...", error);
            setMessage(`${t("email_send_nok")}: ${error}`);
          }
        );
    }
  };

  return (
    <Section
      className="md:px-24 pt-[12rem] -mt-[5.25rem] grid md:grid-cols-2 md:gap-12 lg:gap-24 xl:gap-32"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="contact"
    >
      <div className="h-full">
        <div className="container mx-auto py-0 text-center xl:text-left flex items-center justify-center">
          <div className="flex flex-col w-full max-w-[1000px] bg-color-8/10 opacity-60 rounded-lg">
            <h2 className="h2 text-center mb-12 py-3">{t("form_title")} !</h2>
            <form
              className="flex-1 flex flex-col gap-6 w-full mx-auto px-4"
              ref={form}
              onSubmit={sendEmail}
            >
              <input
                type="text"
                placeholder={t("form_name")}
                className="input max-w-[500px]"
                name="user_name"
                maxLength={40}
              />
              <input
                type="email"
                placeholder={t("form_email")}
                className="input max-w-[600px]"
                name="user_email"
                required
                maxLength={50}
              />
              <input
                type="tel"
                placeholder={t("form_phone")}
                className="input max-w-[500px]"
                name="user_phone"
                maxLength={20}
              />
              <input
                type="text"
                placeholder={t("form_subject")}
                className="input"
                name="subject"
                maxLength={80}
              />
              <textarea
                placeholder={t("form_message")}
                className="textarea resize-y"
                name="message"
                maxLength={1000}
                rows={15}
                onChange={handleTextChange}
              />

              <Button className="max-w-[160px] text-xl">
                <input type="submit" value={t("form_send")} />
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="h-full">
        <div className="container mx-auto py-10 text-center xl:text-left flex items-center justify-center">
          <div className="flex flex-col w-full max-w-[700px]">
            <h2 className="h2 text-left mb-12 py-3">{t("contact_title")} !</h2>
            <div>
              <p>{t("contact_speech")}</p>
            </div>
            <div className="py-10">
              <p>Notre addresse : {""}</p>
              <a href={`mailto:${t("email")}`}>{t("email")}</a>
            </div>
            <img src={contact} alt="contact" className="mx-auto w-1/2" />
          </div>
        </div>
      </div>

      {message && <p>{message}</p>}
    </Section>
  );
};

export default Contact;
