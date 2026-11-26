import './globals.css';
export const metadata = { title: 'Meridian University', description: 'Your next chapter starts here.' };
export default function RootLayout({children}) {
  return <html lang="en"><body>{children}</body></html>;
}
