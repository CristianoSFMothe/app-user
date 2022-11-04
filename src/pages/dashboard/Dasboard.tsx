import {LayoutBasePagina} from '../../shared/layout';
import {ListingTools} from '../../shared/components';

export const Dasboard = () => {
  return (
    <LayoutBasePagina
      title='Página inicial'
      toolbar={(
        <ListingTools 
          showInputSearch
        />
      )}
    >
      Testando
    </LayoutBasePagina>
  );
};