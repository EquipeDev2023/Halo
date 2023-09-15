import { useState } from 'react'
import { Badge, Button, ButtonGroup, Card, Col, Dropdown, Form, Row, Table } from 'react-bootstrap'
import { AiOutlinePlus, AiOutlineEye, AiOutlineEdit, AiOutlineClose, AiOutlineSave, AiOutlineMenu, AiOutlineExport } from "react-icons/ai"

type Props = {}

export function PartnerList({ }: Props) {
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
						<h2 className="h2 mb-0 ">Partenaire</h2>
						<Dropdown >
							<Dropdown.Toggle variant="primary" id="dropdown-basic" size='sm'>
								<AiOutlineMenu /> Options
							</Dropdown.Toggle>

							<Dropdown.Menu>
								<Dropdown.Item href='partner/add'>
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
								<th>Type</th>
								<th>Intitulé</th>
								<th>Téléphone</th>
								<th>Ville</th>
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
								<td className="align-middle"><Badge bg="success">Client</Badge></td>
								<td className="align-middle">Mark</td>
								<td className="align-middle">+261320233202</td>
								<td className="align-middle">Antananarivo</td>
								<td className="align-middle"><Badge bg="primary">Actif</Badge></td>

								<td>
									<ButtonGroup size='sm'>
										<Button variant='light' href='partner/1'><AiOutlineEye /></Button>
										<Button variant='light' href='partner/edit/1'><AiOutlineEdit /></Button>
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

export function PartnerForm() {

	return (
		<>
			<Card>
				<Card.Header>
					<div className="d-flex align-items-center justify-content-between mb-0">
						<h2 className="h2 mb-0 ">Partenaire</h2>
					</div>
				</Card.Header>

				<Card.Body>
					<Form>

						<Form.Group controlId="" className='mb-3'>
							<Form.Label>Type</Form.Label>
							<Form.Select defaultValue="Choose...">
								<option>Client</option>
								<option>Fournisseur</option>
							</Form.Select>
						</Form.Group>

						<Form.Group className="mb-3" controlId="">
							<Form.Label>Intitulé</Form.Label>
							<Form.Control placeholder="" />
						</Form.Group>


						<Form.Group className="mb-3" controlId="formGidAddress">
							<Form.Label>Adresse</Form.Label>
							<Form.Control placeholder="" />
						</Form.Group>

						<Row className="mb-3">
							<Form.Group as={Col} controlId="">
								<Form.Label>Ville</Form.Label>
								<Form.Control />
							</Form.Group>
							<Form.Group as={Col} controlId="">
								<Form.Label>Postal</Form.Label>
								<Form.Control />
							</Form.Group>
							<Form.Group as={Col} controlId="">
								<Form.Label>Pays</Form.Label>
								<Form.Select defaultValue="Choose...">
									<option>Choose...</option>
									<option>...</option>
								</Form.Select>
							</Form.Group>
						</Row>

						<Row className="mb-3">
							<Form.Group as={Col} controlId="">
								<Form.Label>Email</Form.Label>
								<Form.Control type="email" placeholder="" />
							</Form.Group>

							<Form.Group as={Col} controlId="">
								<Form.Label>Téléphone</Form.Label>
								<Form.Control type="text" placeholder="" />
							</Form.Group>
						</Row>

						<Form.Group className="mb-3" id="">
							<Form.Check type="checkbox" label="Actif" />
						</Form.Group>

						<Button variant="outline-primary" >
							<AiOutlineSave />
						</Button>

						<Button variant="outline-secondary" href='/partner'>
							<AiOutlineClose />
						</Button>


					</Form>
				</Card.Body>
			</Card>
		</>
	)
}



export function PartnerInfo() {

	return (
		<>
			<Card>
				<Card.Header>
					<div className="d-flex align-items-center justify-content-between mb-0">
						<h2 className="h2 mb-0 ">Article</h2>
					</div>
				</Card.Header>

				<Card.Body>

					<Table>
						<tr>
							<td>ID</td>
							<td>CL0001</td>
						</tr>
						<tr>
							<td>Type</td>
							<td>Client</td>
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
					<Button variant="outline-primary" >
						<AiOutlineSave />
					</Button>
					<Button variant="outline-secondary" href='/partner'>
						<AiOutlineClose />
					</Button>

				</Card.Body>

			</Card>
		</>
	);
}