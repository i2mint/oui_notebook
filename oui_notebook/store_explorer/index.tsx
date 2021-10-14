import * as React from 'react';
import { render } from 'react-dom';

import StoreExplorer from './StoreExplorer';

export function renderStoreExplorer(
  element: HTMLElement,
  rootKeys: string[],
  varName: string,
  meta: any,
): void {
  console.log('store explorer v0.0.1');
  render(
    <StoreExplorer
      meta={meta}
      rootKeys={rootKeys}
      rootVarName={varName}
    />, element);
}
