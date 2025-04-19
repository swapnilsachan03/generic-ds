import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../components";
import { COLORS } from "../components/shared/types";

const meta = {
  title: "Components/Avatar/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: COLORS,
    },
    size: {
      control: "radio",
      options: ["xx-small", "x-small", "small", "medium", "large"],
    },
    shape: {
      control: "radio",
      options: ["circle", "rounded"],
    },
    fallback: {
      control: "radio",
      options: ["initials", "icon"],
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "John Doe",
    color: "blue",
    size: "medium",
    shape: "circle",
  },
};

export const WithIcon: Story = {
  args: {
    name: "John Doe",
    icon: "https://i.pravatar.cc/300",
    size: "large",
    shape: "circle",
  },
};

export const WithInitials: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Avatar name="John Doe" color="teal" />
      <Avatar name="Alice Smith" color="purple" />
      <Avatar name="Bob" color="rose" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Avatar name="John" size="xx-small" color="blue" />
      <Avatar name="John" size="x-small" color="blue" />
      <Avatar name="John" size="small" color="blue" />
      <Avatar name="John" size="medium" color="blue" />
      <Avatar name="John" size="large" color="blue" />
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Avatar name="John" shape="circle" color="emerald" />
      <Avatar name="Alice" shape="rounded" color="emerald" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Avatar name="A" color="blue" />
      <Avatar name="B" color="red" />
      <Avatar name="C" color="green" />
      <Avatar name="D" color="purple" />
      <Avatar name="E" color="orange" />
    </div>
  ),
};

export const Fallbacks: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Avatar name="John Doe" fallback="initials" color="blue" />
      <Avatar fallback="icon" color="blue" />
    </div>
  ),
};

export const WithRandomColors: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Avatar name="John Doe" randomizeColor />
      <Avatar name="Alice Smith" randomizeColor />
      <Avatar name="Bob Wilson" randomizeColor />
      <Avatar name="Emma Brown" randomizeColor />
      <Avatar name="James Lee" randomizeColor />
    </div>
  ),
};
