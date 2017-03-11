export type Primitives = string | number | boolean;

/**
 * One-level depth objects with simple values.
 */
export type PlainObject = {
  [key: string]: Primitives | Array<Primitives>;
}
