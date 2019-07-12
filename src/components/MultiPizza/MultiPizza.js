import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MultiPizza extends React.PureComponent {
    render() {
        return (
            <div>
                component
            </div>
        )
    }
}

MultiPizza.propTypes = {
    images: PropTypes.array.isRequired,
};

export default MultiPizza;
