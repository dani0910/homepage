import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const BannerContainer = styled.div
`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  max-width: 80%;
`;

const Slider = styled.div`
  overflow: hidden;
  width: 100%;
`;

const Slides = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
`;

const Slide = styled.div`
  flex: 0 0 100%;
  box-sizing: border-box;
  padding: 20px;
  text-align:center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between; /* 양 끝에 배치되도록 설정 */
`;

const PrevBtn = styled.button`
  padding: 10px 20px;
  margin: 10px;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  cursor: pointer;
`;

const NextBtn = styled.button`
  padding: 10px 20px;
  margin: 10px;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  cursor: pointer;
`;

const Banner = () => {
  const slides = [
    <img src={require('../img/main/main3.jpg')} alt='Silde 1 content'></img>,
    <img src={require('../img/main/main4.jpg')} alt='Silde 2 content'></img>,
    <img src={require('../img/main/main7.JPG')} alt='Silde 3 content'></img>,
    
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); // 3초마다 슬라이드 전환

    // 컴포넌트가 언마운트될 때 interval 해제
    return () => clearInterval(intervalId);
  }, [currentSlide]);

  return (
    <BannerContainer>
      <Slider>
        <Slides style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <Slide key={index}>{slide}</Slide>
          ))}
        </Slides>
      </Slider>
      <ButtonsContainer>
      <PrevBtn onClick={prevSlide}>Prev</PrevBtn>
      <NextBtn onClick={nextSlide}>Next</NextBtn>
      </ButtonsContainer>
    </BannerContainer>
  );
};

export default Banner;
