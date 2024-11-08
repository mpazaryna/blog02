import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Photos</h1>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/photos/photo1.jpg",
            alt: "Asbury Summer Night",
            href: "https://unsplash.com/photos/m0Rz5DCc4zY",
          },
          {
            src: "/photos/photo2.jpg",
            alt: "Asbury Park",
            href: "https://pixelfed.de/p/paz/628995059852172769",
          },
        ]}
      />
    </section>
  );
}