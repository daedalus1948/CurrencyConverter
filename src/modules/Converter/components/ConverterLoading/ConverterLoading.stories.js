import React from 'react';
import { storiesOf } from '@storybook/react';

import { ConverterLoading } from './export.js';


storiesOf('ConverterLoading', module)
  .add('ConverterLoadingDefault', () => <ConverterLoading loadingMessage={"Loading..."} />)
