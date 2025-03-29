import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Input } from "../components";

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
    color: { control: "radio", options: ["teal", "cyan", "red", "neutral"] },
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
    value: "",
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
