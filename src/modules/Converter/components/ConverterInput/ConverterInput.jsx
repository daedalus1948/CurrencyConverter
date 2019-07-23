import React from 'react';
import PropTypes from 'prop-types';

import styles from './ConverterInput.module.scss';

const ConverterInput = ({value, changeHandler}) => {
    return (
        <div className={styles.ConverterInput}>
            <input type='text' placeholder='Please specify the amount' value={value} onChange={changeHandler} />
        </div>
    );
}

ConverterInput.propTypes = {
    value: PropTypes.string.isRequired,
    changeHandler: PropTypes.func.isRequired
}

export default ConverterInput;