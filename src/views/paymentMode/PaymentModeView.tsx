import { useState } from 'react'
import { Button, ButtonGroup, Card, Dropdown, Form, Table } from 'react-bootstrap'
import { AiOutlineEye, AiOutlineEdit, AiOutlineClose, AiOutlineSave, AiOutlineMenu, AiOutlineExport, AiOutlinePlus } from "react-icons/ai"

type Props = {}

export function PaymentModeList({ }: Props) {
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
						<h2 className="h2 mb-0 ">Mode de Paiement</h2>
						<Dropdown >
							<Dropdown.Toggle variant="primary" id="dropdown-basic" size='sm'>
								<AiOutlineMenu /> Options
							</Dropdown.Toggle>

							<Dropdown.Menu>
								<Dropdown.Item href='paymentMode/add'>
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
								<th>Libellé</th>
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
								<td className="align-middle">asdasd</td>
								<td>
									<ButtonGroup size='sm'>
										<Button variant='light' href='paymentMode/1'><AiOutlineEye /></Button>
										<Button variant='light' href='paymentMode/edit/1'><AiOutlineEdit /></Button>
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

export function PaymentModeForm() {

	return (
		<>
			<Card>
				<Card.Header>
					<div className="d-flex align-items-center justify-content-between mb-0">
						<h2 className="h2 mb-0 ">Mode de Paiement</h2>
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
							<Form.Control type="text" placeholder=""/>
						</Form.Group>


						<Button variant="outline-primary" >
							<AiOutlineSave /> Enregistrer
						</Button>
						<Button variant="outline-secondary" href='/paymentMode'>
							<AiOutlineClose /> Annuler
						</Button>


					</Form>
				</Card.Body>
			</Card>
		</>
	)
}

export function PaymentModeInfo() {

	return (
		<>

			<Card>
				<Card.Header>
					<div className="d-flex align-items-center justify-content-between mb-0">
						<h2 className="h2 mb-0 ">Mode de Paiement</h2>
					</div>
				</Card.Header>

				<Card.Body>
					<Table>
						<tr>
							<td>ID</td>
							<td>CL0001</td>
						</tr>
						<tr>
							<td>Libellé</td>
							<td>dadsa</td>
						</tr>
					</Table>
					<Button variant="outline-primary" >
						<AiOutlineSave />
					</Button>
					<Button variant="outline-secondary" href='/paymentMode' >
						<AiOutlineClose />
					</Button>
					
				</Card.Body>
			</Card>
		</>
	);
}