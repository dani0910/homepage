import React, { useState, Component } from 'react';
import { throttle } from "lodash";
import '../css/new.css'
import styled from 'styled-components'
import Banner from './banner'

const H1 = styled.h1
  `width:200px;
  margin:0 auto`;

const R095_reactThrottle = () => {
  let throttleFunc = throttle(() => {
    console.log("Throttle API Call");
  }, 1000);
    return (
      <div>
        <H1 className='myPage'>안녕하세요</H1>
        <Banner></Banner>
      </div>
    )
  }


export default R095_reactThrottle;