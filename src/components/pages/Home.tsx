import { useTranslation } from "react-i18next";
import { curve, home } from "../../assets";
import Section from "../utils/Section";
import Button from "../utils/Button";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Section
      className="md:px-24 pt-[12rem] -mt-[5.25rem] grid md:grid-cols-2 md:gap-12 lg:gap-24 xl:gap-32"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="home"
    >
      <div className="container relative flex flex-wrap">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem] xl:flex-1">
          <h1 className="h1 mb-6">
            <span className="inline-block relative">
              {t("site")}
              <img
                src={curve}
                alt="curve"
                className="absolute top-full left-0 w-full xl:-mt-0"
              />
            </span>
          </h1>
          <h2 className="h2">{t("subtitle")}</h2>
          <p className="xl:mt-10 body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            {t("description")}
          </p>
          <Button className="" href="/services" white>
            {t("services")}
          </Button>
          <Button className="" href="/case-study" white>
            {t("case-study")}
          </Button>
        </div>
      </div>
      <div className="container relative">
        <div className="bg-n-10 rounded-t-[0.9rem]">
          <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
            <img
              src={home}
              alt="qapsec"
              className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
              width={512}
              height={245}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Home;
