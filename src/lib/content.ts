const mockedContent = {};

export function getContent() {
  return new Promise<typeof mockedContent>(resolve =>
    setTimeout(() => resolve(mockedContent), 1000),
  );
}
