import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "../components";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
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
    icon: { control: "select", options: ["search", "plus", "minus"] },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SolidButton: Story = {
  args: {
    size: "medium",
    label: "Solid Button",
    color: "teal",
    variant: "solid",
  },
};

export const OutlinedButton: Story = {
  args: {
    size: "medium",
    label: "Outlined Button",
    color: "cyan",
    variant: "outline",
  },
};

export const GhostButton: Story = {
  args: {
    size: "medium",
    label: "Ghost Button",
    color: "red",
    variant: "ghost",
  },
};
