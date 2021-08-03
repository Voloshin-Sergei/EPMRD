import React from 'react';
import propTypes from 'prop-types';
import style from './ErrorBoundary.module.scss';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className={style.container}>
          <p className={style.text}>Something wrong :(</p>
        </div>
      );
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: propTypes.element.isRequired,
};

export default ErrorBoundary;
