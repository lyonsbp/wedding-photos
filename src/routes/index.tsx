import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { getR2Bucket } from "~/lib/r2";

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
    <>
      {signal.value.map(photo => (
        <img
          key={photo}
          src={`https://photos.brandonandmitzi.wedding/${photo}`}
          width={1200}
          height={1200}
        />
      ))}
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>
    </>
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
