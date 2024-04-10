import React from 'react';

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'primary-disabled' | 'secondary-disabled' | "round"
}

const Button: React.FC<ButtonProps> = ({ className, children, variant = "primary" }) => {
  const getVariantClassName = (): string => {

    switch (variant) {
      case "primary":
        return "flex flex-row items-center border-2 border-primaryBlue drop-shadow-[10px_10px_8px_rgba(21,78,227,0.4)] justify-center bg-primaryBlue font-mid text-white px-[20px] py-[10px] rounded-full gap-1 text-lg"
      case "secondary":
        return "flex flex-row items-center border-2 border-[#353C4A] justify-center bg-Grey font-mid text-white px-[24px] py-[12px] rounded-full gap-2 text-lg"
      case "primary-disabled":
        return "flex flex-row items-center border-2 border-primaryBlue drop-shadow-[10px_10px_8px_rgba(21,78,227,0.4)]  justify-center bg-[#144EE380] font-mid text-white px-[25px] py-[12px] rounded-full gap-2 text-lg"
      case "secondary-disabled":
        return "flex flex-row items-center border-2 border-[#353C4A] justify-center bg-[#181E2980] font-semi text-white px-[25px] py-[12px] rounded-full gap-2 text-lg"
      case "round":
        return "flex flex-row items-center border-2 border-primaryBlue drop-shadow-[10px_10px_8px_rgba(21,78,227,0.4)] justify-center bg-primaryBlue font-mid text-white px-[15px] py-[15px] rounded-full gap-1 text-lg"
    }
  }
  return (
    < button className={`${getVariantClassName()} ${className}`}>
      {children}
    </button >
  )
}

export default Button;
