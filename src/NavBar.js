import { NavLink } from "react-router-dom";

/* Add basic styling for NavLinks */
const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };
  
  /* define the NavBar component */
  export default function NavBar() {
    return (
      <div>
        <NavLink
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
          style={linkStyles}
          /* add prop for activeStyle */
          activeStyle={{
            background: "darkblue",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/login"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Login
        </NavLink>
        <NavLink 
          to='/signup'
          style={linkStyles}
          activeStyle={{
            background: 'darkblue',
          }}
        >
          Sign Up
        </NavLink>
        <NavLink 
          to='/messages'
          style={linkStyles}
          activeStyle={{
            background: 'darkblue',
          }}
        >
          Messages
        </NavLink>
      </div>
    );
  }