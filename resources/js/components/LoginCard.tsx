import React from "react";
import {
    Button,
    Card,
    CardContent,
    Container,
    TextField
} from "@material-ui/core/esm";
import { Login } from "../util/client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store/index";
import { userLogin } from "../redux/action/UserAction/UserAction";

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
    const isUserLogin = (state: RootState) => state.user.isLoading;
    const isLogin = useSelector(isUserLogin);
    const dispatch = useDispatch();
    console.log(isLogin);
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
                        disabled={isLogin}
                        fullWidth
                        color="primary"
                        onClick={() =>{
                            dispatch(userLogin({
                                email : email,
                                password:password
                            }))
                            Login(
                                {
                                    email: email,
                                    password: password
                                },
                                {
                                    OnEror: eror => alert(eror),
                                    OnSucces: result => console.log(result)
                                }
                            )
                        }}
                        variant="outlined"

                    >
                         Login
                    </Button>
                </CardContent>
            </Card>
        </Container>
    );
}
