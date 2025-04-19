import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Search, Mail, Lock } from "lucide-react";

import { Input } from "../components";
import { COLORS } from "../components/shared/types";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    value: { control: "text" },
    size: { control: "radio", options: ["small", "medium", "large"] },
    color: {
      control: "select",
      options: COLORS,
    },
    variant: { control: "radio", options: ["flushed", "outline"] },
    type: {
      control: "radio",
      options: ["text", "password", "email", "number"],
    },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
  },
  args: {
    placeholder: "Input",
    onChange: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FlushedInput: Story = {
  args: {
    color: "teal",
    variant: "flushed",
    type: "text",
    disabled: false,
    required: false,
  },
};

export const OutlinedInput: Story = {
  args: {
    color: "neutral",
    variant: "outline",
    type: "text",
    disabled: false,
    required: false,
  },
};

export const SearchInput: Story = {
  args: {
    color: "neutral",
    variant: "outline",
    type: "search",
    placeholder: "Search...",
    icon: <Search size={16} />,
  },
};

export const EmailInput: Story = {
  args: {
    color: "teal",
    variant: "outline",
    type: "email",
    placeholder: "Enter your email",
    icon: <Mail size={16} />,
  },
};

export const PasswordInput: Story = {
  args: {
    color: "red",
    variant: "outline",
    type: "password",
    placeholder: "Enter your password",
    icon: <Lock size={16} />,
  },
};
