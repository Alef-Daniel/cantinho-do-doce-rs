

import { FaRegClock } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import Card from './components/Card';
import CarouselSwiper from './components/CarouselSwiper';
import Header from './components/Header';
import ImgBoloPote from '/public/images/bolo-pote.jpg'
import ImgBoloDePote from '/public/images/bolo-de-pote.jpeg'
import PaoDeMel from '/public/images/pao-mel.jpeg'
import Trufa from '/public/images/trufa.jpeg'
import Donuts1 from '/public/images/donuts-cantinho-doce.jpg'
import Donuts2 from '/public/images/donuts-cantinho-doce-2.jpg'
import Donuts3 from '/public/images/donuts-cantinho-doce-3.jpg'
import Footer from './components/Footer';
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect, } from 'react';



function App() {

  useEffect(() => {
    Aos.init();

  })

  const slides = [
    <Card key="1" Icon={FaRegClock} colorIcon='rgb(125, 74, 104)' sizeIcon={24} Title="Seg-Dom|09 ás 23:00" Subtitle="Horário semanal" />,
    <Card key="2" Icon={FaLocationDot} colorIcon='rgb(125, 74, 104)' sizeIcon={24} Title="Rua Godofredo de Godoy, 159, Jardim Luzitano" Subtitle="Localização" />,
    <Card key="3" Icon={RiWhatsappFill} colorIcon='rgb(125, 74, 104)' sizeIcon={24} Title="+55 (11) 98228-2168" Subtitle="Contate-nos" />,
  ]

  const photos = [
    <img src={ImgBoloDePote} />,
    <img src={Donuts1} />,
    <img src={Donuts2} />,
    <img src={Donuts3} />,
    <img src={PaoDeMel} />,
    <img src={Trufa} />,

  ]


  return (
    <div className="flex flex-col h-screen items-center">
      <Header />
      <div className="max-w-[1280px] w-full flex flex-col mt-20">
        <main className="w-full h-[700px] md:h-[750px]  bg-image-main bg-no-repeat bg-cover bg-center flex justify-left items-center">
          <div className="flex flex-col items-start p-4">
            <h1 data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" className="text-primary font-Bebas text-[30px] text-balance md:text-5xl md:w-96 mb-4 break-words">Sejam Bem-vindos ao Cantinho do Doce.</h1>
            <span data-aos="fade-down" data-aos-delay="250" data-aos-duration="1000" data-aos-easing="ease-in-out" className="font-Bebas text- mb-4 w-36 md:w-auto">A vida é bem melhor depois de comer um docinho...</span>
            <a data-aos="fade-right" data-aos-delay="450" data-aos-duration="1000" data-aos-easing="ease-in-out" className="font-Bebas text-base text-primary text-center no-underline border bg-primary text-white p-3 rounded-3xl no-underline transition-transform transform hover:scale-110 hover:border-white hover:shadow-glow  ease-in-out duration-700" href='https://api.whatsapp.com/send?phone=5511982282168&text=Ol%C3%A1%2C+gostaria+de+saber+os+sabores+e+valores' target="_blank">Faça seu pedido</a>
          </div>
        </main>
        <section id='information' className='max-w-[1280px] w-full flex-1 relative'>
          <div className='w-full h-36 bg-brownie bg-cover bg-no-repeat relative'>
            <div className='absolute top-[60px] left-1/2 transform -translate-x-1/2 w-full hidden gap-6 justify-center md:flex'>
              {slides.map((slide) => (
                slide
              ))}
            </div>
            <div className='absolute top-[60px] left-1/2 transform -translate-x-1/2 w-full flex gap-6 justify-center md:hidden'>
              <CarouselSwiper slides={slides} effect='none' navigation={false} pagination={false} slidesPerView={'auto'} />
            </div>
          </div>
        </section>
        <section id='about' className='max-w-[1280px] w-full flex flex-col md:flex-row gap-11 bg-[#F1F1F3] bg-cover bg-no-repeat h-3/3  items-center md:items-start p-8 md:p-32'>
          <img data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" src={ImgBoloPote} className=' w-[150px] h-36 md:w-[300px] md:h-72 rounded-full border border-b-[#E0D4CD] border-4  mt-16 md:mt-0' alt="Bolo no pote" />

          <div className='flex flex-col items-center md:items-start gap-5   h-full  '>

            <h2 data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" className='font-bold font-Bebas text-3xl'>Sobre</h2>

            <div data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" className='text-center md:text-left bg-white p-4 rounded-lg shadow-lg'>
              <p className='mb-2'>Cantinho do Doce RS é uma doceria encantadora fundada por Henrique e Stephane, com a missão de adoçar a vida de todos com os melhores doces. Localizada em Mauá-SP, a doceria oferece uma variedade deliciosa de sobremesas que são verdadeiras obras de arte.</p>
              <p>Atualmente, o Cantinho do Doce RS atende seus clientes de várias maneiras convenientes: sob encomenda para ocasiões especiais, e através do WhatsApp para pedidos personalizados. Henrique e Stephane se dedicam a criar experiências doces únicas e inesquecíveis, sempre com um toque de carinho e qualidade excepcional.</p>
            </div>
          </div>
        </section>
        <section id='fade-section' className='h-32 w-full bg-gradient-to-b from-[#F1F1F3] to-[#E4D8D1]'></section>
        <section id='gallery' className='max-w-[1280px] w-full flex flex-col gap-11 h-3/3 bg-[#E4D8D1]  items-center md:items-start p-8 md:p-32'>
          <h2 data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" className='font-bold font-Bebas text-3xl'>Galeria</h2>
          <div className='w-full flex justify-center'>
            <div data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" data-aos-easing="ease-in-out" className='w-full md:w-3/4 flex justify-center'>
              <CarouselSwiper
                effect='coverflow'
                navigation={true}
                pagination={false}
                slidesPerView={2}
                slides={photos}
              />
            </div>
          </div>
        </section>
      </div>
      <div className='h-32 w-full bg-gradient-to-b from-[#E4D8D1] to-primary'></div>
      <Footer />
    </div>
  );
}

export default App;
