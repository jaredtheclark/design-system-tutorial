import React from "react";
// The HOC we wrap our components in to apply styles
import injectSheet from "react-jss";

// Your CSS file - in a JS object
const styles = theme => ({

  // All top level object keys are different class names
  myButton: {
    // Global style applied from theming
    color: theme.text.color,
    margin: {
      // jss-expand gives more readable syntax
      top: 5, // jss-default-unit makes this 5px
      right: 0,
      bottom: 0,
      left: "1rem"
    },

    // And we get SASS/LESS like qualities with the nested &
    "& span": {
      // jss-nested applies this to a child span
      fontWeight: "bold" // jss-camel-case turns this into 'font-weight'
    }
  },
  myLabel: {
    fontStyle: "italic"
  }
});

// Define the component using these styles and pass it the 'classes' prop.
// Use this to assign scoped class names.
const Button = ({ classes, children }) => (
  <button className={classes.myButton}>
    <span className={classes.myLabel}>{children}</span>
  </button>
);

// Export component with HOC to apply styles from above
export default injectSheet(styles)(Button)
