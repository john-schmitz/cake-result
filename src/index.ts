export type OkResult<T> = {
    ok: true
    value: T
  };
  
  export type ErrResult<E> = { ok: false; error: E }
  export type Result<T, E = undefined> = OkResult<T> | ErrResult<E>
  
  export const Ok = <T>(data: T): OkResult<T> => {
    return { ok: true, value: data } as const
  }
  
  export const Err = <E>(error: E): ErrResult<E> => {
    return { ok: false, error } as const
  }
  
  export type InferOkResult<T> = T extends OkResult<infer R> ? OkResult<R> : never;
  export type InferErrResult<T> = T extends ErrResult<infer E> ? ErrResult<E> : never;
  