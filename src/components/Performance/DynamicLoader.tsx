"use client";

import { Suspense, ComponentType, lazy, FC, Component } from "react";

interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";
  color?: string;
}

const LoadingSpinner: FC<LoadingSpinnerProps> = ({
  size = "medium",
  color = "#ff561f",
}) => {
  const sizeMap = {
    small: "24px",
    medium: "40px",
    large: "64px",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        minHeight: "100px",
      }}
    >
      <div
        style={{
          width: sizeMap[size],
          height: sizeMap[size],
          border: `3px solid ${color}20`,
          borderTop: `3px solid ${color}`,
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: ComponentType<{ error?: Error }>;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Dynamic component loading error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return <FallbackComponent error={this.state.error} />;
    }

    return this.props.children;
  }
}

const DefaultErrorFallback: FC<{ error?: Error }> = ({ error }) => (
  <div
    style={{
      padding: "20px",
      textAlign: "center",
      color: "#ef4444",
      backgroundColor: "#fef2f2",
      borderRadius: "8px",
      border: "1px solid #fecaca",
    }}
  >
    <h3>Ошибка загрузки компонента</h3>
    <p>Попробуйте обновить страницу</p>
    {process.env.NODE_ENV === "development" && error && (
      <details style={{ marginTop: "10px", textAlign: "left" }}>
        <summary>Детали ошибки</summary>
        <pre style={{ fontSize: "12px", overflow: "auto" }}>
          {error.message}
        </pre>
      </details>
    )}
  </div>
);

interface DynamicLoaderProps {
  children: React.ReactNode;
  loading?: ComponentType;
  error?: ComponentType<{ error?: Error }>;
}

const DynamicLoader: FC<DynamicLoaderProps> = ({
  children,
  loading: LoadingComponent = LoadingSpinner,
  error: ErrorComponent,
}) => {
  return (
    <ErrorBoundary fallback={ErrorComponent}>
      <Suspense fallback={<LoadingComponent />}>{children}</Suspense>
    </ErrorBoundary>
  );
};

// Утилита для создания ленивых компонентов с оптимизацией
export const createLazyComponent = (
  importFunc: () => Promise<{ default: ComponentType }>,
  options?: {
    loading?: ComponentType;
    error?: ComponentType<{ error?: Error }>;
  }
) => {
  const LazyComponent = lazy(importFunc);

  const WrappedComponent: FC = (props) => (
    <DynamicLoader {...options}>
      <LazyComponent {...props} />
    </DynamicLoader>
  );

  return WrappedComponent;
};

export default DynamicLoader;
export { LoadingSpinner, ErrorBoundary };
