import React from 'react';
import PropTypes from 'prop-types';

import styles from './ConverterSelect.module.scss';

const ConverterSelect = ({ value, changeHandler, currencies }) => {
    return (
        <div className={styles.ConverterSelect}>
            <select type='text' value={value} placeholder='Please specify the amount' onChange={changeHandler}>
                {currencies.map((currencyType)=><option key={Math.random().toString(36).substr(2, 5)} value={currencyType}>{currencyType}</option>)}
            </select>
        </div>
    );
}

ConverterSelect.propTypes = {
    value: PropTypes.string.isRequired,
    changeHandler: PropTypes.func.isRequired,
    currencies: PropTypes.array.isRequired
}

export default ConverterSelect;

