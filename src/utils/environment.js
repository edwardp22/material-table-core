export function isDevelopmentEnvironment() {
  return globalThis.process?.env?.NODE_ENV !== 'production';
}
