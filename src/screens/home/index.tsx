import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ListSubheader from '@mui/material/ListSubheader';
import './index.css';
import { useBeerByNameList } from './resources/customHooks/useBeerByNameList';
import { useHome } from './resources/customHooks/useHome';
import { BeerDafaultlist } from './resources/components/list/beerDefaultListComponent';
import { BeerByNameListComponent } from './resources/components/list/beerByNameListComponent';
import { Navbar } from './resources/components/NavBar/bar/navbar';
import { ChangeEvent } from 'react';

export const HomeScreen = () => {
  const { beerList } = useHome();
  const { beerByNameList, setBeerWanted, beerWanted } = useBeerByNameList();

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setBeerWanted(searchValue);
  };
  return (
    <main>
      <Navbar beerWantedProp={beerWanted} handleOnChangeProp={handleOnChange} />
      <Container maxWidth="xs">
        <ImageList sx={{ width: 800, height: '100%', paddingTop: '50px' }}>
          <ListSubheader component="div">
            <h1>Beer List:</h1>
          </ListSubheader>
          <ImageListItem key="Subheader"></ImageListItem>
          {beerWanted ? (
            <BeerByNameListComponent beerByNameList={beerByNameList} />
          ) : (
            <BeerDafaultlist beerList={beerList} />
          )}
        </ImageList>
      </Container>
    </main>
  );
};
