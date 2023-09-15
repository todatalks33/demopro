'use client'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// import Charts from './components/Charts';
import Chart from "./components/Chart";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <div className="hero-section">
      {/* <Navbar /> */}
      <Carousel
        autoPlay={true}
        showStatus={false}
        infiniteLoop={true}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        className='bg-[#f5f5f5] z-[-1] py-2 '
      >
        <div>
          <img src="/amritstation.jpg" />
        </div>
        <div>
          <img src="/ncrc.jpg" />
        </div>
        <div>
          <img src="sahkar-se-samriddhi.jpg" />
        </div>

        {/* carousel  */}

      </Carousel>

      {/* paragraph */}
      <div class="bg-gray-200 md:px-[80px] md:py-[40px] px-[40px] py-[20px]">
        <div class="container mx-auto">
          <p class="text-xs md:text-lg text-gray-700">
            The Phenomenon of Student Dropouts

            Student dropout, a complex issue with far-reaching implications, has garnered significant attention in the realm of education. It refers to the disheartening occurrence where students discontinue their education before obtaining a degree or diploma. This phenomenon is a confluence of various factors, encompassing both personal and systemic elements.

            At the heart of this problem often lie personal challenges.<br /> Financial constraints, family responsibilities, and health issues can force students to halt their educational pursuits. Moreover, lack of motivation, inadequate academic preparation, or a feeling of disconnect with the learning environment can contribute to dropout rates.

            Yet, the education system itself plays a crucial role. Inadequate support systems, inflexible curricula, and limited access to quality education can exacerbate the problem. Dropout rates disproportionately affect marginalized communities, accentuating societal inequalities.
          </p>
        </div>
      </div>

      {/* charts */}
      <Chart />

    </div>
  )
}
