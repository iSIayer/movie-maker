import { Bars } from 'react-loader-spinner';
import { PositionLoader } from './Loader.styled';

export const LoaderSpinner = () => {
  return (
    <PositionLoader>
      <Bars
        height="80"
        width="80"
        color="grey"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </PositionLoader>
  );
};
