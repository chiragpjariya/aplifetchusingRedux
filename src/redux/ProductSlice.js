import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    lodding: false,
    list: []
}

export const fetchProduectList = createAsyncThunk(
    'product/getData',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
        return { list: response }
    },
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
      })
)

export const deleteProduect = createAsyncThunk(
    'product/deleteProduct',
    
    async ({ id }) => {
      let response =  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

    },
)


export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProduectList.pending, (state) => {
            state.lodding = true
        })
        builder.addCase(fetchProduectList.fulfilled, (state, { payload: { list } }) => {
            state.list = list
            state.lodding = false
        })
        builder.addCase(fetchProduectList.rejected, (state) => {
            state.lodding = false
            state.list = []
        })
    }
})

export default productSlice.reducer