import React from 'react';
import PropTypes from 'prop-types';

import { ConverterItem } from '../ConverterItem/export.js';
import styles from './ConverterList.module.scss';

const ConverterList = ({items}) => {
    return (
        <div className={styles.ConverterList}>
            {items.map((item) => <ConverterItem key={Math.random().toString(36).substr(2, 5)} conversionSource={item.conversionSource} conversionDate={item.conversionDate} currencySymbol={item.currencySymbol} currencyValue={item.currencyValue} />)}
        </div>
    );
}

ConverterList.propTypes = {
    items: PropTypes.array.isRequired
}

export default ConverterList;
