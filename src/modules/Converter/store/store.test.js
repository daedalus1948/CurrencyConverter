import { getConversionList, getLoading } from './selectors.js';
import { loadingReducer, conversionReducer } from './reducers.js';
import { setConversionList, addConversion, setLoading} from './actions.js';

describe('CONVERTER STORE TESTS', () => {

    const mockState = {
        conversionList: [
            {conversionSource:'ECB', conversionDate:'2018-3-4-12:21:04-GMT+1', currencySymbol:'CZK', currencyValue:'13.56kč'},
            {conversionSource:'NYC', conversionDate:'2019-3-4-10:36:20-GMT+1', currencySymbol:'USD', currencyValue:'30.22USD'},
            {conversionSource:'ACL', conversionDate:'2019-4-5-13:22:55-GMT+1', currencySymbol:'EUR', currencyValue:'1777.11EUR'}
        ],
        loading: false
    }

    describe('ACTIONS SUITE', () => {

        it('setConversionList returns a conversion list action', () => {
            expect(setConversionList(['conversion-1'])).toEqual({ type: 'SET_CONVERSION_LIST', payload: {conversionList:['conversion-1']} });
        });

        it('addConversionList returns an add conversion action', () => {
            expect(addConversion('conversion-1')).toEqual({ type: 'ADD_CONVERSION', payload: {conversion:'conversion-1'}});
        });

        it('setLoading returns a set loading action', () => {
            expect(setLoading(false)).toEqual({ type: 'SET_LOADING', payload: {status:false}});
        });

    })
    

    describe('SELECTORS SUITE', () => {

        it('getConversionList returns conversion list', () => {
            expect(getConversionList(mockState)).toEqual(mockState.conversionList);
        });

        it('getLoading returns loading', () => {
            expect(getLoading(mockState)).toEqual(mockState.loading);
        });

    })


    describe('REDUCERS SUITE ', () => {

        const mockCurrencyData = {conversionSource:'ACL', conversionDate:'2019-4-5-13:22:55-GMT+1', currencySymbol:'EUR', currencyValue:'1777.11EUR'};
        
        const mockConversionList = [
            {conversionSource:'MOCK1', conversionDate:'2018-3-4-12:21:04-GMT+1', currencySymbol:'CZK', currencyValue:'13.56kč'},
            {conversionSource:'MOCK2', conversionDate:'2019-3-4-10:36:20-GMT+1', currencySymbol:'USD', currencyValue:'30.22USD'},
        ];

        it('loadingReducer returns true', () => {
            expect(loadingReducer(mockState.loading, {type:'SET_LOADING', payload:{status:true}}))
                .toEqual(true)
        })

        it('loadingReducer returns false', () => {
            expect(loadingReducer(mockState.loading, {type:'SET_LOADING', payload:{status:false}}))
                .toEqual(false)
        })

        it('conversionReducer returns updated conversion list', () => {
            expect(conversionReducer(mockState.conversionList, {type:'ADD_CONVERSION', payload: mockCurrencyData }))
                .toHaveLength(4)
        })

        it('conversionReducer returns new converion list', () => {
            expect(conversionReducer(mockState.conversionList, {type:'SET_CONVERSION_LIST', payload: {conversionList:mockConversionList} }))
                .toEqual(mockConversionList)
        })


    })
    

})

