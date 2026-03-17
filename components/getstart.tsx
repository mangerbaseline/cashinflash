import Image from "next/image";

const GetStartSection = () => {
  return (
    <section className="relative w-full py-28 text-center text-white overflow-hidden
    bg-[radial-gradient(circle_at_center,#1ed760_0%,#0c2b23_70%)]">

        

      {/* floating images */}
      <div className="absolute top-[40px] left-1/2 -translate-x-1/2 flex items-center gap-6">
        <div className="absolute top-[105px] left-1/2 -translate-x-1/2
w-[767px] h-[154px] bg-white rounded-[90px] z-0">
</div>
        <Image
          src="/side.png"
          width={220}
          height={420}
          alt=""
          className="opacity-30 blur-sm"
        />

        <Image
          src="/phone.png"
          width={220}
          height={350}
          alt=""
          className="z-10"
          />

        <Image
          src="/men.png"
          width={240}
          height={460}
          alt=""
          className="z-10 -ml-10"
        />

        <Image
          src="/side.png"
          width={220}
          height={420}
          alt=""
          className="opacity-30 blur-sm"
        />

      </div>

      {/* content */}
      <div className="relative z-20 max-w-3xl mx-auto mt-40">

        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Smart <span className="text-green-400">Financial Solutions,</span>
          <br />
          Right At Your Fingertips.
        </h2>

        <p className="mt-4 text-gray-300">
          The Cash in Flash app helps you set goals and save automatically.
        </p>

        <button className="mt-8 bg-green-500 px-6 py-3 rounded-full font-semibold hover:bg-green-600">
          Get the Cash in Flash app →
        </button>

        <p className="text-sm text-gray-400 mt-3">
          Standard data charges may apply
        </p>

      </div>
    </section>
  );
};

export default GetStartSection;