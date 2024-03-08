import { montserrat } from './lib/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        {children}
      </body>

      <footer className='py-10 flex justify-center items-center'>
        Footer example.
      </footer>
    </html>
  );
}