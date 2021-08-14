import React from 'react';
import style from './ErrorBoundary.module.scss';

export class ErrorBoundary extends React.Component <{children: React.ReactNode}, {hasError: boolean}> {
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
