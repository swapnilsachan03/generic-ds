import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Select, Button } from "../components";
import { ChevronDown } from "lucide-react";

const sampleOptions = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
  { value: "4", label: "Option 4" },
];

const meta = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A customizable select dropdown component that supports different variants, sizes, and colors.

**Props:**
- \`color\`: All colors from the palette
- \`size\`: "small" | "medium" | "large"
- \`variant\`: "solid" | "outline" | "ghost" | "flushed"
- \`options\`: Array of { value: string, label: string }
- \`placeholder\`: Optional placeholder text
- \`disabled\`: Optional boolean to disable the select
- \`required\`: Optional boolean to make the select required
- \`showChevron\`: Optional boolean to show/hide chevron icon
- \`customTrigger\`: Optional ReactNode to use as custom trigger
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
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
    variant: {
      control: "radio",
      options: ["solid", "outline", "ghost", "flushed"],
    },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    showChevron: { control: "boolean" },
  },
  args: {
    options: sampleOptions,
    onChange: fn(),
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SolidSelect: Story = {
  args: {
    color: "teal",
    variant: "solid",
    placeholder: "Select an option",
  },
};

export const OutlinedSelect: Story = {
  args: {
    color: "blue",
    variant: "outline",
    placeholder: "Select an option",
  },
};

export const GhostSelect: Story = {
  args: {
    color: "purple",
    variant: "ghost",
    placeholder: "Select an option",
  },
};

export const FlushedSelect: Story = {
  args: {
    color: "red",
    variant: "flushed",
    placeholder: "Select an option",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[200px]">
      <Select
        options={sampleOptions}
        variant="solid"
        color="teal"
        placeholder="Solid"
      />
      <Select
        options={sampleOptions}
        variant="outline"
        color="blue"
        placeholder="Outline"
      />
      <Select
        options={sampleOptions}
        variant="ghost"
        color="purple"
        placeholder="Ghost"
      />
      <Select
        options={sampleOptions}
        variant="flushed"
        color="red"
        placeholder="Flushed"
      />
    </div>
  ),
};

export const WithoutChevron: Story = {
  args: {
    color: "purple",
    variant: "outline",
    placeholder: "No chevron",
    showChevron: false,
  },
};

export const CustomTrigger: Story = {
  args: {
    options: sampleOptions,
  },
  render: args => (
    <Select
      {...args}
      customTrigger={
        <div className="underline font-semibold cursor-pointer dark:text-white">
          Click me to open the dropdown
        </div>
      }
    />
  ),
};

export const ColorVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[200px]">
      <Select options={sampleOptions} color="blue" placeholder="Blue" />
      <Select options={sampleOptions} color="teal" placeholder="Teal" />
      <Select options={sampleOptions} color="red" placeholder="Red" />
      <Select options={sampleOptions} color="purple" placeholder="Purple" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[200px]">
      <Select options={sampleOptions} size="small" placeholder="Small" />
      <Select options={sampleOptions} size="medium" placeholder="Medium" />
      <Select options={sampleOptions} size="large" placeholder="Large" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[200px]">
      <Select options={sampleOptions} placeholder="Normal" />
      <Select options={sampleOptions} placeholder="Disabled" disabled />
      <Select options={sampleOptions} placeholder="Required" required />
    </div>
  ),
};
