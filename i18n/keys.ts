export type KeyType = (typeof KEYS)[keyof typeof KEYS];

export const KEYS = {
  bar: 'bar',
  foo: 'foo',
  baz: 'baz',
} as const;
