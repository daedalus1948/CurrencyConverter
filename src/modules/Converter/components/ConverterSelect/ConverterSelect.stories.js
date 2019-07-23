import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ConverterSelect } from './export.js';


storiesOf('ConverterSelect', module)
    .add('ConverterSelect', () => <ConverterSelect value={"inital-value"} changeHandler={action('select-change-triggered')} />)
  