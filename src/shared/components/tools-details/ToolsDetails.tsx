import { Box, Button, Divider, Icon, Paper, Skeleton, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';

interface  IToolsDetailsProps {
  textBtnNew?: string,
  
  viewBtnNew?: boolean,
  viewBtnReturn?: boolean,
  viewBtnDelete?: boolean,
  viewBtnSave?: boolean,
  viewBtnSaveAndClose?: boolean,

  viewBtnNewLoading?: boolean,
  viewBtnSaveLoading?: boolean,
  viewBtnReturnLoading?: boolean,
  viewBtnDeleteLoading?: boolean,
  viewBtnSaveAndCloseLoading?: boolean,

  clickBtnNew?: () => void,
  clickBtnReturn?: () => void,
  clickBtnDelete?: () => void,
  clickBtnSave?: () => void,
  clickBtnSaveAndClose?: () => void,
}

export const ToolsDetails: React.FC<IToolsDetailsProps> = ({
  textBtnNew = 'Novo',
  
  viewBtnNew = true,
  viewBtnReturn = true,
  viewBtnDelete = true,
  viewBtnSave = true,
  viewBtnSaveAndClose = false,
                                                             
  viewBtnNewLoading = false,
  viewBtnSaveLoading = false,
  viewBtnReturnLoading = false,
  viewBtnDeleteLoading = false,
  viewBtnSaveAndCloseLoading = false,

  clickBtnNew,
  clickBtnReturn,
  clickBtnDelete,
  clickBtnSave,
  clickBtnSaveAndClose,
}) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  
  const theme = useTheme();
  
  return(
    <Box
      id='tools-details'
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      display='flex'
      alignItems='center'
      component={Paper}
      height={theme.spacing(5)}
    >
      {(viewBtnSave && !viewBtnSaveLoading) &&(
        <Button
          id='btn-saver'
          color='primary'
          disableElevation
          variant='contained'
          onClick={clickBtnSave}
          startIcon={<Icon>save</Icon>}
        >
          {smDown &&(
            <Typography
              variant='button'
              whiteSpace='nowrap'
              textOverflow='ellipsis'
              overflow='hidden'
            >
              Salvar
            </Typography>)
          }
          
        </Button>
      )}

      {viewBtnSaveLoading && (<Skeleton id='loading-save' width={110} height={60}/>)}

      {(viewBtnSaveAndClose && !viewBtnSaveAndCloseLoading && !smDown && !mdDown) &&(
        <Button
          id='btn-saver-return'
          color='primary'
          disableElevation
          variant='outlined'
          onClick={clickBtnSaveAndClose}
          startIcon={<Icon>save</Icon>}
        >
          <Typography
            variant='button'
            whiteSpace='nowrap'
            textOverflow='ellipsis'
            overflow='hidden'
          >
            Salvar e voltar
          </Typography>
        </Button>
      )}
      {
        (viewBtnSaveAndCloseLoading && !smDown && !mdDown) 
          &&(<Skeleton id='loading-save-close' width={180} height={60}/>
          )
      }

      {(viewBtnDelete && !viewBtnDeleteLoading) && (
        <Button
          id='btn-delete'
          color='primary'
          disableElevation
          variant='outlined'
          onClick={clickBtnDelete}
          startIcon={<Icon>delete</Icon>}
        >
          {smDown &&(
            <Typography
              variant='button'
              whiteSpace='nowrap'
              textOverflow='ellipsis'
              overflow='hidden'
            >
              Apagar
            </Typography>)
          }
        </Button>
      )}
      {viewBtnDeleteLoading &&(<Skeleton id='loading-delete' width={110} height={60}/>)}

      {(viewBtnNew && !viewBtnNewLoading && !smDown) &&(
        <Button
          id='btn-new'
          color='primary'
          disableElevation
          variant='outlined'
          onClick={clickBtnNew}
          startIcon={<Icon>add</Icon>}
        >
          {smDown &&(
            <Typography
              variant='button'
              whiteSpace='nowrap'
              textOverflow='ellipsis'
              overflow='hidden'
            >
              {textBtnNew}
            </Typography>)
          }
        </Button>
      )}
      {(viewBtnNewLoading && !smDown) &&(<Skeleton id='loading-new' width={110} height={60}/>)}

      {
        (
          viewBtnReturn &&
          (viewBtnNew || viewBtnDelete || viewBtnSave || viewBtnSaveAndClose)
        ) && (
          <Divider variant='middle' orientation='vertical'/>
        )
      }

      {(viewBtnReturn && !viewBtnReturnLoading) &&(
        <Button
          id='btn-return'
          color='primary'
          disableElevation
          variant='outlined'
          onClick={clickBtnReturn}
          startIcon={<Icon>arrow_back</Icon>}
        >
          {smDown &&(
            <Typography
              variant='button'
              whiteSpace='nowrap'
              textOverflow='ellipsis'
              overflow='hidden'
            >
              Voltar
            </Typography>)
          }
        </Button>
      )}
      
      {viewBtnReturnLoading &&(<Skeleton id='loading-return' width={110} height={60}/>)}
      
    </Box>
    
  );
};