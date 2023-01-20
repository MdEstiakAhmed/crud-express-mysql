import { useEffect, useReducer } from "react";
import fetchReducer from "../reducers/fetchReducer";

export const useFetch = (fetchFunction, params, dependencies=[], initialData = {}, isManual) => {
    const abortController = new AbortController();
    let signal = abortController.signal;

    const initialState = {
        data: initialData,
        error: null,
        isLoading: false,
        isError: false,
    };

    const [state, dispatch] = useReducer(fetchReducer, initialState);

    useEffect(() => {
        let isMounted = true;
        !isManual && fetchData({ isMounted })
        return () => {
            isMounted = false;
            abortController.abort();
        }
    }, dependencies);

    const fetchData = async ({ isMounted }) => {
        dispatch({ type: "FETCH_INIT" });
        try {
            const response = await fetchFunction({...params, signal});
            if (!response?.status) {
                isMounted && dispatch({ type: "FETCH_FAILURE", payload: { error: response.error } });
            }
            else {
                isMounted && dispatch({ type: "FETCH_SUCCESS", payload: { data: response.data } });
            }
        }
        catch (error) {
            isMounted && dispatch({ type: "FETCH_FAILURE", payload: { error: error.message } });
        }
    }

    return {...state, fetchData};
}