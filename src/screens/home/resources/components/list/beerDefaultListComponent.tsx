import { ImageListItem, ImageListItemBar, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { BeerModel } from '../../../../../core/domain/beer/models';
import InfoIcon from '@mui/icons-material/Info';

export const BeerDafaultlist: React.FC<{
  beerList: BeerModel[];
}> = ({ beerList }) => {
  return (
    <section>
      {beerList.map((item, index) => (
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
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.name}`}
                >
                  <InfoIcon />
                </IconButton>
              </Link>
            }
          />
        </ImageListItem>
      ))}
    </section>
  );
};
