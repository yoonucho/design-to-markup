import { Hero } from '@/commons/components/landing/Hero';
import { Video } from '@/commons/components/landing/Video';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        {/* 1. 제목 설정 */}
        <title>[조윤우] 신테카바이오 면접과제 프로젝트</title>

        {/* 2. 과제 내용 설명 */}
        <meta name='description' content='신테카바이오 채용 과제 제출물입니다. (지원자: 조윤우)' />

        {/* 3. 검색 로봇 수집 방지  */}
        <meta name='robots' content='noindex, nofollow' />

        {/* 4. Open Graph  */}
        <meta property='og:type' content='website' />
        <meta property='og:title' content='[조윤우] 신테카바이오 면접과제 프로젝트' />
        <meta
          property='og:description'
          content='신테카바이오 프론트엔드 채용 과제 제출물입니다. (테스트 페이지 구현 - 지원자: 조윤우)'
        />
        <meta property='og:image' content='/images/og-image.png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
      </Head>
      {/* 섹션 조립 */}
      <Hero />
      <Video />
    </>
  );
}
