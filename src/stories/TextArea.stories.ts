import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { TextArea } from "../components";

const meta = {
  title: "Components/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    value: { control: "text" },
    rows: { control: "number" },
    size: { control: "radio", options: ["small", "medium", "large"] },
    color: { control: "radio", options: ["teal", "cyan", "red", "neutral"] },
    variant: { control: "radio", options: ["flushed", "outline"] },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
  },
  args: {
    placeholder: "Type something...",
    value: "",
    onChange: fn(),
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FlushedTextArea: Story = {
  args: {
    color: "teal",
    variant: "flushed",
    rows: 3,
    disabled: false,
    required: false,
  },
};

export const OutlinedTextArea: Story = {
  args: {
    color: "neutral",
    variant: "outline",
    rows: 4,
    disabled: false,
    required: false,
  },
};

export const LargeTextArea: Story = {
  args: {
    color: "cyan",
    variant: "outline",
    size: "large",
    rows: 6,
  },
};
