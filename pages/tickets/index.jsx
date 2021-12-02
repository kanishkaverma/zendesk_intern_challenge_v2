import { useRouter } from 'next/router'
import React from 'react'

export default function Tickets() {
	const router = useRouter()
	React.useEffect(() => {
		router.push('/tickets/1')
	}, [router])

	return <div>index</div>
}
