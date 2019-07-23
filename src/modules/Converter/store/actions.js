import { SET_LOADING, ADD_CONVERSION, SET_CONVERSION_LIST } from './constants.js';


const setConversionList = (conversionList) => {
    return { type: SET_CONVERSION_LIST, payload: { conversionList } }

}

const addConversion = (conversion) => {
    return { type: ADD_CONVERSION, payload: { conversion } }
}

const setLoading = (boolean) => {
    return { type: SET_LOADING, payload: { status: boolean } }
}

export {
    addConversion,
    setLoading,
    setConversionList
}