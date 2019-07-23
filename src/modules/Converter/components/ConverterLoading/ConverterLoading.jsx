import React from 'react';
import PropTypes from 'prop-types';

import styles from './ConverterLoading.module.scss';

const ConverterLoading = ({ loadingMessage }) => {
    return (
        <div className={styles.ConverterLoading}>
            {loadingMessage}
        </div>
    );
}

ConverterLoading.propTypes = {
    loadingMessage: PropTypes.string.isRequired,
}

export default ConverterLoading;
