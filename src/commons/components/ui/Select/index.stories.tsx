import type { Meta, StoryObj } from '@storybook/react-webpack5';

import {
  Select,
  SelectProps,
} from '@/commons/components/ui/Select';

const meta = {
  title: 'Components/UI/Select',
  component: Select,
  args: {
    options: [
      { value: 'ko', label: '한국어' },
      { value: 'en', label: 'English' },
      { value: 'jp', label: '日本語' },
    ],
    defaultValue: 'ko',
    variant: 'primary',
    size: 'medium',
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
    onChange: { action: 'changed' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<SelectProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultWithIcon: Story = {
  args: {
    iconSrc: '/icons/language-icon.svg',
    defaultValue: 'en',
  },
};

export const Compact: Story = {
  args: {
    defaultValue: 'en',
    options: [
      { value: 'ko', label: '한국어' },
      { value: 'en', label: '영어(English)' },
    ],
  },
};

export const DisabledLarge: Story = {
  args: {
    size: 'large',
    disabled: true,
    defaultValue: 'jp',
  },
};

