import React, {Dispatch, SetStateAction, useState} from "react";
import {Autocomplete, Box, debounce, Paper, TextField} from "@mui/material";
import {SearchIcon} from "../svg-icons/SearchIcon";
import styled from "@emotion/styled";
import {universalColors} from "../../themes/universal-colors";
import {Recipe} from "../../model";
import {MenuItem} from "../menu-item";
import {getRecipes} from "../../api/get-recipes";
import {AutocompleteInputChangeReason} from "@mui/base/useAutocomplete/useAutocomplete";

const Parent = styled.div`
    margin-bottom: 24px;
`;

const CustomPaper: React.FC<React.ComponentProps<typeof Paper>> = (props) => {
    return (
        <Paper
            {...props}
            sx={{
                backgroundColor: '#121826',
                boxShadow: '0px 10px 30px 3px rgba(0, 0, 0, 0.80)',
                color: universalColors.white,
                borderRadius: '6px',
                marginTop: '11px',
            }}
        />
    );
};

interface ISearchProps {
    setCurrentRecipe: (recipe?: Recipe) => void;
}

export const Search: React.FC<ISearchProps> = ({setCurrentRecipe}) => {
    const [options, setOptions] = useState<Recipe[]>([])
    const [inputValue, setInputValue] = React.useState('');

    const searchRecipes = async (value: string) =>
        await getRecipes({nameContains: value})
            .then((result) => setOptions(result));

    const onInputChange = async (e: React.SyntheticEvent, value: string, reason: AutocompleteInputChangeReason) => {
        if (reason === 'input') {
            setInputValue(value);

            if (value) {
                await searchRecipes(value);
            }
        }
    };

    return (
        <Parent>
            <Autocomplete
                getOptionLabel={() => inputValue}
                options={inputValue ? options : []}
                filterOptions={(options) => options}
                isOptionEqualToValue={(option: Recipe, value: Recipe) => option.id === value.id}
                onInputChange={debounce(onInputChange, 500)}
                onChange={(e, value: Recipe | string) => {
                    if (typeof value === 'object') {
                        setCurrentRecipe(value);
                    }
                }}
                renderOption={(props, option: Recipe) => {
                    return (
                        <Box component="li" {...props} key={option.id}>
                            <MenuItem recipe={option} />
                        </Box>
                    );
                }}
                PaperComponent={CustomPaper}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder="Search cuisine"
                        InputProps={{
                            ...params.InputProps,
                            autoFocus: true,
                            startAdornment: (
                                <SearchIcon />
                            ),
                            endAdornment: null,
                        }}
                        fullWidth={true}
                    />
                )}
                freeSolo={true}
                disableClearable={true}
                selectOnFocus={true}
            />
        </Parent>
    );
}
