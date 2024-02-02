import React, { useEffect, useRef } from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <div className="btn-contianer" onClick={onClick}>
      {label}
    </div>
  );
};

export default ButtonComponent;
