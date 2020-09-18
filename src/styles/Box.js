import styled from "styled-components";
import colors from "./Colors";
import theme from "styled-theming";

export const background = theme("mode", {
    light: colors.white,
    dark: colors.grayDarker,
});
export const color = theme("mode", {
    light: colors.grayDarker,
    dark: colors.white,
});

//navBar
export const navModeView = theme("mode", {
    light: colors.white,
    dark: colors.DarkMode,
});

export const NavColor = theme("mode", {
    light: colors.grayDarker,
    dark: colors.white,
});

export const NavInput = theme("mode", {
    light: colors.white,
    dark: colors.white,
});

export const CardBackgroundMode = theme("mode", {
    light: colors.WhiteCard,
    dark: colors.DarkCard,
});

export const CardColorMode = theme("mode", {
    light: colors.DarkCard,
    dark: colors.WhiteCard,
    border: "none",
});

const Box = styled.div`
    background: ${background};
    transition: all 0.5s linear;
    .card {
        border: none;
    }
`;

export default Box;
