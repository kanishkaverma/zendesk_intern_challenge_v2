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
	// console.log(children.status)
	let statusStyle = ''
	switch (children.status) {
		case 'open': // code block
			statusStyle = 'red'
			// console.log('case open')
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
		// <div key={children.id} style={{ color: 'red' }}>
		// 	{children.id}{' '}
		// </div>
		<>
			{/* <ListIcon as={CheckCircleIcon} color="green.500" /> */}
			{/* {children.subject} */}
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
					{/* <Box
						ref={finalRef}
						tabIndex={-1}
						aria-label="Focus moved to this box"
					> */}
					{/* <Text fontSize="sm">{children.raw_subject}</Text> */}
					{/* </Box> */}
					{/* <Flex justifyContent="space-between" alignItems="center"> */}
					{/* <Badge colorScheme="green" borderRadius="full" px="2"> */}
					{/* {children.status} */}
					{/* </Badge> */}
					<Button
						size="sm"
						mt={4}
						onClick={onOpen}
						// backgroundColor="white"
						// border="1px"
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
											{/* {children.created_at.split('T')}{' '} */}
										</StatNumber>
										{/* <StatHelpText></StatHelpText> */}
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
								{/* <Button variant="ghost">Secondary Action</Button> */}
							</ModalFooter>
						</ModalContent>
					</Modal>
				</Td>
			</Tr>
		</>
	)

	// <>
	// 	<List spacing={3}>
	// 		<ListItem>
	// 			<ListIcon as={MdCheckCircle} color="green.500" />
	// 			Lorem ipsum dolor sit amet, consectetur adipisicing elit
	// 		</ListItem>
	// 		<ListItem>
	// 			<ListIcon as={MdCheckCircle} color="green.500" />
	// 			Assumenda, quia temporibus eveniet a libero incidunt suscipit
	// 		</ListItem>
	// 		<ListItem>
	// 			<ListIcon as={MdCheckCircle} color="green.500" />
	// 			Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
	// 		</ListItem>
	// 		{/* You can also use custom icons from react-icons */}
	// 		<ListItem>
	// 			<ListIcon as={MdSettings} color="green.500" />
	// 			Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
	// 		</ListItem>
	// 	</List>
	// 	<Box
	// 		maxW="md"
	// 		borderWidth="1px"
	// 		borderRadius="lg"
	// 		overflow="hidden"
	// 		borderColor="gray.500"
	// 		p="10px"
	// 		margin="3"
	// 	>
	// 		<Box
	// 			ref={finalRef}
	// 			tabIndex={-1}
	// 			aria-label="Focus moved to this box"
	// 			p="6px"
	// 			border="1px"
	// 			borderColor="gray.500"
	// 		>
	// 			<Box
	// 				ref={finalRef}
	// 				tabIndex={-1}
	// 				aria-label="Focus moved to this box"
	// 			>
	// 				<Text fontSize="sm">{children.raw_subject}</Text>
	// 			</Box>
	// 			<Flex justifyContent="space-between" alignItems="center">
	// 				<Badge colorScheme="green" borderRadius="full" px="2">
	// 					{children.status}
	// 				</Badge>
	// 				<Button mt={4} onClick={onOpen}>
	// 					{/* {children.id} */}
	// 					show details
	// 				</Button>
	// 			</Flex>
	// 			<Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
	// 				<ModalOverlay />
	// 				<ModalContent>
	// 					<ModalHeader>Modal Title</ModalHeader>
	// 					<ModalCloseButton />
	// 					<ModalBody>
	// 						{/* <Lorem count={2} /> */}
	// 						random text
	// 					</ModalBody>

	// 					<ModalFooter>
	// 						<Button colorScheme="blue" mr={3} onClick={onClose}>
	// 							Close
	// 						</Button>
	// 						<Button variant="ghost">Secondary Action</Button>
	// 					</ModalFooter>
	// 				</ModalContent>
	// 			</Modal>
	// 		</Box>
	// 	</Box>
	// </>
}
