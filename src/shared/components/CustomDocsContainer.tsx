import React from 'react';

import { TitleAndVersion } from './TitleAndVersion';

/**
 * Creates a React element wrapper
 *
 * - TitleAndVersion correspond to a custom element that display both the title and the component version
 * - Children correspond to the rest of the story
 *
 * @param {any} props
 * @return {JSX.Element}
 */
export function CustomDocsContainer(props: any): JSX.Element {
  return (
    <>
      <TitleAndVersion context={props.context}></TitleAndVersion>
      {props.children}
    </>
  );
}
