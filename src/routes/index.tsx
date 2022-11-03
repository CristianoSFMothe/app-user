import {Navigate, Route, Routes} from 'react-router-dom';
import {useDrawerContext} from '../shared/contexts';
import {useEffect} from 'react';
import {Dasboard} from '../pages';

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();
  
  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        label:'Página inicial',
        path:'/page-home',
      }
    ]);
  }, []);
  
  return (
    <Routes>
      <Route path='/page-home' element={
        <Dasboard />}/>

      <Route path='*' element={<Navigate to='/page-home'/>}/>
    </Routes>
  );
};