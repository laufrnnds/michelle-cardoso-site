import React from 'react';
import { Box, Grid } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { styled } from '@mui/material/styles';
import antes from '../../../../assets/images/AntesEDepois/antes.jpg';
import depois from '../../../../assets/images/AntesEDepois/depois.jpg';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const BoxFoto = styled(Box)({
  maxWidth: '350px',
  maxHeight: '250px',
  minWidth: '250px',
  minHeight: '350px',
  borderRadius: '100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'relative',
});

const SectionFotos: React.FC = () => {
  return (
    <Box sx={{ width: '95vw', height: '55vh' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} xl={12}>
          <Carousel responsive={responsive}>
            <BoxFoto
              sx={{
                backgroundImage: `url(${antes})`,
              }}
            />
            <BoxFoto
              sx={{
                backgroundImage: `url(${depois})`,
              }}
            />
            <BoxFoto
              sx={{
                backgroundImage: `url(${antes})`,
              }}
            />
            <BoxFoto
              sx={{
                backgroundImage: `url(${depois})`,
              }}
            />
            <BoxFoto
              sx={{
                backgroundImage: `url(${antes})`,
              }}
            />
            <BoxFoto
              sx={{
                backgroundImage: `url(${depois})`,
              }}
            />
            <BoxFoto
              sx={{
                backgroundImage: `url(${antes})`,
              }}
            />
            <BoxFoto
              sx={{
                backgroundImage: `url(${depois})`,
              }}
            />
          </Carousel>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SectionFotos;
