import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ListSubheader from '@mui/material/ListSubheader';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import './index.css';
import { useBeerByNameList } from './resources/customHooks/useBeerByNameList';
import { ChangeEvent } from 'react';
import { InputBase } from '@mui/material';
import { useHome } from './resources/customHooks/useHome';
import { BeerByNameListComponent } from './resources/components/beerByNameListComponent';
import { BeerDafaultlist } from './resources/components/beerDefaultListComponent';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export const HomeScreen = () => {
  const { beerList } = useHome();
  const { beerByNameList, setBeerWanted, beerWanted } = useBeerByNameList();

  const handleEventValue = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setBeerWanted(searchValue);
  };

  return (
    <section>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              FRONT BEER DEMO
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                onChange={handleEventValue}
                value={beerWanted}
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="sm">
        <ImageList sx={{ width: 500, height: '100%', marginTop: '80px' }}>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader component="div">
              <h1>Beer List:</h1>
            </ListSubheader>
          </ImageListItem>
          {beerWanted ? (
            <BeerByNameListComponent beerByNameList={beerByNameList} />
          ) : (
            <BeerDafaultlist beerList={beerList} />
          )}
        </ImageList>
      </Container>
    </section>
  );
};
