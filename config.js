const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';
export const mongoDBcred = 'kat-test:asdf1234';
export const mongoDBserv = 'ds157621.mlab.com:57621';

export default {
  port: env.PORT || 8080
};
