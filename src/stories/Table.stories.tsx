import type { Meta, StoryObj } from "@storybook/react";
import { Table, TableColumn } from "../components";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  age: number;
};

const sampleData: User[] = [
  {
    id: 1,
    name: "Alice Smith",
    email: "alice@example.com",
    role: "Admin",
    age: 29,
  },
  {
    id: 2,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "User",
    age: 34,
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    role: "Editor",
    age: 25,
  },
];

const columns: TableColumn<User>[] = [
  { key: "name", label: "Name", align: "left" },
  { key: "email", label: "Email", align: "left" },
  { key: "role", label: "Role", align: "center" },
  { key: "age", label: "Age", align: "right" },
];

const meta = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    showHeaders: { control: "boolean" },
    showBorders: { control: "boolean" },
    showRowBorders: { control: "boolean" },
    striped: { control: "boolean" },
    hover: { control: "boolean" },
    compact: { control: "boolean" },
    loading: { control: "boolean" },
    emptyText: { control: "text" },
    className: { control: "text" },
  },
  args: {
    headers: columns,
    data: sampleData,
    showHeaders: true,
    showBorders: true,
    showRowBorders: true,
    striped: true,
    hover: true,
    compact: false,
    loading: false,
    emptyText: "No users available.",
  },
} satisfies Meta<typeof Table<User>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultTable: Story = {};

export const CompactTable: Story = {
  args: {
    compact: true,
    striped: false,
    showBorders: false,
  },
};

export const LoadingTable: Story = {
  args: {
    loading: true,
  },
};

export const EmptyTable: Story = {
  args: {
    data: [],
    emptyText: "Nothing to show here!",
  },
};
