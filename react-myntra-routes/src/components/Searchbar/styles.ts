import { SxProps, Theme } from "@mui/material";

const navbarSearchInputField: SxProps<Theme> = {
    '& .MuiInputBase-input': {
        padding: '10px', // Adjust the padding as needed
    },
    // paddingY: '12px',
    fontSize: 'larger',
    width: '25%'
}

export {navbarSearchInputField};