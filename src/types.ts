export type Derived<Base> = Base extends abstract new() => unknown
  ? { prototype: InstanceType<Base> }
  : never;

export type MarkRequired<T, Keys extends keyof T> =
  & Omit<T, Keys>
  & Required<Pick<T, Keys>>;

export type MarkWritable<T, Keys extends keyof T> =
  & Omit<T, Keys>
  & { -readonly [K in Keys]: T[K] };

export type OnlyRequired<T> = {
  [K in keyof T as { [L in keyof T]: K }[K] extends K ? K : never]: T[K];
};
