// src/lib/kv.ts
import { R2Bucket } from '@miniflare/r2';

let getDevR2Namespace: () => R2Bucket;

if (import.meta.env.DEV) {
  const { R2Bucket } = await import('@miniflare/r2');
  const { MemoryStorage } = await import('@miniflare/storage-memory');


  let r2Bucket: R2Bucket;

  getDevR2Namespace = () => {
    if (!r2Bucket) {
      const map = new Map();
      map.set('test', 'testVal')
      r2Bucket = new R2Bucket(new MemoryStorage(map));
    }
    return r2Bucket;
  };
}

export const getR2Bucket = (
  platform: QwikCityPlatform,
  R2BindingKey: string
): R2Bucket => {
  if (platform.env) {
    return platform.env[R2BindingKey] as R2Bucket;
  }
  return getDevR2Namespace();
};