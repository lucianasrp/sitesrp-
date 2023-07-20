'use client';

import { useEffect, useState } from "react";
import style from './imageslider.module.css'

export default function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function GoToNext() {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  function Slide({ index, url }) {
    const zindex = -((currentIndex - index + slides.length) % slides.length) + 1;
    //if(zindex < -1) return(<></>)

    const customstyle = {
      //display: (currentIndex != index ? 'none' : 'inherit'),
      //MOD(($A$1 - LIN() + $B$1); $B$1)
      /*zIndex : zindex,
      opacity: (zindex >= 0 ? 0.5 : 0),*/
      display: (zindex >= 0 ? 'inherit' : 'none'),
      backgroundImage: `url("${url}")`
    }

    return (
      <>
        <div key={index} className={`absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-center bg-cover ${(zindex == 1 ? style['current'] : '')}`} style={customstyle}>
        </div>
      </>
    )
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      GoToNext();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className={`relative w-full h-full ${style.imageslider}`}>
      {slides.map((slide, index) => (
        <Slide key={index} index={index} url={slide.img} />
      ))
      }
    </div>
  );
}