import React from 'react';
import { shallow, mount } from 'enzyme';
import { ConverterLoading } from './export.js';

describe('CONVERTER LOADING', () => {
    

    test('ConverterLoading renders all of its props', () => {
        const converterLoading = mount(<ConverterLoading loadingMessage={"Loading..."} />)
        expect(converterLoading.props().loadingMessage).toEqual('Loading...');
    });

});


