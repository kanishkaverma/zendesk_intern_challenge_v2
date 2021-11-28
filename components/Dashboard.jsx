import React from 'react'
import { Box, Link, Flex, Button, Image, Text } from '@chakra-ui/react'
// import {Link from}

export default function Dashboard({ currentPath }) {
	let dashboardStyle = {}

	if (currentPath == '/') {
		dashboardStyle = {
			height: '100vh',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
		}
	} else {
		dashboardStyle = {
			height: '30%',

			display: 'flex',
			justifyContent: 'space-between',
		}
	}
	console.log(currentPath)
	return (
		<Box w="100%" style={dashboardStyle} backgroundColor="#2F3941">
			<Box>
				<Link
					style={{ textDecoration: 'none', onselectstart: 'return false' }}
					href="/"
				>
					<Text fontSize="3xl" color="#56777A">
						zendesk_intern_challenge
					</Text>
				</Link>
			</Box>
			<Box style={{ display: 'flex' }}>
				<Box marginRight="5" borderRadius="lg" size="sm" marginY="2">
					<Link href="/tickets/1">
						<Button size="sm">Tickets</Button>
					</Link>
				</Box>
				<Box marginRight="4" borderRadius="lg" marginY="2">
					<Link href="/about">
						<Button size="sm">About</Button>
					</Link>
				</Box>
			</Box>
		</Box>
	)
}
