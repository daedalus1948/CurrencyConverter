import React from 'react';
import { storiesOf } from '@storybook/react';

import { ConverterItem } from './export.js';

export const itemUSD = {
    currencySymbol: 'USD',
    currencyValue: '20',
    conversionDate: 'Yesterday',
    conversionSource: 'Federal Reserve US'
};

export const itemEUR = {
    currencySymbol: 'EUR',
    currencyValue: '20',
    conversionDate: 'Yesterday',
    conversionSource: 'European Central Bank'
};

storiesOf('ConverterItem', module)
  .add('USD Item', () => <ConverterItem {...itemUSD} />)
  .add('EUR Item', () => <ConverterItem {...itemEUR} />)
