import {LayoutBasePagina} from '../../shared/layout';
import {ToolsDetails} from '../../shared/components';

export const Dasboard = () => {
  return (
    <LayoutBasePagina
      title='Página inicial'
      toolbar={(
        <ToolsDetails viewBtnSaveAndClose viewBtnSaveAndCloseLoading />
      )}
    >
      Testando
    </LayoutBasePagina>
  );
};