import { useState } from 'react'
import { Badge, Button, ButtonGroup, Card, Col, Dropdown, Form, Row, Table } from 'react-bootstrap'
import { AiOutlinePlus, AiOutlineEye, AiOutlineEdit, AiOutlineClose, AiOutlineSave, AiOutlineMenu, AiOutlineExport } from "react-icons/ai"

type Props = {}

export function ArticleList({ }: Props) {
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
						<Dropdown >
							<Dropdown.Toggle variant="primary" id="dropdown-basic" size='sm'>
								<AiOutlineMenu /> Options
							</Dropdown.Toggle>

							<Dropdown.Menu>
								<Dropdown.Item href='article/add'>
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
								<th>Désignation</th>
								<th>Référence</th>
								<th>Unité</th>
								<th>Prix</th>
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
								<td className="align-middle">Article 1</td>
								<td className="align-middle">ASDSF</td>
								<td className="align-middle">Piece</td>
								<td className="align-middle">0.0</td>
								<td className="align-middle"><Badge bg="success">Actif</Badge></td>
								<td>
									<ButtonGroup size='sm'>
										<Button variant='light' href='article/1'><AiOutlineEye /></Button>
										<Button variant='light' href='article/edit/1'><AiOutlineEdit /></Button>
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

export function ArticleForm() {

	return (
		<>
			<Card>
				<Card.Header>
					<div className="d-flex align-items-center justify-content-between mb-0">
						<h2 className="h2 mb-0 ">Nouveau Article</h2>
					</div>
				</Card.Header>

				<Card.Body>
					<Form>
						<Form.Group className="mb-3" controlId="">
							<Form.Label>ID</Form.Label>
							<Form.Control placeholder="" readOnly />
						</Form.Group>
						<Form.Group className="mb-3" controlId="">
							<Form.Label>Libellé</Form.Label>
							<Form.Control type="text" placeholder="" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="">
							<Form.Label>Déscription</Form.Label>
							<Form.Control type="text" placeholder="" as="textarea" rows={3} />
						</Form.Group>
						
						<Row className="mb-3">
							<Form.Group as={Col} controlId="">
								<Form.Label>Catégorie</Form.Label>
								<Form.Select defaultValue="Choose...">
									<option>Choose...</option>
									<option>...</option>
								</Form.Select>
							</Form.Group>

							<Form.Group as={Col} controlId="">
								<Form.Label>Unité</Form.Label>
								<Form.Select defaultValue="Choose...">
									<option>Choose...</option>
									<option>...</option>
								</Form.Select>
							</Form.Group>
						</Row>

						<Form.Group controlId="" className='mb-3'>
							<Form.Label>Stock minimum</Form.Label>
							<Form.Control type="text" placeholder="" />
						</Form.Group>

						<Form.Group className="mb-3" id="">
							<Form.Check type="checkbox" label="Actif" />
						</Form.Group>


						<Button variant="outline-primary" >
							<AiOutlineSave /> Enregistrer
						</Button>
						<Button variant="outline-secondary" href='/article'>
							<AiOutlineClose /> Annuler
						</Button>


					</Form>
				</Card.Body>
			</Card>
		</>
	)
}

export function ArticleInfo() {

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

					<Button variant="outline-primary" >
						<AiOutlineSave />
					</Button>

					<Button variant="outline-secondary" href='/article'>
						<AiOutlineClose />
					</Button>
					
				</Card.Body>
			</Card>
		</>
	);
}