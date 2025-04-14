import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "../components";

const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
    controls: {
      exclude: ["isFullWidth"],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["circle", "rectangle", "pill"],
    },
    size: { control: "radio", options: ["xs", "sm", "md", "lg", "xl"] },
    animation: { control: "radio", options: ["pulse", "wave"] },
    width: { control: "number" },
    height: { control: "number" },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "rectangle",
    size: "md",
    animation: "pulse",
  },
};

export const Circle: Story = {
  args: {
    variant: "circle",
    size: "lg",
  },
};

export const Pill: Story = {
  args: {
    variant: "pill",
    width: 200,
    height: 40,
  },
};

export const WaveAnimation: Story = {
  args: {
    variant: "rectangle",
    size: "lg",
    animation: "wave",
  },
};

export const FullWidth: Story = {
  render: () => (
    <div className="w-[800px]">
      <Skeleton variant="rectangle" size="lg" isFullWidth />
    </div>
  ),
};

export const CustomSize: Story = {
  args: {
    variant: "rectangle",
    width: 150,
    height: 100,
  },
};

export const LoadingText: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Skeleton variant="rectangle" size="lg" />
      <Skeleton variant="rectangle" size="md" width={250} />
      <Skeleton variant="rectangle" size="sm" width={180} />
    </div>
  ),
};
