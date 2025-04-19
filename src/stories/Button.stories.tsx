import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "../components";
import { Search, Plus, ArrowRight } from "lucide-react";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A versatile button component that supports different variants, sizes, colors, and icons.

**Features:**
- Multiple variants: solid, outline, ghost
- Configurable sizes
- Full color palette support
- Icon support (left or right aligned)
- Disabled state
- Full width option

**Props:**
- \`color\`: Any color from the theme palette
- \`size\`: "small" | "medium" | "large"
- \`variant\`: "solid" | "outline" | "ghost"
- \`disabled\`: Optional boolean to disable the button
- \`isFullWidth\`: Optional boolean to make the button full width
- \`icon\`: Optional React node for icon
- \`children\`: Content of the button
- \`label\`: Alternative to children for simple text buttons
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    color: {
      control: "select",
      options: [
        "red",
        "orange",
        "amber",
        "yellow",
        "lime",
        "green",
        "emerald",
        "teal",
        "cyan",
        "sky",
        "blue",
        "indigo",
        "violet",
        "purple",
        "fuchsia",
        "pink",
        "rose",
        "slate",
        "gray",
        "zinc",
        "neutral",
        "stone",
      ],
    },
    size: { control: "radio", options: ["small", "medium", "large"] },
    variant: { control: "radio", options: ["solid", "outline", "ghost"] },
    disabled: { control: "boolean" },
    isFullWidth: { control: "boolean" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SolidButton: Story = {
  args: {
    size: "medium",
    children: "Solid Button",
    color: "teal",
    variant: "solid",
  },
};

export const OutlinedButton: Story = {
  args: {
    size: "medium",
    children: "Outlined Button",
    color: "cyan",
    variant: "outline",
  },
};

export const GhostButton: Story = {
  args: {
    size: "medium",
    children: "Ghost Button",
    color: "red",
    variant: "ghost",
  },
};

export const WithLeftIcon: Story = {
  args: {
    children: "Search",
    icon: <Search size={16} />,
    color: "yellow",
    variant: "solid",
  },
};

export const WithRightIcon: Story = {
  args: {
    children: "Next",
    icon: <ArrowRight size={16} />,
    color: "emerald",
    variant: "outline",
    iconPosition: "right",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="small" color="blue">
        Small
      </Button>
      <Button size="medium" color="blue">
        Medium
      </Button>
      <Button size="large" color="blue">
        Large
      </Button>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="solid" color="purple">
        Solid
      </Button>
      <Button variant="outline" color="purple">
        Outline
      </Button>
      <Button variant="ghost" color="purple">
        Ghost
      </Button>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button color="teal">Normal</Button>
      <Button color="teal" disabled>
        Disabled
      </Button>
    </div>
  ),
};
