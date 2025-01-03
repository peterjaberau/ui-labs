import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router";

import { GithubIcon, ReactRouterIcon } from "~/components/icons";
import { ThemeSelector } from "~/components/theme-selector";
import { Button } from "~/components/ui/button";

export const meta = () => [{ title: "React Router(v7) x Remix Auth" }];

export default function Home() {
  return (
    <div className="relative flex h-dvh w-full flex-col overflow-hidden bg-background">
      <div className="absolute right-4 top-4 sm:right-6">
        <ThemeSelector />
      </div>
      <main className="container mx-auto flex flex-1 flex-col items-center justify-center overflow-hidden px-8">
        <section className="z-20 flex flex-col items-center justify-center gap-[18px] sm:gap-6">
          <div className="flex items-center gap-4">
            <ReactRouterIcon theme="light" className="block w-28 dark:hidden" />
            <ReactRouterIcon theme="dark" className="hidden w-28 dark:block" />
          </div>
          <div className="text-center text-[clamp(40px,10vw,44px)] font-bold leading-[1.2] tracking-tighter sm:text-[60px]">
            <div className="leading-10 text-primary sm:leading-[3.5rem]">
              React Router v7 <br /> with Remix auth.
            </div>
          </div>
          <p className="text-center text-base font-normal sm:w-[466px] sm:text-[18px] sm:leading-7">
            A production-ready template built with React Router v7, Remix Auth,
            and Drizzle ORM for Cloudflare Workers.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="outline" className="rounded-full" asChild>
              <Link
                to="https://github.com/foxlau/react-router-v7-remix-auth"
                reloadDocument
              >
                <GithubIcon />
                Star us on Github
              </Link>
            </Button>
            <Button className="rounded-full" asChild>
              <Link to="/auth/login">
                Get Started <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
