import {Button} from '@mui/material';
import {Routes, Route, Navigate} from 'react-router-dom';
import {useDrawerContext} from '../shared/contexts';

export const AppRoutes = () => {
  const { toggleDrawerOpen } = useDrawerContext();
  
  return (
    <Routes>
      <Route path='/page-home' element={
        <Button 
          variant='contained' 
          color='primary'
          onClick={toggleDrawerOpen}
        >Menu
        </Button>}/>

      <Route path='*' element={<Navigate to='/page-home'/>}/>
    </Routes>
  );
};