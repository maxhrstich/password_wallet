import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import styles from './styles';

const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const location = useLocation(); // Access location object

  // Define paths where the navbar should not be visible
  const hideOnPaths = ['/login', '/signup'];

  // Check if the current path is one of the hideOnPaths
  if (hideOnPaths.includes(location.pathname)) {
    return null; // Do not render Navbar on these paths
  }

  return (
    <nav style={styles.navbar}>
      {['Home', 'Create Details', 'Settings'].map((item, index) => (
        <a
          key={index}
          href="/" // Adjust hrefs as needed for correct navigation
          style={{
            ...styles.navItem,
            color: hovered === index ? '#0077b6' : styles.navItem.color,
          }}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        >
          {item}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
