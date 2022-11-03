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
import {useAppThemeContext, useDrawerContext} from '../../contexts';
import {useMatch, useNavigate, useResolvedPath} from 'react-router-dom';
import DarkMode from '@mui/icons-material/DarkMode';

interface IDrawerProviderProps {
  children: React.ReactNode;
}

interface IListItemLinkProps {
  to: string;
  label: string;
  icon: string;
  onClick: (() => void) | undefined;
}

const ListItemLink: React.FC<IListItemLinkProps> = (
  {to, icon, label, onClick }) => {
  const navigate = useNavigate();
  
  const resolvedPath = useResolvedPath(to);
  
  const match = useMatch({ path: resolvedPath.pathname, end: false});
  
  const handleClick = () => {
    navigate(to);
    onClick?.();    
  };
  
  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};
export const MenuLateral: React.FC<IDrawerProviderProps> = ({ children}) => {
  const theme = useTheme();
  
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  
  const {isDrawerOpen, toggleDrawerOpen, drawerOptions} = useDrawerContext();
  
  const { toggleTheme } = useAppThemeContext();
  
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
            <Avatar id='avatar'
              sx={{ height: theme.spacing(12), width: theme.spacing(12)}}
              alt="Usuário" src="../../assets/avatar.png" 
            />
          </Box>
          
          <Divider />
          
          <Box id='drawer' flex={1}>
            <List id='navbar' component='nav'>
              {drawerOptions.map(drawerOptions => (
                <ListItemLink
                  to={drawerOptions.path}
                  key={drawerOptions.path}
                  icon={drawerOptions.icon}                  
                  label={drawerOptions.label}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                />
              ))}              
            </List>            
          </Box>
          <Box id='themeButton'>
            <List id='alterTheme' component='nav'>
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  <DarkMode />
                </ListItemIcon>
                <ListItemText primary='Alternar tema' />
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