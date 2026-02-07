import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { PlasmicRootProvider } from '@plasmicapp/loader-nextjs' 
import Head from 'next/head'

// You might need to import your PLASMIC init here if you rely on global context
// import { PLASMIC } from '../plasmic-init'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlasmicRootProvider Head={Head}>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  )
}
