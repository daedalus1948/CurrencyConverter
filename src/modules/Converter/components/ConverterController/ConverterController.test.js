import React from 'react';
import { shallow, mount } from 'enzyme';

import { ConverterController } from './export.js';
import { ConverterInput } from '../ConverterInput/export.js';
import { ConverterSelect } from '../ConverterSelect/export.js';
import { ConverterButton } from '../ConverterButton/export.js';

describe('CONVERTER CONTROLLER', () => {
    
  test('ConverterController component renders a ConverterInput component', () => {
      let converterController = shallow(<ConverterController submitConversion={()=>{}} />);
      expect(converterController.find(ConverterInput)).toHaveLength(1);
  });

  test('ConverterController component renders a ConverterSelect component', () => {
    let converterController = shallow(<ConverterController submitConversion={()=>{}} />);
    expect(converterController.find(ConverterSelect)).toHaveLength(1);
  });

  test('ConverterController component renders a ConverterButton component', () => {
    let converterController = shallow(<ConverterController submitConversion={()=>{}} />);
    expect(converterController.find(ConverterButton)).toHaveLength(2);
  });

});
