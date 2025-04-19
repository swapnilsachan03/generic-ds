import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CircleDot } from "lucide-react";
import Chip from "../components/Chip/Chip";
import { COLORS } from "../components/shared/types";

const meta = {
  title: "Components/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A flexible chip component that supports different shapes, colors, and variants.

**Props:**
- \`color\`: "neutral" | "teal" | "red" | "cyan"
- \`size\`: "small" | "medium" | "large"
- \`variant\`: "solid" | "outline"
- \`shape\`: "rounded" | "pill"
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
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
    },
    variant: {
      control: "radio",
      options: ["solid", "outline"],
    },
    shape: {
      control: "radio",
      options: ["rounded", "pill"],
    },
    children: { control: "text" },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default Chip",
    color: "neutral",
    size: "medium",
    variant: "solid",
    shape: "pill",
  },
};

export const WithIcon: Story = {
  args: {
    children: "Chip with Icon",
    color: "teal",
    size: "medium",
    variant: "solid",
    shape: "pill",
    icon: <CircleDot size={14} className="mr-1" />,
  },
};

export const ColorVariants: Story = {
  args: {
    children: "Color Variants",
  },
  render: () => (
    <div className="flex gap-4 items-center">
      <Chip color="neutral">Neutral</Chip>
      <Chip color="teal">Teal</Chip>
      <Chip color="red">Red</Chip>
      <Chip color="cyan">Cyan</Chip>
    </div>
  ),
};

export const SizeVariants: Story = {
  args: {
    children: "Size Variants",
  },
  render: () => (
    <div className="flex gap-4 items-center">
      <Chip size="small">Small</Chip>
      <Chip size="medium">Medium</Chip>
      <Chip size="large">Large</Chip>
    </div>
  ),
};

export const ShapeVariants: Story = {
  args: {
    children: "Shape Variants",
  },
  render: () => (
    <div className="flex gap-4 items-center">
      <Chip shape="rounded" color="teal">
        Rounded
      </Chip>
      <Chip shape="pill" color="teal">
        Pill
      </Chip>
    </div>
  ),
};

export const Variants: Story = {
  args: {
    children: "Variants",
  },
  render: () => (
    <div className="flex gap-4 items-center">
      <Chip variant="solid" color="cyan">
        Solid
      </Chip>
      <Chip variant="outline" color="cyan">
        Outline
      </Chip>
    </div>
  ),
};
