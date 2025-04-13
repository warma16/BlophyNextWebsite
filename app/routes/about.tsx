import React from 'react';

export default function About() {
    return (
        <div
            className="pt-16 relative flex items-center justify-items-start backdrop-blur-sm overflow-y-hidden"
        >
            <div
                className="pt-16 relative flex items-center justify-items-start backdrop-blur-sm"
            >
                <div className="flex justify-center items-center pl-8 h-screen">
                    {/* 外层正方形 */}
                    <div
                        className="absolute w-64 h-64 border-4 border-gray-300 transform scale-550 rotate-16"></div>
                    <div
                        className="absolute w-56 h-56 border-4 border-gray-300 transform scale-450 rotate-28"></div>
                    <div
                        className="absolute w-48 h-48 border-4 border-gray-300 transform scale-350 rotate-40"></div>
                    <div
                        className="absolute w-40 h-40 border-4 border-gray-300 transform scale-250 rotate-52"></div>

                    <h1 className="font-blophy font-bold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text text-7xl whitespace-nowrap">
                        blophy nova
                    </h1>
                </div>
                <div
                    className="-mt-200 ml-200 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                    <h2 className="text-4xl font-bold mb-4 whitespace-nowrap">Blophy Nova制作组</h2>
                </div>
            </div>
        </div>
    );
}
