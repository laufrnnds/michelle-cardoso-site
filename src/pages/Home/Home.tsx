import { Grid } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import SectionsServicos from './components/SectionServicos/SectionServicos';
import defaultTheme from '../../config/theme/Default';
import SectionCards from './components/SectionCards/SectionCards';
import SectionFotos from './components/SectionFotos/SectionFotos';
import SectionComents from './components/SectionComents/SectionComents';

const GridContent = styled(Grid)({
  height: '87vh',
  width: '100%',
  overflowY: 'auto',
});

const Home: React.FC = () => {
  return (
    <GridContent container sx={{ paddingTop: '70px' }}>
      <GridContent
        item
        sx={{
          backgroundColor: defaultTheme.palette.primary.light,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <SectionsServicos
          textoCilios="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
          textoCursos="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
          textoSobrancelhas="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        />
      </GridContent>
      <GridContent
        item
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          height: '80vh',
        }}
      >
        <SectionCards
          textoCard1="Lorem ipsum dolor sit."
          textoCard2="Lorem ipsum dolor sit."
          textoCard3="Lorem ipsum dolor sit."
        />
      </GridContent>
      <GridContent
        item
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '75vh',
          backgroundColor: defaultTheme.palette.primary.main,
        }}
      >
        <SectionFotos />
      </GridContent>
      <GridContent
        item
        sx={{
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
          height: '75vh',
          backgroundColor: defaultTheme.palette.primary.light,
          padding: '0px',
        }}
      >
        <SectionComents />
      </GridContent>
    </GridContent>
  );
};

export default Home;
