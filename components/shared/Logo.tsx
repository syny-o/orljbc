import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex justify-center items-center">
      <Image
        src="/assets/img/logo/logo_t.png"
        width={50}
        height={50}
        alt="ORLJBC logo"
      />
      <h3 className="text-5xl font-semibold pl-1">
        <span className="text-gray-400">ORL</span><span className="text-accent font-bold font-secondary">JBC</span>
      </h3>
    </div>
  );
}
