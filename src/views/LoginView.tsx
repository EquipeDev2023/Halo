import { useState } from 'react'
import { Button, Card, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
type Props = {}

function LoginView({ }: Props) {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = (e: any) => {
		e.preventDefault();
		// Ajoutez ici la logique de connexion
	};
	return (
		<Container>
			<Row className="my-5 justify-content-center">
				<Col md lg="6">
					<Card>
						<Card.Header as="h1">
							Halo Groupe
						</Card.Header>
						<Card.Body>
							<Form onSubmit={handleLogin}>
								<FloatingLabel
									controlId="floatingInput"
									label="Nom d'utilisateur"
									className="mb-3">
									<Form.Control type="text" placeholder="..." value={username} onChange={(e) => setUsername(e.target.value)} />
								</FloatingLabel>

								<FloatingLabel
									controlId="floatingPassword"
									label="Mot de passe"
									className="mb-3">
									<Form.Control type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} />
								</FloatingLabel>

								<Button variant="primary" type="submit">
									Log In
								</Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}

export default LoginView