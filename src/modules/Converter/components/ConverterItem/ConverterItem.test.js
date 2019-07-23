import React from 'react';
import { shallow, mount } from 'enzyme';
import { ConverterItem } from './export.js';

describe('CONVERTER ITEM', () => {
    

    const itemEUR = {
        currencySymbol: 'EUR',
        currencyValue: '20',
        conversionDate: 'Yesterday',
        conversionSource: 'European Central Bank'
    };

    test('ConverterItem renders all of its props', () => {
        const converterItem = mount(<ConverterItem { ...itemEUR } />)
        expect(converterItem.props().currencySymbol).toEqual('EUR');
        expect(converterItem.props().currencyValue).toEqual('20');
        expect(converterItem.props().conversionDate).toEqual('Yesterday');
        expect(converterItem.props().conversionSource).toEqual('European Central Bank');
    });

});


