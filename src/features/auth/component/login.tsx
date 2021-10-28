import {Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Link, useHistory} from 'react-router-dom';
import {ROUTES} from "../../../constants/routes";
import React ,{ useState } from "react";
// import {loginSuccess, authSelector} from ".
// import {useDispatch, useSelector} from "react-redux";



export const Login = () => {

    let formState: { password: string; email: string },
        setFormState: (value: (((prevState: { password: string; email: string }) => { password: string; email: string }) | { password: string; email: string })) => void;
    [formState, setFormState] = useState({email: '', password: ''});
    let {email, password} = formState;

    const onValueChange = (name:string) => {
        return (e: React.FormEvent<HTMLInputElement>) => {
            setFormState((prevState) => {
                return ({...prevState, [name]: e.currentTarget});
            });
        };
    };
    console.log(email, password)


    return (
        <>
            <div className="container">
                <h1>Login</h1>
                <Form onSubmit={checkLogin} >
                    <FormGroup row className="mt-3">
                        <Label for="email" sm={1}>Email</Label>
                        <Col sm={3}>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={onValueChange('email')}
                                placeholder="Enter email"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row className="mt-3">
                        <Label for="password" sm={1}>Password</Label>
                        <Col sm={3}>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={onValueChange('password')}
                                placeholder="Enter password"/>
                        </Col>
                    </FormGroup>
                    <FormGroup check row className="mt-3">
                        <Col sm={{size: 10, offset: 2}}>
                            <Button>Login</Button>
                            <Link to={ROUTES.static.register} className="btn btn-link">Register</Link>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        </>
    );
};