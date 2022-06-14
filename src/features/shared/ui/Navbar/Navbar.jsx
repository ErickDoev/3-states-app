import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='nav'>
        <ul>
          <li>
            <NavLink to="/">Index</NavLink>
          </li>
          <li>
            <NavLink to="/redux">Redux</NavLink>
          </li>
          <li>
            <NavLink to="useState">Todo useState</NavLink>
          </li>
          <li>
            <NavLink to="context">Todo ContextApi</NavLink>
          </li>
          {/* <li>
            <NavLink to="redux">Todo Redux</NavLink>
          </li> */}
        </ul>
      </nav>
  )
}
