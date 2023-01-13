import { useParams } from 'react-router-dom';

import './styles.css';

export const Details = () => {
  const { id } = useParams();

  return (
    <main>
      <span>{id}</span>
    </main>
  );
};
