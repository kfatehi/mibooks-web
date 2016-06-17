import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action-creators';

var PDF = require('react-pdf');

export const Viewer = React.createClass({
  render: function() {
    const {
      url,
      scale,
      page,
      zoomIn,
      zoomOut,
      nextPage,
      prevPage
    } = this.props;
    return (
      <div>
        <div>
          <button onClick={zoomOut}>Zoom Out</button>
          <button onClick={zoomIn}>Zoom In</button>
          <button onClick={prevPage}>Prev Page</button>
          <button onClick={nextPage}>Next Page</button>
        </div>
        <div>
          <PDF file={url} page={page} scale={scale} />
        </div>
      </div>
    );
  }
})

function mapStateToProps(state, props) {
  return {
    url: state.viewer.url,
    page: state.viewer.page,
    scale: state.viewer.scale
  };
}

export const ViewerContainer = connect(
  mapStateToProps,
  actionCreators
)(Viewer);
