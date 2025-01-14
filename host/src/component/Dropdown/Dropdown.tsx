import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

interface DropdownOption {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
}

interface DropdownProps {
  options: DropdownOption[];
  value?: string | number;
  onChange?: (value: string | number) => void;
  placeholder?: string;
  width?: string;
  disabled?: boolean;
  error?: string;
  label?: string;
  required?: boolean;
}

// 동적 스타일을 위한 styled-components
const DropdownContainer = styled.div<{ $width: string }>`
  width: ${(props) => props.$width};
`;

const DropdownButton = styled.button<{
  $isOpen: boolean;
  $hasError: boolean;
  $disabled: boolean;
}>`
  border: 1px solid
    ${(props) => {
      if (props.$disabled) return "#e5e7eb";
      if (props.$hasError) return "#ef4444";
      return props.$isOpen ? "#3b82f6" : "#e5e7eb";
    }};
  background-color: ${(props) => (props.$disabled ? "#f3f4f6" : "white")};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${(props) => {
      if (props.$disabled) return "#e5e7eb";
      if (props.$hasError) return "#ef4444";
      return "#3b82f6";
    }};
  }
`;

const DropdownIcon = styled(IoIosArrowDown)<{ $isOpen: boolean }>`
  transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.2s ease;
`;

const DropdownMenu = styled.div<{ $width: string }>`
  width: ${(props) => props.$width};
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = "선택해주세요",
  width = "100%",
  disabled = false,
  error,
  label,
  required = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((option) => option.value === value);

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string | number) => {
    onChange?.(optionValue);
    setIsOpen(false);
  };

  return (
    <DropdownContainer $width={width} ref={dropdownRef} className="relative">
      {/* Label */}
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Dropdown Button */}
      <DropdownButton
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        $isOpen={isOpen}
        $hasError={!!error}
        $disabled={disabled}
        className="w-full px-4 py-2.5 rounded-lg flex items-center justify-between"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <div className="flex items-center gap-2 truncate">
          {selectedOption?.icon}
          <span
            className={`truncate ${
              !selectedOption ? "text-gray-400" : "text-gray-900"
            }`}
          >
            {selectedOption?.label || placeholder}
          </span>
        </div>
        <DropdownIcon
          $isOpen={isOpen}
          className="text-gray-400 text-xl flex-shrink-0"
        />
      </DropdownButton>

      {/* Error Message */}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}

      {/* Dropdown Menu */}
      {isOpen && !disabled && (
        <DropdownMenu
          $width={width}
          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5"
        >
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`
                flex items-center px-4 py-2 cursor-pointer gap-2
                ${
                  option.value === value
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-900 hover:bg-gray-50"
                }
              `}
            >
              {option.icon}
              <span className="truncate">{option.label}</span>
            </div>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

export { Dropdown };
export type { DropdownProps, DropdownOption };
