import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCredits } from 'servises/api';
import { CastList } from 'components/CastList/CastList';

export default function Cast() {
    const [credits, setCredits] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
      getCredits(movieId).then(result => {
        setCredits(result.data.cast);
      });
    }, [movieId]);

    return <>{credits && <CastList credits={credits} />}</>;
}
