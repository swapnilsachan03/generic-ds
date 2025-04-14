import React, { useState, createContext, useContext, ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface CollapsibleProps {
  children: ReactNode;
  className?: string;
}

interface CollapsibleContextProps {
  isOpen: boolean;
  toggle: () => void;
}

const CollapsibleContext = createContext<CollapsibleContextProps | undefined>(
  undefined
);

const Collapsible: React.FC<CollapsibleProps> & {
  Trigger: React.FC<TriggerProps>;
  Content: React.FC<ContentProps>;
} = ({ children, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <CollapsibleContext.Provider value={{ isOpen, toggle }}>
      <div className={className}>{children}</div>
    </CollapsibleContext.Provider>
  );
};

interface TriggerProps {
  children: ReactNode;
  className?: string;
  chevronPosition?: "left" | "right";
}

const Trigger: React.FC<TriggerProps> = ({
  children,
  className,
  chevronPosition,
}) => {
  const context = useContext(CollapsibleContext);
  if (!context) throw new Error("Trigger must be used within a Collapsible");

  const ChevronComponent = chevronPosition && (
    <ChevronDown
      size={14}
      className={`transform transition-transform duration-200 absolute mx-3 ${
        context.isOpen ? "rotate-180" : "rotate-0"
      } ${chevronPosition === "right" ? "right-0" : "left-0"}`}
    />
  );

  return (
    <div
      onClick={context.toggle}
      className={`relative flex items-center w-full cursor-pointer transition-colors duration-200 ${
        chevronPosition === "left" ? "pl-9" : "pr-9"
      } ${className}`}
    >
      {children}
      {ChevronComponent}
    </div>
  );
};

interface ContentProps {
  children: ReactNode;
  className?: string;
}

const Content: React.FC<ContentProps> = ({ children, className }) => {
  const context = useContext(CollapsibleContext);
  if (!context) throw new Error("Content must be used within a Collapsible");

  return (
    <div
      className={`transition-all duration-200 ease-in-out overflow-hidden ${
        context.isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      } ${className}`}
    >
      <div className="py-3">{children}</div>
    </div>
  );
};

Collapsible.Trigger = Trigger;
Collapsible.Content = Content;

export default Collapsible;
