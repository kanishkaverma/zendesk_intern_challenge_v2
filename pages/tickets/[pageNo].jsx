import Link from 'next/link'
import { useRouter } from 'next/router'

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

	if (error) return <div>{error?.message ? error.message : error}</div>

	return (
		<>
			{tickets.map((elem, idx) => (
				<div key={elem.id}>{elem.id}</div>
			))}
			{pageNo < maxNumber ? (
				<Link href={`/tickets/${parseInt(pageNo) + 1}`}>
					<a>next</a>
				</Link>
			) : (
				<div></div>
			)}{' '}
			{pageNo > 1 ? (
				<Link href={`/tickets/${parseInt(pageNo) - 1}`}>
					<a>prev</a>
				</Link>
			) : (
				<div></div>
			)}
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
	// console.log('==================', emptyData, pageEnd)

	if (emptyData || pageEnd) {
		return {
			notFound: true,
		}
	}

	return {
		props: { ticketData, countData }, // will be passed to the page component as props
		revalidate: 4,
	}
}
