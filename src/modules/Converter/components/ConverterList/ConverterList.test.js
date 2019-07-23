import React from 'react';
import { shallow, mount } from 'enzyme';
import { ConverterList } from './export.js';

describe('CONVERTER LIST', () => {
    
  const itemEUR = {
        currencySymbol: 'EUR',
        currencyValue: '20',
        conversionDate: 'Yesterday',
        conversionSource: 'European Central Bank'
    };

    test('ConverterItem renders all of its props', () => {
        const converterList = shallow(<ConverterList items={[itemEUR, itemEUR, itemEUR]} />);
        expect(converterList.find('div').children()).toHaveLength(3);
    });

});
