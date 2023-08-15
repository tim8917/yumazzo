import React, {useRef, useState} from 'react';
import {useRoute} from "wouter";
import {Transition} from "react-transition-group";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    MenuItem,
    Select,
    TextareaAutosize,
    TextField
} from "@mui/material";
import {ViewHeadline} from "../view-headline";
import {universalColors} from "../../themes/universal-colors";
import {FONT_FAMILY_BAI_JAMJUREE} from "../../constants";
import {Authenticity, Difficulty, Recipe} from "../../model";
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
    const [newRecipe, setNewRecipe] = useState<Partial<Recipe>>({
        difficulty: Difficulty.Easy as number,
        authenticity: Authenticity.Unverified,
    });

    const setValue = (key: string, value: string) => {
        const newState = {
            ...newRecipe,
            [key]: value,
        };

        setNewRecipe(newState);
    };

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
                                    <TextField
                                        id="name"
                                        value={newRecipe.name ?? ''}
                                        onChange={(e) => {
                                            setValue('name', e.target.value);
                                        }}
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="origin">Origin</FormLabel>
                                    <Select
                                        id="origin"
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
                                        value={newRecipe.origin ?? ''}
                                        onChange={(e) => {
                                            setValue('origin', e.target.value);
                                        }}
                                    >
                                        {Object.keys(Country).map((key: string) => {
                                            const code = Country[key as keyof typeof Country].toLowerCase();

                                            return (
                                                <MenuItem
                                                    key={code}
                                                    value={code ?? ''}
                                                    sx={{display: 'flex', alignItems: 'center'}}
                                                >
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
                                        value={newRecipe.description ?? ''}
                                        onChange={(e: React.SyntheticEvent) => {
                                            setValue('description', (e.target as HTMLInputElement).value);
                                        }}
                                    />
                                    <DescriptionHelper>
                                        {`${(newRecipe.description ?? '').length}/${DESCRIPTION_MAX_LENGTH} Characters`}
                                    </DescriptionHelper>
                                </FormControl>

                                <FormControl>
                                    <FormLabel htmlFor="difficulty">Difficulty</FormLabel>
                                    <Select
                                        id="difficulty"
                                        value={newRecipe.difficulty ?? ''}
                                        onChange={(e) => {
                                            setValue('difficulty', e.target.value.toString());
                                        }}
                                    >
                                        {Object.keys(Difficulty).filter(v => !isNaN(Number(v))).map((value: string) => (
                                            <MenuItem key={value} value={value}>{Difficulty[Number(value)]}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="protein">Protein</FormLabel>
                                    <TextField
                                        id="protein"
                                        value={newRecipe.protein ?? ''}
                                        onChange={(e) => {
                                            setValue('protein', e.target.value);
                                        }}
                                    />
                                </FormControl>

                                <FormControl>
                                    <FormLabel htmlFor="produce">Produce</FormLabel>
                                    <TextField
                                        id="produce"
                                        value={newRecipe.produce ?? ''}
                                        onChange={(e) => {
                                            setValue('produce', e.target.value);
                                        }}
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="spice">Spice</FormLabel>
                                    <TextField
                                        id="spice"
                                        value={newRecipe.spice ?? ''}
                                        onChange={(e) => {
                                            setValue('spice', e.target.value);
                                        }}
                                    />
                                </FormControl>

                                <FormControl>
                                    <FormLabel htmlFor="cookingOil">Cooking Oil?</FormLabel>
                                    <TextField
                                        id="cookingOil"
                                        value={newRecipe.cookingOil ?? ''}
                                        onChange={(e) => {
                                            setValue('cookingOil', e.target.value);
                                        }}
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="volume">Volume</FormLabel>
                                    <TextField
                                        id="volume"
                                        InputProps={{
                                            endAdornment: <InputTextAdornment>grams</InputTextAdornment>
                                        }}
                                        value={newRecipe.volume ?? ''}
                                        onChange={(e) => {
                                            setValue('volume', e.target.value);
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
                                        value={newRecipe.serves ?? ''}
                                        onChange={(e) => {
                                            setValue('serves', e.target.value);
                                        }}
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="authenticity">Authenticity</FormLabel>
                                    <Select
                                        id="authenticity"
                                        value={newRecipe.authenticity ?? ''}
                                        onChange={(e) => {
                                            setValue('authenticity', e.target.value);
                                        }}
                                    >
                                        {Object.keys(Authenticity).map((key: string) => (
                                            <MenuItem key={key} value={Authenticity[key as keyof typeof Authenticity]}>
                                                {key}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <FormControl>
                                    <FormLabel htmlFor="stock">Stock</FormLabel>
                                    <TextField
                                        id="stock"
                                        value={newRecipe.stock ?? ''}
                                        onChange={(e) => {
                                            setValue('stock', e.target.value);
                                        }}
                                    />
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
