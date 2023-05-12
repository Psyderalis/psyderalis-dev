import './globals.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Psyderalis DEV</title>
      </head>
      <body>
        <Header />
        <main>
          <Navigation />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
