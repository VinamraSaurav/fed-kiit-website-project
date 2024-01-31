import mascot from "../../images/mascot.png";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { VIN_GIT, VIN_INSTA, VIN_LINK, VIN_X } from "../utils/constants";

const Footer = () => {
  return (
    <div className=" relative w-[90rem] h-[36rem] bg-[#0E100F]">
      <div
        className="absolute top-0 w-[90rem] h-[36rem] z-[-1] "
        style={{
          background:
            "linear-gradient(180deg, #000 0%, rgba(51, 51, 51, 0.00) 100%)",
        }}
      ></div>
      <div
        className="absolute w-[17.5rem] h-[17.5rem] rounded-[17.5rem] top-0 right-0"
        style={{
          background:
            "linear-gradient(to bottom right, #E7CE4A 0%, #E64467 50%) bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, #E7CE4A 0%, #E64467 50%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, #E7CE4A 0%, #E64467 50%) top left / 50% 50% no-repeat, linear-gradient(to top right, #E7CE4A 0%, #E64467 50%) top right / 50% 50% no-repeat",
        }}
      ></div>
      <div
        className="absolute bottom-0 h-[29.25rem] w-[90rem] rounded-t-[1.25rem] backdrop-filter backdrop-blur-[21px] border-[1px] border-[#ffffff50]"
        style={{
          background:
            "linear-gradient(153deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%)",
        }}
      ></div>
      <Link>
        <div
          className="absolute top-[11.38rem] flex w-[12.1rem] h-[4.482rem] gap-[1.25rem] items-center left-[38.94rem] hover:cursor-pointer"
          onClick={() => {
            scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img className="h-[3.75rem] w-[3.75rem]" src={mascot} />
          <img className="h-[3.56rem] w-[5.94rem]" src={logo} />
        </div>
      </Link>
      <div className="absolute h-[2.24rem] w-[26rem] top-[17.71rem] left-[33.1rem]">
        <ul className="flex text-white justify-between font-[poppins] text-[1.25rem] font-[500] leading-[150%]">
          <Link to="/">
            <li
              onClick={() => {
                scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="hover:cursor-pointer hover:text-[#F45725]"
            >
              Home
            </li>
          </Link>
          <Link tp="/about">
            <li
              onClick={() => {
                scrollTo({ top: 1000, behavior: "smooth" });
              }}
              className="hover:cursor-pointer hover:text-[#F45725]"
            >
              About
            </li>
          </Link>
          <li className="hover:cursor-pointer hover:text-[#F45725]">Service</li>
          <li className="hover:cursor-pointer hover:text-[#F45725]">
            Contact Us
          </li>
        </ul>
      </div>  
      <div className="absolute h-[3rem] w-[13.6rem] top-[22.49rem] left-[38.15rem] flex text-white justify-between items-center font-[poppins] text-[1.25rem] font-[500] leading-[150%]">
        <a target="_blank" href={VIN_LINK}><i className="fa-brands fa-linkedin-in h-[2.62381rem] w-[2.62381rem] bg-[#F45725] text-white rounded-[2.62381rem] p-[0.75rem] hover:bg-black hover:text-[#F45725] hover:cursor-pointer"></i></a>
        <a target="_blank" href={VIN_GIT}><i className="fa-brands fa-github h-[2.62381rem] w-[2.62381rem] bg-[#F45725] text-white rounded-[2.62381rem] p-[0.75rem] hover:bg-black hover:text-[#F45725] hover:cursor-pointer"></i></a>
        <a target="_blank" href={VIN_INSTA}><i className="fa-brands fa-instagram h-[2.62381rem] w-[2.62381rem] bg-[#F45725] text-white rounded-[2.62381rem] p-[0.75rem] hover:bg-black hover:text-[#F45725] hover:cursor-pointer"></i></a>
        <a target="_blank" href={VIN_X}><i className="fa-brands fa-x-twitter h-[2.62381rem] w-[2.62381rem] bg-[#F45725] text-white rounded-[2.62381rem] p-[0.75rem] hover:bg-black hover:text-[#F45725] hover:cursor-pointer"></i></a>
      </div>
      <div className="absolute w-[80.8125rem] h-[0] border-b-[0.125rem] border-[#F45725] top-[28.47rem] left-[4.56rem]"></div>
      <div className="absolute top-[31.44rem] left-[38.19rem]">
        <p className="text-[#CFD3D7] text-center font-roboto text-[1.25rem] font-[400] leading-[150%]">
          Copyright @Vinamra [VIN]{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
