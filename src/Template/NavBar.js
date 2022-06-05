import { Link, NavLink } from 'react-router-dom';
import '../Sass/NavBar.scss';

export const NavBar = () => {
  let navLinkClass =
    'text-orange-300 font-semibold ml-12 nav-button text-center text-3xl';

  return (
    <div
      className={
        'h-24 flex items-center nav-bar sticky top-0 bg-brown absolute top'
      }
    >
      <NavLink to={'/'} className={navLinkClass + ' text-3xl'}>
        Home
      </NavLink>
      {/*About*/}
      <NavLink to={'/about'} className={navLinkClass}>
        About
      </NavLink>
    </div>
  );
};
