import React, { Component } from 'react';


class ManagerLecView extends Component {
  render() {
    const { lec } = this.props;
    // const { selectLec }= this.props;
    return (
      <div>
        {lec.title}
        
      </div>
    );
  }
}

export default ManagerLecView;