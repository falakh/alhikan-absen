import React from "react";
import {Button, Card, CardContent, Container, TextField} from "@material-ui/core/esm";
import {Login} from "../util/client";

export default function LoginCard() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPassword(event.target.value);
    };

    return (
        <Container maxWidth="xs" style={{ transform: "translate(0%,15%)" }}>
            <Card elevation={10}>
                <CardContent>
                    <TextField
                        fullWidth
                        placeholder="Email@mail.com"
                        label="Email"
                        onChange={handleEmailChange}
                    />
                </CardContent>
                <CardContent>
                    <TextField
                        fullWidth
                        placeholder="*****"
                        label="Password"
                        type="password"
                        onChange={handlePasswordChange}
                    />
                </CardContent>
                <CardContent>
                    <Button
                        fullWidth
                        color="primary"
                        onClick={() =>
                            Login({
                                email: email,
                                password: password
                            },{
                                OnEror:(eror)=>alert(eror),
                                OnSucces:(result)=>console.log(result)
                            })
                        }
                        variant="outlined"
                    >
                        Login
                    </Button>
                </CardContent>
            </Card>
        </Container>
    );
}
