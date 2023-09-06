import { useState } from 'react'
import { Badge, Button, ButtonGroup, Card, Col, Form, Modal, Row, Table } from 'react-bootstrap'
import { AiOutlinePlus, AiOutlineEye, AiOutlineEdit, AiOutlineDelete, AiOutlineClose, AiOutlineSave, AiOutlinePrinter, AiOutlineCheck } from "react-icons/ai"

type Props = {}

export default function SupplierView({ }: Props) {
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
						<h2 className="h2 mb-0 ">Fournisseur</h2>
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
								<th>Intitulé</th>
								<th>Téléphone</th>
								<th>Pays</th>
								<th>Ville</th>
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
								<td className="align-middle">Mark</td>
								<td className="align-middle">+261320233202</td>
								<td className="align-middle">Madagascar</td>
								<td className="align-middle">Antananarivo</td>
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
								<td className="align-middle">Mark</td>
								<td className="align-middle">+261320233202</td>
								<td className="align-middle">Madagascar</td>
								<td className="align-middle">Antananarivo</td>
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
					<Modal.Title>Nouveau Fournisseur</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="formGridIntitule">
							<Form.Label>Intitulé</Form.Label>
							<Form.Control placeholder="" />
						</Form.Group>
						<Row className="mb-3">
							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>Email</Form.Label>
								<Form.Control type="email" placeholder="" />
							</Form.Group>

							<Form.Group as={Col} controlId="formGridTel">
								<Form.Label>Téléphone</Form.Label>
								<Form.Control type="text" placeholder="" />
							</Form.Group>
						</Row>

						<Form.Group className="mb-3" controlId="formGridAddress">
							<Form.Label>Adresse</Form.Label>
							<Form.Control placeholder="" />
						</Form.Group>

						<Row className="mb-3">
							<Form.Group as={Col} controlId="formGridZip">
								<Form.Label>Postal</Form.Label>
								<Form.Control />
							</Form.Group>
							<Form.Group as={Col} controlId="formGridCity">
								<Form.Label>Ville</Form.Label>
								<Form.Control />
							</Form.Group>

							<Form.Group as={Col} controlId="formGridState">
								<Form.Label>Pays</Form.Label>
								<Form.Select defaultValue="Choose...">
									<option>Choose...</option>
									<option>...</option>
								</Form.Select>
							</Form.Group>


						</Row>

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

			<Button variant="warning"  onClick={handleShow}><AiOutlineEdit /></Button>


			<Modal show={show} onHide={handleClose} size='lg'>
				<Modal.Header closeButton>
					<Modal.Title>Modification Fournisseur</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="formGridId">
							<Form.Label>ID</Form.Label>
							<Form.Control placeholder="" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formGridIntitule">
							<Form.Label>Intitulé</Form.Label>
							<Form.Control placeholder="" />
						</Form.Group>
						<Row className="mb-3">
							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>Email</Form.Label>
								<Form.Control type="email" placeholder="" />
							</Form.Group>

							<Form.Group as={Col} controlId="formGridTel">
								<Form.Label>Téléphone</Form.Label>
								<Form.Control type="text" placeholder="" />
							</Form.Group>
						</Row>

						<Form.Group className="mb-3" controlId="formGridAddress">
							<Form.Label>Adresse</Form.Label>
							<Form.Control placeholder="" />
						</Form.Group>

						<Row className="mb-3">
							<Form.Group as={Col} controlId="formGridZip">
								<Form.Label>Postal</Form.Label>
								<Form.Control />
							</Form.Group>
							<Form.Group as={Col} controlId="formGridCity">
								<Form.Label>Ville</Form.Label>
								<Form.Control />
							</Form.Group>

							<Form.Group as={Col} controlId="formGridState">
								<Form.Label>Pays</Form.Label>
								<Form.Select defaultValue="Choose...">
									<option>Choose...</option>
									<option>...</option>
								</Form.Select>
							</Form.Group>


						</Row>

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
					<Modal.Title>Fournisseur</Modal.Title>
				</Modal.Header>
				<Modal.Body>

					<Table>
						<tr>
							<td>ID</td>
							<td>CL0001</td>
						</tr>
						<tr>
							<td>Intitulé</td>
							<td>SARL Anonyme</td>
						</tr>
						<tr>
							<td>Email</td>
							<td>aaa@a.a</td>
						</tr>
						<tr>
							<td>Téléphone</td>
							<td>+261320323203</td>
						</tr>
						<tr>
							<td>Adresse</td>
							<td>Lot xxxx</td>
						</tr>
						<tr>
							<td>Postal</td>
							<td>001x</td>
						</tr>
						<tr>
							<td>Ville</td>
							<td>Tana</td>
						</tr>
						<tr>
							<td>Pays</td>
							<td>Mada</td>
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
					<Modal.Title>Suppression Fournisseur</Modal.Title>
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