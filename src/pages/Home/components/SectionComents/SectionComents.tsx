import React from 'react';
import Carousel from 'react-multi-carousel';
import { Grid, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import 'react-multi-carousel/lib/styles.css';
import defaultTheme from '../../../../config/theme/Default';

// interface SectionComentsProps {
//   property: string;
// }

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
  maxWidth: '450px',
  maxHeight: '250px',
  minWidth: '250px',
  minHeight: '350px',
  backgroundColor: 'pink',
});

const SectionComents: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '55vh',
        backgroundColor: defaultTheme.palette.primary.main,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} xl={12}>
          <Carousel responsive={responsive} itemClass="teste">
            <BoxFoto>
              <Typography>
                OIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOI
              </Typography>
            </BoxFoto>
            <BoxFoto sx={{ backgroundColor: 'orange' }}>
              <Typography>
                OIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOI
              </Typography>
            </BoxFoto>
          </Carousel>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SectionComents;
