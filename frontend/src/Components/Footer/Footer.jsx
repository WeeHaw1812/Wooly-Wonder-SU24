import "./Footer.css";
import logo from "../../assets/logo.png";
import instagram_icon from "../../assets/instagram_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";
import youtube_icon from "../../assets/youtube_icon.png";
import tiktok_icon from "../../assets/tiktok_icon.png";
import pinterest_icon from "../../assets/pinterest_icon.png";

const Footer = () => {
  return (
    <div className="footer grid grid-cols-6 p-[40px]">
      <div className="footer-logo col-span-2 flex flex-col gap-[20px]">
        <div className="flex items-center">
          <img className="w-[70px]" src={logo} alt="" />
          <p className="text-sm font-semibold text-[#f1a3a4]">Wooly Wonder</p>
        </div>
        <p className="text-sm text-[#5b4445]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium.
        </p>
        <div className="footer-social-icon flex items-center gap-[20px]">
          <div className="flex items-center justify-center bg-[#f1a3a4] w-[30px] h-[30px] rounded-full hover:opacity-75 cursor-pointer">
            <img className="w-[20px] h-[20px] rounded-full" src={facebook_icon} alt="" />
          </div>
          <div className="flex items-center justify-center bg-[#f1a3a4] w-[30px] h-[30px] rounded-full hover:opacity-75 cursor-pointer">
            <img className="w-[20px] h-[20px] rounded-full" src={instagram_icon} alt="" />
          </div>
          <div className="flex items-center justify-center bg-[#f1a3a4] w-[30px] h-[30px] rounded-full hover:opacity-75 cursor-pointer">
            <img className="w-[20px] h-[20px] rounded-full" src={youtube_icon} alt="" />
          </div>
          <div className="flex items-center justify-center bg-[#f1a3a4] w-[30px] h-[30px] rounded-full hover:opacity-75 cursor-pointer">
            <img className="w-[20px] h-[20px] rounded-full" src={tiktok_icon} alt="" />
          </div>
          <div className="flex items-center justify-center bg-[#f1a3a4] w-[30px] h-[30px] rounded-full hover:opacity-75 cursor-pointer">
            <img className="w-[20px] h-[20px] rounded-full" src={pinterest_icon} alt="" />
          </div>
        </div>
        <p className="text-xs text-[#4b2c2d]">Copyright @G2 2024 - All Right Reserved.</p>
      </div>
      <div className="company">
        <p className="text-base font-medium text-[#000000]">Company</p>
        <div className="flex flex-col mt-[16px] gap-[10px]">
          <p className="text-sm text-[#9e8182] hover:opacity-75 cursor-pointer">About</p>
          <p className="text-sm text-[#9e8182] hover:opacity-75 cursor-pointer">Meeting the team</p>
          <p className="text-sm text-[#9e8182] hover:opacity-75 cursor-pointer">History</p>
          <p className="text-sm text-[#9e8182] hover:opacity-75 cursor-pointer">Carrers</p>
        </div>
      </div>
      <div className="services">
        <p className="text-base font-medium">Services</p>
        <div className="flex flex-col mt-[16px] gap-[10px]">
          <p className="text-sm text-[#9e8182] hover:opacity-75 cursor-pointer">1on1 Coaching</p>
          <p className="text-sm text-[#9e8182] hover:opacity-75 cursor-pointer">Company Review</p>
          <p className="text-sm text-[#9e8182] hover:opacity-75 cursor-pointer">Accounts Review</p>
          <p className="text-sm text-[#9e8182] hover:opacity-75 cursor-pointer">HR Consulting</p>
          <p className="text-sm text-[#9e8182] hover:opacity-75 cursor-pointer">SEO Optimisation</p>
        </div>
      </div>
      <div className="helpful">
        <p className="text-base font-medium">Helpful Links</p>
        <div className="flex flex-col mt-[16px] gap-[10px]">
          <p className="text-sm text-[#9e8182] hover:opacity-75 cursor-pointer">Contact</p>
          <p className="text-sm text-[#9e8182] hover:opacity-75 cursor-pointer">FAQs</p>
          <p className="text-sm text-[#9e8182] hover:opacity-75 cursor-pointer">Carrers</p>
        </div>
      </div>

      <div className="legal">
        <p className="text-base font-medium">Legal</p>
        <div className="flex flex-col mt-[16px] gap-[10px]">
          <p className="text-sm text-[#9e8182] hover:opacity-75 cursor-pointer">Privacy Policy</p>
          <p className="text-sm text-[#9e8182] hover:opacity-75 cursor-pointer">
            Terms & Conditions
          </p>
          <p className="text-sm text-[#9e8182] hover:opacity-75 cursor-pointer">Returns Policy</p>
          <p className="text-sm text-[#9e8182] hover:opacity-75 cursor-pointer">Accessibility</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
