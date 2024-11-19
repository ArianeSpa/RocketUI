export type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & string]: `${Key}`;
}[keyof ObjectType & string];

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
