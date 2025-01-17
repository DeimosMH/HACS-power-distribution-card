import ResizeObserver from 'resize-observer-polyfill';

/**
 * Installing the ResizeObserver Polyfill
 */
export const installResizeObserver = async (): Promise<void> => {
  if (typeof ResizeObserver !== 'function') {
    window.ResizeObserver = (await import('resize-observer-polyfill')).default;
  }
};

export const DEV_FLAG = '';
