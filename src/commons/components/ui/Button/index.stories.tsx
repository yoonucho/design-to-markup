import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Button, ButtonProps } from '@/commons/components/ui/Button';

const meta = {
  title: 'Components/UI/Button',
  component: Button,
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
  },
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const TertiarySmall: Story = {
  args: {
    variant: 'tertiary',
    size: 'small',
    children: 'Link Action',
  },
};

export const PrimaryLarge: Story = {
  args: {
    size: 'large',
    children: 'Primary Large',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
};
