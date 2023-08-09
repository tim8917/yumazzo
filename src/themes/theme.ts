import {createTheme} from "@mui/material";
import {universalColors} from "./universal-colors";

export const theme = createTheme({
    components: {
        // Name of the component
        MuiAutocomplete: {
            styleOverrides: {
                // Name of the slot
                inputRoot: {
                    padding: '8px 11px !important',
                },
                root: {
                    '.MuiInputBase-root.MuiOutlinedInput-root  .MuiAutocomplete-input': {
                        padding: '0 24px 0 10px',
                    },
                },
                listbox: {
                    padding: '8px',
                    '& .MuiAutocomplete-option': {
                        padding: '6px 8px',
                        minHeight: '36px',
                        '&:not(:last-child)': {
                            marginBottom: '5px',
                        },
                        '&.Mui-focused': {
                            backgroundColor: '#181F30',
                            borderRadius: '6px',
                            padding: '6px 8px',
                        },
                        '&[aria-selected="true"]': {
                            backgroundColor: '#181F30',
                            borderRadius: '6px',
                            padding: '6px 8px',
                        },
                        '&[aria-selected="true"].Mui-focused': {
                            backgroundColor: '#181F30',
                            borderRadius: '6px',
                            padding: '6px 8px',
                        },
                    },
                },
            },
        },
        MuiButtonBase: {
            styleOverrides: {
                // Name of the slot
                root: {
                    '&.MuiButton-root': {
                        backgroundColor: universalColors.neutral_80,
                        '&:hover': {
                            backgroundColor: universalColors.neutral_70,
                        },
                        color: universalColors.white,
                        textTransform: 'initial',
                        '&.MuiButton-sizeSmall': {
                            fontSize: '13px',
                            fontWeight: 400,
                            lineHeight: '24px',
                            padding: '0 7px',
                        },
                    },
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                // Name of the slot
                input: {
                    color: universalColors.white,
                    '&::placeholder': {
                        color: universalColors.neutral_20,
                    },

                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '150%',
                },
                root: {
                    border: `1px solid ${universalColors.neutral_60}`,
                    backgroundColor: '#131823',
                    '&.Mui-focused': {
                        border: '1px solid #663CDD',
                        boxShadow: '0px 0px 0px 4px #B89FFF',
                    },
                    '& fieldset': {
                        border: 0,
                    },
                    borderRadius: '6px',
                },
            },
        },
    },
});
