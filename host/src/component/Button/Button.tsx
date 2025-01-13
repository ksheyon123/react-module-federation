import React from "react";
import styled, { css } from "styled-components";
import {
  AiOutlineLoading3Quarters, // 회전하는 원형 로더
  AiOutlineLoading, // 기본 회전 로더
} from "react-icons/ai";

// Types
type ButtonVariant = "primary" | "secondary" | "danger" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

// Styled Components
const getVariantStyles = (variant: ButtonVariant) => {
  const variants = {
    primary: css`
      background-color: ${({ theme }) => theme.colors?.primary || "#3b82f6"};
      color: white;
      &:hover:not(:disabled) {
        background-color: ${({ theme }) =>
          theme.colors?.primaryDark || "#2563eb"};
      }
    `,
    secondary: css`
      background-color: ${({ theme }) => theme.colors?.secondary || "#e5e7eb"};
      color: ${({ theme }) => theme.colors?.secondaryText || "#1f2937"};
      &:hover:not(:disabled) {
        background-color: ${({ theme }) =>
          theme.colors?.secondaryDark || "#d1d5db"};
      }
    `,
    danger: css`
      background-color: ${({ theme }) => theme.colors?.danger || "#dc2626"};
      color: white;
      &:hover:not(:disabled) {
        background-color: ${({ theme }) =>
          theme.colors?.dangerDark || "#b91c1c"};
      }
    `,
    outline: css`
      background-color: transparent;
      border: 2px solid ${({ theme }) => theme.colors?.border || "#e5e7eb"};
      color: ${({ theme }) => theme.colors?.text || "#1f2937"};
      &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.colors?.hover || "#f3f4f6"};
      }
    `,
    ghost: css`
      background-color: transparent;
      color: ${({ theme }) => theme.colors?.text || "#1f2937"};
      &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.colors?.hover || "#f3f4f6"};
      }
    `,
  };
  return variants[variant];
};

const getSizeStyles = (size: ButtonSize) => {
  const sizes = {
    sm: css`
      height: 2rem;
      padding: 0 0.75rem;
      font-size: 0.875rem;
    `,
    md: css`
      height: 2.5rem;
      padding: 0 1rem;
      font-size: 1rem;
    `,
    lg: css`
      height: 3rem;
      padding: 0 1.5rem;
      font-size: 1.125rem;
    `,
  };
  return sizes[size];
};

const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth?: boolean;
}>`
  /* Tailwind classes as base styles */
  @apply inline-flex items-center justify-center rounded-md font-medium transition-colors
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
    disabled:pointer-events-none disabled:opacity-50;

  /* Styled-components dynamic styles */
  ${({ $variant }) => getVariantStyles($variant)};
  ${({ $size }) => getSizeStyles($size)};
  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `};
`;

// Button Component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled,
      leftIcon,
      rightIcon,
      fullWidth,
      ...props
    },
    ref
  ) => {
    return (
      <StyledButton
        ref={ref}
        className={className}
        disabled={isLoading || disabled}
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
        {...props}
      >
        {isLoading && <AiOutlineLoading3Quarters size={24} />}
        {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";

export default Button;

// Theme type definition (optional)
declare module "styled-components" {
  export interface DefaultTheme {
    colors?: {
      primary?: string;
      primaryDark?: string;
      secondary?: string;
      secondaryDark?: string;
      secondaryText?: string;
      danger?: string;
      dangerDark?: string;
      text?: string;
      border?: string;
      hover?: string;
    };
  }
}
