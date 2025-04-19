import React from "react";
import { Meta } from "@storybook/react";
import {
  Button,
  Input,
  TextArea,
  Skeleton,
  Collapsible,
  Chip,
  AvatarGroup,
  IconButton,
  Select,
} from "../components";
import {
  RocketIcon,
  SparklesIcon,
  GithubIcon,
  Search,
  Bell,
  Settings,
  Terminal,
  Copy,
  Paintbrush,
  ArrowUpRight,
} from "lucide-react";

const meta: Meta = {
  title: "Welcome",
  parameters: {
    layout: "fullscreen",
    controls: { hideNoControlsWarning: true },
  },
  render: () => <Home />,
};

export default meta;

export const Home = () => {
  const [copied, setCopied] = React.useState(false);
  const installCommand = "npm install generic-ds";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900">
      <div className="max-w-5xl mx-auto px-2 flex flex-col gap-12 py-16">
        {/* Header */}
        <section className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
            GenericDS
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            A modern, composable, and customizable design system for React.
            Build stunning UIs with speed and consistency.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4">
            <div className="flex gap-4">
              <Button variant="outline" color="rose" disabled={true}>
                <a
                  href="https://github.com/swapnilsachan03/generic-ds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <GithubIcon className="w-4 h-4 mr-2" /> GitHub
                </a>
              </Button>
              <a href="/?path=/docs/components-button--docs">
                <Button color="rose">
                  <ArrowUpRight className="w-4 h-4 mr-2" /> Explore Components
                </Button>
              </a>
            </div>

            <div className="relative w-xs mt-2">
              <div className="bg-neutral-200 dark:bg-neutral-700 rounded-lg px-4 py-1 font-[monospace] text-sm flex items-center">
                <Terminal size={16} className="dark:text-white shrink-0" />

                <code className="dark:text-white flex-1">{installCommand}</code>

                <IconButton
                  onClick={copyToClipboard}
                  icon={<Copy size={16} />}
                  color="neutral"
                  variant="ghost"
                  ariaLabel="Copy to clipboard"
                />
              </div>
              {copied && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-xs py-1 px-2 rounded">
                  Copied!
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6 border border-neutral-200 dark:border-neutral-700 transition-colors duration-200">
            <Paintbrush className="h-6 w-6 text-fuchsia-500 dark:text-fuchsia-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
              Beautiful by Default
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm">
              Carefully crafted components with sensible defaults and elegant
              styles powered by Tailwind CSS.
            </p>
          </div>
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6 border border-neutral-200 dark:border-neutral-700 transition-colors duration-200">
            <RocketIcon className="h-6 w-6 text-emerald-500 dark:text-emerald-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
              Developer First
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm">
              Fully typed with TypeScript, optimized for DX, and ready for
              customization via utility classes or props.
            </p>
          </div>
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6 border border-neutral-200 dark:border-neutral-700 transition-colors duration-200">
            <img
              src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg"
              className="w-6 h-6 mb-4"
              alt="Tailwind CSS logo"
            />
            <h3 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
              Tailwind-Powered
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm">
              Built with Tailwind CSS under the hood — bring your design tokens,
              themes, and utilities with ease.
            </p>
          </div>
        </section>

        {/* Component Showcase */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-8 text-center text-neutral-900 dark:text-white">
            Example components
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Input and Buttons Section */}
            <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-white">
                Forms & Actions
              </h3>
              <div className="space-y-4">
                <Input
                  placeholder="Search something..."
                  icon={<Search size={16} />}
                  color="blue"
                  variant="outline"
                />

                <div className="flex gap-2 flex-wrap">
                  <Button color="teal" size="medium">
                    Primary
                  </Button>
                  <Button variant="outline" color="purple">
                    Secondary
                  </Button>
                  <IconButton
                    icon={<Bell size={16} />}
                    color="rose"
                    variant="ghost"
                    ariaLabel="Notifications"
                  />
                </div>

                <TextArea
                  placeholder="Write your message..."
                  color="cyan"
                  rows={3}
                />

                <Select
                  options={[
                    { value: "1", label: "Option 1" },
                    { value: "2", label: "Option 2" },
                    { value: "3", label: "Option 3" },
                  ]}
                  placeholder="Select an option"
                  color="indigo"
                />
              </div>
            </div>

            {/* Display Components Section */}
            <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-white">
                Display Elements
              </h3>
              <div className="space-y-4">
                <div className="flex gap-2 flex-wrap">
                  <Chip color="emerald" icon={<SparklesIcon size={14} />}>
                    New Feature
                  </Chip>
                  <Chip color="amber" variant="outline">
                    Warning
                  </Chip>
                  <Chip color="rose">Important</Chip>
                </div>

                <AvatarGroup
                  avatars={[
                    { id: "1", name: "John Doe", color: "blue" },
                    { id: "2", name: "Jane Smith", color: "purple" },
                    { id: "3", name: "Alex Johnson", color: "green" },
                  ]}
                  size="medium"
                  max={3}
                />

                <div className="space-y-2">
                  <Skeleton
                    variant="rectangle"
                    animation="wave"
                    width={200}
                    height={20}
                  />
                  <Skeleton
                    variant="rectangle"
                    animation="wave"
                    width={160}
                    height={20}
                  />
                  <Skeleton
                    variant="rectangle"
                    animation="wave"
                    width={180}
                    height={20}
                  />
                </div>

                <Collapsible>
                  <Collapsible.Trigger className="flex items-center gap-2 p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700/30 rounded-md text-neutral-900 dark:text-white">
                    <Settings size={16} />
                    <span>Advanced Settings</span>
                  </Collapsible.Trigger>
                  <Collapsible.Content className="p-2 text-neutral-600 dark:text-neutral-300">
                    Configure advanced settings and preferences here.
                  </Collapsible.Content>
                </Collapsible>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 text-center text-neutral-500 dark:text-neutral-400 text-sm">
          Built with ❤️ using React, Tailwind CSS, and Storybook.
        </footer>
      </div>
    </div>
  );
};
