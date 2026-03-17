import Image from "next/image";

const MediaLogos = () => {
  return (
    <section className="w-full py-12 bg-white">
      <div className=" flex flex-row sm:max-w-6xl sm:mx-auto px-6 items-center justify-between sm:flex-wrap sm:gap-8">

        <Image
          src="/forbes.png"
          alt="Forbes"
          width={140}
          height={40}
          className="hidden sm:block object-contain"
        />

        <Image
          src="/businessinsider.png"
          alt="Business Insider"
          width={160}
          height={40}
          className="object-contain w-[92px] "
        />

        <Image
          src="/usatoday.png"
          alt="USA Today"
          width={140}
          height={40}
          className="object-contain w-[92px]"
        />

        <Image
          src="/aol.png"
          alt="AOL"
          width={100}
          height={40}
          className="object-contain w-[92px]"
        />

        <Image
          src="/yahoo.png"
          alt="Yahoo Finance"
          width={160}
          height={40}
          className="hidden sm:block object-contain"
        />

      </div>
    </section>
  );
};

export default MediaLogos;