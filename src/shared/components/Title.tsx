import React from 'react';

interface ITitle {
  title: string;
}

/**
 * Creates a React element that displays the component title
 *
 * @param {any} title
 * @return {JSX.Element}
 */
export function Title({ title }: ITitle): JSX.Element {
  let _title: string | string[] = title.split('/');
  _title = _title[_title.length - 1];

  return <h1 className="d-inline-block">{_title}</h1>;
}
