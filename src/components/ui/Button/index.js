import styled, {css} from "styled-components";

const colors = {
    primary: "#4361ee",
    secondary: "#b5179e"
};

const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    color: #fff;
    background-color: #4361ee;
    cursor: pointer;
    
    background-color: ${function (props) {
        if (props.variant) {
            return props.theme.color[props.variant];
        } else {
            return props.theme.color["primary"];
        }
    }};


    ${function (props) {
        return (
            props.full &&
            css`
                display:block;
                width: 100%;
                `
        );
    }};

    ${(props) => {
        if (props.size) {
            return props.theme.ukuran[props.size];
        } else {
            return props.theme.ukuran["md"];
        }
    }}

    ${(props) => {
        if (props) {
            return props.theme.tpg[props.tpg];
        } else {
            return props.theme.tpg["md"];
        }
    }}

    ${(props) => {
        if (props) {
            return props.theme.font[props.font];
        } else {
            return props.theme.font["font-family"];
        }
    }}

    `;

    

   

export default Button;
