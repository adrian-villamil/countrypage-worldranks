import Image from "next/image";
import Link from "next/link";

export const HeroImage = () => {
  return (
    <div className="h-[300px] bg-black overflow-hidden absolute top-0 left-0 w-full -z-30">
      <Image
        src={'/hero-image-wr.jpg'}
        alt="hero-image"
        width={1280}
        height={300}
        priority
        className="absolute top-[49px] xl:top-0 left-1/2 -translate-x-1/2 h-[276px] xl:h-[300px] object-cover -z-20"
      />
      <Link
        href={'/'}
        className="absolute top-[120px] left-1/2 -translate-x-1/2 -z-10"
      >
        <Image
          src={'/Logo.svg'}
          alt="Logo"
          width={174}
          height={24}
          priority
        />
      </Link>
    </div>
  );
};
