import React from 'react';
import { StyledContainer, StyledError } from './ErrorBoundary.styled';

export interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(): void {
    this.setState({ hasError: true });
  }

  render(): React.ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <StyledContainer>
          <StyledError>Something wrong :(</StyledError>
        </StyledContainer>
      );
    }
    return children;
  }
}
