import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOGS,
    DELETE_LOGS,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_LOG,
    SEARCH_LOGS
 } from './types';

export const getLogs = () => async dispatch => {
    
    try {

        setLoading();

        const res = await fetch('/logs');
        const data = await res.json();
        
        dispatch({
            type: GET_LOGS,
            payload: data
        });
        
        
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        })
        
    }     

}

export const addLogs = ( log ) => async dispatch => {
    
    try {

        setLoading();

        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        
        dispatch({
            type: ADD_LOGS,
            payload: data
        });
        
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        })
        
    }     

}

export const deleteLogs = ( id ) => async dispatch => {
    
    try {

        setLoading();

        await fetch(`/logs/${id}`, {
            method: 'DELETE',
        });
        
        dispatch({
            type: DELETE_LOGS,
            payload: id
        });
        
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        })
        
    }     

}

export const updateLog = log => async dispatch => {
    
    try {

        setLoading();
            
        const res = await fetch(`/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        
        dispatch({
            type: UPDATE_LOG,
            payload: data
        });
        
    } catch (error) {

        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        })
        
    }        

}

export const searchLogs = ( text ) => async dispatch => {
    
    try {

        setLoading();

        const res = await fetch(`/logs?tech=${text}`);
        const data = await res.json();
        
        dispatch({
            type: SEARCH_LOGS,
            payload: data
        });
        
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        })
        
    }     

}

export const setCurrent = log => {
    return {
        type: SET_CURRENT,
        payload: log
    }
}

export const clearCurrent = log => {
    return {
        type: CLEAR_CURRENT
    }
}

 export const setLoading = () => {
    return {
        type: SET_LOADING
    };
 }