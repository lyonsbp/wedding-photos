import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { getR2Bucket } from "~/lib/r2";
import Hero from "~/components/starter/hero/hero";

export const useWeddingPhotos = routeLoader$(async ({ platform }) => {
  // This code runs only on the server, after every navigation
  const bucket = await getR2Bucket(platform, "WEDDING_PHOTOS");
  const { objects } = await bucket.list();
  return objects.map(object => object.key);
});

export default component$(() => {
  const signal = useWeddingPhotos();

  console.log(signal.value);
  return (
    <main>
      <div class="w-full h-screen block">
        <img
          src="	https://photos.brandonandmitzi.wedding/BrandonandMitzi-109.jpg"
          alt=""
          class="absolute inset-0 -z-10 h-full w-full object-cover"
        />

        <div class="mx-auto max-w-2xl py-48 sm:py-64 lg:py-96">
          <div class="text-center bg-gray-200 see-through rounded-md">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Brandon & Mitzi
            </h1>
          </div>
        </div>
      </div>
      {signal.value.map(photo => (
        <img
          key={photo}
          src={`https://photos.brandonandmitzi.wedding/${photo}`}
          width={1200}
          height={1200}
          class="w-full"
        />
      ))}
    </main>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description"
    }
  ]
};
