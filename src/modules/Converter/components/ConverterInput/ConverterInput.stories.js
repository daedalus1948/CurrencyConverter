import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ConverterInput } from './export.js';


storiesOf('ConverterInput', module)
    .add('ConverterInput', () => <ConverterInput value={"inital-value"} changeHandler={action('input-change-triggered')} />)
  