import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from "@mui/material/ListSubheader";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { alpha, styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { useHome } from "./resources/useHome";
import "./index.css";
import { useEffect, useRef, useState } from "react";
import { GetBeersByName } from "../../core/domain/beer/resources/getBeerByName";
import { BeerModel } from "../../core/domain/beer/models";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const HomeScreen = () => {
  //Lista de cervezas
  const { beerList } = useHome();
  // Lista de las cervezas buscadas por nombre
  const [beerByNameList, setBeerByNameList] = useState<BeerModel[]>([]);
  //Cerveza que queremos, por defecto vacía y se muestra beerList
  const [beerWanted, setBeerWanted] = useState("");
  //Referencia del valor del texto que se está escribiendo
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (beerWanted) {
      GetBeersByName(beerWanted)
        .then((data) => {
          setBeerByNameList(data);
          //console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    //console.log(beerWanted);
  }, [beerWanted]);

  const handleChange = () => {
    if (searchInputRef.current) {
      //"Limpia" la búsqueda cada vez que ponemos una nueva letra"
      setBeerWanted("");
      const searchValue = searchInputRef.current.value;
      setBeerWanted(searchValue);
      //console.log(searchValue);
    }
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
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              FRONT BEER DEMO
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <input
                id="input-search"
                type="text"
                placeholder="Buscar"
                onChange={handleChange}
                ref={searchInputRef}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="sm">
        <ImageList sx={{ width: 500, height: "100%", marginTop: "80px" }}>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader component="div">
              <h1>Beer List:</h1>
            </ListSubheader>
          </ImageListItem>

          {beerByNameList.length > 0
            ? beerByNameList?.map((item, index) => (
                <ImageListItem key={index}>
                  <img
                    src={`${item.imageUrl}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.imageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.name}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.name}
                    subtitle={item.tagline}
                    actionIcon={
                      <Link to={`/beer/${item.id}`}>
                        <IconButton
                          sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                          aria-label={`info about ${item.name}`}
                        >
                          <InfoIcon />
                        </IconButton>
                      </Link>
                    }
                  />
                </ImageListItem>
              ))
            : beerWanted && (
                <p id="errorMesage">
                  No se ha encontrado ninguna cerveza con los datos
                  introducidos.
                </p>
              )}

          {!beerWanted &&
            beerList.map((item, index) => (
              <ImageListItem key={index}>
                <img
                  src={`${item.imageUrl}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.imageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.name}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.name}
                  subtitle={item.tagline}
                  actionIcon={
                    <Link to={`/beer/${item.id}`}>
                      <IconButton
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`info about ${item.name}`}
                      >
                        <InfoIcon />
                      </IconButton>
                    </Link>
                  }
                />
              </ImageListItem>
            ))}
        </ImageList>
      </Container>
    </section>
  );
};
