import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={cn(
        geistSans.variable,
        geistMono.variable,
        "tw-grid tw-min-h-screen tw-grid-rows-[20px_1fr_20px] tw-items-center tw-justify-items-center tw-gap-16 tw-p-8 tw-pb-20 tw-font-[family-name:var(--font-geist-sans)] sm:tw-p-20",
      )}
    >
      <main className="tw-row-start-2 tw-flex tw-flex-col tw-items-center tw-gap-8 sm:tw-items-start">
        <Image
          className="dark:tw-invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="tw-list-inside tw-list-decimal tw-text-center tw-font-[family-name:var(--font-geist-mono)] tw-text-sm sm:tw-text-left">
          <li className="tw-mb-2">
            Get started by editing{" "}
            <code className="tw-rounded tw-bg-black/[.05] tw-px-1 tw-py-0.5 tw-font-semibold dark:tw-bg-white/[.06]">
              src/pages/index.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="tw-flex tw-flex-col tw-items-center tw-gap-4 sm:tw-flex-row">
          <a
            className="tw-flex tw-h-10 tw-items-center tw-justify-center tw-gap-2 tw-rounded-full tw-border tw-border-solid tw-border-transparent tw-bg-foreground tw-px-4 tw-text-sm tw-text-background tw-transition-colors hover:tw-bg-[#383838] sm:tw-h-12 sm:tw-px-5 sm:tw-text-base dark:hover:tw-bg-[#ccc]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:tw-invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="sm:min-w-44 tw-flex tw-h-10 tw-items-center tw-justify-center tw-rounded-full tw-border tw-border-solid tw-border-black/[.08] tw-px-4 tw-text-sm tw-transition-colors hover:tw-border-transparent hover:tw-bg-[#f2f2f2] sm:tw-h-12 sm:tw-px-5 sm:tw-text-base dark:tw-border-white/[.145] dark:hover:tw-bg-[#1a1a1a]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="tw-row-start-3 tw-flex tw-flex-wrap tw-items-center tw-justify-center tw-gap-6">
        <a
          className="tw-flex tw-items-center tw-gap-2 hover:tw-underline hover:tw-underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="tw-flex tw-items-center tw-gap-2 hover:tw-underline hover:tw-underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="tw-flex tw-items-center tw-gap-2 hover:tw-underline hover:tw-underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
