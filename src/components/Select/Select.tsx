import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

import { Color } from "../shared/types";

import { variantColorMap } from "./helpers/colors";
import { selectVariants } from "./helpers/variants";
import { selectSizes, selectOptionSizes } from "./helpers/size";

export type SelectColor = Color;
export type SelectSize = "small" | "medium" | "large";
export type SelectVariant = "solid" | "outline" | "ghost" | "flushed";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  color?: SelectColor;
  size?: SelectSize;
  variant?: SelectVariant;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  showChevron?: boolean;
  customTrigger?: React.ReactNode;
  className?: string;
}

const Select = ({
  color = "neutral",
  variant = "outline",
  size = "medium",
  options,
  placeholder,
  disabled = false,
  required = false,
  value,
  onChange,
  showChevron = true,
  customTrigger,
  className,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      return () => {}; // Add empty cleanup for consistent return
    } else {
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 200); // Match this with CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const baseClass =
    "relative w-full transition-all duration-200 ease-in-out focus:outline-none font-medium px-3";

  const colorClass = variantColorMap[variant][color];
  const variantClass = selectVariants[variant];
  const sizeClass = selectSizes[size];

  const disabledClass = disabled
    ? "opacity-60 cursor-not-allowed"
    : "cursor-pointer";

  const requiredClass = required
    ? "after:content-['*'] after:ml-1 after:text-red-500"
    : "";

  const optionsBaseClass =
    "absolute w-full mt-1 py-1 bg-white dark:bg-neutral-800 rounded-md shadow-lg border border-neutral-200 dark:border-neutral-700 z-50 transition-all duration-200 ease-in-out";

  const optionsVisibilityClass = isOpen
    ? "opacity-100 scale-100 translate-y-0"
    : "opacity-0 scale-95 -translate-y-2";

  const optionClass = [
    "text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer transition-colors duration-150",
    selectOptionSizes[size],
  ].join(" ");

  const selectClass = [
    baseClass,
    colorClass,
    variantClass,
    sizeClass,
    disabledClass,
    requiredClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleChange = (selectedOption: SelectOption) => {
    onChange?.(selectedOption.value);
    setIsOpen(false);
  };

  const renderOptions = () => {
    if (!shouldRender) return null;

    return (
      <div className={`${optionsBaseClass} ${optionsVisibilityClass}`}>
        {options.map(option => (
          <div
            key={option.value}
            className={optionClass}
            onClick={() => handleChange(option)}
          >
            {option.label}
          </div>
        ))}
      </div>
    );
  };

  if (customTrigger) {
    return (
      <div ref={selectRef} className="relative">
        <div onClick={() => !disabled && setIsOpen(!isOpen)}>
          {customTrigger}
        </div>
        {renderOptions()}
      </div>
    );
  }

  return (
    <div ref={selectRef} className="relative">
      <div
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={selectClass}
      >
        <div className="flex items-center justify-between py-1.5">
          <span>
            {value
              ? options.find(opt => opt.value === value)?.label
              : placeholder || "Select an option"}
          </span>

          {showChevron && (
            <ChevronDown
              size={16}
              className={`ml-2 shrink-0 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          )}
        </div>
      </div>
      {renderOptions()}
    </div>
  );
};

export default Select;
