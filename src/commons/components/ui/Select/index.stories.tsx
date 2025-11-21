import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Select, SelectOption, SelectProps } from '@/commons/components/ui/Select';

const languageOptions: SelectOption[] = [
  { value: 'ko', label: '한국어' },
  { value: 'en', label: 'English' },
  { value: 'jp', label: '日本語' },
];

const meta = {
  title: 'Components/UI/Select',
  component: Select,
  args: {
    options: languageOptions,
    defaultValue: 'ko',
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
    onChange: { action: 'changed' },
  },
} satisfies Meta<SelectProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const SecondaryWithIcon: Story = {
  args: {
    variant: 'secondary',
    iconSrc: '/icons/language-icon.svg',
    defaultValue: 'en',
  },
};

export const TertiarySmall: Story = {
  args: {
    variant: 'tertiary',
    size: 'small',
    defaultValue: 'jp',
  },
};

export const LargeDisabled: Story = {
  args: {
    size: 'large',
    disabled: true,
    defaultValue: 'fr',
  },
};
