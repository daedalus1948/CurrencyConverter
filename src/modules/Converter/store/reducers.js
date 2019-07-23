import { ADD_CONVERSION, SET_LOADING, SET_CONVERSION_LIST } from './constants.js';

const conversionReducer = (conversionList=[], action) => {

    switch (action.type) {
        case ADD_CONVERSION:
            return [...conversionList, action.payload.conversion];
        case SET_CONVERSION_LIST:
            return action.payload.conversionList;
        default:
            return conversionList;
    }
};

const loadingReducer = (loading=false, action) => {
    switch (action.type) {
        case SET_LOADING:
            return action.payload.status;
        default:
            return loading;
    }
};


export {
    conversionReducer,
    loadingReducer
}
