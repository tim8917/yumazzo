import React, {useRef} from 'react';
import {useRoute} from "wouter";
import {Transition} from "react-transition-group";
import {
    Box,
    FormControl,
    FormLabel,
    MenuItem, Select,
    TextareaAutosize,
    TextField
} from "@mui/material";
import {ViewHeadline} from "../view-headline";
import {universalColors} from "../../themes/universal-colors";
import {FONT_FAMILY_BAI_JAMJUREE} from "../../constants";
import {Difficulty} from "../../model";
import {Country} from "../../model/countries.enum";
import {CountryIcon} from "../country-icon";

const duration = 1500;

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

export function AddRecipeView() {
    const nodeRef = useRef(null);
    const [match, params] = useRoute("/recipes/add");

    return (
        <Transition nodeRef={nodeRef} in={match} timeout={duration} appear={true}>
            {state => (
                <div
                    ref={nodeRef}
                    style={{
                        ...defaultStyle,
                        ...transitionStyles[state],
                        fontFamily: FONT_FAMILY_BAI_JAMJUREE,
                        padding: '24px',
                    }}
                >
                    <ViewHeadline
                        text="Add new recipe"
                        backRoute="/"
                    />

                    <form>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                '> *': {
                                    flex: '1 0 175px',
                                },
                                columnGap: '12px',
                                rowGap: '24px',
                                justifyContent: 'space-between',
                            }}
                        >
                            <FormControl>
                                <FormLabel htmlFor="name">Name</FormLabel>
                                <TextField id="name" />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="origin">Origin</FormLabel>
                                <Select>
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

                            <FormControl
                                sx={{flex: '100%'}}
                            >
                                <FormLabel htmlFor="description">Description</FormLabel>
                                <TextareaAutosize
                                    id="description"
                                    placeholder="Describe your recipe..."
                                    style={{
                                        resize: 'vertical',
                                        backgroundColor: universalColors.neutral_90,
                                        border: '1px solid #5B6178',
                                        borderRadius: '6px',
                                        color: universalColors.white,
                                        padding: '8px 11px',
                                        fontFamily: FONT_FAMILY_BAI_JAMJUREE,
                                        fontSize: '16px',
                                        fontWeight: 400,
                                        lineHeight: '24px',
                                        minHeight: '72px',
                                    }}
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel htmlFor="difficulty">Difficulty</FormLabel>
                                <Select id="difficulty">
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
                                <TextField id="volume" />
                            </FormControl>

                            <FormControl>
                                <FormLabel htmlFor="serves">Serves</FormLabel>
                                <TextField id="serves" />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="authenticity">Authenticity</FormLabel>
                                <TextField id="authenticity" />
                            </FormControl>

                            <FormControl>
                                <FormLabel htmlFor="stock">Stock</FormLabel>
                                <TextField id="stock" />
                            </FormControl>
                        </Box>

                    </form>


                </div>
            )}
        </Transition>
    );
}
