// === Import : NPM
import { ReactElement } from 'react';
import { render as testRender, RenderOptions } from '@testing-library/react';

export const render = (ui: ReactElement, options?: RenderOptions) =>
  testRender(ui, options);

export const getStyleFromElement = (
  element: Element | null,
  attributes: string[]
): { [k: string]: any } => {
  if (!element) return {};
  const style = getComputedStyle(element);
  const attrObj: { [k: string]: any } = {};

  return attributes.reduce((obj, attr: any) => {
    obj[attr] = style[attr] || style.getPropertyValue(attr) || undefined;
    return obj;
  }, attrObj);
};
