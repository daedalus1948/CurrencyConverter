import React from 'react';
import { shallow, mount } from 'enzyme';

import { ConverterBoard } from './export.js';
import { ConverterList } from '../ConverterList/export.js';
import { ConverterControllerContainer } from '../ConverterController/export.js';

describe('CONVERTER BOARD', () => {
    
  test('ConverterBoard component renders a ConverterController component', () => {
      let converterBoard = shallow(<ConverterBoard items={[]} />);
      expect(converterBoard.find(ConverterControllerContainer)).toHaveLength(1);
  });

  test('ConverterBoard component renders a ConverterList component', () => {
    let converterBoard = shallow(<ConverterBoard  items={[]} />);
    expect(converterBoard.find(ConverterList)).toHaveLength(1);
  });


});
