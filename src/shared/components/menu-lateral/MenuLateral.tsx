import {
  Avatar, 
  Divider, 
  Drawer, 
  List, 
  ListItemButton, 
  ListItemIcon, 
  useTheme,
  ListItemText,
  Icon,
  useMediaQuery} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import {useDrawerContext} from '../../contexts';

interface IDrawerProviderProps {
  children: React.ReactNode;
}
export const MenuLateral: React.FC<IDrawerProviderProps> = ({ children}) => {
  const theme = useTheme();
  
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  
  const {isDrawerOpen, toggleDrawerOpen} = useDrawerContext();
  
  return (
    <>
      <Drawer 
        open={isDrawerOpen} 
        variant={smDown ? 'temporary' : 'permanent'}
        onClose={toggleDrawerOpen}
      >
        <Box 
          width={theme.spacing(28)} 
          display='flex' 
          flexDirection='column'
          height='100%'
        >
          <Box 
            width='100%' 
            height={theme.spacing(20)}
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            <Avatar 
              sx={{ height: theme.spacing(12), width: theme.spacing(12)}}
              alt="Usuário" src="../../assets/avatar.png" 
            />
          </Box>
          
          <Divider />
          
          <Box flex={1}>
            <List component='nav'>
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary='Página Inicial' />
              </ListItemButton>
              
            </List>
            
          </Box>
          
        </Box>        
      </Drawer>

      <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
      
    </>
    
  );
};