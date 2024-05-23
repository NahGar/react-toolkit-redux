import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false

    },
    reducers: {
        increment: (state) => {
            state.counter += 1;
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment } = pokemonSlice.actions;