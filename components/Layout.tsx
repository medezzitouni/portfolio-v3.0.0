import type { NextPage, } from 'next'
import Head from 'next/head'
// import { Container } from 'react-bootstrap';


const Layout: NextPage<LayoutProps> = ({ children }: LayoutProps) => {

  return (
    <>
      <Head>
        <title>Methe</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href={process.env.BACKEND_URL + "/favicon.ico" }/>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
      </Head>

      <main className='mx-auto h-screen' style={{ backgroundColor: 'wheat'}} > 
        { children }
      </main>

      <footer>
       
      </footer>
    </>
  )
}

export default Layout
