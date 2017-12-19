import * as React from 'react';
import { PAGES } from '../app/app';

const Link = (page) => {
  const { id, title } = page;
  const url = (id) => `#/${id}`;
  return (
    <li key={id}>
      <a href={url(id)}>{title}</a>
    </li>
  );
};

export default function Toc () {
  return (
    <div>
      <h1>
        table of contents
      </h1>
      <ul>
        { PAGES.map(Link)}
      </ul>
    </div>
  );
}
