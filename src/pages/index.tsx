import Head from 'next/head'
import Image from 'next/image'
import { logo } from 'public/assets'

// import { Be_Vietnam_Pro } from '@next/font/google'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <button className='btn btn-primary  capitalize rounded-sm'>Hey How are you</button>
        <p className='text-red-300'>Heyy</p>
        <Image src={logo} alt={'Payforce Logo'} />
      </main>
    </>
  )
}
