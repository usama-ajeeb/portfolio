import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav'
import Main from '../components/Home'

export default function Home() {
  return (
    <div className='flex    min-h-screen '>
      <Head>
        <title>Usama Nizamani</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main />
    </div>
  )
}
