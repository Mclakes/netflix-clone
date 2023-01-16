import { configureStore, createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    genresLoades: false,
    genre: [],
}

export const getGenres = createAsyncThunk("netflix/genres", async () =>{
    const { data } = await axios.get(
        `${TMDB_BASE_URL}/genre/movie/list?api_key${API_KEY}`
        );
        console.log(data);
        // return data;
})

const NetFlixSlice = createStore({
    name: "Netflix",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getGenres.fulfilled,(state, action)=> {
            state.genres = action.payload;
            state.genresLoaded(true)
        })
    },
})

export const store = configureStore({
    reducer: {
        netflix: NetFlixSlice.reducer,
    },
})