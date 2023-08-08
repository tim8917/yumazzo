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
                    '&::-webkit-scrollbar': {
                        width: '12px',
                        backgroundColor: '#121826',
                        marginRight: '2px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        borderRadius: '10px',
                        WebkitBoxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.9)',
                        backgroundColor: '#131823',
                        marginRight: '2px',
                    },
                    // '&::-webkit-scrollbar-button': {
                    //     backgroundColor: '#131823',
                    // },
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
