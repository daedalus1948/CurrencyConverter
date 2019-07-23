import React from 'react';
import PropTypes from 'prop-types';

import { ConverterList } from '../ConverterList/export.js';
import { ConverterControllerContainer, ConverterControllerContainer2 } from '../ConverterController/export.js';
import styles from './ConverterBoard.module.scss';

const ConverterBoard = ({ items }) => {
    return (
        <div className={styles.ConverterBoard}>
            <div className={styles.ConverterHeader}>CurrencyConverter</div>
            <ConverterList items={ items }/>
            <ConverterControllerContainer2 />
        </div>
    );
}

ConverterBoard.propTypes = {
    items: PropTypes.array.isRequired
}

export default ConverterBoard;


