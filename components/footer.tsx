import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F5F7F6] pt-16 pb-10">
      <div className="max-w-7xl px-4 md:px-8 lg:px-12 mx-auto">
        {/* top flex container */}
        <div className="flex flex-wrap lg:flex-nowrap">
          {/* Quick links */}
          <div className="w-1/2 md:w-1/5 mb-8">
            <h4 className="font-semibold mb-4 md:text-[16.9px]">Quick Links</h4>
            <ul className="space-y-2 md:text-base text-[#606060]">
              <li>About</li>
              <li>Team</li>
              <li>Careers</li>
              <li>News</li>
              <li>Investors</li>
              <li>Enterprise Platform</li>
              <li>HealthPlan Transparency in Coverage</li>
              <li>Form ADV</li>
            </ul>
          </div>

          {/* Help */}
          <div className="w-1/2 md:w-1/5 mb-8">
            <h4 className="font-semibold mb-4">Help</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>App help center</li>
              <li>Contact us</li>
              <li>Questions</li>
              <li>Locations</li>
              <li>Tools & learning</li>
            </ul>
          </div>

          {/* Products */}
          <div className="w-1/2 md:w-1/5 mb-8">
            <h4 className="font-semibold mt-8 md:mt-0 mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Make a payment</li>
              <li>Personal loans</li>
              <li>Savings: Set & Save</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="w-1/2 md:w-1/5 mb-8">
            <h4 className="font-semibold mt-8 md:mt-0 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>(866) 488-6090</li>
              <li>clashinflash.com</li>
              <li>Log in</li>
            </ul>
          </div>

          {/* Sign up - Desktop */}
          <div className="hidden md:block md:w-1/5 md:mt-0 md:mr-20">
            <div>
              <h4 className="font-semibold mb-4">Sign up</h4>
              <div className="flex flex-col md:flex-row items-center gap-2 mb-6">
                <input
                  type="email"
                  placeholder="Your email"
                  className="md:w-[200px] border border-gray-300 rounded-full px-4 py-2 text-sm outline-none"
                />
                <button className="w-full md:w-20 bg-green-500 text-white p-2 rounded-full text-sm">
                  Subscribe
                </button>
              </div>
            </div>

            <p className="font-semibold text-xl md:mt-19">Get the Clash in Flash app</p>
            <p className="font-poppins text-sm text-black mb-3">
              All your financial tools, right at your fingertips.
            </p>

            <div className="flex gap-3">
              <Image src="/footer/appstore.svg" alt="" width={120} height={40} />
              <Image src="/footer/playstore.svg" alt="" width={120} height={40} />
            </div>
          </div>
        </div>

        {/* Sign up - Mobile */}
        <div className="md:hidden mt-6">
          <div>
            <h4 className="font-semibold mb-4">Sign up</h4>
            <div className="flex flex-col items-center gap-2 mb-6">
              <input
                type="email"
                placeholder="Your email"
                className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm outline-none"
              />
              <button className="w-full bg-green-500 text-white px-4 py-2 rounded-full text-sm">
                Subscribe
              </button>
            </div>
          </div>

          <p className="font-semibold text-sm">Get the Clash in Flash app</p>
          <p className="text-xs text-black mb-3">
            All your financial tools, right at your fingertips.
          </p>

          <div className="flex gap-3">
            <Image src="/footer/appstore.svg" alt="" width={120} height={40} />
            <Image src="/footer/playstore.svg" alt="" width={120} height={40} />
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center mt-16 border-t md:border-t-0 pt-8 px-4 md:px-8 lg:px-12">
        <Image src={'/Logo.png'} alt="" height={19} width={148} className="h-[19px] md:h-[36px] md:w-[250px]" />

        <div className="flex flex-wrap gap-4 md:gap-6 text-sm text-gray-500 mt-4 md:mt-0">
          <span>Terms of use</span>
          <span>Accessibility</span>
          <span>Privacy</span>
          <span>Privacy settings</span>
          <span>Report vulnerability</span>
        </div>
      </div>
    </footer>
  );
}