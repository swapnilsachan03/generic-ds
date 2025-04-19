import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Search, Plus, Minus, ArrowRight, X } from "lucide-react";
import { IconButton } from "../components";
import { COLORS } from "../components/shared/types";

const meta = {
  title: "Components/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A button variant designed specifically for icons with a square aspect ratio.

**Props:**
- \`color\`: All colors from the palette
- \`size\`: "small" | "medium" | "large"
- \`variant\`: "solid" | "outline" | "ghost"
- \`icon\`: React.ReactNode - The icon to display
- \`ariaLabel\`: string - Accessibility label for the button
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: COLORS,
    },
    size: { control: "radio", options: ["small", "medium", "large"] },
    variant: { control: "radio", options: ["solid", "outline", "ghost"] },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SolidIconButton: Story = {
  args: {
    size: "medium",
    color: "teal",
    variant: "solid",
    icon: <Search size={16} />,
    ariaLabel: "Search",
  },
};

export const OutlinedIconButton: Story = {
  args: {
    size: "medium",
    color: "cyan",
    variant: "outline",
    icon: <Plus size={16} />,
    ariaLabel: "Add item",
  },
};

export const GhostIconButton: Story = {
  args: {
    size: "medium",
    color: "red",
    variant: "ghost",
    icon: <X size={16} />,
    ariaLabel: "Close",
  },
};
