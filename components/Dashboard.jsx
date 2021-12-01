import React from 'react'
import { VscGithub } from 'react-icons/vsc'
import { useRouter } from 'next/router'
import { Box, Link, Flex, Button, Image, Text, Icon } from '@chakra-ui/react'

export default function Dashboard({ currentPath }) {
	const { asPath } = useRouter()
	let dashboardStyle = {}

	if (asPath === '/') {
		dashboardStyle = {
			height: '90vh',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
		}
	} else {
		dashboardStyle = {
			display: 'flex',
			justifyContent: 'space-between',
		}
	}
	return (
		<>
			<Box
				w="100%"
				// height="100%"
				// height={dashboardHeight}
				style={dashboardStyle}
				backgroundColor="#2F3941"
			>
				<Box>
					<Link
						style={{ textDecoration: 'none', onselectstart: 'return false' }}
						href="/"
					>
						<Text fontSize="3xl" color="#56777A" role="logo">
							zendesk_intern_challenge
						</Text>
					</Link>
				</Box>
				<Box style={{ display: 'flex' }}>
					<Box marginRight="5" borderRadius="lg" size="sm" marginY="2">
						<Link
							href="/tickets/1"
							style={{ textDecoration: 'none', onselectstart: 'return false' }}
						>
							<Button size="sm">Tickets</Button>
						</Link>
					</Box>
					<Box marginRight="4" borderRadius="lg" marginY="2">
						<Link
							href="/about"
							style={{ textDecoration: 'none', onselectstart: 'return false' }}
						>
							<Button size="sm">About</Button>
						</Link>
					</Box>

					<Box marginRight="4" borderRadius="lg" marginY="2">
						<Link
							href="https://github.com/kanishkaverma/zendesk_intern_challenge_v2"
							style={{ textDecoration: 'none', onselectstart: 'return false' }}
						>
							<Icon
								as={VscGithub}
								viewBox="md"
								w="30px"
								h="30px"
								color="white"
							/>
							{/* <Button size="sm">About</Button> */}
						</Link>
					</Box>
				</Box>
			</Box>

			{currentPath === '/' && (
				<Flex align="flex-end">
					<Text
						color="white"
						backgroundColor="#2f3941"
						height="10vh"
						width="100vw"
						paddingTop="10"

						// style={{ bottom: '0', position: 'relative' }}
						// style={{ position: 'absolute', bottom':'0'}}
					>
						Made with &#128151; by Kanishka Verma
					</Text>
				</Flex>
			)}
		</>
	)
}
