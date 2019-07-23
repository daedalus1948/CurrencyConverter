import React from 'react';
import { Provider } from 'react-redux';

import { ConverterBoardContainerRedux } from '../../modules/Converter/components/ConverterBoard/export.js';

import store from '../../store/export.js';
import styles from './App.module.scss';

const App = () => {
    return (
        <Provider store={store}>
            <div className={styles.App}>
                <ConverterBoardContainerRedux />
            </div>
        </Provider>
    );
}

export default App;