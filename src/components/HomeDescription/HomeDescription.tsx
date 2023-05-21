import React from 'react';
import { StyledDescripyion, StyledText } from './HomeDescription.styled';
import { Box } from '../Box/Box';

export const HomeDescription = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding="30px 40px"
    >
      <StyledText>
        Гаряча вода. <span>За Вашою потребою.</span>
      </StyledText>
      <Box width="80%" marginTop={20}>
        <StyledDescripyion>
          <span></span>Електричні проточні водонагрівачі Atmor це
          енергоефективний та найбільш економічний спосіб негайно подати гарячу
          воду до рукомийника, душу, або навіть цілого домогосподарства.
        </StyledDescripyion>
        <StyledDescripyion>
          <span></span>Наш широкий асортимент водонагрівачів є найкращим
          способом для домогосподарств у всьому світі зменшити рахунки за
          електроенергію та гаряче водопостачання, бо вони мають змогу
          підігрівати тільки ту кількість води, що необхідна у момент
          користування.
        </StyledDescripyion>
        <StyledDescripyion>
          <span></span>Заснований у 1974 році, Atmor спеціалізується у
          виробництві неперевершених електричних проточних водонагрівачів. Ми
          виробляємо найсучасніщі водонагрівачі для виробників великої побутової
          техніки та постачальників у 40 країнах світу.
        </StyledDescripyion>
        <StyledDescripyion>
          <span></span>Atmor відданий ідеї поліпшення якості своїх
          водонагрівачів та наданню відмінного сервісу, перевершуючи технічні
          стандарти та очікування споживачів. Наші інновації забезпечують
          заощадження енергії та цілковите задоволення споживача.
        </StyledDescripyion>
        <StyledDescripyion>
          <span></span>З підтримкою Atmor ваша гаряча вода ніколи не закінчиться
          і ваш душ не буде холодним.
        </StyledDescripyion>
      </Box>
    </Box>
  );
};
