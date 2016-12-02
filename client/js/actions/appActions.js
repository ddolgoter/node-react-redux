export function loadApp() {
  console.log('Load app');
  return {
    type: 'LOAD_APP',
    payload:  'Hello World'
  }
}