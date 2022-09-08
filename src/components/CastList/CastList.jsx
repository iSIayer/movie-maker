import PropTypes from 'prop-types';
import {
  CastListStyled,
  CastListItem,
  CastListImg,
  CastListName,
} from './CastList.styled';

export const CastList = ({ credits }) => {
  return (
    <div>
      <CastListStyled>
        {credits.map(credit => {
          return (
            <CastListItem key={credit.credit_id}>
              <CastListImg
                src={
                  credit.profile_path
                    ? 'https://image.tmdb.org/t/p/w500' + credit.profile_path
                    : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
                }
                alt=""
              />
              <CastListName>{credit.name}</CastListName>
            </CastListItem>
          );
        })}
      </CastListStyled>
    </div>
  );
};

CastList.propTypes = {
  credits: PropTypes.array.isRequired,
};
