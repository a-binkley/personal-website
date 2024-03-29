import CSS from 'csstype';

import './AccentTab.css';

type TabProps = { corner: 'NW' | 'SE', desktopOnly: boolean };

export function AccentTab(props: TabProps) {
    return (
        <img className={props.desktopOnly ? 'desktop' : ''} src='img/TealTab.png' alt='' style={tabStyleFromProps(props)}/>
    );
}

export function tabStyleFromProps(props: TabProps): CSS.Properties {
    if (props.corner === 'NW') return {};

    const transformSE = 'rotate(180deg) scale(0.5) translate(-50%, -50%)';
    return {  // If in SE corner, rotate, scale, and translate
        ['MozTransform' as string]: transformSE,  // Firefox
        ['MsTransform' as string]: transformSE,  // Internet Explorer
        ['OTransform' as string]: transformSE,  // Opera
        ['WebkitTransform' as string]: transformSE,  // Chrome, Safari, iOS, & Android
        transform: transformSE,   /* Standard syntax */
        bottom: 0,
        right: 0
    };
}
