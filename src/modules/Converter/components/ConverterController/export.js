import { connect } from 'react-redux';

import ConverterController from './ConverterController.jsx';
import ConverterController2 from './ConverterController2.jsx';

import { newConversion } from '../../store/thunks.js';

const mapDispatchToProps = (dispatch) => ({
    submitConversion: (data) => {dispatch(newConversion(data))}
});
  
const ConverterControllerContainer2 = connect(null, mapDispatchToProps, null)(ConverterController2);

export {
    ConverterController,
    ConverterControllerContainer2
}
