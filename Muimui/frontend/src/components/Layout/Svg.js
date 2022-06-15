import React from "react";
const SvgComponent = (props) => (
  <div className="wave"><div 
    style={{
      height: 150,
      overflow: "hidden",
    }}
  >
    <svg
      viewBox="0 0 500 150"
      preserveAspectRatio="none"
      style={{
        height: "100%",
        width: "100%",
      }}
      {...props}
    >
      <path
        d="M0 49.98c150 100 349.21-99.98 500 0v100H0Z"
        style={{
          stroke: "none",
          fill: "white",
        }}
      />
    </svg>
  </div>
  </div>
)

export default SvgComponent
