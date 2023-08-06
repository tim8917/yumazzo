import React from "react";
import {Autocomplete, Box, Paper, TextField} from "@mui/material";
import {SearchIcon} from "../svg-icons/SearchIcon";
import styled from "@emotion/styled";
import {universalColors} from "../../themes/universal-colors";
import {Recipe} from "../../model";
import {MenuItem} from "../menu-item";

const Parent = styled.div`
    margin-bottom: 24px;
`;

const options: readonly Recipe[] = [
    {
        "origin": "th",
        "name": "Thai Curry",
        "difficulty": 2,
        "time": 35,
    },
    {
        "origin": "in",
        "name": "Indian Curry",
        "difficulty": 1,
        "time": 30,
    },
    {
        "origin": "vn",
        "name": "Vietnamese Curry",
        "difficulty": 0,
        "time": 115,
    },
];


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

export function Search() {
    return (
        <Parent>
            <Autocomplete
                // open={true}
                disableClearable={true}
                options={options}
                getOptionLabel={() => ''}
                renderOption={(props, option) => {
                    return (
                        <Box component="li" {...props} key={option.name}>
                            <MenuItem recipe={option} />
                            {/*{option.name}*/}
                        </Box>
                    );
                }}
                PaperComponent={CustomPaper}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder="Search cuisine"
                        // inputProps={{
                        //     ...params.inputProps,
                        // }}
                        InputProps={{
                            ...params.InputProps,
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
