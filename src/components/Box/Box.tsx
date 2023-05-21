// 'use client';
import styled from 'styled-components';
import {
  color,
  layout,
  flexbox,
  space,
  typography,
  border,
  position,
  background,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  GridGapProps,
  SpaceProps,
  TypographyProps,
  BorderProps,
  PositionProps,
  BackgroundProps,
  gridGap,
} from 'styled-system';

interface Props
  extends ColorProps,
    PositionProps,
    LayoutProps,
    FlexboxProps,
    SpaceProps,
    TypographyProps,
    BorderProps,
    GridGapProps,
    BackgroundProps {
  children: React.ReactNode;
}

export const Box = styled('div')<Props>(
  color,
  flexbox,
  layout,
  space,
  typography,
  border,
  position,
  gridGap,
  background
);
