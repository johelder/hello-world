import { NavBarItem } from '../NavBarItem';

import './styles.css';

export const NavBar = () => {
  return (
    <nav>
      <NavBarItem detail="Item 1" />
      <NavBarItem detail="Item 2" />
      <NavBarItem detail="Item 3" />
    </nav>
  );
};
