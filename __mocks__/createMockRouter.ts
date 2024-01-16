import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function createMockRouter(): AppRouterInstance {
  return {
    back: jest.fn(),
    prefetch: jest.fn(),
    push: jest.fn(),
    refresh: jest.fn(),
    replace: jest.fn(),
    forward: jest.fn()
  };
}