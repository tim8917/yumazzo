import React, {useRef, useState} from 'react';
import {useRoute} from "wouter";
import {Transition} from "react-transition-group";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    MenuItem, Select,
    TextareaAutosize,
    TextField
} from "@mui/material";
import {ViewHeadline} from "../view-headline";
import {universalColors} from "../../themes/universal-colors";
import {FONT_FAMILY_BAI_JAMJUREE} from "../../constants";
import {Authenticity, Difficulty} from "../../model";
import {Country} from "../../model/countries.enum";
import {CountryIcon} from "../country-icon";
import {StickyHeadline} from "../sticky-headline";
import styled from "@emotion/styled";

const ORIGIN_PLACEHOLDER = 'Country origin';
const DESCRIPTION_MAX_LENGTH = 200;

const duration = 1000;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = {
    entering: { opacity: 1 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
    unmounted:  { opacity: 0 },
};

const InputTextAdornment = styled.span`
    color: ${universalColors.neutral_60};
    font-size: 14px;
    font-weight: 300;
    line-height: 22px;
    padding-left: 5px;
`;

const DescriptionHelper = styled.div`
    margin-top: 10px;
    color: ${universalColors.neutral_grey};
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
`;

export function AddRecipeView() {
    const nodeRef = useRef(null);
    const [match, params] = useRoute("/recipes/add");
    const [description, setDescription] = useState<string>('');

    return (
        <Transition nodeRef={nodeRef} in={match} timeout={duration} appear={true}>
            {state => (
                <div
                    ref={nodeRef}
                    style={{
                        ...defaultStyle,
                        ...transitionStyles[state],
                        fontFamily: FONT_FAMILY_BAI_JAMJUREE,
                    }}
                >
                    <StickyHeadline>
                        <ViewHeadline
                            text="Add new recipe"
                            backRoute="/"
                        />
                    </StickyHeadline>

                    <Box sx={{
                        padding: '0 24px 24px',
                    }}>
                        <form>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    '> *': {
                                        flex: '1 0 175px',
                                    },
                                    columnGap: '12px',
                                    rowGap: '21px',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <FormControl>
                                    <FormLabel htmlFor="name">Name</FormLabel>
                                    <TextField id="name" />
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="origin">Origin</FormLabel>
                                    <Select
                                        sx={{
                                            '& .MuiSelect-select .notranslate::after':
                                                ORIGIN_PLACEHOLDER
                                                ? {
                                                    content: `"${ORIGIN_PLACEHOLDER}"`,
                                                    color: universalColors.neutral_60,
                                                    fontSize: '16px',
                                                }
                                                : {},
                                        }}
                                    >
                                        {Object.keys(Country).map((key: string) => {
                                            const code = Country[key as keyof typeof Country].toLowerCase();

                                            return (
                                                <MenuItem value={code} sx={{display: 'flex', alignItems: 'center'}}>
                                                    <CountryIcon code={code}/>
                                                    <span style={{marginLeft: '5px'}}>
                                                        {key.replace(/([a-z])([A-Z])/g, '$1 $2')}
                                                    </span>
                                                </MenuItem>
                                            );
                                        })}
                                    </Select>
                                </FormControl>

                                <FormControl sx={{flex: '100%'}}>
                                    <FormLabel htmlFor="description">Description</FormLabel>
                                    <TextareaAutosize
                                        id="description"
                                        placeholder="Describe your recipe..."
                                        maxLength={DESCRIPTION_MAX_LENGTH}
                                        value={description}
                                        onChange={(e: React.SyntheticEvent) => {
                                            setDescription((e.target as HTMLInputElement).value);
                                        }}
                                    />
                                    <DescriptionHelper>
                                        {`${description.length}/${DESCRIPTION_MAX_LENGTH} Characters`}
                                    </DescriptionHelper>
                                </FormControl>

                                <FormControl>
                                    <FormLabel htmlFor="difficulty">Difficulty</FormLabel>
                                    <Select
                                        id="difficulty"
                                        defaultValue={Difficulty.Easy}
                                    >
                                        {Object.keys(Difficulty).filter(v => !isNaN(Number(v))).map((value: string) => (
                                            <MenuItem value={value}>{Difficulty[Number(value)]}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="protein">Protein</FormLabel>
                                    <TextField id="protein" />
                                </FormControl>

                                <FormControl>
                                    <FormLabel htmlFor="produce">Produce</FormLabel>
                                    <TextField id="produce" />
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="spice">Spice</FormLabel>
                                    <TextField id="spice" />
                                </FormControl>

                                <FormControl>
                                    <FormLabel htmlFor="cookingOil">Cooking Oil?</FormLabel>
                                    <TextField id="cookingOil" />
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="volume">Volume</FormLabel>
                                    <TextField
                                        id="volume"
                                        InputProps={{
                                            endAdornment: <InputTextAdornment>grams</InputTextAdornment>
                                        }}
                                    />
                                </FormControl>

                                <FormControl>
                                    <FormLabel htmlFor="serves">Serves</FormLabel>
                                    <TextField
                                        id="serves"
                                        InputProps={{
                                            endAdornment: <InputTextAdornment>people</InputTextAdornment>
                                        }}
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="authenticity">Authenticity</FormLabel>
                                    <Select
                                        id="authenticity"
                                        defaultValue={Authenticity.Unverified}
                                    >
                                        {Object.keys(Authenticity).map((key: string) => (
                                            <MenuItem value={Authenticity[key as keyof typeof Authenticity]}>
                                                {key}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <FormControl>
                                    <FormLabel htmlFor="stock">Stock</FormLabel>
                                    <TextField id="stock" />
                                </FormControl>
                            </Box>

                            <Button
                                size="medium"
                                fullWidth={true}
                                sx={{
                                    marginTop: '24px',
                                    fontFamily: FONT_FAMILY_BAI_JAMJUREE,
                                    fontSize: '16px',
                                    fontWeight: 500,
                                    borderRadius: '6px',
                                    background: '#764AF4 !important',
                                    padding: '9px 14px 11px !important',
                                }}
                            >
                                Add Recipe
                            </Button>

                        </form>
                    </Box>
                </div>
            )}
        </Transition>
    );
}
