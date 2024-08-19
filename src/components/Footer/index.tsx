import { FaInstagram,FaPhoneAlt  } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import Logo from '../../../public/images/logo-cantinho-do-doce.jpg';

export default function Footer() {

    const currentYear = new Date().getFullYear();


    return (
        <footer className="bg-primary max-w-[1280px]  w-full h-auto flex flex-col justify-center gap-3 sm:justify-between items-center p-1 text-white">
        

        
        <div className='flex flex-col-reverse  items-center md:flex-row justify-around w-full'>
        <div className='flex flex-col gap-3 p-5 md:items-baseline items-center justify-center'>
                <a className='flex flex-col gap-1 md:flex-row break-words text-wrap justify-center items-center' href="https://maps.app.goo.gl/3P7EjX8oYEwZLZPC8" target="_blank" rel="noopener noreferrer">
            <FaLocationDot size={20} color='white'/> Rua Godofredo de Godói, 159, Jardim Luzitano
          </a>
                
                <a className='flex flex-col gap-1 md:flex-row justify-center items-center' href="https://www.instagram.com/cantinhododocers/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} color='white'/> @cantinhododocers
          </a>

          <a className='flex flex-col gap-1 md:flex-row justify-center items-center' href="https://api.whatsapp.com/send?phone=5511982282168&text=Ol%C3%A1%2C+gostaria+de+saber+os+sabores+e+valores" target="_blank" rel="noopener noreferrer">
            <FaPhoneAlt size={20} color='white'/> +55 (11) 98228-2168
          </a>
            </div>
            <div className='flex flex-row items-center p-5'>
                    <img  className='w-16 border-2 rounded-full border-transparent"' src={Logo} alt="Logo" />
                    <span className="ml-2 font-Playwrite">Cantinho do Doce RS</span>
                </div>
        </div>
        <span className='text-[10px]'>Copyright © {currentYear} Alef Daniel</span>
               
        </footer>
    );
}
