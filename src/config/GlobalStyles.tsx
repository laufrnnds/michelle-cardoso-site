import React from 'react';
import GlobalStyles from '@mui/material/GlobalStyles';
import defaultTheme from './theme/Default';

const StylesGlobal: React.FC = () => {
  return (
    <GlobalStyles
      styles={{
        body: { margin: '0px' },
        ul: { backgroundColor: defaultTheme.palette.primary.main },
      }}
    />
  );
};

export default StylesGlobal;
