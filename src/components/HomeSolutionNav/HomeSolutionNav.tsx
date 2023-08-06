'use client';
import React from 'react';
import {
  StyledWrapper,
  StyledImage,
  StyledSolutionText,
  ImageWrapper,
} from './HomeSolutionNav.styled';
import { Box } from '../Box/Box';

export const HomeSolutionNav = () => {
  return (
    <StyledWrapper>
      <StyledSolutionText>ОБЕРИ СВІЙ</StyledSolutionText>
      <ImageWrapper>
        <StyledImage
          src="/top-right-activ.png"
          alt="sink-applications-colored"
          position={1}
        />
        <StyledImage
          src="/top-right.png"
          alt="sink-applications"
          position={1}
        />
        <StyledImage
          src="/bottom-right-activ.png"
          alt="commercial-applications-colored"
          position={2}
        />
        <StyledImage
          src="/bottom-right.png"
          alt="commercial-applications"
          position={2}
        />
        <StyledImage
          src="/bottom-left-activ.png"
          alt="residential-applications-colored"
          position={3}
        />
        <StyledImage
          src="/bottom-left.png"
          alt="residential-applications"
          position={3}
        />
        <StyledImage
          src="/top-left-activ.png"
          alt="shower-applications-colored"
          position={4}
        />
        <StyledImage
          src="/top-left.png"
          alt="shower-applications"
          position={4}
        />
      </ImageWrapper>
      <StyledSolutionText>ATMOR</StyledSolutionText>
    </StyledWrapper>
  );
};
