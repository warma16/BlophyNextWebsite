import {useRef, useState} from 'react';
import {Link, useLocation} from '@remix-run/react';
import React from 'react';
import importAll from '~/utils/AllImport';
var arrequire=(name:string)=>{
    return require(name)
}
var svgs= importAll('./icons',arrequire)

interface LinkProps {
  link: string;
  target: string;
  click?: () => void;
  svg: string;
}

interface IconProps {
  svg: string;
  width?: string;
  height?:string;
  viewBox?: string;
  click?: () => void;
}

function icon(props:IconProps){
    const {svg,width="2em",height="2em",viewBox="0 0 16 16",click=()=>{}} = props;
    return (
        <div></div>
    )
}
function link (props:LinkProps) {
    const {link,target,click,svg}= props;
    return (
        <Link
                                    to="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=ZC8-lrN0E651rGLKosBzYr-fPtPh9ntQ&authKey=gDfCU%2BeFTcW6cyJyrnrJbzkuM9oTHTRtBMNICjZuBhzGw3j4%2FMlVAqhI3sVGcWQC&noverify=0&group_code=761741595"
                                    target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 448 512"
                                         className="ml-2 flex-shrink-0 hover:text-blue-300">
                                        <path fill="currentColor"
                                              d="M433.754 420.445c-11.526 1.393-44.86-52.741-44.86-52.741c0 31.345-16.136 72.247-51.051 101.786c16.842 5.192 54.843 19.167 45.803 34.421c-7.316 12.343-125.51 7.881-159.632 4.037c-34.122 3.844-152.316 8.306-159.632-4.037c-9.045-15.25 28.918-29.214 45.783-34.415c-34.92-29.539-51.059-70.445-51.059-101.792c0 0-33.334 54.134-44.859 52.741c-5.37-.65-12.424-29.644 9.347-99.704c10.261-33.024 21.995-60.478 40.144-105.779C60.683 98.063 108.982.006 224 0c113.737.006 163.156 96.133 160.264 214.963c18.118 45.223 29.912 72.85 40.144 105.778c21.768 70.06 14.716 99.053 9.346 99.704"/>
                                    </svg>
                                </Link>
    )

}