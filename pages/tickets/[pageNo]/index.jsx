import Link from 'next/link'
import { useRouter } from 'next/router'
import Ticket from '../../../components/Ticket'
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableCaption,
	Button,
	Flex,
	Text,
} from '@chakra-ui/react'
import {
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	CloseButton,
	Grid,
} from '@chakra-ui/react'
import Dashboard from '../../../components/Dashboard'

export default function PageNo({
	ticketData,
	countData: {
		count: { value },
	},
	ticketData: { error, tickets },
}) {
	const router = useRouter()
	const { pageNo } = router.query
	console.log(pageNo)

	let maxNumber = Math.ceil(value / 25)

	if (error)
		return (
			<Alert status="error" size="xl" height="100vh">
				<AlertIcon />
				<AlertTitle mr={2}> Error</AlertTitle>
				<AlertDescription>
					{error?.message ? error.message : error}
				</AlertDescription>
			</Alert>
		)

	if (value === 0) {
		return (
			<>
				<Dashboard></Dashboard>
				<Grid placeItems="center">No Tickets in this view.</Grid>
			</>
		)
	}

	return (
		<>
			<Dashboard></Dashboard>
			<Table
				variant="simple"
				size="lg"
				textAlign="left"
				// borderColor="black"
				// border="10px"
			>
				{/* <Table variant='striped' colorScheme="teal" > */}
				<TableCaption placement="top">Ticket Information</TableCaption>
				<Thead>
					<Tr>
						<Th>Status</Th>
						<Th>Subject</Th>
						<Th>Details</Th>
					</Tr>
				</Thead>
				<Tbody>
					{tickets.map((elem, idx) => (
						// <div key={elem.id}>

						// <ListItem>
						<Ticket key={elem.id}>{elem}</Ticket>
						// </ListItem>
						// </div>
					))}
				</Tbody>
			</Table>
			<Flex justifyContent="space-between" alignItems="center">
				{pageNo > 1 ? (
					<Link href={`/tickets/${parseInt(pageNo) - 1}`}>
						<Button size="lg" margin="10">
							Previous
						</Button>
					</Link>
				) : (
					<div></div>
				)}
				{pageNo < maxNumber ? (
					<Link href={`/tickets/${parseInt(pageNo) + 1}`}>
						<Button size="lg" margin="10">
							Next
						</Button>
					</Link>
				) : (
					<div></div>
				)}
			</Flex>
		</>
	)
}

export async function getStaticPaths(context) {
	let res = await fetch(
		`https://zcckanishka.zendesk.com/api/v2/tickets/count`,
		{
			headers: {
				Authorization: `Bearer ${process.env.API_TOKEN}`,
			},
		},
	)
	res = (await res).json()

	let maxNumber = Math.ceil(res?.count?.value / 25)
	let paths = []

	for (let i = 1; i <= maxNumber; i++) {
		paths.push({ params: { pageNo: i } })
	}
	return { paths: paths, fallback: 'blocking' }
}

export async function getStaticProps(context) {
	let { pageNo } = context.params
	let [ticketData, countData] = await Promise.all([
		fetch(
			`https://zcckanishka.zendesk.com/api/v2/tickets.json?per_page=25&page=${pageNo}`,
			{
				headers: {
					Authorization: `Bearer ${process.env.API_TOKEN}`,
				},
			},
		),

		fetch(`https://zcckanishka.zendesk.com/api/v2/tickets/count`, {
			headers: {
				Authorization: `Bearer ${process.env.API_TOKEN}`,
			},
		}),
	])

	ticketData = await ticketData.json()
	countData = await countData.json()
	// console.log(ticketData)

	// console.log(!ticketData)
	const emptyData = !ticketData || !countData
	// console.log(!ticketData || !countData)

	const pageEnd =
		ticketData.next_page === null && ticketData.tickets.length === 0

	const hasZeroTickets = countData?.count?.value === 0

	if ((emptyData || pageEnd) && !hasZeroTickets) {
		return {
			notFound: true,
		}
	}

	return {
		props: { ticketData, countData }, // will be passed to the page component as props
		revalidate: 4,
	}
}
