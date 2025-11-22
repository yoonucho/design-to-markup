import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { SlideCard } from '../SlideCard';
import { Carousel, CarouselProps } from './index';

const SAMPLE_ITEMS = [
  {
    id: 'slide-1',
    imageSrc: '/images/image-slider1.png',
    imageAlt: '초록빛 능선 풍경',
    title: '슬라이드 카드 1',
    description: '첫 번째 슬라이드 카드입니다.',
  },
  {
    id: 'slide-2',
    imageSrc: '/images/image-slider1.png',
    imageAlt: '초록빛 능선 풍경',
    title: '슬라이드 카드 2',
    description: '두 번째 슬라이드 카드입니다. 텍스트가 조금 더 길어질 수 있습니다.',
  },
  {
    id: 'slide-3',
    imageSrc: '/images/image-slider1.png',
    imageAlt: '초록빛 능선 풍경',
    title: '슬라이드 카드 3',
    description: '세 번째 슬라이드 카드입니다.',
  },
  {
    id: 'slide-4',
    imageSrc: '/images/image-slider1.png',
    imageAlt: '초록빛 능선 풍경',
    title: '슬라이드 카드 4',
    description:
      '네 번째 슬라이드 카드입니다. 이 카드는 텍스트가 매우 길어서 여러 줄로 표시될 수 있습니다. equalHeight 옵션을 테스트하기 위한 긴 텍스트입니다.',
  },
  {
    id: 'slide-5',
    imageSrc: '/images/image-slider1.png',
    imageAlt: '초록빛 능선 풍경',
    title: '슬라이드 카드 5',
    description: '다섯 번째 슬라이드 카드입니다.',
  },
];

const meta = {
  title: 'Components/UI/ImageSlider/Carousel',
  component: Carousel,
  args: {
    spaceBetween: 16,
    slidesPerView: 1.2,
    loop: true,
    navigation: false,
    pagination: true,
    navigationColor: '#000000',
    paginationColor: '#000000',
    equalHeight: false,
    breakpoints: undefined,
    className: undefined,
    children: undefined, // render 함수에서 제공
  },
  argTypes: {
    spaceBetween: {
      control: { type: 'range', min: 0, max: 50, step: 2 },
      description: '슬라이드 간 간격 (px)',
    },
    slidesPerView: {
      control: { type: 'number', min: 1, max: 5, step: 0.1 },
      description: '한 번에 보여질 슬라이드 개수',
    },
    loop: {
      control: 'boolean',
      description: '무한 루프 여부',
    },
    navigation: {
      control: 'boolean',
      description: '좌우 네비게이션 버튼 표시',
    },
    pagination: {
      control: 'boolean',
      description: '하단 페이지네이션 표시',
    },
    navigationColor: {
      control: 'color',
      description: '네비게이션 버튼 색상',
    },
    paginationColor: {
      control: 'color',
      description: '페이지네이션 색상',
    },
    equalHeight: {
      control: 'boolean',
      description: '모든 슬라이드 높이 동일하게 맞추기',
    },
  },
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<CarouselProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: CarouselProps) => (
    <Carousel {...args}>
      {SAMPLE_ITEMS.map((item) => (
        <SlideCard key={item.id} imageSrc={item.imageSrc} imageAlt={item.imageAlt}>
          <div style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>{item.title}</div>
          <div style={{ fontSize: '16px', color: '#6f6f6f' }}>{item.description}</div>
        </SlideCard>
      ))}
    </Carousel>
  ),
};

export const MultipleSlides: Story = {
  args: {
    slidesPerView: 2.5,
    spaceBetween: 20,
  },
  render: (args: CarouselProps) => (
    <Carousel {...args}>
      {SAMPLE_ITEMS.map((item) => (
        <SlideCard key={item.id} imageSrc={item.imageSrc} imageAlt={item.imageAlt}>
          <div style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>{item.title}</div>
          <div style={{ fontSize: '16px', color: '#6f6f6f' }}>{item.description}</div>
        </SlideCard>
      ))}
    </Carousel>
  ),
};

export const WithEqualHeight: Story = {
  args: {
    slidesPerView: 2.5,
    equalHeight: true,
  },
  render: (args: CarouselProps) => (
    <Carousel {...args}>
      {SAMPLE_ITEMS.map((item) => (
        <SlideCard key={item.id} imageSrc={item.imageSrc} imageAlt={item.imageAlt}>
          <div style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>{item.title}</div>
          <div style={{ fontSize: '16px', color: '#6f6f6f' }}>{item.description}</div>
        </SlideCard>
      ))}
    </Carousel>
  ),
};

export const CustomColors: Story = {
  args: {
    slidesPerView: 2,
    navigationColor: '#485c11',
    paginationColor: '#485c11',
  },
  render: (args: CarouselProps) => (
    <div style={{ backgroundColor: '#dfecc6', padding: '60px', borderRadius: '20px' }}>
      <Carousel {...args}>
        {SAMPLE_ITEMS.map((item) => (
          <SlideCard key={item.id} imageSrc={item.imageSrc} imageAlt={item.imageAlt}>
            <div style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>
              {item.title}
            </div>
            <div style={{ fontSize: '16px', color: '#6f6f6f' }}>{item.description}</div>
          </SlideCard>
        ))}
      </Carousel>
    </div>
  ),
};

export const WithoutNavigation: Story = {
  args: {
    navigation: false,
    slidesPerView: 2,
  },
  render: (args: CarouselProps) => (
    <Carousel {...args}>
      {SAMPLE_ITEMS.map((item) => (
        <SlideCard key={item.id} imageSrc={item.imageSrc} imageAlt={item.imageAlt}>
          <div style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>{item.title}</div>
          <div style={{ fontSize: '16px', color: '#6f6f6f' }}>{item.description}</div>
        </SlideCard>
      ))}
    </Carousel>
  ),
};

export const CustomContent: Story = {
  args: {
    slidesPerView: 3,
    spaceBetween: 24,
  },
  render: (args: CarouselProps) => (
    <Carousel {...args}>
      {Array.from({ length: 6 }, (_, i) => (
        <div
          key={i}
          style={{
            backgroundColor: '#f0f0f0',
            padding: '40px',
            borderRadius: '20px',
            textAlign: 'center',
            fontSize: '24px',
            fontWeight: 'bold',
          }}
        >
          Custom Slide {i + 1}
        </div>
      ))}
    </Carousel>
  ),
};
