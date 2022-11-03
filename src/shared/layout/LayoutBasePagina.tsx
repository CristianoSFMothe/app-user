import {
  Icon, IconButton, Theme, Typography, useMediaQuery, useTheme
} from '@mui/material';
import {Box} from '@mui/system';
import {ReactNode} from 'react';
import {useDrawerContext} from '../contexts';

interface ILayoutBasePageProps {
  title: string;
  children?: ReactNode;
}

export const LayoutBasePagina: React.FC<ILayoutBasePageProps> =
  ({children, title}) => {
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    
    const { toggleDrawerOpen } = useDrawerContext();

    const theme = useTheme();

    return (
      <Box
        id='page'
        height='100%'
        display='flex'
        flexDirection='column'
        gap={1}
      >
        <Box
          id='header'
          display='flex'
          alignItems='center'
          padding={1}
          gap={1}
          height={theme.spacing(12)}
        >
          {smDown && (
            <IconButton onClick={toggleDrawerOpen}>
              <Icon>menu</Icon>
            </IconButton>
          )}
          <Typography variant='h5'>
            {title}
          </Typography>

        </Box>

        <Box id='tools'>
          Barra de ferramentas
        </Box>

        <Box>
          {children}
        </Box>

      </Box>
    );
  };