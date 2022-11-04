import {LayoutBasePagina} from '../../shared/layout';
import {Toolbar} from '../../shared/components';

export const Dasboard = () => {
  return (
    <LayoutBasePagina
      title='Página inicial'
      toolbar={(
        <Toolbar 
          showInputSearch
        />
      )}
    >
      Testando
    </LayoutBasePagina>
  );
};