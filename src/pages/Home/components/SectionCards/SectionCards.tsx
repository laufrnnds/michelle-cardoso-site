import React from 'react';
import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import CardAntesEDepois from '../CardAntesEDepois/CardAntesEDepois';
import antes from '../../../../assets/images/AntesEDepois/antes.jpg';
import depois from '../../../../assets/images/AntesEDepois/depois.jpg';
import defaultTheme from '../../../../config/theme/Default';

interface SectionCardsProps {
  textoCard1: string;
  textoCard2: string;
  textoCard3: string;
}

const GridContent = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  mt: 3,
  mb: 3,
  padding: 0,
  boxSizing: 'border-box',
});

const SectionCards: React.FC<SectionCardsProps> = ({
  textoCard1,
  textoCard2,
  textoCard3,
}) => {
  return (
    <GridContent
      container
      spacing={2}
      sx={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: '16px',
      }}
    >
      <GridContent
        item
        xs={12}
        md={12}
        xl={12}
        sx={{
          backgroundColor: defaultTheme.palette.secondary.main,
          paddingY: '10px',
          marginBottom: '5px',
        }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{
            marginY: '20px',
            fontFamily: '"Satisfy", cursive',
            color: defaultTheme.palette.primary.main,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit!
        </Typography>
      </GridContent>
      <GridContent item xs={12} md={4} xl={4} sx={{ height: '100%' }}>
        <CardAntesEDepois antes={antes} depois={depois} texto={textoCard1} />
      </GridContent>
      <GridContent item xs={12} md={4} xl={4} sx={{ height: '100%' }}>
        <CardAntesEDepois antes={antes} depois={depois} texto={textoCard2} />
      </GridContent>
      <GridContent item xs={12} md={4} xl={4} sx={{ height: '100%' }}>
        <CardAntesEDepois antes={antes} depois={depois} texto={textoCard3} />
      </GridContent>
    </GridContent>
  );
};

export default SectionCards;
