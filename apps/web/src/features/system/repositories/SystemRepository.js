/**
 * Repository interface for system-related calls.
 * (In JS we keep it simple, no TS interface required.)
 */
export function SystemRepository({ getRoot, getHealth }) {
  return { getRoot, getHealth };
}
