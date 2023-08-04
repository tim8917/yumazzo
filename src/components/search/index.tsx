import {TextField} from "@mui/material";
import {SearchIcon} from "../svg-icons/SearchIcon";
import styled from "@emotion/styled";

const Parent = styled.div`
    margin-bottom: 24px;
`;

export function Search() {
    return (
        <Parent>
            <TextField
                placeholder="Search cuisine"
                // size="small"
                className="textFieldCustomPadding"
                InputProps={{
                    startAdornment: (
                        <SearchIcon/>
                    )
                }}
                fullWidth={true}
            />
        </Parent>
    );
}
