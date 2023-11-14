import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/components/Header';
import { usePathname } from 'next/navigation';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
  const ap = usePathname();

  return (
    <>
      {!ap ||
      ap.startsWith('/admin') ||
      ap.startsWith('/update-alumni') ||
      ap.startsWith('/onboard') ? (
        <Component {...pageProps} />
      ) : (
        <>
          <Header />
          <div className="pt-[70px] md:pt-[90px]">
            <Component {...pageProps} />
          </div>
        </>
      )}
      <Toaster />
    </>
  );
}
