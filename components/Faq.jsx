import prisma from "@/lib/prisma";
import FaqItem from "./FaqItem";

const Faq = async () => {
  const faqs = await prisma.faq.findMany({
    where: {
      publikovano: true,
    },
    orderBy: {
      poradi: "asc",
    },
  });

  return (
    <section className="section bg-doctor-blue">
      <div className="container mx-auto">
        {/* text */}
        <div className="text-center mx-auto xl:mb-8">
          <h2 className="h2 mb-3 text-center lg:text-left">
            Odpovědi na časté otázky
          </h2>
        </div>

        {/* faq items */}
        <ul className="w-full flex flex-col gap-2">
          {faqs.map((item) => (
            <li key={item.id}>
              <FaqItem
                title={item.otazka}
                description={item.odpoved}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
