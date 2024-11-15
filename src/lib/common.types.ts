export type ObjectOf<T> = { [key: string | number]: T };

export type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & string]: `${Key}`;
}[keyof ObjectType & string];

export type DeepNestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & string]: ObjectType[Key] extends object
    ? `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & string];
