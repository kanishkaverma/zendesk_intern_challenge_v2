import { test, expect } from '@playwright/test'
// import next from 'next'
// import next from 'next'

test('navigate to tickets page and see ticket information showing up or no tickets in case there are no tickets.', async ({
	page,
}) => {
	await page.goto('http://localhost:3000/')
	await page.click('text=Tickets')
	await expect(page).toHaveURL('http://localhost:3000/tickets/1')

	const ticketInfo = await page.$$("text='Ticket Information'")

	const ticketsExist = ticketInfo.length !== 0

	if (ticketsExist) {
		await expect(page.locator('text=Ticket Information')).toContainText(
			'Ticket Information',
		)
	} else {
		await expect(page.locator('text=No tickets in this view.')).toContainText('No tickets in this view.')
	}
})

test('test for negative input in url bar', async ({ page }) => {
	await page.goto('http://localhost:3000/tickets/-1')

	await expect(page.locator('text=Error')).toContainText('Error')
})

test('test for next and prev buttons', async ({ page }) => {
	await page.goto('http://localhost:3000/tickets/1')

	const nextButton = await page.$$("text='Next'")
	if (nextButton.length !== 0) {
		await page.click('text=Next')

		await expect(page).toHaveURL('http://localhost:3000/tickets/2')

		await expect(page.locator('text=Ticket Information')).toContainText(
			'Ticket Information',
		)

		await page.click('text=Prev')

		await expect(page).toHaveURL('http://localhost:3000/tickets/1')

		await expect(page.locator('text=Ticket Information')).toContainText(
			'Ticket Information',
		)
	}
})
