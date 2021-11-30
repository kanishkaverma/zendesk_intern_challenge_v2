// __tests__/index.test.jsx

/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
// import Home from '../pages/index'
import Dashboard from '../components/Dashboard'
import * as nextRouter from 'next/router'

nextRouter.useRouter = jest.fn()
nextRouter.useRouter.mockImplementation(() => ({ route: '/' }))

describe('Dashboard', () => {
	it('Dashboard component with index path', () => {
		render(<Dashboard currentPath={'/'} />)

		const heading = screen.getByRole('link', {
			name: /zendesk_intern_challenge/i,
		})

		expect(heading).toBeInTheDocument()
	})
})
