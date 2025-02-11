import type {MetaFunction} from "@remix-run/node";
import {Link} from "@remix-run/react";
import React, {useEffect, useState} from "react";

export const meta: MetaFunction = () => {
    return [
        {title: "Blophy NOVA"},
        {name: "Blophy", content: "Blophy NOVA"},
    ];
};

export default function Page() {
    const backgrounds: { [key: string]: string }[] = [
        {'url(backgrounds/close_to_me.png)': '雨の音を聞くー'},
        {'url(backgrounds/virtual_space.png)': '青之弧'},
        {'url(backgrounds/xrtjh.png)': 'BGA'},
        {'url(backgrounds/fengyu.png)': '雨の音を聞くー'},
        {'url(backgrounds/gloria_in_excelsis_deo.png)': '雨の音を聞くー'}
    ];
    const [currentBackground, setCurrentBackground] = useState<{ [key: string]: string }>({'': ''});
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * backgrounds.length);
        setCurrentBackground(backgrounds[randomIndex]);
    }, []);
    return (
        <div
            className="bg-center bg-cover  bg-fixed overflow-x-hidden"
            style={{
                backgroundImage: Object.keys(currentBackground)[0],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: -1,
            }}
        >
            <div
                className="mt-16 relative flex items-center justify-items-center backdrop-blur-sm overflow-y-hidden md:justify-start"
            >
                <div className="flex justify-center items-center pl-8 h-screen">
                    {/* 外层正方形 */}
                    <div className="absolute w-64 h-64 border-4 border-gray-300 transform scale-550 rotate-16"></div>
                    <div className="absolute w-56 h-56 border-4 border-gray-300 transform scale-450 rotate-28"></div>
                    <div className="absolute w-48 h-48 border-4 border-gray-300 transform scale-350 rotate-40"></div>
                    <div className="absolute w-40 h-40 border-4 border-gray-300 transform scale-250 rotate-52"></div>

                    <h1 className="font-blophy font-bold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text text-7xl whitespace-nowrap">
                        blophy nova
                    </h1>
                </div>
                <div
                    className="-mt-160 ml-200 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                    <h2 className="text-4xl font-bold mb-4">关注我们</h2>
                    <div className="flex justify-start space-x-4">
                        <Link to="https://space.bilibili.com/445582135" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 512 512"
                                 className="hover:text-blue-500">
                                <path fill="currentColor"
                                      d="M488.6 104.1c16.7 18.1 24.4 39.7 23.3 65.7v202.4c-.4 26.4-9.2 48.1-26.5 65.1c-17.2 17-39.1 25.9-65.5 26.7H92.02c-26.45-.8-48.21-9.8-65.28-27.2C9.682 419.4.767 396.5 0 368.2V169.8c.767-26 9.682-47.6 26.74-65.7C43.81 87.75 65.57 78.77 92.02 78h29.38L96.05 52.19c-5.75-5.73-8.63-13-8.63-21.79c0-8.8 2.88-16.06 8.63-21.797C101.8 2.868 109.1 0 117.9 0q13.2 0 21.9 8.603L213.1 78h88l74.5-69.397C381.7 2.868 389.2 0 398 0q13.2 0 21.9 8.603c5.7 5.737 8.6 12.997 8.6 21.797c0 8.79-2.9 16.06-8.6 21.79L394.6 78h29.3c26.4.77 48 9.75 64.7 26.1m-38.8 69.7c-.4-9.6-3.7-17.4-10.7-23.5c-5.2-6.1-14-9.4-22.7-9.8H96.05c-9.59.4-17.45 3.7-23.58 9.8c-6.14 6.1-9.4 13.9-9.78 23.5v194.4c0 9.2 3.26 17 9.78 23.5s14.38 9.8 23.58 9.8H416.4c9.2 0 17-3.3 23.3-9.8s9.7-14.3 10.1-23.5zm-264.3 42.7c6.3 6.3 9.7 14.1 10.1 23.2V273c-.4 9.2-3.7 16.9-9.8 23.2c-6.2 6.3-14 9.5-23.6 9.5s-17.5-3.2-23.6-9.5s-9.4-14-9.8-23.2v-33.3c.4-9.1 3.8-16.9 10.1-23.2s13.2-9.6 23.3-10c9.2.4 17 3.7 23.3 10m191.5 0c6.3 6.3 9.7 14.1 10.1 23.2V273c-.4 9.2-3.7 16.9-9.8 23.2s-14 9.5-23.6 9.5s-17.4-3.2-23.6-9.5c-7-6.3-9.4-14-9.7-23.2v-33.3c.3-9.1 3.7-16.9 10-23.2s14.1-9.6 23.3-10c9.2.4 17 3.7 23.3 10"/>
                            </svg>
                        </Link>
                        <Link to="https://www.taptap.cn/app/716901">
                            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 48 48"
                                 className="ml-2 -mt-1.5 flex-shrink-0 hover:text-[#00d9c5]">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      d="M34.824 18.885c.306-.352.872-.698 1.301-.902c2.152-1.02 4.973-.41 6.378 1.554c1.658 2.319 1.143 5.718-.77 7.73c-1.61 1.694-3.976 2.512-6.274 2.574c-.015.986.073 1.979-.025 2.959c-.077.77-.89 1.138-1.606 1.159c-.81.023-1.62.27-2.424.196c-.619-.057-.822-.748-.813-1.32c.063-4.16-.064-8.322-.012-12.482c.012-.958-.35-1.212-.707-1.331c1.057-1.002 2.88-1.17 4.217-.661c.246.093.546.341.735.524m-6.276 1.036c.008 2.521-.017 5.51.012 7.564c.016 1.098.417 1.156.726 1.343c-1.098.938-2.801 1.124-4.108.694c-.345-.113-.551-.234-.843-.585c-.125-.006.01.041-.412.383c-1.8 1.455-4.912 1.352-6.697-.345c-1.687-1.604-1.97-4.24-1.136-6.327c.741-1.915 2.421-3.353 4.335-4.027c2.207-.825 4.696-.825 6.933-.114c.61.217 1.22.702 1.19 1.414M11.306 30.862c.69-.036 1.41-.034 2.053-.3c.69-.285.764-1.084.764-1.753V18.725c1.06-.12 2.136-.138 3.182-.341c.764-.149 1.064-.997 1.004-1.716c-.053-.638.093-1.298-.05-1.921c-.146-.637-.88-.73-1.459-.661c-2.956.349-5.921.619-8.887.864c-.852.07-1.982-.15-2.212-1.119c-1.071 1.127-1.544 2.921-.926 4.371c.407.956 1.525 1.22 2.497 1.194c.982-.025 1.78-.254 1.78-.024c-.004 3.567-.031 7.134.005 10.7c.003.249.15.481.387.66s.864.183 1.862.13m25.086-9.737c-.587.304-.905.96-.928 1.601c-.027.445-.008.916-.013 1.374c0 .745-.003 1.49.001 2.234c.015.22.244.346.446.31c.703-.06 1.303-.523 1.747-1.044c.787-.954 1.094-2.279.842-3.486c-.11-.56-.559-1.055-1.136-1.134a1.5 1.5 0 0 0-.96.145m-13.637 5.589c.59-.297.905-.954.927-1.593c-.004-.7-.001-1.43-.002-2.142c-.004-.5.009-1-.006-1.5c-.051-.285-.394-.323-.624-.257c-.756.165-1.375.717-1.798 1.345a4.24 4.24 0 0 0-.6 3.158c.109.561.561 1.056 1.14 1.134c.326.058.669.008.963-.146"/>
                            </svg>
                        </Link>
                        <Link
                            to="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=ZC8-lrN0E651rGLKosBzYr-fPtPh9ntQ&authKey=gDfCU%2BeFTcW6cyJyrnrJbzkuM9oTHTRtBMNICjZuBhzGw3j4%2FMlVAqhI3sVGcWQC&noverify=0&group_code=761741595"
                            target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 448 512"
                                 className="ml-2 flex-shrink-0 hover:text-blue-300">
                                <path fill="currentColor"
                                      d="M433.754 420.445c-11.526 1.393-44.86-52.741-44.86-52.741c0 31.345-16.136 72.247-51.051 101.786c16.842 5.192 54.843 19.167 45.803 34.421c-7.316 12.343-125.51 7.881-159.632 4.037c-34.122 3.844-152.316 8.306-159.632-4.037c-9.045-15.25 28.918-29.214 45.783-34.415c-34.92-29.539-51.059-70.445-51.059-101.792c0 0-33.334 54.134-44.859 52.741c-5.37-.65-12.424-29.644 9.347-99.704c10.261-33.024 21.995-60.478 40.144-105.779C60.683 98.063 108.982.006 224 0c113.737.006 163.156 96.133 160.264 214.963c18.118 45.223 29.912 72.85 40.144 105.778c21.768 70.06 14.716 99.053 9.346 99.704"/>
                            </svg>
                        </Link>
                        <Link to="https://github.com/BlophyNova">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2.3em" height="2.3em" viewBox="0 0 24 24"
                                 className="ml-2 flex-shrink-0 hover:text-gray-500">
                                <path fill="currentColor"
                                      d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.64 3.64 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2 2 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.1 2.1 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.9 3.9 0 0 1 1.025-2.688a3.6 3.6 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.43 9.43 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.6 3.6 0 0 1 .1 2.65a3.87 3.87 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.562 4.937a2.37 2.37 0 0 1 .674 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247"/>
                            </svg>
                        </Link>
                        <Link to="mailto:support@blophy.net">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2.2em" height="2.2em" viewBox="0 0 24 24"
                                 className="ml-2 flex-shrink-0 hover:text-gray-500">
                                <g fill="none">
                                    <path fill="currentColor"
                                          d="M3 5V4a1 1 0 0 0-1 1zm18 0h1a1 1 0 0 0-1-1zM3 6h18V4H3zm17-1v12h2V5zm-1 13H5v2h14zM4 17V5H2v12zm1 1a1 1 0 0 1-1-1H2a3 3 0 0 0 3 3zm15-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3z"/>
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="m3 5l9 9l9-9"/>
                                </g>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div
                    className="-mt-35 transform -translate-x-150/100 -translate-y-1/2 text-center z-10">
                    <h2 className="relative text-4xl font-bold mb-4 -left-[12%]">下载</h2>
                    <div className="relative justify-center items-center space-x-4 left-[15%]">
                        <div className="flex -ml-2">
                            <Link to="https://www.taptap.cn/app/716901">
                                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 48 48"
                                     className="ml-2 mt-1 flex-shrink-0 hover:text-[#00d9c5]">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          d="M34.824 18.885c.306-.352.872-.698 1.301-.902c2.152-1.02 4.973-.41 6.378 1.554c1.658 2.319 1.143 5.718-.77 7.73c-1.61 1.694-3.976 2.512-6.274 2.574c-.015.986.073 1.979-.025 2.959c-.077.77-.89 1.138-1.606 1.159c-.81.023-1.62.27-2.424.196c-.619-.057-.822-.748-.813-1.32c.063-4.16-.064-8.322-.012-12.482c.012-.958-.35-1.212-.707-1.331c1.057-1.002 2.88-1.17 4.217-.661c.246.093.546.341.735.524m-6.276 1.036c.008 2.521-.017 5.51.012 7.564c.016 1.098.417 1.156.726 1.343c-1.098.938-2.801 1.124-4.108.694c-.345-.113-.551-.234-.843-.585c-.125-.006.01.041-.412.383c-1.8 1.455-4.912 1.352-6.697-.345c-1.687-1.604-1.97-4.24-1.136-6.327c.741-1.915 2.421-3.353 4.335-4.027c2.207-.825 4.696-.825 6.933-.114c.61.217 1.22.702 1.19 1.414M11.306 30.862c.69-.036 1.41-.034 2.053-.3c.69-.285.764-1.084.764-1.753V18.725c1.06-.12 2.136-.138 3.182-.341c.764-.149 1.064-.997 1.004-1.716c-.053-.638.093-1.298-.05-1.921c-.146-.637-.88-.73-1.459-.661c-2.956.349-5.921.619-8.887.864c-.852.07-1.982-.15-2.212-1.119c-1.071 1.127-1.544 2.921-.926 4.371c.407.956 1.525 1.22 2.497 1.194c.982-.025 1.78-.254 1.78-.024c-.004 3.567-.031 7.134.005 10.7c.003.249.15.481.387.66s.864.183 1.862.13m25.086-9.737c-.587.304-.905.96-.928 1.601c-.027.445-.008.916-.013 1.374c0 .745-.003 1.49.001 2.234c.015.22.244.346.446.31c.703-.06 1.303-.523 1.747-1.044c.787-.954 1.094-2.279.842-3.486c-.11-.56-.559-1.055-1.136-1.134a1.5 1.5 0 0 0-.96.145m-13.637 5.589c.59-.297.905-.954.927-1.593c-.004-.7-.001-1.43-.002-2.142c-.004-.5.009-1-.006-1.5c-.051-.285-.394-.323-.624-.257c-.756.165-1.375.717-1.798 1.345a4.24 4.24 0 0 0-.6 3.158c.109.561.561 1.056 1.14 1.134c.326.058.669.008.963-.146"/>
                                </svg>
                            </Link>
                            <div className="pt-4 px-0.5 whitespace-nowrap">Taptap现已开启预约</div>
                        </div>
                        <div className="flex pt-2">
                            <Link
                                to="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=ZC8-lrN0E651rGLKosBzYr-fPtPh9ntQ&authKey=gDfCU%2BeFTcW6cyJyrnrJbzkuM9oTHTRtBMNICjZuBhzGw3j4%2FMlVAqhI3sVGcWQC&noverify=0&group_code=761741595"
                                target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em"
                                     viewBox="0 0 448 512"
                                     className="ml-2 flex-shrink-0 hover:text-blue-300">
                                    <path fill="currentColor"
                                          d="M433.754 420.445c-11.526 1.393-44.86-52.741-44.86-52.741c0 31.345-16.136 72.247-51.051 101.786c16.842 5.192 54.843 19.167 45.803 34.421c-7.316 12.343-125.51 7.881-159.632 4.037c-34.122 3.844-152.316 8.306-159.632-4.037c-9.045-15.25 28.918-29.214 45.783-34.415c-34.92-29.539-51.059-70.445-51.059-101.792c0 0-33.334 54.134-44.859 52.741c-5.37-.65-12.424-29.644 9.347-99.704c10.261-33.024 21.995-60.478 40.144-105.779C60.683 98.063 108.982.006 224 0c113.737.006 163.156 96.133 160.264 214.963c18.118 45.223 29.912 72.85 40.144 105.778c21.768 70.06 14.716 99.053 9.346 99.704"/>
                                </svg>
                            </Link>
                            <div className="pt-1 px-1 whitespace-nowrap">游戏本体在QQ群中下载</div>
                        </div>
                        <div className="flex pt-2">
                            <Link to="https://github.com/BlophyNova/BlophyNovaEdit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2.3em" height="2.3em"
                                     viewBox="0 0 24 24"
                                     className="ml-2 flex-shrink-0 hover:text-gray-500">
                                    <path fill="currentColor"
                                          d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.64 3.64 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2 2 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.1 2.1 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.9 3.9 0 0 1 1.025-2.688a3.6 3.6 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.43 9.43 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.6 3.6 0 0 1 .1 2.65a3.87 3.87 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.562 4.937a2.37 2.37 0 0 1 .674 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247"/>
                                </svg>
                            </Link>
                            <div className="pt-1.5 px-1 whitespace-nowrap">BlophyNova Edit(制谱器)</div>
                        </div>
                        <div className="flex pt-2">
                            <Link to="https://github.com/MojaveHao/mtb-gui">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2.3em" height="2.3em"
                                     viewBox="0 0 24 24"
                                     className="ml-2 flex-shrink-0 hover:text-gray-500">
                                    <path fill="currentColor"
                                          d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.64 3.64 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2 2 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.1 2.1 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.9 3.9 0 0 1 1.025-2.688a3.6 3.6 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.43 9.43 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.6 3.6 0 0 1 .1 2.65a3.87 3.87 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.562 4.937a2.37 2.37 0 0 1 .674 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247"/>
                                </svg>
                            </Link>
                            <div className="pt-1.5 px-1 whitespace-nowrap">从Malody导入BPM List和偏移量</div>
                        </div>
                    </div>
                </div>
                <div
                    className="transform -translate-x-162/100 -translate-y-1/2 text-center z-10">
                    <h2 className="text-4xl font-bold whitespace-nowrap">来看看我们的最新视频！</h2>
                    <iframe
                        src="https://player.bilibili.com/player.html?isOutside=true&aid=112982017245795&bvid=BV1yqWPeqEV4&cid=500001653489458&p=1&high_quality=1&danmaku=0&autoplay=0"
                        width="500"
                        height="281.25"
                        className="absolute pt-4 -ml-8 border-0"
                        allowFullScreen
                        title="Bilibili Video"
                        sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"
                    />
                </div>
                <div
                    className="mt-200 transform -translate-x-378/100 -translate-y-1/2 text-center z-10">
                    <h2 className="text-4xl font-bold whitespace-nowrap">和最近更新了啥...</h2>
                    <p className="text-2xl whitespace-nowrap mt-2">这个网站...</p>
                </div>
            </div>
            <div
                className="fixed top-h bottom-0 m-4 text-center z-10 text-gray-600 whitespace-nowrap"
            >
                Iss: {Object.values(currentBackground)[0]}
            </div>
        </div>
    );
}
