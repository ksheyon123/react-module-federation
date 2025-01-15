import React, { forwardRef, InputHTMLAttributes } from "react";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  helpText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  size?: "small" | "medium" | "large";
  variant?: "outlined" | "filled" | "underlined";
  required?: boolean;
  fullWidth?: boolean;
  isLoading?: boolean;
  isSuccess?: boolean;
  disabled?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helpText,
      leftIcon,
      rightIcon,
      size = "medium",
      variant = "outlined",
      required = false,
      fullWidth = false,
      isLoading = false,
      isSuccess = false,
      disabled = false,
      className = "",
      ...props
    },
    ref
  ) => {
    // Size classes
    const sizeClasses = {
      small: "py-1 px-2 text-sm",
      medium: "py-2 px-3 text-base",
      large: "py-3 px-4 text-lg",
    }[size];

    // Variant and state classes
    const getVariantClasses = () => {
      const baseClasses = disabled
        ? "border-gray-200 bg-gray-50"
        : error
        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
        : isSuccess
        ? "border-green-500 focus:ring-green-500 focus:border-green-500"
        : "border-gray-300 focus:ring-blue-500 focus:border-blue-500";

      const variantClasses = {
        outlined: `${baseClasses} bg-white border rounded-lg`,
        filled: `${baseClasses} bg-gray-50 border rounded-lg focus:bg-white`,
        underlined: `${baseClasses} border-t-0 border-l-0 border-r-0 border-b`,
      }[variant];

      return variantClasses;
    };

    // Container classes
    const containerClasses = `${fullWidth ? "w-full" : "w-auto"} ${className}`;

    // Input wrapper classes
    const wrapperClasses = `relative flex items-center w-full transition-all duration-200 ${getVariantClasses()} ${sizeClasses}`;

    // Input element classes
    const inputClasses = `
      w-full bg-transparent border-none focus:ring-0 disabled:cursor-not-allowed
      ${leftIcon ? "pl-10" : ""}
      ${rightIcon || isLoading ? "pr-10" : ""}
    `;

    return (
      <div className={containerClasses}>
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <div className={wrapperClasses}>
          {leftIcon && (
            <div className="absolute left-3 flex items-center pointer-events-none text-gray-400">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            disabled={disabled || isLoading}
            required={required}
            className={inputClasses}
            {...props}
          />

          {(rightIcon || isLoading) && (
            <div className="absolute right-3 flex items-center">
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-gray-300 border-t-blue-500" />
              ) : (
                rightIcon
              )}
            </div>
          )}
        </div>

        {helpText && !error && (
          <p className="mt-1 text-sm text-gray-500">{helpText}</p>
        )}

        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
export type { InputProps };
