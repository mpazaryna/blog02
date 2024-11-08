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
          A clean, fast, and lightweight portfolio template built with Next.js,
          Vercel, and Tailwind CSS for optimal performance.
        </p>
        <p>
          Nextfolio includes all the essentials for a stunning portfolio: SEO,
          MDX support, RSS, Atom, & JSON feeds, analytics, tweet & YouTube
          embeds, KaTeX integration, and{" "}
          <a
            target="_blank"
            href="https://github.com/1msirius/Nextfolio?tab=readme-ov-file#features"
          >
            more
          </a>
          .
        </p>
        <p>
          Nextfolio is{" "}
          <a href={socialLinks.github} target="_blank">
            open-source
          </a>{" "}
          and fully customizable, making it easy to add more features.
        </p>
      </div>
    </section>
  );
}
