import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Flex, Box, Heading, Button } from '@chakra-ui/react'
import Link from 'next/link'
import Dashboard from '../components/Dashboard'
import { useRouter } from 'next/router'

export default function Home() {
	const { asPath } = useRouter()
	console.log(asPath)
	return <Dashboard currentPath={asPath}> </Dashboard>
}
