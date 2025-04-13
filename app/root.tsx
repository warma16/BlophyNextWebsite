import type {LinkDescriptor, LinksFunction} from "react-router";
import {Links, Meta, Outlet, Scripts, ScrollRestoration} from "react-router";
import "./tailwind.css";
import Navbar from "~/components/navbar";
import consoleEgg from "~/utils/ConsoleEgg"

import React from "react";
import {useEffect} from "react";

const backgrounds: { [key: string]: string }[] = [
    {'backgrounds/close_to_me.png': '雨の音を聞くー'},
    {'backgrounds/virtual_space.png': '青之弧'},
    {'backgrounds/xrtjh.png': 'BGA'},
    {'backgrounds/fengyu.png': '雨の音を聞くー'},
    {'backgrounds/gloria_in_excelsis_deo.png': '雨の音を聞くー'}
];
//获取keys
export const links: LinksFunction = () => {
    const linkss: LinkDescriptor[] = [
        {rel: "preconnect", href: "https://fonts.googleapis.com"},
        {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: "anonymous",
        },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
        },

    ];
    //build preload
    backgrounds.forEach(background => {
        for (const key in background) {
            linkss.push({rel: "preload", href: key, as: "image"});
        }
    })
    //build preload end
    return linkss;
}

export function Layout({children}: { children: React.ReactNode }) {
    
    consoleEgg()
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    const currentBackground = backgrounds[randomIndex]

    return (
        <html lang="zh_CN">
        <head>
            <title>Blophy</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Meta/>
            <Links/>
            <link
                href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&display=swap"
                rel="stylesheet"
            />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100..900&display=swap"
                  rel="stylesheet"/>
        </head>
        <body className="flex flex-col min-h-screen">
        <Navbar backgroundSrc={`${Object.keys(currentBackground)[0]}`}/>
        <main className="flex-grow">
            <div className="bg-center bg-cover  bg-fixed overflow-x-hidden" style={{
                backgroundImage: `url(${Object.keys(currentBackground)[0]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: -1,
            }}>
                <Outlet/>
                <div
                    className="fixed top-h bottom-0 m-4 text-center z-10 whitespace-nowrap text-gray-200 lg:text-gray-600"
                >
                    Iss: {Object.values(currentBackground)[0]}
                </div>
            </div>

        </main>
        <ScrollRestoration/>
        <Scripts/>
        </body>
        </html>
    );
}

export default function App() {
    return <Outlet/>;
}
