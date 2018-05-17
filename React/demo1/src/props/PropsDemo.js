import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PropsDemo extends Component {
  // constructor(props) {
  //   super(props);
  // }


  static defaultProps = {
    title: '默认title'
  };

  // propTypes= {
  //   title: PropTypes.string
  // }
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        {this.props.title}
      </div>
    );
  }
}

export default PropsDemo;