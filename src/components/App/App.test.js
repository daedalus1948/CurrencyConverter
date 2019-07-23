import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App.jsx';

import { ConverterBoardContainerRedux } from '../../modules/Converter/components/ConverterBoard/export.js';

describe('CONVERTER APP', () => {
    
  test('ConverterBoard component renders a ConverterController component', () => {
      let app = shallow(<App />);
      expect(app.find(ConverterBoardContainerRedux)).toHaveLength(1);
  });

});