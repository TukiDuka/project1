import React from "react";
import logo from "../images/logo1.svg";

const Footer = ({
  description = "We have clothes that suits your style and which you're proud to wear, From women to men",
  socialImage = "https://dashboard.codeparrot.ai/api/assets/Z4iwqq44F0YMkTLw",
  paymentBadges = [
    "https://dashboard.codeparrot.ai/api/assets/Z4iwqq44F0YMkTLx",
    "https://dashboard.codeparrot.ai/api/assets/Z4iwqq44F0YMkTLy",
    "https://dashboard.codeparrot.ai/api/assets/Z4iwqq44F0YMkTLz",
    "https://dashboard.codeparrot.ai/api/assets/Z4iwqq44F0YMkTL0",
    "https://dashboard.codeparrot.ai/api/assets/Z4iwqq44F0YMkTL1",
  ],
}) => {
  return (
    <footer className="footer w-full max-w-[1568px] mx-auto text-white font-['Gilroy-Light']">
      <div className="footer-content flex justify-between mb-[70px] gap-[239px] items-center">
        <div className="footer-left max-w-[353px] flex flex-col gap-[40px]">
          <img
            src={logo}
            alt="Logo"
            className="w-[189px] h-[74px]"
            width="1000"
            height="74"
          />
          <p className="description text-[20px] leading-[30px] text-white">
            {description}
          </p>
          <img
            src={socialImage}
            alt="Social Links"
            className="social-icons w-[353px] h-[66.78px] object-contain"
            width="353"
            height="67"
          />
        </div>

        <div className="footer-links flex gap-[239px]">
          <div className="link-column flex flex-col gap-[20px]">
            <h3 className="text-[30px] leading-[30px] text-white mb-[20px] font-[Gilroy-Bold]">
              COMPANY
            </h3>
            <a
              className="text-[20px] leading-[30px] text-white no-underline"
              href="#"
            >
              About
            </a>
            <a
              className="text-[20px] leading-[30px] text-white no-underline"
              href="#"
            >
              Features
            </a>
            <a
              className="text-[20px] leading-[30px] text-white no-underline"
              href="#"
            >
              Works
            </a>
            <a
              className="text-[20px] leading-[30px] text-white no-underline"
              href="#"
            >
              Career
            </a>
          </div>

          <div className="link-column flex flex-col gap-[20px]">
            <h3 className="text-[30px] leading-[30px] text-white mb-[20px] font-[Gilroy-Bold]">
              HELP
            </h3>
            <a
              className="text-[20px] leading-[30px] text-white no-underline"
              href="#"
            >
              Customer support
            </a>
            <a
              className="text-[20px] leading-[30px] text-white no-underline"
              href="#"
            >
              Delivery Details
            </a>
            <a
              className="text-[20px] leading-[30px] text-white no-underline"
              href="#"
            >
              Terms & Condition
            </a>
            <a
              className="text-[20px] leading-[30px] text-white no-underline"
              href="#"
            >
              Privacy Policy
            </a>
          </div>

          <div className="link-column flex flex-col gap-[20px]">
            <h3 className="text-[30px] leading-[30px] text-white mb-[20px] font-[Gilroy-Bold]">
              FAQ
            </h3>
            <a
              className="text-[20px] leading-[30px] text-white no-underline"
              href="#"
            >
              Account
            </a>
            <a
              className="text-[20px] leading-[30px] text-white no-underline"
              href="#"
            >
              Manage Deliveries
            </a>
            <a
              className="text-[20px] leading-[30px] text-white no-underline"
              href="#"
            >
              Orders
            </a>
            <a
              className="text-[20px] leading-[30px] text-white no-underline"
              href="#"
            >
              Payments
            </a>
          </div>
        </div>
      </div>

      <div className="payment-badges flex justify-end">
        {paymentBadges.map((badge, index) => (
          <img
            className="w-[61px] h-[40px] object-contain"
            key={index}
            src={badge}
            alt={`Payment method ${index + 1}`}
            width="61"
            height="40"
          />
        ))}
      </div>

      <div className="footer-divider w-full h-[1px] bg-[rgba(255,255,255,0.5)]"></div>
    </footer>
  );
};

export default Footer;
