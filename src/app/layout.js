import './globals.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossorigin="anonymous" />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
          crossorigin="anonymous"></script>
        <title>Psyderalis DEV</title>
      </head>
      <body>
        <div className='container'>
        <Header />
        </div>
        <main className='container'>
          <Navigation />
          <div className='container'>
          {children}
          <Footer />
          </div>
        </main>
      </body>
    </html>
  )
}
