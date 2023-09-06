import { useState } from 'react'
import { Badge, Button, ButtonGroup, Card, Col, Form, Modal, Row, Table } from 'react-bootstrap'
import { AiOutlinePlus, AiOutlineEye, AiOutlineEdit, AiOutlineDelete, AiOutlineClose, AiOutlineSave, AiOutlinePrinter, AiOutlineCheck } from "react-icons/ai"

type Props = {}

export default function ArticleView({ }: Props) {
	const [selectedRow, setSelectedRow] = useState(-1)

	const handleRowSelect = (e: any, row: any) => {
		if (e.target.checked) {
			setSelectedRow(row)
		} else {
			setSelectedRow(-1)
		}
	}


	return (
		<>
			<Card>
				<Card.Header>
					<div className="d-flex align-items-center justify-content-between mb-0">
						<h2 className="h2 mb-0 ">Article</h2>
						<ButtonGroup size='sm'>
							<AddModal />
							<ShowModal />
							<EditModal />
							<DeleteModal />
						</ButtonGroup>

					</div>
				</Card.Header>

				<Card.Body>
					<Table responsive>
						<thead>
							<tr>
								<th>#</th>
								<th>ID</th>
								<th>Désignation</th>
								<th>Référence</th>
								<th>Unité</th>
								<th>P.V</th>
								<th>Statut</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td key={1} className="align-middle">
									<input
										type="checkbox"
										checked={(selectedRow == 1) ? true : false}
										onChange={(e) => handleRowSelect(e, 1)}
									/>
								</td>
								<td className="align-middle">1</td>
								<td className="align-middle">Article 1</td>
								<td className="align-middle">ASDSF</td>
								<td className="align-middle">Piece</td>
								<td className="align-middle">0.0</td>
								<td className="align-middle"><Badge bg="success">Actif</Badge></td>

							</tr>

							<tr>
								<td key={2} className="align-middle">
									<input
										type="checkbox"
										checked={(selectedRow == 2) ? true : false}
										onChange={(e) => handleRowSelect(e, 2)}
									/>
								</td>
								<td className="align-middle">1</td>
								<td className="align-middle">Article 1</td>
								<td className="align-middle">ASDSF</td>
								<td className="align-middle">Piece</td>
								<td className="align-middle">0.0</td>
								<td className="align-middle"><Badge bg="success">Actif</Badge></td>

							</tr>


						</tbody>
					</Table>
				</Card.Body>
			</Card>
		</>

	)
}

