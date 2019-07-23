import { connect } from 'react-redux';

import ConverterBoardContainer from './ConverterBoardContainer.jsx';
import ConverterBoard from './ConverterBoard.jsx';
import { getConversionList, getLoading } from '../../store/selectors.js';
import { mockInitThunk } from '../../store/thunks.js';

const mapStateToProps = (state) => ({
    items: getConversionList(state),
    loading: getLoading(state)
});

const mapDispatchToProps = (dispatch) => ({
    service: () => {dispatch(mockInitThunk())}
});
  
const ConverterBoardContainerRedux = connect(mapStateToProps, mapDispatchToProps, null)(ConverterBoardContainer);

export {
    ConverterBoard,
    ConverterBoardContainer,
    ConverterBoardContainerRedux
}