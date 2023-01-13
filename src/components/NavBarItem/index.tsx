import { Link } from 'react-router-dom';
import { INavBarItemProps } from './types';

export const NavBarItem = ({ detail }: INavBarItemProps) => {
  return (
    <div>
      {/* <Link to={`/details/${detail}`}>{detail}</Link> */}
      <a href="">teste</a>
    </div>
  );
};
