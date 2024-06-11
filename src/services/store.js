import {configureStore} from '@reduxjs/toolkit';
import { articleAPI } from './article';

export const store= configureStore({
    reducer:{
        [articleAPI.reducerpath]:articleAPI.reducer
    },
    middleware:(getDefaultMiddleware)=>{
        getDefaultMiddleware().concat(articleAPI.middleware)
    }
})