import Layout from '../Components/Layout'
import '../styles/globals.css'
import {ThemeProvider} from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </ThemeProvider>
  )
}

export default MyApp
