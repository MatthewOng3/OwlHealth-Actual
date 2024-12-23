import { Box, Button } from "@mui/material";
import { JSX } from "react";

type ButtonProps = {
    color: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
    variant: "outlined" | "contained" | "text"
    onClickFunc: () => void;
    text: string;
    icon: JSX.Element;
}
 
type Props = {
    activeButtonProps: ButtonProps;
    defaultButtonProps: ButtonProps;
    state: boolean;
}

function ButtonStates({activeButtonProps, defaultButtonProps, state}:Props) {
	return (
        state ?
		<Button variant={activeButtonProps.variant} color={activeButtonProps.color} onClick={activeButtonProps.onClickFunc} startIcon={activeButtonProps.icon}>
            {activeButtonProps.text}
        </Button>
        :
        <Button variant={defaultButtonProps.variant} color={defaultButtonProps.color} onClick={defaultButtonProps.onClickFunc} startIcon={defaultButtonProps.icon}>
            {defaultButtonProps.text}
        </Button>
	);
}

export default ButtonStates;