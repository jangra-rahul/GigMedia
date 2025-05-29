import React from "react";
import footer_logo from "../../../public/images/svg/footer.svg";
import Image from "next/image";
import footerBottomImg from "../../../public/images/svg/footerBottomImg.png";
import Icons from "./Icons";
import Link from "next/link";

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

      <div className="max-w-[1310px] mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 py-10 align-middle md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
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
          <div className="pe-5 flex flex-col justify-between">
            <div>
              <h4 className="text-lg md:text-xl lg:text-[23px] font-semibold">
                We GiG Media
              </h4>
              <p className="text-base max-w-[325px] md:text-lg ff_n font-normal pt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div>
              <h4 className="text-lg md:text-xl lg:text-[23px] font-semibold">
                Get in Touch!
              </h4>
              <Link href="/" className="flex items-center max-w-[234px] text-base md:text-lg ff_n font-normal mb-0 gap-6 justify-between mt-2">
                hello@gigmedia
                <Icons icon={"redarrow"} />
              </Link>
            </div>
          </div>

          {/* Important Links */}
          <div className="md:ps-8">
            <h4 className="text-lg md:text-xl lg:text-[23px] font-semibold">
              Important Links
            </h4>
            <div className="flex flex-col gap-4 pt-4">
              <Link href="/" className="hover:text-red-600 cursor-pointer text-[15px] leading-[140%] ff_n font-normal text-black">
                Home
              </Link>
              <Link href="/" className="hover:text-red-600 cursor-pointer text-[15px] leading-[140%] ff_n font-normal text-black">
                About
              </Link>
              <Link href="/" className="hover:text-red-600 cursor-pointer text-[15px] leading-[140%] ff_n font-normal text-black">
                Latest Video
              </Link>
              <Link href="/" className="hover:text-red-600 cursor-pointer text-[15px] leading-[140%] ff_n font-normal text-black">
                Our Team
              </Link>
              <Link href="/" className="hover:text-red-600 cursor-pointer text-[15px] leading-[140%] ff_n font-normal text-black">
                Help(FAQ)
              </Link>
              <Link href="/" className="hover:text-red-600 cursor-pointer text-[15px] leading-[140%] ff_n font-normal text-black">
                Contact
              </Link>
            </div>

          </div>
          <div className="text-sm">
           <h4 className="text-lg md:text-xl lg:text-[23px] font-semibold text-black">
              Get The App
            </h4>
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
