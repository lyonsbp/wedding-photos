// src/lib/kv.ts
import { R2Bucket } from '@miniflare/r2';

let getDevR2Namespace: () => Promise<R2Bucket>;

const photos = [
  "BrandonandMitzi-1.jpg",
  "BrandonandMitzi-10.jpg",
  "BrandonandMitzi-100.jpg",
  "BrandonandMitzi-101.jpg",
  "BrandonandMitzi-102.jpg",
  "BrandonandMitzi-103.jpg",
  "BrandonandMitzi-104.jpg",
  "BrandonandMitzi-105.jpg",
  "BrandonandMitzi-106.jpg",
  "BrandonandMitzi-107.jpg",
  "BrandonandMitzi-108.jpg",
  "BrandonandMitzi-109.jpg",
  "BrandonandMitzi-11.jpg",
  "BrandonandMitzi-110.jpg",
  "BrandonandMitzi-111.jpg",
  "BrandonandMitzi-112.jpg",
  "BrandonandMitzi-113.jpg",
  "BrandonandMitzi-114.jpg",
  "BrandonandMitzi-115.jpg",
  "BrandonandMitzi-116.jpg",
  "BrandonandMitzi-117.jpg",
  "BrandonandMitzi-118.jpg",
  "BrandonandMitzi-119.jpg",
  "BrandonandMitzi-12.jpg",
  "BrandonandMitzi-120.jpg",
  "BrandonandMitzi-121.jpg",
  "BrandonandMitzi-122.jpg",
  "BrandonandMitzi-123.jpg",
  "BrandonandMitzi-124.jpg",
  "BrandonandMitzi-125.jpg",
  "BrandonandMitzi-126.jpg",
  "BrandonandMitzi-127.jpg",
  "BrandonandMitzi-128.jpg",
  "BrandonandMitzi-129.jpg",
  "BrandonandMitzi-13.jpg",
  "BrandonandMitzi-130.jpg",
  "BrandonandMitzi-131.jpg",
  "BrandonandMitzi-132.jpg",
  "BrandonandMitzi-133.jpg",
  "BrandonandMitzi-134.jpg",
  "BrandonandMitzi-135.jpg",
  "BrandonandMitzi-136.jpg",
  "BrandonandMitzi-137.jpg",
  "BrandonandMitzi-138.jpg",
  "BrandonandMitzi-139.jpg",
  "BrandonandMitzi-14.jpg",
  "BrandonandMitzi-140.jpg",
  "BrandonandMitzi-141.jpg",
  "BrandonandMitzi-142.jpg",
  "BrandonandMitzi-143.jpg",
  "BrandonandMitzi-144.jpg",
  "BrandonandMitzi-145.jpg",
  "BrandonandMitzi-146.jpg",
  "BrandonandMitzi-147.jpg",
  "BrandonandMitzi-148.jpg",
  "BrandonandMitzi-149.jpg",
  "BrandonandMitzi-15.jpg",
  "BrandonandMitzi-150.jpg",
  "BrandonandMitzi-151.jpg",
  "BrandonandMitzi-152.jpg",
  "BrandonandMitzi-153.jpg",
  "BrandonandMitzi-154.jpg",
  "BrandonandMitzi-155.jpg",
  "BrandonandMitzi-156.jpg",
  "BrandonandMitzi-157.jpg",
  "BrandonandMitzi-158.jpg",
  "BrandonandMitzi-159.jpg",
  "BrandonandMitzi-16.jpg",
  "BrandonandMitzi-160.jpg",
  "BrandonandMitzi-161.jpg",
  "BrandonandMitzi-162.jpg",
  "BrandonandMitzi-163.jpg",
  "BrandonandMitzi-164.jpg",
  "BrandonandMitzi-165.jpg",
  "BrandonandMitzi-166.jpg",
  "BrandonandMitzi-167.jpg",
  "BrandonandMitzi-168.jpg",
  "BrandonandMitzi-169.jpg",
  "BrandonandMitzi-17.jpg",
  "BrandonandMitzi-170.jpg",
  "BrandonandMitzi-171.jpg",
  "BrandonandMitzi-172.jpg",
  "BrandonandMitzi-173.jpg",
  "BrandonandMitzi-174.jpg",
  "BrandonandMitzi-175.jpg",
  "BrandonandMitzi-176.jpg",
  "BrandonandMitzi-177.jpg",
  "BrandonandMitzi-178.jpg",
  "BrandonandMitzi-179.jpg",
  "BrandonandMitzi-18.jpg",
  "BrandonandMitzi-180.jpg",
  "BrandonandMitzi-181.jpg",
  "BrandonandMitzi-182.jpg",
  "BrandonandMitzi-183.jpg",
  "BrandonandMitzi-184.jpg",
  "BrandonandMitzi-185.jpg",
  "BrandonandMitzi-186.jpg",
  "BrandonandMitzi-187.jpg",
  "BrandonandMitzi-188.jpg",
  "BrandonandMitzi-189.jpg",
  "BrandonandMitzi-19.jpg",
  "BrandonandMitzi-190.jpg",
  "BrandonandMitzi-191.jpg",
  "BrandonandMitzi-192.jpg",
  "BrandonandMitzi-193.jpg",
  "BrandonandMitzi-194.jpg",
  "BrandonandMitzi-195.jpg",
  "BrandonandMitzi-196.jpg",
  "BrandonandMitzi-197.jpg",
  "BrandonandMitzi-198.jpg",
  "BrandonandMitzi-199.jpg",
  "BrandonandMitzi-2.jpg",
  "BrandonandMitzi-20.jpg",
  "BrandonandMitzi-200.jpg",
  "BrandonandMitzi-201.jpg",
  "BrandonandMitzi-202.jpg",
  "BrandonandMitzi-203.jpg",
  "BrandonandMitzi-204.jpg",
  "BrandonandMitzi-205.jpg",
  "BrandonandMitzi-206.jpg",
  "BrandonandMitzi-207.jpg",
  "BrandonandMitzi-208.jpg",
  "BrandonandMitzi-209.jpg",
  "BrandonandMitzi-21.jpg",
  "BrandonandMitzi-210.jpg",
  "BrandonandMitzi-212.jpg",
  "BrandonandMitzi-213.jpg",
  "BrandonandMitzi-214.jpg",
  "BrandonandMitzi-215.jpg",
  "BrandonandMitzi-216.jpg",
  "BrandonandMitzi-217.jpg",
  "BrandonandMitzi-218.jpg",
  "BrandonandMitzi-219.jpg",
  "BrandonandMitzi-22.jpg",
  "BrandonandMitzi-220.jpg",
  "BrandonandMitzi-221.jpg",
  "BrandonandMitzi-222.jpg",
  "BrandonandMitzi-223.jpg",
  "BrandonandMitzi-224.jpg",
  "BrandonandMitzi-225.jpg",
  "BrandonandMitzi-226.jpg",
  "BrandonandMitzi-227.jpg",
  "BrandonandMitzi-228.jpg",
  "BrandonandMitzi-229.jpg",
  "BrandonandMitzi-23.jpg",
  "BrandonandMitzi-230.jpg",
  "BrandonandMitzi-231.jpg",
  "BrandonandMitzi-232.jpg",
  "BrandonandMitzi-233.jpg",
  "BrandonandMitzi-234.jpg",
  "BrandonandMitzi-235.jpg",
  "BrandonandMitzi-236.jpg",
  "BrandonandMitzi-24.jpg",
  "BrandonandMitzi-25.jpg",
  "BrandonandMitzi-26.jpg",
  "BrandonandMitzi-27.jpg",
  "BrandonandMitzi-28.jpg",
  "BrandonandMitzi-29.jpg",
  "BrandonandMitzi-3.jpg",
  "BrandonandMitzi-30.jpg",
  "BrandonandMitzi-31.jpg",
  "BrandonandMitzi-32.jpg",
  "BrandonandMitzi-33.jpg",
  "BrandonandMitzi-34.jpg",
  "BrandonandMitzi-35.jpg",
  "BrandonandMitzi-36.jpg",
  "BrandonandMitzi-37.jpg",
  "BrandonandMitzi-38.jpg",
  "BrandonandMitzi-39.jpg",
  "BrandonandMitzi-4.jpg",
  "BrandonandMitzi-40.jpg",
  "BrandonandMitzi-41.jpg",
  "BrandonandMitzi-42.jpg",
  "BrandonandMitzi-43.jpg",
  "BrandonandMitzi-44.jpg",
  "BrandonandMitzi-45.jpg",
  "BrandonandMitzi-46.jpg",
  "BrandonandMitzi-47.jpg",
  "BrandonandMitzi-48.jpg",
  "BrandonandMitzi-49.jpg",
  "BrandonandMitzi-5.jpg",
  "BrandonandMitzi-50.jpg",
  "BrandonandMitzi-51.jpg",
  "BrandonandMitzi-52.jpg",
  "BrandonandMitzi-53.jpg",
  "BrandonandMitzi-54.jpg",
  "BrandonandMitzi-55.jpg",
  "BrandonandMitzi-56.jpg",
  "BrandonandMitzi-57.jpg",
  "BrandonandMitzi-58.jpg",
  "BrandonandMitzi-59.jpg",
  "BrandonandMitzi-6.jpg",
  "BrandonandMitzi-60.jpg",
  "BrandonandMitzi-61.jpg",
  "BrandonandMitzi-62.jpg",
  "BrandonandMitzi-63.jpg",
  "BrandonandMitzi-64.jpg",
  "BrandonandMitzi-65.jpg",
  "BrandonandMitzi-66.jpg",
  "BrandonandMitzi-67.jpg",
  "BrandonandMitzi-68.jpg",
  "BrandonandMitzi-69.jpg",
  "BrandonandMitzi-7.jpg",
  "BrandonandMitzi-70.jpg",
  "BrandonandMitzi-71.jpg",
  "BrandonandMitzi-72.jpg",
  "BrandonandMitzi-73.jpg",
  "BrandonandMitzi-74.jpg",
  "BrandonandMitzi-75.jpg",
  "BrandonandMitzi-76.jpg",
  "BrandonandMitzi-77.jpg",
  "BrandonandMitzi-78.jpg",
  "BrandonandMitzi-79.jpg",
  "BrandonandMitzi-8.jpg",
  "BrandonandMitzi-80.jpg",
  "BrandonandMitzi-81.jpg",
  "BrandonandMitzi-82.jpg",
  "BrandonandMitzi-83.jpg",
  "BrandonandMitzi-84.jpg",
  "BrandonandMitzi-85.jpg",
  "BrandonandMitzi-86.jpg",
  "BrandonandMitzi-87.jpg",
  "BrandonandMitzi-88.jpg",
  "BrandonandMitzi-89.jpg",
  "BrandonandMitzi-9.jpg",
  "BrandonandMitzi-90.jpg",
  "BrandonandMitzi-91.jpg",
  "BrandonandMitzi-92.jpg",
  "BrandonandMitzi-93.jpg",
  "BrandonandMitzi-94.jpg",
  "BrandonandMitzi-95.jpg",
  "BrandonandMitzi-96.jpg",
  "BrandonandMitzi-97.jpg",
  "BrandonandMitzi-98.jpg",
  "BrandonandMitzi-99.jpg"
]

if (import.meta.env.DEV) {
  const { R2Bucket } = await import('@miniflare/r2');
  const { MemoryStorage } = await import('@miniflare/storage-memory');

  let r2Bucket: R2Bucket;

  getDevR2Namespace = async () => {
    if (!r2Bucket) {
      r2Bucket = new R2Bucket(new MemoryStorage());
      for (const photo of photos) {
        await r2Bucket.put(photo, photo)
      }
    }
    return r2Bucket;
  };
}

export const getR2Bucket = async (
  platform: QwikCityPlatform,
  R2BindingKey: string
): Promise<R2Bucket> => {
  if (platform.env) {
    return platform.env[R2BindingKey] as R2Bucket;
  }
  return getDevR2Namespace();
};