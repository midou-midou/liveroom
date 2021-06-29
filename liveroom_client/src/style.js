import { createGlobalStyle } from 'styled-components';
export const GlobalStyled = createGlobalStyle`
    @font-face {font-family: "iconfont";
        src: url('./iconfont.eot?t=1581173814471'); /* IE9 */
        src: url('./iconfont.eot?t=1581173814471#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
        url('./iconfont.woff?t=1581173814471') format('woff'),
        url('./iconfont.ttf?t=1581173814471') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
        url('./iconfont.svg?t=1581173814471#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .icon {
        width: 1.5em;
        height: 1.5em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
    .icon-edit-title {
        width: 2.2em;
        height: 2.2em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
    .icon-panel-btn {
        width: 2.2em;
        height: 2.2em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
    .icon-control-span {
        width: 2.2em;
        height: 2.2em;
        margin: 0 1px;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
    .icon-down-arrow{
        width: 30px;
        height: 30px;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
`;