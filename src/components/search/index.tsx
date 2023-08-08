import React, {Dispatch, SetStateAction, useState} from "react";
import {Autocomplete, Box, Paper, TextField} from "@mui/material";
import {SearchIcon} from "../svg-icons/SearchIcon";
import styled from "@emotion/styled";
import {universalColors} from "../../themes/universal-colors";
import {Recipe} from "../../model";
import {MenuItem} from "../menu-item";
import {getRecipes} from "../../api/get-recipes";

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
    setCurrentRecipe: Dispatch<SetStateAction<Recipe | undefined>>
}

export const Search: React.FC<ISearchProps> = ({setCurrentRecipe}) => {
    const [options, setOptions] = useState<Recipe[]>([])
    const [inputValue, setInputValue] = React.useState("");

    return (
        <Parent>
            <Autocomplete
                freeSolo={true}
                getOptionLabel={() => inputValue}

                disableClearable={true}
                options={inputValue ? options : []}
                filterOptions={(options) => options}
                isOptionEqualToValue={(option: Recipe, value: Recipe) => option.id === value.id}
                onInputChange={(e, value, reason) => {
                    if (reason === 'input') {
                        setInputValue(value);

                        if (value) {
                            getRecipes({nameContains: value}).then((result) => {
                                if (result) {
                                    setOptions(result);
                                }
                            });
                        }
                    }

                }}
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
            />
        </Parent>
    );
}
