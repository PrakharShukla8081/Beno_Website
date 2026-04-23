import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "filled" | "outlined";
}

const Button: React.FC<ButtonProps> = ({
  text,
  href,
  icon,
  onClick,
  className = "",
  variant = "filled",
}) => {
  const baseClasses =
    "inline-flex items-center gap-2 px-6 py-2 rounded-full font-medium transition";

  const variantClasses =
    variant === "outlined"
      ? "bg-white text-borange border border-borange hover:bg-borange hover:text-bwhite"
      : "bg-borange text-bwhite hover:bg-bblue";

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseClasses} ${variantClasses} ${className}`}
      >
        {text}
        {icon}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
