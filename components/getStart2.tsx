import Image from "next/image";
import { MapPin, Phone, Globe } from "lucide-react";

const GetStartedTwo = () => {
  return (
    <section className="w-full bg-[#F4F7F6] py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* top section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">

          {/* heading */}
          <div className="max-w-xl">
            <h2 className="text-5xl font-bold text-gray-900 font-tilt-warp font-normal">
              Three Simple Ways To <br />
              <span className="text-green-500">Get Started</span>
              <Image src={'/underline.svg'} alt="" width={239} height={1} className="relative left-0 top-0 md:max-w-[239px]" />
              
            </h2>

            <p className="text-[#676F7E] mt-4 text-lg">
              Apply online today for fast approval and flexible repayment
              options. Our streamlined process helps you access your funds
              quickly.
            </p>
          </div>

          {/* testimonial */}
          <div className="flex items-center justify-start gap-4 bg-[#E7EFEA] rounded-xl p-4 max-w-md">
            
            <div className="relative aspect-square overflow-hidden w-[120px] h-[75px] rounded-full">
              <Image
              src="/GirlProfile.jpg"
              fill
              alt=""
              className="object-cover rounded-full"
            />
            </div>
            

            <div>
              <div className="flex items-center gap-2 text-xl font-semibold text">
                — Maria R.
                <span className="text-orange-400">★★★★★</span>
              </div>

              <p className="text-sm text-gray-600 mt-1">
                “Fast, easy, and stress-free. Cash in Flash really came
                through when I needed it.”
              </p>
            </div>
          </div>
        </div>

        {/* steps */}
        <div className="grid md:grid-cols-3 gap-10">

          <div className="flex gap-4">
            <Image src={'/getStart/map.svg'} width={80} height={80} alt="" className="" />
            {/* <MapPin className="text-green-500" size={28} /> */}
            <div>
              <h3 className="font-semibold text-2xl text-gray-900"> <span className="bg-[#172136] text-white text-xs rounded-full p-2">01</span> In Person</h3>
              <p className="text-base text-gray-500 mt-2">
                Complete our simple online application in just 5 minutes
                no hassle.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            {/* <Phone className="text-green-500" size={28} /> */}
            <Image src={'/getStart/phone.svg'} width={80} height={80} alt="" className="" />

            <div>
              <h3 className="font-semibold text-2xl text-gray-900"><span className="bg-[#172136] text-white text-xs rounded-full p-2">02</span> By Phone</h3>
              <p className="text-base text-gray-500 mt-2">
                Get an instant decision. Most applications are approved
                within minutes.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            {/* <Globe className="text-green-500" size={28} /> */}
            <Image src={'/getStart/online.svg'} width={80} height={80} alt="" className="" />
            <div>
              <h3 className="font-semibold text-2xl text-gray-900"><span className="bg-[#172136] text-white text-xs rounded-full p-2">03</span> Online</h3>
              <p className="text-base text-gray-500 mt-2">
                Get your funds are deposited directly and quickly.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GetStartedTwo;