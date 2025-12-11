
import FaqItem from "./FaqItem";
import { FAQ_DATA } from "@/lib/constants";


const Faq = () => {
  return (
    <section className="section bg-doctor-blue">
      <div className="container mx-auto">
        {/* text */}
        <div
          // variants={fadeIn("up", 0.2)}
          // initial="hidden"
          // whileInView="show"
          // viewport={{ once: false, amount: 0.2 }}
          className="text-center mx-auto xl:mb-8"
        >
          <h2 className="h2 mb-3 text-center lg:text-left">Odpovědi na časté otázky</h2>
          {/* <p className="mb-11 max-w-[480px] mx-auto">
            Připravili jsme odpovědi na nejčastější otázky, které vám pomohou
            lépe se zorientovat v servisu vašeho vozu.
          </p> */}
        </div>
        {/* faq items */}
        <ul className="w-full flex flex-col">
          {FAQ_DATA.map((item, index) => {
            return (
              <li
                key={index}
                // variants={faqItemVariants}
                // initial="hidden"
                // whileInView="visible"
                // viewport={{ once: false, amount: 0.8 }}
                // custom={index} // pass index to control stagger effect
              >
                <FaqItem title={item.title} description={item.description} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
