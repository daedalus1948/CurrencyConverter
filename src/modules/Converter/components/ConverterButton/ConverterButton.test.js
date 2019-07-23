import React from 'react';
import { shallow, mount } from 'enzyme';
import { ConverterButton } from './export.js';

describe('CONVERTER BUTTON', () => {
    
    const mockEvent = {preventDefault: () => {}};
    const spy = jest.fn();
    const mockValue = 'mock-value';

    test('converterButton component calls changeHandler()', () => {
        const converterButton = shallow(<ConverterButton disabled={false} text={mockValue} clickHandler={spy} />);
        const button = converterButton.find('button');
        button.simulate('click', mockEvent);
        expect(spy).toHaveBeenCalled();
    });
    
});
