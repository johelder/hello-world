import { Link } from 'react-router-dom';
import { INavBarItemProps } from './types';

import './styles.css';

export const NavBarItem = ({ detail }: INavBarItemProps) => {
  return (
    <div>
      <Link to={`/details/${detail}`} className="NavItem">
        {detail}
      </Link>
    </div>
  );
};
