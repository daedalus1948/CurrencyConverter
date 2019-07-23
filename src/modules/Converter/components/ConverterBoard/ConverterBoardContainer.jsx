import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConverterBoard } from '../ConverterBoard/export.js';
import { ConverterLoading } from '../ConverterLoading/export.js';

class ConverterBoardContainer extends Component {
    
    componentDidMount() {
        this.props.service(); // calls thunk
    }

    render() {
        let { items, loading } = this.props;
        return loading ? 
        <ConverterLoading loadingMessage={"Loading Data..."}/> 
        : <ConverterBoard items={items} />
    }
}

ConverterBoardContainer.propTypes = {
    service: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

export default ConverterBoardContainer;