function AddModal() {
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	return (
		<>
			<Button variant='success' onClick={handleShow} >
				<AiOutlinePlus />
			</Button>

			<Modal show={show} onHide={handleClose} size='lg'>
				<Modal.Header closeButton>
					<Modal.Title>Nouveau Article</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Row className="mb-3">
							<Form.Group as={Col} controlId="">
								<Form.Label>Désignation</Form.Label>
								<Form.Control type="text" placeholder="" />
							</Form.Group>

							<Form.Group as={Col} controlId="">
								<Form.Label>Référence</Form.Label>
								<Form.Control type="text" placeholder="" />
							</Form.Group>
						</Row>
						<Row className="mb-3">
							<Form.Group as={Col} controlId="">
								<Form.Label>Catégorie</Form.Label>
								<Form.Select defaultValue="Choose...">
									<option>Choose...</option>
									<option>...</option>
								</Form.Select>
							</Form.Group>

							<Form.Group as={Col} controlId="">
								<Form.Label>Unité de vente</Form.Label>
								<Form.Select defaultValue="Choose...">
									<option>Choose...</option>
									<option>...</option>
								</Form.Select>
							</Form.Group>
						</Row>

						<Row className="mb-3">
							<Form.Group as={Col} controlId="">
								<Form.Label>Prix d'Achat</Form.Label>
								<Form.Control type="text" placeholder="" />
							</Form.Group>

							<Form.Group as={Col} controlId="">
								<Form.Label>Prix de Vente</Form.Label>
								<Form.Control type="text" placeholder="" />
							</Form.Group>
						</Row>

						<Form.Group as={Col} controlId="" className='mb-3'>
							<Form.Label>Stock minimum</Form.Label>
							<Form.Control type="text" placeholder="" />
						</Form.Group>

						<Form.Group className="mb-3" id="formGridCheckbox">
							<Form.Check type="checkbox" label="Actif" />
						</Form.Group>

					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="outline-secondary" onClick={handleClose}>
						<AiOutlineClose />
					</Button>
					<Button variant="outline-primary" onClick={handleClose}>
						<AiOutlineSave />
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

function EditModal() {
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	return (
		<>

			<Button variant="warning" onClick={handleShow}><AiOutlineEdit /></Button>


			<Modal show={show} onHide={handleClose} size='lg'>
				<Modal.Header closeButton>
					<Modal.Title>Modification Article</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="formGridId">
							<Form.Label>ID</Form.Label>
							<Form.Control placeholder="" />
						</Form.Group>
						<Row className="mb-3">
							<Form.Group as={Col} controlId="">
								<Form.Label>Désignation</Form.Label>
								<Form.Control type="text" placeholder="" />
							</Form.Group>

							<Form.Group as={Col} controlId="">
								<Form.Label>Référence</Form.Label>
								<Form.Control type="text" placeholder="" />
							</Form.Group>
						</Row>
						<Row className="mb-3">
							<Form.Group as={Col} controlId="">
								<Form.Label>Catégorie</Form.Label>
								<Form.Select defaultValue="Choose...">
									<option>Choose...</option>
									<option>...</option>
								</Form.Select>
							</Form.Group>

							<Form.Group as={Col} controlId="">
								<Form.Label>Unité de vente</Form.Label>
								<Form.Select defaultValue="Choose...">
									<option>Choose...</option>
									<option>...</option>
								</Form.Select>
							</Form.Group>
						</Row>

						<Row className="mb-3">
							<Form.Group as={Col} controlId="">
								<Form.Label>Prix d'Achat</Form.Label>
								<Form.Control type="text" placeholder="" />
							</Form.Group>

							<Form.Group as={Col} controlId="">
								<Form.Label>Prix de Vente</Form.Label>
								<Form.Control type="text" placeholder="" />
							</Form.Group>
						</Row>

						<Form.Group as={Col} controlId="" className='mb-3'>
							<Form.Label>Stock minimum</Form.Label>
							<Form.Control type="text" placeholder="" />
						</Form.Group>

						<Form.Group className="mb-3" id="formGridCheckbox">
							<Form.Check type="checkbox" label="Actif" />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="outline-secondary" onClick={handleClose}>
						<AiOutlineClose />
					</Button>
					<Button variant="outline-primary" onClick={handleClose}>
						<AiOutlineSave />
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

function ShowModal() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="primary" onClick={handleShow}><AiOutlineEye /></Button>

			<Modal show={show} onHide={handleClose} size='lg'>
				<Modal.Header closeButton>
					<Modal.Title>Article</Modal.Title>
				</Modal.Header>
				<Modal.Body>

					<Table>
						<tr>
							<td>ID</td>
							<td>CL0001</td>
						</tr>
						<tr>
							<td>Désignation</td>
							<td>Article 1</td>
						</tr>
						<tr>
							<td>Référence</td>
							<td>AAAA1</td>
						</tr>
						<tr>
							<td>Catégorie</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Unité de vent</td>
							<td>Piece</td>
						</tr>
						<tr>
							<td>Prix d'achat</td>
							<td>0</td>
						</tr>
						<tr>
							<td>Prix de vente</td>
							<td>0</td>
						</tr>
						<tr>
							<td>Stock minimum</td>
							<td>0</td>
						</tr>
						<tr>
							<td>Statut</td>
							<td>Actif</td>
						</tr>
					</Table>

				</Modal.Body>
				<Modal.Footer>
					<Button variant="outline-secondary" onClick={handleClose}>
						<AiOutlineClose />
					</Button>
					<Button variant="outline-primary" onClick={handleClose}>
						<AiOutlinePrinter />
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

function DeleteModal() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="danger" onClick={handleShow}><AiOutlineDelete /></Button>

			<Modal show={show} onHide={handleClose} size='lg'>
				<Modal.Header closeButton>
					<Modal.Title>Suppression Article</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>Voulez vous vraiment supprimer le client : 'CL0001' 'SARL Anonyme' ?</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="outline-secondary" onClick={handleClose}>
						<AiOutlineClose />
					</Button>
					<Button variant="outline-danger" onClick={handleClose}>
						<AiOutlineCheck />
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}