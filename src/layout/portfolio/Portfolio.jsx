import { useState } from 'react';
import useDeviceType from '../../hooks/useDeviceType';
import { portfolioData } from './data';
import { Fade } from 'react-awesome-reveal';
import Loading from './Loading';

export const Portfolio = () => {
  const windowSize = useDeviceType();
  const [loadedImages, setLoadedImages] = useState([]);

  const handleImageLoad = (index) => {
    setLoadedImages((prevLoadedImages) => {
      const updatedLoadedImages = [...prevLoadedImages];
      updatedLoadedImages[index] = true;
      return updatedLoadedImages;
    });
  };

  return (
    <article className="grid justify-center lg:grid-cols-3 gap-6">
      <Fade>
        {portfolioData.map((item, index) => (
          <div className="relative cursor-pointer hover:opacity-80" key={item.id}>
            <div className='bg-gradient-to-t from-black opacity-50 to-45% h-full w-full absolute'></div>
            <img
              src={"/portfolio/" + windowSize + "/" + item.image}
              alt={item.name + " image"}
              className="portfolio-image"
              onLoad={() => handleImageLoad(index)}
            />
            {!loadedImages[index] && (
              <Loading />
            )}
            {loadedImages[index] && (
              <div className="absolute bottom-8 left-8 z-20 text-white">
                <h4 className="text-2xl font-semibold">{item.name}</h4>
                <p className="text-slate-200">{item.date}</p>
              </div>
            )}
          </div>
        ))}
      </Fade>
    </article>
  );
};
