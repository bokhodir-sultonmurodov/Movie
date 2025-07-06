import logo from "../../public/vite.svg";
import app from "@/assets/image 8.png";
import store from "@/assets/image 7.png";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 dark:bg-[#111111] dark:text-white py-10 ">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start space-y-4">
          <img src={logo} alt="Logo" className="mb-4" loading="lazy" />
          <div>
            <img src={app} alt="Google Play" loading="lazy" className="w-36 mb-2" />
          </div>
          <div>
            <img src={store} alt="App Store" loading="lazy" className="w-36" />
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <h3 className="text-lg text-[#FFFFFF] font-semibold mb-4">About Us</h3>
          <div className="space-y-2 text-[#A1A1A1]">
            <p className="hover:underline cursor-default">Public Offer</p>
            <p className="hover:underline cursor-default">Advertising</p>
            <p className="hover:underline cursor-default">F.A.Q</p>
            <p className="hover:underline cursor-default">Contact</p>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <div className="space-y-2 text-[#A1A1A1]">
            <p className="hover:underline cursor-default">Cinema</p>
            <p className="hover:underline cursor-default">Theatre</p>
            <p className="hover:underline cursor-default">Concerts</p>
            <p className="hover:underline cursor-default">Sports</p>
          </div>
        </div>

        <div className="flex flex-col space-y-2 dark:text-[#A1A1A1]">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p
            className="font-medium dark:text-[#C61F1F] dark:decoration-0-[#C61F1F] dark:pb-0.5 cursor-default"
            style={{ textDecoration: "underline" }}
          >
            +998 (95) 897-33-38
          </p>

          <h3 className="text-lg font-semibold mt-6">Social Media</h3>
          <div className="flex space-x-4 mt-2 text-gray-700 dark:text-[#A1A1A1] text-xl">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
