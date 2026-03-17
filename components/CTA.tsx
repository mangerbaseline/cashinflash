import Image from "next/image";

const CTASection = () => {
  return (
    <section className="relative w-full h-[276px] bg-[#E4FDF2] flex items-center justify-center overflow-hidden">

      {/* background image */}
      <Image
        src="/cta.jpg"
        alt=""
        fill
        className="object-cover object-[60%_30%] opacity-30"
      />

      {/* content */}
      <div className="relative text-center">

        
        <Image src="/Logo.png" alt="" width={200} height={200} className="ml-11" />

        <p className="text-gray-700 mt-2">
          ··· More than a loan. It’s peace of mind. ···
        </p>

        <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">
          Apply now
        </button>

      </div>
    </section>
  );
};

export default CTASection;