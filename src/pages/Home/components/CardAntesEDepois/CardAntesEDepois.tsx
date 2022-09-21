import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';
import defaultTheme from '../../../../config/theme/Default';

interface CardAntesEDepoisProps {
  antes: string;
  depois: string;
  texto: string;
}

const style = {
  margin: '20px',
  '&:hover': {
    color: defaultTheme.palette.secondary.main,
  },
};

const CardFotoAntesEDepois = styled(Box)({
  maxWidth: '125px',
  minWidth: '255px',
  padding: '10px 10px 30px 10px',
  backgroundColor: defaultTheme.palette.primary.main,
  textAlign: 'center',
  border: '10px solid white',
  borderRadius: '10px',
  boxShadow:
    'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
});

const CardAntesEDepois: React.FC<CardAntesEDepoisProps> = ({
  antes,
  depois,
  texto,
}) => {
  return (
    <CardFotoAntesEDepois>
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage src={antes} srcSet={antes} alt="Image one" />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={depois}
            srcSet={depois}
            alt="Imagem dois"
          />
        }
      />
      <Typography color={defaultTheme.palette.error.main} sx={style}>
        {texto}
      </Typography>
    </CardFotoAntesEDepois>
  );
};

export default CardAntesEDepois;
