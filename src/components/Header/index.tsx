import Logo from "../../../public/images/logo-cantinho-do-doce.jpg";
import { FaInstagram } from "react-icons/fa";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-xl">
      <div className="max-w-[1280px] mx-auto w-full h-20 flex justify-center gap-3 sm:justify-between items-center p-1">
        <img src={Logo} className="w-16 border-2 rounded-full border-transparent" />
        <ul className="hidden sm:flex gap-10">
          <li className="hover:text-primary cursor-pointer"><a href="/">Início</a></li>
          <li className="hover:text-primary cursor-pointer"><a href="#about">Sobre</a></li>
          <li className="hover:text-primary cursor-pointer"><a href="#gallery">Galeria</a></li>
        </ul>
        <div className="hidden sm:flex gap-6 items-center">
          <a href="https://www.instagram.com/cantinhododocers/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a className="cursor-pointer border-2 p-2 rounded-3xl border-transparent bg-primary text-white" href="https://api.whatsapp.com/send?phone=5511982282168&text=Ol%C3%A1%2C+gostaria+de+saber+os+sabores+e+valores" target="_blank">Contate</a>
        </div>
        <span className="font-Playwrite flex sm:hidden" >Cantinho do Doce RS</span>
      </div>
    </header>
  );
}
