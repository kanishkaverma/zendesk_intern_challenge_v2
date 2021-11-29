import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Flex, Box, Heading, Button, Text, Grid } from '@chakra-ui/react'
import Link from 'next/link'
import Dashboard from '../components/Dashboard'
import { useRouter } from 'next/router'

export default function Home({ status }) {
	console.log(status)
	const apiIsHealthy = status === 'operational'

	const { asPath } = useRouter()

	if (!apiIsHealthy) {
		return (
			<Grid placeItems="center">
				<Text> Zendesk API is down. kindly retry later. </Text>
			</Grid>
		)
	}
	return <Dashboard currentPath={asPath}> </Dashboard>
}

export async function getStaticProps() {
	const res = await fetch(
		'https://status.zendesk.com/api/components/support?domain=zcckanishka.zendesk.com',
	)
	const response = await res.json()
	let { status } = response
	// status = 'xuz'
	return {
		props: { status }, // will be passed to the page component as props
		revalidate: 10,
	}
}
