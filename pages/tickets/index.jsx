import { useRouter } from 'next/router'
import React from 'react'

export default function Tickets() {
	const router = useRouter()
	React.useEffect(() => {
		router.push('/tickets/1')
	}, [])

	return <div>index</div>
}
