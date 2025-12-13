import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex justify-center items-center">
      <Image
        src="/assets/img/logo/logo_t.png"
        width={40}
        height={40}
        alt="ORLJBC logo"
      />
      <h3 className="text-5xl pl-1">
        <span className="text-gray-400 font-secondary font-semibold">ORL</span><span className="font-semibold text-accent font-secondary">JBC</span>
      </h3>
    </div>
  );
}
