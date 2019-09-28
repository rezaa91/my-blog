export function getCsrfToken () {
  return typeof document !== 'undefined' && document.querySelector('meta[name="csrf-token"]') ?
    document.querySelector('meta[name="csrf-token"]').content :
    null;
}
