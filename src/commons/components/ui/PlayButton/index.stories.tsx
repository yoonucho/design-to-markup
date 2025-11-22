import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { PlayButton, PlayButtonProps } from '@/commons/components/ui/PlayButton';

const meta = {
  title: 'Components/UI/PlayButton',
  component: PlayButton,
  args: {
    srLabel: '영상 재생',
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
} satisfies Meta<PlayButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LightBackground: Story = {
  parameters: {
    backgrounds: { default: 'light' },
  },
};

