export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export const IS_WINDOW_SAFE = typeof window !== 'undefined';
export const IS_DOCUMENT_SAFE = typeof document !== 'undefined';

export const IS_OVER_DESKTOP_WIDTH = IS_WINDOW_SAFE && window.innerWidth >= 1024;
export const IS_UNDER_MOB_WIDTH = IS_WINDOW_SAFE && window.innerWidth < 1024;
