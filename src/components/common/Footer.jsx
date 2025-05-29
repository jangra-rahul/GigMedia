import React from "react";
import footer_logo from "../../../public/images/svg/footer.svg";
import rightArrow from "../../../public/images/svg/rightArrow.svg";
import Image from "next/image";
import footerBottomImg from "../../../public/images/svg/footerBottomImg.png";

const Footer = () => {
  return (
    <footer className="relative bg-white text-black pt-10 pb-6">
      {/* Wave SVG background */}
      <div className="absolute bottom-0 left-0 w-full  ">
        <Image
          className="w-full h-auto"
          style={{ height: "160px" }}
          src={footerBottomImg}
          alt="footerBottomImg"
        />
      </div>

      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 py-10 align-middle md:grid-cols-4 gap-8 text-sm">
          {/* Logo Column */}
          <div>
            <Image
              width={192}
              className=""
              src={footer_logo}
              alt="footer_logo"
            />
          </div>

          {/* About Column */}
          <div className="pe-5">
            <h2 className=" text-[23px] font-semibold font-saira  mb-0 ">
              We GiG Media
            </h2>
            <p className=" text-[15px] ff_n font-normal mt-1 mb-0 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className="font-semibold mt-10 text-[23px]  mb-0 text-black">
              Get in Touch!
            </p>
            <div className="flex align-center gap-10 mt-2">
              <p className="text-[15px] ff_n font-normal mb-0 ">
                hello@gigmedia
              </p>
              <Image src={rightArrow} width={16} height={8} alt="email" />
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-saira text-[23px] font-semibold mb-0  text-black">
              Important Links
            </h3>
            <ul className="space-y-1 text-gray-700">
              <li className="hover:text-red-600 cursor-pointer text-[15px] ff_n font-normal mt-2 mb-0 ">
                Home
              </li>
              <li className="hover:text-red-600   text-[15px] ff_n font-normal mt-2 mb-0 ">
                About
              </li>
              <li className="hover:text-red-600 cursor-pointer text-[15px] ff_n font-normal mt-2 mb-0 ">
                Latest Video
              </li>
              <li className="hover:text-red-600 cursor-pointer text-[15px] ff_n font-normal mt-2 mb-0 ">
                Our Team
              </li>
              <li className="hover:text-red-600 cursor-pointer text-[15px] ff_n font-normal mt-2 mb-0 ">
                Help(FAQ)
              </li>
              <li className="hover:text-red-600 cursor-pointer text-[15px] ff_n font-normal mt-2 mb-0 ">
                Contact
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <h3 className="text-lg text-[23px] font-semibold mb-0  text-black">
              Get The App
            </h3>
            <div className="flex gap-4 mt-9">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://gigmedia.app"
                alt="QR Code"
                className="w-24 h-24"
              />
            </div>
          </div>
        </div>

        {/* QR Code Section Below Main Grid */}

        {/* Bottom Footer */}
        <div className=" border-gray-300 mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p className="text-[15px] text-[#593939] ff_n font-normal mb-0 ">
            © Copyright 2024{" "}
            <span className="text-black font-semibold"> Hki </span>
            <span className="text-[#E50A14] font-semibold"> Media</span> - All
            Rights Reserved.
          </p>
          <div className="flex gap-4  md:mt-0">
            <a
              href="#"
              className="hover:text-black text-[15px] text-[#593939] ff_n font-normal  mb-0"
            >
              Terms Of Use
            </a>
            <a
              href="#"
              className="hover:text-black text-[15px] text-[#593939] ff_n font-normal  mb-0"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
