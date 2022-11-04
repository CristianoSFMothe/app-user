import {Box, Button, Icon, Paper, TextField, useTheme} from '@mui/material';

interface IToolbarPropos {
  textSearch?: string;
  showInputSearch?: boolean;
  changeSearchText?: (newText: string) => void;
  textButtonNew?: string;
  showButtonNew?: boolean;
  clickButton?: () => void;
}

export const Toolbar: React.FC<IToolbarPropos> = ({
  textSearch = '', 
  showInputSearch = false, 
  changeSearchText,
  clickButton,
  textButtonNew= 'Novo',
  showButtonNew = true,
  
}) => {
  const theme = useTheme();
  return (
    <Box
      id='toolbar-list'
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      display='flex'
      alignItems='center'
      component={Paper}
      height={theme.spacing(5)}
    >
      {showInputSearch && (
        <TextField
          id='searchbar'
          size='small'
          placeholder='Pesquisa...'
          value={textSearch}
          onChange={(e) => changeSearchText?.(e.target.value)}
        />
      )}
      <Box flex={1} display='flex' justifyContent='end'>
        {showButtonNew && (
          <Button
            id='button-search'
            color='primary'
            disableElevation
            variant='contained'
            onClick={clickButton}
            endIcon={<Icon>add</Icon>}
          >{textButtonNew}
          </Button>
        )}
      </Box>


    </Box>
  );
};