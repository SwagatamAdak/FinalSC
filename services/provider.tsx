/* 'use client'

import * as React from 'react'
import {
  GetSiweMessageOptions,
  RainbowKitSiweNextAuthProvider,
} from '@rainbow-me/rainbowkit-siwe-next-auth'
import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { Chain, RainbowKitProvider, connectorsForWallets, darkTheme } from '@rainbow-me/rainbowkit'
import {
  metaMaskWallet,
  trustWallet,
  coinbaseWallet,
  rainbowWallet,
} from '@rainbow-me/rainbowkit/wallets'
import { mainnet, hardhat } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

const bitfinity: Chain = {
  id: 355113,
  name: 'Bitfinity',
  network: 'bitfinity',
  iconUrl: 'https://bitfinity.network/logo.png',
  iconBackground: '#000000',
  nativeCurrency: {
    decimals: 18,
    name: 'Bitfinity',
    symbol: 'BFT',
  },
  rpcUrls: {
    public: { http: ['https://testnet.bitfinity.network'] },
    default: { http: ['https://testnet.bitfinity.network'] },
  },
  blockExplorers: {
    default: { name: 'Bitfinity Block Explorer', url: 'https://explorer.bitfinity.network/' },
    etherscan: { name: 'Bitfinity Block Explorer', url: 'https://explorer.bitfinity.network/' },
  },
  testnet: true,
}

const { chains, publicClient } = configureChains(
  [mainnet, bitfinity, hardhat],
  [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID as string }), publicProvider()]
)

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID as string

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      coinbaseWallet({ appName: 'Coinbase', chains }),
      rainbowWallet({ projectId, chains }),
    ],
  },
])

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})

const demoAppInfo = {
  appName: 'Dapp Funds dApp',
}

const getSiweMessageOptions: GetSiweMessageOptions = () => ({
  statement: `
  Once you're signed in, you'll be able to access all of our dApp's features.
  Thank you for partnering with CrowdFunding!`,
})

export function Providers({
  children,
  pageProps,
}: {
  children: React.ReactNode
  pageProps: {
    session: Session
  }
}) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  return (
    <WagmiConfig config={wagmiConfig}>
      <SessionProvider refetchInterval={0} session={pageProps.session}>
        <RainbowKitSiweNextAuthProvider getSiweMessageOptions={getSiweMessageOptions}>
          <RainbowKitProvider theme={darkTheme()} chains={chains} appInfo={demoAppInfo}>
            {mounted && children}
          </RainbowKitProvider>
        </RainbowKitSiweNextAuthProvider>
      </SessionProvider>
    </WagmiConfig>
  )
}
 */

'use client'

import * as React from 'react'
import {
  GetSiweMessageOptions,
  RainbowKitSiweNextAuthProvider,
} from '@rainbow-me/rainbowkit-siwe-next-auth'
import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { Chain, RainbowKitProvider, connectorsForWallets, darkTheme } from '@rainbow-me/rainbowkit'
import {
  metaMaskWallet,
  trustWallet,
  coinbaseWallet,
  rainbowWallet,
} from '@rainbow-me/rainbowkit/wallets'
import { hardhat } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

// Define the Bitfinity testnet chain
const bitfinity: Chain = {
  id: 95268,
  name: 'status',
  network: 'status',
  iconUrl: 'https://bitfinity.network/logo.png',
  iconBackground: '#000000',
  nativeCurrency: {
    decimals: 18,
    name: 'C1 Token',
    symbol: 'C1',
  },
  rpcUrls: {
    public: { http: ['https://obscure-eureka-66g7ww4xprqhrggg-9650.app.github.dev/ext/bc/status/rpc'] },
    default: { http: ['https://obscure-eureka-66g7ww4xprqhrggg-9650.app.github.dev/ext/bc/status/rpc'] },
  },
  blockExplorers: {
    default: { name: 'status', url: 'https://obscure-eureka-66g7ww4xprqhrggg-9650.app.github.dev/ext/bc/status/rpc' },
    etherscan: { name: 'status', url: 'https://obscure-eureka-66g7ww4xprqhrggg-9650.app.github.dev/ext/bc/status/rpc' },
  },
  testnet: true,
}

// Configure chains with Bitfinity testnet as the primary chain
const { chains, publicClient } = configureChains(
  [bitfinity, hardhat],  // Removed mainnet, added Bitfinity and hardhat
  [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID as string }), publicProvider()]
)

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID as string

// Define wallet connectors
const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      coinbaseWallet({ appName: 'Coinbase', chains }),
      rainbowWallet({ projectId, chains }),
    ],
  },
])

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})

// Application info
const demoAppInfo = {
  appName: 'Dapp Funds dApp',
}

// SIWE message options
const getSiweMessageOptions: GetSiweMessageOptions = () => ({
  statement: `
  Once you're signed in, you'll be able to access all of our dApp's features.
  Thank you for partnering with CrowdFunding!`,
})

// Providers component
export function Providers({
  children,
  pageProps,
}: {
  children: React.ReactNode
  pageProps: {
    session: Session
  }
}) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  return (
    <WagmiConfig config={wagmiConfig}>
      <SessionProvider refetchInterval={0} session={pageProps.session}>
        <RainbowKitSiweNextAuthProvider getSiweMessageOptions={getSiweMessageOptions}>
          <RainbowKitProvider theme={darkTheme()} chains={chains} appInfo={demoAppInfo}>
            {mounted && children}
          </RainbowKitProvider>
        </RainbowKitSiweNextAuthProvider>
      </SessionProvider>
    </WagmiConfig>
  )
}
