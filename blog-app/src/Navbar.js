import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Creative Blogs</h1>
      <div className="links">
        <Link to="/" style={{ 
          color: 'white', 
          backgroundColor: '#3B5998',
          borderRadius: '8px' 
        }}>Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#3B5998',
          borderRadius: '8px' 
        }}>New Blog</Link>
        <Link to="/contact-us" style={{ 
          color: 'white', 
          backgroundColor: '#3B5998',
          borderRadius: '8px' 
        }}>Contact us</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;