import React from "react";

const Logo = ({ size = 36, text = null }) => {
  const pixelSize = typeof size === "number" ? size : 36;
  return (
    <div className="flex items-center gap-2.5">
      <img
        src="/file.svg"
        alt="Logo"
        style={{ width: pixelSize, height: pixelSize, objectFit: "contain" }}
      />
      {text && (
        <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
          {text}
        </span>
      )}
    </div>
  );
};

export default Logo;


