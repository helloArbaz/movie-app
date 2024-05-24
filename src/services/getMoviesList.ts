import axios from "axios";
import { getMoviesList } from "../typescript/Types";
import { API_KEY, API_URL } from "../configs/api";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const api_getMoviesList = createAsyncThunk("api/fetchMovies", async () => {
    const response = await axios.get(`${API_URL}?api_key=${API_KEY}`)
    return response.data
})