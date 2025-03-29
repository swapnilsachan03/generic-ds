import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "../components";

const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "radio", options: ["circle", "rectangle"] },
    width: { control: "number" },
    height: { control: "number" },
    isFullWidth: { control: "boolean" },
  },
  args: {},
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const RectangleSkeleton: Story = {
  args: {
    variant: "rectangle",
    width: 300,
    height: 50,
  },
};

export const CircleSkeleton: Story = {
  args: {
    variant: "circle",
    width: 120,
    height: 120,
  },
};
