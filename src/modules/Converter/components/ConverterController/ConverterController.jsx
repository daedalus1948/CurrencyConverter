import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { ConverterInput } from '../ConverterInput/export.js';
import { ConverterButton } from '../ConverterButton/export.js';
import { ConverterSelect } from '../ConverterSelect/export.js';
import styles from './ConverterController.module.scss';
import withSpeechRecognition from './SpeechRecognition.jsx';

// use reusable hook to extract changeAmount/setAmount/state logic out of this function component!!!!
// check react docs
const ConverterController = ({ setSpeechData, speechData, beginDictation, submitConversion }) => {

    const [currencyTypeList] = useState(['USD', 'EUR', 'CZK']);
    const [currencyType, setCurrencyType] = useState('USD');
    const [inputValid, setInputValid] = useState(false);

    const changeAmount = (value) => {
        setSpeechData(value);
        Number(value) ? setInputValid(true) : setInputValid(false);
    }

    const onTypeEvent = (event) => {
        changeAmount(event.target.value);
    }

    const changeType = (event) => {
        setCurrencyType(event.target.value);
    }

    const submit = () => {
        submitConversion({amount: speechData, type: currencyType});
        setSpeechData('');
        setInputValid(false);
    }

    return (
        <div className={styles.ConverterController}>
            <ConverterInput value={speechData} changeHandler={onTypeEvent} />
            <ConverterSelect currencies={currencyTypeList} value={currencyType} changeHandler={changeType} />
            <ConverterButton disabled={!inputValid} text={'Convert'} clickHandler={submit} />
            <ConverterButton disabled={false} text={'Audio Dictation'} clickHandler={beginDictation} />
        </div>
    );
}

export default withSpeechRecognition(ConverterController);