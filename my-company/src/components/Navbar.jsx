import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "right",
        width: "100%",
        backgroundColor: "#333",
      }}
    >
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          listStyleType: "none",
          color: "white",
        }}
      >
        <li
          style={{
            margin: "10px",
            padding: "6px",
            color: "whitesmoke",
            border: "1.5px solid #191970",
            borderRadius: "6px",
            borderRightWidth: "2.5px",
            borderBottomWidth: "2.5px",
          }}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          style={{
            margin: "10px",
            padding: "6px",
            color: "whitesmoke",
            border: "1.5px solid #191970",
            borderRadius: "6px",
            borderRightWidth: "2.5px",
            borderBottomWidth: "2.5px",
          }}
        >
          <Link to="/about">About</Link>
        </li>
        <li
          style={{
            margin: "10px",
            padding: "6px",
            color: "whitesmoke",
            border: "1.5px solid #191970",
            borderRadius: "6px",
            borderRightWidth: "2.5px",
            borderBottomWidth: "2.5px",
          }}
        >
          <Link to="/services">Services</Link>
        </li>
        <li
          style={{
            margin: "10px",
            padding: "6px",
            color: "whitesmoke",
            border: "1.5px solid #191970",
            borderRadius: "6px",
            borderRightWidth: "2.5px",
            borderBottomWidth: "2.5px",
          }}
        >
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
