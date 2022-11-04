import { Box, Button, Divider, Icon, Paper, useTheme } from '@mui/material';

export const ToolsDetails: React.FC = () => {
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
      <Button
        id='btn-saver'
        color='primary'
        disableElevation
        variant='contained'
        startIcon={<Icon>save</Icon>}
      >Salvar
      </Button>
      
      <Button
        id='btn-saver-return'
        color='primary'
        disableElevation
        variant='outlined'
        startIcon={<Icon>save</Icon>}
      >Salvar e voltar
      </Button>
      
      <Button
        id='btn-delete'
        color='primary'
        disableElevation
        variant='outlined'
        startIcon={<Icon>delete</Icon>}
      >Apagar
      </Button> 
      
      <Button
        id='btn-delete'
        color='primary'
        disableElevation
        variant='outlined'
        startIcon={<Icon>add</Icon>}
      >Novo
      </Button>
      
      <Divider variant='middle' orientation='vertical' />
      
      <Button
        id='btn-return'
        color='primary'
        disableElevation
        variant='outlined'
        startIcon={<Icon>arrow_back</Icon>}
      >Voltar
      </Button>
    </Box>
  );
};