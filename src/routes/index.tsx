import {Button} from '@mui/material';
import {Routes, Route, Navigate} from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/page-home" element={
        <Button variant='contained' color='primary'>Test</Button>}/>

      <Route path="*" element={<Navigate to="/page-home"/>}/>
    </Routes>
  );
};