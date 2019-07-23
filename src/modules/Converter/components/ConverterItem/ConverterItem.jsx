import React from 'react';
import PropTypes from 'prop-types';

import styles from './ConverterItem.module.scss';

const ConverterItem = ({conversionSource, conversionDate, currencySymbol, currencyValue}) => {
    return (
        <div className={styles.ConverterItem}>
            <span>{conversionSource}</span>
            <span>{conversionDate}</span>
            <span>{currencySymbol}</span>
            <span>{currencyValue}</span>
        </div>
    );
}

ConverterItem.propTypes = {
    currencySymbol: PropTypes.string.isRequired,
    currencyValue: PropTypes.string.isRequired,
    conversionDate: PropTypes.string.isRequired,
    conversionSource: PropTypes.string.isRequired
}

export default ConverterItem;
