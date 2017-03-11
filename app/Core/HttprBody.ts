/**
 * Custom body especification for Httpr.
 */
export abstract class HttprBody<T> {
  protected _type: string;
  protected _content: T;

  /**
   * Create a custom body type.
   *
   * @param {string} type - media type value.
   * @param {T} content - raw body content.
   */
  public constructor(type: string, content: T) {
    this._type = type;
    this._content = content;
  }

  /**
   * Retrieve body media type.
   *
   * @return {string} content type header value.
   */
  public get type(): string {
    return this._type;
  }

  /**
   * Retrieve raw body content.
   *
   * @return {T} body content.
   */
  public get content(): T {
    return this._content;
  }

  /**
   * Serialize function for body content.
   *
   * @returns {string} serialized body.
   */
  public abstract toString(): string;
}
