import {createTheme} from "@mui/material";
import {universalColors} from "./universal-colors";
import {ChevronDownIcon} from "../components/svg-icons/ChevronDownIcon";
import {FONT_FAMILY_BAI_JAMJUREE} from "../constants";

const INPUT_HEIGHT = '22px';

export const theme = createTheme({
    components: {
        // Name of the component
        MuiSelect: {
            defaultProps: {
                IconComponent: ChevronDownIcon,
            },
            styleOverrides: {
                select: {
                    display: 'flex',
                    alignItems: 'center',
                    minHeight: 'initial !important',
                    height: INPUT_HEIGHT,
                    padding: '8px 11px !important',
                },
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                // Name of the slot
                root: {
                    '.MuiInputBase-root.MuiOutlinedInput-root': {
                        backgroundColor: '#131823',
                    },
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
                    '&.MuiOutlinedInput-input': {
                        padding: '8px 11px',
                    },
                    '&.MuiOutlinedInput-input.MuiInputBase-inputAdornedEnd': {
                        padding: '8px 5px 8px 11px',
                    },
                    color: universalColors.white,
                    '&::placeholder': {
                        color: universalColors.neutral_20,
                    },
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '150%',
                    height: INPUT_HEIGHT,
                },
                root: {
                    fontFamily: FONT_FAMILY_BAI_JAMJUREE,
                    padding: '0',
                    '&.MuiOutlinedInput-root': {
                        borderRadius: '6px',
                    },
                    '&.MuiInputBase-adornedEnd': {
                        paddingRight: '11px',
                    },
                    border: `1px solid #5B6178`,
                    backgroundColor: universalColors.neutral_90,
                    '&.Mui-focused': {
                        // outline: '1px solid #663CDD',
                        // border: 'initial',
                        border: '1px solid #663CDD',
                        boxShadow: '0px 0px 0px 4px #B89FFF',
                    },
                    '& fieldset': {
                        border: 0,
                    },
                },
            },
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    fontFamily: FONT_FAMILY_BAI_JAMJUREE,
                    fontSize: '16px',
                    fontWeight: 500,
                    letterSpacing: 0,
                    paddingBottom: '10px',
                    color: universalColors.white,
                },
            },
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    '.MuiFormLabel-root.Mui-focused': {
                        color: `${universalColors.white} !important`,
                    }
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: '#121826',
                    color: universalColors.white,
                    borderRadius: '6px',
                    marginTop: '11px',
                },
            },
        },
    },
});
