import React from 'react'
import { Box, Link, Flex, Button } from '@chakra-ui/react'

export default function Dashboard() {
	return (
		<Box w="100%" h="20%" backgroundColor="blue.300">
			{/* <Flex alignItems="center">
				<Heading size="sm" alignItems="center">
					Zendesk Intern Challenge
				</Heading>
			</Flex> */}
			<Flex justifyContent="end" align-items="center">
				<Box marginRight="10" borderRadius="lg" size="sm" marginY="2">
					<Link href="/tickets/1">
						<Button size="sm">Tickets</Button>
					</Link>
				</Box>
				<Box marginRight="10" borderRadius="lg" marginY="2">
					<Link href="/about">
						<Button size="sm">About</Button>
					</Link>
				</Box>
			</Flex>
		</Box>
	)
}
