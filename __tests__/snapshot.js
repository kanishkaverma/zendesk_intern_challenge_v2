// __tests__/snapshot.js
import React from 'react'
import renderer from 'react-test-renderer'
import Index from '../pages/index'

import * as nextRouter from 'next/router'

nextRouter.useRouter = jest.fn()
nextRouter.useRouter.mockImplementation(() => ({ route: '/' }))

it('renders homepage unchanged', () => {
	const tree = renderer.create(<Index />).toJSON()
	expect(tree).toMatchSnapshot()
})
