import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

const socialsData = [
  {
    icon: <Facebook />,
    path: "https://www.facebook.com/profimachining",
  },
  {
    icon: <Instagram />,
    path: "https://www.instagram.com/profimachining/",
  },
];

const Socials = ({ containerStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {socialsData.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
