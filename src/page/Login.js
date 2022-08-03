import React from 'react'
import {Button, Form, Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

//<Form></Form> 을 사용하는 경우에는 7번줄에 preventDefault()를 사용해주면 계속 리프레쉬 되는것을 막아준다.
const Login = ({setAuthenticate}) => {
    const navigate = useNavigate();
    const loginUser =(e)=>{
        e.preventDefault();
        console.log("login user function issue")
        setAuthenticate(true);
        navigate("/")
        //navigate를 사용해서 로그인이 되면 홈페이지로 이동
    }

  return (
    <Container>
        <Form onSubmit={(e)=>loginUser(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Save email" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </Container>
  )
}

export default Login