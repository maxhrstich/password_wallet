const styles = {
  pageWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: '20px',
    padding: '20px',
    backgroundColor: '#000', // Black background
    minHeight: '100vh',
    boxSizing: 'border-box',
    margin: 0,
  },
  whiteText: {
    color: 'white'
  },
  loginDetail: {
    backgroundColor: '#0077b6', // Ocean blue
    color: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', //30% black
    textAlign: 'center',
    flexBasis: 'calc(25% - 20px)', // Adjusted for four items per row, accounting for gap
    maxWidth: 'calc(25% - 20px)', // Ensures the box does not grow beyond this width
    boxSizing: 'border-box',
    transition: 'transform 0.3s, background-color 0.3s', // Smooth transition for background color and transform
  },

  navbar: {
    backgroundColor: '#383838', // Darker background for contrast
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  navItem: {
    color: '#fff', // Default color
    fontWeight: '500',
    textDecoration: 'none',
    marginRight: '20px', // Space between items
    padding: '10px', // Padding for better touch targets
    borderRadius: '5px', // Optional: Rounded corners for aesthetic
    transition: 'color 0.3s', // Smooth transition for color change
  },

  textBlur: {
    filter: 'blur(5px)', // Adjust the pixel value as needed to increase or decrease the blur effect
    transition: 'filter 0.3s', // Smooth transition for the blur effect
  },

  loginPageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#000', // Matching the theme
  },

  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#383838', // Darker background for contrast
    borderRadius: '10px',
  },

  formGroup: {
    marginBottom: '15px',
  },

  inputField: {
    padding: '10px',
    margin: '5px 0',
    borderRadius: '5px',
    border: '1px solid #ccc', // Light grey border
    backgroundColor: '#F5F5F5', // Silvery white background color
    color: '#333', // Darker text for contrast
    width: 'calc(100% - 20px)', // Adjust width as needed, accounting for padding
    boxSizing: 'border-box', // Ensures padding doesn't add to the width
  },

  loginButton: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#0077b6', // Ocean blue, adjust as needed
    color: '#fff',
    cursor: 'pointer',
  },

    // Add or adjust in your styles.js
  // Update these styles in your styles.js file
  signUpForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#383838', // Adjust the color as needed
    borderRadius: '10px',
    transition: 'all 1.5s ease', // Updated timing to 1.5 seconds
    maxWidth: '400px', // Adjusted for animation
    width: '100%', // Ensures responsiveness
  },

  // Assuming other styles like formGroup, inputField are already defined and do not need changes


    // Styles for hidden inputs
    hiddenInput: {
      visibility: 'hidden',
      height: 0,
      opacity: 0,
      transition: 'visibility 0s, opacity 0.5s linear',
  },

};

export default styles;
