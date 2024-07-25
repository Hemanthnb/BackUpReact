import { SxProps, Theme } from "@mui/material";

const Container: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const navbarButton: SxProps<Theme> = {
    '&:hover': {
        borderBottom: '4px solid #f73378',
        backgroundColor: 'white',
        // borderRadius: '0px'
    },
    height: '99%',
    borderBottom: '4px solid white',
    borderRadius: '0px',
    flexShrink:1
}

const navbarSearchInputField: SxProps<Theme> = {
    '& .MuiInputBase-input': {
        padding: '10px', // Adjust the padding as needed
    },
    // paddingY: '12px',
    fontSize: 'larger',
    width: '25%'
}


const navIcons: SxProps<Theme> = {
    fontWeight: "700",
    fontSize: "small",
}

export { navbarButton, navbarSearchInputField, Container, navIcons };