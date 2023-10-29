import { Html, Head, Main, NextScript } from 'next/document';
import Header from '@/components/Header';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <div className="pt-[70px] md:pt-[90px]">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
