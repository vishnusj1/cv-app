import React from 'react';
export default class Side extends React.Component {
  render() {
    const { email, phone } = this.props.cv.personal;
    return (
      <div className="side">
        <div>
          <h3>Details</h3>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
        <div>
          <h3>Skills</h3>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
        </div>
      </div>
    );
  }
}
