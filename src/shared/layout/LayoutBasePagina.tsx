import {
  Icon, IconButton, Theme, Typography, useMediaQuery, useTheme
} from '@mui/material';
import {Box} from '@mui/system';
import {ReactNode} from 'react';
import {useDrawerContext} from '../contexts';

interface ILayoutBasePageProps {
  title: string;
  toolbar?: ReactNode;
  children?: ReactNode;
}

export const LayoutBasePagina: React.FC<ILayoutBasePageProps> =
  ({children, title, toolbar}) => {
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

    const {toggleDrawerOpen} = useDrawerContext();

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
          height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
        >
          {smDown && (
            <IconButton onClick={toggleDrawerOpen}>
              <Icon>menu</Icon>
            </IconButton>
          )}
          <Typography 
            variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
            whiteSpace='nowrap'
            overflow='hidden'
            textOverflow='ellipsis'
          >
            {title}
          </Typography>

        </Box>

        {toolbar && (
          <Box id='toolbar'>
            {toolbar}            
          </Box>
        )}
        
        <Box id='body' flex={1} overflow='auto'>
          {children}
        </Box>

        

      </Box>
    );
  };