import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: '小兵速帮',
  description: '专业服务 安全 高效 为您一站式解决',
  keywords: [
    '小兵速帮',
    '上门安装',
    '上门维修',
    '家电维修',
    '家庭服务',
  ],
  authors: [{ name: '小兵速帮' }],
  generator: '小兵速帮',
  // icons: {
  //   icon: '',
  // },
  openGraph: {
    title: '扣子编程 | 你的 AI 工程师已就位',
    description:
      '我正在使用扣子编程 Vibe Coding，让创意瞬间上线。告别拖拽，拥抱心流。',
    url: 'https://code.coze.cn',
    siteName: '扣子编程',
    locale: 'zh_CN',
    type: 'website',
    // images: [
    //   {
    //     url: '',
    //     width: 1200,
    //     height: 630,
    //     alt: '扣子编程 - 你的 AI 工程师',
    //   },
    // ],
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Coze Code | Your AI Engineer is Here',
  //   description:
  //     'Build and deploy full-stack applications through AI conversation. No env setup, just flow.',
  //   // images: [''],
  // },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7563318862559409"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`font-sans antialiased`}>
        {isDev && <Inspector />}
        {children}
      </body>
    </html>
  );
}
