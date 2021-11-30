import React from 'react'
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Tag,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/hooks'
import {
	Box,
	Button,
	Text,
	Flex,
	Grid,
	GridItem,
	Heading,
} from '@chakra-ui/react'
import { Badge } from '@chakra-ui/layout'
import {
	Stat,
	StatLabel,
	StatNumber,
	StatHelpText,
	StatArrow,
	StatGroup,
} from '@chakra-ui/react'
import { ListIcon } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
} from '@chakra-ui/react'

export default function Ticket({ children }) {
	let statusStyle = ''
	switch (children.status) {
		case 'open': // code block
			statusStyle = 'red'
			break
		case 'pending': // code block
			statusStyle = 'blue'
			break
		case 'solved': // code block
			statusStyle = 'gray'
			break
		default: // code block
	}
	const { isOpen, onOpen, onClose } = useDisclosure()
	const finalRef = React.useRef()

	return (
		<>
			<Tr>
				<Td>
					<Badge colorScheme={statusStyle} borderRadius="full" px="2">
						{children.status}
					</Badge>
				</Td>
				<Td>
					<Text fontSize="md"> {children.subject} </Text>
				</Td>
				<Td>
					<Button
						size="sm"
						mt={4}
						onClick={onOpen}
						variant="outline"
						color="green.300"
					>
						Show details
					</Button>
					<Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
						<ModalOverlay />
						<ModalContent>
							<ModalHeader>
								<Heading> Ticket Details</Heading>
							</ModalHeader>
							<ModalCloseButton />
							<ModalBody>
								<Box marginBottom="5">
									<Heading size="sm">Description</Heading>
									<Text> {children.description} </Text>
								</Box>
								<Box>
									<Stat>
										<StatLabel>
											<Heading size="sm">Created at</Heading>
										</StatLabel>
										<StatNumber fontSize="md">
											{children.created_at.substring(0, 10)}{' '}
											{children.created_at.substring(11, 19)}
										</StatNumber>
									</Stat>
								</Box>
								<Box>
									<Heading size="sm">Tags</Heading>
									{children.tags.map((elem, idx) => (
										<Tag margin="1" key={idx}>
											{elem}
										</Tag>
									))}
								</Box>
							</ModalBody>

							<ModalFooter>
								<Button colorScheme="green" mr={3} onClick={onClose}>
									Close
								</Button>
							</ModalFooter>
						</ModalContent>
					</Modal>
				</Td>
			</Tr>
		</>
	)
}
