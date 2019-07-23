import React from 'react';
import PropTypes from 'prop-types';

import styles from './ConverterButton.module.scss';

const ConverterButton = ({ text, clickHandler, disabled }) => {
    return (
        <div className={styles.ConverterButton}>
            <button type="button" onClick={clickHandler} disabled={disabled}>{text}</button>
        </div>
    );
}

ConverterButton.propTypes = {
    clickHandler: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired
}

export default ConverterButton;
