import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from 'swiper'
import { Autoplay } from 'swiper/modules';
import {ArrowRightIcon} from '@heroicons/react/24/solid'
import "swiper/css";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useDeviceType from "../../hooks/useDeviceType";
import Loading from "../portfolio/Loading";
SwiperCore.use([Autoplay]);
export default function Slider () {
  const [loadedImages, setLoadedImages] = useState([]);

  const handleImageLoad = (index) => {
    setLoadedImages((prevLoadedImages) => {
      const updatedLoadedImages = [...prevLoadedImages];
      updatedLoadedImages[index] = true;
      return updatedLoadedImages;
    });
  };

  const buttonClass =
    "text-slate-500 h-[80px] w-[80px] bg-white hover:bg-slate-100 cursor-pointer";
  const activeButtonClass =
    "text-white h-[80px] w-[80px] bg-black cursor-pointer";
  const [activeIndex, setActiveIndex] = useState(0);
  let swiperRef = useRef(null);

  const windowSize = useDeviceType()

  
  const goToSlide = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;

    if (swiperInstance) {
      const slideChangeHandler = () => {
        setActiveIndex(swiperInstance.realIndex);
      };

      swiperInstance.on("slideChange", slideChangeHandler);

      return () => {
        swiperInstance.off("slideChange", slideChangeHandler);
      };
    }
  }, []);

  const slideContainerClass = "flex justify-center relative w-fit mx-auto"
  const SliderInfo = ({title, paragraph}) => {
    return(

      <div className="absolute max-sm:px-5 sm:left-8 lg:left-44 top-1/2  -translate-y-1/2 text-white max-w-sm flex flex-col gap-6">
              <h3 className="text-5xl sm:text-7xl font-bold">{title}</h3>
              <p className="text-lg"> 
                {paragraph}
              </p>
              <Link 
                to='/portfolio'
                className="bg-black p-4 w-fit flex hover:bg-zinc-800 active:bg-zinc-600 gap-4">
                See Our Portfolio
                <ArrowRightIcon
                className="h-6"
                />
              </Link>
            </div>
                )
  }

  return (
    <section className="relative">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: true
        }}
          modules={Autoplay}
        centeredSlides={true}
        ref={swiperRef}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
      
          <div className={slideContainerClass}>
            <img
              className="brightness-[.6]"
              src={`/home/${windowSize}/image-hero-paramour.jpg`}
              alt="project paramour"
              onLoad={() => handleImageLoad(0)}
            />
              {!loadedImages[0] && (
              <Loading />
            )}
            <SliderInfo
            title={"Project Paramour"}
            paragraph={"Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture."}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={slideContainerClass}>
            <img
              className="mr-[1px] brightness-[.6]"
              src={`/home/${windowSize}/image-hero-seraph.jpg`}
              alt="seraph station"
              onLoad={() => handleImageLoad(1)}
            />
              {!loadedImages[1] && (
              <Loading />
            )}
            <SliderInfo
            title={"Seraph Station"}
            paragraph={"The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations."}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={slideContainerClass}>
            <img
              className="brightness-[.6]"
              src={`/home/${windowSize}/image-hero-federal.jpg`}
              alt="federal II tower"
              onLoad={() => handleImageLoad(2)}
            />
              {!loadedImages[2] && (
              <Loading />
            )}
            <SliderInfo
            title={"Federal II Tower"}
            paragraph={"A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches."}
            />
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-cente relative w-fit mx-auto">
            <img
              className="brightness-[.6]"
              src={`/home/${windowSize}/image-hero-trinity.jpg`}
              alt="Trinity bank tower"
              onLoad={() => handleImageLoad(3)}
            />
              {!loadedImages[3] && (
              <Loading />
            )}
            <SliderInfo
            title={"Trinity Bank Tower"}
            paragraph={"Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives."}
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute bottom-0 z-10 left-[-80px] font-semibold max-xl:hidden">
        <button
          onClick={() => goToSlide(0)}
          className={activeIndex === 0 ? activeButtonClass : buttonClass}
        >
          01
        </button>
        <button
          onClick={() => goToSlide(1)}
          className={activeIndex === 1 ? activeButtonClass : buttonClass}
        >
          02
        </button>
        <button
          onClick={() => goToSlide(2)}
          className={activeIndex === 2 ? activeButtonClass : buttonClass}
        >
          03
        </button>
        <button
          onClick={() => goToSlide(3)}
          className={activeIndex === 3 ? activeButtonClass : buttonClass}
        >
          04
        </button>
      </div>
    </section>
  );
}
