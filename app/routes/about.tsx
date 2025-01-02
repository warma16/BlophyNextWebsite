import React, {useEffect, useState} from 'react';

export default function About() {
    const backgrounds: { [key: string]: string }[] = [
        {'url(backgrounds/close_to_me.png)': '雨の音を聞くー'},
        {'url(backgrounds/virtual_space.png)': '青之弧'},
        {'url(backgrounds/xrtjh.png)': 'BGA'},
        {'url(backgrounds/fengyu.png)': '雨の音を聞くー'},
    ];
    const [currentBackground, setCurrentBackground] = useState<{ [key: string]: string }>({'': ''});
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * backgrounds.length);
        setCurrentBackground(backgrounds[randomIndex]);
    }, []);
    return (
        <div
            className="bg-center bg-cover"
            style={{
                backgroundImage: Object.keys(currentBackground)[0],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: -1,
            }}
        >
            <div
                className="pt-16 relative flex items-center justify-items-start backdrop-blur-sm overflow-y-hidden"
            >
                <div className="relative flex justify-center items-center pl-8 h-screen">
                    {/* 外层正方形 */}
                    <div className="absolute w-64 h-64 border-4 border-gray-300 transform scale-550 rotate-16"></div>
                    <div className="absolute w-56 h-56 border-4 border-gray-300 transform scale-450 rotate-28"></div>
                    <div className="absolute w-48 h-48 border-4 border-gray-300 transform scale-350 rotate-40"></div>
                    <div className="absolute w-40 h-40 border-4 border-gray-300 transform scale-250 rotate-52"></div>

                    <h1 className="font-blophy font-bold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text text-7xl">
                        blophy nova
                    </h1>
                    <div
                        className="absolute top-[10%] left-[300%] transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                        <h2 className="text-4xl font-bold mb-4 whitespace-nowrap">Blophy Nova制作组</h2>
                    </div>
                </div>
                <div
                    className="absolute top-[92%] left-[94%] transform -translate-x-1/2 -translate-y-1/2 text-center z-10 text-gray-600 whitespace-nowrap"
                >
                    Iss: {Object.values(currentBackground)[0]}
                </div>
            </div>
        </div>
    );
}
