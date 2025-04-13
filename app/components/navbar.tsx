import {useRef, useState,useEffect} from 'react';
import {motion} from 'framer-motion';
import useHeaderColor from '~/utils/GetPixels';
import {Link, useLocation} from 'react-router';

export default function Navbar(props: { backgroundSrc?: string }) {
    const [hovered, setHovered] = useState(false); // 控制是否显示 Nova
    const location = useLocation(); // 获取当前的 URL
    const currentPath = location.pathname;
    const pathConfig: { [key: string]: (arg0: string) => boolean } = {
        home: (path: string) => path.split('/')[3] == "home" || path.split('/')[2] == "home",
        about: (path: string) => path.split('/')[3] == "about" || path.split('/')[2] == "about",
        privacy: (path: string) => path.split('/')[3] == "privacy" || path.split('/')[2] == "privacy",
    };


    // 根据路径配置来判断当前路径
    const getLinkClass = (name: string) => pathConfig[name](currentPath) ? 'border-b-2 border-blue-600' : '';

    // 创建 ref 用于 Blophy 和 Nova
    const blophyRef = useRef(null);
    const novaRef = useRef(null);

    // header的ref用来获取header对象

    const headerRef = useRef<HTMLElement>(null);
    const bgSrc=props.backgroundSrc?props.backgroundSrc:"";
    // 拿worker去做，减少白屏时长
    const colorClassn = useHeaderColor(bgSrc,headerRef);
    const [colorClassName,setColorClassName]=useState<string>("");
    const [colorHover,setColorHover]=useState<string>("");

    useEffect(() => {
        let tmp_colorHover=""
        console.log(`change color ${colorClassn}`)
        setColorClassName(colorClassn);
        switch(colorClassName){
            case "text-zinc-50":
                tmp_colorHover="text-zinc-100";
                break;
            default:
                tmp_colorHover="text-gray-500";
                break;
        }
        setColorHover(tmp_colorHover);
        //console.log(colorClassName+colorHover)
        
    },[colorClassn])



    // 监听鼠标悬停
    const handleMouseEnter = () => {
        setHovered(true);  // 鼠标悬停时显示 Nova
    };

    const handleMouseLeave = () => {
        setHovered(false); // 鼠标离开时隐藏 Nova
    };

    return (
        <div>
            <header className="fixed top-0 left-0 w-full bg-opacity-60 backdrop-blur-sm shadow-md z-10" ref={headerRef}>
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div
                        className="relative flex items-center"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <motion.div
                            initial={{x: 0}}
                            whileHover={{x: -5}}
                            transition={{duration: 0.3, delay: 0.3}}
                        >
                            <Link to="/" className={`font-blophy text-2xl ${colorClassName}`} ref={blophyRef}>
                                blophy
                            </Link>
                        </motion.div>

                        {/* Nova 文字区域 */}
                        <motion.div
                            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text"
                            initial={{opacity: 0}}
                            animate={{opacity: hovered ? 1 : 0}}
                            transition={{duration: 0.3, delay: 0.3}}
                            ref={novaRef}
                        >
                            <Link to="/" className="font-blophy">
                                nova
                            </Link>
                        </motion.div>
                    </div>

                    <nav>
                        <ul className="flex space-x-6">
                            <li>
                                <Link
                                    to="/"
                                    className={`${colorClassName} hover:${colorHover} ${getLinkClass("home")} hover:border-b-2 border-blue-300`}
                                >
                                    首页
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className={`${colorClassName} hover:${colorHover} ${getLinkClass("about")} hover:border-b-2 border-blue-300`}
                                >
                                    关于
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/privacy"
                                    className={`text-black hover:text-gray-500 ${getLinkClass("privacy")} hover:border-b-2 border-blue-300`}
                                >
                                    隐私政策
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
}
