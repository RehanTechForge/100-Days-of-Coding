function hobby(...hobbies: string[]) {
  for (let hobby of hobbies) {
    console.log(`I enjoy ${hobby}.`);
  }
}
hobby('Sports', 'Cooking');