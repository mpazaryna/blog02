import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Portfolio, made simple!
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I develop thoughtful applications, capture quiet moments through photography, and guide others in finding balance through yoga. 
          My work seeks to blend technology with mindfulness, creating space for both innovation and stillness.
        </p>
      </div>
    </section>
  );
}
