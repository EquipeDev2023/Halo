import { BsToggleOff, BsToggleOn } from "react-icons/bs"
import { Container, Button, Nav, Navbar } from "react-bootstrap"

const Topbar = ({toggleSidebar, collapsed}:any) => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="/" className="ps-3">Halo Groupe</Navbar.Brand>
                <Nav className="ms-auto">
                    <Button onClick={toggleSidebar} variant="outline">
                        {collapsed ? <BsToggleOff /> : <BsToggleOn />}
                    </Button>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default Topbar