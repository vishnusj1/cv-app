import React from 'react';
import Header from './Header';
import Main from './Main';
import Side from './Side';

export default class Preview extends React.Component {
  render() {
    const { cv } = this.props;
    return (
      <div className="preview container">
        <div className="resume">
          <Header cv={cv} />
          <hr />
          <div className="body">
            <Main cv={cv} />
            <Side cv={cv} />
          </div>
        </div>
      </div>
    );
  }
}
