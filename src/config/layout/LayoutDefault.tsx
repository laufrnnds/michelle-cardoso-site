import { Box, CssBaseline, styled } from '@mui/material';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import MenuAppBar from '../../components/Menu/Menu';
import fundo from '../../assets/images/fundo.png';

interface LayoutDefaultProps {
  componente: React.FC;
}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: '0px',
  backgroundImage: `url(${fundo})`,
  backgroundRepeat: 'repeat-y',
  backgroundSize: '100%',
  backgroundPosition: 'center center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  // marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));
const LayoutDefault: React.FC<LayoutDefaultProps> = ({
  componente: Componente,
}) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <CssBaseline />
      <MenuAppBar />
      <Main>
        <Componente />
      </Main>
      <Footer />
    </Box>
  );
};

export default LayoutDefault;
