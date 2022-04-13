export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let numCalled = weakMap.get(endpoint) || 0;

  numCalled += 1;

  weakMap.set(endpoint, numCalled);

  if (numCalled >= 5) {
    throw Error('Endpoint load is high');
  }

  return numCalled;
}
