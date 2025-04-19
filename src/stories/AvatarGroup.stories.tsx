import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { AvatarGroup } from "../components";
import { AvatarProps } from "../components/Avatar/Avatar";
import { COLORS } from "../components/shared/types";

const sampleAvatars: (AvatarProps & { id: string })[] = [
  {
    id: "1",
    name: "John Doe",
    color: "blue",
    icon: "https://i.pravatar.cc/300?img=1",
  },
  {
    id: "2",
    name: "Alice Smith",
    color: "purple",
    icon: "https://i.pravatar.cc/300?img=2",
  },
  {
    id: "3",
    name: "Bob Johnson",
    color: "green",
    icon: "https://i.pravatar.cc/300?img=3",
  },
  {
    id: "4",
    name: "Emma Wilson",
    color: "red",
    icon: "https://i.pravatar.cc/300?img=4",
  },
  {
    id: "5",
    name: "James Brown",
    color: "orange",
    icon: "https://i.pravatar.cc/300?img=5",
  },
];

const meta = {
  title: "Components/Avatar/AvatarGroup",
  component: AvatarGroup,
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
    max: {
      control: "number",
    },
    showTooltip: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof AvatarGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    avatars: sampleAvatars,
    size: "medium",
    shape: "circle",
  },
};

export const WithMax: Story = {
  args: {
    avatars: sampleAvatars,
    max: 3,
    size: "medium",
    shape: "circle",
  },
};

export const WithTooltip: Story = {
  args: {
    avatars: sampleAvatars,
    max: 3,
    showTooltip: true,
    size: "medium",
    shape: "circle",
  },
};

export const Sizes: Story = {
  args: {
    avatars: sampleAvatars,
    size: "medium",
    shape: "circle",
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <AvatarGroup avatars={sampleAvatars} size="xx-small" max={4} />
      <AvatarGroup avatars={sampleAvatars} size="x-small" max={4} />
      <AvatarGroup avatars={sampleAvatars} size="small" max={4} />
      <AvatarGroup avatars={sampleAvatars} size="medium" max={4} />
      <AvatarGroup avatars={sampleAvatars} size="large" max={4} />
    </div>
  ),
};

export const Shapes: Story = {
  args: {
    avatars: sampleAvatars,
    size: "medium",
    shape: "circle",
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <AvatarGroup
        avatars={sampleAvatars}
        shape="circle"
        max={4}
        size="medium"
      />
      <AvatarGroup
        avatars={sampleAvatars}
        shape="rounded"
        max={4}
        size="medium"
      />
    </div>
  ),
};

export const WithRandomColors: Story = {
  args: {
    avatars: [
      { id: "1", name: "John Doe" },
      { id: "2", name: "Alice Smith" },
      { id: "3", name: "Bob Johnson" },
      { id: "4", name: "Emma Wilson" },
      { id: "5", name: "James Brown" },
      { id: "6", name: "Sarah Davis" },
    ],
    max: 3,
    randomizeColor: true,
  },
};
