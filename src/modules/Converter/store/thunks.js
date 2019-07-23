import { setLoading, addConversion, setConversionList } from './actions.js';
import { mockGetNewData, mockFetchInitialData } from '../services/export.js';

const mockInitThunk = () => {
    return (dispatch) => {
        dispatch(setLoading(true));
        mockFetchInitialData()
            .then((listData)=>{
                dispatch(setConversionList(listData));
                dispatch(setLoading(false));
            })
    }
};


const newConversion = (newConversionData) => {
    return (dispatch) => {
        dispatch(setLoading(true));
        mockGetNewData(newConversionData)
            .then((resData)=>{
                dispatch(addConversion(resData));
                dispatch(setLoading(false));
            })
    }
};

export {
    mockInitThunk,
    newConversion
}