import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";
import Carousel from "react-multi-carousel";
import Box from '@mui/material/Box';

import HiloCard from 'components/hiloCard';

import styles from 'assets/jss/landingPageStyles';
import "react-multi-carousel/lib/styles.css";

const useStyles = makeStyles(styles);

const cardsData = [
  {
    status: 'LIVE',
    progressbar: 40,
    time: '02:43',
    number: '103',
    lastPrice: '0.23',    
    commit: '',
    lockedPrice: '0.00219',  
    prizePool: '24,000',
    higherPayout: '2.14',
    lowerPayout: '1.34',
    entryStarts: ''
  },
  {
    status: 'LIVE',
    progressbar: 40,
    time: '02:43',
    number: '103',
    lastPrice: '0.23',    
    commit: '',
    lockedPrice: '0.23',  
    prizePool: '24,000',
    higherPayout: '2.14',
    lowerPayout: '1.34',
    entryStarts: ''
  },
  {
    status: 'LIVE',
    progressbar: 40,
    time: '02:43',
    number: '103',
    lastPrice: '0.23',    
    commit: '',
    lockedPrice: '0.00219',  
    prizePool: '24,000',
    higherPayout: '2.14',
    lowerPayout: '1.34',
    entryStarts: ''
  },
  {
    status: 'LIVE',
    progressbar: 40,
    time: '02:43',
    number: '103',
    lastPrice: '0.23',    
    commit: '',
    lockedPrice: '0.25',  
    prizePool: '24,000',
    higherPayout: '2.14',
    lowerPayout: '1.34',
    entryStarts: ''
  },
  {
    status: 'LIVE',
    progressbar: 40,
    time: '02:43',
    number: '103',
    lastPrice: '0.23',    
    commit: '',
    lockedPrice: '0.00219',  
    prizePool: '24,000',
    higherPayout: '2.14',
    lowerPayout: '1.34',
    entryStarts: ''
  },
  {
    status: 'NEXT',
    progressbar: '70',
    time: '00:56',
    number: '104',
    lastPrice: '',    
    commit: '0.00',
    lockedPrice: '',
    currentPrice: '0.00226',
    prizePool: '24,000',
    higherPayout: '2.45',
    lowerPayout: '1.24',
    entryStarts: ''
  },
  {
    status: 'LATER',
    progressbar: '30',
    time: '',
    number: '105',
    lastPrice: '',    
    commit: '',
    lockedPrice: '',  
    prizePool: '',
    higherPayout: '',
    lowerPayout: '',
    entryStarts: '08:54'
  }
]

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1368 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1368, min: 925 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 925, min: 0 },
    items: 1
  }
};


const Landing = () => {
  
  const ref = useRef(null);
  const classes = useStyles();

  const goToPrevious = e => {
    e.preventDefault();
    ref.current?.previous();
  };

  const goToNext = e => {
    ref.current?.next();
  };

  useEffect(() => {
    if (ref) {
      ref.current.goToSlide(4)
    }
  }, [ref])

  return (
    <Box className={classes.mainContainer}>
      <Carousel        
        ref={ref}
        swipeable={true}
        draggable={true}
        showDots={false}
        arrows={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={false}        
        keyBoardControl={true}
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {
          cardsData.map((item, index) => (
            <HiloCard data={item} key={index} />
          ))
        }
      </Carousel>
      <div className={classes.carouselButtons}>
        <button
          className={classes.beforeArrowButton}
          onClick={goToPrevious}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
          </svg>
        </button>
        <button
          className={classes.nextArrowButton}
          onClick={goToNext}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
      </div>

    </Box>
  )
}

export default Landing;
