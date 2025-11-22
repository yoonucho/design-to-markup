import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { SkipLink, SkipLinkProps } from '@/commons/components/ui/SkipLink';

const meta = {
  title: 'Components/UI/SkipLink',
  component: SkipLink,
  args: {
    children: '과제전형 본문으로 건너뛰기',
    targetId: 'main-content',
    lang: 'ko',
  },
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    targetId: {
      control: 'text',
      description: '건너뛸 섹션 id (# 제외)',
    },
    lang: {
      control: 'text',
    },
  },
} satisfies Meta<SkipLinkProps>;

export default meta;
type Story = StoryObj<typeof meta>;

const renderWithInstructions = (args: SkipLinkProps) => (
  <div
    style={{
      padding: '32px',
      minHeight: '240px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      fontFamily: 'var(--font-pretendard, sans-serif)',
    }}
  >
    <p style={{ margin: 0, fontSize: '1.4rem', color: '#333' }}>
      Canvas를 한번 클릭한 뒤 <kbd>Tab</kbd> 키를 누르면 스킵링크가 화면 상단에 나타납니다. 버튼이
      포커스를 받으면 Enter로 `{args.children}` 위치로 바로 이동합니다.
    </p>
    <SkipLink {...args} />
    <div
      id={args.targetId}
      style={{
        marginTop: '40px',
        padding: '24px',
        borderRadius: '12px',
        border: '1px dashed #c5c5c5',
        background: '#fafafa',
      }}
    >
      <strong>#{args.targetId}</strong> 영역입니다. 스킵링크 활성화 후 포커스가 이곳으로 이동합니다.
    </div>
  </div>
);

export const Default: Story = {
  render: renderWithInstructions,
};

export const EnglishLabel: Story = {
  args: {
    children: 'Skip to main content',
    lang: 'en',
    targetId: 'main-content',
  },
  render: renderWithInstructions,
};
