import { ServiceIdentifier } from 'containers/typings';
import { HttpErrorCallback } from './http.typings';

export const HttpClientType: ServiceIdentifier<HttpClient> = Symbol('HttpClient');

export interface HttpClient<TConfig = any> {
  delete(url: string, config?: TConfig): Promise<any>;
  get(url: string, config?: TConfig): Promise<any>;
  head(url: string, config?: TConfig): Promise<any>;
  options(url: string, config?: TConfig): Promise<any>;
  patch(url: string, data?: any, config?: TConfig): Promise<any>;
  post(url: string, data?: any, config?: TConfig): Promise<any>;
  put(url: string, data?: any, config?: TConfig): Promise<any>;

  setErrorHandler: (cb: HttpErrorCallback) => void;
}