import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import defaultTheme from '../../../../config/theme/Default';
import cilios from '../../../../assets/images/Icones/cilios-icon.png';
import sobrancelhas from '../../../../assets/images/Icones/sobrancelha-icon.png';
import curso from '../../../../assets/images/Icones/curso-icon.png';

interface SectionsServicosProps {
  textoSobrancelhas: string;
  textoCilios: string;
  textoCursos: string;
}

const GridContent = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  mt: 3,
  mb: 3,
  padding: 0,
  boxSizing: 'border-box',
});

const BoxIcon = styled(Box)({
  width: '100px',
  height: '100px',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'relative',
});

const BoxCard = styled(Box)({
  width: '200px',
  height: '280px',
  padding: '10px 10px 10px 10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Text = styled(Typography)({
  fontFamily: '"Poppins", sans-serif',
  color: defaultTheme.palette.error.main,
  marginTop: '20px',
  textAlign: 'center',
});

const SectionsServicos: React.FC<SectionsServicosProps> = ({
  textoSobrancelhas,
  textoCilios,
  textoCursos,
}) => {
  return (
    <GridContent
      container
      spacing={2}
      sx={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <GridContent item xs={12} md={12} xl={12}>
        <Typography
          variant="h2"
          sx={{
            marginY: '40px',
            fontFamily: '"Satisfy", cursive',
            color: defaultTheme.palette.error.main,
          }}
        >
          Serviços
        </Typography>
      </GridContent>
      <GridContent item xs={12} md={4} xl={4}>
        <BoxCard>
          <BoxIcon
            sx={{
              backgroundImage: `url(${cilios})`,
            }}
          />
          <Text variant="body1">{textoCilios}</Text>
        </BoxCard>
      </GridContent>
      <GridContent item xs={12} md={4} xl={4} sx={{ marginX: '0px' }}>
        <BoxCard>
          <BoxIcon
            sx={{
              backgroundImage: `url(${sobrancelhas})`,
            }}
          />
          <Text variant="body1">{textoSobrancelhas}</Text>
        </BoxCard>
      </GridContent>
      <GridContent item xs={12} md={4} xl={4}>
        <BoxCard>
          <BoxIcon
            sx={{
              backgroundImage: `url(${curso})`,
              height: '300px',
            }}
          />
          <Text variant="body1">{textoCursos}</Text>
        </BoxCard>
      </GridContent>
    </GridContent>
  );
};

export default SectionsServicos;
