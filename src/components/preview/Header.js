import React from 'react';

export default class Header extends React.Component {
  render() {
    const { personal } = this.props.cv;
    return (
      <div className="header">
        <div className="name">{formatName(personal)}</div>
        <div className="title">{personal.title}</div>
      </div>
    );
  }
}

const formatName = (obj) => {
  return obj.fname + ' ' + obj.lname;
};
