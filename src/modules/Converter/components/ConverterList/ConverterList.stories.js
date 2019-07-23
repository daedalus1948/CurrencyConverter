import React from 'react';
import { storiesOf } from '@storybook/react';

import { ConverterList } from './export.js';

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

storiesOf('ConverterList', module)
  .add('Empty ConverterList', () => <ConverterList items={[]} />)
  .add('Loaded ConverterList', () => <ConverterList items={[itemEUR, itemUSD]} />)
