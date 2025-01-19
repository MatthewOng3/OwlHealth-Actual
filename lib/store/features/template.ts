 import { Template } from "@/app/util/types/data-types";
import { DATA_TEMPLATES } from "@/lib/datasets/templates";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { RootState } from "../store";
import { supabaseCall } from "@/app/util/supabase/supabase";
 


type TemplateSlice = {
    templates: Template[];
    isLoading: boolean;
}

/**
 * @description Retrieve templates from database
 
 * @returns 
 */
export const retrieveTemplates = createAsyncThunk(
    "template/retrieveTemplates",
    async ({profileId}: {profileId: number}, {rejectWithValue}) => {
        try {

            const templates = await supabaseCall('get_templates',{input_profile_id: profileId})

            return {data: DATA_TEMPLATES, success: true}
        } catch (err) {
            return rejectWithValue({data: [], success: false})
        }
    }
);

/**
 * @description Add new template for user
 
 * @returns 
 */
export const addTemplate = createAsyncThunk(
    "template/addTemplate",
    async ({profileId}: {profileId: number}, {rejectWithValue}) => {
        try {

            const newTemplate = await supabaseCall('add_template',{input_profile_id: profileId})

            return {data: newTemplate, success: true}
        } catch (err) {
            return rejectWithValue({data: [], success: false})
        }
    }
);

 
const initialState: TemplateSlice = {
    templates: [],
    isLoading: false
};

const templateSlice = createSlice({
    name: "template",
    initialState: initialState,
    reducers: {
        // addTemplate: (state, {payload}) => {
        //     state.templates = payload;
        // }, 
    },
    extraReducers(builder) {
        /**
         * @description Getting user location
         */
        builder
            .addCase(retrieveTemplates.pending, (state) => {
                state.isLoading = true
            })
            .addCase(retrieveTemplates.fulfilled, (state, {payload}) => {
                state.templates = payload.data
                state.isLoading = false
            })
            .addCase(retrieveTemplates.rejected, (state) => {
                state.isLoading = false
            });
         
    }
});

/**
 * @description Get list information of a list
 * @returns ListInfoResponse Object
 */
export const getTemplates = (store: RootState) => {
    try {
        return store.template.templates
    } catch (err) {
        console.error("Error in getting templates", err);
        return [];
    }
};

// export const {addTemplate} =
//     templateSlice.actions;

export default templateSlice.reducer;