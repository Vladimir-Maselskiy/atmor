import React from 'react';
import { Box } from '../Box/Box';
import { Divider } from 'antd';
import { StyledText } from './Footer.styled';

export const Footer = () => {
  return (
    <Box paddingBottom={20}>
      <Divider style={{ backgroundColor: 'var(--accent-color)', height: 10 }} />
      <StyledText>
        Офіційний дистриб&apos;ютор продуктів Atmor в Україні ТОВ Хіт Трейдинг.
        <br />
        Юридична адреса: Україна, м. Київ, 04074, вул. Лугова 2А, тел.
        +380(44)232-43-46, e-mail: info@atmor.net.ua <br />
        ЄДРПОУ 41100281, ІПН 411002826543, р/р 26005056205608 в СТОЛИЧНА ФIЛIЯ
        ПАТ КБ&quot;ПРИВАТБАНК&quot; КИЇВ, МФО 380269
      </StyledText>
    </Box>
  );
};
