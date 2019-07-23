import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ConverterController } from './export.js';


storiesOf('ConverterController', module)
    .add('ConverterController', () => <ConverterController submitConversion={action('submit-conversion-action-triggered')} />)
