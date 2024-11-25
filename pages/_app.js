import '../styles/globals.css';  // Estilos globais
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
        <Component {...pageProps} />
        C
    </Layout>
    
  )
}

export default MyApp