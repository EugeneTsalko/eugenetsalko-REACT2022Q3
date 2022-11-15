import { createAsyncThunk, createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { fetchData } from 'api/api';
import { FormCard, getDataParams, InitialStateType, PhotoCard, SortValues } from './store.types';

const initialState: InitialStateType = {
  currentPage: 1,
  sort: 'relevance',
  searchWord: '',
  isLoaded: false,
  isFirstRun: true,
  cards: [],
  formCards: [],
};

export const getData = createAsyncThunk(
  'mainState/getData',
  async ({ searchWord, sort, currentPage }: getDataParams) => {
    const data = (await fetchData(searchWord, sort, currentPage)) as PhotoCard[];
    return data;
  }
);

const mainslice = createSlice({
  name: 'mainState',
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setSort(state, action: PayloadAction<SortValues>) {
      state.sort = action.payload;
    },
    setSearchWord(state, action: PayloadAction<string>) {
      state.searchWord = action.payload;
    },
    setIsLoaded(state, action: PayloadAction<boolean>) {
      state.isLoaded = action.payload;
    },
    setIsFirstRun(state, action: PayloadAction<boolean>) {
      state.isFirstRun = action.payload;
    },
    setCards(state, action: PayloadAction<PhotoCard[]>) {
      state.cards = action.payload;
    },
    setFormCards(state, action: PayloadAction<FormCard[]>) {
      state.formCards = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addMatcher(isAnyOf(getData.pending), (state) => {
        state.isLoaded = false;
      })
      .addMatcher(isAnyOf(getData.fulfilled), (state, action) => {
        state.cards = [...action.payload];
        state.isLoaded = true;
      });
  },
});

export const {
  setCurrentPage,
  setSort,
  setSearchWord,
  setIsLoaded,
  setIsFirstRun,
  setCards,
  setFormCards,
} = mainslice.actions;

export default mainslice.reducer;
