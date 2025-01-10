'use client'

import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/Store';

interface Props {
  children: ReactNode;
}

export const ReduxProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};


