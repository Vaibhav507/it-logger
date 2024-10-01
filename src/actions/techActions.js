import { GET_TECHS, ADD_TECHS, DELETE_TECH, SET_LOADING, TECH_ERROR } from "./types";

export const getTechs = () => async dispatch => {
    try {

        setLoading();

        const res = await fetch('/techs');
        const data = await res.json();
        
        dispatch({
            type: GET_TECHS,
            payload: data
        });
        
    } catch (error) {
        dispatch({
            type: TECH_ERROR,
            payload: error.response.statusText
        })
        
    }    
}

export const addTechs = ( tech ) => async dispatch => {
    
    try {

        setLoading();

        const res = await fetch('/techs', {
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        
        dispatch({
            type: ADD_TECHS,
            payload: data
        });
        
    } catch (error) {
        dispatch({
            type: TECH_ERROR,
            payload: error.response.statusText
        })
        
    }     

}

export const deleteTech = id => async dispatch => {
    try {

        setLoading();

        await fetch(`/techs/${id}`,{
            method: 'DELETE'
        });
        
        dispatch({
            type: DELETE_TECH,
            payload: id
        });
        
    } catch (error) {
        dispatch({
            type: TECH_ERROR,
            payload: error.response.statusText
        })
        
    }    
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    };
 }