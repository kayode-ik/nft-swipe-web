import React from "react";

type ButtonProps = {
  width?: string;
  height?: string;
  text: string;
  onClick?: () => void;
  bgColor?: string;
  textColor?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: React.ReactNode;
  imgIcon?: string;
  iconPosition?: "left" | "right";
  border?: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  width = "100px",
  height = "40px",
  text,
  onClick,
  bgColor = "bg-primary",
  textColor = "text-white",
  type = "button",
  disabled = false,
  icon,
  imgIcon,
  iconPosition = "left",
  border = "",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${bgColor} ${textColor} flex items-center justify-center rounded-lg px-4 py-2 ${className}`}
      style={{
        width,
        height,
        border,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {iconPosition === "left" && (icon || imgIcon) && (
        <span
          className="mr-2 flex items-center"
          style={{ marginRight: "10px" }}
        >
          {icon ? icon : <img src={imgIcon} alt="Icon" className="h-5 w-5" />}
        </span>
      )}
      <span>{text}</span>
      {iconPosition === "right" && (icon || imgIcon) && (
        <span className="ml-2 flex items-center" style={{ marginLeft: "10px" }}>
          {icon ? icon : <img src={imgIcon} alt="Icon" className="h-5 w-5" />}
        </span>
      )}
    </button>
  );
};

export default Button;
