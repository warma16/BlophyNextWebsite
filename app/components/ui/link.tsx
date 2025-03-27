import {Link, LinkProps} from 'react-router';
import React from 'react';
import importAll from '~/utils/AllImport';

// 定义 SVG 组件类型
type SvgComponent = React.FC<React.SVGProps<SVGSVGElement>>;

const svgs = importAll('./icons') as Record<string, SvgComponent>;

interface SocialLinkProps extends Pick<LinkProps, 'to' | 'target'> {
    onClick?: React.MouseEventHandler;
    svgKey: string;
    className?: string;
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
    svgKey: string;
    onClick?: React.MouseEventHandler;
}

const Icon: React.FC<IconProps> = ({
                                       svgKey,
                                       width = "2em",
                                       height = "2em",
                                       viewBox = "0 0 16 16",
                                       onClick,
                                       ...svgProps
                                   }) => {
    const SvgComponent = svgs[svgKey];

    if (!SvgComponent) {
        console.error(`SVG with key ${svgKey} not found`);
        return null;
    }

    return (
        <SvgComponent
            width={width}
            height={height}
            viewBox={viewBox}
            onClick={onClick}
            {...svgProps}
        />
    );
};

const SocialLink: React.FC<SocialLinkProps> = ({
                                                   to,
                                                   target = "_blank",
                                                   onClick,
                                                   svgKey,
                                                   className
                                               }) => {
    return (
        <Link
            to={to}
            target={target}
            className={`ml-2 flex-shrink-0 hover:text-blue-300 ${className}`}
            onClick={onClick}
        >
            <Icon svgKey={svgKey}/>
        </Link>
    );
};

export default SocialLink;