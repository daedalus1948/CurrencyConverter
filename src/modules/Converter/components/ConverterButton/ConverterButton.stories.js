import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ConverterButton } from './export.js';


storiesOf('ConverterButton', module)
    .add('ConverterButton', () => <ConverterButton disabled={false} text={"button-text"} clickHandler={action('button-click-triggered')} />)
  