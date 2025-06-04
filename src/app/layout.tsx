import type { Metadata } from 'next'
import './globals.css'
import Header from '@/app/components/header/Header'
import Footer from '@/app/components/footer/Footer'


export const metadata: Metadata = {
  title: 'Tsundcle',
  description: 'Tsundcleで読書管理をしよう！',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>
        <div className='wrapper'>
        <Header />
        {children}
        <Footer />
        </div>
      </body>
    </html>
  )
}
