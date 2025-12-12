import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InfoBadges from "@/components/InfoBadges";
import News from "@/components/News";
import OpeningHours from "@/components/OpeningHours";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import NavMobile from "@/components/NavMobile";

export default async function HomePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <>
      <Header session={session} />
      <Hero />
      <InfoBadges />
      <News />
      <OpeningHours />
      <Faq />
      <Footer />
    </>
  );
}
