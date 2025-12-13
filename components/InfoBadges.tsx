import { Check, Info, X } from "lucide-react";
import Badge from "./shared/Badge";


export default function InfoBadges(){
    return <section className="section bg-muted" id="info">
        <div className="container flex flex-col items-center">
            <h2 className="h2 mb-10">Důležité informace</h2>
            <Badge text="Na vyšetření pacienty objednáváme. Telefonické objednání na čísle 483369269 v ordinační dny nejlépe mezi 10:00-11:00 a 12:30-13:30. Akutní případy mimo vymezenou dobu ošetříme po domluvě." icon={<Info />} className="mb-5"/>
            <Badge text="Máme smlouvu s pojišťovnou VZP -111, ZP MV ČR -211, ZPŠ - 209, VoZP -201 ,ČPZP -205, RBP -213" icon={<Check />} className="mb-5" />
            <Badge text="Nemáme smlouvu s pojišťovnou OZP - 207" icon={<X />} className="mb-5" />
        </div>
    </section>
}