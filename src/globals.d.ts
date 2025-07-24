/// <reference types="react" />

import type * as React from "react";

declare global {
  // Make React available globally
  const React: typeof import("react");

  // Also declare the JSX namespace
  namespace JSX {
    interface IntrinsicElements extends React.JSX.IntrinsicElements {}
    interface Element extends React.JSX.Element {}
    interface ElementClass extends React.JSX.ElementClass {}
    interface ElementAttributesProperty
      extends React.JSX.ElementAttributesProperty {}
    interface ElementChildrenAttribute
      extends React.JSX.ElementChildrenAttribute {}
    interface LibraryManagedAttributes<C, P>
      extends React.JSX.LibraryManagedAttributes<C, P> {}
    interface IntrinsicAttributes extends React.JSX.IntrinsicAttributes {}
    interface IntrinsicClassAttributes<T>
      extends React.JSX.IntrinsicClassAttributes<T> {}
  }

  interface Window {
    React: typeof import("react");
  }
}

export {};
