import React from 'react';
import { shallow, mount } from 'enzyme';
import { ConverterSelect } from './export.js';

describe('CONVERTER SELECT', () => {
    
    const mockEvent = {preventDefault: () => {}};
    const spy = jest.fn();
    const mockValue = 'mock-value';

    test('ConverterSelect component calls changeHandler()', () => {
        const converterSelect = shallow(<ConverterSelect currencies={['EUR', 'USD']} value={mockValue} changeHandler={spy} />);
        const select = converterSelect.find('select');
        select.simulate('change', mockEvent);
        expect(spy).toHaveBeenCalled();
    });

});
