import type { NextPage, } from 'next'
import Head from 'next/head'
import { ReactNode } from 'react';
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

      <main className='mx-auto lg:min-h-screen bg-primary'> 
        { children }
      </main>

      <footer className='hidden'>
       
      </footer>
    </>
  )
}

export default Layout;