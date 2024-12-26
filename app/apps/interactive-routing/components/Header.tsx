import { Link } from "@remix-run/react";
import GithubIcon from "~/apps/interactive-routing/components/icons/GithubIcon";
import MoonIcon from "~/apps/interactive-routing/components/icons/MoonIcon";
import SunIcon from "~/apps/interactive-routing/components/icons/SunIcon";
import RemixLogo from "~/apps/interactive-routing/components/RemixLogo";
import { Autosuggest, TopNavigation, Button } from "@cloudscape-design/components"
import * as React from "react";

type Props = {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
};

function Header({ toggleDarkMode, isDarkMode }: Props) {
  const [value, setValue] = React.useState("")
  const handleEnteredTextLabel = (value: string) => `Entered value: ${value}`


  return (
      <>


        {/*<div id="h">*/}
        {/*  <TopNavigation*/}
        {/*      identity={{*/}
        {/*        href: "#",*/}
        {/*        title: "Title with an href",*/}
        {/*      }}*/}
        {/*      utilities={[*/}
        {/*        {*/}
        {/*          type: "menu-dropdown",*/}
        {/*          text: "Settings",*/}
        {/*          iconName: "settings",*/}
        {/*          items: [*/}
        {/*            {*/}
        {/*              id: "1",*/}
        {/*              text: "Option 1",*/}
        {/*            },*/}
        {/*            {*/}
        {/*              id: "2",*/}
        {/*              text: "Option 2",*/}
        {/*            },*/}
        {/*            {*/}
        {/*              id: "3",*/}
        {/*              text: "Option 3",*/}
        {/*            },*/}
        {/*            {*/}
        {/*              id: "4",*/}
        {/*              text: "Option 4",*/}
        {/*            },*/}
        {/*            {*/}
        {/*              id: "5",*/}
        {/*              text: "Option 5",*/}
        {/*            },*/}
        {/*          ],*/}
        {/*        },*/}
        {/*        {*/}
        {/*          type: "menu-dropdown",*/}
        {/*          text: "John Doe",*/}
        {/*          description: "john.doe@example.com",*/}
        {/*          iconName: "envelope",*/}
        {/*          items: [*/}
        {/*            {type: "button", id: "profile", text: "Profile"},*/}
        {/*            {type: "button", id: "preferences", text: "Preferences"},*/}
        {/*            {type: "button", id: "security", text: "Security"},*/}
        {/*            {*/}
        {/*              type: "menu-dropdown",*/}
        {/*              id: "support-group",*/}
        {/*              text: "Support",*/}
        {/*              items: [*/}
        {/*                {*/}
        {/*                  id: "documentation",*/}
        {/*                  text: "Documentation",*/}
        {/*                  href: "#",*/}
        {/*                  external: true,*/}
        {/*                  externalIconAriaLabel: " (opens in new tab)",*/}
        {/*                },*/}
        {/*                {*/}
        {/*                  id: "feedback",*/}
        {/*                  text: "Feedback",*/}
        {/*                  href: "#",*/}
        {/*                  external: true,*/}
        {/*                  externalIconAriaLabel: " (opens in new tab)",*/}
        {/*                },*/}
        {/*                {id: "support", text: "Customer support"},*/}
        {/*              ],*/}
        {/*            },*/}
        {/*            {type: "button", id: "signout", text: "Sign out"},*/}
        {/*          ] as any[],*/}
        {/*        },*/}
        {/*      ]}*/}
        {/*      search={*/}
        {/*        <Autosuggest*/}
        {/*            onChange={({detail}) => setValue(detail.value)}*/}
        {/*            value={value}*/}
        {/*            options={[*/}
        {/*              {*/}
        {/*                label: "Group 1",*/}
        {/*                options: [*/}
        {/*                  {value: "Suggestion 1"},*/}
        {/*                  {value: "Suggestion 2"},*/}
        {/*                  {value: "Suggestion 3"},*/}
        {/*                  {value: "Suggestion 4"},*/}
        {/*                ],*/}
        {/*              },*/}
        {/*              {*/}
        {/*                label: "Group 2",*/}
        {/*                options: [{value: "Suggestion 5"}, {value: "Suggestion 6"}, {value: "Suggestion 7"}],*/}
        {/*              },*/}
        {/*            ]}*/}
        {/*            ariaLabel="Entered value"*/}
        {/*            placeholder="Enter value"*/}
        {/*            empty="No matches found"*/}
        {/*            enteredTextLabel={handleEnteredTextLabel}*/}
        {/*        />*/}
        {/*      }*/}
        {/*  />*/}
        {/*</div>*/}


        <div
            className="fixed inset-x-0 top-0 h-14 bg-gray-200 border-b-gray-400/25 dark:bg-zinc-800 border-b dark:border-b-zinc-600/25 px-4 flex items-center justify-between z-10">
          <Link className="inline-flex items-end" to="/">
            <RemixLogo/>
            <div
                className="dark:bg-green-900 dark:text-green-200 bg-green-200 text-green-900 rounded-full text-xs font-semibold py-0.5  px-3 ml-1">
              Routing
            </div>
          </Link>
          <div className="inline-flex items-center space-x-3">
            <a
                className="grid place-items-center px-4 rounded-full bg-gray-300 dark:bg-zinc-700 font-semibold py-1"
                href="https://remix-routing-demo.netlify.app"
            >
              Version 1 Demo
            </a>
            <button
                className="w-8 h-8 rounded-full bg-gray-300 dark:bg-zinc-700 grid place-items-center"
                onClick={toggleDarkMode}
            >
              {isDarkMode ? (
                  <SunIcon className="w-5 h-5 "/>
              ) : (
                  <MoonIcon className="w-5 h-5 "/>
              )}
            </button>
            <a
                className="w-8 h-8 rounded-full bg-gray-300 dark:bg-zinc-700 grid place-items-center"
                href="https://github.com/dilums/interactive-remix-routing-v2"
            >
              <GithubIcon className="w-6 h-6 "/>
            </a>
          </div>
        </div>

      </>
  )
      ;
}

export default Header;
