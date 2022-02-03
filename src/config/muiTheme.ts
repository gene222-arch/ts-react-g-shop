import { createTheme, Theme, responsiveFontSizes } from "@mui/material/styles";

const muiTheme: Theme = createTheme({
    palette: {
        mode: "light"
    }
});

export default responsiveFontSizes(muiTheme);