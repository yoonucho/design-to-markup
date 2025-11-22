import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { PlayButton, PlayButtonProps } from '@/commons/components/ui/PlayButton';

const meta = {
  title: 'Components/UI/PlayButton',
  component: PlayButton,
  args: {
    srLabel: '영상 재생',
    size: 'small',
    showCircle: false,
    'aria-pressed': false,
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#010f1c' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    showCircle: {
      control: 'boolean',
    },
  },
} satisfies Meta<PlayButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LightBackground: Story = {
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const WithCircle: Story = {
  args: {
    showCircle: true,
  },
};

