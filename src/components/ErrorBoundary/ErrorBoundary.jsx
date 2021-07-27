import React from 'react';
import style from './ErrorBoundary.module.scss';

export class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={style.container}>
          <p className={style.text}>Something wrong :(</p>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}
