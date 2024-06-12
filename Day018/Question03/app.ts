function createObjectWithDynamicKey(key: string, value: string): object {
  return {
    [key]: value
  }
}
console.log(createObjectWithDynamicKey("name", "John",));
console.log(createObjectWithDynamicKey("age", "30"));
console.log(createObjectWithDynamicKey("gender", "male"));