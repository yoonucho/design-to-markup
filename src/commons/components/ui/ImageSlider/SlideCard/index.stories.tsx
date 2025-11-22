import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { SlideCard, SlideCardProps } from './index';

const meta = {
  title: 'Components/UI/ImageSlider/SlideCard',
  component: SlideCard,
  args: {
    imageSrc: '/images/image-slider1.png',
    imageAlt: '초록빛 능선 풍경 이미지',
  },
  argTypes: {
    imageSrc: {
      control: 'text',
      description: '이미지 URL',
    },
    imageAlt: {
      control: 'text',
      description: '이미지 대체 텍스트',
    },
    className: {
      control: 'text',
      description: '커스텀 CSS 클래스',
    },
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '460px', width: '100%' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<SlideCardProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: SlideCardProps) => (
    <SlideCard {...args}>
      <div style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px', color: '#485c11' }}>
        카드 제목
      </div>
      <div style={{ fontSize: '18px', color: '#6f6f6f', opacity: 0.8 }}>
        카드 설명 텍스트입니다. 여기에 원하는 내용을 자유롭게 작성할 수 있습니다.
      </div>
    </SlideCard>
  ),
};

export const WithLongText: Story = {
  render: (args: SlideCardProps) => (
    <SlideCard {...args}>
      <div style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px', color: '#485c11' }}>
        긴 텍스트 카드
      </div>
      <div style={{ fontSize: '18px', color: '#6f6f6f', opacity: 0.8 }}>
        이 카드는 콘텐츠가 길어졌을 경우 확인하기 위한 긴 텍스트의 예시입니다. 모든 내용은 테스트
        목적의 더미 데이터입니다. 텍스트가 여러 줄로 표시될 때 레이아웃이 어떻게 보이는지
        확인합니다.
      </div>
    </SlideCard>
  ),
};

export const WithMultipleParagraphs: Story = {
  render: (args: SlideCardProps) => (
    <SlideCard {...args}>
      <div style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px', color: '#485c11' }}>
        여러 단락 카드
      </div>
      <div style={{ fontSize: '18px', color: '#6f6f6f', opacity: 0.8 }}>
        <p style={{ margin: '0 0 8px 0' }}>첫 번째 단락입니다.</p>
        <p style={{ margin: '0' }}>두 번째 단락입니다. 단락 사이 간격을 확인할 수 있습니다.</p>
      </div>
    </SlideCard>
  ),
};

export const WithoutImage: Story = {
  args: {
    imageSrc: undefined,
  },
  render: (args: SlideCardProps) => (
    <SlideCard {...args}>
      <div
        style={{
          padding: '60px 20px',
          textAlign: 'center',
          fontSize: '22px',
          fontWeight: 700,
          color: '#485c11',
        }}
      >
        이미지 없는 커스텀 카드
        <div style={{ fontSize: '16px', fontWeight: 400, marginTop: '12px', color: '#6f6f6f' }}>
          완전히 자유로운 레이아웃
        </div>
      </div>
    </SlideCard>
  ),
};

export const CustomStyle: Story = {
  args: {
    className: 'custom-card',
  },
  render: (args: SlideCardProps) => (
    <SlideCard {...args}>
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '30px',
          fontSize: '20px',
          fontWeight: 700,
        }}
      >
        커스텀 스타일 카드
        <div style={{ fontSize: '14px', fontWeight: 400, marginTop: '8px', opacity: 0.9 }}>
          자유롭게 스타일링 가능
        </div>
      </div>
    </SlideCard>
  ),
};

export const MinimalContent: Story = {
  render: (args: SlideCardProps) => (
    <SlideCard {...args}>
      <div style={{ fontSize: '22px', fontWeight: 700, textAlign: 'center', color: '#485c11' }}>
        심플한 카드
      </div>
    </SlideCard>
  ),
};

