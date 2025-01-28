import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "../components";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    customBgColor: { control: "color" },
    customTextColor: { control: "color" },
    children: { control: "text" },
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
