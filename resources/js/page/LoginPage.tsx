import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
    Card,
    Container,
    TextField,
    Button,
    CardContent
} from "@material-ui/core";
import { Login } from "../util/client";
import LoginCard from "../components/LoginCard";

export default class LoginPage extends Component {
    render() {
        return (
            <Container
                maxWidth="xl"
                style={{
                    height: "100%",
                    width: "100%",
                    margin: 0,
                    backgroundColor: "#32415a",
                    display: "flex"
                }}
            >
                <LoginCard />
            </Container>
        );
    }
}
