import React from 'react'
import { Grid, Box, Text, Container } from '@chakra-ui/react'
import Dashboard from '../components/Dashboard'

export default function about() {
	return (
		<>
			<Dashboard />
			<Grid
				width="100vw"
				height="100vh"
				backgroundColor="#2f3941"
				placeItems="center"
			>
				<Box>
					<Container color="white">
						This webapp was made using Next.js for the zendesk_intern_challenge.
						Next js was used as to make API calls securely on server without
						needing another Node server. If a normal react app was used, even
						with .env files, the final js bundle would expose the API keys to
						the public. However, since, next was used, the server makes the API
						call and the keys are secure.
					</Container>
					<Container color="white">
						Moreover, Next.js is able to provide incremental static side
						generation. Thus, optimzing time to first paint. As a result, the
						website is very responsive.
					</Container>
				</Box>
			</Grid>
		</>
	)
}
