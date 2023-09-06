import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ChangeEvent } from 'react';
import { SearchIconWrapper } from '../styledComponents/searchIconWrapper';
import { StyledInputBase } from '../styledComponents/styledInputBase';
import { Search } from '../styledComponents/search';

interface NavbarProps {
  beerWantedProp: string;
  handleOnChangeProp: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Navbar({ beerWantedProp, handleOnChangeProp }: NavbarProps) {
  return (
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
              onChange={handleOnChangeProp}
              value={beerWantedProp}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
