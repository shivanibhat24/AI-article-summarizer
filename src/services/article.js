import {createAPI,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { useState } from 'react';

const rapidApiKey=import.meta.env.VITE_RAPID_API_KEY;

export const articleAPI= createAPI({
    reducerpath:'articleAPI',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers)=>{
            headers.set('x-rapidapi-key',rapidApiKey);
            headers.set('x-rapidapi-host','article-extractor-and-summarizer.p.rapidapi.com');
            return headers
        }
    }),
    endpoints: (builder)=>({
        getSummary:builder.query({
            query:(params)=>`/summarize?url=${encodeURIcomponent(params.articleUrl)}&length=3`
        })
    })
});
export const {useLazyGetSummaryQuery}=articleAPI;