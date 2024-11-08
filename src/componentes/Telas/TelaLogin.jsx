import { Container, Form, Button } from "react-bootstrap";
import { useContext, useRef } from "react";
import { ContextoUsuario } from "../../App";

export default function TelaLogin() {
    const nomeUsuario = useRef();
    const senha = useRef();
    const {usuario, setUsuario} = useContext(ContextoUsuario);

    function manipularSubmissao(evento) {
        const usuarioDigitado = nomeUsuario.current.value;
        const senhaDigitada = senha.current.value;
        if (usuarioDigitado === 'admin' && senhaDigitada === 'admin') {
            setUsuario({
                "usuario":nomeUsuario,
                "logado":true
            });
        }

        evento.preventDefault();
        evento.stopPropagation();
    }

    return (
        <Container className="w-25 border p-2">
            <Form onSubmit={manipularSubmissao}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Usuário:</Form.Label>
                    <Form.Control
                        type="text"
                        id="usuario"
                        name="usuario"
                        required ref={nomeUsuario}
                        placeholder="Informe o nome de usuário..."
                    />
                    <Form.Text className="text-muted">
                        Nunca compartilhe suas credenciais!
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha:</Form.Label>
                    <Form.Control
                        type="password"
                        id="senha"
                        name="senha"
                        required ref={senha}
                        placeholder="Digite sua senha..."
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Fazer Login
                </Button>
            </Form>
        </Container>
    );
}