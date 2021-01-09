import React from 'react';
import TestComponent from './TestComponent';
import { TestComponentProps } from './TestComponent.types';

export default {
  title: 'TestComponent',
};

export const Primary = (): React.ReactElement<TestComponentProps> => (
  <TestComponent theme="primary" />
);

export const Secondary = (): React.ReactElement<TestComponentProps> => (
  <TestComponent theme="secondary" />
);
