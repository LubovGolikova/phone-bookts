import React, {useState, useEffect} from "react";
import isEmail from 'validator/lib/isEmail';
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import toast from "react-hot-toast";
import useAuth from '../../auth/hooks/useAuth';
import {clearState} from "../redux/slice";
import {ROUTES} from "../../../constants/routes";

const required = (value: string) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};
const validEmail = (value: string) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};
const validPassword = (password: string) => {
    let containsUpper = false;
    let containsLower = false;
    if (!/\d/.test(password) || password.length < 8) {
        return false;
    }
    for (let i = 0; i < password.length; i++) {
        if (password[i] === password[i].toUpperCase()) {
            containsUpper = true;
        } else if (password[i] === password[i].toLowerCase()) {
            containsLower = true;
        }
    }
    return !(!containsUpper || !containsLower);
};

export const Register = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {onLogin, authenticated, error} = useAuth();
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

    const onSubmit = () => {
        onLogin();
    };

    useEffect(() => {
        if (authenticated) {
            dispatch(clearState())
            history.push(ROUTES.static.main)
        }
        if (error) {
            let errorMessage: string ="Something wrong with loading!";
            toast.error(errorMessage);
            dispatch(clearState())
        }
    }, [authenticated, error, dispatch, history])
    return (
        <>
            <div className="container">
                <h1>Registration</h1>
                <Form onSubmit={onSubmit}>
                    <FormGroup row className="mt-3">
                        <Label for="email" sm={1}>Email</Label>
                        <Col sm={3}>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={onValueChange('email')}
                                validations={[required, validEmail]}
                                placeholder="Enter email"
                            />
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
                                validation={[required, validPassword]}
                                placeholder="Enter password"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup check row className="mt-3">
                        <Col sm={{size: 10, offset: 2}}>
                            <Button>Register</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        </>
    );
}