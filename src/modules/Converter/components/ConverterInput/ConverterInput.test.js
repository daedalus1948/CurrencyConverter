import React from 'react';
import { shallow, mount } from 'enzyme';
import { ConverterInput } from './export.js';

describe('CONVERTER INPUT', () => {
    
    const mockEvent = {preventDefault: () => {}};
    const spy = jest.fn();
    const mockValue = 'mock-value';

    test('converterInput component calls changeHandler()', () => {
        const converterInput = shallow(<ConverterInput value={mockValue} changeHandler={spy} />);
        const input = converterInput.find('input');
        input.simulate('change', mockEvent);
        expect(spy).toHaveBeenCalled();
    });


});
