import { ImageTab, ImageTabProps } from '@/commons/components/ui/ImageTab';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta = {
  title: 'Components/UI/ImageTab',
  component: ImageTab,
  args: {
    defaultActiveTabId: 'tab1',
    onTabChange: undefined,
  },
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    defaultActiveTabId: {
      control: 'radio',
      options: ['tab1', 'tab2', 'tab3'],
    },
    onTabChange: { action: 'tabChanged' },
  },
} satisfies Meta<ImageTabProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SecondTabActive: Story = {
  args: {
    defaultActiveTabId: 'tab2',
  },
};

export const ThirdTabActive: Story = {
  args: {
    defaultActiveTabId: 'tab3',
  },
};
