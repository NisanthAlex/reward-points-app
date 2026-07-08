const isDevelopment = import.meta.env.DEV;

export const logger = {
  info: (...messages) => {
    if (isDevelopment) {
      console.info(...messages);
    }
  },

  warn: (...messages) => {
    if (isDevelopment) {
      console.warn(...messages);
    }
  },

  error: (...messages) => {
    if (isDevelopment) {
      console.error(...messages);
    }
  },
};