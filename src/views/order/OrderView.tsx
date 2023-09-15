import { useState } from 'react'
import { Badge, Button, ButtonGroup, Card, Dropdown, Form, Table } from 'react-bootstrap'
import { AiOutlineEye, AiOutlineEdit, AiOutlineClose, AiOutlineSave, AiOutlineMenu, AiOutlineExport, AiOutlinePlus } from "react-icons/ai"

type Props = {}

export function OrderList({ }: Props) {
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
						<h2 className="h2 mb-0 ">Commande</h2>
						<Dropdown >
							<Dropdown.Toggle variant="primary" id="dropdown-basic" size='sm'>
								<AiOutlineMenu /> Options
							</Dropdown.Toggle>

							<Dropdown.Menu>
								<Dropdown.Item href='order/add'>
									<AiOutlinePlus />  Ajouter
								</Dropdown.Item>
								<Dropdown.Item>
									<AiOutlineExport />  Exporter en csv
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>

					</div>
				</Card.Header>

				<Card.Body>
					<Table responsive>
						<thead>
							<tr>
								<th>#</th>
								<th>ID</th>
								<th>Date</th>	
								<th>Type</th>							
								<th>Partenaire</th>
								<th>Statut</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>


							<tr>
								<td key={2} className="align-middle">
									<input
										type="checkbox"
										checked={(selectedRow == 2) ? true : false}
										onChange={(e) => handleRowSelect(e, 2)}
									/>
								</td>
								<td className="align-middle">1</td>
								<td className="align-middle">10/10/2023</td>
								<td className="align-middle"><Badge bg="danger">Achat</Badge></td>
								<td className="align-middle">ADSS</td>
								<td className="align-middle"><Badge bg="primary">En attente</Badge></td>
								<td>
									<ButtonGroup size='sm'>
										<Button variant='light' href='order/1'><AiOutlineEye /></Button>
										<Button variant='light' href='order/edit/1'><AiOutlineEdit /></Button>
									</ButtonGroup>
								</td>

							</tr>

						</tbody>
					</Table>
				</Card.Body>
			</Card>


		</>

	)
}

export function OrderForm() {

	return (
		<>
			<Card>
				<Card.Header>
					<div className="d-flex align-items-center justify-content-between mb-0">
						<h2 className="h2 mb-0 ">Commande</h2>

					</div>
				</Card.Header>

				<Card.Body>
					<Form>
						<Form.Group className="mb-3" controlId="">
							<Form.Label>ID</Form.Label>
							<Form.Control placeholder="" readOnly />
						</Form.Group>
						<Form.Group className="mb-3" controlId="">
							<Form.Label>Date</Form.Label>
							<Form.Control type="date" placeholder="" />
						</Form.Group>

						<Form.Group controlId="" className="mb-3" >
							<Form.Label>Type</Form.Label>
							<Form.Select defaultValue="Choose...">
								<option>Choose...</option>
								<option>...</option>
							</Form.Select>
						</Form.Group>

						<Form.Group controlId="" className="mb-3" >
							<Form.Label>Partenaire</Form.Label>
							<Form.Select defaultValue="Choose...">
								<option>Choose...</option>
								<option>...</option>
							</Form.Select>
						</Form.Group>

						<Form.Group controlId="" className="mb-3" >
							<Form.Label>Status</Form.Label>
							<Form.Select defaultValue="Choose...">
								<option>Choose...</option>
								<option>...</option>
							</Form.Select>
						</Form.Group>


						<Button variant="outline-primary" >
							<AiOutlineSave /> Enregistrer
						</Button>
						<Button variant="outline-secondary" href='/order'>
							<AiOutlineClose /> Annuler
						</Button>


					</Form>
				</Card.Body>
			</Card>
		</>
	)
}

export function OrderInfo() {

	return (
		<>

			<Card>
				<Card.Header>
					<div className="d-flex align-items-center justify-content-between mb-0">
						<h2 className="h2 mb-0 ">Commande</h2>
					</div>
				</Card.Header>

				<Card.Body>
					<Table>
						<tr>
							<td>ID</td>
							<td>CL0001</td>
						</tr>
						<tr>
							<td>Date</td>
							<td>10/10/2023</td>
						</tr>
						<tr>
							<td>Type</td>
							<td>Achat</td>
						</tr>
						<tr>
							<td>Partenaire</td>
							<td>ASASDA</td>
						</tr>
						<tr>
							<td>Statut</td>
							<td>Actif</td>
						</tr>
					</Table>
					<Button variant="outline-primary">
						<AiOutlineSave />
					</Button>
					<Button variant="outline-secondary" href='/order'>
						<AiOutlineClose />
					</Button>

				</Card.Body>
			</Card>
		</>
	);
}