import React from 'react';

// React UI component rendering a button for toggeling mode
export default function ThemeSelector(props) {
  return (
    <div className="themeSelector">
      <button onClick={props.toggleMode}>
        Switch To{" "}
        {props.theme.name === "Light Mode" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}
