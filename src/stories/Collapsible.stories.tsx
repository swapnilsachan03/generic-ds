import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Lightbulb } from "lucide-react";
import { Collapsible } from "../components";

const meta = {
  title: "Components/Collapsible",
  component: Collapsible,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A collapsible component for showing/hiding content.

**Trigger Props:**
- \`showChevron\`: boolean - Whether to show the chevron icon. Default is true.
- \`chevronPosition\`: "left" | "right" | undefined - Position of the chevron icon. By default, chevron will be shown on the right.
- \`className\`: string - Additional CSS classes for the trigger.

**Content Props:**
- \`className\`: string - Additional CSS classes for the content container.
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description:
        "Additional CSS classes to apply to the collapsible container",
    },
  },
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleCollapsible: Story = {
  args: {
    className: "w-[500px]",
    children: (
      <Collapsible>
        <Collapsible.Trigger className="flex items-center gap-3 p-3 hover:bg-neutral-500/10 dark:text-white">
          <Lightbulb size={16} />
          <span>Example Section</span>
        </Collapsible.Trigger>
        <Collapsible.Content className="dark:text-white">
          This is an example of collapsible content that can be shown or hidden.
        </Collapsible.Content>
      </Collapsible>
    ),
  },
};

export const MultipleCollapsibles: Story = {
  args: {
    className: "w-[500px] divide-y divide-gray-700 dark:divide-gray-200",
    children: (
      <>
        {[1, 2, 3].map(index => (
          <Collapsible key={index}>
            <Collapsible.Trigger
              className="flex flex-row items-center gap-3 p-3 hover:bg-neutral-500/10 dark:text-white"
              chevronPosition="left"
            >
              <Lightbulb size={16} />
              Section {index}
            </Collapsible.Trigger>

            <Collapsible.Content className="dark:text-white">
              Content for section {index}. Each section can be independently
              expanded or collapsed.
            </Collapsible.Content>
          </Collapsible>
        ))}
      </>
    ),
  },
};
