import "../../public/assets/vendor/bootstrap/css/bootstrap.min.css"
import "../../public/assets/vendor/font-awesome/css/font-awesome.min.css"
import "../../public/assets/vendor/justifiedGallery/css/justifiedGallery.min.css"
import "../../public/assets/css/main.css"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Verum Blogs',
  description: 'This is a full featured blogs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
