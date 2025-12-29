@import"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";@import"https://statics.atenderbem.com/css/custom-devextreme.css";@import"https://statics.atenderbem.com/css/animate.css";@import"https://statics.atenderbem.com/css/custom_animations.css";@import"https://statics.atenderbem.com/css/custom.css";@import"https://unpkg.com/grapesjs@0.21.7/dist/css/grapes.min.css";.geoapify-autocomplete-input {
    outline: none;
    line-height: 36px;
    height: 36px;
    padding: 0 31px 0 7px;
    width: calc(100% - 40px);
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 5px;
    font-size: 14px
}

.geoapify-autocomplete-items {
    position: absolute;
    top: calc(100% + 2px);
    left: 0;
    right: 0;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 2px 10px 2px #0000001a;
    z-index: 99
}

.geoapify-autocomplete-items div {
    padding: 10px;
    cursor: pointer
}

.geoapify-autocomplete-items div:hover,.geoapify-autocomplete-items .active {
    background-color: #0000001a
}

.geoapify-autocomplete-item {
    display: flex;
    flex-direction: row;
    align-items: center
}

.geoapify-autocomplete-item .icon {
    display: inline-block;
    width: 40px;
    height: 24px;
    color: #aaa
}

.geoapify-autocomplete-item .icon.emoji {
    color: unset;
    font-size: 20px;
    opacity: .9
}

.geoapify-close-button {
    position: absolute;
    right: 5px;
    top: 0;
    height: 100%;
    display: none;
    align-items: center
}

.geoapify-close-button.visible {
    display: flex
}

.geoapify-close-button {
    color: #0006;
    cursor: pointer
}

.geoapify-close-button:hover {
    color: #0009
}

.geoapify-autocomplete-items .main-part .non-verified {
    color: #ff4848
}

.geoapify-autocomplete-items .secondary-part {
    margin-left: 10px;
    font-size: small;
    color: #0009
}

.grid-stack {
    position: relative
}

.grid-stack-rtl {
    direction: ltr
}

.grid-stack-rtl>.grid-stack-item {
    direction: rtl
}

.grid-stack-placeholder>.placeholder-content {
    background-color: #0000001a;
    margin: 0;
    position: absolute;
    width: auto;
    z-index: 0!important
}

.grid-stack>.grid-stack-item {
    position: absolute;
    padding: 0;
    top: 0;
    left: 0;
    width: var(--gs-column-width);
    height: var(--gs-cell-height)
}

.grid-stack>.grid-stack-item>.grid-stack-item-content {
    margin: 0;
    position: absolute;
    width: auto;
    overflow-x: hidden;
    overflow-y: auto
}

.grid-stack>.grid-stack-item.size-to-content:not(.size-to-content-max)>.grid-stack-item-content {
    overflow-y: hidden
}

.grid-stack>.grid-stack-item>.grid-stack-item-content,.grid-stack>.grid-stack-placeholder>.placeholder-content {
    top: var(--gs-item-margin-top);
    right: var(--gs-item-margin-right);
    bottom: var(--gs-item-margin-bottom);
    left: var(--gs-item-margin-left)
}

.grid-stack-item>.ui-resizable-handle {
    position: absolute;
    font-size: .1px;
    display: block;
    touch-action: none
}

.grid-stack-item.ui-resizable-autohide>.ui-resizable-handle,.grid-stack-item.ui-resizable-disabled>.ui-resizable-handle {
    display: none
}

.grid-stack-item>.ui-resizable-ne,.grid-stack-item>.ui-resizable-nw,.grid-stack-item>.ui-resizable-se,.grid-stack-item>.ui-resizable-sw {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="%23666" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 20 20"><path d="m10 3 2 2H8l2-2v14l-2-2h4l-2 2"/></svg>');
    background-repeat: no-repeat;
    background-position: center
}

.grid-stack-item>.ui-resizable-ne {
    transform: rotate(45deg)
}

.grid-stack-item>.ui-resizable-sw {
    transform: rotate(45deg)
}

.grid-stack-item>.ui-resizable-nw {
    transform: rotate(-45deg)
}

.grid-stack-item>.ui-resizable-se {
    transform: rotate(-45deg)
}

.grid-stack-item>.ui-resizable-nw {
    cursor: nw-resize;
    width: 20px;
    height: 20px;
    top: var(--gs-item-margin-top);
    left: var(--gs-item-margin-left)
}

.grid-stack-item>.ui-resizable-n {
    cursor: n-resize;
    height: 10px;
    top: var(--gs-item-margin-top);
    left: 25px;
    right: 25px
}

.grid-stack-item>.ui-resizable-ne {
    cursor: ne-resize;
    width: 20px;
    height: 20px;
    top: var(--gs-item-margin-top);
    right: var(--gs-item-margin-right)
}

.grid-stack-item>.ui-resizable-e {
    cursor: e-resize;
    width: 10px;
    top: 15px;
    bottom: 15px;
    right: var(--gs-item-margin-right)
}

.grid-stack-item>.ui-resizable-se {
    cursor: se-resize;
    width: 20px;
    height: 20px;
    bottom: var(--gs-item-margin-bottom);
    right: var(--gs-item-margin-right)
}

.grid-stack-item>.ui-resizable-s {
    cursor: s-resize;
    height: 10px;
    left: 25px;
    bottom: var(--gs-item-margin-bottom);
    right: 25px
}

.grid-stack-item>.ui-resizable-sw {
    cursor: sw-resize;
    width: 20px;
    height: 20px;
    bottom: var(--gs-item-margin-bottom);
    left: var(--gs-item-margin-left)
}

.grid-stack-item>.ui-resizable-w {
    cursor: w-resize;
    width: 10px;
    top: 15px;
    bottom: 15px;
    left: var(--gs-item-margin-left)
}

.grid-stack-item.ui-draggable-dragging>.ui-resizable-handle {
    display: none!important
}

.grid-stack-item.ui-draggable-dragging {
    will-change: left,top
}

.grid-stack-item.ui-resizable-resizing {
    will-change: width,height
}

.ui-draggable-dragging,.ui-resizable-resizing {
    z-index: 10000
}

.ui-draggable-dragging>.grid-stack-item-content,.ui-resizable-resizing>.grid-stack-item-content {
    box-shadow: 1px 4px 6px #0003;
    opacity: .8
}

.grid-stack-animate,.grid-stack-animate .grid-stack-item {
    transition: left .3s,top .3s,height .3s,width .3s
}

.grid-stack-animate .grid-stack-item.grid-stack-placeholder,.grid-stack-animate .grid-stack-item.ui-draggable-dragging,.grid-stack-animate .grid-stack-item.ui-resizable-resizing {
    transition: left 0s,top 0s,height 0s,width 0s
}

.grid-stack>.grid-stack-item[gs-y="0"] {
    top: 0
}

.grid-stack>.grid-stack-item[gs-x="0"] {
    left: 0
}

.swagger-ui {
    color: #3b4151;
    font-family: sans-serif
}

.swagger-ui html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    line-height: 1.15
}

.swagger-ui body {
    margin: 0
}

.swagger-ui article,.swagger-ui aside,.swagger-ui footer,.swagger-ui header,.swagger-ui nav,.swagger-ui section {
    display: block
}

.swagger-ui h1 {
    font-size: 2em;
    margin: .67em 0
}

.swagger-ui figcaption,.swagger-ui figure,.swagger-ui main {
    display: block
}

.swagger-ui figure {
    margin: 1em 40px
}

.swagger-ui hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible
}

.swagger-ui pre {
    font-family: monospace,monospace;
    font-size: 1em
}

.swagger-ui a {
    -webkit-text-decoration-skip: objects;
    background-color: transparent
}

.swagger-ui abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted
}

.swagger-ui b,.swagger-ui strong {
    font-weight: inherit;
    font-weight: bolder
}

.swagger-ui code,.swagger-ui kbd,.swagger-ui samp {
    font-family: monospace,monospace;
    font-size: 1em
}

.swagger-ui dfn {
    font-style: italic
}

.swagger-ui mark {
    background-color: #ff0;
    color: #000
}

.swagger-ui small {
    font-size: 80%
}

.swagger-ui sub,.swagger-ui sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline
}

.swagger-ui sub {
    bottom: -.25em
}

.swagger-ui sup {
    top: -.5em
}

.swagger-ui audio,.swagger-ui video {
    display: inline-block
}

.swagger-ui audio:not([controls]) {
    display: none;
    height: 0
}

.swagger-ui img {
    border-style: none
}

.swagger-ui svg:not(:root) {
    overflow: hidden
}

.swagger-ui button,.swagger-ui input,.swagger-ui optgroup,.swagger-ui select,.swagger-ui textarea {
    font-family: sans-serif;
    font-size: 100%;
    line-height: 1.15;
    margin: 0
}

.swagger-ui button,.swagger-ui input {
    overflow: visible
}

.swagger-ui button,.swagger-ui select {
    text-transform: none
}

.swagger-ui [type=reset],.swagger-ui [type=submit],.swagger-ui button,.swagger-ui html [type=button] {
    -webkit-appearance: button
}

.swagger-ui [type=button]::-moz-focus-inner,.swagger-ui [type=reset]::-moz-focus-inner,.swagger-ui [type=submit]::-moz-focus-inner,.swagger-ui button::-moz-focus-inner {
    border-style: none;
    padding: 0
}

.swagger-ui [type=button]:-moz-focusring,.swagger-ui [type=reset]:-moz-focusring,.swagger-ui [type=submit]:-moz-focusring,.swagger-ui button:-moz-focusring {
    outline: 1px dotted ButtonText
}

.swagger-ui fieldset {
    padding: .35em .75em .625em
}

.swagger-ui legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal
}

.swagger-ui progress {
    display: inline-block;
    vertical-align: baseline
}

.swagger-ui textarea {
    overflow: auto
}

.swagger-ui [type=checkbox],.swagger-ui [type=radio] {
    box-sizing: border-box;
    padding: 0
}

.swagger-ui [type=number]::-webkit-inner-spin-button,.swagger-ui [type=number]::-webkit-outer-spin-button {
    height: auto
}

.swagger-ui [type=search] {
    -webkit-appearance: textfield;
    outline-offset: -2px
}

.swagger-ui [type=search]::-webkit-search-cancel-button,.swagger-ui [type=search]::-webkit-search-decoration {
    -webkit-appearance: none
}

.swagger-ui ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit
}

.swagger-ui details,.swagger-ui menu {
    display: block
}

.swagger-ui summary {
    display: list-item
}

.swagger-ui canvas {
    display: inline-block
}

.swagger-ui [hidden],.swagger-ui template {
    display: none
}

.swagger-ui .debug * {
    outline: 1px solid gold
}

.swagger-ui .debug-white * {
    outline: 1px solid #fff
}

.swagger-ui .debug-black * {
    outline: 1px solid #000
}

.swagger-ui .debug-grid {
    background: transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTRDOTY4N0U2N0VFMTFFNjg2MzZDQjkwNkQ4MjgwMEIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTRDOTY4N0Q2N0VFMTFFNjg2MzZDQjkwNkQ4MjgwMEIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NjcyQkQ3NjY3QzUxMUU2QjJCQ0UyNDA4MTAwMjE3MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NjcyQkQ3NzY3QzUxMUU2QjJCQ0UyNDA4MTAwMjE3MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsBS+GMAAAAjSURBVHjaYvz//z8DLsD4gcGXiYEAGBIKGBne//fFpwAgwAB98AaF2pjlUQAAAABJRU5ErkJggg==) repeat 0 0
}

.swagger-ui .debug-grid-16 {
    background: transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODYyRjhERDU2N0YyMTFFNjg2MzZDQjkwNkQ4MjgwMEIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODYyRjhERDQ2N0YyMTFFNjg2MzZDQjkwNkQ4MjgwMEIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NjcyQkQ3QTY3QzUxMUU2QjJCQ0UyNDA4MTAwMjE3MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NjcyQkQ3QjY3QzUxMUU2QjJCQ0UyNDA4MTAwMjE3MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvCS01IAAABMSURBVHjaYmR4/5+BFPBfAMFm/MBgx8RAGWCn1AAmSg34Q6kBDKMGMDCwICeMIemF/5QawEipAWwUhwEjMDvbAWlWkvVBwu8vQIABAEwBCph8U6c0AAAAAElFTkSuQmCC) repeat 0 0
}

.swagger-ui .debug-grid-8-solid {
    background: #fff url(data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAAAAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzExMSA3OS4xNTgzMjUsIDIwMTUvMDkvMTAtMDE6MTA6MjAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIxMjI0OTczNjdCMzExRTZCMkJDRTI0MDgxMDAyMTcxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIxMjI0OTc0NjdCMzExRTZCMkJDRTI0MDgxMDAyMTcxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjEyMjQ5NzE2N0IzMTFFNkIyQkNFMjQwODEwMDIxNzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjEyMjQ5NzI2N0IzMTFFNkIyQkNFMjQwODEwMDIxNzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAbGhopHSlBJiZBQi8vL0JHPz4+P0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHAR0pKTQmND8oKD9HPzU/R0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0f/wAARCAAIAAgDASIAAhEBAxEB/8QAWQABAQAAAAAAAAAAAAAAAAAAAAYBAQEAAAAAAAAAAAAAAAAAAAIEEAEBAAMBAAAAAAAAAAAAAAABADECA0ERAAEDBQAAAAAAAAAAAAAAAAARITFBUWESIv/aAAwDAQACEQMRAD8AoOnTV1QTD7JJshP3vSM3P//Z) repeat 0 0
}

.swagger-ui .debug-grid-16-solid {
    background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzY3MkJEN0U2N0M1MTFFNkIyQkNFMjQwODEwMDIxNzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzY3MkJEN0Y2N0M1MTFFNkIyQkNFMjQwODEwMDIxNzEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NjcyQkQ3QzY3QzUxMUU2QjJCQ0UyNDA4MTAwMjE3MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NjcyQkQ3RDY3QzUxMUU2QjJCQ0UyNDA4MTAwMjE3MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pve6J3kAAAAzSURBVHjaYvz//z8D0UDsMwMjSRoYP5Gq4SPNbRjVMEQ1fCRDg+in/6+J1AJUxsgAEGAA31BAJMS0GYEAAAAASUVORK5CYII=) repeat 0 0
}

.swagger-ui .border-box,.swagger-ui a,.swagger-ui article,.swagger-ui body,.swagger-ui code,.swagger-ui dd,.swagger-ui div,.swagger-ui dl,.swagger-ui dt,.swagger-ui fieldset,.swagger-ui footer,.swagger-ui form,.swagger-ui h1,.swagger-ui h2,.swagger-ui h3,.swagger-ui h4,.swagger-ui h5,.swagger-ui h6,.swagger-ui header,.swagger-ui html,.swagger-ui input[type=email],.swagger-ui input[type=number],.swagger-ui input[type=password],.swagger-ui input[type=tel],.swagger-ui input[type=text],.swagger-ui input[type=url],.swagger-ui legend,.swagger-ui li,.swagger-ui main,.swagger-ui ol,.swagger-ui p,.swagger-ui pre,.swagger-ui section,.swagger-ui table,.swagger-ui td,.swagger-ui textarea,.swagger-ui th,.swagger-ui tr,.swagger-ui ul {
    box-sizing: border-box
}

.swagger-ui .aspect-ratio {
    height: 0;
    position: relative
}

.swagger-ui .aspect-ratio--16x9 {
    padding-bottom: 56.25%
}

.swagger-ui .aspect-ratio--9x16 {
    padding-bottom: 177.77%
}

.swagger-ui .aspect-ratio--4x3 {
    padding-bottom: 75%
}

.swagger-ui .aspect-ratio--3x4 {
    padding-bottom: 133.33%
}

.swagger-ui .aspect-ratio--6x4 {
    padding-bottom: 66.6%
}

.swagger-ui .aspect-ratio--4x6 {
    padding-bottom: 150%
}

.swagger-ui .aspect-ratio--8x5 {
    padding-bottom: 62.5%
}

.swagger-ui .aspect-ratio--5x8 {
    padding-bottom: 160%
}

.swagger-ui .aspect-ratio--7x5 {
    padding-bottom: 71.42%
}

.swagger-ui .aspect-ratio--5x7 {
    padding-bottom: 140%
}

.swagger-ui .aspect-ratio--1x1 {
    padding-bottom: 100%
}

.swagger-ui .aspect-ratio--object {
    height: 100%;
    inset: 0;
    position: absolute;
    width: 100%;
    z-index: 100
}

@media screen and (min-width: 30em) {
    .swagger-ui .aspect-ratio-ns {
        height:0;
        position: relative
    }

    .swagger-ui .aspect-ratio--16x9-ns {
        padding-bottom: 56.25%
    }

    .swagger-ui .aspect-ratio--9x16-ns {
        padding-bottom: 177.77%
    }

    .swagger-ui .aspect-ratio--4x3-ns {
        padding-bottom: 75%
    }

    .swagger-ui .aspect-ratio--3x4-ns {
        padding-bottom: 133.33%
    }

    .swagger-ui .aspect-ratio--6x4-ns {
        padding-bottom: 66.6%
    }

    .swagger-ui .aspect-ratio--4x6-ns {
        padding-bottom: 150%
    }

    .swagger-ui .aspect-ratio--8x5-ns {
        padding-bottom: 62.5%
    }

    .swagger-ui .aspect-ratio--5x8-ns {
        padding-bottom: 160%
    }

    .swagger-ui .aspect-ratio--7x5-ns {
        padding-bottom: 71.42%
    }

    .swagger-ui .aspect-ratio--5x7-ns {
        padding-bottom: 140%
    }

    .swagger-ui .aspect-ratio--1x1-ns {
        padding-bottom: 100%
    }

    .swagger-ui .aspect-ratio--object-ns {
        height: 100%;
        inset: 0;
        position: absolute;
        width: 100%;
        z-index: 100
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .aspect-ratio-m {
        height:0;
        position: relative
    }

    .swagger-ui .aspect-ratio--16x9-m {
        padding-bottom: 56.25%
    }

    .swagger-ui .aspect-ratio--9x16-m {
        padding-bottom: 177.77%
    }

    .swagger-ui .aspect-ratio--4x3-m {
        padding-bottom: 75%
    }

    .swagger-ui .aspect-ratio--3x4-m {
        padding-bottom: 133.33%
    }

    .swagger-ui .aspect-ratio--6x4-m {
        padding-bottom: 66.6%
    }

    .swagger-ui .aspect-ratio--4x6-m {
        padding-bottom: 150%
    }

    .swagger-ui .aspect-ratio--8x5-m {
        padding-bottom: 62.5%
    }

    .swagger-ui .aspect-ratio--5x8-m {
        padding-bottom: 160%
    }

    .swagger-ui .aspect-ratio--7x5-m {
        padding-bottom: 71.42%
    }

    .swagger-ui .aspect-ratio--5x7-m {
        padding-bottom: 140%
    }

    .swagger-ui .aspect-ratio--1x1-m {
        padding-bottom: 100%
    }

    .swagger-ui .aspect-ratio--object-m {
        height: 100%;
        inset: 0;
        position: absolute;
        width: 100%;
        z-index: 100
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .aspect-ratio-l {
        height:0;
        position: relative
    }

    .swagger-ui .aspect-ratio--16x9-l {
        padding-bottom: 56.25%
    }

    .swagger-ui .aspect-ratio--9x16-l {
        padding-bottom: 177.77%
    }

    .swagger-ui .aspect-ratio--4x3-l {
        padding-bottom: 75%
    }

    .swagger-ui .aspect-ratio--3x4-l {
        padding-bottom: 133.33%
    }

    .swagger-ui .aspect-ratio--6x4-l {
        padding-bottom: 66.6%
    }

    .swagger-ui .aspect-ratio--4x6-l {
        padding-bottom: 150%
    }

    .swagger-ui .aspect-ratio--8x5-l {
        padding-bottom: 62.5%
    }

    .swagger-ui .aspect-ratio--5x8-l {
        padding-bottom: 160%
    }

    .swagger-ui .aspect-ratio--7x5-l {
        padding-bottom: 71.42%
    }

    .swagger-ui .aspect-ratio--5x7-l {
        padding-bottom: 140%
    }

    .swagger-ui .aspect-ratio--1x1-l {
        padding-bottom: 100%
    }

    .swagger-ui .aspect-ratio--object-l {
        height: 100%;
        inset: 0;
        position: absolute;
        width: 100%;
        z-index: 100
    }
}

.swagger-ui img {
    max-width: 100%
}

.swagger-ui .cover {
    background-size: cover!important
}

.swagger-ui .contain {
    background-size: contain!important
}

@media screen and (min-width: 30em) {
    .swagger-ui .cover-ns {
        background-size:cover!important
    }

    .swagger-ui .contain-ns {
        background-size: contain!important
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .cover-m {
        background-size:cover!important
    }

    .swagger-ui .contain-m {
        background-size: contain!important
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .cover-l {
        background-size:cover!important
    }

    .swagger-ui .contain-l {
        background-size: contain!important
    }
}

.swagger-ui .bg-center {
    background-position: 50%;
    background-repeat: no-repeat
}

.swagger-ui .bg-top {
    background-position: top;
    background-repeat: no-repeat
}

.swagger-ui .bg-right {
    background-position: 100%;
    background-repeat: no-repeat
}

.swagger-ui .bg-bottom {
    background-position: bottom;
    background-repeat: no-repeat
}

.swagger-ui .bg-left {
    background-position: 0;
    background-repeat: no-repeat
}

@media screen and (min-width: 30em) {
    .swagger-ui .bg-center-ns {
        background-position:50%;
        background-repeat: no-repeat
    }

    .swagger-ui .bg-top-ns {
        background-position: top;
        background-repeat: no-repeat
    }

    .swagger-ui .bg-right-ns {
        background-position: 100%;
        background-repeat: no-repeat
    }

    .swagger-ui .bg-bottom-ns {
        background-position: bottom;
        background-repeat: no-repeat
    }

    .swagger-ui .bg-left-ns {
        background-position: 0;
        background-repeat: no-repeat
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .bg-center-m {
        background-position:50%;
        background-repeat: no-repeat
    }

    .swagger-ui .bg-top-m {
        background-position: top;
        background-repeat: no-repeat
    }

    .swagger-ui .bg-right-m {
        background-position: 100%;
        background-repeat: no-repeat
    }

    .swagger-ui .bg-bottom-m {
        background-position: bottom;
        background-repeat: no-repeat
    }

    .swagger-ui .bg-left-m {
        background-position: 0;
        background-repeat: no-repeat
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .bg-center-l {
        background-position:50%;
        background-repeat: no-repeat
    }

    .swagger-ui .bg-top-l {
        background-position: top;
        background-repeat: no-repeat
    }

    .swagger-ui .bg-right-l {
        background-position: 100%;
        background-repeat: no-repeat
    }

    .swagger-ui .bg-bottom-l {
        background-position: bottom;
        background-repeat: no-repeat
    }

    .swagger-ui .bg-left-l {
        background-position: 0;
        background-repeat: no-repeat
    }
}

.swagger-ui .outline {
    outline: 1px solid
}

.swagger-ui .outline-transparent {
    outline: 1px solid transparent
}

.swagger-ui .outline-0 {
    outline: 0
}

@media screen and (min-width: 30em) {
    .swagger-ui .outline-ns {
        outline:1px solid
    }

    .swagger-ui .outline-transparent-ns {
        outline: 1px solid transparent
    }

    .swagger-ui .outline-0-ns {
        outline: 0
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .outline-m {
        outline:1px solid
    }

    .swagger-ui .outline-transparent-m {
        outline: 1px solid transparent
    }

    .swagger-ui .outline-0-m {
        outline: 0
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .outline-l {
        outline:1px solid
    }

    .swagger-ui .outline-transparent-l {
        outline: 1px solid transparent
    }

    .swagger-ui .outline-0-l {
        outline: 0
    }
}

.swagger-ui .ba {
    border-style: solid;
    border-width: 1px
}

.swagger-ui .bt {
    border-top-style: solid;
    border-top-width: 1px
}

.swagger-ui .br {
    border-right-style: solid;
    border-right-width: 1px
}

.swagger-ui .bb {
    border-bottom-style: solid;
    border-bottom-width: 1px
}

.swagger-ui .bl {
    border-left-style: solid;
    border-left-width: 1px
}

.swagger-ui .bn {
    border-style: none;
    border-width: 0
}

@media screen and (min-width: 30em) {
    .swagger-ui .ba-ns {
        border-style:solid;
        border-width: 1px
    }

    .swagger-ui .bt-ns {
        border-top-style: solid;
        border-top-width: 1px
    }

    .swagger-ui .br-ns {
        border-right-style: solid;
        border-right-width: 1px
    }

    .swagger-ui .bb-ns {
        border-bottom-style: solid;
        border-bottom-width: 1px
    }

    .swagger-ui .bl-ns {
        border-left-style: solid;
        border-left-width: 1px
    }

    .swagger-ui .bn-ns {
        border-style: none;
        border-width: 0
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .ba-m {
        border-style:solid;
        border-width: 1px
    }

    .swagger-ui .bt-m {
        border-top-style: solid;
        border-top-width: 1px
    }

    .swagger-ui .br-m {
        border-right-style: solid;
        border-right-width: 1px
    }

    .swagger-ui .bb-m {
        border-bottom-style: solid;
        border-bottom-width: 1px
    }

    .swagger-ui .bl-m {
        border-left-style: solid;
        border-left-width: 1px
    }

    .swagger-ui .bn-m {
        border-style: none;
        border-width: 0
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .ba-l {
        border-style:solid;
        border-width: 1px
    }

    .swagger-ui .bt-l {
        border-top-style: solid;
        border-top-width: 1px
    }

    .swagger-ui .br-l {
        border-right-style: solid;
        border-right-width: 1px
    }

    .swagger-ui .bb-l {
        border-bottom-style: solid;
        border-bottom-width: 1px
    }

    .swagger-ui .bl-l {
        border-left-style: solid;
        border-left-width: 1px
    }

    .swagger-ui .bn-l {
        border-style: none;
        border-width: 0
    }
}

.swagger-ui .b--black {
    border-color: #000
}

.swagger-ui .b--near-black {
    border-color: #111
}

.swagger-ui .b--dark-gray {
    border-color: #333
}

.swagger-ui .b--mid-gray {
    border-color: #555
}

.swagger-ui .b--gray {
    border-color: #777
}

.swagger-ui .b--silver {
    border-color: #999
}

.swagger-ui .b--light-silver {
    border-color: #aaa
}

.swagger-ui .b--moon-gray {
    border-color: #ccc
}

.swagger-ui .b--light-gray {
    border-color: #eee
}

.swagger-ui .b--near-white {
    border-color: #f4f4f4
}

.swagger-ui .b--white {
    border-color: #fff
}

.swagger-ui .b--white-90 {
    border-color: #ffffffe6
}

.swagger-ui .b--white-80 {
    border-color: #fffc
}

.swagger-ui .b--white-70 {
    border-color: #ffffffb3
}

.swagger-ui .b--white-60 {
    border-color: #fff9
}

.swagger-ui .b--white-50 {
    border-color: #ffffff80
}

.swagger-ui .b--white-40 {
    border-color: #fff6
}

.swagger-ui .b--white-30 {
    border-color: #ffffff4d
}

.swagger-ui .b--white-20 {
    border-color: #fff3
}

.swagger-ui .b--white-10 {
    border-color: #ffffff1a
}

.swagger-ui .b--white-05 {
    border-color: #ffffff0d
}

.swagger-ui .b--white-025 {
    border-color: #ffffff06
}

.swagger-ui .b--white-0125 {
    border-color: #ffffff03
}

.swagger-ui .b--black-90 {
    border-color: #000000e6
}

.swagger-ui .b--black-80 {
    border-color: #000c
}

.swagger-ui .b--black-70 {
    border-color: #000000b3
}

.swagger-ui .b--black-60 {
    border-color: #0009
}

.swagger-ui .b--black-50 {
    border-color: #00000080
}

.swagger-ui .b--black-40 {
    border-color: #0006
}

.swagger-ui .b--black-30 {
    border-color: #0000004d
}

.swagger-ui .b--black-20 {
    border-color: #0003
}

.swagger-ui .b--black-10 {
    border-color: #0000001a
}

.swagger-ui .b--black-05 {
    border-color: #0000000d
}

.swagger-ui .b--black-025 {
    border-color: #00000006
}

.swagger-ui .b--black-0125 {
    border-color: #00000003
}

.swagger-ui .b--dark-red {
    border-color: #e7040f
}

.swagger-ui .b--red {
    border-color: #ff4136
}

.swagger-ui .b--light-red {
    border-color: #ff725c
}

.swagger-ui .b--orange {
    border-color: #ff6300
}

.swagger-ui .b--gold {
    border-color: #ffb700
}

.swagger-ui .b--yellow {
    border-color: gold
}

.swagger-ui .b--light-yellow {
    border-color: #fbf1a9
}

.swagger-ui .b--purple {
    border-color: #5e2ca5
}

.swagger-ui .b--light-purple {
    border-color: #a463f2
}

.swagger-ui .b--dark-pink {
    border-color: #d5008f
}

.swagger-ui .b--hot-pink {
    border-color: #ff41b4
}

.swagger-ui .b--pink {
    border-color: #ff80cc
}

.swagger-ui .b--light-pink {
    border-color: #ffa3d7
}

.swagger-ui .b--dark-green {
    border-color: #137752
}

.swagger-ui .b--green {
    border-color: #19a974
}

.swagger-ui .b--light-green {
    border-color: #9eebcf
}

.swagger-ui .b--navy {
    border-color: #001b44
}

.swagger-ui .b--dark-blue {
    border-color: #00449e
}

.swagger-ui .b--blue {
    border-color: #357edd
}

.swagger-ui .b--light-blue {
    border-color: #96ccff
}

.swagger-ui .b--lightest-blue {
    border-color: #cdecff
}

.swagger-ui .b--washed-blue {
    border-color: #f6fffe
}

.swagger-ui .b--washed-green {
    border-color: #e8fdf5
}

.swagger-ui .b--washed-yellow {
    border-color: #fffceb
}

.swagger-ui .b--washed-red {
    border-color: #ffdfdf
}

.swagger-ui .b--transparent {
    border-color: transparent
}

.swagger-ui .b--inherit {
    border-color: inherit
}

.swagger-ui .br0 {
    border-radius: 0
}

.swagger-ui .br1 {
    border-radius: .125rem
}

.swagger-ui .br2 {
    border-radius: .25rem
}

.swagger-ui .br3 {
    border-radius: .5rem
}

.swagger-ui .br4 {
    border-radius: 1rem
}

.swagger-ui .br-100 {
    border-radius: 100%
}

.swagger-ui .br-pill {
    border-radius: 9999px
}

.swagger-ui .br--bottom {
    border-top-left-radius: 0;
    border-top-right-radius: 0
}

.swagger-ui .br--top {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0
}

.swagger-ui .br--right {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0
}

.swagger-ui .br--left {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0
}

@media screen and (min-width: 30em) {
    .swagger-ui .br0-ns {
        border-radius:0
    }

    .swagger-ui .br1-ns {
        border-radius: .125rem
    }

    .swagger-ui .br2-ns {
        border-radius: .25rem
    }

    .swagger-ui .br3-ns {
        border-radius: .5rem
    }

    .swagger-ui .br4-ns {
        border-radius: 1rem
    }

    .swagger-ui .br-100-ns {
        border-radius: 100%
    }

    .swagger-ui .br-pill-ns {
        border-radius: 9999px
    }

    .swagger-ui .br--bottom-ns {
        border-top-left-radius: 0;
        border-top-right-radius: 0
    }

    .swagger-ui .br--top-ns {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0
    }

    .swagger-ui .br--right-ns {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0
    }

    .swagger-ui .br--left-ns {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .br0-m {
        border-radius:0
    }

    .swagger-ui .br1-m {
        border-radius: .125rem
    }

    .swagger-ui .br2-m {
        border-radius: .25rem
    }

    .swagger-ui .br3-m {
        border-radius: .5rem
    }

    .swagger-ui .br4-m {
        border-radius: 1rem
    }

    .swagger-ui .br-100-m {
        border-radius: 100%
    }

    .swagger-ui .br-pill-m {
        border-radius: 9999px
    }

    .swagger-ui .br--bottom-m {
        border-top-left-radius: 0;
        border-top-right-radius: 0
    }

    .swagger-ui .br--top-m {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0
    }

    .swagger-ui .br--right-m {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0
    }

    .swagger-ui .br--left-m {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .br0-l {
        border-radius:0
    }

    .swagger-ui .br1-l {
        border-radius: .125rem
    }

    .swagger-ui .br2-l {
        border-radius: .25rem
    }

    .swagger-ui .br3-l {
        border-radius: .5rem
    }

    .swagger-ui .br4-l {
        border-radius: 1rem
    }

    .swagger-ui .br-100-l {
        border-radius: 100%
    }

    .swagger-ui .br-pill-l {
        border-radius: 9999px
    }

    .swagger-ui .br--bottom-l {
        border-top-left-radius: 0;
        border-top-right-radius: 0
    }

    .swagger-ui .br--top-l {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0
    }

    .swagger-ui .br--right-l {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0
    }

    .swagger-ui .br--left-l {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0
    }
}

.swagger-ui .b--dotted {
    border-style: dotted
}

.swagger-ui .b--dashed {
    border-style: dashed
}

.swagger-ui .b--solid {
    border-style: solid
}

.swagger-ui .b--none {
    border-style: none
}

@media screen and (min-width: 30em) {
    .swagger-ui .b--dotted-ns {
        border-style:dotted
    }

    .swagger-ui .b--dashed-ns {
        border-style: dashed
    }

    .swagger-ui .b--solid-ns {
        border-style: solid
    }

    .swagger-ui .b--none-ns {
        border-style: none
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .b--dotted-m {
        border-style:dotted
    }

    .swagger-ui .b--dashed-m {
        border-style: dashed
    }

    .swagger-ui .b--solid-m {
        border-style: solid
    }

    .swagger-ui .b--none-m {
        border-style: none
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .b--dotted-l {
        border-style:dotted
    }

    .swagger-ui .b--dashed-l {
        border-style: dashed
    }

    .swagger-ui .b--solid-l {
        border-style: solid
    }

    .swagger-ui .b--none-l {
        border-style: none
    }
}

.swagger-ui .bw0 {
    border-width: 0
}

.swagger-ui .bw1 {
    border-width: .125rem
}

.swagger-ui .bw2 {
    border-width: .25rem
}

.swagger-ui .bw3 {
    border-width: .5rem
}

.swagger-ui .bw4 {
    border-width: 1rem
}

.swagger-ui .bw5 {
    border-width: 2rem
}

.swagger-ui .bt-0 {
    border-top-width: 0
}

.swagger-ui .br-0 {
    border-right-width: 0
}

.swagger-ui .bb-0 {
    border-bottom-width: 0
}

.swagger-ui .bl-0 {
    border-left-width: 0
}

@media screen and (min-width: 30em) {
    .swagger-ui .bw0-ns {
        border-width:0
    }

    .swagger-ui .bw1-ns {
        border-width: .125rem
    }

    .swagger-ui .bw2-ns {
        border-width: .25rem
    }

    .swagger-ui .bw3-ns {
        border-width: .5rem
    }

    .swagger-ui .bw4-ns {
        border-width: 1rem
    }

    .swagger-ui .bw5-ns {
        border-width: 2rem
    }

    .swagger-ui .bt-0-ns {
        border-top-width: 0
    }

    .swagger-ui .br-0-ns {
        border-right-width: 0
    }

    .swagger-ui .bb-0-ns {
        border-bottom-width: 0
    }

    .swagger-ui .bl-0-ns {
        border-left-width: 0
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .bw0-m {
        border-width:0
    }

    .swagger-ui .bw1-m {
        border-width: .125rem
    }

    .swagger-ui .bw2-m {
        border-width: .25rem
    }

    .swagger-ui .bw3-m {
        border-width: .5rem
    }

    .swagger-ui .bw4-m {
        border-width: 1rem
    }

    .swagger-ui .bw5-m {
        border-width: 2rem
    }

    .swagger-ui .bt-0-m {
        border-top-width: 0
    }

    .swagger-ui .br-0-m {
        border-right-width: 0
    }

    .swagger-ui .bb-0-m {
        border-bottom-width: 0
    }

    .swagger-ui .bl-0-m {
        border-left-width: 0
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .bw0-l {
        border-width:0
    }

    .swagger-ui .bw1-l {
        border-width: .125rem
    }

    .swagger-ui .bw2-l {
        border-width: .25rem
    }

    .swagger-ui .bw3-l {
        border-width: .5rem
    }

    .swagger-ui .bw4-l {
        border-width: 1rem
    }

    .swagger-ui .bw5-l {
        border-width: 2rem
    }

    .swagger-ui .bt-0-l {
        border-top-width: 0
    }

    .swagger-ui .br-0-l {
        border-right-width: 0
    }

    .swagger-ui .bb-0-l {
        border-bottom-width: 0
    }

    .swagger-ui .bl-0-l {
        border-left-width: 0
    }
}

.swagger-ui .shadow-1 {
    box-shadow: 0 0 4px 2px #0003
}

.swagger-ui .shadow-2 {
    box-shadow: 0 0 8px 2px #0003
}

.swagger-ui .shadow-3 {
    box-shadow: 2px 2px 4px 2px #0003
}

.swagger-ui .shadow-4 {
    box-shadow: 2px 2px 8px #0003
}

.swagger-ui .shadow-5 {
    box-shadow: 4px 4px 8px #0003
}

@media screen and (min-width: 30em) {
    .swagger-ui .shadow-1-ns {
        box-shadow:0 0 4px 2px #0003
    }

    .swagger-ui .shadow-2-ns {
        box-shadow: 0 0 8px 2px #0003
    }

    .swagger-ui .shadow-3-ns {
        box-shadow: 2px 2px 4px 2px #0003
    }

    .swagger-ui .shadow-4-ns {
        box-shadow: 2px 2px 8px #0003
    }

    .swagger-ui .shadow-5-ns {
        box-shadow: 4px 4px 8px #0003
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .shadow-1-m {
        box-shadow:0 0 4px 2px #0003
    }

    .swagger-ui .shadow-2-m {
        box-shadow: 0 0 8px 2px #0003
    }

    .swagger-ui .shadow-3-m {
        box-shadow: 2px 2px 4px 2px #0003
    }

    .swagger-ui .shadow-4-m {
        box-shadow: 2px 2px 8px #0003
    }

    .swagger-ui .shadow-5-m {
        box-shadow: 4px 4px 8px #0003
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .shadow-1-l {
        box-shadow:0 0 4px 2px #0003
    }

    .swagger-ui .shadow-2-l {
        box-shadow: 0 0 8px 2px #0003
    }

    .swagger-ui .shadow-3-l {
        box-shadow: 2px 2px 4px 2px #0003
    }

    .swagger-ui .shadow-4-l {
        box-shadow: 2px 2px 8px #0003
    }

    .swagger-ui .shadow-5-l {
        box-shadow: 4px 4px 8px #0003
    }
}

.swagger-ui .pre {
    overflow-x: auto;
    overflow-y: hidden;
    overflow: scroll
}

.swagger-ui .top-0 {
    top: 0
}

.swagger-ui .right-0 {
    right: 0
}

.swagger-ui .bottom-0 {
    bottom: 0
}

.swagger-ui .left-0 {
    left: 0
}

.swagger-ui .top-1 {
    top: 1rem
}

.swagger-ui .right-1 {
    right: 1rem
}

.swagger-ui .bottom-1 {
    bottom: 1rem
}

.swagger-ui .left-1 {
    left: 1rem
}

.swagger-ui .top-2 {
    top: 2rem
}

.swagger-ui .right-2 {
    right: 2rem
}

.swagger-ui .bottom-2 {
    bottom: 2rem
}

.swagger-ui .left-2 {
    left: 2rem
}

.swagger-ui .top--1 {
    top: -1rem
}

.swagger-ui .right--1 {
    right: -1rem
}

.swagger-ui .bottom--1 {
    bottom: -1rem
}

.swagger-ui .left--1 {
    left: -1rem
}

.swagger-ui .top--2 {
    top: -2rem
}

.swagger-ui .right--2 {
    right: -2rem
}

.swagger-ui .bottom--2 {
    bottom: -2rem
}

.swagger-ui .left--2 {
    left: -2rem
}

.swagger-ui .absolute--fill {
    inset: 0
}

@media screen and (min-width: 30em) {
    .swagger-ui .top-0-ns {
        top:0
    }

    .swagger-ui .left-0-ns {
        left: 0
    }

    .swagger-ui .right-0-ns {
        right: 0
    }

    .swagger-ui .bottom-0-ns {
        bottom: 0
    }

    .swagger-ui .top-1-ns {
        top: 1rem
    }

    .swagger-ui .left-1-ns {
        left: 1rem
    }

    .swagger-ui .right-1-ns {
        right: 1rem
    }

    .swagger-ui .bottom-1-ns {
        bottom: 1rem
    }

    .swagger-ui .top-2-ns {
        top: 2rem
    }

    .swagger-ui .left-2-ns {
        left: 2rem
    }

    .swagger-ui .right-2-ns {
        right: 2rem
    }

    .swagger-ui .bottom-2-ns {
        bottom: 2rem
    }

    .swagger-ui .top--1-ns {
        top: -1rem
    }

    .swagger-ui .right--1-ns {
        right: -1rem
    }

    .swagger-ui .bottom--1-ns {
        bottom: -1rem
    }

    .swagger-ui .left--1-ns {
        left: -1rem
    }

    .swagger-ui .top--2-ns {
        top: -2rem
    }

    .swagger-ui .right--2-ns {
        right: -2rem
    }

    .swagger-ui .bottom--2-ns {
        bottom: -2rem
    }

    .swagger-ui .left--2-ns {
        left: -2rem
    }

    .swagger-ui .absolute--fill-ns {
        inset: 0
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .top-0-m {
        top:0
    }

    .swagger-ui .left-0-m {
        left: 0
    }

    .swagger-ui .right-0-m {
        right: 0
    }

    .swagger-ui .bottom-0-m {
        bottom: 0
    }

    .swagger-ui .top-1-m {
        top: 1rem
    }

    .swagger-ui .left-1-m {
        left: 1rem
    }

    .swagger-ui .right-1-m {
        right: 1rem
    }

    .swagger-ui .bottom-1-m {
        bottom: 1rem
    }

    .swagger-ui .top-2-m {
        top: 2rem
    }

    .swagger-ui .left-2-m {
        left: 2rem
    }

    .swagger-ui .right-2-m {
        right: 2rem
    }

    .swagger-ui .bottom-2-m {
        bottom: 2rem
    }

    .swagger-ui .top--1-m {
        top: -1rem
    }

    .swagger-ui .right--1-m {
        right: -1rem
    }

    .swagger-ui .bottom--1-m {
        bottom: -1rem
    }

    .swagger-ui .left--1-m {
        left: -1rem
    }

    .swagger-ui .top--2-m {
        top: -2rem
    }

    .swagger-ui .right--2-m {
        right: -2rem
    }

    .swagger-ui .bottom--2-m {
        bottom: -2rem
    }

    .swagger-ui .left--2-m {
        left: -2rem
    }

    .swagger-ui .absolute--fill-m {
        inset: 0
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .top-0-l {
        top:0
    }

    .swagger-ui .left-0-l {
        left: 0
    }

    .swagger-ui .right-0-l {
        right: 0
    }

    .swagger-ui .bottom-0-l {
        bottom: 0
    }

    .swagger-ui .top-1-l {
        top: 1rem
    }

    .swagger-ui .left-1-l {
        left: 1rem
    }

    .swagger-ui .right-1-l {
        right: 1rem
    }

    .swagger-ui .bottom-1-l {
        bottom: 1rem
    }

    .swagger-ui .top-2-l {
        top: 2rem
    }

    .swagger-ui .left-2-l {
        left: 2rem
    }

    .swagger-ui .right-2-l {
        right: 2rem
    }

    .swagger-ui .bottom-2-l {
        bottom: 2rem
    }

    .swagger-ui .top--1-l {
        top: -1rem
    }

    .swagger-ui .right--1-l {
        right: -1rem
    }

    .swagger-ui .bottom--1-l {
        bottom: -1rem
    }

    .swagger-ui .left--1-l {
        left: -1rem
    }

    .swagger-ui .top--2-l {
        top: -2rem
    }

    .swagger-ui .right--2-l {
        right: -2rem
    }

    .swagger-ui .bottom--2-l {
        bottom: -2rem
    }

    .swagger-ui .left--2-l {
        left: -2rem
    }

    .swagger-ui .absolute--fill-l {
        inset: 0
    }
}

.swagger-ui .cf:after,.swagger-ui .cf:before {
    content: " ";
    display: table
}

.swagger-ui .cf:after {
    clear: both
}

.swagger-ui .cf {
    zoom:1}

.swagger-ui .cl {
    clear: left
}

.swagger-ui .cr {
    clear: right
}

.swagger-ui .cb {
    clear: both
}

.swagger-ui .cn {
    clear: none
}

@media screen and (min-width: 30em) {
    .swagger-ui .cl-ns {
        clear:left
    }

    .swagger-ui .cr-ns {
        clear: right
    }

    .swagger-ui .cb-ns {
        clear: both
    }

    .swagger-ui .cn-ns {
        clear: none
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .cl-m {
        clear:left
    }

    .swagger-ui .cr-m {
        clear: right
    }

    .swagger-ui .cb-m {
        clear: both
    }

    .swagger-ui .cn-m {
        clear: none
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .cl-l {
        clear:left
    }

    .swagger-ui .cr-l {
        clear: right
    }

    .swagger-ui .cb-l {
        clear: both
    }

    .swagger-ui .cn-l {
        clear: none
    }
}

.swagger-ui .flex {
    display: flex
}

.swagger-ui .inline-flex {
    display: inline-flex
}

.swagger-ui .flex-auto {
    flex: 1 1 auto;
    min-height: 0;
    min-width: 0
}

.swagger-ui .flex-none {
    flex: none
}

.swagger-ui .flex-column {
    flex-direction: column
}

.swagger-ui .flex-row {
    flex-direction: row
}

.swagger-ui .flex-wrap {
    flex-wrap: wrap
}

.swagger-ui .flex-nowrap {
    flex-wrap: nowrap
}

.swagger-ui .flex-wrap-reverse {
    flex-wrap: wrap-reverse
}

.swagger-ui .flex-column-reverse {
    flex-direction: column-reverse
}

.swagger-ui .flex-row-reverse {
    flex-direction: row-reverse
}

.swagger-ui .items-start {
    align-items: flex-start
}

.swagger-ui .items-end {
    align-items: flex-end
}

.swagger-ui .items-center {
    align-items: center
}

.swagger-ui .items-baseline {
    align-items: baseline
}

.swagger-ui .items-stretch {
    align-items: stretch
}

.swagger-ui .self-start {
    align-self: flex-start
}

.swagger-ui .self-end {
    align-self: flex-end
}

.swagger-ui .self-center {
    align-self: center
}

.swagger-ui .self-baseline {
    align-self: baseline
}

.swagger-ui .self-stretch {
    align-self: stretch
}

.swagger-ui .justify-start {
    justify-content: flex-start
}

.swagger-ui .justify-end {
    justify-content: flex-end
}

.swagger-ui .justify-center {
    justify-content: center
}

.swagger-ui .justify-between {
    justify-content: space-between
}

.swagger-ui .justify-around {
    justify-content: space-around
}

.swagger-ui .content-start {
    align-content: flex-start
}

.swagger-ui .content-end {
    align-content: flex-end
}

.swagger-ui .content-center {
    align-content: center
}

.swagger-ui .content-between {
    align-content: space-between
}

.swagger-ui .content-around {
    align-content: space-around
}

.swagger-ui .content-stretch {
    align-content: stretch
}

.swagger-ui .order-0 {
    order: 0
}

.swagger-ui .order-1 {
    order: 1
}

.swagger-ui .order-2 {
    order: 2
}

.swagger-ui .order-3 {
    order: 3
}

.swagger-ui .order-4 {
    order: 4
}

.swagger-ui .order-5 {
    order: 5
}

.swagger-ui .order-6 {
    order: 6
}

.swagger-ui .order-7 {
    order: 7
}

.swagger-ui .order-8 {
    order: 8
}

.swagger-ui .order-last {
    order: 99999
}

.swagger-ui .flex-grow-0 {
    flex-grow: 0
}

.swagger-ui .flex-grow-1 {
    flex-grow: 1
}

.swagger-ui .flex-shrink-0 {
    flex-shrink: 0
}

.swagger-ui .flex-shrink-1 {
    flex-shrink: 1
}

@media screen and (min-width: 30em) {
    .swagger-ui .flex-ns {
        display:flex
    }

    .swagger-ui .inline-flex-ns {
        display: inline-flex
    }

    .swagger-ui .flex-auto-ns {
        flex: 1 1 auto;
        min-height: 0;
        min-width: 0
    }

    .swagger-ui .flex-none-ns {
        flex: none
    }

    .swagger-ui .flex-column-ns {
        flex-direction: column
    }

    .swagger-ui .flex-row-ns {
        flex-direction: row
    }

    .swagger-ui .flex-wrap-ns {
        flex-wrap: wrap
    }

    .swagger-ui .flex-nowrap-ns {
        flex-wrap: nowrap
    }

    .swagger-ui .flex-wrap-reverse-ns {
        flex-wrap: wrap-reverse
    }

    .swagger-ui .flex-column-reverse-ns {
        flex-direction: column-reverse
    }

    .swagger-ui .flex-row-reverse-ns {
        flex-direction: row-reverse
    }

    .swagger-ui .items-start-ns {
        align-items: flex-start
    }

    .swagger-ui .items-end-ns {
        align-items: flex-end
    }

    .swagger-ui .items-center-ns {
        align-items: center
    }

    .swagger-ui .items-baseline-ns {
        align-items: baseline
    }

    .swagger-ui .items-stretch-ns {
        align-items: stretch
    }

    .swagger-ui .self-start-ns {
        align-self: flex-start
    }

    .swagger-ui .self-end-ns {
        align-self: flex-end
    }

    .swagger-ui .self-center-ns {
        align-self: center
    }

    .swagger-ui .self-baseline-ns {
        align-self: baseline
    }

    .swagger-ui .self-stretch-ns {
        align-self: stretch
    }

    .swagger-ui .justify-start-ns {
        justify-content: flex-start
    }

    .swagger-ui .justify-end-ns {
        justify-content: flex-end
    }

    .swagger-ui .justify-center-ns {
        justify-content: center
    }

    .swagger-ui .justify-between-ns {
        justify-content: space-between
    }

    .swagger-ui .justify-around-ns {
        justify-content: space-around
    }

    .swagger-ui .content-start-ns {
        align-content: flex-start
    }

    .swagger-ui .content-end-ns {
        align-content: flex-end
    }

    .swagger-ui .content-center-ns {
        align-content: center
    }

    .swagger-ui .content-between-ns {
        align-content: space-between
    }

    .swagger-ui .content-around-ns {
        align-content: space-around
    }

    .swagger-ui .content-stretch-ns {
        align-content: stretch
    }

    .swagger-ui .order-0-ns {
        order: 0
    }

    .swagger-ui .order-1-ns {
        order: 1
    }

    .swagger-ui .order-2-ns {
        order: 2
    }

    .swagger-ui .order-3-ns {
        order: 3
    }

    .swagger-ui .order-4-ns {
        order: 4
    }

    .swagger-ui .order-5-ns {
        order: 5
    }

    .swagger-ui .order-6-ns {
        order: 6
    }

    .swagger-ui .order-7-ns {
        order: 7
    }

    .swagger-ui .order-8-ns {
        order: 8
    }

    .swagger-ui .order-last-ns {
        order: 99999
    }

    .swagger-ui .flex-grow-0-ns {
        flex-grow: 0
    }

    .swagger-ui .flex-grow-1-ns {
        flex-grow: 1
    }

    .swagger-ui .flex-shrink-0-ns {
        flex-shrink: 0
    }

    .swagger-ui .flex-shrink-1-ns {
        flex-shrink: 1
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .flex-m {
        display:flex
    }

    .swagger-ui .inline-flex-m {
        display: inline-flex
    }

    .swagger-ui .flex-auto-m {
        flex: 1 1 auto;
        min-height: 0;
        min-width: 0
    }

    .swagger-ui .flex-none-m {
        flex: none
    }

    .swagger-ui .flex-column-m {
        flex-direction: column
    }

    .swagger-ui .flex-row-m {
        flex-direction: row
    }

    .swagger-ui .flex-wrap-m {
        flex-wrap: wrap
    }

    .swagger-ui .flex-nowrap-m {
        flex-wrap: nowrap
    }

    .swagger-ui .flex-wrap-reverse-m {
        flex-wrap: wrap-reverse
    }

    .swagger-ui .flex-column-reverse-m {
        flex-direction: column-reverse
    }

    .swagger-ui .flex-row-reverse-m {
        flex-direction: row-reverse
    }

    .swagger-ui .items-start-m {
        align-items: flex-start
    }

    .swagger-ui .items-end-m {
        align-items: flex-end
    }

    .swagger-ui .items-center-m {
        align-items: center
    }

    .swagger-ui .items-baseline-m {
        align-items: baseline
    }

    .swagger-ui .items-stretch-m {
        align-items: stretch
    }

    .swagger-ui .self-start-m {
        align-self: flex-start
    }

    .swagger-ui .self-end-m {
        align-self: flex-end
    }

    .swagger-ui .self-center-m {
        align-self: center
    }

    .swagger-ui .self-baseline-m {
        align-self: baseline
    }

    .swagger-ui .self-stretch-m {
        align-self: stretch
    }

    .swagger-ui .justify-start-m {
        justify-content: flex-start
    }

    .swagger-ui .justify-end-m {
        justify-content: flex-end
    }

    .swagger-ui .justify-center-m {
        justify-content: center
    }

    .swagger-ui .justify-between-m {
        justify-content: space-between
    }

    .swagger-ui .justify-around-m {
        justify-content: space-around
    }

    .swagger-ui .content-start-m {
        align-content: flex-start
    }

    .swagger-ui .content-end-m {
        align-content: flex-end
    }

    .swagger-ui .content-center-m {
        align-content: center
    }

    .swagger-ui .content-between-m {
        align-content: space-between
    }

    .swagger-ui .content-around-m {
        align-content: space-around
    }

    .swagger-ui .content-stretch-m {
        align-content: stretch
    }

    .swagger-ui .order-0-m {
        order: 0
    }

    .swagger-ui .order-1-m {
        order: 1
    }

    .swagger-ui .order-2-m {
        order: 2
    }

    .swagger-ui .order-3-m {
        order: 3
    }

    .swagger-ui .order-4-m {
        order: 4
    }

    .swagger-ui .order-5-m {
        order: 5
    }

    .swagger-ui .order-6-m {
        order: 6
    }

    .swagger-ui .order-7-m {
        order: 7
    }

    .swagger-ui .order-8-m {
        order: 8
    }

    .swagger-ui .order-last-m {
        order: 99999
    }

    .swagger-ui .flex-grow-0-m {
        flex-grow: 0
    }

    .swagger-ui .flex-grow-1-m {
        flex-grow: 1
    }

    .swagger-ui .flex-shrink-0-m {
        flex-shrink: 0
    }

    .swagger-ui .flex-shrink-1-m {
        flex-shrink: 1
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .flex-l {
        display:flex
    }

    .swagger-ui .inline-flex-l {
        display: inline-flex
    }

    .swagger-ui .flex-auto-l {
        flex: 1 1 auto;
        min-height: 0;
        min-width: 0
    }

    .swagger-ui .flex-none-l {
        flex: none
    }

    .swagger-ui .flex-column-l {
        flex-direction: column
    }

    .swagger-ui .flex-row-l {
        flex-direction: row
    }

    .swagger-ui .flex-wrap-l {
        flex-wrap: wrap
    }

    .swagger-ui .flex-nowrap-l {
        flex-wrap: nowrap
    }

    .swagger-ui .flex-wrap-reverse-l {
        flex-wrap: wrap-reverse
    }

    .swagger-ui .flex-column-reverse-l {
        flex-direction: column-reverse
    }

    .swagger-ui .flex-row-reverse-l {
        flex-direction: row-reverse
    }

    .swagger-ui .items-start-l {
        align-items: flex-start
    }

    .swagger-ui .items-end-l {
        align-items: flex-end
    }

    .swagger-ui .items-center-l {
        align-items: center
    }

    .swagger-ui .items-baseline-l {
        align-items: baseline
    }

    .swagger-ui .items-stretch-l {
        align-items: stretch
    }

    .swagger-ui .self-start-l {
        align-self: flex-start
    }

    .swagger-ui .self-end-l {
        align-self: flex-end
    }

    .swagger-ui .self-center-l {
        align-self: center
    }

    .swagger-ui .self-baseline-l {
        align-self: baseline
    }

    .swagger-ui .self-stretch-l {
        align-self: stretch
    }

    .swagger-ui .justify-start-l {
        justify-content: flex-start
    }

    .swagger-ui .justify-end-l {
        justify-content: flex-end
    }

    .swagger-ui .justify-center-l {
        justify-content: center
    }

    .swagger-ui .justify-between-l {
        justify-content: space-between
    }

    .swagger-ui .justify-around-l {
        justify-content: space-around
    }

    .swagger-ui .content-start-l {
        align-content: flex-start
    }

    .swagger-ui .content-end-l {
        align-content: flex-end
    }

    .swagger-ui .content-center-l {
        align-content: center
    }

    .swagger-ui .content-between-l {
        align-content: space-between
    }

    .swagger-ui .content-around-l {
        align-content: space-around
    }

    .swagger-ui .content-stretch-l {
        align-content: stretch
    }

    .swagger-ui .order-0-l {
        order: 0
    }

    .swagger-ui .order-1-l {
        order: 1
    }

    .swagger-ui .order-2-l {
        order: 2
    }

    .swagger-ui .order-3-l {
        order: 3
    }

    .swagger-ui .order-4-l {
        order: 4
    }

    .swagger-ui .order-5-l {
        order: 5
    }

    .swagger-ui .order-6-l {
        order: 6
    }

    .swagger-ui .order-7-l {
        order: 7
    }

    .swagger-ui .order-8-l {
        order: 8
    }

    .swagger-ui .order-last-l {
        order: 99999
    }

    .swagger-ui .flex-grow-0-l {
        flex-grow: 0
    }

    .swagger-ui .flex-grow-1-l {
        flex-grow: 1
    }

    .swagger-ui .flex-shrink-0-l {
        flex-shrink: 0
    }

    .swagger-ui .flex-shrink-1-l {
        flex-shrink: 1
    }
}

.swagger-ui .dn {
    display: none
}

.swagger-ui .di {
    display: inline
}

.swagger-ui .db {
    display: block
}

.swagger-ui .dib {
    display: inline-block
}

.swagger-ui .dit {
    display: inline-table
}

.swagger-ui .dt {
    display: table
}

.swagger-ui .dtc {
    display: table-cell
}

.swagger-ui .dt-row {
    display: table-row
}

.swagger-ui .dt-row-group {
    display: table-row-group
}

.swagger-ui .dt-column {
    display: table-column
}

.swagger-ui .dt-column-group {
    display: table-column-group
}

.swagger-ui .dt--fixed {
    table-layout: fixed;
    width: 100%
}

@media screen and (min-width: 30em) {
    .swagger-ui .dn-ns {
        display:none
    }

    .swagger-ui .di-ns {
        display: inline
    }

    .swagger-ui .db-ns {
        display: block
    }

    .swagger-ui .dib-ns {
        display: inline-block
    }

    .swagger-ui .dit-ns {
        display: inline-table
    }

    .swagger-ui .dt-ns {
        display: table
    }

    .swagger-ui .dtc-ns {
        display: table-cell
    }

    .swagger-ui .dt-row-ns {
        display: table-row
    }

    .swagger-ui .dt-row-group-ns {
        display: table-row-group
    }

    .swagger-ui .dt-column-ns {
        display: table-column
    }

    .swagger-ui .dt-column-group-ns {
        display: table-column-group
    }

    .swagger-ui .dt--fixed-ns {
        table-layout: fixed;
        width: 100%
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .dn-m {
        display:none
    }

    .swagger-ui .di-m {
        display: inline
    }

    .swagger-ui .db-m {
        display: block
    }

    .swagger-ui .dib-m {
        display: inline-block
    }

    .swagger-ui .dit-m {
        display: inline-table
    }

    .swagger-ui .dt-m {
        display: table
    }

    .swagger-ui .dtc-m {
        display: table-cell
    }

    .swagger-ui .dt-row-m {
        display: table-row
    }

    .swagger-ui .dt-row-group-m {
        display: table-row-group
    }

    .swagger-ui .dt-column-m {
        display: table-column
    }

    .swagger-ui .dt-column-group-m {
        display: table-column-group
    }

    .swagger-ui .dt--fixed-m {
        table-layout: fixed;
        width: 100%
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .dn-l {
        display:none
    }

    .swagger-ui .di-l {
        display: inline
    }

    .swagger-ui .db-l {
        display: block
    }

    .swagger-ui .dib-l {
        display: inline-block
    }

    .swagger-ui .dit-l {
        display: inline-table
    }

    .swagger-ui .dt-l {
        display: table
    }

    .swagger-ui .dtc-l {
        display: table-cell
    }

    .swagger-ui .dt-row-l {
        display: table-row
    }

    .swagger-ui .dt-row-group-l {
        display: table-row-group
    }

    .swagger-ui .dt-column-l {
        display: table-column
    }

    .swagger-ui .dt-column-group-l {
        display: table-column-group
    }

    .swagger-ui .dt--fixed-l {
        table-layout: fixed;
        width: 100%
    }
}

.swagger-ui .fl {
    _display: inline;
    float: left
}

.swagger-ui .fr {
    _display: inline;
    float: right
}

.swagger-ui .fn {
    float: none
}

@media screen and (min-width: 30em) {
    .swagger-ui .fl-ns {
        _display:inline;
        float: left
    }

    .swagger-ui .fr-ns {
        _display: inline;
        float: right
    }

    .swagger-ui .fn-ns {
        float: none
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .fl-m {
        _display:inline;
        float: left
    }

    .swagger-ui .fr-m {
        _display: inline;
        float: right
    }

    .swagger-ui .fn-m {
        float: none
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .fl-l {
        _display:inline;
        float: left
    }

    .swagger-ui .fr-l {
        _display: inline;
        float: right
    }

    .swagger-ui .fn-l {
        float: none
    }
}

.swagger-ui .sans-serif {
    font-family: -apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica,helvetica neue,ubuntu,roboto,noto,segoe ui,arial,sans-serif
}

.swagger-ui .serif {
    font-family: georgia,serif
}

.swagger-ui .system-sans-serif {
    font-family: sans-serif
}

.swagger-ui .system-serif {
    font-family: serif
}

.swagger-ui .code,.swagger-ui code {
    font-family: Consolas,monaco,monospace
}

.swagger-ui .courier {
    font-family: Courier Next,courier,monospace
}

.swagger-ui .helvetica {
    font-family: helvetica neue,helvetica,sans-serif
}

.swagger-ui .avenir {
    font-family: avenir next,avenir,sans-serif
}

.swagger-ui .athelas {
    font-family: athelas,georgia,serif
}

.swagger-ui .georgia {
    font-family: georgia,serif
}

.swagger-ui .times {
    font-family: times,serif
}

.swagger-ui .bodoni {
    font-family: Bodoni MT,serif
}

.swagger-ui .calisto {
    font-family: Calisto MT,serif
}

.swagger-ui .garamond {
    font-family: garamond,serif
}

.swagger-ui .baskerville {
    font-family: baskerville,serif
}

.swagger-ui .i {
    font-style: italic
}

.swagger-ui .fs-normal {
    font-style: normal
}

@media screen and (min-width: 30em) {
    .swagger-ui .i-ns {
        font-style:italic
    }

    .swagger-ui .fs-normal-ns {
        font-style: normal
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .i-m {
        font-style:italic
    }

    .swagger-ui .fs-normal-m {
        font-style: normal
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .i-l {
        font-style:italic
    }

    .swagger-ui .fs-normal-l {
        font-style: normal
    }
}

.swagger-ui .normal {
    font-weight: 400
}

.swagger-ui .b {
    font-weight: 700
}

.swagger-ui .fw1 {
    font-weight: 100
}

.swagger-ui .fw2 {
    font-weight: 200
}

.swagger-ui .fw3 {
    font-weight: 300
}

.swagger-ui .fw4 {
    font-weight: 400
}

.swagger-ui .fw5 {
    font-weight: 500
}

.swagger-ui .fw6 {
    font-weight: 600
}

.swagger-ui .fw7 {
    font-weight: 700
}

.swagger-ui .fw8 {
    font-weight: 800
}

.swagger-ui .fw9 {
    font-weight: 900
}

@media screen and (min-width: 30em) {
    .swagger-ui .normal-ns {
        font-weight:400
    }

    .swagger-ui .b-ns {
        font-weight: 700
    }

    .swagger-ui .fw1-ns {
        font-weight: 100
    }

    .swagger-ui .fw2-ns {
        font-weight: 200
    }

    .swagger-ui .fw3-ns {
        font-weight: 300
    }

    .swagger-ui .fw4-ns {
        font-weight: 400
    }

    .swagger-ui .fw5-ns {
        font-weight: 500
    }

    .swagger-ui .fw6-ns {
        font-weight: 600
    }

    .swagger-ui .fw7-ns {
        font-weight: 700
    }

    .swagger-ui .fw8-ns {
        font-weight: 800
    }

    .swagger-ui .fw9-ns {
        font-weight: 900
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .normal-m {
        font-weight:400
    }

    .swagger-ui .b-m {
        font-weight: 700
    }

    .swagger-ui .fw1-m {
        font-weight: 100
    }

    .swagger-ui .fw2-m {
        font-weight: 200
    }

    .swagger-ui .fw3-m {
        font-weight: 300
    }

    .swagger-ui .fw4-m {
        font-weight: 400
    }

    .swagger-ui .fw5-m {
        font-weight: 500
    }

    .swagger-ui .fw6-m {
        font-weight: 600
    }

    .swagger-ui .fw7-m {
        font-weight: 700
    }

    .swagger-ui .fw8-m {
        font-weight: 800
    }

    .swagger-ui .fw9-m {
        font-weight: 900
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .normal-l {
        font-weight:400
    }

    .swagger-ui .b-l {
        font-weight: 700
    }

    .swagger-ui .fw1-l {
        font-weight: 100
    }

    .swagger-ui .fw2-l {
        font-weight: 200
    }

    .swagger-ui .fw3-l {
        font-weight: 300
    }

    .swagger-ui .fw4-l {
        font-weight: 400
    }

    .swagger-ui .fw5-l {
        font-weight: 500
    }

    .swagger-ui .fw6-l {
        font-weight: 600
    }

    .swagger-ui .fw7-l {
        font-weight: 700
    }

    .swagger-ui .fw8-l {
        font-weight: 800
    }

    .swagger-ui .fw9-l {
        font-weight: 900
    }
}

.swagger-ui .input-reset {
    -webkit-appearance: none;
    -moz-appearance: none
}

.swagger-ui .button-reset::-moz-focus-inner,.swagger-ui .input-reset::-moz-focus-inner {
    border: 0;
    padding: 0
}

.swagger-ui .h1 {
    height: 1rem
}

.swagger-ui .h2 {
    height: 2rem
}

.swagger-ui .h3 {
    height: 4rem
}

.swagger-ui .h4 {
    height: 8rem
}

.swagger-ui .h5 {
    height: 16rem
}

.swagger-ui .h-25 {
    height: 25%
}

.swagger-ui .h-50 {
    height: 50%
}

.swagger-ui .h-75 {
    height: 75%
}

.swagger-ui .h-100 {
    height: 100%
}

.swagger-ui .min-h-100 {
    min-height: 100%
}

.swagger-ui .vh-25 {
    height: 25vh
}

.swagger-ui .vh-50 {
    height: 50vh
}

.swagger-ui .vh-75 {
    height: 75vh
}

.swagger-ui .vh-100 {
    height: 100vh
}

.swagger-ui .min-vh-100 {
    min-height: 100vh
}

.swagger-ui .h-auto {
    height: auto
}

.swagger-ui .h-inherit {
    height: inherit
}

@media screen and (min-width: 30em) {
    .swagger-ui .h1-ns {
        height:1rem
    }

    .swagger-ui .h2-ns {
        height: 2rem
    }

    .swagger-ui .h3-ns {
        height: 4rem
    }

    .swagger-ui .h4-ns {
        height: 8rem
    }

    .swagger-ui .h5-ns {
        height: 16rem
    }

    .swagger-ui .h-25-ns {
        height: 25%
    }

    .swagger-ui .h-50-ns {
        height: 50%
    }

    .swagger-ui .h-75-ns {
        height: 75%
    }

    .swagger-ui .h-100-ns {
        height: 100%
    }

    .swagger-ui .min-h-100-ns {
        min-height: 100%
    }

    .swagger-ui .vh-25-ns {
        height: 25vh
    }

    .swagger-ui .vh-50-ns {
        height: 50vh
    }

    .swagger-ui .vh-75-ns {
        height: 75vh
    }

    .swagger-ui .vh-100-ns {
        height: 100vh
    }

    .swagger-ui .min-vh-100-ns {
        min-height: 100vh
    }

    .swagger-ui .h-auto-ns {
        height: auto
    }

    .swagger-ui .h-inherit-ns {
        height: inherit
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .h1-m {
        height:1rem
    }

    .swagger-ui .h2-m {
        height: 2rem
    }

    .swagger-ui .h3-m {
        height: 4rem
    }

    .swagger-ui .h4-m {
        height: 8rem
    }

    .swagger-ui .h5-m {
        height: 16rem
    }

    .swagger-ui .h-25-m {
        height: 25%
    }

    .swagger-ui .h-50-m {
        height: 50%
    }

    .swagger-ui .h-75-m {
        height: 75%
    }

    .swagger-ui .h-100-m {
        height: 100%
    }

    .swagger-ui .min-h-100-m {
        min-height: 100%
    }

    .swagger-ui .vh-25-m {
        height: 25vh
    }

    .swagger-ui .vh-50-m {
        height: 50vh
    }

    .swagger-ui .vh-75-m {
        height: 75vh
    }

    .swagger-ui .vh-100-m {
        height: 100vh
    }

    .swagger-ui .min-vh-100-m {
        min-height: 100vh
    }

    .swagger-ui .h-auto-m {
        height: auto
    }

    .swagger-ui .h-inherit-m {
        height: inherit
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .h1-l {
        height:1rem
    }

    .swagger-ui .h2-l {
        height: 2rem
    }

    .swagger-ui .h3-l {
        height: 4rem
    }

    .swagger-ui .h4-l {
        height: 8rem
    }

    .swagger-ui .h5-l {
        height: 16rem
    }

    .swagger-ui .h-25-l {
        height: 25%
    }

    .swagger-ui .h-50-l {
        height: 50%
    }

    .swagger-ui .h-75-l {
        height: 75%
    }

    .swagger-ui .h-100-l {
        height: 100%
    }

    .swagger-ui .min-h-100-l {
        min-height: 100%
    }

    .swagger-ui .vh-25-l {
        height: 25vh
    }

    .swagger-ui .vh-50-l {
        height: 50vh
    }

    .swagger-ui .vh-75-l {
        height: 75vh
    }

    .swagger-ui .vh-100-l {
        height: 100vh
    }

    .swagger-ui .min-vh-100-l {
        min-height: 100vh
    }

    .swagger-ui .h-auto-l {
        height: auto
    }

    .swagger-ui .h-inherit-l {
        height: inherit
    }
}

.swagger-ui .tracked {
    letter-spacing: .1em
}

.swagger-ui .tracked-tight {
    letter-spacing: -.05em
}

.swagger-ui .tracked-mega {
    letter-spacing: .25em
}

@media screen and (min-width: 30em) {
    .swagger-ui .tracked-ns {
        letter-spacing:.1em
    }

    .swagger-ui .tracked-tight-ns {
        letter-spacing: -.05em
    }

    .swagger-ui .tracked-mega-ns {
        letter-spacing: .25em
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .tracked-m {
        letter-spacing:.1em
    }

    .swagger-ui .tracked-tight-m {
        letter-spacing: -.05em
    }

    .swagger-ui .tracked-mega-m {
        letter-spacing: .25em
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .tracked-l {
        letter-spacing:.1em
    }

    .swagger-ui .tracked-tight-l {
        letter-spacing: -.05em
    }

    .swagger-ui .tracked-mega-l {
        letter-spacing: .25em
    }
}

.swagger-ui .lh-solid {
    line-height: 1
}

.swagger-ui .lh-title {
    line-height: 1.25
}

.swagger-ui .lh-copy {
    line-height: 1.5
}

@media screen and (min-width: 30em) {
    .swagger-ui .lh-solid-ns {
        line-height:1
    }

    .swagger-ui .lh-title-ns {
        line-height: 1.25
    }

    .swagger-ui .lh-copy-ns {
        line-height: 1.5
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .lh-solid-m {
        line-height:1
    }

    .swagger-ui .lh-title-m {
        line-height: 1.25
    }

    .swagger-ui .lh-copy-m {
        line-height: 1.5
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .lh-solid-l {
        line-height:1
    }

    .swagger-ui .lh-title-l {
        line-height: 1.25
    }

    .swagger-ui .lh-copy-l {
        line-height: 1.5
    }
}

.swagger-ui .link {
    -webkit-text-decoration: none;
    text-decoration: none
}

.swagger-ui .link,.swagger-ui .link:active,.swagger-ui .link:focus,.swagger-ui .link:hover,.swagger-ui .link:link,.swagger-ui .link:visited {
    transition: color .15s ease-in
}

.swagger-ui .link:focus {
    outline: 1px dotted currentColor
}

.swagger-ui .list {
    list-style-type: none
}

.swagger-ui .mw-100 {
    max-width: 100%
}

.swagger-ui .mw1 {
    max-width: 1rem
}

.swagger-ui .mw2 {
    max-width: 2rem
}

.swagger-ui .mw3 {
    max-width: 4rem
}

.swagger-ui .mw4 {
    max-width: 8rem
}

.swagger-ui .mw5 {
    max-width: 16rem
}

.swagger-ui .mw6 {
    max-width: 32rem
}

.swagger-ui .mw7 {
    max-width: 48rem
}

.swagger-ui .mw8 {
    max-width: 64rem
}

.swagger-ui .mw9 {
    max-width: 96rem
}

.swagger-ui .mw-none {
    max-width: none
}

@media screen and (min-width: 30em) {
    .swagger-ui .mw-100-ns {
        max-width:100%
    }

    .swagger-ui .mw1-ns {
        max-width: 1rem
    }

    .swagger-ui .mw2-ns {
        max-width: 2rem
    }

    .swagger-ui .mw3-ns {
        max-width: 4rem
    }

    .swagger-ui .mw4-ns {
        max-width: 8rem
    }

    .swagger-ui .mw5-ns {
        max-width: 16rem
    }

    .swagger-ui .mw6-ns {
        max-width: 32rem
    }

    .swagger-ui .mw7-ns {
        max-width: 48rem
    }

    .swagger-ui .mw8-ns {
        max-width: 64rem
    }

    .swagger-ui .mw9-ns {
        max-width: 96rem
    }

    .swagger-ui .mw-none-ns {
        max-width: none
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .mw-100-m {
        max-width:100%
    }

    .swagger-ui .mw1-m {
        max-width: 1rem
    }

    .swagger-ui .mw2-m {
        max-width: 2rem
    }

    .swagger-ui .mw3-m {
        max-width: 4rem
    }

    .swagger-ui .mw4-m {
        max-width: 8rem
    }

    .swagger-ui .mw5-m {
        max-width: 16rem
    }

    .swagger-ui .mw6-m {
        max-width: 32rem
    }

    .swagger-ui .mw7-m {
        max-width: 48rem
    }

    .swagger-ui .mw8-m {
        max-width: 64rem
    }

    .swagger-ui .mw9-m {
        max-width: 96rem
    }

    .swagger-ui .mw-none-m {
        max-width: none
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .mw-100-l {
        max-width:100%
    }

    .swagger-ui .mw1-l {
        max-width: 1rem
    }

    .swagger-ui .mw2-l {
        max-width: 2rem
    }

    .swagger-ui .mw3-l {
        max-width: 4rem
    }

    .swagger-ui .mw4-l {
        max-width: 8rem
    }

    .swagger-ui .mw5-l {
        max-width: 16rem
    }

    .swagger-ui .mw6-l {
        max-width: 32rem
    }

    .swagger-ui .mw7-l {
        max-width: 48rem
    }

    .swagger-ui .mw8-l {
        max-width: 64rem
    }

    .swagger-ui .mw9-l {
        max-width: 96rem
    }

    .swagger-ui .mw-none-l {
        max-width: none
    }
}

.swagger-ui .w1 {
    width: 1rem
}

.swagger-ui .w2 {
    width: 2rem
}

.swagger-ui .w3 {
    width: 4rem
}

.swagger-ui .w4 {
    width: 8rem
}

.swagger-ui .w5 {
    width: 16rem
}

.swagger-ui .w-10 {
    width: 10%
}

.swagger-ui .w-20 {
    width: 20%
}

.swagger-ui .w-25 {
    width: 25%
}

.swagger-ui .w-30 {
    width: 30%
}

.swagger-ui .w-33 {
    width: 33%
}

.swagger-ui .w-34 {
    width: 34%
}

.swagger-ui .w-40 {
    width: 40%
}

.swagger-ui .w-50 {
    width: 50%
}

.swagger-ui .w-60 {
    width: 60%
}

.swagger-ui .w-70 {
    width: 70%
}

.swagger-ui .w-75 {
    width: 75%
}

.swagger-ui .w-80 {
    width: 80%
}

.swagger-ui .w-90 {
    width: 90%
}

.swagger-ui .w-100 {
    width: 100%
}

.swagger-ui .w-third {
    width: 33.3333333333%
}

.swagger-ui .w-two-thirds {
    width: 66.6666666667%
}

.swagger-ui .w-auto {
    width: auto
}

@media screen and (min-width: 30em) {
    .swagger-ui .w1-ns {
        width:1rem
    }

    .swagger-ui .w2-ns {
        width: 2rem
    }

    .swagger-ui .w3-ns {
        width: 4rem
    }

    .swagger-ui .w4-ns {
        width: 8rem
    }

    .swagger-ui .w5-ns {
        width: 16rem
    }

    .swagger-ui .w-10-ns {
        width: 10%
    }

    .swagger-ui .w-20-ns {
        width: 20%
    }

    .swagger-ui .w-25-ns {
        width: 25%
    }

    .swagger-ui .w-30-ns {
        width: 30%
    }

    .swagger-ui .w-33-ns {
        width: 33%
    }

    .swagger-ui .w-34-ns {
        width: 34%
    }

    .swagger-ui .w-40-ns {
        width: 40%
    }

    .swagger-ui .w-50-ns {
        width: 50%
    }

    .swagger-ui .w-60-ns {
        width: 60%
    }

    .swagger-ui .w-70-ns {
        width: 70%
    }

    .swagger-ui .w-75-ns {
        width: 75%
    }

    .swagger-ui .w-80-ns {
        width: 80%
    }

    .swagger-ui .w-90-ns {
        width: 90%
    }

    .swagger-ui .w-100-ns {
        width: 100%
    }

    .swagger-ui .w-third-ns {
        width: 33.3333333333%
    }

    .swagger-ui .w-two-thirds-ns {
        width: 66.6666666667%
    }

    .swagger-ui .w-auto-ns {
        width: auto
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .w1-m {
        width:1rem
    }

    .swagger-ui .w2-m {
        width: 2rem
    }

    .swagger-ui .w3-m {
        width: 4rem
    }

    .swagger-ui .w4-m {
        width: 8rem
    }

    .swagger-ui .w5-m {
        width: 16rem
    }

    .swagger-ui .w-10-m {
        width: 10%
    }

    .swagger-ui .w-20-m {
        width: 20%
    }

    .swagger-ui .w-25-m {
        width: 25%
    }

    .swagger-ui .w-30-m {
        width: 30%
    }

    .swagger-ui .w-33-m {
        width: 33%
    }

    .swagger-ui .w-34-m {
        width: 34%
    }

    .swagger-ui .w-40-m {
        width: 40%
    }

    .swagger-ui .w-50-m {
        width: 50%
    }

    .swagger-ui .w-60-m {
        width: 60%
    }

    .swagger-ui .w-70-m {
        width: 70%
    }

    .swagger-ui .w-75-m {
        width: 75%
    }

    .swagger-ui .w-80-m {
        width: 80%
    }

    .swagger-ui .w-90-m {
        width: 90%
    }

    .swagger-ui .w-100-m {
        width: 100%
    }

    .swagger-ui .w-third-m {
        width: 33.3333333333%
    }

    .swagger-ui .w-two-thirds-m {
        width: 66.6666666667%
    }

    .swagger-ui .w-auto-m {
        width: auto
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .w1-l {
        width:1rem
    }

    .swagger-ui .w2-l {
        width: 2rem
    }

    .swagger-ui .w3-l {
        width: 4rem
    }

    .swagger-ui .w4-l {
        width: 8rem
    }

    .swagger-ui .w5-l {
        width: 16rem
    }

    .swagger-ui .w-10-l {
        width: 10%
    }

    .swagger-ui .w-20-l {
        width: 20%
    }

    .swagger-ui .w-25-l {
        width: 25%
    }

    .swagger-ui .w-30-l {
        width: 30%
    }

    .swagger-ui .w-33-l {
        width: 33%
    }

    .swagger-ui .w-34-l {
        width: 34%
    }

    .swagger-ui .w-40-l {
        width: 40%
    }

    .swagger-ui .w-50-l {
        width: 50%
    }

    .swagger-ui .w-60-l {
        width: 60%
    }

    .swagger-ui .w-70-l {
        width: 70%
    }

    .swagger-ui .w-75-l {
        width: 75%
    }

    .swagger-ui .w-80-l {
        width: 80%
    }

    .swagger-ui .w-90-l {
        width: 90%
    }

    .swagger-ui .w-100-l {
        width: 100%
    }

    .swagger-ui .w-third-l {
        width: 33.3333333333%
    }

    .swagger-ui .w-two-thirds-l {
        width: 66.6666666667%
    }

    .swagger-ui .w-auto-l {
        width: auto
    }
}

.swagger-ui .overflow-visible {
    overflow: visible
}

.swagger-ui .overflow-hidden {
    overflow: hidden
}

.swagger-ui .overflow-scroll {
    overflow: scroll
}

.swagger-ui .overflow-auto {
    overflow: auto
}

.swagger-ui .overflow-x-visible {
    overflow-x: visible
}

.swagger-ui .overflow-x-hidden {
    overflow-x: hidden
}

.swagger-ui .overflow-x-scroll {
    overflow-x: scroll
}

.swagger-ui .overflow-x-auto {
    overflow-x: auto
}

.swagger-ui .overflow-y-visible {
    overflow-y: visible
}

.swagger-ui .overflow-y-hidden {
    overflow-y: hidden
}

.swagger-ui .overflow-y-scroll {
    overflow-y: scroll
}

.swagger-ui .overflow-y-auto {
    overflow-y: auto
}

@media screen and (min-width: 30em) {
    .swagger-ui .overflow-visible-ns {
        overflow:visible
    }

    .swagger-ui .overflow-hidden-ns {
        overflow: hidden
    }

    .swagger-ui .overflow-scroll-ns {
        overflow: scroll
    }

    .swagger-ui .overflow-auto-ns {
        overflow: auto
    }

    .swagger-ui .overflow-x-visible-ns {
        overflow-x: visible
    }

    .swagger-ui .overflow-x-hidden-ns {
        overflow-x: hidden
    }

    .swagger-ui .overflow-x-scroll-ns {
        overflow-x: scroll
    }

    .swagger-ui .overflow-x-auto-ns {
        overflow-x: auto
    }

    .swagger-ui .overflow-y-visible-ns {
        overflow-y: visible
    }

    .swagger-ui .overflow-y-hidden-ns {
        overflow-y: hidden
    }

    .swagger-ui .overflow-y-scroll-ns {
        overflow-y: scroll
    }

    .swagger-ui .overflow-y-auto-ns {
        overflow-y: auto
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .overflow-visible-m {
        overflow:visible
    }

    .swagger-ui .overflow-hidden-m {
        overflow: hidden
    }

    .swagger-ui .overflow-scroll-m {
        overflow: scroll
    }

    .swagger-ui .overflow-auto-m {
        overflow: auto
    }

    .swagger-ui .overflow-x-visible-m {
        overflow-x: visible
    }

    .swagger-ui .overflow-x-hidden-m {
        overflow-x: hidden
    }

    .swagger-ui .overflow-x-scroll-m {
        overflow-x: scroll
    }

    .swagger-ui .overflow-x-auto-m {
        overflow-x: auto
    }

    .swagger-ui .overflow-y-visible-m {
        overflow-y: visible
    }

    .swagger-ui .overflow-y-hidden-m {
        overflow-y: hidden
    }

    .swagger-ui .overflow-y-scroll-m {
        overflow-y: scroll
    }

    .swagger-ui .overflow-y-auto-m {
        overflow-y: auto
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .overflow-visible-l {
        overflow:visible
    }

    .swagger-ui .overflow-hidden-l {
        overflow: hidden
    }

    .swagger-ui .overflow-scroll-l {
        overflow: scroll
    }

    .swagger-ui .overflow-auto-l {
        overflow: auto
    }

    .swagger-ui .overflow-x-visible-l {
        overflow-x: visible
    }

    .swagger-ui .overflow-x-hidden-l {
        overflow-x: hidden
    }

    .swagger-ui .overflow-x-scroll-l {
        overflow-x: scroll
    }

    .swagger-ui .overflow-x-auto-l {
        overflow-x: auto
    }

    .swagger-ui .overflow-y-visible-l {
        overflow-y: visible
    }

    .swagger-ui .overflow-y-hidden-l {
        overflow-y: hidden
    }

    .swagger-ui .overflow-y-scroll-l {
        overflow-y: scroll
    }

    .swagger-ui .overflow-y-auto-l {
        overflow-y: auto
    }
}

.swagger-ui .static {
    position: static
}

.swagger-ui .relative {
    position: relative
}

.swagger-ui .absolute {
    position: absolute
}

.swagger-ui .fixed {
    position: fixed
}

@media screen and (min-width: 30em) {
    .swagger-ui .static-ns {
        position:static
    }

    .swagger-ui .relative-ns {
        position: relative
    }

    .swagger-ui .absolute-ns {
        position: absolute
    }

    .swagger-ui .fixed-ns {
        position: fixed
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .static-m {
        position:static
    }

    .swagger-ui .relative-m {
        position: relative
    }

    .swagger-ui .absolute-m {
        position: absolute
    }

    .swagger-ui .fixed-m {
        position: fixed
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .static-l {
        position:static
    }

    .swagger-ui .relative-l {
        position: relative
    }

    .swagger-ui .absolute-l {
        position: absolute
    }

    .swagger-ui .fixed-l {
        position: fixed
    }
}

.swagger-ui .o-100 {
    opacity: 1
}

.swagger-ui .o-90 {
    opacity: .9
}

.swagger-ui .o-80 {
    opacity: .8
}

.swagger-ui .o-70 {
    opacity: .7
}

.swagger-ui .o-60 {
    opacity: .6
}

.swagger-ui .o-50 {
    opacity: .5
}

.swagger-ui .o-40 {
    opacity: .4
}

.swagger-ui .o-30 {
    opacity: .3
}

.swagger-ui .o-20 {
    opacity: .2
}

.swagger-ui .o-10 {
    opacity: .1
}

.swagger-ui .o-05 {
    opacity: .05
}

.swagger-ui .o-025 {
    opacity: .025
}

.swagger-ui .o-0 {
    opacity: 0
}

.swagger-ui .rotate-45 {
    transform: rotate(45deg)
}

.swagger-ui .rotate-90 {
    transform: rotate(90deg)
}

.swagger-ui .rotate-135 {
    transform: rotate(135deg)
}

.swagger-ui .rotate-180 {
    transform: rotate(180deg)
}

.swagger-ui .rotate-225 {
    transform: rotate(225deg)
}

.swagger-ui .rotate-270 {
    transform: rotate(270deg)
}

.swagger-ui .rotate-315 {
    transform: rotate(315deg)
}

@media screen and (min-width: 30em) {
    .swagger-ui .rotate-45-ns {
        transform:rotate(45deg)
    }

    .swagger-ui .rotate-90-ns {
        transform: rotate(90deg)
    }

    .swagger-ui .rotate-135-ns {
        transform: rotate(135deg)
    }

    .swagger-ui .rotate-180-ns {
        transform: rotate(180deg)
    }

    .swagger-ui .rotate-225-ns {
        transform: rotate(225deg)
    }

    .swagger-ui .rotate-270-ns {
        transform: rotate(270deg)
    }

    .swagger-ui .rotate-315-ns {
        transform: rotate(315deg)
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .rotate-45-m {
        transform:rotate(45deg)
    }

    .swagger-ui .rotate-90-m {
        transform: rotate(90deg)
    }

    .swagger-ui .rotate-135-m {
        transform: rotate(135deg)
    }

    .swagger-ui .rotate-180-m {
        transform: rotate(180deg)
    }

    .swagger-ui .rotate-225-m {
        transform: rotate(225deg)
    }

    .swagger-ui .rotate-270-m {
        transform: rotate(270deg)
    }

    .swagger-ui .rotate-315-m {
        transform: rotate(315deg)
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .rotate-45-l {
        transform:rotate(45deg)
    }

    .swagger-ui .rotate-90-l {
        transform: rotate(90deg)
    }

    .swagger-ui .rotate-135-l {
        transform: rotate(135deg)
    }

    .swagger-ui .rotate-180-l {
        transform: rotate(180deg)
    }

    .swagger-ui .rotate-225-l {
        transform: rotate(225deg)
    }

    .swagger-ui .rotate-270-l {
        transform: rotate(270deg)
    }

    .swagger-ui .rotate-315-l {
        transform: rotate(315deg)
    }
}

.swagger-ui .black-90 {
    color: #000000e6
}

.swagger-ui .black-80 {
    color: #000c
}

.swagger-ui .black-70 {
    color: #000000b3
}

.swagger-ui .black-60 {
    color: #0009
}

.swagger-ui .black-50 {
    color: #00000080
}

.swagger-ui .black-40 {
    color: #0006
}

.swagger-ui .black-30 {
    color: #0000004d
}

.swagger-ui .black-20 {
    color: #0003
}

.swagger-ui .black-10 {
    color: #0000001a
}

.swagger-ui .black-05 {
    color: #0000000d
}

.swagger-ui .white-90 {
    color: #ffffffe6
}

.swagger-ui .white-80 {
    color: #fffc
}

.swagger-ui .white-70 {
    color: #ffffffb3
}

.swagger-ui .white-60 {
    color: #fff9
}

.swagger-ui .white-50 {
    color: #ffffff80
}

.swagger-ui .white-40 {
    color: #fff6
}

.swagger-ui .white-30 {
    color: #ffffff4d
}

.swagger-ui .white-20 {
    color: #fff3
}

.swagger-ui .white-10 {
    color: #ffffff1a
}

.swagger-ui .black {
    color: #000
}

.swagger-ui .near-black {
    color: #111
}

.swagger-ui .dark-gray {
    color: #333
}

.swagger-ui .mid-gray {
    color: #555
}

.swagger-ui .gray {
    color: #777
}

.swagger-ui .silver {
    color: #999
}

.swagger-ui .light-silver {
    color: #aaa
}

.swagger-ui .moon-gray {
    color: #ccc
}

.swagger-ui .light-gray {
    color: #eee
}

.swagger-ui .near-white {
    color: #f4f4f4
}

.swagger-ui .white {
    color: #fff
}

.swagger-ui .dark-red {
    color: #e7040f
}

.swagger-ui .red {
    color: #ff4136
}

.swagger-ui .light-red {
    color: #ff725c
}

.swagger-ui .orange {
    color: #ff6300
}

.swagger-ui .gold {
    color: #ffb700
}

.swagger-ui .yellow {
    color: gold
}

.swagger-ui .light-yellow {
    color: #fbf1a9
}

.swagger-ui .purple {
    color: #5e2ca5
}

.swagger-ui .light-purple {
    color: #a463f2
}

.swagger-ui .dark-pink {
    color: #d5008f
}

.swagger-ui .hot-pink {
    color: #ff41b4
}

.swagger-ui .pink {
    color: #ff80cc
}

.swagger-ui .light-pink {
    color: #ffa3d7
}

.swagger-ui .dark-green {
    color: #137752
}

.swagger-ui .green {
    color: #19a974
}

.swagger-ui .light-green {
    color: #9eebcf
}

.swagger-ui .navy {
    color: #001b44
}

.swagger-ui .dark-blue {
    color: #00449e
}

.swagger-ui .blue {
    color: #357edd
}

.swagger-ui .light-blue {
    color: #96ccff
}

.swagger-ui .lightest-blue {
    color: #cdecff
}

.swagger-ui .washed-blue {
    color: #f6fffe
}

.swagger-ui .washed-green {
    color: #e8fdf5
}

.swagger-ui .washed-yellow {
    color: #fffceb
}

.swagger-ui .washed-red {
    color: #ffdfdf
}

.swagger-ui .color-inherit {
    color: inherit
}

.swagger-ui .bg-black-90 {
    background-color: #000000e6
}

.swagger-ui .bg-black-80 {
    background-color: #000c
}

.swagger-ui .bg-black-70 {
    background-color: #000000b3
}

.swagger-ui .bg-black-60 {
    background-color: #0009
}

.swagger-ui .bg-black-50 {
    background-color: #00000080
}

.swagger-ui .bg-black-40 {
    background-color: #0006
}

.swagger-ui .bg-black-30 {
    background-color: #0000004d
}

.swagger-ui .bg-black-20 {
    background-color: #0003
}

.swagger-ui .bg-black-10 {
    background-color: #0000001a
}

.swagger-ui .bg-black-05 {
    background-color: #0000000d
}

.swagger-ui .bg-white-90 {
    background-color: #ffffffe6
}

.swagger-ui .bg-white-80 {
    background-color: #fffc
}

.swagger-ui .bg-white-70 {
    background-color: #ffffffb3
}

.swagger-ui .bg-white-60 {
    background-color: #fff9
}

.swagger-ui .bg-white-50 {
    background-color: #ffffff80
}

.swagger-ui .bg-white-40 {
    background-color: #fff6
}

.swagger-ui .bg-white-30 {
    background-color: #ffffff4d
}

.swagger-ui .bg-white-20 {
    background-color: #fff3
}

.swagger-ui .bg-white-10 {
    background-color: #ffffff1a
}

.swagger-ui .bg-black {
    background-color: #000
}

.swagger-ui .bg-near-black {
    background-color: #111
}

.swagger-ui .bg-dark-gray {
    background-color: #333
}

.swagger-ui .bg-mid-gray {
    background-color: #555
}

.swagger-ui .bg-gray {
    background-color: #777
}

.swagger-ui .bg-silver {
    background-color: #999
}

.swagger-ui .bg-light-silver {
    background-color: #aaa
}

.swagger-ui .bg-moon-gray {
    background-color: #ccc
}

.swagger-ui .bg-light-gray {
    background-color: #eee
}

.swagger-ui .bg-near-white {
    background-color: #f4f4f4
}

.swagger-ui .bg-white {
    background-color: #fff
}

.swagger-ui .bg-transparent {
    background-color: transparent
}

.swagger-ui .bg-dark-red {
    background-color: #e7040f
}

.swagger-ui .bg-red {
    background-color: #ff4136
}

.swagger-ui .bg-light-red {
    background-color: #ff725c
}

.swagger-ui .bg-orange {
    background-color: #ff6300
}

.swagger-ui .bg-gold {
    background-color: #ffb700
}

.swagger-ui .bg-yellow {
    background-color: gold
}

.swagger-ui .bg-light-yellow {
    background-color: #fbf1a9
}

.swagger-ui .bg-purple {
    background-color: #5e2ca5
}

.swagger-ui .bg-light-purple {
    background-color: #a463f2
}

.swagger-ui .bg-dark-pink {
    background-color: #d5008f
}

.swagger-ui .bg-hot-pink {
    background-color: #ff41b4
}

.swagger-ui .bg-pink {
    background-color: #ff80cc
}

.swagger-ui .bg-light-pink {
    background-color: #ffa3d7
}

.swagger-ui .bg-dark-green {
    background-color: #137752
}

.swagger-ui .bg-green {
    background-color: #19a974
}

.swagger-ui .bg-light-green {
    background-color: #9eebcf
}

.swagger-ui .bg-navy {
    background-color: #001b44
}

.swagger-ui .bg-dark-blue {
    background-color: #00449e
}

.swagger-ui .bg-blue {
    background-color: #357edd
}

.swagger-ui .bg-light-blue {
    background-color: #96ccff
}

.swagger-ui .bg-lightest-blue {
    background-color: #cdecff
}

.swagger-ui .bg-washed-blue {
    background-color: #f6fffe
}

.swagger-ui .bg-washed-green {
    background-color: #e8fdf5
}

.swagger-ui .bg-washed-yellow {
    background-color: #fffceb
}

.swagger-ui .bg-washed-red {
    background-color: #ffdfdf
}

.swagger-ui .bg-inherit {
    background-color: inherit
}

.swagger-ui .hover-black:focus,.swagger-ui .hover-black:hover {
    color: #000
}

.swagger-ui .hover-near-black:focus,.swagger-ui .hover-near-black:hover {
    color: #111
}

.swagger-ui .hover-dark-gray:focus,.swagger-ui .hover-dark-gray:hover {
    color: #333
}

.swagger-ui .hover-mid-gray:focus,.swagger-ui .hover-mid-gray:hover {
    color: #555
}

.swagger-ui .hover-gray:focus,.swagger-ui .hover-gray:hover {
    color: #777
}

.swagger-ui .hover-silver:focus,.swagger-ui .hover-silver:hover {
    color: #999
}

.swagger-ui .hover-light-silver:focus,.swagger-ui .hover-light-silver:hover {
    color: #aaa
}

.swagger-ui .hover-moon-gray:focus,.swagger-ui .hover-moon-gray:hover {
    color: #ccc
}

.swagger-ui .hover-light-gray:focus,.swagger-ui .hover-light-gray:hover {
    color: #eee
}

.swagger-ui .hover-near-white:focus,.swagger-ui .hover-near-white:hover {
    color: #f4f4f4
}

.swagger-ui .hover-white:focus,.swagger-ui .hover-white:hover {
    color: #fff
}

.swagger-ui .hover-black-90:focus,.swagger-ui .hover-black-90:hover {
    color: #000000e6
}

.swagger-ui .hover-black-80:focus,.swagger-ui .hover-black-80:hover {
    color: #000c
}

.swagger-ui .hover-black-70:focus,.swagger-ui .hover-black-70:hover {
    color: #000000b3
}

.swagger-ui .hover-black-60:focus,.swagger-ui .hover-black-60:hover {
    color: #0009
}

.swagger-ui .hover-black-50:focus,.swagger-ui .hover-black-50:hover {
    color: #00000080
}

.swagger-ui .hover-black-40:focus,.swagger-ui .hover-black-40:hover {
    color: #0006
}

.swagger-ui .hover-black-30:focus,.swagger-ui .hover-black-30:hover {
    color: #0000004d
}

.swagger-ui .hover-black-20:focus,.swagger-ui .hover-black-20:hover {
    color: #0003
}

.swagger-ui .hover-black-10:focus,.swagger-ui .hover-black-10:hover {
    color: #0000001a
}

.swagger-ui .hover-white-90:focus,.swagger-ui .hover-white-90:hover {
    color: #ffffffe6
}

.swagger-ui .hover-white-80:focus,.swagger-ui .hover-white-80:hover {
    color: #fffc
}

.swagger-ui .hover-white-70:focus,.swagger-ui .hover-white-70:hover {
    color: #ffffffb3
}

.swagger-ui .hover-white-60:focus,.swagger-ui .hover-white-60:hover {
    color: #fff9
}

.swagger-ui .hover-white-50:focus,.swagger-ui .hover-white-50:hover {
    color: #ffffff80
}

.swagger-ui .hover-white-40:focus,.swagger-ui .hover-white-40:hover {
    color: #fff6
}

.swagger-ui .hover-white-30:focus,.swagger-ui .hover-white-30:hover {
    color: #ffffff4d
}

.swagger-ui .hover-white-20:focus,.swagger-ui .hover-white-20:hover {
    color: #fff3
}

.swagger-ui .hover-white-10:focus,.swagger-ui .hover-white-10:hover {
    color: #ffffff1a
}

.swagger-ui .hover-inherit:focus,.swagger-ui .hover-inherit:hover {
    color: inherit
}

.swagger-ui .hover-bg-black:focus,.swagger-ui .hover-bg-black:hover {
    background-color: #000
}

.swagger-ui .hover-bg-near-black:focus,.swagger-ui .hover-bg-near-black:hover {
    background-color: #111
}

.swagger-ui .hover-bg-dark-gray:focus,.swagger-ui .hover-bg-dark-gray:hover {
    background-color: #333
}

.swagger-ui .hover-bg-mid-gray:focus,.swagger-ui .hover-bg-mid-gray:hover {
    background-color: #555
}

.swagger-ui .hover-bg-gray:focus,.swagger-ui .hover-bg-gray:hover {
    background-color: #777
}

.swagger-ui .hover-bg-silver:focus,.swagger-ui .hover-bg-silver:hover {
    background-color: #999
}

.swagger-ui .hover-bg-light-silver:focus,.swagger-ui .hover-bg-light-silver:hover {
    background-color: #aaa
}

.swagger-ui .hover-bg-moon-gray:focus,.swagger-ui .hover-bg-moon-gray:hover {
    background-color: #ccc
}

.swagger-ui .hover-bg-light-gray:focus,.swagger-ui .hover-bg-light-gray:hover {
    background-color: #eee
}

.swagger-ui .hover-bg-near-white:focus,.swagger-ui .hover-bg-near-white:hover {
    background-color: #f4f4f4
}

.swagger-ui .hover-bg-white:focus,.swagger-ui .hover-bg-white:hover {
    background-color: #fff
}

.swagger-ui .hover-bg-transparent:focus,.swagger-ui .hover-bg-transparent:hover {
    background-color: transparent
}

.swagger-ui .hover-bg-black-90:focus,.swagger-ui .hover-bg-black-90:hover {
    background-color: #000000e6
}

.swagger-ui .hover-bg-black-80:focus,.swagger-ui .hover-bg-black-80:hover {
    background-color: #000c
}

.swagger-ui .hover-bg-black-70:focus,.swagger-ui .hover-bg-black-70:hover {
    background-color: #000000b3
}

.swagger-ui .hover-bg-black-60:focus,.swagger-ui .hover-bg-black-60:hover {
    background-color: #0009
}

.swagger-ui .hover-bg-black-50:focus,.swagger-ui .hover-bg-black-50:hover {
    background-color: #00000080
}

.swagger-ui .hover-bg-black-40:focus,.swagger-ui .hover-bg-black-40:hover {
    background-color: #0006
}

.swagger-ui .hover-bg-black-30:focus,.swagger-ui .hover-bg-black-30:hover {
    background-color: #0000004d
}

.swagger-ui .hover-bg-black-20:focus,.swagger-ui .hover-bg-black-20:hover {
    background-color: #0003
}

.swagger-ui .hover-bg-black-10:focus,.swagger-ui .hover-bg-black-10:hover {
    background-color: #0000001a
}

.swagger-ui .hover-bg-white-90:focus,.swagger-ui .hover-bg-white-90:hover {
    background-color: #ffffffe6
}

.swagger-ui .hover-bg-white-80:focus,.swagger-ui .hover-bg-white-80:hover {
    background-color: #fffc
}

.swagger-ui .hover-bg-white-70:focus,.swagger-ui .hover-bg-white-70:hover {
    background-color: #ffffffb3
}

.swagger-ui .hover-bg-white-60:focus,.swagger-ui .hover-bg-white-60:hover {
    background-color: #fff9
}

.swagger-ui .hover-bg-white-50:focus,.swagger-ui .hover-bg-white-50:hover {
    background-color: #ffffff80
}

.swagger-ui .hover-bg-white-40:focus,.swagger-ui .hover-bg-white-40:hover {
    background-color: #fff6
}

.swagger-ui .hover-bg-white-30:focus,.swagger-ui .hover-bg-white-30:hover {
    background-color: #ffffff4d
}

.swagger-ui .hover-bg-white-20:focus,.swagger-ui .hover-bg-white-20:hover {
    background-color: #fff3
}

.swagger-ui .hover-bg-white-10:focus,.swagger-ui .hover-bg-white-10:hover {
    background-color: #ffffff1a
}

.swagger-ui .hover-dark-red:focus,.swagger-ui .hover-dark-red:hover {
    color: #e7040f
}

.swagger-ui .hover-red:focus,.swagger-ui .hover-red:hover {
    color: #ff4136
}

.swagger-ui .hover-light-red:focus,.swagger-ui .hover-light-red:hover {
    color: #ff725c
}

.swagger-ui .hover-orange:focus,.swagger-ui .hover-orange:hover {
    color: #ff6300
}

.swagger-ui .hover-gold:focus,.swagger-ui .hover-gold:hover {
    color: #ffb700
}

.swagger-ui .hover-yellow:focus,.swagger-ui .hover-yellow:hover {
    color: gold
}

.swagger-ui .hover-light-yellow:focus,.swagger-ui .hover-light-yellow:hover {
    color: #fbf1a9
}

.swagger-ui .hover-purple:focus,.swagger-ui .hover-purple:hover {
    color: #5e2ca5
}

.swagger-ui .hover-light-purple:focus,.swagger-ui .hover-light-purple:hover {
    color: #a463f2
}

.swagger-ui .hover-dark-pink:focus,.swagger-ui .hover-dark-pink:hover {
    color: #d5008f
}

.swagger-ui .hover-hot-pink:focus,.swagger-ui .hover-hot-pink:hover {
    color: #ff41b4
}

.swagger-ui .hover-pink:focus,.swagger-ui .hover-pink:hover {
    color: #ff80cc
}

.swagger-ui .hover-light-pink:focus,.swagger-ui .hover-light-pink:hover {
    color: #ffa3d7
}

.swagger-ui .hover-dark-green:focus,.swagger-ui .hover-dark-green:hover {
    color: #137752
}

.swagger-ui .hover-green:focus,.swagger-ui .hover-green:hover {
    color: #19a974
}

.swagger-ui .hover-light-green:focus,.swagger-ui .hover-light-green:hover {
    color: #9eebcf
}

.swagger-ui .hover-navy:focus,.swagger-ui .hover-navy:hover {
    color: #001b44
}

.swagger-ui .hover-dark-blue:focus,.swagger-ui .hover-dark-blue:hover {
    color: #00449e
}

.swagger-ui .hover-blue:focus,.swagger-ui .hover-blue:hover {
    color: #357edd
}

.swagger-ui .hover-light-blue:focus,.swagger-ui .hover-light-blue:hover {
    color: #96ccff
}

.swagger-ui .hover-lightest-blue:focus,.swagger-ui .hover-lightest-blue:hover {
    color: #cdecff
}

.swagger-ui .hover-washed-blue:focus,.swagger-ui .hover-washed-blue:hover {
    color: #f6fffe
}

.swagger-ui .hover-washed-green:focus,.swagger-ui .hover-washed-green:hover {
    color: #e8fdf5
}

.swagger-ui .hover-washed-yellow:focus,.swagger-ui .hover-washed-yellow:hover {
    color: #fffceb
}

.swagger-ui .hover-washed-red:focus,.swagger-ui .hover-washed-red:hover {
    color: #ffdfdf
}

.swagger-ui .hover-bg-dark-red:focus,.swagger-ui .hover-bg-dark-red:hover {
    background-color: #e7040f
}

.swagger-ui .hover-bg-red:focus,.swagger-ui .hover-bg-red:hover {
    background-color: #ff4136
}

.swagger-ui .hover-bg-light-red:focus,.swagger-ui .hover-bg-light-red:hover {
    background-color: #ff725c
}

.swagger-ui .hover-bg-orange:focus,.swagger-ui .hover-bg-orange:hover {
    background-color: #ff6300
}

.swagger-ui .hover-bg-gold:focus,.swagger-ui .hover-bg-gold:hover {
    background-color: #ffb700
}

.swagger-ui .hover-bg-yellow:focus,.swagger-ui .hover-bg-yellow:hover {
    background-color: gold
}

.swagger-ui .hover-bg-light-yellow:focus,.swagger-ui .hover-bg-light-yellow:hover {
    background-color: #fbf1a9
}

.swagger-ui .hover-bg-purple:focus,.swagger-ui .hover-bg-purple:hover {
    background-color: #5e2ca5
}

.swagger-ui .hover-bg-light-purple:focus,.swagger-ui .hover-bg-light-purple:hover {
    background-color: #a463f2
}

.swagger-ui .hover-bg-dark-pink:focus,.swagger-ui .hover-bg-dark-pink:hover {
    background-color: #d5008f
}

.swagger-ui .hover-bg-hot-pink:focus,.swagger-ui .hover-bg-hot-pink:hover {
    background-color: #ff41b4
}

.swagger-ui .hover-bg-pink:focus,.swagger-ui .hover-bg-pink:hover {
    background-color: #ff80cc
}

.swagger-ui .hover-bg-light-pink:focus,.swagger-ui .hover-bg-light-pink:hover {
    background-color: #ffa3d7
}

.swagger-ui .hover-bg-dark-green:focus,.swagger-ui .hover-bg-dark-green:hover {
    background-color: #137752
}

.swagger-ui .hover-bg-green:focus,.swagger-ui .hover-bg-green:hover {
    background-color: #19a974
}

.swagger-ui .hover-bg-light-green:focus,.swagger-ui .hover-bg-light-green:hover {
    background-color: #9eebcf
}

.swagger-ui .hover-bg-navy:focus,.swagger-ui .hover-bg-navy:hover {
    background-color: #001b44
}

.swagger-ui .hover-bg-dark-blue:focus,.swagger-ui .hover-bg-dark-blue:hover {
    background-color: #00449e
}

.swagger-ui .hover-bg-blue:focus,.swagger-ui .hover-bg-blue:hover {
    background-color: #357edd
}

.swagger-ui .hover-bg-light-blue:focus,.swagger-ui .hover-bg-light-blue:hover {
    background-color: #96ccff
}

.swagger-ui .hover-bg-lightest-blue:focus,.swagger-ui .hover-bg-lightest-blue:hover {
    background-color: #cdecff
}

.swagger-ui .hover-bg-washed-blue:focus,.swagger-ui .hover-bg-washed-blue:hover {
    background-color: #f6fffe
}

.swagger-ui .hover-bg-washed-green:focus,.swagger-ui .hover-bg-washed-green:hover {
    background-color: #e8fdf5
}

.swagger-ui .hover-bg-washed-yellow:focus,.swagger-ui .hover-bg-washed-yellow:hover {
    background-color: #fffceb
}

.swagger-ui .hover-bg-washed-red:focus,.swagger-ui .hover-bg-washed-red:hover {
    background-color: #ffdfdf
}

.swagger-ui .hover-bg-inherit:focus,.swagger-ui .hover-bg-inherit:hover {
    background-color: inherit
}

.swagger-ui .pa0 {
    padding: 0
}

.swagger-ui .pa1 {
    padding: .25rem
}

.swagger-ui .pa2 {
    padding: .5rem
}

.swagger-ui .pa3 {
    padding: 1rem
}

.swagger-ui .pa4 {
    padding: 2rem
}

.swagger-ui .pa5 {
    padding: 4rem
}

.swagger-ui .pa6 {
    padding: 8rem
}

.swagger-ui .pa7 {
    padding: 16rem
}

.swagger-ui .pl0 {
    padding-left: 0
}

.swagger-ui .pl1 {
    padding-left: .25rem
}

.swagger-ui .pl2 {
    padding-left: .5rem
}

.swagger-ui .pl3 {
    padding-left: 1rem
}

.swagger-ui .pl4 {
    padding-left: 2rem
}

.swagger-ui .pl5 {
    padding-left: 4rem
}

.swagger-ui .pl6 {
    padding-left: 8rem
}

.swagger-ui .pl7 {
    padding-left: 16rem
}

.swagger-ui .pr0 {
    padding-right: 0
}

.swagger-ui .pr1 {
    padding-right: .25rem
}

.swagger-ui .pr2 {
    padding-right: .5rem
}

.swagger-ui .pr3 {
    padding-right: 1rem
}

.swagger-ui .pr4 {
    padding-right: 2rem
}

.swagger-ui .pr5 {
    padding-right: 4rem
}

.swagger-ui .pr6 {
    padding-right: 8rem
}

.swagger-ui .pr7 {
    padding-right: 16rem
}

.swagger-ui .pb0 {
    padding-bottom: 0
}

.swagger-ui .pb1 {
    padding-bottom: .25rem
}

.swagger-ui .pb2 {
    padding-bottom: .5rem
}

.swagger-ui .pb3 {
    padding-bottom: 1rem
}

.swagger-ui .pb4 {
    padding-bottom: 2rem
}

.swagger-ui .pb5 {
    padding-bottom: 4rem
}

.swagger-ui .pb6 {
    padding-bottom: 8rem
}

.swagger-ui .pb7 {
    padding-bottom: 16rem
}

.swagger-ui .pt0 {
    padding-top: 0
}

.swagger-ui .pt1 {
    padding-top: .25rem
}

.swagger-ui .pt2 {
    padding-top: .5rem
}

.swagger-ui .pt3 {
    padding-top: 1rem
}

.swagger-ui .pt4 {
    padding-top: 2rem
}

.swagger-ui .pt5 {
    padding-top: 4rem
}

.swagger-ui .pt6 {
    padding-top: 8rem
}

.swagger-ui .pt7 {
    padding-top: 16rem
}

.swagger-ui .pv0 {
    padding-bottom: 0;
    padding-top: 0
}

.swagger-ui .pv1 {
    padding-bottom: .25rem;
    padding-top: .25rem
}

.swagger-ui .pv2 {
    padding-bottom: .5rem;
    padding-top: .5rem
}

.swagger-ui .pv3 {
    padding-bottom: 1rem;
    padding-top: 1rem
}

.swagger-ui .pv4 {
    padding-bottom: 2rem;
    padding-top: 2rem
}

.swagger-ui .pv5 {
    padding-bottom: 4rem;
    padding-top: 4rem
}

.swagger-ui .pv6 {
    padding-bottom: 8rem;
    padding-top: 8rem
}

.swagger-ui .pv7 {
    padding-bottom: 16rem;
    padding-top: 16rem
}

.swagger-ui .ph0 {
    padding-left: 0;
    padding-right: 0
}

.swagger-ui .ph1 {
    padding-left: .25rem;
    padding-right: .25rem
}

.swagger-ui .ph2 {
    padding-left: .5rem;
    padding-right: .5rem
}

.swagger-ui .ph3 {
    padding-left: 1rem;
    padding-right: 1rem
}

.swagger-ui .ph4 {
    padding-left: 2rem;
    padding-right: 2rem
}

.swagger-ui .ph5 {
    padding-left: 4rem;
    padding-right: 4rem
}

.swagger-ui .ph6 {
    padding-left: 8rem;
    padding-right: 8rem
}

.swagger-ui .ph7 {
    padding-left: 16rem;
    padding-right: 16rem
}

.swagger-ui .ma0 {
    margin: 0
}

.swagger-ui .ma1 {
    margin: .25rem
}

.swagger-ui .ma2 {
    margin: .5rem
}

.swagger-ui .ma3 {
    margin: 1rem
}

.swagger-ui .ma4 {
    margin: 2rem
}

.swagger-ui .ma5 {
    margin: 4rem
}

.swagger-ui .ma6 {
    margin: 8rem
}

.swagger-ui .ma7 {
    margin: 16rem
}

.swagger-ui .ml0 {
    margin-left: 0
}

.swagger-ui .ml1 {
    margin-left: .25rem
}

.swagger-ui .ml2 {
    margin-left: .5rem
}

.swagger-ui .ml3 {
    margin-left: 1rem
}

.swagger-ui .ml4 {
    margin-left: 2rem
}

.swagger-ui .ml5 {
    margin-left: 4rem
}

.swagger-ui .ml6 {
    margin-left: 8rem
}

.swagger-ui .ml7 {
    margin-left: 16rem
}

.swagger-ui .mr0 {
    margin-right: 0
}

.swagger-ui .mr1 {
    margin-right: .25rem
}

.swagger-ui .mr2 {
    margin-right: .5rem
}

.swagger-ui .mr3 {
    margin-right: 1rem
}

.swagger-ui .mr4 {
    margin-right: 2rem
}

.swagger-ui .mr5 {
    margin-right: 4rem
}

.swagger-ui .mr6 {
    margin-right: 8rem
}

.swagger-ui .mr7 {
    margin-right: 16rem
}

.swagger-ui .mb0 {
    margin-bottom: 0
}

.swagger-ui .mb1 {
    margin-bottom: .25rem
}

.swagger-ui .mb2 {
    margin-bottom: .5rem
}

.swagger-ui .mb3 {
    margin-bottom: 1rem
}

.swagger-ui .mb4 {
    margin-bottom: 2rem
}

.swagger-ui .mb5 {
    margin-bottom: 4rem
}

.swagger-ui .mb6 {
    margin-bottom: 8rem
}

.swagger-ui .mb7 {
    margin-bottom: 16rem
}

.swagger-ui .mt0 {
    margin-top: 0
}

.swagger-ui .mt1 {
    margin-top: .25rem
}

.swagger-ui .mt2 {
    margin-top: .5rem
}

.swagger-ui .mt3 {
    margin-top: 1rem
}

.swagger-ui .mt4 {
    margin-top: 2rem
}

.swagger-ui .mt5 {
    margin-top: 4rem
}

.swagger-ui .mt6 {
    margin-top: 8rem
}

.swagger-ui .mt7 {
    margin-top: 16rem
}

.swagger-ui .mv0 {
    margin-bottom: 0;
    margin-top: 0
}

.swagger-ui .mv1 {
    margin-bottom: .25rem;
    margin-top: .25rem
}

.swagger-ui .mv2 {
    margin-bottom: .5rem;
    margin-top: .5rem
}

.swagger-ui .mv3 {
    margin-bottom: 1rem;
    margin-top: 1rem
}

.swagger-ui .mv4 {
    margin-bottom: 2rem;
    margin-top: 2rem
}

.swagger-ui .mv5 {
    margin-bottom: 4rem;
    margin-top: 4rem
}

.swagger-ui .mv6 {
    margin-bottom: 8rem;
    margin-top: 8rem
}

.swagger-ui .mv7 {
    margin-bottom: 16rem;
    margin-top: 16rem
}

.swagger-ui .mh0 {
    margin-left: 0;
    margin-right: 0
}

.swagger-ui .mh1 {
    margin-left: .25rem;
    margin-right: .25rem
}

.swagger-ui .mh2 {
    margin-left: .5rem;
    margin-right: .5rem
}

.swagger-ui .mh3 {
    margin-left: 1rem;
    margin-right: 1rem
}

.swagger-ui .mh4 {
    margin-left: 2rem;
    margin-right: 2rem
}

.swagger-ui .mh5 {
    margin-left: 4rem;
    margin-right: 4rem
}

.swagger-ui .mh6 {
    margin-left: 8rem;
    margin-right: 8rem
}

.swagger-ui .mh7 {
    margin-left: 16rem;
    margin-right: 16rem
}

@media screen and (min-width: 30em) {
    .swagger-ui .pa0-ns {
        padding:0
    }

    .swagger-ui .pa1-ns {
        padding: .25rem
    }

    .swagger-ui .pa2-ns {
        padding: .5rem
    }

    .swagger-ui .pa3-ns {
        padding: 1rem
    }

    .swagger-ui .pa4-ns {
        padding: 2rem
    }

    .swagger-ui .pa5-ns {
        padding: 4rem
    }

    .swagger-ui .pa6-ns {
        padding: 8rem
    }

    .swagger-ui .pa7-ns {
        padding: 16rem
    }

    .swagger-ui .pl0-ns {
        padding-left: 0
    }

    .swagger-ui .pl1-ns {
        padding-left: .25rem
    }

    .swagger-ui .pl2-ns {
        padding-left: .5rem
    }

    .swagger-ui .pl3-ns {
        padding-left: 1rem
    }

    .swagger-ui .pl4-ns {
        padding-left: 2rem
    }

    .swagger-ui .pl5-ns {
        padding-left: 4rem
    }

    .swagger-ui .pl6-ns {
        padding-left: 8rem
    }

    .swagger-ui .pl7-ns {
        padding-left: 16rem
    }

    .swagger-ui .pr0-ns {
        padding-right: 0
    }

    .swagger-ui .pr1-ns {
        padding-right: .25rem
    }

    .swagger-ui .pr2-ns {
        padding-right: .5rem
    }

    .swagger-ui .pr3-ns {
        padding-right: 1rem
    }

    .swagger-ui .pr4-ns {
        padding-right: 2rem
    }

    .swagger-ui .pr5-ns {
        padding-right: 4rem
    }

    .swagger-ui .pr6-ns {
        padding-right: 8rem
    }

    .swagger-ui .pr7-ns {
        padding-right: 16rem
    }

    .swagger-ui .pb0-ns {
        padding-bottom: 0
    }

    .swagger-ui .pb1-ns {
        padding-bottom: .25rem
    }

    .swagger-ui .pb2-ns {
        padding-bottom: .5rem
    }

    .swagger-ui .pb3-ns {
        padding-bottom: 1rem
    }

    .swagger-ui .pb4-ns {
        padding-bottom: 2rem
    }

    .swagger-ui .pb5-ns {
        padding-bottom: 4rem
    }

    .swagger-ui .pb6-ns {
        padding-bottom: 8rem
    }

    .swagger-ui .pb7-ns {
        padding-bottom: 16rem
    }

    .swagger-ui .pt0-ns {
        padding-top: 0
    }

    .swagger-ui .pt1-ns {
        padding-top: .25rem
    }

    .swagger-ui .pt2-ns {
        padding-top: .5rem
    }

    .swagger-ui .pt3-ns {
        padding-top: 1rem
    }

    .swagger-ui .pt4-ns {
        padding-top: 2rem
    }

    .swagger-ui .pt5-ns {
        padding-top: 4rem
    }

    .swagger-ui .pt6-ns {
        padding-top: 8rem
    }

    .swagger-ui .pt7-ns {
        padding-top: 16rem
    }

    .swagger-ui .pv0-ns {
        padding-bottom: 0;
        padding-top: 0
    }

    .swagger-ui .pv1-ns {
        padding-bottom: .25rem;
        padding-top: .25rem
    }

    .swagger-ui .pv2-ns {
        padding-bottom: .5rem;
        padding-top: .5rem
    }

    .swagger-ui .pv3-ns {
        padding-bottom: 1rem;
        padding-top: 1rem
    }

    .swagger-ui .pv4-ns {
        padding-bottom: 2rem;
        padding-top: 2rem
    }

    .swagger-ui .pv5-ns {
        padding-bottom: 4rem;
        padding-top: 4rem
    }

    .swagger-ui .pv6-ns {
        padding-bottom: 8rem;
        padding-top: 8rem
    }

    .swagger-ui .pv7-ns {
        padding-bottom: 16rem;
        padding-top: 16rem
    }

    .swagger-ui .ph0-ns {
        padding-left: 0;
        padding-right: 0
    }

    .swagger-ui .ph1-ns {
        padding-left: .25rem;
        padding-right: .25rem
    }

    .swagger-ui .ph2-ns {
        padding-left: .5rem;
        padding-right: .5rem
    }

    .swagger-ui .ph3-ns {
        padding-left: 1rem;
        padding-right: 1rem
    }

    .swagger-ui .ph4-ns {
        padding-left: 2rem;
        padding-right: 2rem
    }

    .swagger-ui .ph5-ns {
        padding-left: 4rem;
        padding-right: 4rem
    }

    .swagger-ui .ph6-ns {
        padding-left: 8rem;
        padding-right: 8rem
    }

    .swagger-ui .ph7-ns {
        padding-left: 16rem;
        padding-right: 16rem
    }

    .swagger-ui .ma0-ns {
        margin: 0
    }

    .swagger-ui .ma1-ns {
        margin: .25rem
    }

    .swagger-ui .ma2-ns {
        margin: .5rem
    }

    .swagger-ui .ma3-ns {
        margin: 1rem
    }

    .swagger-ui .ma4-ns {
        margin: 2rem
    }

    .swagger-ui .ma5-ns {
        margin: 4rem
    }

    .swagger-ui .ma6-ns {
        margin: 8rem
    }

    .swagger-ui .ma7-ns {
        margin: 16rem
    }

    .swagger-ui .ml0-ns {
        margin-left: 0
    }

    .swagger-ui .ml1-ns {
        margin-left: .25rem
    }

    .swagger-ui .ml2-ns {
        margin-left: .5rem
    }

    .swagger-ui .ml3-ns {
        margin-left: 1rem
    }

    .swagger-ui .ml4-ns {
        margin-left: 2rem
    }

    .swagger-ui .ml5-ns {
        margin-left: 4rem
    }

    .swagger-ui .ml6-ns {
        margin-left: 8rem
    }

    .swagger-ui .ml7-ns {
        margin-left: 16rem
    }

    .swagger-ui .mr0-ns {
        margin-right: 0
    }

    .swagger-ui .mr1-ns {
        margin-right: .25rem
    }

    .swagger-ui .mr2-ns {
        margin-right: .5rem
    }

    .swagger-ui .mr3-ns {
        margin-right: 1rem
    }

    .swagger-ui .mr4-ns {
        margin-right: 2rem
    }

    .swagger-ui .mr5-ns {
        margin-right: 4rem
    }

    .swagger-ui .mr6-ns {
        margin-right: 8rem
    }

    .swagger-ui .mr7-ns {
        margin-right: 16rem
    }

    .swagger-ui .mb0-ns {
        margin-bottom: 0
    }

    .swagger-ui .mb1-ns {
        margin-bottom: .25rem
    }

    .swagger-ui .mb2-ns {
        margin-bottom: .5rem
    }

    .swagger-ui .mb3-ns {
        margin-bottom: 1rem
    }

    .swagger-ui .mb4-ns {
        margin-bottom: 2rem
    }

    .swagger-ui .mb5-ns {
        margin-bottom: 4rem
    }

    .swagger-ui .mb6-ns {
        margin-bottom: 8rem
    }

    .swagger-ui .mb7-ns {
        margin-bottom: 16rem
    }

    .swagger-ui .mt0-ns {
        margin-top: 0
    }

    .swagger-ui .mt1-ns {
        margin-top: .25rem
    }

    .swagger-ui .mt2-ns {
        margin-top: .5rem
    }

    .swagger-ui .mt3-ns {
        margin-top: 1rem
    }

    .swagger-ui .mt4-ns {
        margin-top: 2rem
    }

    .swagger-ui .mt5-ns {
        margin-top: 4rem
    }

    .swagger-ui .mt6-ns {
        margin-top: 8rem
    }

    .swagger-ui .mt7-ns {
        margin-top: 16rem
    }

    .swagger-ui .mv0-ns {
        margin-bottom: 0;
        margin-top: 0
    }

    .swagger-ui .mv1-ns {
        margin-bottom: .25rem;
        margin-top: .25rem
    }

    .swagger-ui .mv2-ns {
        margin-bottom: .5rem;
        margin-top: .5rem
    }

    .swagger-ui .mv3-ns {
        margin-bottom: 1rem;
        margin-top: 1rem
    }

    .swagger-ui .mv4-ns {
        margin-bottom: 2rem;
        margin-top: 2rem
    }

    .swagger-ui .mv5-ns {
        margin-bottom: 4rem;
        margin-top: 4rem
    }

    .swagger-ui .mv6-ns {
        margin-bottom: 8rem;
        margin-top: 8rem
    }

    .swagger-ui .mv7-ns {
        margin-bottom: 16rem;
        margin-top: 16rem
    }

    .swagger-ui .mh0-ns {
        margin-left: 0;
        margin-right: 0
    }

    .swagger-ui .mh1-ns {
        margin-left: .25rem;
        margin-right: .25rem
    }

    .swagger-ui .mh2-ns {
        margin-left: .5rem;
        margin-right: .5rem
    }

    .swagger-ui .mh3-ns {
        margin-left: 1rem;
        margin-right: 1rem
    }

    .swagger-ui .mh4-ns {
        margin-left: 2rem;
        margin-right: 2rem
    }

    .swagger-ui .mh5-ns {
        margin-left: 4rem;
        margin-right: 4rem
    }

    .swagger-ui .mh6-ns {
        margin-left: 8rem;
        margin-right: 8rem
    }

    .swagger-ui .mh7-ns {
        margin-left: 16rem;
        margin-right: 16rem
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .pa0-m {
        padding:0
    }

    .swagger-ui .pa1-m {
        padding: .25rem
    }

    .swagger-ui .pa2-m {
        padding: .5rem
    }

    .swagger-ui .pa3-m {
        padding: 1rem
    }

    .swagger-ui .pa4-m {
        padding: 2rem
    }

    .swagger-ui .pa5-m {
        padding: 4rem
    }

    .swagger-ui .pa6-m {
        padding: 8rem
    }

    .swagger-ui .pa7-m {
        padding: 16rem
    }

    .swagger-ui .pl0-m {
        padding-left: 0
    }

    .swagger-ui .pl1-m {
        padding-left: .25rem
    }

    .swagger-ui .pl2-m {
        padding-left: .5rem
    }

    .swagger-ui .pl3-m {
        padding-left: 1rem
    }

    .swagger-ui .pl4-m {
        padding-left: 2rem
    }

    .swagger-ui .pl5-m {
        padding-left: 4rem
    }

    .swagger-ui .pl6-m {
        padding-left: 8rem
    }

    .swagger-ui .pl7-m {
        padding-left: 16rem
    }

    .swagger-ui .pr0-m {
        padding-right: 0
    }

    .swagger-ui .pr1-m {
        padding-right: .25rem
    }

    .swagger-ui .pr2-m {
        padding-right: .5rem
    }

    .swagger-ui .pr3-m {
        padding-right: 1rem
    }

    .swagger-ui .pr4-m {
        padding-right: 2rem
    }

    .swagger-ui .pr5-m {
        padding-right: 4rem
    }

    .swagger-ui .pr6-m {
        padding-right: 8rem
    }

    .swagger-ui .pr7-m {
        padding-right: 16rem
    }

    .swagger-ui .pb0-m {
        padding-bottom: 0
    }

    .swagger-ui .pb1-m {
        padding-bottom: .25rem
    }

    .swagger-ui .pb2-m {
        padding-bottom: .5rem
    }

    .swagger-ui .pb3-m {
        padding-bottom: 1rem
    }

    .swagger-ui .pb4-m {
        padding-bottom: 2rem
    }

    .swagger-ui .pb5-m {
        padding-bottom: 4rem
    }

    .swagger-ui .pb6-m {
        padding-bottom: 8rem
    }

    .swagger-ui .pb7-m {
        padding-bottom: 16rem
    }

    .swagger-ui .pt0-m {
        padding-top: 0
    }

    .swagger-ui .pt1-m {
        padding-top: .25rem
    }

    .swagger-ui .pt2-m {
        padding-top: .5rem
    }

    .swagger-ui .pt3-m {
        padding-top: 1rem
    }

    .swagger-ui .pt4-m {
        padding-top: 2rem
    }

    .swagger-ui .pt5-m {
        padding-top: 4rem
    }

    .swagger-ui .pt6-m {
        padding-top: 8rem
    }

    .swagger-ui .pt7-m {
        padding-top: 16rem
    }

    .swagger-ui .pv0-m {
        padding-bottom: 0;
        padding-top: 0
    }

    .swagger-ui .pv1-m {
        padding-bottom: .25rem;
        padding-top: .25rem
    }

    .swagger-ui .pv2-m {
        padding-bottom: .5rem;
        padding-top: .5rem
    }

    .swagger-ui .pv3-m {
        padding-bottom: 1rem;
        padding-top: 1rem
    }

    .swagger-ui .pv4-m {
        padding-bottom: 2rem;
        padding-top: 2rem
    }

    .swagger-ui .pv5-m {
        padding-bottom: 4rem;
        padding-top: 4rem
    }

    .swagger-ui .pv6-m {
        padding-bottom: 8rem;
        padding-top: 8rem
    }

    .swagger-ui .pv7-m {
        padding-bottom: 16rem;
        padding-top: 16rem
    }

    .swagger-ui .ph0-m {
        padding-left: 0;
        padding-right: 0
    }

    .swagger-ui .ph1-m {
        padding-left: .25rem;
        padding-right: .25rem
    }

    .swagger-ui .ph2-m {
        padding-left: .5rem;
        padding-right: .5rem
    }

    .swagger-ui .ph3-m {
        padding-left: 1rem;
        padding-right: 1rem
    }

    .swagger-ui .ph4-m {
        padding-left: 2rem;
        padding-right: 2rem
    }

    .swagger-ui .ph5-m {
        padding-left: 4rem;
        padding-right: 4rem
    }

    .swagger-ui .ph6-m {
        padding-left: 8rem;
        padding-right: 8rem
    }

    .swagger-ui .ph7-m {
        padding-left: 16rem;
        padding-right: 16rem
    }

    .swagger-ui .ma0-m {
        margin: 0
    }

    .swagger-ui .ma1-m {
        margin: .25rem
    }

    .swagger-ui .ma2-m {
        margin: .5rem
    }

    .swagger-ui .ma3-m {
        margin: 1rem
    }

    .swagger-ui .ma4-m {
        margin: 2rem
    }

    .swagger-ui .ma5-m {
        margin: 4rem
    }

    .swagger-ui .ma6-m {
        margin: 8rem
    }

    .swagger-ui .ma7-m {
        margin: 16rem
    }

    .swagger-ui .ml0-m {
        margin-left: 0
    }

    .swagger-ui .ml1-m {
        margin-left: .25rem
    }

    .swagger-ui .ml2-m {
        margin-left: .5rem
    }

    .swagger-ui .ml3-m {
        margin-left: 1rem
    }

    .swagger-ui .ml4-m {
        margin-left: 2rem
    }

    .swagger-ui .ml5-m {
        margin-left: 4rem
    }

    .swagger-ui .ml6-m {
        margin-left: 8rem
    }

    .swagger-ui .ml7-m {
        margin-left: 16rem
    }

    .swagger-ui .mr0-m {
        margin-right: 0
    }

    .swagger-ui .mr1-m {
        margin-right: .25rem
    }

    .swagger-ui .mr2-m {
        margin-right: .5rem
    }

    .swagger-ui .mr3-m {
        margin-right: 1rem
    }

    .swagger-ui .mr4-m {
        margin-right: 2rem
    }

    .swagger-ui .mr5-m {
        margin-right: 4rem
    }

    .swagger-ui .mr6-m {
        margin-right: 8rem
    }

    .swagger-ui .mr7-m {
        margin-right: 16rem
    }

    .swagger-ui .mb0-m {
        margin-bottom: 0
    }

    .swagger-ui .mb1-m {
        margin-bottom: .25rem
    }

    .swagger-ui .mb2-m {
        margin-bottom: .5rem
    }

    .swagger-ui .mb3-m {
        margin-bottom: 1rem
    }

    .swagger-ui .mb4-m {
        margin-bottom: 2rem
    }

    .swagger-ui .mb5-m {
        margin-bottom: 4rem
    }

    .swagger-ui .mb6-m {
        margin-bottom: 8rem
    }

    .swagger-ui .mb7-m {
        margin-bottom: 16rem
    }

    .swagger-ui .mt0-m {
        margin-top: 0
    }

    .swagger-ui .mt1-m {
        margin-top: .25rem
    }

    .swagger-ui .mt2-m {
        margin-top: .5rem
    }

    .swagger-ui .mt3-m {
        margin-top: 1rem
    }

    .swagger-ui .mt4-m {
        margin-top: 2rem
    }

    .swagger-ui .mt5-m {
        margin-top: 4rem
    }

    .swagger-ui .mt6-m {
        margin-top: 8rem
    }

    .swagger-ui .mt7-m {
        margin-top: 16rem
    }

    .swagger-ui .mv0-m {
        margin-bottom: 0;
        margin-top: 0
    }

    .swagger-ui .mv1-m {
        margin-bottom: .25rem;
        margin-top: .25rem
    }

    .swagger-ui .mv2-m {
        margin-bottom: .5rem;
        margin-top: .5rem
    }

    .swagger-ui .mv3-m {
        margin-bottom: 1rem;
        margin-top: 1rem
    }

    .swagger-ui .mv4-m {
        margin-bottom: 2rem;
        margin-top: 2rem
    }

    .swagger-ui .mv5-m {
        margin-bottom: 4rem;
        margin-top: 4rem
    }

    .swagger-ui .mv6-m {
        margin-bottom: 8rem;
        margin-top: 8rem
    }

    .swagger-ui .mv7-m {
        margin-bottom: 16rem;
        margin-top: 16rem
    }

    .swagger-ui .mh0-m {
        margin-left: 0;
        margin-right: 0
    }

    .swagger-ui .mh1-m {
        margin-left: .25rem;
        margin-right: .25rem
    }

    .swagger-ui .mh2-m {
        margin-left: .5rem;
        margin-right: .5rem
    }

    .swagger-ui .mh3-m {
        margin-left: 1rem;
        margin-right: 1rem
    }

    .swagger-ui .mh4-m {
        margin-left: 2rem;
        margin-right: 2rem
    }

    .swagger-ui .mh5-m {
        margin-left: 4rem;
        margin-right: 4rem
    }

    .swagger-ui .mh6-m {
        margin-left: 8rem;
        margin-right: 8rem
    }

    .swagger-ui .mh7-m {
        margin-left: 16rem;
        margin-right: 16rem
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .pa0-l {
        padding:0
    }

    .swagger-ui .pa1-l {
        padding: .25rem
    }

    .swagger-ui .pa2-l {
        padding: .5rem
    }

    .swagger-ui .pa3-l {
        padding: 1rem
    }

    .swagger-ui .pa4-l {
        padding: 2rem
    }

    .swagger-ui .pa5-l {
        padding: 4rem
    }

    .swagger-ui .pa6-l {
        padding: 8rem
    }

    .swagger-ui .pa7-l {
        padding: 16rem
    }

    .swagger-ui .pl0-l {
        padding-left: 0
    }

    .swagger-ui .pl1-l {
        padding-left: .25rem
    }

    .swagger-ui .pl2-l {
        padding-left: .5rem
    }

    .swagger-ui .pl3-l {
        padding-left: 1rem
    }

    .swagger-ui .pl4-l {
        padding-left: 2rem
    }

    .swagger-ui .pl5-l {
        padding-left: 4rem
    }

    .swagger-ui .pl6-l {
        padding-left: 8rem
    }

    .swagger-ui .pl7-l {
        padding-left: 16rem
    }

    .swagger-ui .pr0-l {
        padding-right: 0
    }

    .swagger-ui .pr1-l {
        padding-right: .25rem
    }

    .swagger-ui .pr2-l {
        padding-right: .5rem
    }

    .swagger-ui .pr3-l {
        padding-right: 1rem
    }

    .swagger-ui .pr4-l {
        padding-right: 2rem
    }

    .swagger-ui .pr5-l {
        padding-right: 4rem
    }

    .swagger-ui .pr6-l {
        padding-right: 8rem
    }

    .swagger-ui .pr7-l {
        padding-right: 16rem
    }

    .swagger-ui .pb0-l {
        padding-bottom: 0
    }

    .swagger-ui .pb1-l {
        padding-bottom: .25rem
    }

    .swagger-ui .pb2-l {
        padding-bottom: .5rem
    }

    .swagger-ui .pb3-l {
        padding-bottom: 1rem
    }

    .swagger-ui .pb4-l {
        padding-bottom: 2rem
    }

    .swagger-ui .pb5-l {
        padding-bottom: 4rem
    }

    .swagger-ui .pb6-l {
        padding-bottom: 8rem
    }

    .swagger-ui .pb7-l {
        padding-bottom: 16rem
    }

    .swagger-ui .pt0-l {
        padding-top: 0
    }

    .swagger-ui .pt1-l {
        padding-top: .25rem
    }

    .swagger-ui .pt2-l {
        padding-top: .5rem
    }

    .swagger-ui .pt3-l {
        padding-top: 1rem
    }

    .swagger-ui .pt4-l {
        padding-top: 2rem
    }

    .swagger-ui .pt5-l {
        padding-top: 4rem
    }

    .swagger-ui .pt6-l {
        padding-top: 8rem
    }

    .swagger-ui .pt7-l {
        padding-top: 16rem
    }

    .swagger-ui .pv0-l {
        padding-bottom: 0;
        padding-top: 0
    }

    .swagger-ui .pv1-l {
        padding-bottom: .25rem;
        padding-top: .25rem
    }

    .swagger-ui .pv2-l {
        padding-bottom: .5rem;
        padding-top: .5rem
    }

    .swagger-ui .pv3-l {
        padding-bottom: 1rem;
        padding-top: 1rem
    }

    .swagger-ui .pv4-l {
        padding-bottom: 2rem;
        padding-top: 2rem
    }

    .swagger-ui .pv5-l {
        padding-bottom: 4rem;
        padding-top: 4rem
    }

    .swagger-ui .pv6-l {
        padding-bottom: 8rem;
        padding-top: 8rem
    }

    .swagger-ui .pv7-l {
        padding-bottom: 16rem;
        padding-top: 16rem
    }

    .swagger-ui .ph0-l {
        padding-left: 0;
        padding-right: 0
    }

    .swagger-ui .ph1-l {
        padding-left: .25rem;
        padding-right: .25rem
    }

    .swagger-ui .ph2-l {
        padding-left: .5rem;
        padding-right: .5rem
    }

    .swagger-ui .ph3-l {
        padding-left: 1rem;
        padding-right: 1rem
    }

    .swagger-ui .ph4-l {
        padding-left: 2rem;
        padding-right: 2rem
    }

    .swagger-ui .ph5-l {
        padding-left: 4rem;
        padding-right: 4rem
    }

    .swagger-ui .ph6-l {
        padding-left: 8rem;
        padding-right: 8rem
    }

    .swagger-ui .ph7-l {
        padding-left: 16rem;
        padding-right: 16rem
    }

    .swagger-ui .ma0-l {
        margin: 0
    }

    .swagger-ui .ma1-l {
        margin: .25rem
    }

    .swagger-ui .ma2-l {
        margin: .5rem
    }

    .swagger-ui .ma3-l {
        margin: 1rem
    }

    .swagger-ui .ma4-l {
        margin: 2rem
    }

    .swagger-ui .ma5-l {
        margin: 4rem
    }

    .swagger-ui .ma6-l {
        margin: 8rem
    }

    .swagger-ui .ma7-l {
        margin: 16rem
    }

    .swagger-ui .ml0-l {
        margin-left: 0
    }

    .swagger-ui .ml1-l {
        margin-left: .25rem
    }

    .swagger-ui .ml2-l {
        margin-left: .5rem
    }

    .swagger-ui .ml3-l {
        margin-left: 1rem
    }

    .swagger-ui .ml4-l {
        margin-left: 2rem
    }

    .swagger-ui .ml5-l {
        margin-left: 4rem
    }

    .swagger-ui .ml6-l {
        margin-left: 8rem
    }

    .swagger-ui .ml7-l {
        margin-left: 16rem
    }

    .swagger-ui .mr0-l {
        margin-right: 0
    }

    .swagger-ui .mr1-l {
        margin-right: .25rem
    }

    .swagger-ui .mr2-l {
        margin-right: .5rem
    }

    .swagger-ui .mr3-l {
        margin-right: 1rem
    }

    .swagger-ui .mr4-l {
        margin-right: 2rem
    }

    .swagger-ui .mr5-l {
        margin-right: 4rem
    }

    .swagger-ui .mr6-l {
        margin-right: 8rem
    }

    .swagger-ui .mr7-l {
        margin-right: 16rem
    }

    .swagger-ui .mb0-l {
        margin-bottom: 0
    }

    .swagger-ui .mb1-l {
        margin-bottom: .25rem
    }

    .swagger-ui .mb2-l {
        margin-bottom: .5rem
    }

    .swagger-ui .mb3-l {
        margin-bottom: 1rem
    }

    .swagger-ui .mb4-l {
        margin-bottom: 2rem
    }

    .swagger-ui .mb5-l {
        margin-bottom: 4rem
    }

    .swagger-ui .mb6-l {
        margin-bottom: 8rem
    }

    .swagger-ui .mb7-l {
        margin-bottom: 16rem
    }

    .swagger-ui .mt0-l {
        margin-top: 0
    }

    .swagger-ui .mt1-l {
        margin-top: .25rem
    }

    .swagger-ui .mt2-l {
        margin-top: .5rem
    }

    .swagger-ui .mt3-l {
        margin-top: 1rem
    }

    .swagger-ui .mt4-l {
        margin-top: 2rem
    }

    .swagger-ui .mt5-l {
        margin-top: 4rem
    }

    .swagger-ui .mt6-l {
        margin-top: 8rem
    }

    .swagger-ui .mt7-l {
        margin-top: 16rem
    }

    .swagger-ui .mv0-l {
        margin-bottom: 0;
        margin-top: 0
    }

    .swagger-ui .mv1-l {
        margin-bottom: .25rem;
        margin-top: .25rem
    }

    .swagger-ui .mv2-l {
        margin-bottom: .5rem;
        margin-top: .5rem
    }

    .swagger-ui .mv3-l {
        margin-bottom: 1rem;
        margin-top: 1rem
    }

    .swagger-ui .mv4-l {
        margin-bottom: 2rem;
        margin-top: 2rem
    }

    .swagger-ui .mv5-l {
        margin-bottom: 4rem;
        margin-top: 4rem
    }

    .swagger-ui .mv6-l {
        margin-bottom: 8rem;
        margin-top: 8rem
    }

    .swagger-ui .mv7-l {
        margin-bottom: 16rem;
        margin-top: 16rem
    }

    .swagger-ui .mh0-l {
        margin-left: 0;
        margin-right: 0
    }

    .swagger-ui .mh1-l {
        margin-left: .25rem;
        margin-right: .25rem
    }

    .swagger-ui .mh2-l {
        margin-left: .5rem;
        margin-right: .5rem
    }

    .swagger-ui .mh3-l {
        margin-left: 1rem;
        margin-right: 1rem
    }

    .swagger-ui .mh4-l {
        margin-left: 2rem;
        margin-right: 2rem
    }

    .swagger-ui .mh5-l {
        margin-left: 4rem;
        margin-right: 4rem
    }

    .swagger-ui .mh6-l {
        margin-left: 8rem;
        margin-right: 8rem
    }

    .swagger-ui .mh7-l {
        margin-left: 16rem;
        margin-right: 16rem
    }
}

.swagger-ui .na1 {
    margin: -.25rem
}

.swagger-ui .na2 {
    margin: -.5rem
}

.swagger-ui .na3 {
    margin: -1rem
}

.swagger-ui .na4 {
    margin: -2rem
}

.swagger-ui .na5 {
    margin: -4rem
}

.swagger-ui .na6 {
    margin: -8rem
}

.swagger-ui .na7 {
    margin: -16rem
}

.swagger-ui .nl1 {
    margin-left: -.25rem
}

.swagger-ui .nl2 {
    margin-left: -.5rem
}

.swagger-ui .nl3 {
    margin-left: -1rem
}

.swagger-ui .nl4 {
    margin-left: -2rem
}

.swagger-ui .nl5 {
    margin-left: -4rem
}

.swagger-ui .nl6 {
    margin-left: -8rem
}

.swagger-ui .nl7 {
    margin-left: -16rem
}

.swagger-ui .nr1 {
    margin-right: -.25rem
}

.swagger-ui .nr2 {
    margin-right: -.5rem
}

.swagger-ui .nr3 {
    margin-right: -1rem
}

.swagger-ui .nr4 {
    margin-right: -2rem
}

.swagger-ui .nr5 {
    margin-right: -4rem
}

.swagger-ui .nr6 {
    margin-right: -8rem
}

.swagger-ui .nr7 {
    margin-right: -16rem
}

.swagger-ui .nb1 {
    margin-bottom: -.25rem
}

.swagger-ui .nb2 {
    margin-bottom: -.5rem
}

.swagger-ui .nb3 {
    margin-bottom: -1rem
}

.swagger-ui .nb4 {
    margin-bottom: -2rem
}

.swagger-ui .nb5 {
    margin-bottom: -4rem
}

.swagger-ui .nb6 {
    margin-bottom: -8rem
}

.swagger-ui .nb7 {
    margin-bottom: -16rem
}

.swagger-ui .nt1 {
    margin-top: -.25rem
}

.swagger-ui .nt2 {
    margin-top: -.5rem
}

.swagger-ui .nt3 {
    margin-top: -1rem
}

.swagger-ui .nt4 {
    margin-top: -2rem
}

.swagger-ui .nt5 {
    margin-top: -4rem
}

.swagger-ui .nt6 {
    margin-top: -8rem
}

.swagger-ui .nt7 {
    margin-top: -16rem
}

@media screen and (min-width: 30em) {
    .swagger-ui .na1-ns {
        margin:-.25rem
    }

    .swagger-ui .na2-ns {
        margin: -.5rem
    }

    .swagger-ui .na3-ns {
        margin: -1rem
    }

    .swagger-ui .na4-ns {
        margin: -2rem
    }

    .swagger-ui .na5-ns {
        margin: -4rem
    }

    .swagger-ui .na6-ns {
        margin: -8rem
    }

    .swagger-ui .na7-ns {
        margin: -16rem
    }

    .swagger-ui .nl1-ns {
        margin-left: -.25rem
    }

    .swagger-ui .nl2-ns {
        margin-left: -.5rem
    }

    .swagger-ui .nl3-ns {
        margin-left: -1rem
    }

    .swagger-ui .nl4-ns {
        margin-left: -2rem
    }

    .swagger-ui .nl5-ns {
        margin-left: -4rem
    }

    .swagger-ui .nl6-ns {
        margin-left: -8rem
    }

    .swagger-ui .nl7-ns {
        margin-left: -16rem
    }

    .swagger-ui .nr1-ns {
        margin-right: -.25rem
    }

    .swagger-ui .nr2-ns {
        margin-right: -.5rem
    }

    .swagger-ui .nr3-ns {
        margin-right: -1rem
    }

    .swagger-ui .nr4-ns {
        margin-right: -2rem
    }

    .swagger-ui .nr5-ns {
        margin-right: -4rem
    }

    .swagger-ui .nr6-ns {
        margin-right: -8rem
    }

    .swagger-ui .nr7-ns {
        margin-right: -16rem
    }

    .swagger-ui .nb1-ns {
        margin-bottom: -.25rem
    }

    .swagger-ui .nb2-ns {
        margin-bottom: -.5rem
    }

    .swagger-ui .nb3-ns {
        margin-bottom: -1rem
    }

    .swagger-ui .nb4-ns {
        margin-bottom: -2rem
    }

    .swagger-ui .nb5-ns {
        margin-bottom: -4rem
    }

    .swagger-ui .nb6-ns {
        margin-bottom: -8rem
    }

    .swagger-ui .nb7-ns {
        margin-bottom: -16rem
    }

    .swagger-ui .nt1-ns {
        margin-top: -.25rem
    }

    .swagger-ui .nt2-ns {
        margin-top: -.5rem
    }

    .swagger-ui .nt3-ns {
        margin-top: -1rem
    }

    .swagger-ui .nt4-ns {
        margin-top: -2rem
    }

    .swagger-ui .nt5-ns {
        margin-top: -4rem
    }

    .swagger-ui .nt6-ns {
        margin-top: -8rem
    }

    .swagger-ui .nt7-ns {
        margin-top: -16rem
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .na1-m {
        margin:-.25rem
    }

    .swagger-ui .na2-m {
        margin: -.5rem
    }

    .swagger-ui .na3-m {
        margin: -1rem
    }

    .swagger-ui .na4-m {
        margin: -2rem
    }

    .swagger-ui .na5-m {
        margin: -4rem
    }

    .swagger-ui .na6-m {
        margin: -8rem
    }

    .swagger-ui .na7-m {
        margin: -16rem
    }

    .swagger-ui .nl1-m {
        margin-left: -.25rem
    }

    .swagger-ui .nl2-m {
        margin-left: -.5rem
    }

    .swagger-ui .nl3-m {
        margin-left: -1rem
    }

    .swagger-ui .nl4-m {
        margin-left: -2rem
    }

    .swagger-ui .nl5-m {
        margin-left: -4rem
    }

    .swagger-ui .nl6-m {
        margin-left: -8rem
    }

    .swagger-ui .nl7-m {
        margin-left: -16rem
    }

    .swagger-ui .nr1-m {
        margin-right: -.25rem
    }

    .swagger-ui .nr2-m {
        margin-right: -.5rem
    }

    .swagger-ui .nr3-m {
        margin-right: -1rem
    }

    .swagger-ui .nr4-m {
        margin-right: -2rem
    }

    .swagger-ui .nr5-m {
        margin-right: -4rem
    }

    .swagger-ui .nr6-m {
        margin-right: -8rem
    }

    .swagger-ui .nr7-m {
        margin-right: -16rem
    }

    .swagger-ui .nb1-m {
        margin-bottom: -.25rem
    }

    .swagger-ui .nb2-m {
        margin-bottom: -.5rem
    }

    .swagger-ui .nb3-m {
        margin-bottom: -1rem
    }

    .swagger-ui .nb4-m {
        margin-bottom: -2rem
    }

    .swagger-ui .nb5-m {
        margin-bottom: -4rem
    }

    .swagger-ui .nb6-m {
        margin-bottom: -8rem
    }

    .swagger-ui .nb7-m {
        margin-bottom: -16rem
    }

    .swagger-ui .nt1-m {
        margin-top: -.25rem
    }

    .swagger-ui .nt2-m {
        margin-top: -.5rem
    }

    .swagger-ui .nt3-m {
        margin-top: -1rem
    }

    .swagger-ui .nt4-m {
        margin-top: -2rem
    }

    .swagger-ui .nt5-m {
        margin-top: -4rem
    }

    .swagger-ui .nt6-m {
        margin-top: -8rem
    }

    .swagger-ui .nt7-m {
        margin-top: -16rem
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .na1-l {
        margin:-.25rem
    }

    .swagger-ui .na2-l {
        margin: -.5rem
    }

    .swagger-ui .na3-l {
        margin: -1rem
    }

    .swagger-ui .na4-l {
        margin: -2rem
    }

    .swagger-ui .na5-l {
        margin: -4rem
    }

    .swagger-ui .na6-l {
        margin: -8rem
    }

    .swagger-ui .na7-l {
        margin: -16rem
    }

    .swagger-ui .nl1-l {
        margin-left: -.25rem
    }

    .swagger-ui .nl2-l {
        margin-left: -.5rem
    }

    .swagger-ui .nl3-l {
        margin-left: -1rem
    }

    .swagger-ui .nl4-l {
        margin-left: -2rem
    }

    .swagger-ui .nl5-l {
        margin-left: -4rem
    }

    .swagger-ui .nl6-l {
        margin-left: -8rem
    }

    .swagger-ui .nl7-l {
        margin-left: -16rem
    }

    .swagger-ui .nr1-l {
        margin-right: -.25rem
    }

    .swagger-ui .nr2-l {
        margin-right: -.5rem
    }

    .swagger-ui .nr3-l {
        margin-right: -1rem
    }

    .swagger-ui .nr4-l {
        margin-right: -2rem
    }

    .swagger-ui .nr5-l {
        margin-right: -4rem
    }

    .swagger-ui .nr6-l {
        margin-right: -8rem
    }

    .swagger-ui .nr7-l {
        margin-right: -16rem
    }

    .swagger-ui .nb1-l {
        margin-bottom: -.25rem
    }

    .swagger-ui .nb2-l {
        margin-bottom: -.5rem
    }

    .swagger-ui .nb3-l {
        margin-bottom: -1rem
    }

    .swagger-ui .nb4-l {
        margin-bottom: -2rem
    }

    .swagger-ui .nb5-l {
        margin-bottom: -4rem
    }

    .swagger-ui .nb6-l {
        margin-bottom: -8rem
    }

    .swagger-ui .nb7-l {
        margin-bottom: -16rem
    }

    .swagger-ui .nt1-l {
        margin-top: -.25rem
    }

    .swagger-ui .nt2-l {
        margin-top: -.5rem
    }

    .swagger-ui .nt3-l {
        margin-top: -1rem
    }

    .swagger-ui .nt4-l {
        margin-top: -2rem
    }

    .swagger-ui .nt5-l {
        margin-top: -4rem
    }

    .swagger-ui .nt6-l {
        margin-top: -8rem
    }

    .swagger-ui .nt7-l {
        margin-top: -16rem
    }
}

.swagger-ui .collapse {
    border-collapse: collapse;
    border-spacing: 0
}

.swagger-ui .striped--light-silver:nth-child(odd) {
    background-color: #aaa
}

.swagger-ui .striped--moon-gray:nth-child(odd) {
    background-color: #ccc
}

.swagger-ui .striped--light-gray:nth-child(odd) {
    background-color: #eee
}

.swagger-ui .striped--near-white:nth-child(odd) {
    background-color: #f4f4f4
}

.swagger-ui .stripe-light:nth-child(odd) {
    background-color: #ffffff1a
}

.swagger-ui .stripe-dark:nth-child(odd) {
    background-color: #0000001a
}

.swagger-ui .strike {
    -webkit-text-decoration: line-through;
    text-decoration: line-through
}

.swagger-ui .underline {
    -webkit-text-decoration: underline;
    text-decoration: underline
}

.swagger-ui .no-underline {
    -webkit-text-decoration: none;
    text-decoration: none
}

@media screen and (min-width: 30em) {
    .swagger-ui .strike-ns {
        -webkit-text-decoration:line-through;
        text-decoration: line-through
    }

    .swagger-ui .underline-ns {
        -webkit-text-decoration: underline;
        text-decoration: underline
    }

    .swagger-ui .no-underline-ns {
        -webkit-text-decoration: none;
        text-decoration: none
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .strike-m {
        -webkit-text-decoration:line-through;
        text-decoration: line-through
    }

    .swagger-ui .underline-m {
        -webkit-text-decoration: underline;
        text-decoration: underline
    }

    .swagger-ui .no-underline-m {
        -webkit-text-decoration: none;
        text-decoration: none
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .strike-l {
        -webkit-text-decoration:line-through;
        text-decoration: line-through
    }

    .swagger-ui .underline-l {
        -webkit-text-decoration: underline;
        text-decoration: underline
    }

    .swagger-ui .no-underline-l {
        -webkit-text-decoration: none;
        text-decoration: none
    }
}

.swagger-ui .tl {
    text-align: left
}

.swagger-ui .tr {
    text-align: right
}

.swagger-ui .tc {
    text-align: center
}

.swagger-ui .tj {
    text-align: justify
}

@media screen and (min-width: 30em) {
    .swagger-ui .tl-ns {
        text-align:left
    }

    .swagger-ui .tr-ns {
        text-align: right
    }

    .swagger-ui .tc-ns {
        text-align: center
    }

    .swagger-ui .tj-ns {
        text-align: justify
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .tl-m {
        text-align:left
    }

    .swagger-ui .tr-m {
        text-align: right
    }

    .swagger-ui .tc-m {
        text-align: center
    }

    .swagger-ui .tj-m {
        text-align: justify
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .tl-l {
        text-align:left
    }

    .swagger-ui .tr-l {
        text-align: right
    }

    .swagger-ui .tc-l {
        text-align: center
    }

    .swagger-ui .tj-l {
        text-align: justify
    }
}

.swagger-ui .ttc {
    text-transform: capitalize
}

.swagger-ui .ttl {
    text-transform: lowercase
}

.swagger-ui .ttu {
    text-transform: uppercase
}

.swagger-ui .ttn {
    text-transform: none
}

@media screen and (min-width: 30em) {
    .swagger-ui .ttc-ns {
        text-transform:capitalize
    }

    .swagger-ui .ttl-ns {
        text-transform: lowercase
    }

    .swagger-ui .ttu-ns {
        text-transform: uppercase
    }

    .swagger-ui .ttn-ns {
        text-transform: none
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .ttc-m {
        text-transform:capitalize
    }

    .swagger-ui .ttl-m {
        text-transform: lowercase
    }

    .swagger-ui .ttu-m {
        text-transform: uppercase
    }

    .swagger-ui .ttn-m {
        text-transform: none
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .ttc-l {
        text-transform:capitalize
    }

    .swagger-ui .ttl-l {
        text-transform: lowercase
    }

    .swagger-ui .ttu-l {
        text-transform: uppercase
    }

    .swagger-ui .ttn-l {
        text-transform: none
    }
}

.swagger-ui .f-6,.swagger-ui .f-headline {
    font-size: 6rem
}

.swagger-ui .f-5,.swagger-ui .f-subheadline {
    font-size: 5rem
}

.swagger-ui .f1 {
    font-size: 3rem
}

.swagger-ui .f2 {
    font-size: 2.25rem
}

.swagger-ui .f3 {
    font-size: 1.5rem
}

.swagger-ui .f4 {
    font-size: 1.25rem
}

.swagger-ui .f5 {
    font-size: 1rem
}

.swagger-ui .f6 {
    font-size: .875rem
}

.swagger-ui .f7 {
    font-size: .75rem
}

@media screen and (min-width: 30em) {
    .swagger-ui .f-6-ns,.swagger-ui .f-headline-ns {
        font-size:6rem
    }

    .swagger-ui .f-5-ns,.swagger-ui .f-subheadline-ns {
        font-size: 5rem
    }

    .swagger-ui .f1-ns {
        font-size: 3rem
    }

    .swagger-ui .f2-ns {
        font-size: 2.25rem
    }

    .swagger-ui .f3-ns {
        font-size: 1.5rem
    }

    .swagger-ui .f4-ns {
        font-size: 1.25rem
    }

    .swagger-ui .f5-ns {
        font-size: 1rem
    }

    .swagger-ui .f6-ns {
        font-size: .875rem
    }

    .swagger-ui .f7-ns {
        font-size: .75rem
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .f-6-m,.swagger-ui .f-headline-m {
        font-size:6rem
    }

    .swagger-ui .f-5-m,.swagger-ui .f-subheadline-m {
        font-size: 5rem
    }

    .swagger-ui .f1-m {
        font-size: 3rem
    }

    .swagger-ui .f2-m {
        font-size: 2.25rem
    }

    .swagger-ui .f3-m {
        font-size: 1.5rem
    }

    .swagger-ui .f4-m {
        font-size: 1.25rem
    }

    .swagger-ui .f5-m {
        font-size: 1rem
    }

    .swagger-ui .f6-m {
        font-size: .875rem
    }

    .swagger-ui .f7-m {
        font-size: .75rem
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .f-6-l,.swagger-ui .f-headline-l {
        font-size:6rem
    }

    .swagger-ui .f-5-l,.swagger-ui .f-subheadline-l {
        font-size: 5rem
    }

    .swagger-ui .f1-l {
        font-size: 3rem
    }

    .swagger-ui .f2-l {
        font-size: 2.25rem
    }

    .swagger-ui .f3-l {
        font-size: 1.5rem
    }

    .swagger-ui .f4-l {
        font-size: 1.25rem
    }

    .swagger-ui .f5-l {
        font-size: 1rem
    }

    .swagger-ui .f6-l {
        font-size: .875rem
    }

    .swagger-ui .f7-l {
        font-size: .75rem
    }
}

.swagger-ui .measure {
    max-width: 30em
}

.swagger-ui .measure-wide {
    max-width: 34em
}

.swagger-ui .measure-narrow {
    max-width: 20em
}

.swagger-ui .indent {
    margin-bottom: 0;
    margin-top: 0;
    text-indent: 1em
}

.swagger-ui .small-caps {
    font-feature-settings: "smcp";
    font-variant: small-caps
}

.swagger-ui .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

@media screen and (min-width: 30em) {
    .swagger-ui .measure-ns {
        max-width:30em
    }

    .swagger-ui .measure-wide-ns {
        max-width: 34em
    }

    .swagger-ui .measure-narrow-ns {
        max-width: 20em
    }

    .swagger-ui .indent-ns {
        margin-bottom: 0;
        margin-top: 0;
        text-indent: 1em
    }

    .swagger-ui .small-caps-ns {
        font-feature-settings: "smcp";
        font-variant: small-caps
    }

    .swagger-ui .truncate-ns {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .measure-m {
        max-width:30em
    }

    .swagger-ui .measure-wide-m {
        max-width: 34em
    }

    .swagger-ui .measure-narrow-m {
        max-width: 20em
    }

    .swagger-ui .indent-m {
        margin-bottom: 0;
        margin-top: 0;
        text-indent: 1em
    }

    .swagger-ui .small-caps-m {
        font-feature-settings: "smcp";
        font-variant: small-caps
    }

    .swagger-ui .truncate-m {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .measure-l {
        max-width:30em
    }

    .swagger-ui .measure-wide-l {
        max-width: 34em
    }

    .swagger-ui .measure-narrow-l {
        max-width: 20em
    }

    .swagger-ui .indent-l {
        margin-bottom: 0;
        margin-top: 0;
        text-indent: 1em
    }

    .swagger-ui .small-caps-l {
        font-feature-settings: "smcp";
        font-variant: small-caps
    }

    .swagger-ui .truncate-l {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap
    }
}

.swagger-ui .overflow-container {
    overflow-y: scroll
}

.swagger-ui .center {
    margin-left: auto;
    margin-right: auto
}

.swagger-ui .mr-auto {
    margin-right: auto
}

.swagger-ui .ml-auto {
    margin-left: auto
}

@media screen and (min-width: 30em) {
    .swagger-ui .center-ns {
        margin-left:auto;
        margin-right: auto
    }

    .swagger-ui .mr-auto-ns {
        margin-right: auto
    }

    .swagger-ui .ml-auto-ns {
        margin-left: auto
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .center-m {
        margin-left:auto;
        margin-right: auto
    }

    .swagger-ui .mr-auto-m {
        margin-right: auto
    }

    .swagger-ui .ml-auto-m {
        margin-left: auto
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .center-l {
        margin-left:auto;
        margin-right: auto
    }

    .swagger-ui .mr-auto-l {
        margin-right: auto
    }

    .swagger-ui .ml-auto-l {
        margin-left: auto
    }
}

.swagger-ui .clip {
    position: fixed!important;
    _position: absolute!important
}

.swagger-ui .clip {
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px,1px,1px,1px)
}

@media screen and (min-width: 30em) {
    .swagger-ui .clip-ns {
        position:fixed!important;
        _position: absolute!important
    }

    .swagger-ui .clip-ns {
        clip: rect(1px 1px 1px 1px);
        clip: rect(1px,1px,1px,1px)
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .clip-m {
        position:fixed!important;
        _position: absolute!important
    }

    .swagger-ui .clip-m {
        clip: rect(1px 1px 1px 1px);
        clip: rect(1px,1px,1px,1px)
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .clip-l {
        position:fixed!important;
        _position: absolute!important
    }

    .swagger-ui .clip-l {
        clip: rect(1px 1px 1px 1px);
        clip: rect(1px,1px,1px,1px)
    }
}

.swagger-ui .ws-normal {
    white-space: normal
}

.swagger-ui .nowrap {
    white-space: nowrap
}

.swagger-ui .pre {
    white-space: pre
}

@media screen and (min-width: 30em) {
    .swagger-ui .ws-normal-ns {
        white-space:normal
    }

    .swagger-ui .nowrap-ns {
        white-space: nowrap
    }

    .swagger-ui .pre-ns {
        white-space: pre
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .ws-normal-m {
        white-space:normal
    }

    .swagger-ui .nowrap-m {
        white-space: nowrap
    }

    .swagger-ui .pre-m {
        white-space: pre
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .ws-normal-l {
        white-space:normal
    }

    .swagger-ui .nowrap-l {
        white-space: nowrap
    }

    .swagger-ui .pre-l {
        white-space: pre
    }
}

.swagger-ui .v-base {
    vertical-align: baseline
}

.swagger-ui .v-mid {
    vertical-align: middle
}

.swagger-ui .v-top {
    vertical-align: top
}

.swagger-ui .v-btm {
    vertical-align: bottom
}

@media screen and (min-width: 30em) {
    .swagger-ui .v-base-ns {
        vertical-align:baseline
    }

    .swagger-ui .v-mid-ns {
        vertical-align: middle
    }

    .swagger-ui .v-top-ns {
        vertical-align: top
    }

    .swagger-ui .v-btm-ns {
        vertical-align: bottom
    }
}

@media screen and (min-width: 30em)and (max-width:60em) {
    .swagger-ui .v-base-m {
        vertical-align:baseline
    }

    .swagger-ui .v-mid-m {
        vertical-align: middle
    }

    .swagger-ui .v-top-m {
        vertical-align: top
    }

    .swagger-ui .v-btm-m {
        vertical-align: bottom
    }
}

@media screen and (min-width: 60em) {
    .swagger-ui .v-base-l {
        vertical-align:baseline
    }

    .swagger-ui .v-mid-l {
        vertical-align: middle
    }

    .swagger-ui .v-top-l {
        vertical-align: top
    }

    .swagger-ui .v-btm-l {
        vertical-align: bottom
    }
}

.swagger-ui .dim {
    opacity: 1;
    transition: opacity .15s ease-in
}

.swagger-ui .dim:focus,.swagger-ui .dim:hover {
    opacity: .5;
    transition: opacity .15s ease-in
}

.swagger-ui .dim:active {
    opacity: .8;
    transition: opacity .15s ease-out
}

.swagger-ui .glow {
    transition: opacity .15s ease-in
}

.swagger-ui .glow:focus,.swagger-ui .glow:hover {
    opacity: 1;
    transition: opacity .15s ease-in
}

.swagger-ui .hide-child .child {
    opacity: 0;
    transition: opacity .15s ease-in
}

.swagger-ui .hide-child:active .child,.swagger-ui .hide-child:focus .child,.swagger-ui .hide-child:hover .child {
    opacity: 1;
    transition: opacity .15s ease-in
}

.swagger-ui .underline-hover:focus,.swagger-ui .underline-hover:hover {
    -webkit-text-decoration: underline;
    text-decoration: underline
}

.swagger-ui .grow {
    -moz-osx-font-smoothing: grayscale;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform .25s ease-out
}

.swagger-ui .grow:focus,.swagger-ui .grow:hover {
    transform: scale(1.05)
}

.swagger-ui .grow:active {
    transform: scale(.9)
}

.swagger-ui .grow-large {
    -moz-osx-font-smoothing: grayscale;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform .25s ease-in-out
}

.swagger-ui .grow-large:focus,.swagger-ui .grow-large:hover {
    transform: scale(1.2)
}

.swagger-ui .grow-large:active {
    transform: scale(.95)
}

.swagger-ui .pointer:hover {
    cursor: pointer
}

.swagger-ui .shadow-hover {
    cursor: pointer;
    position: relative;
    transition: all .5s cubic-bezier(.165,.84,.44,1)
}

.swagger-ui .shadow-hover:after {
    border-radius: inherit;
    box-shadow: 0 0 16px 2px #0003;
    content: "";
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: opacity .5s cubic-bezier(.165,.84,.44,1);
    width: 100%;
    z-index: -1
}

.swagger-ui .shadow-hover:focus:after,.swagger-ui .shadow-hover:hover:after {
    opacity: 1
}

.swagger-ui .bg-animate,.swagger-ui .bg-animate:focus,.swagger-ui .bg-animate:hover {
    transition: background-color .15s ease-in-out
}

.swagger-ui .z-0 {
    z-index: 0
}

.swagger-ui .z-1 {
    z-index: 1
}

.swagger-ui .z-2 {
    z-index: 2
}

.swagger-ui .z-3 {
    z-index: 3
}

.swagger-ui .z-4 {
    z-index: 4
}

.swagger-ui .z-5 {
    z-index: 5
}

.swagger-ui .z-999 {
    z-index: 999
}

.swagger-ui .z-9999 {
    z-index: 9999
}

.swagger-ui .z-max {
    z-index: 2147483647
}

.swagger-ui .z-inherit {
    z-index: inherit
}

.swagger-ui .z-initial,.swagger-ui .z-unset {
    z-index: auto
}

.swagger-ui .nested-copy-line-height ol,.swagger-ui .nested-copy-line-height p,.swagger-ui .nested-copy-line-height ul {
    line-height: 1.5
}

.swagger-ui .nested-headline-line-height h1,.swagger-ui .nested-headline-line-height h2,.swagger-ui .nested-headline-line-height h3,.swagger-ui .nested-headline-line-height h4,.swagger-ui .nested-headline-line-height h5,.swagger-ui .nested-headline-line-height h6 {
    line-height: 1.25
}

.swagger-ui .nested-list-reset ol,.swagger-ui .nested-list-reset ul {
    list-style-type: none;
    margin-left: 0;
    padding-left: 0
}

.swagger-ui .nested-copy-indent p+p {
    margin-bottom: 0;
    margin-top: 0;
    text-indent: .1em
}

.swagger-ui .nested-copy-seperator p+p {
    margin-top: 1.5em
}

.swagger-ui .nested-img img {
    display: block;
    max-width: 100%;
    width: 100%
}

.swagger-ui .nested-links a {
    color: #357edd;
    transition: color .15s ease-in
}

.swagger-ui .nested-links a:focus,.swagger-ui .nested-links a:hover {
    color: #96ccff;
    transition: color .15s ease-in
}

.swagger-ui .wrapper {
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 1460px;
    padding: 0 20px;
    width: 100%
}

.swagger-ui .opblock-tag-section {
    display: flex;
    flex-direction: column
}

.swagger-ui .try-out.btn-group {
    display: flex;
    flex: .1 2 auto;
    padding: 0
}

.swagger-ui .try-out__btn {
    margin-left: 1.25rem
}

.swagger-ui .opblock-tag {
    align-items: center;
    border-bottom: 1px solid rgba(59,65,81,.3);
    cursor: pointer;
    display: flex;
    padding: 10px 20px 10px 10px;
    transition: all .2s
}

.swagger-ui .opblock-tag:hover {
    background: rgba(0,0,0,.02)
}

.swagger-ui .opblock-tag {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 24px;
    margin: 0 0 5px
}

.swagger-ui .opblock-tag.no-desc span {
    flex: 1
}

.swagger-ui .opblock-tag svg {
    transition: all .4s
}

.swagger-ui .opblock-tag small {
    color: #3b4151;
    flex: 2;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 400;
    padding: 0 10px
}

.swagger-ui .opblock-tag>div {
    flex: 1 1 150px;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

@media (max-width: 640px) {
    .swagger-ui .opblock-tag small,.swagger-ui .opblock-tag>div {
        flex:1
    }
}

.swagger-ui .opblock-tag .info__externaldocs {
    text-align: right
}

.swagger-ui .parameter__type {
    color: #3b4151;
    font-family: monospace;
    font-size: 12px;
    font-weight: 600;
    padding: 5px 0
}

.swagger-ui .parameter-controls {
    margin-top: .75em
}

.swagger-ui .examples__title {
    display: block;
    font-size: 1.1em;
    font-weight: 700;
    margin-bottom: .75em
}

.swagger-ui .examples__section {
    margin-top: 1.5em
}

.swagger-ui .examples__section-header {
    font-size: .9rem;
    font-weight: 700;
    margin-bottom: .5rem
}

.swagger-ui .examples-select {
    display: inline-block;
    margin-bottom: .75em
}

.swagger-ui .examples-select .examples-select-element {
    width: 100%
}

.swagger-ui .examples-select__section-label {
    font-size: .9rem;
    font-weight: 700;
    margin-right: .5rem
}

.swagger-ui .example__section {
    margin-top: 1.5em
}

.swagger-ui .example__section-header {
    font-size: .9rem;
    font-weight: 700;
    margin-bottom: .5rem
}

.swagger-ui .view-line-link {
    cursor: pointer;
    margin: 0 5px;
    position: relative;
    top: 3px;
    transition: all .5s;
    width: 20px
}

.swagger-ui .opblock {
    border: 1px solid #000;
    border-radius: 4px;
    box-shadow: 0 0 3px #00000030;
    margin: 0 0 15px
}

.swagger-ui .opblock .tab-header {
    display: flex;
    flex: 1
}

.swagger-ui .opblock .tab-header .tab-item {
    cursor: pointer;
    padding: 0 40px
}

.swagger-ui .opblock .tab-header .tab-item:first-of-type {
    padding: 0 40px 0 0
}

.swagger-ui .opblock .tab-header .tab-item.active h4 span {
    position: relative
}

.swagger-ui .opblock .tab-header .tab-item.active h4 span:after {
    background: gray;
    bottom: -15px;
    content: "";
    height: 4px;
    left: 50%;
    position: absolute;
    transform: translate(-50%);
    width: 120%
}

.swagger-ui .opblock.is-open .opblock-summary {
    border-bottom: 1px solid #000
}

.swagger-ui .opblock .opblock-section-header {
    align-items: center;
    background: hsla(0,0%,100%,.8);
    box-shadow: 0 1px 2px #0000001a;
    display: flex;
    min-height: 50px;
    padding: 8px 20px
}

.swagger-ui .opblock .opblock-section-header>label {
    align-items: center;
    color: #3b4151;
    display: flex;
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 700;
    margin: 0 0 0 auto
}

.swagger-ui .opblock .opblock-section-header>label>span {
    padding: 0 10px 0 0
}

.swagger-ui .opblock .opblock-section-header h4 {
    color: #3b4151;
    flex: 1;
    font-family: sans-serif;
    font-size: 14px;
    margin: 0
}

.swagger-ui .opblock .opblock-summary-method {
    background: #000;
    border-radius: 3px;
    color: #fff;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 700;
    min-width: 80px;
    padding: 6px 0;
    text-align: center;
    text-shadow: 0 1px 0 rgba(0,0,0,.1)
}

.swagger-ui .opblock .opblock-summary-operation-id,.swagger-ui .opblock .opblock-summary-path,.swagger-ui .opblock .opblock-summary-path__deprecated {
    align-items: center;
    color: #3b4151;
    display: flex;
    font-family: monospace;
    font-size: 16px;
    font-weight: 600;
    padding: 0 10px;
    word-break: break-word
}

@media (max-width: 768px) {
    .swagger-ui .opblock .opblock-summary-operation-id,.swagger-ui .opblock .opblock-summary-path,.swagger-ui .opblock .opblock-summary-path__deprecated {
        font-size:12px
    }
}

.swagger-ui .opblock .opblock-summary-path {
    flex-shrink: 0;
    max-width: calc(100% - 110px - 15rem)
}

@media (max-width: 640px) {
    .swagger-ui .opblock .opblock-summary-path {
        flex-shrink:1;
        max-width: 100%
    }
}

.swagger-ui .opblock .opblock-summary-path__deprecated {
    -webkit-text-decoration: line-through;
    text-decoration: line-through
}

.swagger-ui .opblock .opblock-summary-operation-id {
    font-size: 14px
}

.swagger-ui .opblock .opblock-summary-description {
    color: #3b4151;
    flex: 1 1 auto;
    font-family: sans-serif;
    font-size: 13px;
    word-break: break-word
}

.swagger-ui .opblock .opblock-summary {
    align-items: center;
    cursor: pointer;
    display: flex;
    padding: 5px
}

.swagger-ui .opblock .opblock-summary .view-line-link {
    cursor: pointer;
    margin: 0;
    position: relative;
    top: 2px;
    transition: all .5s;
    width: 0
}

.swagger-ui .opblock .opblock-summary:hover .view-line-link {
    margin: 0 5px;
    width: 18px
}

.swagger-ui .opblock .opblock-summary:hover .view-line-link.copy-to-clipboard {
    width: 24px
}

.swagger-ui .opblock.opblock-post {
    background: rgba(73,204,144,.1);
    border-color: #49cc90
}

.swagger-ui .opblock.opblock-post .opblock-summary-method {
    background: #49cc90
}

.swagger-ui .opblock.opblock-post .opblock-summary {
    border-color: #49cc90
}

.swagger-ui .opblock.opblock-post .tab-header .tab-item.active h4 span:after {
    background: #49cc90
}

.swagger-ui .opblock.opblock-put {
    background: rgba(252,161,48,.1);
    border-color: #fca130
}

.swagger-ui .opblock.opblock-put .opblock-summary-method {
    background: #fca130
}

.swagger-ui .opblock.opblock-put .opblock-summary {
    border-color: #fca130
}

.swagger-ui .opblock.opblock-put .tab-header .tab-item.active h4 span:after {
    background: #fca130
}

.swagger-ui .opblock.opblock-delete {
    background: rgba(249,62,62,.1);
    border-color: #f93e3e
}

.swagger-ui .opblock.opblock-delete .opblock-summary-method {
    background: #f93e3e
}

.swagger-ui .opblock.opblock-delete .opblock-summary {
    border-color: #f93e3e
}

.swagger-ui .opblock.opblock-delete .tab-header .tab-item.active h4 span:after {
    background: #f93e3e
}

.swagger-ui .opblock.opblock-get {
    background: rgba(97,175,254,.1);
    border-color: #61affe
}

.swagger-ui .opblock.opblock-get .opblock-summary-method {
    background: #61affe
}

.swagger-ui .opblock.opblock-get .opblock-summary {
    border-color: #61affe
}

.swagger-ui .opblock.opblock-get .tab-header .tab-item.active h4 span:after {
    background: #61affe
}

.swagger-ui .opblock.opblock-patch {
    background: rgba(80,227,194,.1);
    border-color: #50e3c2
}

.swagger-ui .opblock.opblock-patch .opblock-summary-method {
    background: #50e3c2
}

.swagger-ui .opblock.opblock-patch .opblock-summary {
    border-color: #50e3c2
}

.swagger-ui .opblock.opblock-patch .tab-header .tab-item.active h4 span:after {
    background: #50e3c2
}

.swagger-ui .opblock.opblock-head {
    background: rgba(144,18,254,.1);
    border-color: #9012fe
}

.swagger-ui .opblock.opblock-head .opblock-summary-method {
    background: #9012fe
}

.swagger-ui .opblock.opblock-head .opblock-summary {
    border-color: #9012fe
}

.swagger-ui .opblock.opblock-head .tab-header .tab-item.active h4 span:after {
    background: #9012fe
}

.swagger-ui .opblock.opblock-options {
    background: rgba(13,90,167,.1);
    border-color: #0d5aa7
}

.swagger-ui .opblock.opblock-options .opblock-summary-method {
    background: #0d5aa7
}

.swagger-ui .opblock.opblock-options .opblock-summary {
    border-color: #0d5aa7
}

.swagger-ui .opblock.opblock-options .tab-header .tab-item.active h4 span:after {
    background: #0d5aa7
}

.swagger-ui .opblock.opblock-deprecated {
    background: hsla(0,0%,92%,.1);
    border-color: #ebebeb;
    opacity: .6
}

.swagger-ui .opblock.opblock-deprecated .opblock-summary-method {
    background: #ebebeb
}

.swagger-ui .opblock.opblock-deprecated .opblock-summary {
    border-color: #ebebeb
}

.swagger-ui .opblock.opblock-deprecated .tab-header .tab-item.active h4 span:after {
    background: #ebebeb
}

.swagger-ui .opblock .opblock-schemes {
    padding: 8px 20px
}

.swagger-ui .opblock .opblock-schemes .schemes-title {
    padding: 0 10px 0 0
}

.swagger-ui .filter .operation-filter-input {
    border: 2px solid #d8dde7;
    margin: 20px 0;
    padding: 10px;
    width: 100%
}

.swagger-ui .download-url-wrapper .failed,.swagger-ui .filter .failed {
    color: red
}

.swagger-ui .download-url-wrapper .loading,.swagger-ui .filter .loading {
    color: #aaa
}

.swagger-ui .model-example {
    margin-top: 1em
}

.swagger-ui .tab {
    display: flex;
    list-style: none;
    padding: 0
}

.swagger-ui .tab li {
    color: #3b4151;
    cursor: pointer;
    font-family: sans-serif;
    font-size: 12px;
    min-width: 60px;
    padding: 0
}

.swagger-ui .tab li:first-of-type {
    padding-left: 0;
    padding-right: 12px;
    position: relative
}

.swagger-ui .tab li:first-of-type:after {
    background: rgba(0,0,0,.2);
    content: "";
    height: 100%;
    position: absolute;
    right: 6px;
    top: 0;
    width: 1px
}

.swagger-ui .tab li.active {
    font-weight: 700
}

.swagger-ui .tab li button.tablinks {
    background: none;
    border: 0;
    color: inherit;
    font-family: inherit;
    font-weight: inherit;
    padding: 0
}

.swagger-ui .opblock-description-wrapper,.swagger-ui .opblock-external-docs-wrapper,.swagger-ui .opblock-title_normal {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 12px;
    margin: 0 0 5px;
    padding: 15px 20px
}

.swagger-ui .opblock-description-wrapper h4,.swagger-ui .opblock-external-docs-wrapper h4,.swagger-ui .opblock-title_normal h4 {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 12px;
    margin: 0 0 5px
}

.swagger-ui .opblock-description-wrapper p,.swagger-ui .opblock-external-docs-wrapper p,.swagger-ui .opblock-title_normal p {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 14px;
    margin: 0
}

.swagger-ui .opblock-external-docs-wrapper h4 {
    padding-left: 0
}

.swagger-ui .execute-wrapper {
    padding: 20px;
    text-align: right
}

.swagger-ui .execute-wrapper .btn {
    padding: 8px 40px;
    width: 100%
}

.swagger-ui .body-param-options {
    display: flex;
    flex-direction: column
}

.swagger-ui .body-param-options .body-param-edit {
    padding: 10px 0
}

.swagger-ui .body-param-options label {
    padding: 8px 0
}

.swagger-ui .body-param-options label select {
    margin: 3px 0 0
}

.swagger-ui .responses-inner {
    padding: 20px
}

.swagger-ui .responses-inner h4,.swagger-ui .responses-inner h5 {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 12px;
    margin: 10px 0 5px
}

.swagger-ui .responses-inner .curl {
    white-space: normal
}

.swagger-ui .response-col_status {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 14px
}

.swagger-ui .response-col_status .response-undocumented {
    color: #909090;
    font-family: monospace;
    font-size: 11px;
    font-weight: 600
}

.swagger-ui .response-col_links {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 14px;
    max-width: 40em;
    padding-left: 2em
}

.swagger-ui .response-col_links .response-undocumented {
    color: #909090;
    font-family: monospace;
    font-size: 11px;
    font-weight: 600
}

.swagger-ui .response-col_links .operation-link {
    margin-bottom: 1.5em
}

.swagger-ui .response-col_links .operation-link .description {
    margin-bottom: .5em
}

.swagger-ui .opblock-body .opblock-loading-animation {
    display: block;
    margin: 3em auto
}

.swagger-ui .opblock-body pre.microlight {
    word-wrap: break-word;
    background: #333;
    border-radius: 4px;
    color: #fff;
    font-family: monospace;
    font-size: 12px;
    font-weight: 600;
    -webkit-hyphens: auto;
    hyphens: auto;
    margin: 0;
    padding: 10px;
    white-space: pre-wrap;
    word-break: break-all;
    word-break: break-word
}

.swagger-ui .opblock-body pre.microlight .headerline {
    display: block
}

.swagger-ui .highlight-code {
    position: relative
}

.swagger-ui .highlight-code>.microlight {
    max-height: 400px;
    min-height: 6em;
    overflow-y: auto
}

.swagger-ui .highlight-code>.microlight code {
    white-space: pre-wrap!important
}

.swagger-ui .highlight-code>.microlight code {
    word-break: break-all
}

.swagger-ui .curl-command {
    position: relative
}

.swagger-ui .download-contents {
    align-items: center;
    background: #7d8293;
    border-radius: 4px;
    bottom: 10px;
    color: #fff;
    cursor: pointer;
    display: flex;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 600;
    height: 30px;
    justify-content: center;
    padding: 5px;
    position: absolute;
    right: 10px;
    text-align: center
}

.swagger-ui .scheme-container {
    background: #fff;
    box-shadow: 0 1px 2px #00000026;
    margin: 0 0 20px;
    padding: 30px 0
}

.swagger-ui .scheme-container .schemes {
    align-items: flex-end;
    display: flex
}

.swagger-ui .scheme-container .schemes>label {
    color: #3b4151;
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 700;
    margin: -20px 15px 0 0
}

.swagger-ui .scheme-container .schemes>label select {
    min-width: 130px;
    text-transform: uppercase
}

.swagger-ui .loading-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1em;
    min-height: 1px;
    padding: 40px 0 60px
}

.swagger-ui .loading-container .loading {
    position: relative
}

.swagger-ui .loading-container .loading:after {
    color: #3b4151;
    content: "loading";
    font-family: sans-serif;
    font-size: 10px;
    font-weight: 700;
    left: 50%;
    position: absolute;
    text-transform: uppercase;
    top: 50%;
    transform: translate(-50%,-50%)
}

.swagger-ui .loading-container .loading:before {
    animation: rotation 1s linear infinite,opacity .5s;
    backface-visibility: hidden;
    border: 2px solid rgba(85,85,85,.1);
    border-radius: 100%;
    border-top-color: #0009;
    content: "";
    display: block;
    height: 60px;
    left: 50%;
    margin: -30px;
    opacity: 1;
    position: absolute;
    top: 50%;
    width: 60px
}

@keyframes rotation {
    to {
        transform: rotate(1turn)
    }
}

.swagger-ui .response-controls {
    display: flex;
    padding-top: 1em
}

.swagger-ui .response-control-media-type {
    margin-right: 1em
}

.swagger-ui .response-control-media-type--accept-controller select {
    border-color: green
}

.swagger-ui .response-control-media-type__accept-message {
    color: green;
    font-size: .7em
}

.swagger-ui .response-control-examples__title,.swagger-ui .response-control-media-type__title {
    display: block;
    font-size: .7em;
    margin-bottom: .2em
}

@keyframes blinker {
    50% {
        opacity: 0
    }
}

.swagger-ui .hidden {
    display: none
}

.swagger-ui .no-margin {
    border: none;
    height: auto;
    margin: 0;
    padding: 0
}

.swagger-ui .float-right {
    float: right
}

.swagger-ui .svg-assets {
    height: 0;
    position: absolute;
    width: 0
}

.swagger-ui section h3 {
    color: #3b4151;
    font-family: sans-serif
}

.swagger-ui a.nostyle {
    display: inline
}

.swagger-ui a.nostyle,.swagger-ui a.nostyle:visited {
    color: inherit;
    cursor: pointer;
    text-decoration: inherit
}

.swagger-ui .fallback {
    color: #aaa;
    padding: 1em
}

.swagger-ui .version-pragma {
    height: 100%;
    padding: 5em 0
}

.swagger-ui .version-pragma__message {
    display: flex;
    font-size: 1.2em;
    height: 100%;
    justify-content: center;
    line-height: 1.5em;
    padding: 0 .6em;
    text-align: center
}

.swagger-ui .version-pragma__message>div {
    flex: 1;
    max-width: 55ch
}

.swagger-ui .version-pragma__message code {
    background-color: #dedede;
    padding: 4px 4px 2px;
    white-space: pre
}

.swagger-ui .opblock-link {
    font-weight: 400
}

.swagger-ui .opblock-link.shown {
    font-weight: 700
}

.swagger-ui span.token-string {
    color: #555
}

.swagger-ui span.token-not-formatted {
    color: #555;
    font-weight: 700
}

.swagger-ui .btn {
    background: transparent;
    border: 2px solid gray;
    border-radius: 4px;
    box-shadow: 0 1px 2px #0000001a;
    color: #3b4151;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 700;
    padding: 5px 23px;
    transition: all .3s
}

.swagger-ui .btn.btn-sm {
    font-size: 12px;
    padding: 4px 23px
}

.swagger-ui .btn[disabled] {
    cursor: not-allowed;
    opacity: .3
}

.swagger-ui .btn:hover {
    box-shadow: 0 0 5px #0000004d
}

.swagger-ui .btn.cancel {
    background-color: transparent;
    border-color: #ff6060;
    color: #ff6060;
    font-family: sans-serif
}

.swagger-ui .btn.authorize {
    background-color: transparent;
    border-color: #49cc90;
    color: #49cc90;
    display: inline;
    line-height: 1
}

.swagger-ui .btn.authorize span {
    float: left;
    padding: 4px 20px 0 0
}

.swagger-ui .btn.authorize svg {
    fill: #49cc90
}

.swagger-ui .btn.execute {
    background-color: #4990e2;
    border-color: #4990e2;
    color: #fff
}

.swagger-ui .btn-group {
    display: flex;
    padding: 30px
}

.swagger-ui .btn-group .btn {
    flex: 1
}

.swagger-ui .btn-group .btn:first-child {
    border-radius: 4px 0 0 4px
}

.swagger-ui .btn-group .btn:last-child {
    border-radius: 0 4px 4px 0
}

.swagger-ui .authorization__btn {
    background: none;
    border: none;
    padding: 0 0 0 10px
}

.swagger-ui .authorization__btn.locked {
    opacity: 1
}

.swagger-ui .authorization__btn.unlocked {
    opacity: .4
}

.swagger-ui .model-box-control,.swagger-ui .models-control,.swagger-ui .opblock-summary-control {
    all: inherit;
    border-bottom: 0;
    cursor: pointer;
    flex: 1;
    padding: 0
}

.swagger-ui .model-box-control:focus,.swagger-ui .models-control:focus,.swagger-ui .opblock-summary-control:focus {
    outline: auto
}

.swagger-ui .expand-methods,.swagger-ui .expand-operation {
    background: none;
    border: none
}

.swagger-ui .expand-methods svg,.swagger-ui .expand-operation svg {
    height: 20px;
    width: 20px
}

.swagger-ui .expand-methods {
    padding: 0 10px
}

.swagger-ui .expand-methods:hover svg {
    fill: #404040
}

.swagger-ui .expand-methods svg {
    fill: #707070;
    transition: all .3s
}

.swagger-ui button {
    cursor: pointer
}

.swagger-ui button.invalid {
    animation: shake .4s 1;
    background: #feebeb;
    border-color: #f93e3e
}

.swagger-ui .copy-to-clipboard {
    align-items: center;
    background: #7d8293;
    border: none;
    border-radius: 4px;
    bottom: 10px;
    display: flex;
    height: 30px;
    justify-content: center;
    position: absolute;
    right: 100px;
    width: 30px
}

.swagger-ui .copy-to-clipboard button {
    background: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" aria-hidden="true"><path fill="%23fff" fill-rule="evenodd" d="M4 12h4v1H4v-1zm5-6H4v1h5V6zm2 3V7l-3 3 3 3v-2h5V9h-5zM6.5 8H4v1h2.5V8zM4 11h2.5v-1H4v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H3c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V5H3v9h10v-2zM4 4h8c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H5c-.55 0-1 .45-1 1z"/></svg>') 50% no-repeat;
    border: none;
    flex-grow: 1;
    flex-shrink: 1;
    height: 25px
}

.swagger-ui .curl-command .copy-to-clipboard {
    bottom: 5px;
    height: 20px;
    right: 10px;
    width: 20px
}

.swagger-ui .curl-command .copy-to-clipboard button {
    height: 18px
}

.swagger-ui .opblock .opblock-summary .view-line-link.copy-to-clipboard {
    height: 26px;
    position: static
}

.swagger-ui select {
    -webkit-appearance: none;
    appearance: none;
    background: #f7f7f7 url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13.418 7.859a.695.695 0 0 1 .978 0 .68.68 0 0 1 0 .969l-3.908 3.83a.697.697 0 0 1-.979 0l-3.908-3.83a.68.68 0 0 1 0-.969.695.695 0 0 1 .978 0L10 11l3.418-3.141z"/></svg>') right 10px center no-repeat;
    background-size: 20px;
    border: 2px solid #41444e;
    border-radius: 4px;
    box-shadow: 0 1px 2px #00000040;
    color: #3b4151;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 700;
    padding: 5px 40px 5px 10px
}

.swagger-ui select[multiple] {
    background: #f7f7f7;
    margin: 5px 0;
    padding: 5px
}

.swagger-ui select.invalid {
    animation: shake .4s 1;
    background: #feebeb;
    border-color: #f93e3e
}

.swagger-ui .opblock-body select {
    min-width: 230px
}

@media (max-width: 768px) {
    .swagger-ui .opblock-body select {
        min-width:180px
    }
}

@media (max-width: 640px) {
    .swagger-ui .opblock-body select {
        min-width:100%;
        width: 100%
    }
}

.swagger-ui label {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 700;
    margin: 0 0 5px
}

.swagger-ui input[type=email],.swagger-ui input[type=file],.swagger-ui input[type=password],.swagger-ui input[type=search],.swagger-ui input[type=text] {
    line-height: 1
}

@media (max-width: 768px) {
    .swagger-ui input[type=email],.swagger-ui input[type=file],.swagger-ui input[type=password],.swagger-ui input[type=search],.swagger-ui input[type=text] {
        max-width:175px
    }
}

.swagger-ui input[type=email],.swagger-ui input[type=file],.swagger-ui input[type=password],.swagger-ui input[type=search],.swagger-ui input[type=text],.swagger-ui textarea {
    background: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    margin: 5px 0;
    min-width: 100px;
    padding: 8px 10px
}

.swagger-ui input[type=email].invalid,.swagger-ui input[type=file].invalid,.swagger-ui input[type=password].invalid,.swagger-ui input[type=search].invalid,.swagger-ui input[type=text].invalid,.swagger-ui textarea.invalid {
    animation: shake .4s 1;
    background: #feebeb;
    border-color: #f93e3e
}

.swagger-ui input[disabled],.swagger-ui select[disabled],.swagger-ui textarea[disabled] {
    background-color: #fafafa;
    color: #888;
    cursor: not-allowed
}

.swagger-ui select[disabled] {
    border-color: #888
}

.swagger-ui textarea[disabled] {
    background-color: #41444e;
    color: #fff
}

@keyframes shake {
    10%,90% {
        transform: translate3d(-1px,0,0)
    }

    20%,80% {
        transform: translate3d(2px,0,0)
    }

    30%,50%,70% {
        transform: translate3d(-4px,0,0)
    }

    40%,60% {
        transform: translate3d(4px,0,0)
    }
}

.swagger-ui textarea {
    background: hsla(0,0%,100%,.8);
    border: none;
    border-radius: 4px;
    color: #3b4151;
    font-family: monospace;
    font-size: 12px;
    font-weight: 600;
    min-height: 280px;
    outline: none;
    padding: 10px;
    width: 100%
}

.swagger-ui textarea:focus {
    border: 2px solid #61affe
}

.swagger-ui textarea.curl {
    background: #41444e;
    border-radius: 4px;
    color: #fff;
    font-family: monospace;
    font-size: 12px;
    font-weight: 600;
    margin: 0;
    min-height: 100px;
    padding: 10px;
    resize: none
}

.swagger-ui .checkbox {
    color: #303030;
    padding: 5px 0 10px;
    transition: opacity .5s
}

.swagger-ui .checkbox label {
    display: flex
}

.swagger-ui .checkbox p {
    font-weight: 400!important;
    margin: 0!important
}

.swagger-ui .checkbox p {
    color: #3b4151;
    font-family: monospace;
    font-style: italic;
    font-weight: 600
}

.swagger-ui .checkbox input[type=checkbox] {
    display: none
}

.swagger-ui .checkbox input[type=checkbox]+label>.item {
    background: #e8e8e8;
    border-radius: 1px;
    box-shadow: 0 0 0 2px #e8e8e8;
    cursor: pointer;
    display: inline-block;
    flex: none;
    height: 16px;
    margin: 0 8px 0 0;
    padding: 5px;
    position: relative;
    top: 3px;
    width: 16px
}

.swagger-ui .checkbox input[type=checkbox]+label>.item:active {
    transform: scale(.9)
}

.swagger-ui .checkbox input[type=checkbox]:checked+label>.item {
    background: #e8e8e8 url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="3 7 10 8"><path fill="%2341474E" fill-rule="evenodd" d="M6.333 15 3 11.667l1.333-1.334 2 2L11.667 7 13 8.333z"/></svg>') 50% no-repeat
}

.swagger-ui .dialog-ux {
    inset: 0;
    position: fixed;
    z-index: 9999
}

.swagger-ui .dialog-ux .backdrop-ux {
    background: rgba(0,0,0,.8);
    inset: 0;
    position: fixed
}

.swagger-ui .dialog-ux .modal-ux {
    background: #fff;
    border: 1px solid #ebebeb;
    border-radius: 4px;
    box-shadow: 0 10px 30px #0003;
    left: 50%;
    max-width: 650px;
    min-width: 300px;
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    z-index: 9999
}

.swagger-ui .dialog-ux .modal-ux-content {
    max-height: 540px;
    overflow-y: auto;
    padding: 20px
}

.swagger-ui .dialog-ux .modal-ux-content p {
    color: #41444e;
    color: #3b4151;
    font-family: sans-serif;
    font-size: 12px;
    margin: 0 0 5px
}

.swagger-ui .dialog-ux .modal-ux-content h4 {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 18px;
    font-weight: 600;
    margin: 15px 0 0
}

.swagger-ui .dialog-ux .modal-ux-header {
    align-items: center;
    border-bottom: 1px solid #ebebeb;
    display: flex;
    padding: 12px 0
}

.swagger-ui .dialog-ux .modal-ux-header .close-modal {
    -webkit-appearance: none;
    appearance: none;
    background: none;
    border: none;
    padding: 0 10px
}

.swagger-ui .dialog-ux .modal-ux-header h3 {
    color: #3b4151;
    flex: 1;
    font-family: sans-serif;
    font-size: 20px;
    font-weight: 600;
    margin: 0;
    padding: 0 20px
}

.swagger-ui .model {
    color: #3b4151;
    font-family: monospace;
    font-size: 12px;
    font-weight: 300;
    font-weight: 600
}

.swagger-ui .model .deprecated span,.swagger-ui .model .deprecated td {
    color: #a0a0a0!important
}

.swagger-ui .model .deprecated>td:first-of-type {
    -webkit-text-decoration: line-through;
    text-decoration: line-through
}

.swagger-ui .model-toggle {
    cursor: pointer;
    display: inline-block;
    font-size: 10px;
    margin: auto .3em;
    position: relative;
    top: 6px;
    transform: rotate(90deg);
    transform-origin: 50% 50%;
    transition: transform .15s ease-in
}

.swagger-ui .model-toggle.collapsed {
    transform: rotate(0)
}

.swagger-ui .model-toggle:after {
    background: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>') 50% no-repeat;
    background-size: 100%;
    content: "";
    display: block;
    height: 20px;
    width: 20px
}

.swagger-ui .model-jump-to-path {
    cursor: pointer;
    position: relative
}

.swagger-ui .model-jump-to-path .view-line-link {
    cursor: pointer;
    position: absolute;
    top: -.4em
}

.swagger-ui .model-title {
    position: relative
}

.swagger-ui .model-title:hover .model-hint {
    visibility: visible
}

.swagger-ui .model-hint {
    background: rgba(0,0,0,.7);
    border-radius: 4px;
    color: #ebebeb;
    padding: .1em .5em;
    position: absolute;
    top: -1.8em;
    visibility: hidden;
    white-space: nowrap
}

.swagger-ui .model p {
    margin: 0 0 1em
}

.swagger-ui .model .property {
    color: #999;
    font-style: italic
}

.swagger-ui .model .property.primitive {
    color: #6b6b6b
}

.swagger-ui .model .external-docs,.swagger-ui table.model tr.description {
    color: #666;
    font-weight: 400
}

.swagger-ui table.model tr.description td:first-child,.swagger-ui table.model tr.property-row.required td:first-child {
    font-weight: 700
}

.swagger-ui table.model tr.property-row td {
    vertical-align: top
}

.swagger-ui table.model tr.property-row td:first-child {
    padding-right: .2em
}

.swagger-ui table.model tr.property-row .star {
    color: red
}

.swagger-ui table.model tr.extension {
    color: #777
}

.swagger-ui table.model tr.extension td:last-child {
    vertical-align: top
}

.swagger-ui table.model tr.external-docs td:first-child {
    font-weight: 700
}

.swagger-ui table.model tr .renderedMarkdown p:first-child {
    margin-top: 0
}

.swagger-ui section.models {
    border: 1px solid rgba(59,65,81,.3);
    border-radius: 4px;
    margin: 30px 0
}

.swagger-ui section.models .pointer {
    cursor: pointer
}

.swagger-ui section.models.is-open {
    padding: 0 0 20px
}

.swagger-ui section.models.is-open h4 {
    border-bottom: 1px solid rgba(59,65,81,.3);
    margin: 0 0 5px
}

.swagger-ui section.models h4 {
    align-items: center;
    color: #606060;
    cursor: pointer;
    display: flex;
    font-family: sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 10px 20px 10px 10px;
    transition: all .2s
}

.swagger-ui section.models h4 svg {
    transition: all .4s
}

.swagger-ui section.models h4 span {
    flex: 1
}

.swagger-ui section.models h4:hover {
    background: rgba(0,0,0,.02)
}

.swagger-ui section.models h5 {
    color: #707070;
    font-family: sans-serif;
    font-size: 16px;
    margin: 0 0 10px
}

.swagger-ui section.models .model-jump-to-path {
    position: relative;
    top: 5px
}

.swagger-ui section.models .model-container {
    background: rgba(0,0,0,.05);
    border-radius: 4px;
    margin: 0 20px 15px;
    position: relative;
    transition: all .5s
}

.swagger-ui section.models .model-container:hover {
    background: rgba(0,0,0,.07)
}

.swagger-ui section.models .model-container:first-of-type {
    margin: 20px
}

.swagger-ui section.models .model-container:last-of-type {
    margin: 0 20px
}

.swagger-ui section.models .model-container .models-jump-to-path {
    opacity: .65;
    position: absolute;
    right: 5px;
    top: 8px
}

.swagger-ui section.models .model-box {
    background: none
}

.swagger-ui .model-box {
    background: rgba(0,0,0,.1);
    border-radius: 4px;
    display: inline-block;
    padding: 10px
}

.swagger-ui .model-box .model-jump-to-path {
    position: relative;
    top: 4px
}

.swagger-ui .model-box.deprecated {
    opacity: .5
}

.swagger-ui .model-title {
    color: #505050;
    font-family: sans-serif;
    font-size: 16px
}

.swagger-ui .model-title img {
    bottom: 0;
    margin-left: 1em;
    position: relative
}

.swagger-ui .model-deprecated-warning {
    color: #f93e3e;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 600;
    margin-right: 1em
}

.swagger-ui span>span.model .brace-close {
    padding: 0 0 0 10px
}

.swagger-ui .prop-name {
    display: inline-block;
    margin-right: 1em
}

.swagger-ui .prop-type {
    color: #55a
}

.swagger-ui .prop-enum {
    display: block
}

.swagger-ui .prop-format {
    color: #606060
}

.swagger-ui .servers>label {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 12px;
    margin: -20px 15px 0 0
}

.swagger-ui .servers>label select {
    max-width: 100%;
    min-width: 130px;
    width: 100%
}

.swagger-ui .servers h4.message {
    padding-bottom: 2em
}

.swagger-ui .servers table tr {
    width: 30em
}

.swagger-ui .servers table td {
    display: inline-block;
    max-width: 15em;
    padding-bottom: 10px;
    padding-top: 10px;
    vertical-align: middle
}

.swagger-ui .servers table td:first-of-type {
    padding-right: 1em
}

.swagger-ui .servers table td input {
    height: 100%;
    width: 100%
}

.swagger-ui .servers .computed-url {
    margin: 2em 0
}

.swagger-ui .servers .computed-url code {
    display: inline-block;
    font-size: 16px;
    margin: 0 1em;
    padding: 4px
}

.swagger-ui .servers-title {
    font-size: 12px;
    font-weight: 700
}

.swagger-ui .operation-servers h4.message {
    margin-bottom: 2em
}

.swagger-ui table {
    border-collapse: collapse;
    padding: 0 10px;
    width: 100%
}

.swagger-ui table.model tbody tr td {
    padding: 0;
    vertical-align: top
}

.swagger-ui table.model tbody tr td:first-of-type {
    padding: 0 0 0 2em;
    width: 174px
}

.swagger-ui table.headers td {
    color: #3b4151;
    font-family: monospace;
    font-size: 12px;
    font-weight: 300;
    font-weight: 600;
    vertical-align: middle
}

.swagger-ui table.headers .header-example {
    color: #999;
    font-style: italic
}

.swagger-ui table tbody tr td {
    padding: 10px 0 0;
    vertical-align: top
}

.swagger-ui table tbody tr td:first-of-type {
    min-width: 6em;
    padding: 10px 0
}

.swagger-ui table thead tr td,.swagger-ui table thead tr th {
    border-bottom: 1px solid rgba(59,65,81,.2);
    color: #3b4151;
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 700;
    padding: 12px 0;
    text-align: left
}

.swagger-ui .parameters-col_description {
    margin-bottom: 2em;
    width: 99%
}

.swagger-ui .parameters-col_description input {
    max-width: 340px;
    width: 100%
}

.swagger-ui .parameters-col_description select {
    border-width: 1px
}

.swagger-ui .parameters-col_description .markdown p {
    margin: 0
}

.swagger-ui .parameter__name {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 400;
    margin-right: .75em
}

.swagger-ui .parameter__name.required {
    font-weight: 700
}

.swagger-ui .parameter__name.required span {
    color: red
}

.swagger-ui .parameter__name.required:after {
    color: #f009;
    content: "required";
    font-size: 10px;
    padding: 5px;
    position: relative;
    top: -6px
}

.swagger-ui .parameter__extension,.swagger-ui .parameter__in {
    color: gray;
    font-family: monospace;
    font-size: 12px;
    font-style: italic;
    font-weight: 600
}

.swagger-ui .parameter__deprecated {
    color: red;
    font-family: monospace;
    font-size: 12px;
    font-style: italic;
    font-weight: 600
}

.swagger-ui .parameter__empty_value_toggle {
    display: block;
    font-size: 13px;
    padding-bottom: 12px;
    padding-top: 5px
}

.swagger-ui .parameter__empty_value_toggle input {
    margin-right: 7px
}

.swagger-ui .parameter__empty_value_toggle.disabled {
    opacity: .7
}

.swagger-ui .table-container {
    padding: 20px
}

.swagger-ui .response-col_description {
    width: 99%
}

.swagger-ui .response-col_description .markdown p {
    margin: 0
}

.swagger-ui .response-col_links {
    min-width: 6em
}

.swagger-ui .response__extension {
    color: gray;
    font-family: monospace;
    font-size: 12px;
    font-style: italic;
    font-weight: 600
}

.swagger-ui .topbar {
    background-color: #1b1b1b;
    padding: 10px 0
}

.swagger-ui .topbar .topbar-wrapper,.swagger-ui .topbar a {
    align-items: center;
    display: flex
}

.swagger-ui .topbar a {
    color: #fff;
    flex: 1;
    font-family: sans-serif;
    font-size: 1.5em;
    font-weight: 700;
    max-width: 300px;
    -webkit-text-decoration: none;
    text-decoration: none
}

.swagger-ui .topbar a span {
    margin: 0;
    padding: 0 10px
}

.swagger-ui .topbar .download-url-wrapper {
    display: flex;
    flex: 3;
    justify-content: flex-end
}

.swagger-ui .topbar .download-url-wrapper input[type=text] {
    border: 2px solid #62a03f;
    border-radius: 4px 0 0 4px;
    margin: 0;
    outline: none;
    width: 100%
}

.swagger-ui .topbar .download-url-wrapper .select-label {
    align-items: center;
    color: #f0f0f0;
    display: flex;
    margin: 0;
    max-width: 600px;
    width: 100%
}

.swagger-ui .topbar .download-url-wrapper .select-label span {
    flex: 1;
    font-size: 16px;
    padding: 0 10px 0 0;
    text-align: right
}

.swagger-ui .topbar .download-url-wrapper .select-label select {
    border: 2px solid #62a03f;
    box-shadow: none;
    flex: 2;
    outline: none;
    width: 100%
}

.swagger-ui .topbar .download-url-wrapper .download-url-button {
    background: #62a03f;
    border: none;
    border-radius: 0 4px 4px 0;
    color: #fff;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 700;
    padding: 4px 30px
}

.swagger-ui .info {
    margin: 50px 0
}

.swagger-ui .info.failed-config {
    margin-left: auto;
    margin-right: auto;
    max-width: 880px;
    text-align: center
}

.swagger-ui .info hgroup.main {
    margin: 0 0 20px
}

.swagger-ui .info hgroup.main a {
    font-size: 12px
}

.swagger-ui .info pre {
    font-size: 14px
}

.swagger-ui .info li,.swagger-ui .info p,.swagger-ui .info table {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 14px
}

.swagger-ui .info h1,.swagger-ui .info h2,.swagger-ui .info h3,.swagger-ui .info h4,.swagger-ui .info h5 {
    color: #3b4151;
    font-family: sans-serif
}

.swagger-ui .info a {
    color: #4990e2;
    font-family: sans-serif;
    font-size: 14px;
    transition: all .4s
}

.swagger-ui .info a:hover {
    color: #1f69c0
}

.swagger-ui .info>div {
    margin: 0 0 5px
}

.swagger-ui .info .base-url {
    font-weight: 300!important
}

.swagger-ui .info .base-url {
    color: #3b4151;
    font-family: monospace;
    font-size: 12px;
    font-weight: 600;
    margin: 0
}

.swagger-ui .info .title {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 36px;
    margin: 0
}

.swagger-ui .info .title small {
    background: #7d8492;
    border-radius: 57px;
    display: inline-block;
    font-size: 10px;
    margin: 0 0 0 5px;
    padding: 2px 4px;
    position: relative;
    top: -5px;
    vertical-align: super
}

.swagger-ui .info .title small.version-stamp {
    background-color: #89bf04
}

.swagger-ui .info .title small pre {
    color: #fff;
    font-family: sans-serif;
    margin: 0;
    padding: 0
}

.swagger-ui .auth-btn-wrapper {
    display: flex;
    justify-content: center;
    padding: 10px 0
}

.swagger-ui .auth-btn-wrapper .btn-done {
    margin-right: 1em
}

.swagger-ui .auth-wrapper {
    display: flex;
    flex: 1;
    justify-content: flex-end
}

.swagger-ui .auth-wrapper .authorize {
    margin-left: 10px;
    margin-right: 10px;
    padding-right: 20px
}

.swagger-ui .auth-container {
    border-bottom: 1px solid #ebebeb;
    margin: 0 0 10px;
    padding: 10px 20px
}

.swagger-ui .auth-container:last-of-type {
    border: 0;
    margin: 0;
    padding: 10px 20px
}

.swagger-ui .auth-container h4 {
    margin: 5px 0 15px!important
}

.swagger-ui .auth-container .wrapper {
    margin: 0;
    padding: 0
}

.swagger-ui .auth-container input[type=password],.swagger-ui .auth-container input[type=text] {
    min-width: 230px
}

.swagger-ui .auth-container .errors {
    background-color: #fee;
    border-radius: 4px;
    color: red;
    color: #3b4151;
    font-family: monospace;
    font-size: 12px;
    font-weight: 600;
    margin: 1em;
    padding: 10px
}

.swagger-ui .auth-container .errors b {
    margin-right: 1em;
    text-transform: capitalize
}

.swagger-ui .scopes h2 {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 14px
}

.swagger-ui .scopes h2 a {
    color: #4990e2;
    cursor: pointer;
    font-size: 12px;
    padding-left: 10px;
    -webkit-text-decoration: underline;
    text-decoration: underline
}

.swagger-ui .scope-def {
    padding: 0 0 20px
}

.swagger-ui .errors-wrapper {
    animation: scaleUp .5s;
    background: rgba(249,62,62,.1);
    border: 2px solid #f93e3e;
    border-radius: 4px;
    margin: 20px;
    padding: 10px 20px
}

.swagger-ui .errors-wrapper .error-wrapper {
    margin: 0 0 10px
}

.swagger-ui .errors-wrapper .errors h4 {
    color: #3b4151;
    font-family: monospace;
    font-size: 14px;
    font-weight: 600;
    margin: 0
}

.swagger-ui .errors-wrapper .errors small {
    color: #606060
}

.swagger-ui .errors-wrapper .errors .message {
    white-space: pre-line
}

.swagger-ui .errors-wrapper .errors .message.thrown {
    max-width: 100%
}

.swagger-ui .errors-wrapper .errors .error-line {
    cursor: pointer;
    -webkit-text-decoration: underline;
    text-decoration: underline
}

.swagger-ui .errors-wrapper hgroup {
    align-items: center;
    display: flex
}

.swagger-ui .errors-wrapper hgroup h4 {
    color: #3b4151;
    flex: 1;
    font-family: sans-serif;
    font-size: 20px;
    margin: 0
}

@keyframes scaleUp {
    0% {
        opacity: 0;
        transform: scale(.8)
    }

    to {
        opacity: 1;
        transform: scale(1)
    }
}

.swagger-ui .Resizer.vertical.disabled {
    display: none
}

.swagger-ui .markdown p,.swagger-ui .markdown pre,.swagger-ui .renderedMarkdown p,.swagger-ui .renderedMarkdown pre {
    margin: 1em auto;
    word-break: break-all;
    word-break: break-word
}

.swagger-ui .markdown pre,.swagger-ui .renderedMarkdown pre {
    background: none;
    color: #000;
    font-weight: 400;
    padding: 0;
    white-space: pre-wrap
}

.swagger-ui .markdown code,.swagger-ui .renderedMarkdown code {
    background: rgba(0,0,0,.05);
    border-radius: 4px;
    color: #9012fe;
    font-family: monospace;
    font-size: 14px;
    font-weight: 600;
    padding: 5px 7px
}

.swagger-ui .markdown pre>code,.swagger-ui .renderedMarkdown pre>code {
    display: block
}

.swagger-ui .json-schema-2020-12 {
    background-color: #0000000d;
    border-radius: 4px;
    margin: 0 20px 15px;
    padding: 12px 0 12px 20px
}

.swagger-ui .json-schema-2020-12:first-of-type {
    margin: 20px
}

.swagger-ui .json-schema-2020-12:last-of-type {
    margin: 0 20px
}

.swagger-ui .json-schema-2020-12--embedded {
    background-color: inherit;
    padding-bottom: 0;
    padding-left: inherit;
    padding-right: inherit;
    padding-top: 0
}

.swagger-ui .json-schema-2020-12-body {
    border-left: 1px dashed rgba(0,0,0,.1);
    margin: 2px 0
}

.swagger-ui .json-schema-2020-12-body--collapsed {
    display: none
}

.swagger-ui .json-schema-2020-12-accordion {
    border: none;
    outline: none;
    padding-left: 0
}

.swagger-ui .json-schema-2020-12-accordion__children {
    display: inline-block
}

.swagger-ui .json-schema-2020-12-accordion__icon {
    display: inline-block;
    height: 18px;
    vertical-align: bottom;
    width: 18px
}

.swagger-ui .json-schema-2020-12-accordion__icon--expanded {
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    transition: transform .15s ease-in
}

.swagger-ui .json-schema-2020-12-accordion__icon--collapsed {
    transform: rotate(0);
    transform-origin: 50% 50%;
    transition: transform .15s ease-in
}

.swagger-ui .json-schema-2020-12-accordion__icon svg {
    height: 20px;
    width: 20px
}

.swagger-ui .json-schema-2020-12-expand-deep-button {
    border: none;
    color: #505050;
    color: #afaeae;
    font-family: sans-serif;
    font-size: 12px;
    padding-right: 0
}

.swagger-ui .json-schema-2020-12-keyword {
    margin: 5px 0
}

.swagger-ui .json-schema-2020-12-keyword__children {
    border-left: 1px dashed rgba(0,0,0,.1);
    margin: 0 0 0 20px;
    padding: 0
}

.swagger-ui .json-schema-2020-12-keyword__children--collapsed {
    display: none
}

.swagger-ui .json-schema-2020-12-keyword__name {
    font-size: 12px;
    font-weight: 700;
    margin-left: 20px
}

.swagger-ui .json-schema-2020-12-keyword__name--primary {
    color: #3b4151;
    font-style: normal
}

.swagger-ui .json-schema-2020-12-keyword__name--secondary {
    color: #6b6b6b;
    font-style: italic
}

.swagger-ui .json-schema-2020-12-keyword__value {
    color: #6b6b6b;
    font-size: 12px;
    font-style: italic;
    font-weight: 400
}

.swagger-ui .json-schema-2020-12-keyword__value--primary {
    color: #3b4151;
    font-style: normal
}

.swagger-ui .json-schema-2020-12-keyword__value--secondary {
    color: #6b6b6b;
    font-style: italic
}

.swagger-ui .json-schema-2020-12-keyword__value--const,.swagger-ui .json-schema-2020-12-keyword__value--warning {
    border: 1px dashed #6b6b6b;
    border-radius: 4px;
    color: #3b4151;
    color: #6b6b6b;
    display: inline-block;
    font-family: monospace;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5;
    margin-left: 10px;
    padding: 1px 4px
}

.swagger-ui .json-schema-2020-12-keyword__value--warning {
    border: 1px dashed red;
    color: red
}

.swagger-ui .json-schema-2020-12-keyword__name--secondary+.json-schema-2020-12-keyword__value--secondary:before {
    content: "="
}

.swagger-ui .json-schema-2020-12__attribute {
    color: #3b4151;
    font-family: monospace;
    font-size: 12px;
    padding-left: 10px;
    text-transform: lowercase
}

.swagger-ui .json-schema-2020-12__attribute--primary {
    color: #55a
}

.swagger-ui .json-schema-2020-12__attribute--muted {
    color: gray
}

.swagger-ui .json-schema-2020-12__attribute--warning {
    color: red
}

.swagger-ui .json-schema-2020-12-keyword--\$vocabulary ul {
    border-left: 1px dashed rgba(0,0,0,.1);
    margin: 0 0 0 20px
}

.swagger-ui .json-schema-2020-12-\$vocabulary-uri {
    margin-left: 35px
}

.swagger-ui .json-schema-2020-12-\$vocabulary-uri--disabled {
    -webkit-text-decoration: line-through;
    text-decoration: line-through
}

.swagger-ui .json-schema-2020-12-keyword--description {
    color: #6b6b6b;
    font-size: 12px;
    margin-left: 20px
}

.swagger-ui .json-schema-2020-12-keyword--description p {
    margin: 0
}

.swagger-ui .json-schema-2020-12__title {
    color: #505050;
    display: inline-block;
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: normal
}

.swagger-ui .json-schema-2020-12__title .json-schema-2020-12-keyword__name {
    margin: 0
}

.swagger-ui .json-schema-2020-12-property {
    margin: 7px 0
}

.swagger-ui .json-schema-2020-12-property .json-schema-2020-12__title {
    color: #3b4151;
    font-family: monospace;
    font-size: 12px;
    font-weight: 600;
    vertical-align: middle
}

.swagger-ui .json-schema-2020-12-keyword--properties>ul {
    border: none;
    margin: 0;
    padding: 0
}

.swagger-ui .json-schema-2020-12-property {
    list-style-type: none
}

.swagger-ui .json-schema-2020-12-property--required>.json-schema-2020-12:first-of-type>.json-schema-2020-12-head .json-schema-2020-12__title:after {
    color: red;
    content: "*";
    font-weight: 700
}

.swagger-ui .json-schema-2020-12-keyword--patternProperties ul {
    border: none;
    margin: 0;
    padding: 0
}

.swagger-ui .json-schema-2020-12-keyword--patternProperties .json-schema-2020-12__title:first-of-type:after,.swagger-ui .json-schema-2020-12-keyword--patternProperties .json-schema-2020-12__title:first-of-type:before {
    color: #55a;
    content: "/"
}

.swagger-ui .json-schema-2020-12-keyword--enum>ul {
    display: inline-block;
    margin: 0;
    padding: 0
}

.swagger-ui .json-schema-2020-12-keyword--enum>ul li {
    display: inline;
    list-style-type: none
}

.swagger-ui .json-schema-2020-12__constraint {
    background-color: #805ad5;
    border-radius: 4px;
    color: #3b4151;
    color: #fff;
    font-family: monospace;
    font-weight: 600;
    line-height: 1.5;
    margin-left: 10px;
    padding: 1px 3px
}

.swagger-ui .json-schema-2020-12__constraint--string {
    background-color: #d69e2e;
    color: #fff
}

.swagger-ui .json-schema-2020-12-keyword--dependentRequired>ul {
    display: inline-block;
    margin: 0;
    padding: 0
}

.swagger-ui .json-schema-2020-12-keyword--dependentRequired>ul li {
    display: inline;
    list-style-type: none
}

.swagger-ui .model-box .json-schema-2020-12:not(.json-schema-2020-12--embedded)>.json-schema-2020-12-head .json-schema-2020-12__title:first-of-type {
    font-size: 16px
}

.swagger-ui .model-box>.json-schema-2020-12 {
    margin: 0
}

.swagger-ui .model-box .json-schema-2020-12 {
    background-color: transparent;
    padding: 0
}

.swagger-ui .model-box .json-schema-2020-12-accordion,.swagger-ui .model-box .json-schema-2020-12-expand-deep-button {
    background-color: transparent
}

.swagger-ui .models .json-schema-2020-12:not(.json-schema-2020-12--embedded)>.json-schema-2020-12-head .json-schema-2020-12__title:first-of-type {
    font-size: 16px
}

/*!
 * Viewer.js v1.10.5
 * https://fengyuanchen.github.io/viewerjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2022-04-05T08:21:00.150Z
 */
.viewer-zoom-in:before,.viewer-zoom-out:before,.viewer-one-to-one:before,.viewer-reset:before,.viewer-prev:before,.viewer-play:before,.viewer-next:before,.viewer-rotate-left:before,.viewer-rotate-right:before,.viewer-flip-horizontal:before,.viewer-flip-vertical:before,.viewer-fullscreen:before,.viewer-fullscreen-exit:before,.viewer-close:before {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAAUCAYAAABWOyJDAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAQPSURBVHic7Zs/iFxVFMa/0U2UaJGksUgnIVhYxVhpjDbZCBmLdAYECxsRFBTUamcXUiSNncgKQbSxsxH8gzAP3FU2jY0kKKJNiiiIghFlccnP4p3nPCdv3p9778vsLOcHB2bfveeb7955c3jvvNkBIMdxnD64a94GHMfZu3iBcRynN7zAOI7TG15gHCeeNUkr8zaxG2lbYDYsdgMbktBsP03jdQwljSXdtBhLOmtjowC9Mg9L+knSlcD8TNKpSA9lBpK2JF2VdDSR5n5J64m0qli399hNFMUlpshQii5jbXTbHGviB0nLNeNDSd9VO4A2UdB2fp+x0eCnaXxWXGA2X0au/3HgN9P4LFCjIANOJdrLr0zzZ+BEpNYDwKbpnQMeAw4m8HjQtM6Z9qa917zPQwFr3M5KgA6J5rTJCdFZJj9/lyvGhsDvwFNVuV2MhhjrK6b9bFiE+j1r87eBl4HDwCF7/U/k+ofAX5b/EXBv5JoLMuILzf3Ap6Z3EzgdqHMCuF7hcQf4HDgeoHnccncqdK/TvSDWffFXI/exICY/xZyqc6XLWF1UFZna4gJ7q8BsRvgd2/xXpo6P+D9dfT7PpECtA3cnWPM0GXGFZh/wgWltA+cDNC7X+AP4GzjZQe+k5dRxuYPeiuXU7e1qwLpDz7dFjXKRaSwuMLvAlG8zZlG+YmiK1HoFqT7wP2z+4Q45TfEGcMt01xLoNZEBTwRqD4BLpnMLeC1A41UmVxsXgXeBayV/Wx20rpTyrpnWRft7p6O/FdqzGrDukPNtkaMoMo3FBdBSQMOnYBCReyf05s126fU9ytfX98+mY54Kxnp7S9K3kj6U9KYdG0h6UdLbkh7poFXMfUnSOyVvL0h6VtIXHbS6nOP+s/Zm9mvyXW1uuC9ohZ72E9uDmXWLJOB1GxsH+DxPftsB8B6wlGDN02TAkxG6+4D3TWsbeC5CS8CDFce+AW500LhhOW2020TRjK3b21HEmgti9m0RonxbdMZeVzV+/4tF3cBpP7E9mKHNL5q8h5g0eYsCMQz0epq8gQrwMXAgcs0FGXGFRcB9wCemF9PkbYqM/Bas7fxLwNeJPdTdpo4itQti8lPMqTpXuozVRVXPpbHI3KkNTB1NfkL81j2mvhDp91HgV9MKuRIqrykj3WPq4rHyL+axj8/qGPmTqi6F9YDlHOvJU6oYcTsh/TYSzWmTE6JT19CtLTJt32D6CmHe0eQn1O8z5AXgT4sx4Vcu0/EQecMydB8z0hUWkTd2t4CrwNEePqMBcAR4mrBbwyXLPWJa8zrXmmLEhNBmfpkuY2102xxrih+pb+ieAb6vGhuA97UcJ5KR8gZ77K+99xxeYBzH6Q3/Z0fHcXrDC4zjOL3hBcZxnN74F+zlvXFWXF9PAAAAAElFTkSuQmCC);
    background-repeat: no-repeat;
    background-size: 280px;
    color: transparent;
    display: block;
    font-size: 0;
    height: 20px;
    line-height: 0;
    width: 20px
}

.viewer-zoom-in:before {
    background-position: 0 0;
    content: "Zoom In"
}

.viewer-zoom-out:before {
    background-position: -20px 0;
    content: "Zoom Out"
}

.viewer-one-to-one:before {
    background-position: -40px 0;
    content: "One to One"
}

.viewer-reset:before {
    background-position: -60px 0;
    content: "Reset"
}

.viewer-prev:before {
    background-position: -80px 0;
    content: "Previous"
}

.viewer-play:before {
    background-position: -100px 0;
    content: "Play"
}

.viewer-next:before {
    background-position: -120px 0;
    content: "Next"
}

.viewer-rotate-left:before {
    background-position: -140px 0;
    content: "Rotate Left"
}

.viewer-rotate-right:before {
    background-position: -160px 0;
    content: "Rotate Right"
}

.viewer-flip-horizontal:before {
    background-position: -180px 0;
    content: "Flip Horizontal"
}

.viewer-flip-vertical:before {
    background-position: -200px 0;
    content: "Flip Vertical"
}

.viewer-fullscreen:before {
    background-position: -220px 0;
    content: "Enter Full Screen"
}

.viewer-fullscreen-exit:before {
    background-position: -240px 0;
    content: "Exit Full Screen"
}

.viewer-close:before {
    background-position: -260px 0;
    content: "Close"
}

.viewer-container {
    direction: ltr;
    font-size: 0;
    inset: 0;
    line-height: 0;
    overflow: hidden;
    position: absolute;
    -webkit-tap-highlight-color: transparent;
    touch-action: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none
}

.viewer-container::selection,.viewer-container *::selection {
    background-color: transparent
}

.viewer-container:focus {
    outline: 0
}

.viewer-container img {
    display: block;
    height: auto;
    max-height: none!important;
    max-width: none!important;
    min-height: 0!important;
    min-width: 0!important;
    width: 100%
}

.viewer-canvas {
    inset: 0;
    overflow: hidden;
    position: absolute
}

.viewer-canvas>img {
    height: auto;
    margin: 15px auto;
    max-width: 90%!important;
    width: auto
}

.viewer-footer {
    bottom: 0;
    left: 0;
    overflow: hidden;
    position: absolute;
    right: 0;
    text-align: center
}

.viewer-navbar {
    background-color: #0000007f;
    overflow: hidden
}

.viewer-list {
    box-sizing: content-box;
    height: 50px;
    margin: 0;
    overflow: hidden;
    padding: 1px 0
}

.viewer-list>li {
    color: transparent;
    cursor: pointer;
    float: left;
    font-size: 0;
    height: 50px;
    line-height: 0;
    opacity: .5;
    overflow: hidden;
    transition: opacity .15s;
    width: 30px
}

.viewer-list>li:focus,.viewer-list>li:hover {
    opacity: .75
}

.viewer-list>li:focus {
    outline: 0
}

.viewer-list>li+li {
    margin-left: 1px
}

.viewer-list>.viewer-loading {
    position: relative
}

.viewer-list>.viewer-loading:after {
    border-width: 2px;
    height: 20px;
    margin-left: -10px;
    margin-top: -10px;
    width: 20px
}

.viewer-list>.viewer-active,.viewer-list>.viewer-active:focus,.viewer-list>.viewer-active:hover {
    opacity: 1
}

.viewer-player {
    background-color: #000;
    cursor: none;
    display: none;
    inset: 0;
    position: absolute;
    z-index: 1
}

.viewer-player>img {
    left: 0;
    position: absolute;
    top: 0
}

.viewer-toolbar>ul {
    display: inline-block;
    margin: 0 auto 5px;
    overflow: hidden;
    padding: 6px 3px
}

.viewer-toolbar>ul>li {
    background-color: #0000007f;
    border-radius: 50%;
    cursor: pointer;
    float: left;
    height: 24px;
    overflow: hidden;
    transition: background-color .15s;
    width: 24px
}

.viewer-toolbar>ul>li:focus,.viewer-toolbar>ul>li:hover {
    background-color: #000c
}

.viewer-toolbar>ul>li:focus {
    box-shadow: 0 0 3px #fff;
    outline: 0;
    position: relative;
    z-index: 1
}

.viewer-toolbar>ul>li:before {
    margin: 2px
}

.viewer-toolbar>ul>li+li {
    margin-left: 1px
}

.viewer-toolbar>ul>.viewer-small {
    height: 18px;
    margin-bottom: 3px;
    margin-top: 3px;
    width: 18px
}

.viewer-toolbar>ul>.viewer-small:before {
    margin: -1px
}

.viewer-toolbar>ul>.viewer-large {
    height: 30px;
    margin-bottom: -3px;
    margin-top: -3px;
    width: 30px
}

.viewer-toolbar>ul>.viewer-large:before {
    margin: 5px
}

.viewer-tooltip {
    background-color: #000c;
    border-radius: 10px;
    color: #fff;
    display: none;
    font-size: 12px;
    height: 20px;
    left: 50%;
    line-height: 20px;
    margin-left: -25px;
    margin-top: -10px;
    position: absolute;
    text-align: center;
    top: 50%;
    width: 50px
}

.viewer-title {
    color: #ccc;
    display: inline-block;
    font-size: 12px;
    line-height: 1.2;
    margin: 0 5% 5px;
    max-width: 90%;
    opacity: .8;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: opacity .15s;
    white-space: nowrap
}

.viewer-title:hover {
    opacity: 1
}

.viewer-button {
    -webkit-app-region: no-drag;
    background-color: #0000007f;
    border-radius: 50%;
    cursor: pointer;
    height: 80px;
    overflow: hidden;
    position: absolute;
    right: -40px;
    top: -40px;
    transition: background-color .15s;
    width: 80px
}

.viewer-button:focus,.viewer-button:hover {
    background-color: #000c
}

.viewer-button:focus {
    box-shadow: 0 0 3px #fff;
    outline: 0
}

.viewer-button:before {
    bottom: 15px;
    left: 15px;
    position: absolute
}

.viewer-fixed {
    position: fixed
}

.viewer-open {
    overflow: hidden
}

.viewer-show {
    display: block
}

.viewer-hide {
    display: none
}

.viewer-backdrop {
    background-color: #0000007f
}

.viewer-invisible {
    visibility: hidden
}

.viewer-move {
    cursor: move;
    cursor: grab
}

.viewer-fade {
    opacity: 0
}

.viewer-in {
    opacity: 1
}

.viewer-transition {
    transition: all .3s
}

@keyframes viewer-spinner {
    0% {
        transform: rotate(0)
    }

    to {
        transform: rotate(360deg)
    }
}

.viewer-loading:after {
    animation: viewer-spinner 1s linear infinite;
    border: 4px solid rgba(255,255,255,10%);
    border-left-color: #ffffff7f;
    border-radius: 50%;
    content: "";
    display: inline-block;
    height: 40px;
    left: 50%;
    margin-left: -20px;
    margin-top: -20px;
    position: absolute;
    top: 50%;
    width: 40px;
    z-index: 1
}

@media (max-width: 767px) {
    .viewer-hide-xs-down {
        display:none
    }
}

@media (max-width: 991px) {
    .viewer-hide-sm-down {
        display:none
    }
}

@media (max-width: 1199px) {
    .viewer-hide-md-down {
        display:none
    }
}

.emoji-mart,.emoji-mart * {
    box-sizing: border-box;
    line-height: 1.15
}

.emoji-mart {
    font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,sans-serif;
    font-size: 16px;
    display: inline-block;
    color: #222427;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    background: #fff
}

.emoji-mart .emoji-mart-emoji {
    padding: 6px
}

.emoji-mart-bar {
    border: 0 solid #d9d9d9
}

.emoji-mart-bar:first-child {
    border-bottom-width: 1px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px
}

.emoji-mart-bar:last-child {
    border-top-width: 1px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px
}

.emoji-mart-anchors {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 6px;
    line-height: 0
}

.emoji-mart-anchor {
    position: relative;
    display: block;
    flex: 1 1 auto;
    color: #858585;
    text-align: center;
    padding: 12px 4px;
    overflow: hidden;
    transition: color .1s ease-out;
    margin: 0;
    box-shadow: none;
    background: none;
    border: none
}

.emoji-mart-anchor:focus {
    outline: 0
}

.emoji-mart-anchor:hover,.emoji-mart-anchor:focus,.emoji-mart-anchor-selected {
    color: #464646
}

.emoji-mart-anchor-selected .emoji-mart-anchor-bar {
    bottom: 0
}

.emoji-mart-anchor-bar {
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #464646
}

.emoji-mart-anchors i {
    display: inline-block;
    width: 100%;
    max-width: 22px
}

.emoji-mart-anchors svg,.emoji-mart-anchors img {
    fill: currentColor;
    height: 18px
}

.emoji-mart-scroll {
    overflow-y: scroll;
    height: 270px;
    padding: 0 6px 6px;
    will-change: transform
}

.emoji-mart-search {
    margin-top: 6px;
    padding: 0 6px;
    position: relative
}

.emoji-mart-search input {
    font-size: 16px;
    display: block;
    width: 100%;
    padding: 5px 25px 6px 10px;
    border-radius: 5px;
    border: 1px solid #d9d9d9;
    outline: 0
}

.emoji-mart-search input,.emoji-mart-search input::-webkit-search-decoration,.emoji-mart-search input::-webkit-search-cancel-button,.emoji-mart-search input::-webkit-search-results-button,.emoji-mart-search input::-webkit-search-results-decoration {
    -webkit-appearance: none
}

.emoji-mart-search-icon {
    position: absolute;
    top: 3px;
    right: 11px;
    z-index: 2;
    padding: 2px 5px 1px;
    border: none;
    background: none
}

.emoji-mart-category .emoji-mart-emoji span {
    z-index: 1;
    position: relative;
    text-align: center;
    cursor: default
}

.emoji-mart-category .emoji-mart-emoji:hover:before {
    z-index: 0;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f4f4f4;
    border-radius: 100%
}

.emoji-mart-category-label {
    z-index: 2;
    position: relative;
    position: sticky;
    top: 0
}

.emoji-mart-category-label span {
    display: block;
    width: 100%;
    font-weight: 500;
    padding: 5px 6px;
    background-color: #fff;
    background-color: #fffffff2
}

.emoji-mart-category-list {
    margin: 0;
    padding: 0
}

.emoji-mart-category-list li {
    list-style: none;
    margin: 0;
    padding: 0;
    display: inline-block
}

.emoji-mart-emoji {
    position: relative;
    display: inline-block;
    font-size: 0;
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    box-shadow: none
}

.emoji-mart-emoji-native {
    font-family: "Segoe UI Emoji",Segoe UI Symbol,Segoe UI,"Apple Color Emoji",Twemoji Mozilla,"Noto Color Emoji","Android Emoji"
}

.emoji-mart-no-results {
    font-size: 14px;
    text-align: center;
    padding-top: 70px;
    color: #858585
}

.emoji-mart-no-results .emoji-mart-category-label {
    display: none
}

.emoji-mart-no-results .emoji-mart-no-results-label {
    margin-top: .2em
}

.emoji-mart-no-results .emoji-mart-emoji:hover:before {
    content: none
}

.emoji-mart-preview {
    position: relative;
    height: 70px
}

.emoji-mart-preview-emoji,.emoji-mart-preview-data,.emoji-mart-preview-skins {
    position: absolute;
    top: 50%;
    transform: translateY(-50%)
}

.emoji-mart-preview-emoji {
    left: 12px
}

.emoji-mart-preview-data {
    left: 68px;
    right: 12px;
    word-break: break-all
}

.emoji-mart-preview-skins {
    right: 30px;
    text-align: right
}

.emoji-mart-preview-skins.custom {
    right: 10px;
    text-align: right
}

.emoji-mart-preview-name {
    font-size: 14px
}

.emoji-mart-preview-shortname {
    font-size: 12px;
    color: #888
}

.emoji-mart-preview-shortname+.emoji-mart-preview-shortname,.emoji-mart-preview-shortname+.emoji-mart-preview-emoticon,.emoji-mart-preview-emoticon+.emoji-mart-preview-emoticon {
    margin-left: .5em
}

.emoji-mart-preview-emoticon {
    font-size: 11px;
    color: #bbb
}

.emoji-mart-title span {
    display: inline-block;
    vertical-align: middle
}

.emoji-mart-title .emoji-mart-emoji {
    padding: 0
}

.emoji-mart-title-label {
    color: #999a9c;
    font-size: 26px;
    font-weight: 300
}

.emoji-mart-skin-swatches {
    font-size: 0;
    padding: 2px 0;
    border: 1px solid #d9d9d9;
    border-radius: 12px;
    background-color: #fff
}

.emoji-mart-skin-swatches.custom {
    font-size: 0;
    border: none;
    background-color: #fff
}

.emoji-mart-skin-swatches.opened .emoji-mart-skin-swatch {
    width: 16px;
    padding: 0 2px
}

.emoji-mart-skin-swatches.opened .emoji-mart-skin-swatch.selected:after {
    opacity: .75
}

.emoji-mart-skin-swatch {
    display: inline-block;
    width: 0;
    vertical-align: middle;
    transition-property: width,padding;
    transition-duration: .125s;
    transition-timing-function: ease-out
}

.emoji-mart-skin-swatch:nth-child(1) {
    transition-delay: 0s
}

.emoji-mart-skin-swatch:nth-child(2) {
    transition-delay: .03s
}

.emoji-mart-skin-swatch:nth-child(3) {
    transition-delay: .06s
}

.emoji-mart-skin-swatch:nth-child(4) {
    transition-delay: .09s
}

.emoji-mart-skin-swatch:nth-child(5) {
    transition-delay: .12s
}

.emoji-mart-skin-swatch:nth-child(6) {
    transition-delay: .15s
}

.emoji-mart-skin-swatch.selected {
    position: relative;
    width: 16px;
    padding: 0 2px
}

.emoji-mart-skin-swatch.selected:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4px;
    height: 4px;
    margin: -2px 0 0 -2px;
    background-color: #fff;
    border-radius: 100%;
    pointer-events: none;
    opacity: 0;
    transition: opacity .2s ease-out
}

.emoji-mart-skin-swatch.custom {
    display: inline-block;
    width: 0;
    height: 38px;
    overflow: hidden;
    vertical-align: middle;
    transition-property: width,height;
    transition-duration: .125s;
    transition-timing-function: ease-out;
    cursor: default
}

.emoji-mart-skin-swatch.custom.selected {
    position: relative;
    width: 36px;
    height: 38px;
    padding: 0 2px 0 0
}

.emoji-mart-skin-swatch.custom.selected:after {
    content: "";
    width: 0;
    height: 0
}

.emoji-mart-skin-swatches.custom .emoji-mart-skin-swatch.custom:hover {
    background-color: #f4f4f4;
    border-radius: 10%
}

.emoji-mart-skin-swatches.custom.opened .emoji-mart-skin-swatch.custom {
    width: 36px;
    height: 38px;
    padding: 0 2px 0 0
}

.emoji-mart-skin-swatches.custom.opened .emoji-mart-skin-swatch.custom.selected:after {
    opacity: .75
}

.emoji-mart-skin-text.opened {
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    color: #888;
    font-size: 11px;
    padding: 5px 2px;
    width: 95px;
    height: 40px;
    border-radius: 10%;
    background-color: #fff
}

.emoji-mart-skin {
    display: inline-block;
    width: 100%;
    padding-top: 100%;
    max-width: 12px;
    border-radius: 100%
}

.emoji-mart-skin-tone-1 {
    background-color: #ffc93a
}

.emoji-mart-skin-tone-2 {
    background-color: #fadcbc
}

.emoji-mart-skin-tone-3 {
    background-color: #e0bb95
}

.emoji-mart-skin-tone-4 {
    background-color: #bf8f68
}

.emoji-mart-skin-tone-5 {
    background-color: #9b643d
}

.emoji-mart-skin-tone-6 {
    background-color: #594539
}

.emoji-mart-sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0
}

.emoji-mart-dark {
    color: #fff;
    border-color: #555453;
    background-color: #222
}

.emoji-mart-dark .emoji-mart-bar {
    border-color: #555453
}

.emoji-mart-dark .emoji-mart-search input {
    color: #fff;
    border-color: #555453;
    background-color: #2f2f2f
}

.emoji-mart-dark .emoji-mart-search-icon svg {
    fill: #fff
}

.emoji-mart-dark .emoji-mart-category .emoji-mart-emoji:hover:before {
    background-color: #444
}

.emoji-mart-dark .emoji-mart-category-label span {
    background-color: #222;
    color: #fff
}

.emoji-mart-dark .emoji-mart-skin-swatches {
    border-color: #555453;
    background-color: #222
}

.emoji-mart-dark .emoji-mart-anchor:hover,.emoji-mart-dark .emoji-mart-anchor:focus,.emoji-mart-dark .emoji-mart-anchor-selected {
    color: #bfbfbf
}

.tippy-box[data-animation=fade][data-state=hidden] {
    opacity: 0
}

[data-tippy-root] {
    max-width: calc(100vw - 10px)
}

.tippy-box {
    position: relative;
    background-color: #333;
    color: #fff;
    border-radius: 4px;
    font-size: 14px;
    line-height: 1.4;
    white-space: normal;
    outline: 0;
    transition-property: transform,visibility,opacity
}

.tippy-box[data-placement^=top]>.tippy-arrow {
    bottom: 0
}

.tippy-box[data-placement^=top]>.tippy-arrow:before {
    bottom: -7px;
    left: 0;
    border-width: 8px 8px 0;
    border-top-color: initial;
    transform-origin: center top
}

.tippy-box[data-placement^=bottom]>.tippy-arrow {
    top: 0
}

.tippy-box[data-placement^=bottom]>.tippy-arrow:before {
    top: -7px;
    left: 0;
    border-width: 0 8px 8px;
    border-bottom-color: initial;
    transform-origin: center bottom
}

.tippy-box[data-placement^=left]>.tippy-arrow {
    right: 0
}

.tippy-box[data-placement^=left]>.tippy-arrow:before {
    border-width: 8px 0 8px 8px;
    border-left-color: initial;
    right: -7px;
    transform-origin: center left
}

.tippy-box[data-placement^=right]>.tippy-arrow {
    left: 0
}

.tippy-box[data-placement^=right]>.tippy-arrow:before {
    left: -7px;
    border-width: 8px 8px 8px 0;
    border-right-color: initial;
    transform-origin: center right
}

.tippy-box[data-inertia][data-state=visible] {
    transition-timing-function: cubic-bezier(.54,1.5,.38,1.11)
}

.tippy-arrow {
    width: 16px;
    height: 16px;
    color: #333
}

.tippy-arrow:before {
    content: "";
    position: absolute;
    border-color: transparent;
    border-style: solid
}

.tippy-content {
    position: relative;
    padding: 5px 9px;
    z-index: 1
}

.replayer-wrapper {
    position: relative
}

.replayer-mouse {
    position: absolute;
    width: 20px;
    height: 20px;
    transition: left .05s linear,top .05s linear;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDUwIDUwIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPkRlc2lnbl90bnA8L3RpdGxlPjxwYXRoIGQ9Ik00OC43MSw0Mi45MUwzNC4wOCwyOC4yOSw0NC4zMywxOEExLDEsMCwwLDAsNDQsMTYuMzlMMi4zNSwxLjA2QTEsMSwwLDAsMCwxLjA2LDIuMzVMMTYuMzksNDRhMSwxLDAsMCwwLDEuNjUuMzZMMjguMjksMzQuMDgsNDIuOTEsNDguNzFhMSwxLDAsMCwwLDEuNDEsMGw0LjM4LTQuMzhBMSwxLDAsMCwwLDQ4LjcxLDQyLjkxWm0tNS4wOSwzLjY3TDI5LDMyYTEsMSwwLDAsMC0xLjQxLDBsLTkuODUsOS44NUwzLjY5LDMuNjlsMzguMTIsMTRMMzIsMjcuNThBMSwxLDAsMCwwLDMyLDI5TDQ2LjU5LDQzLjYyWiI+PC9wYXRoPjwvc3ZnPg==);
    border-color: transparent
}

.replayer-mouse:after {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    background: rgb(73,80,246);
    border-radius: 100%;
    transform: translate(-50%,-50%);
    opacity: .3
}

.replayer-mouse.active:after {
    animation: click .2s ease-in-out 1
}

.replayer-mouse.touch-device {
    background-image: none;
    width: 70px;
    height: 70px;
    border-width: 4px;
    border-style: solid;
    border-radius: 100%;
    margin-left: -37px;
    margin-top: -37px;
    border-color: #4950f600;
    transition: left 0s linear,top 0s linear,border-color .2s ease-in-out
}

.replayer-mouse.touch-device.touch-active {
    border-color: #4950f6;
    transition: left .25s linear,top .25s linear,border-color .2s ease-in-out
}

.replayer-mouse.touch-device:after {
    opacity: 0
}

.replayer-mouse.touch-device.active:after {
    animation: touch-click .2s ease-in-out 1
}

.replayer-mouse-tail {
    position: absolute;
    pointer-events: none
}

@keyframes click {
    0% {
        opacity: .3;
        width: 20px;
        height: 20px
    }

    50% {
        opacity: .5;
        width: 10px;
        height: 10px
    }
}

@keyframes touch-click {
    0% {
        opacity: 0;
        width: 20px;
        height: 20px
    }

    50% {
        opacity: .5;
        width: 10px;
        height: 10px
    }
}

@charset "UTF-8";g.type-TK>rect {
    fill: #00ffd0
}

.node rect {
    stroke: #999;
    fill: #fff;
    stroke-width: 0px
}

.edgePath path {
    stroke: #333;
    stroke-width: 1.5px
}

.card-flex-container {
    padding: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%
}

.font-semi-bold,.btn,.h6,.h5,.h4 {
    font-weight: 600
}

.pad0T {
    padding-top: 0!important
}

.pad0R {
    padding-right: 0!important
}

.pad0B {
    padding-bottom: 0!important
}

.pad0L {
    padding-left: 0!important
}

.pad0A {
    padding: 0!important
}

.mrg0T {
    margin-top: 0!important
}

.mrg0R {
    margin-right: 0!important
}

.mrg0B {
    margin-bottom: 0!important
}

.mrg0A {
    margin: 0!important
}

.pad1T {
    padding-top: 1px!important
}

.pad1R {
    padding-right: 1px!important
}

.pad1B {
    padding-bottom: 1px!important
}

.pad1L {
    padding-left: 1px!important
}

.pad1A {
    padding: 1px!important
}

.mrg1T {
    margin-top: 1px!important
}

.mrg1R {
    margin-right: 1px!important
}

.mrg1B {
    margin-bottom: 1px!important
}

.mrg1L {
    margin-left: 1px!important
}

.mrg1A {
    margin: 1px!important
}

.pad2T {
    padding-top: 2px!important
}

.pad2R {
    padding-right: 2px!important
}

.pad2B {
    padding-bottom: 2px!important
}

.pad2L {
    padding-left: 2px!important
}

.pad2A {
    padding: 2px!important
}

.mrg2T {
    margin-top: 2px!important
}

.mrg2R {
    margin-right: 2px!important
}

.mrg2B {
    margin-bottom: 2px!important
}

.mrg2L {
    margin-left: 2px!important
}

.mrg2A {
    margin: 2px!important
}

.pad3T {
    padding-top: 3px!important
}

.pad3R {
    padding-right: 3px!important
}

.pad3B {
    padding-bottom: 3px!important
}

.pad3L {
    padding-left: 3px!important
}

.pad3A {
    padding: 3px!important
}

.mrg3T {
    margin-top: 3px!important
}

.mrg3R {
    margin-right: 3px!important
}

.mrg3B {
    margin-bottom: 3px!important
}

.mrg3L {
    margin-left: 3px!important
}

.mrg3A {
    margin: 3px!important
}

.pad4T {
    padding-top: 4px!important
}

.pad4R {
    padding-right: 4px!important
}

.pad4B {
    padding-bottom: 4px!important
}

.pad4L {
    padding-left: 4px!important
}

.pad4A {
    padding: 4px!important
}

.mrg4T {
    margin-top: 4px!important
}

.mrg4R {
    margin-right: 4px!important
}

.mrg4B {
    margin-bottom: 4px!important
}

.mrg4L {
    margin-left: 4px!important
}

.mrg4A {
    margin: 4px!important
}

.pad5T {
    padding-top: 5px!important
}

.pad5R {
    padding-right: 5px!important
}

.pad5B {
    padding-bottom: 5px!important
}

.pad5L {
    padding-left: 5px!important
}

.pad5A {
    padding: 5px!important
}

.mrg5T {
    margin-top: 5px!important
}

.mrg5R {
    margin-right: 5px!important
}

.mrg5B {
    margin-bottom: 5px!important
}

.mrg5L {
    margin-left: 5px!important
}

.mrg5A {
    margin: 5px!important
}

.pad6T {
    padding-top: 6px!important
}

.pad6R {
    padding-right: 6px!important
}

.pad6B {
    padding-bottom: 6px!important
}

.pad6L {
    padding-left: 6px!important
}

.pad6A {
    padding: 6px!important
}

.mrg6T {
    margin-top: 6px!important
}

.mrg6R {
    margin-right: 6px!important
}

.mrg6B {
    margin-bottom: 6px!important
}

.mrg6L {
    margin-left: 6px!important
}

.mrg6A {
    margin: 6px!important
}

.pad7T {
    padding-top: 7px!important
}

.pad7R {
    padding-right: 7px!important
}

.pad7B {
    padding-bottom: 7px!important
}

.pad7L {
    padding-left: 7px!important
}

.pad7A {
    padding: 7px!important
}

.mrg7T {
    margin-top: 7px!important
}

.mrg7R {
    margin-right: 7px!important
}

.mrg7B {
    margin-bottom: 7px!important
}

.mrg7L {
    margin-left: 7px!important
}

.mrg7A {
    margin: 7px!important
}

.pad8T {
    padding-top: 8px!important
}

.pad8R {
    padding-right: 8px!important
}

.pad8B {
    padding-bottom: 8px!important
}

.pad8L {
    padding-left: 8px!important
}

.pad8A {
    padding: 8px!important
}

.mrg8T {
    margin-top: 8px!important
}

.mrg8R {
    margin-right: 8px!important
}

.mrg8B {
    margin-bottom: 8px!important
}

.mrg8L {
    margin-left: 8px!important
}

.mrg8A {
    margin: 8px!important
}

.pad9T {
    padding-top: 9px!important
}

.pad9R {
    padding-right: 9px!important
}

.pad9B {
    padding-bottom: 9px!important
}

.pad9L {
    padding-left: 9px!important
}

.pad9A {
    padding: 9px!important
}

.mrg9T {
    margin-top: 9px!important
}

.mrg9R {
    margin-right: 9px!important
}

.mrg9B {
    margin-bottom: 9px!important
}

.mrg9L {
    margin-left: 9px!important
}

.mrg9A {
    margin: 9px!important
}

.pad10T {
    padding-top: 10px!important
}

.pad10R {
    padding-right: 10px!important
}

.pad10B {
    padding-bottom: 10px!important
}

.pad10L {
    padding-left: 10px!important
}

.pad10A {
    padding: 10px!important
}

.mrg10T {
    margin-top: 10px!important
}

.mrg10R {
    margin-right: 10px!important
}

.mrg10B {
    margin-bottom: 10px!important
}

.mrg10L {
    margin-left: 10px!important
}

.mrg10A {
    margin: 10px!important
}

.pad11T {
    padding-top: 11px!important
}

.pad11R {
    padding-right: 11px!important
}

.pad11B {
    padding-bottom: 11px!important
}

.pad11L {
    padding-left: 11px!important
}

.pad11A {
    padding: 11px!important
}

.mrg11T {
    margin-top: 11px!important
}

.mrg11R {
    margin-right: 11px!important
}

.mrg11B {
    margin-bottom: 11px!important
}

.mrg11L {
    margin-left: 11px!important
}

.mrg11A {
    margin: 11px!important
}

.pad12T {
    padding-top: 12px!important
}

.pad12R {
    padding-right: 12px!important
}

.pad12B {
    padding-bottom: 12px!important
}

.pad12L {
    padding-left: 12px!important
}

.pad12A {
    padding: 12px!important
}

.mrg12T {
    margin-top: 12px!important
}

.mrg12R {
    margin-right: 12px!important
}

.mrg12B {
    margin-bottom: 12px!important
}

.mrg12L {
    margin-left: 12px!important
}

.mrg12A {
    margin: 12px!important
}

.pad13T {
    padding-top: 13px!important
}

.pad13R {
    padding-right: 13px!important
}

.pad13B {
    padding-bottom: 13px!important
}

.pad13L {
    padding-left: 13px!important
}

.pad13A {
    padding: 13px!important
}

.mrg13T {
    margin-top: 13px!important
}

.mrg13R {
    margin-right: 13px!important
}

.mrg13B {
    margin-bottom: 13px!important
}

.mrg13L {
    margin-left: 13px!important
}

.mrg13A {
    margin: 13px!important
}

.pad14T {
    padding-top: 14px!important
}

.pad14R {
    padding-right: 14px!important
}

.pad14B {
    padding-bottom: 14px!important
}

.pad14L {
    padding-left: 14px!important
}

.pad14A {
    padding: 14px!important
}

.mrg14T {
    margin-top: 14px!important
}

.mrg14R {
    margin-right: 14px!important
}

.mrg14B {
    margin-bottom: 14px!important
}

.mrg14L {
    margin-left: 14px!important
}

.mrg14A {
    margin: 14px!important
}

.pad15T {
    padding-top: 15px!important
}

.pad15R {
    padding-right: 15px!important
}

.pad15B {
    padding-bottom: 15px!important
}

.pad15L {
    padding-left: 15px!important
}

.pad15A {
    padding: 15px!important
}

.mrg15T {
    margin-top: 15px!important
}

.mrg15R {
    margin-right: 15px!important
}

.mrg15B {
    margin-bottom: 15px!important
}

.mrg15L {
    margin-left: 15px!important
}

.mrg15A {
    margin: 15px!important
}

.pad16T {
    padding-top: 16px!important
}

.pad16R {
    padding-right: 16px!important
}

.pad16B {
    padding-bottom: 16px!important
}

.pad16L {
    padding-left: 16px!important
}

.pad16A {
    padding: 16px!important
}

.mrg16T {
    margin-top: 16px!important
}

.mrg16R {
    margin-right: 16px!important
}

.mrg16B {
    margin-bottom: 16px!important
}

.mrg16L {
    margin-left: 16px!important
}

.mrg16A {
    margin: 16px!important
}

.pad17T {
    padding-top: 17px!important
}

.pad17R {
    padding-right: 17px!important
}

.pad17B {
    padding-bottom: 17px!important
}

.pad17L {
    padding-left: 17px!important
}

.pad17A {
    padding: 17px!important
}

.mrg17T {
    margin-top: 17px!important
}

.mrg17R {
    margin-right: 17px!important
}

.mrg17B {
    margin-bottom: 17px!important
}

.mrg17L {
    margin-left: 17px!important
}

.mrg17A {
    margin: 17px!important
}

.pad18T {
    padding-top: 18px!important
}

.pad18R {
    padding-right: 18px!important
}

.pad18B {
    padding-bottom: 18px!important
}

.pad18L {
    padding-left: 18px!important
}

.pad18A {
    padding: 18px!important
}

.mrg18T {
    margin-top: 18px!important
}

.mrg18R {
    margin-right: 18px!important
}

.mrg18B {
    margin-bottom: 18px!important
}

.mrg18L {
    margin-left: 18px!important
}

.mrg18A {
    margin: 18px!important
}

.pad19T {
    padding-top: 19px!important
}

.pad19R {
    padding-right: 19px!important
}

.pad19B {
    padding-bottom: 19px!important
}

.pad19L {
    padding-left: 19px!important
}

.pad19A {
    padding: 19px!important
}

.mrg19T {
    margin-top: 19px!important
}

.mrg19R {
    margin-right: 19px!important
}

.mrg19B {
    margin-bottom: 19px!important
}

.mrg19L {
    margin-left: 19px!important
}

.mrg19A {
    margin: 19px!important
}

.pad20T {
    padding-top: 20px!important
}

.pad20R {
    padding-right: 20px!important
}

.pad20B {
    padding-bottom: 20px!important
}

.pad20L {
    padding-left: 20px!important
}

.pad20A {
    padding: 20px!important
}

.mrg20T {
    margin-top: 20px!important
}

.mrg20R {
    margin-right: 20px!important
}

.mrg20B {
    margin-bottom: 20px!important
}

.mrg20L {
    margin-left: 20px!important
}

.mrg20A {
    margin: 20px!important
}

.pad21T {
    padding-top: 21px!important
}

.pad21R {
    padding-right: 21px!important
}

.pad21B {
    padding-bottom: 21px!important
}

.pad21L {
    padding-left: 21px!important
}

.pad21A {
    padding: 21px!important
}

.mrg21T {
    margin-top: 21px!important
}

.mrg21R {
    margin-right: 21px!important
}

.mrg21B {
    margin-bottom: 21px!important
}

.mrg21L {
    margin-left: 21px!important
}

.mrg21A {
    margin: 21px!important
}

.pad22T {
    padding-top: 22px!important
}

.pad22R {
    padding-right: 22px!important
}

.pad22B {
    padding-bottom: 22px!important
}

.pad22L {
    padding-left: 22px!important
}

.pad22A {
    padding: 22px!important
}

.mrg22T {
    margin-top: 22px!important
}

.mrg22R {
    margin-right: 22px!important
}

.mrg22B {
    margin-bottom: 22px!important
}

.mrg22L {
    margin-left: 22px!important
}

.mrg22A {
    margin: 22px!important
}

.pad23T {
    padding-top: 23px!important
}

.pad23R {
    padding-right: 23px!important
}

.pad23B {
    padding-bottom: 23px!important
}

.pad23L {
    padding-left: 23px!important
}

.pad23A {
    padding: 23px!important
}

.mrg23T {
    margin-top: 23px!important
}

.mrg23R {
    margin-right: 23px!important
}

.mrg23B {
    margin-bottom: 23px!important
}

.mrg23L {
    margin-left: 23px!important
}

.mrg23A {
    margin: 23px!important
}

.pad24T {
    padding-top: 24px!important
}

.pad24R {
    padding-right: 24px!important
}

.pad24B {
    padding-bottom: 24px!important
}

.pad24L {
    padding-left: 24px!important
}

.pad24A {
    padding: 24px!important
}

.mrg24T {
    margin-top: 24px!important
}

.mrg24R {
    margin-right: 24px!important
}

.mrg24B {
    margin-bottom: 24px!important
}

.mrg24L {
    margin-left: 24px!important
}

.mrg24A {
    margin: 24px!important
}

.pad25T {
    padding-top: 25px!important
}

.pad25R {
    padding-right: 25px!important
}

.pad25B {
    padding-bottom: 25px!important
}

.pad25L {
    padding-left: 25px!important
}

.pad25A {
    padding: 25px!important
}

.mrg25T {
    margin-top: 25px!important
}

.mrg25R {
    margin-right: 25px!important
}

.mrg25B {
    margin-bottom: 25px!important
}

.mrg25L {
    margin-left: 25px!important
}

.mrg25A {
    margin: 25px!important
}

.pad26T {
    padding-top: 26px!important
}

.pad26R {
    padding-right: 26px!important
}

.pad26B {
    padding-bottom: 26px!important
}

.pad26L {
    padding-left: 26px!important
}

.pad26A {
    padding: 26px!important
}

.mrg26T {
    margin-top: 26px!important
}

.mrg26R {
    margin-right: 26px!important
}

.mrg26B {
    margin-bottom: 26px!important
}

.mrg26L {
    margin-left: 26px!important
}

.mrg26A {
    margin: 26px!important
}

.pad27T {
    padding-top: 27px!important
}

.pad27R {
    padding-right: 27px!important
}

.pad27B {
    padding-bottom: 27px!important
}

.pad27L {
    padding-left: 27px!important
}

.pad27A {
    padding: 27px!important
}

.mrg27T {
    margin-top: 27px!important
}

.mrg27R {
    margin-right: 27px!important
}

.mrg27B {
    margin-bottom: 27px!important
}

.mrg27L {
    margin-left: 27px!important
}

.mrg27A {
    margin: 27px!important
}

.pad28T {
    padding-top: 28px!important
}

.pad28R {
    padding-right: 28px!important
}

.pad28B {
    padding-bottom: 28px!important
}

.pad28L {
    padding-left: 28px!important
}

.pad28A {
    padding: 28px!important
}

.mrg28T {
    margin-top: 28px!important
}

.mrg28R {
    margin-right: 28px!important
}

.mrg28B {
    margin-bottom: 28px!important
}

.mrg28L {
    margin-left: 28px!important
}

.mrg28A {
    margin: 28px!important
}

.pad29T {
    padding-top: 29px!important
}

.pad29R {
    padding-right: 29px!important
}

.pad29B {
    padding-bottom: 29px!important
}

.pad29L {
    padding-left: 29px!important
}

.pad29A {
    padding: 29px!important
}

.mrg29T {
    margin-top: 29px!important
}

.mrg29R {
    margin-right: 29px!important
}

.mrg29B {
    margin-bottom: 29px!important
}

.mrg29L {
    margin-left: 29px!important
}

.mrg29A {
    margin: 29px!important
}

.pad30T {
    padding-top: 30px!important
}

.pad30R {
    padding-right: 30px!important
}

.pad30B {
    padding-bottom: 30px!important
}

.pad30L {
    padding-left: 30px!important
}

.pad30A {
    padding: 30px!important
}

.mrg30T {
    margin-top: 30px!important
}

.mrg30R {
    margin-right: 30px!important
}

.mrg30B {
    margin-bottom: 30px!important
}

.mrg30L {
    margin-left: 30px!important
}

.mrg30A {
    margin: 30px!important
}

.pad31T {
    padding-top: 31px!important
}

.pad31R {
    padding-right: 31px!important
}

.pad31B {
    padding-bottom: 31px!important
}

.pad31L {
    padding-left: 31px!important
}

.pad31A {
    padding: 31px!important
}

.mrg31T {
    margin-top: 31px!important
}

.mrg31R {
    margin-right: 31px!important
}

.mrg31B {
    margin-bottom: 31px!important
}

.mrg31L {
    margin-left: 31px!important
}

.mrg31A {
    margin: 31px!important
}

.pad32T {
    padding-top: 32px!important
}

.pad32R {
    padding-right: 32px!important
}

.pad32B {
    padding-bottom: 32px!important
}

.pad32L {
    padding-left: 32px!important
}

.pad32A {
    padding: 32px!important
}

.mrg32T {
    margin-top: 32px!important
}

.mrg32R {
    margin-right: 32px!important
}

.mrg32B {
    margin-bottom: 32px!important
}

.mrg32L {
    margin-left: 32px!important
}

.mrg32A {
    margin: 32px!important
}

.pad33T {
    padding-top: 33px!important
}

.pad33R {
    padding-right: 33px!important
}

.pad33B {
    padding-bottom: 33px!important
}

.pad33L {
    padding-left: 33px!important
}

.pad33A {
    padding: 33px!important
}

.mrg33T {
    margin-top: 33px!important
}

.mrg33R {
    margin-right: 33px!important
}

.mrg33B {
    margin-bottom: 33px!important
}

.mrg33L {
    margin-left: 33px!important
}

.mrg33A {
    margin: 33px!important
}

.pad34T {
    padding-top: 34px!important
}

.pad34R {
    padding-right: 34px!important
}

.pad34B {
    padding-bottom: 34px!important
}

.pad34L {
    padding-left: 34px!important
}

.pad34A {
    padding: 34px!important
}

.mrg34T {
    margin-top: 34px!important
}

.mrg34R {
    margin-right: 34px!important
}

.mrg34B {
    margin-bottom: 34px!important
}

.mrg34L {
    margin-left: 34px!important
}

.mrg34A {
    margin: 34px!important
}

.pad35T {
    padding-top: 35px!important
}

.pad35R {
    padding-right: 35px!important
}

.pad35B {
    padding-bottom: 35px!important
}

.pad35L {
    padding-left: 35px!important
}

.pad35A {
    padding: 35px!important
}

.mrg35T {
    margin-top: 35px!important
}

.mrg35R {
    margin-right: 35px!important
}

.mrg35B {
    margin-bottom: 35px!important
}

.mrg35L {
    margin-left: 35px!important
}

.mrg35A {
    margin: 35px!important
}

.pad36T {
    padding-top: 36px!important
}

.pad36R {
    padding-right: 36px!important
}

.pad36B {
    padding-bottom: 36px!important
}

.pad36L {
    padding-left: 36px!important
}

.pad36A {
    padding: 36px!important
}

.mrg36T {
    margin-top: 36px!important
}

.mrg36R {
    margin-right: 36px!important
}

.mrg36B {
    margin-bottom: 36px!important
}

.mrg36L {
    margin-left: 36px!important
}

.mrg36A {
    margin: 36px!important
}

.pad37T {
    padding-top: 37px!important
}

.pad37R {
    padding-right: 37px!important
}

.pad37B {
    padding-bottom: 37px!important
}

.pad37L {
    padding-left: 37px!important
}

.pad37A {
    padding: 37px!important
}

.mrg37T {
    margin-top: 37px!important
}

.mrg37R {
    margin-right: 37px!important
}

.mrg37B {
    margin-bottom: 37px!important
}

.mrg37L {
    margin-left: 37px!important
}

.mrg37A {
    margin: 37px!important
}

.pad38T {
    padding-top: 38px!important
}

.pad38R {
    padding-right: 38px!important
}

.pad38B {
    padding-bottom: 38px!important
}

.pad38L {
    padding-left: 38px!important
}

.pad38A {
    padding: 38px!important
}

.mrg38T {
    margin-top: 38px!important
}

.mrg38R {
    margin-right: 38px!important
}

.mrg38B {
    margin-bottom: 38px!important
}

.mrg38L {
    margin-left: 38px!important
}

.mrg38A {
    margin: 38px!important
}

.pad39T {
    padding-top: 39px!important
}

.pad39R {
    padding-right: 39px!important
}

.pad39B {
    padding-bottom: 39px!important
}

.pad39L {
    padding-left: 39px!important
}

.pad39A {
    padding: 39px!important
}

.mrg39T {
    margin-top: 39px!important
}

.mrg39R {
    margin-right: 39px!important
}

.mrg39B {
    margin-bottom: 39px!important
}

.mrg39L {
    margin-left: 39px!important
}

.mrg39A {
    margin: 39px!important
}

.pad40T {
    padding-top: 40px!important
}

.pad40R {
    padding-right: 40px!important
}

.pad40B {
    padding-bottom: 40px!important
}

.pad40L {
    padding-left: 40px!important
}

.pad40A {
    padding: 40px!important
}

.mrg40T {
    margin-top: 40px!important
}

.mrg40R {
    margin-right: 40px!important
}

.mrg40B {
    margin-bottom: 40px!important
}

.mrg40L {
    margin-left: 40px!important
}

.mrg40A {
    margin: 40px!important
}

.pad41T {
    padding-top: 41px!important
}

.pad41R {
    padding-right: 41px!important
}

.pad41B {
    padding-bottom: 41px!important
}

.pad41L {
    padding-left: 41px!important
}

.pad41A {
    padding: 41px!important
}

.mrg41T {
    margin-top: 41px!important
}

.mrg41R {
    margin-right: 41px!important
}

.mrg41B {
    margin-bottom: 41px!important
}

.mrg41L {
    margin-left: 41px!important
}

.mrg41A {
    margin: 41px!important
}

.pad42T {
    padding-top: 42px!important
}

.pad42R {
    padding-right: 42px!important
}

.pad42B {
    padding-bottom: 42px!important
}

.pad42L {
    padding-left: 42px!important
}

.pad42A {
    padding: 42px!important
}

.mrg42T {
    margin-top: 42px!important
}

.mrg42R {
    margin-right: 42px!important
}

.mrg42B {
    margin-bottom: 42px!important
}

.mrg42L {
    margin-left: 42px!important
}

.mrg42A {
    margin: 42px!important
}

.pad43T {
    padding-top: 43px!important
}

.pad43R {
    padding-right: 43px!important
}

.pad43B {
    padding-bottom: 43px!important
}

.pad43L {
    padding-left: 43px!important
}

.pad43A {
    padding: 43px!important
}

.mrg43T {
    margin-top: 43px!important
}

.mrg43R {
    margin-right: 43px!important
}

.mrg43B {
    margin-bottom: 43px!important
}

.mrg43L {
    margin-left: 43px!important
}

.mrg43A {
    margin: 43px!important
}

.pad44T {
    padding-top: 44px!important
}

.pad44R {
    padding-right: 44px!important
}

.pad44B {
    padding-bottom: 44px!important
}

.pad44L {
    padding-left: 44px!important
}

.pad44A {
    padding: 44px!important
}

.mrg44T {
    margin-top: 44px!important
}

.mrg44R {
    margin-right: 44px!important
}

.mrg44B {
    margin-bottom: 44px!important
}

.mrg44L {
    margin-left: 44px!important
}

.mrg44A {
    margin: 44px!important
}

.pad45T {
    padding-top: 45px!important
}

.pad45R {
    padding-right: 45px!important
}

.pad45B {
    padding-bottom: 45px!important
}

.pad45L {
    padding-left: 45px!important
}

.pad45A {
    padding: 45px!important
}

.mrg45T {
    margin-top: 45px!important
}

.mrg45R {
    margin-right: 45px!important
}

.mrg45B {
    margin-bottom: 45px!important
}

.mrg45L {
    margin-left: 45px!important
}

.mrg45A {
    margin: 45px!important
}

.pad46T {
    padding-top: 46px!important
}

.pad46R {
    padding-right: 46px!important
}

.pad46B {
    padding-bottom: 46px!important
}

.pad46L {
    padding-left: 46px!important
}

.pad46A {
    padding: 46px!important
}

.mrg46T {
    margin-top: 46px!important
}

.mrg46R {
    margin-right: 46px!important
}

.mrg46B {
    margin-bottom: 46px!important
}

.mrg46L {
    margin-left: 46px!important
}

.mrg46A {
    margin: 46px!important
}

.pad47T {
    padding-top: 47px!important
}

.pad47R {
    padding-right: 47px!important
}

.pad47B {
    padding-bottom: 47px!important
}

.pad47L {
    padding-left: 47px!important
}

.pad47A {
    padding: 47px!important
}

.mrg47T {
    margin-top: 47px!important
}

.mrg47R {
    margin-right: 47px!important
}

.mrg47B {
    margin-bottom: 47px!important
}

.mrg47L {
    margin-left: 47px!important
}

.mrg47A {
    margin: 47px!important
}

.pad48T {
    padding-top: 48px!important
}

.pad48R {
    padding-right: 48px!important
}

.pad48B {
    padding-bottom: 48px!important
}

.pad48L {
    padding-left: 48px!important
}

.pad48A {
    padding: 48px!important
}

.mrg48T {
    margin-top: 48px!important
}

.mrg48R {
    margin-right: 48px!important
}

.mrg48B {
    margin-bottom: 48px!important
}

.mrg48L {
    margin-left: 48px!important
}

.mrg48A {
    margin: 48px!important
}

.pad49T {
    padding-top: 49px!important
}

.pad49R {
    padding-right: 49px!important
}

.pad49B {
    padding-bottom: 49px!important
}

.pad49L {
    padding-left: 49px!important
}

.pad49A {
    padding: 49px!important
}

.mrg49T {
    margin-top: 49px!important
}

.mrg49R {
    margin-right: 49px!important
}

.mrg49B {
    margin-bottom: 49px!important
}

.mrg49L {
    margin-left: 49px!important
}

.mrg49A {
    margin: 49px!important
}

.pad50T {
    padding-top: 50px!important
}

.pad50R {
    padding-right: 50px!important
}

.pad50B {
    padding-bottom: 50px!important
}

.pad50L {
    padding-left: 50px!important
}

.pad50A {
    padding: 50px!important
}

.mrg50T {
    margin-top: 50px!important
}

.mrg50R {
    margin-right: 50px!important
}

.mrg50B {
    margin-bottom: 50px!important
}

.mrg50L {
    margin-left: 50px!important
}

.mrg50A {
    margin: 50px!important
}

.pad51T {
    padding-top: 51px!important
}

.pad51R {
    padding-right: 51px!important
}

.pad51B {
    padding-bottom: 51px!important
}

.pad51L {
    padding-left: 51px!important
}

.pad51A {
    padding: 51px!important
}

.mrg51T {
    margin-top: 51px!important
}

.mrg51R {
    margin-right: 51px!important
}

.mrg51B {
    margin-bottom: 51px!important
}

.mrg51L {
    margin-left: 51px!important
}

.mrg51A {
    margin: 51px!important
}

.pad52T {
    padding-top: 52px!important
}

.pad52R {
    padding-right: 52px!important
}

.pad52B {
    padding-bottom: 52px!important
}

.pad52L {
    padding-left: 52px!important
}

.pad52A {
    padding: 52px!important
}

.mrg52T {
    margin-top: 52px!important
}

.mrg52R {
    margin-right: 52px!important
}

.mrg52B {
    margin-bottom: 52px!important
}

.mrg52L {
    margin-left: 52px!important
}

.mrg52A {
    margin: 52px!important
}

.pad53T {
    padding-top: 53px!important
}

.pad53R {
    padding-right: 53px!important
}

.pad53B {
    padding-bottom: 53px!important
}

.pad53L {
    padding-left: 53px!important
}

.pad53A {
    padding: 53px!important
}

.mrg53T {
    margin-top: 53px!important
}

.mrg53R {
    margin-right: 53px!important
}

.mrg53B {
    margin-bottom: 53px!important
}

.mrg53L {
    margin-left: 53px!important
}

.mrg53A {
    margin: 53px!important
}

.pad54T {
    padding-top: 54px!important
}

.pad54R {
    padding-right: 54px!important
}

.pad54B {
    padding-bottom: 54px!important
}

.pad54L {
    padding-left: 54px!important
}

.pad54A {
    padding: 54px!important
}

.mrg54T {
    margin-top: 54px!important
}

.mrg54R {
    margin-right: 54px!important
}

.mrg54B {
    margin-bottom: 54px!important
}

.mrg54L {
    margin-left: 54px!important
}

.mrg54A {
    margin: 54px!important
}

.pad55T {
    padding-top: 55px!important
}

.pad55R {
    padding-right: 55px!important
}

.pad55B {
    padding-bottom: 55px!important
}

.pad55L {
    padding-left: 55px!important
}

.pad55A {
    padding: 55px!important
}

.mrg55T {
    margin-top: 55px!important
}

.mrg55R {
    margin-right: 55px!important
}

.mrg55B {
    margin-bottom: 55px!important
}

.mrg55L {
    margin-left: 55px!important
}

.mrg55A {
    margin: 55px!important
}

.pad56T {
    padding-top: 56px!important
}

.pad56R {
    padding-right: 56px!important
}

.pad56B {
    padding-bottom: 56px!important
}

.pad56L {
    padding-left: 56px!important
}

.pad56A {
    padding: 56px!important
}

.mrg56T {
    margin-top: 56px!important
}

.mrg56R {
    margin-right: 56px!important
}

.mrg56B {
    margin-bottom: 56px!important
}

.mrg56L {
    margin-left: 56px!important
}

.mrg56A {
    margin: 56px!important
}

.pad57T {
    padding-top: 57px!important
}

.pad57R {
    padding-right: 57px!important
}

.pad57B {
    padding-bottom: 57px!important
}

.pad57L {
    padding-left: 57px!important
}

.pad57A {
    padding: 57px!important
}

.mrg57T {
    margin-top: 57px!important
}

.mrg57R {
    margin-right: 57px!important
}

.mrg57B {
    margin-bottom: 57px!important
}

.mrg57L {
    margin-left: 57px!important
}

.mrg57A {
    margin: 57px!important
}

.pad58T {
    padding-top: 58px!important
}

.pad58R {
    padding-right: 58px!important
}

.pad58B {
    padding-bottom: 58px!important
}

.pad58L {
    padding-left: 58px!important
}

.pad58A {
    padding: 58px!important
}

.mrg58T {
    margin-top: 58px!important
}

.mrg58R {
    margin-right: 58px!important
}

.mrg58B {
    margin-bottom: 58px!important
}

.mrg58L {
    margin-left: 58px!important
}

.mrg58A {
    margin: 58px!important
}

.pad59T {
    padding-top: 59px!important
}

.pad59R {
    padding-right: 59px!important
}

.pad59B {
    padding-bottom: 59px!important
}

.pad59L {
    padding-left: 59px!important
}

.pad59A {
    padding: 59px!important
}

.mrg59T {
    margin-top: 59px!important
}

.mrg59R {
    margin-right: 59px!important
}

.mrg59B {
    margin-bottom: 59px!important
}

.mrg59L {
    margin-left: 59px!important
}

.mrg59A {
    margin: 59px!important
}

.pad60T {
    padding-top: 60px!important
}

.pad60R {
    padding-right: 60px!important
}

.pad60B {
    padding-bottom: 60px!important
}

.pad60L {
    padding-left: 60px!important
}

.pad60A {
    padding: 60px!important
}

.mrg60T {
    margin-top: 60px!important
}

.mrg60R {
    margin-right: 60px!important
}

.mrg60B {
    margin-bottom: 60px!important
}

.mrg60L {
    margin-left: 60px!important
}

.mrg60A {
    margin: 60px!important
}

.pad61T {
    padding-top: 61px!important
}

.pad61R {
    padding-right: 61px!important
}

.pad61B {
    padding-bottom: 61px!important
}

.pad61L {
    padding-left: 61px!important
}

.pad61A {
    padding: 61px!important
}

.mrg61T {
    margin-top: 61px!important
}

.mrg61R {
    margin-right: 61px!important
}

.mrg61B {
    margin-bottom: 61px!important
}

.mrg61L {
    margin-left: 61px!important
}

.mrg61A {
    margin: 61px!important
}

.pad62T {
    padding-top: 62px!important
}

.pad62R {
    padding-right: 62px!important
}

.pad62B {
    padding-bottom: 62px!important
}

.pad62L {
    padding-left: 62px!important
}

.pad62A {
    padding: 62px!important
}

.mrg62T {
    margin-top: 62px!important
}

.mrg62R {
    margin-right: 62px!important
}

.mrg62B {
    margin-bottom: 62px!important
}

.mrg62L {
    margin-left: 62px!important
}

.mrg62A {
    margin: 62px!important
}

.pad63T {
    padding-top: 63px!important
}

.pad63R {
    padding-right: 63px!important
}

.pad63B {
    padding-bottom: 63px!important
}

.pad63L {
    padding-left: 63px!important
}

.pad63A {
    padding: 63px!important
}

.mrg63T {
    margin-top: 63px!important
}

.mrg63R {
    margin-right: 63px!important
}

.mrg63B {
    margin-bottom: 63px!important
}

.mrg63L {
    margin-left: 63px!important
}

.mrg63A {
    margin: 63px!important
}

.pad64T {
    padding-top: 64px!important
}

.pad64R {
    padding-right: 64px!important
}

.pad64B {
    padding-bottom: 64px!important
}

.pad64L {
    padding-left: 64px!important
}

.pad64A {
    padding: 64px!important
}

.mrg64T {
    margin-top: 64px!important
}

.mrg64R {
    margin-right: 64px!important
}

.mrg64B {
    margin-bottom: 64px!important
}

.mrg64L {
    margin-left: 64px!important
}

.mrg64A {
    margin: 64px!important
}

.pad65T {
    padding-top: 65px!important
}

.pad65R {
    padding-right: 65px!important
}

.pad65B {
    padding-bottom: 65px!important
}

.pad65L {
    padding-left: 65px!important
}

.pad65A {
    padding: 65px!important
}

.mrg65T {
    margin-top: 65px!important
}

.mrg65R {
    margin-right: 65px!important
}

.mrg65B {
    margin-bottom: 65px!important
}

.mrg65L {
    margin-left: 65px!important
}

.mrg65A {
    margin: 65px!important
}

.pad66T {
    padding-top: 66px!important
}

.pad66R {
    padding-right: 66px!important
}

.pad66B {
    padding-bottom: 66px!important
}

.pad66L {
    padding-left: 66px!important
}

.pad66A {
    padding: 66px!important
}

.mrg66T {
    margin-top: 66px!important
}

.mrg66R {
    margin-right: 66px!important
}

.mrg66B {
    margin-bottom: 66px!important
}

.mrg66L {
    margin-left: 66px!important
}

.mrg66A {
    margin: 66px!important
}

.pad67T {
    padding-top: 67px!important
}

.pad67R {
    padding-right: 67px!important
}

.pad67B {
    padding-bottom: 67px!important
}

.pad67L {
    padding-left: 67px!important
}

.pad67A {
    padding: 67px!important
}

.mrg67T {
    margin-top: 67px!important
}

.mrg67R {
    margin-right: 67px!important
}

.mrg67B {
    margin-bottom: 67px!important
}

.mrg67L {
    margin-left: 67px!important
}

.mrg67A {
    margin: 67px!important
}

.pad68T {
    padding-top: 68px!important
}

.pad68R {
    padding-right: 68px!important
}

.pad68B {
    padding-bottom: 68px!important
}

.pad68L {
    padding-left: 68px!important
}

.pad68A {
    padding: 68px!important
}

.mrg68T {
    margin-top: 68px!important
}

.mrg68R {
    margin-right: 68px!important
}

.mrg68B {
    margin-bottom: 68px!important
}

.mrg68L {
    margin-left: 68px!important
}

.mrg68A {
    margin: 68px!important
}

.pad69T {
    padding-top: 69px!important
}

.pad69R {
    padding-right: 69px!important
}

.pad69B {
    padding-bottom: 69px!important
}

.pad69L {
    padding-left: 69px!important
}

.pad69A {
    padding: 69px!important
}

.mrg69T {
    margin-top: 69px!important
}

.mrg69R {
    margin-right: 69px!important
}

.mrg69B {
    margin-bottom: 69px!important
}

.mrg69L {
    margin-left: 69px!important
}

.mrg69A {
    margin: 69px!important
}

.pad70T {
    padding-top: 70px!important
}

.pad70R {
    padding-right: 70px!important
}

.pad70B {
    padding-bottom: 70px!important
}

.pad70L {
    padding-left: 70px!important
}

.pad70A {
    padding: 70px!important
}

.mrg70T {
    margin-top: 70px!important
}

.mrg70R {
    margin-right: 70px!important
}

.mrg70B {
    margin-bottom: 70px!important
}

.mrg70L {
    margin-left: 70px!important
}

.mrg70A {
    margin: 70px!important
}

.pad71T {
    padding-top: 71px!important
}

.pad71R {
    padding-right: 71px!important
}

.pad71B {
    padding-bottom: 71px!important
}

.pad71L {
    padding-left: 71px!important
}

.pad71A {
    padding: 71px!important
}

.mrg71T {
    margin-top: 71px!important
}

.mrg71R {
    margin-right: 71px!important
}

.mrg71B {
    margin-bottom: 71px!important
}

.mrg71L {
    margin-left: 71px!important
}

.mrg71A {
    margin: 71px!important
}

.pad72T {
    padding-top: 72px!important
}

.pad72R {
    padding-right: 72px!important
}

.pad72B {
    padding-bottom: 72px!important
}

.pad72L {
    padding-left: 72px!important
}

.pad72A {
    padding: 72px!important
}

.mrg72T {
    margin-top: 72px!important
}

.mrg72R {
    margin-right: 72px!important
}

.mrg72B {
    margin-bottom: 72px!important
}

.mrg72L {
    margin-left: 72px!important
}

.mrg72A {
    margin: 72px!important
}

.pad73T {
    padding-top: 73px!important
}

.pad73R {
    padding-right: 73px!important
}

.pad73B {
    padding-bottom: 73px!important
}

.pad73L {
    padding-left: 73px!important
}

.pad73A {
    padding: 73px!important
}

.mrg73T {
    margin-top: 73px!important
}

.mrg73R {
    margin-right: 73px!important
}

.mrg73B {
    margin-bottom: 73px!important
}

.mrg73L {
    margin-left: 73px!important
}

.mrg73A {
    margin: 73px!important
}

.pad74T {
    padding-top: 74px!important
}

.pad74R {
    padding-right: 74px!important
}

.pad74B {
    padding-bottom: 74px!important
}

.pad74L {
    padding-left: 74px!important
}

.pad74A {
    padding: 74px!important
}

.mrg74T {
    margin-top: 74px!important
}

.mrg74R {
    margin-right: 74px!important
}

.mrg74B {
    margin-bottom: 74px!important
}

.mrg74L {
    margin-left: 74px!important
}

.mrg74A {
    margin: 74px!important
}

.pad75T {
    padding-top: 75px!important
}

.pad75R {
    padding-right: 75px!important
}

.pad75B {
    padding-bottom: 75px!important
}

.pad75L {
    padding-left: 75px!important
}

.pad75A {
    padding: 75px!important
}

.mrg75T {
    margin-top: 75px!important
}

.mrg75R {
    margin-right: 75px!important
}

.mrg75B {
    margin-bottom: 75px!important
}

.mrg75L {
    margin-left: 75px!important
}

.mrg75A {
    margin: 75px!important
}

.pad76T {
    padding-top: 76px!important
}

.pad76R {
    padding-right: 76px!important
}

.pad76B {
    padding-bottom: 76px!important
}

.pad76L {
    padding-left: 76px!important
}

.pad76A {
    padding: 76px!important
}

.mrg76T {
    margin-top: 76px!important
}

.mrg76R {
    margin-right: 76px!important
}

.mrg76B {
    margin-bottom: 76px!important
}

.mrg76L {
    margin-left: 76px!important
}

.mrg76A {
    margin: 76px!important
}

.pad77T {
    padding-top: 77px!important
}

.pad77R {
    padding-right: 77px!important
}

.pad77B {
    padding-bottom: 77px!important
}

.pad77L {
    padding-left: 77px!important
}

.pad77A {
    padding: 77px!important
}

.mrg77T {
    margin-top: 77px!important
}

.mrg77R {
    margin-right: 77px!important
}

.mrg77B {
    margin-bottom: 77px!important
}

.mrg77L {
    margin-left: 77px!important
}

.mrg77A {
    margin: 77px!important
}

.pad78T {
    padding-top: 78px!important
}

.pad78R {
    padding-right: 78px!important
}

.pad78B {
    padding-bottom: 78px!important
}

.pad78L {
    padding-left: 78px!important
}

.pad78A {
    padding: 78px!important
}

.mrg78T {
    margin-top: 78px!important
}

.mrg78R {
    margin-right: 78px!important
}

.mrg78B {
    margin-bottom: 78px!important
}

.mrg78L {
    margin-left: 78px!important
}

.mrg78A {
    margin: 78px!important
}

.pad79T {
    padding-top: 79px!important
}

.pad79R {
    padding-right: 79px!important
}

.pad79B {
    padding-bottom: 79px!important
}

.pad79L {
    padding-left: 79px!important
}

.pad79A {
    padding: 79px!important
}

.mrg79T {
    margin-top: 79px!important
}

.mrg79R {
    margin-right: 79px!important
}

.mrg79B {
    margin-bottom: 79px!important
}

.mrg79L {
    margin-left: 79px!important
}

.mrg79A {
    margin: 79px!important
}

.pad80T {
    padding-top: 80px!important
}

.pad80R {
    padding-right: 80px!important
}

.pad80B {
    padding-bottom: 80px!important
}

.pad80L {
    padding-left: 80px!important
}

.pad80A {
    padding: 80px!important
}

.mrg80T {
    margin-top: 80px!important
}

.mrg80R {
    margin-right: 80px!important
}

.mrg80B {
    margin-bottom: 80px!important
}

.mrg80L {
    margin-left: 80px!important
}

.mrg80A {
    margin: 80px!important
}

.pad81T {
    padding-top: 81px!important
}

.pad81R {
    padding-right: 81px!important
}

.pad81B {
    padding-bottom: 81px!important
}

.pad81L {
    padding-left: 81px!important
}

.pad81A {
    padding: 81px!important
}

.mrg81T {
    margin-top: 81px!important
}

.mrg81R {
    margin-right: 81px!important
}

.mrg81B {
    margin-bottom: 81px!important
}

.mrg81L {
    margin-left: 81px!important
}

.mrg81A {
    margin: 81px!important
}

.pad82T {
    padding-top: 82px!important
}

.pad82R {
    padding-right: 82px!important
}

.pad82B {
    padding-bottom: 82px!important
}

.pad82L {
    padding-left: 82px!important
}

.pad82A {
    padding: 82px!important
}

.mrg82T {
    margin-top: 82px!important
}

.mrg82R {
    margin-right: 82px!important
}

.mrg82B {
    margin-bottom: 82px!important
}

.mrg82L {
    margin-left: 82px!important
}

.mrg82A {
    margin: 82px!important
}

.pad83T {
    padding-top: 83px!important
}

.pad83R {
    padding-right: 83px!important
}

.pad83B {
    padding-bottom: 83px!important
}

.pad83L {
    padding-left: 83px!important
}

.pad83A {
    padding: 83px!important
}

.mrg83T {
    margin-top: 83px!important
}

.mrg83R {
    margin-right: 83px!important
}

.mrg83B {
    margin-bottom: 83px!important
}

.mrg83L {
    margin-left: 83px!important
}

.mrg83A {
    margin: 83px!important
}

.pad84T {
    padding-top: 84px!important
}

.pad84R {
    padding-right: 84px!important
}

.pad84B {
    padding-bottom: 84px!important
}

.pad84L {
    padding-left: 84px!important
}

.pad84A {
    padding: 84px!important
}

.mrg84T {
    margin-top: 84px!important
}

.mrg84R {
    margin-right: 84px!important
}

.mrg84B {
    margin-bottom: 84px!important
}

.mrg84L {
    margin-left: 84px!important
}

.mrg84A {
    margin: 84px!important
}

.pad85T {
    padding-top: 85px!important
}

.pad85R {
    padding-right: 85px!important
}

.pad85B {
    padding-bottom: 85px!important
}

.pad85L {
    padding-left: 85px!important
}

.pad85A {
    padding: 85px!important
}

.mrg85T {
    margin-top: 85px!important
}

.mrg85R {
    margin-right: 85px!important
}

.mrg85B {
    margin-bottom: 85px!important
}

.mrg85L {
    margin-left: 85px!important
}

.mrg85A {
    margin: 85px!important
}

.pad86T {
    padding-top: 86px!important
}

.pad86R {
    padding-right: 86px!important
}

.pad86B {
    padding-bottom: 86px!important
}

.pad86L {
    padding-left: 86px!important
}

.pad86A {
    padding: 86px!important
}

.mrg86T {
    margin-top: 86px!important
}

.mrg86R {
    margin-right: 86px!important
}

.mrg86B {
    margin-bottom: 86px!important
}

.mrg86L {
    margin-left: 86px!important
}

.mrg86A {
    margin: 86px!important
}

.pad87T {
    padding-top: 87px!important
}

.pad87R {
    padding-right: 87px!important
}

.pad87B {
    padding-bottom: 87px!important
}

.pad87L {
    padding-left: 87px!important
}

.pad87A {
    padding: 87px!important
}

.mrg87T {
    margin-top: 87px!important
}

.mrg87R {
    margin-right: 87px!important
}

.mrg87B {
    margin-bottom: 87px!important
}

.mrg87L {
    margin-left: 87px!important
}

.mrg87A {
    margin: 87px!important
}

.pad88T {
    padding-top: 88px!important
}

.pad88R {
    padding-right: 88px!important
}

.pad88B {
    padding-bottom: 88px!important
}

.pad88L {
    padding-left: 88px!important
}

.pad88A {
    padding: 88px!important
}

.mrg88T {
    margin-top: 88px!important
}

.mrg88R {
    margin-right: 88px!important
}

.mrg88B {
    margin-bottom: 88px!important
}

.mrg88L {
    margin-left: 88px!important
}

.mrg88A {
    margin: 88px!important
}

.pad89T {
    padding-top: 89px!important
}

.pad89R {
    padding-right: 89px!important
}

.pad89B {
    padding-bottom: 89px!important
}

.pad89L {
    padding-left: 89px!important
}

.pad89A {
    padding: 89px!important
}

.mrg89T {
    margin-top: 89px!important
}

.mrg89R {
    margin-right: 89px!important
}

.mrg89B {
    margin-bottom: 89px!important
}

.mrg89L {
    margin-left: 89px!important
}

.mrg89A {
    margin: 89px!important
}

.pad90T {
    padding-top: 90px!important
}

.pad90R {
    padding-right: 90px!important
}

.pad90B {
    padding-bottom: 90px!important
}

.pad90L {
    padding-left: 90px!important
}

.pad90A {
    padding: 90px!important
}

.mrg90T {
    margin-top: 90px!important
}

.mrg90R {
    margin-right: 90px!important
}

.mrg90B {
    margin-bottom: 90px!important
}

.mrg90L {
    margin-left: 90px!important
}

.mrg90A {
    margin: 90px!important
}

.pad91T {
    padding-top: 91px!important
}

.pad91R {
    padding-right: 91px!important
}

.pad91B {
    padding-bottom: 91px!important
}

.pad91L {
    padding-left: 91px!important
}

.pad91A {
    padding: 91px!important
}

.mrg91T {
    margin-top: 91px!important
}

.mrg91R {
    margin-right: 91px!important
}

.mrg91B {
    margin-bottom: 91px!important
}

.mrg91L {
    margin-left: 91px!important
}

.mrg91A {
    margin: 91px!important
}

.pad92T {
    padding-top: 92px!important
}

.pad92R {
    padding-right: 92px!important
}

.pad92B {
    padding-bottom: 92px!important
}

.pad92L {
    padding-left: 92px!important
}

.pad92A {
    padding: 92px!important
}

.mrg92T {
    margin-top: 92px!important
}

.mrg92R {
    margin-right: 92px!important
}

.mrg92B {
    margin-bottom: 92px!important
}

.mrg92L {
    margin-left: 92px!important
}

.mrg92A {
    margin: 92px!important
}

.pad93T {
    padding-top: 93px!important
}

.pad93R {
    padding-right: 93px!important
}

.pad93B {
    padding-bottom: 93px!important
}

.pad93L {
    padding-left: 93px!important
}

.pad93A {
    padding: 93px!important
}

.mrg93T {
    margin-top: 93px!important
}

.mrg93R {
    margin-right: 93px!important
}

.mrg93B {
    margin-bottom: 93px!important
}

.mrg93L {
    margin-left: 93px!important
}

.mrg93A {
    margin: 93px!important
}

.pad94T {
    padding-top: 94px!important
}

.pad94R {
    padding-right: 94px!important
}

.pad94B {
    padding-bottom: 94px!important
}

.pad94L {
    padding-left: 94px!important
}

.pad94A {
    padding: 94px!important
}

.mrg94T {
    margin-top: 94px!important
}

.mrg94R {
    margin-right: 94px!important
}

.mrg94B {
    margin-bottom: 94px!important
}

.mrg94L {
    margin-left: 94px!important
}

.mrg94A {
    margin: 94px!important
}

.pad95T {
    padding-top: 95px!important
}

.pad95R {
    padding-right: 95px!important
}

.pad95B {
    padding-bottom: 95px!important
}

.pad95L {
    padding-left: 95px!important
}

.pad95A {
    padding: 95px!important
}

.mrg95T {
    margin-top: 95px!important
}

.mrg95R {
    margin-right: 95px!important
}

.mrg95B {
    margin-bottom: 95px!important
}

.mrg95L {
    margin-left: 95px!important
}

.mrg95A {
    margin: 95px!important
}

.pad96T {
    padding-top: 96px!important
}

.pad96R {
    padding-right: 96px!important
}

.pad96B {
    padding-bottom: 96px!important
}

.pad96L {
    padding-left: 96px!important
}

.pad96A {
    padding: 96px!important
}

.mrg96T {
    margin-top: 96px!important
}

.mrg96R {
    margin-right: 96px!important
}

.mrg96B {
    margin-bottom: 96px!important
}

.mrg96L {
    margin-left: 96px!important
}

.mrg96A {
    margin: 96px!important
}

.pad97T {
    padding-top: 97px!important
}

.pad97R {
    padding-right: 97px!important
}

.pad97B {
    padding-bottom: 97px!important
}

.pad97L {
    padding-left: 97px!important
}

.pad97A {
    padding: 97px!important
}

.mrg97T {
    margin-top: 97px!important
}

.mrg97R {
    margin-right: 97px!important
}

.mrg97B {
    margin-bottom: 97px!important
}

.mrg97L {
    margin-left: 97px!important
}

.mrg97A {
    margin: 97px!important
}

.pad98T {
    padding-top: 98px!important
}

.pad98R {
    padding-right: 98px!important
}

.pad98B {
    padding-bottom: 98px!important
}

.pad98L {
    padding-left: 98px!important
}

.pad98A {
    padding: 98px!important
}

.mrg98T {
    margin-top: 98px!important
}

.mrg98R {
    margin-right: 98px!important
}

.mrg98B {
    margin-bottom: 98px!important
}

.mrg98L {
    margin-left: 98px!important
}

.mrg98A {
    margin: 98px!important
}

.pad99T {
    padding-top: 99px!important
}

.pad99R {
    padding-right: 99px!important
}

.pad99B {
    padding-bottom: 99px!important
}

.pad99L {
    padding-left: 99px!important
}

.pad99A {
    padding: 99px!important
}

.mrg99T {
    margin-top: 99px!important
}

.mrg99R {
    margin-right: 99px!important
}

.mrg99B {
    margin-bottom: 99px!important
}

.mrg99L {
    margin-left: 99px!important
}

.mrg99A {
    margin: 99px!important
}

.pad100T {
    padding-top: 100px!important
}

.pad100R {
    padding-right: 100px!important
}

.pad100B {
    padding-bottom: 100px!important
}

.pad100L {
    padding-left: 100px!important
}

.pad100A {
    padding: 100px!important
}

.mrg100T {
    margin-top: 100px!important
}

.mrg100R {
    margin-right: 100px!important
}

.mrg100B {
    margin-bottom: 100px!important
}

.mrg100L {
    margin-left: 100px!important
}

.mrg100A {
    margin: 100px!important
}

.mrg0L {
    margin-left: 0!important
}

.content-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 2
}

.flex-center {
    display: flex;
    align-items: center;
    justify-content: center
}

.text-center {
    text-align: center
}

.text-right {
    text-align: right
}

.text-left {
    text-align: left
}

.text-transform-none {
    text-transform: none
}

.text-transform-upr {
    text-transform: uppercase
}

.text-transform-low {
    text-transform: lowercase
}

.text-transform-cap {
    text-transform: capitalize
}

.transparent {
    opacity: 0
}

.flex-container-column,.flex-column {
    display: flex;
    flex-direction: column
}

.flex-container-row,.flex-row {
    display: flex;
    flex-direction: row
}

.flex-align-center {
    align-items: center;
    justify-content: center
}

.justify-content-center {
    justify-content: center
}

.justify-content-start {
    justify-content: flex-start
}

.justify-content-end {
    justify-content: flex-end
}

.align-items-left {
    align-items: flex-start
}

.align-items-center {
    align-items: center
}

.align-items-right {
    align-items: flex-end
}

.flex-row-space-arround {
    align-content: center;
    justify-content: space-around
}

.scroll-y {
    overflow-x: hidden;
    overflow-y: auto
}

.overflow-hidden {
    overflow: hidden
}

.hidden {
    visibility: hidden
}

.h100 {
    height: 100%
}

.z50 {
    z-index: 50
}

.z100 {
    z-index: 100
}

.z200 {
    z-index: 200
}

.pointer {
    cursor: pointer
}

.grab {
    cursor: grab
}

.grabbing:active {
    cursor: grabbing
}

.full-size {
    width: 100%;
    height: 100%
}

.full-width {
    width: 100%
}

.flex-grow-0 {
    flex-grow: 0
}

.flex-grow-1 {
    flex-grow: 1
}

.flex-shrink-0 {
    flex-shrink: 0
}

.flex-shrink-1 {
    flex-shrink: 1
}

.flex-elastic {
    flex-shrink: 1;
    flex-grow: 1
}

.flex-rigid {
    flex-shrink: 0;
    flex-grow: 0
}

.flex-wrap {
    flex-wrap: wrap
}

.full-opacity {
    opacity: 1
}

.justify-self-start {
    justify-self: flex-start
}

.justify-self-end {
    justify-self: flex-end
}

.align-self-center {
    align-self: center
}

.align-self-start {
    align-self: flex-start
}

.align-self-end {
    align-self: flex-end
}

.mrg-left-auto {
    margin-left: auto
}

.mrg-right-auto {
    margin-right: auto
}

.div-square:before {
    padding-top: 100%;
    content: "";
    display: block
}

.div-square {
    width: 100%;
    height: auto
}

.position-relative {
    position: relative
}

.no-break-with-ellipses {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden
}

@media screen and (max-width: 40rem) {
    .mobile-hidden {
        visibility:hidden
    }
}

.border-bottom-tick {
    border-bottom: 2px solid #e9e9e9
}

.border-top-tick {
    border-top: 2px solid #e9e9e9
}

.border-left-tick {
    border-left: 2px solid #e9e9e9
}

.border-right-tick {
    border-right: 2px solid #e9e9e9
}

.border-bottom-light {
    border-bottom: 1px solid #e9e9e9
}

.border-right-light {
    border-right: 1px solid #e9e9e9
}

.border-top-light {
    border-top: 1px solid #e9e9e9
}

.border-left-light {
    border-left: 1px solid #e9e9e9
}

.no-border {
    border: none!important
}

.font-light {
    font-weight: 300
}

.font-regular,.mat-menu-min-width {
    font-weight: 400
}

.font-medium,.grid-status-base {
    font-weight: 500
}

.font-semi-bold,.btn,.h4,.h5,.h6 {
    font-weight: 600
}

.font-bold {
    font-weight: 700
}

.font-italic {
    font-style: italic
}

.s44 {
    font-size: 44px
}

.s40 {
    font-size: 40px
}

.s36 {
    font-size: 36px
}

.p1,.s32 {
    font-size: 32px
}

.t4,.s24 {
    font-size: 24px
}

.t4,.s20,.h4 {
    font-size: 20px
}

.s18 {
    font-size: 18px
}

.t5,.p2,.s16,.h5 {
    font-size: 16px
}

.t6,.p3,.s14,.function-btn,.btn,.h6 {
    font-size: 14px
}

.t7,.p4,.s12,.grid-status-base,.grid-function-btn {
    font-size: 12px
}

.p5,.mat-menu-min-width,.s10 {
    font-size: 10px
}

.s8 {
    font-size: 8px
}

.s6 {
    font-size: 6px
}

.s4 {
    font-size: 4px
}

.text-nowrap {
    white-space: nowrap
}

.line-1 {
    line-height: 1
}

.white-space-initial {
    white-space: initial
}

.editor-bold {
    font-weight: 600
}

.editor-italic {
    font-style: italic
}

.editor-underline {
    text-decoration: underline
}

.mat-menu-min-width {
    min-width: 230px
}

.btn {
    border-radius: 8px;
    padding: 12px 18px;
    box-shadow: none;
    cursor: pointer;
    outline: none;
    border: none;
    margin: 2px;
    transition: filter .2s ease-in-out
}

@media screen and (max-width: 40rem) {
    .btn {
        font-size:120%
    }
}

.btn-square-slim {
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
    padding: 8px;
    margin: 0
}

@media screen and (max-width: 40rem) {
    .btn-square-slim {
        font-size:110%
    }
}

.btn-slim {
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
    padding: 8px;
    margin: 0
}

@media screen and (max-width: 40rem) {
    .btn-slim {
        font-size:110%
    }
}

.btn-product-card {
    width: 43px;
    height: 43px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    padding: 8px;
    margin: 0
}

@media screen and (max-width: 40rem) {
    .btn-product-card {
        font-size:110%
    }
}

.btn-super-slim {
    font-size: 7px;
    padding: 6px 9px;
    margin: 0
}

@media screen and (max-width: 40rem) {
    .btn-super-slim {
        font-size:110%
    }
}

.btn:hover:not(:disabled) {
    filter: brightness(110%)
}

.btn-darker-hover:hover:not(:disabled) {
    filter: brightness(95%)
}

.btn:focus:not(:disabled),.grid-function-btn:focus:not(:disabled) {
    outline: 2px dashed var(--primary-color)
}

.btn:disabled {
    cursor: default;
    color: #8e8e8e!important;
    background-color: #e9e9e9!important
}

.grid-function-btn:hover:not(:disabled) {
    background-color: #e9e9e9
}

.grid-function-btn {
    border-radius: 4px;
    width: 32px;
    height: 32px;
    padding: 8px;
    box-shadow: none;
    cursor: pointer;
    outline: none;
    border: 1px solid #d2d2d2;
    display: flex;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    margin: 2px;
    transition: background-color .2s ease-in-out
}

@media screen and (max-width: 40rem) {
    .grid-function-btn {
        font-size:120%
    }
}

.grid-function-btn-selected {
    background-color: #06c270;
    color: #fff
}

.grid-function-btn-selected:hover:not(:disabled) {
    background-color: #00752b;
    color: #fff
}

.function-btn:hover:not(:disabled) {
    background-color: #e9e9e9
}

.function-btn {
    border-radius: 4px;
    width: 32px;
    height: 32px;
    box-shadow: none;
    cursor: pointer;
    outline: none;
    border: 0px;
    display: flex;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    margin: 2px;
    transition: background-color .2s ease-in-out
}

@media screen and (max-width: 40rem) {
    .function-btn {
        font-size:120%
    }
}

.btn-primary {
    background-color: var(--primary-color)!important;
    color: var(--primary-fg-color)!important
}

.btn-accent,.btn-secondary {
    background-color: var(--primary-bg-color)!important;
    color: var(--primary-color)!important
}

.btn-info {
    background-color: #29bdff!important;
    color: #fff
}

.btn-blue-darken-1 {
    background-color: #1458ea!important;
    color: #fff
}

.btn-blue-lighten-1 {
    background-color: #bfe2ff!important;
    color: #fff
}

.btn-blue-lighten-2 {
    background-color: #edf7ff!important;
    color: #1e1e1e
}

.btn-danger {
    background-color: #ff3b3b!important;
    color: #fff
}

.btn-red-darken-1 {
    background-color: #8b0007!important;
    color: #fff
}

.btn-red-lighten-1 {
    background-color: #ff9399!important;
    color: #fff
}

.btn-red-lighten-2 {
    background-color: #fff1f0!important;
    color: #1e1e1e
}

.btn-success {
    background-color: #06c270!important;
    color: #fff
}

.btn-green-lighten-1 {
    background-color: #73feba!important;
    color: #fff
}

.btn-green-lighten-2 {
    background-color: #dcffee!important;
    color: #1e1e1e
}

.btn-green-darken-1 {
    background-color: #00752b!important;
    color: #fff
}

.btn-alert {
    background-color: #ffce3a!important;
    color: #fff
}

.btn-yellow-lighten-1 {
    background-color: #ffe79f!important;
    color: #fff
}

.btn-yellow-lighten-2 {
    background-color: #fff9e6!important;
    color: #1e1e1e
}

.btn-yellow-darken-1 {
    background-color: #ce9b00!important;
    color: #fff
}

.btn-warning {
    background-color: #ff784b!important;
    color: #fff
}

.btn-orange-lighten-1 {
    background-color: #ffa486!important;
    color: #fff
}

.btn-orange-lighten-2 {
    background-color: #fff2e3!important;
    color: #1e1e1e
}

.btn-orange-darken-1 {
    background-color: #c63100!important;
    color: #fff
}

.btn-transparent {
    background-color: transparent!important
}

.btn-black-lighten-1 {
    background-color: #565656!important;
    color: #fff
}

.btn-black-lighten-2 {
    background-color: #8e8e8e!important;
    color: #fff
}

.btn-black-lighten-3 {
    background-color: #d2d2d2!important;
    color: #1e1e1e
}

.btn-black-lighten-4 {
    background-color: #e9e9e9!important;
    color: #1e1e1e
}

.btn-black-lighten-5 {
    background-color: #f5f5f5!important;
    color: #1e1e1e
}

.grid-badge {
    font-size: 1rem
}

.grid-area-line {
    grid-area: line
}

.msg-link {
    color: #29bdff;
    cursor: pointer
}

.card {
    border-radius: 8px;
    border: none;
    background-color: #fff;
    padding: 12px
}

.card-border {
    border: 1px solid #f5f5f5
}

.card-img {
    max-width: 100%;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px
}

.done-task {
    background-color: #dcffee!important
}

.grid-function-btn-area {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end
}

.color-option {
    min-width: 120px;
    padding: 10px 16px;
    border-radius: 4px;
    font-weight: 600;
    border: 1px solid #fff
}

.connector-preview {
    color: #555;
    cursor: grabbing
}

.connector-preview:hover,.connector-preview:active {
    cursor: grabbing
}

.default-buttons-area {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-shrink: 0;
    flex-grow: 0
}

.grid-status-base {
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px
}

.number-without-arrows::-webkit-outer-spin-button,.number-without-arrows::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0
}

.number-without-arrows[type=number] {
    -moz-appearance: textfield
}

.grid-base-color {
    background-color: #e9e9e9;
    color: #1e1e1e
}

.grid-status-red-lighten-1 {
    background-color: #ff9399
}

.grid-status-green-lighten-1 {
    background-color: #73feba
}

.grid-status-blue-lighten-1 {
    background-color: #bfe2ff
}

.grid-status-yellow-lighten-1 {
    background-color: #ffe79f
}

.dialog-base,.dialog-xx-large,.dialog-remote-support,.dialog-x-large,.dialog-large,.dialog-medium,.dialog-small-plus,.dialog-small {
    display: flex;
    flex-direction: column;
    max-height: 80vh;
    overflow: hidden
}

.dialog-base-max-h {
    height: 80vh
}

.dialog-content {
    padding: 16px;
    width: 100%;
    flex-grow: 1;
    flex-shrink: 1;
    overflow: hidden
}

.dialog-buttons {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    background-color: #f5f5f5;
    padding: 8px 16px
}

.dialog-small {
    width: 40vw
}

@media screen and (max-width: 40rem) {
    .dialog-small {
        width:90vw
    }
}

.dialog-small-plus {
    width: 50vw
}

@media screen and (max-width: 40rem) {
    .dialog-small-plus {
        width:90vw
    }
}

.dialog-medium {
    width: 60vw
}

@media screen and (max-width: 40rem) {
    .dialog-medium {
        width:90vw
    }
}

.dialog-large {
    width: 80vw
}

@media screen and (max-width: 40rem) {
    .dialog-large {
        width:90vw
    }
}

.dialog-x-large {
    width: 90vw;
    max-height: 90vh;
    height: 90vh
}

.dialog-x-large .video-portrait-container,.dialog-x-large .video-landscape-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: #000
}

.dialog-x-large .video-player {
    background-color: #000;
    border-radius: 4px
}

.dialog-x-large .video-player.video-portrait {
    max-height: 80vh;
    max-width: 100%;
    width: auto;
    height: auto
}

.dialog-x-large .video-player.video-landscape {
    max-width: 100%;
    max-height: 80vh;
    width: auto;
    height: auto
}

.dialog-remote-support {
    width: 94vw;
    max-height: 94vh;
    height: 94vh
}

.dialog-xx-large {
    width: 98vw;
    max-height: 88vh;
    height: 88vh
}

.tag-base {
    border-radius: 4px;
    padding: 4px 8px
}

.overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: #0a0a0a4d;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff
}

.sq-badge {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px
}

.table-base {
    border-spacing: 0;
    table-layout: fixed
}

.table-base>thead td {
    padding: 4px 12px;
    color: #565656
}

.table-base>tbody td {
    border-bottom: 1px solid #f5f5f5;
    padding: 4px 8px
}

.markerBox {
    background-color: #e9e9e9;
    width: 224px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    overflow: hidden;
    padding: 6px 12px
}

.simple-notification .sn-title {
    font-size: 18px!important;
    font-weight: 700
}

.simple-notification .sn-content {
    font-size: 14px!important;
    font-weight: 400
}

.label {
    font-size: 8px;
    font-weight: 400;
    padding: 2px 6px;
    border-radius: 4px
}

.label-big {
    font-size: 10px;
    font-weight: 500;
    padding: 4px 10px;
    border-radius: 6px
}

.label-bigger {
    font-size: 12px;
    font-weight: 500;
    padding: 6px 12px;
    border-radius: 8px
}

.notification-danger {
    background-color: #fff1f0;
    color: #ff3b3b
}

.notification-warning {
    background-color: #fff2e3;
    color: #ff784b
}

.notification-info {
    background-color: #edf7ff;
    color: #29bdff
}

.notification-success {
    background-color: #dcffee;
    color: #06c270
}

.breadcrumb {
    overflow: hidden;
    color: #0976a1;
    padding: 8px 18px;
    position: relative;
    display: flex;
    z-index: 99;
    font-weight: 500;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    flex-grow: 1
}

.breadcrumb-small {
    overflow: hidden;
    color: #0976a1;
    padding: 4px 8px;
    display: flex;
    z-index: 99;
    font-size: 8px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    flex-grow: 1
}

.breadcrumb-first {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px
}

.breadcrumb-last {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px
}

.breadcrumb-selected {
    color: #fff!important
}

.breadcrumb-future {
    background: #f5f5f5!important;
    color: #565656!important;
    border: none!important
}

.clients-list {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    border-right: 1px solid #f5f5f5
}

.search-div {
    width: 100%;
    display: flex;
    border-top-left-radius: 8px;
    padding: 6px;
    flex-grow: 0;
    flex-shrink: 0;
    align-items: center;
    border-bottom: 1px solid #f5f5f5
}

.chat-grid {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 280px auto;
    border-radius: 8px;
    background-color: #fff;
    overflow: hidden
}

.chat-grid-mobile {
    display: flex;
    grid-template-columns: none
}

.chat-search:focus {
    outline: none
}

.chat-search::placeholder {
    font-weight: 400
}

.chats-list {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 1;
    overflow-y: auto
}

.search-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    margin-left: 4px;
    margin-right: 8px
}

.chat-search {
    width: 100%;
    height: 100%;
    border: none;
    resize: none;
    white-space: nowrap;
    line-height: 1;
    font-size: 12px;
    font-weight: 400
}

.chat-header {
    height: 60px;
    background-color: #fff;
    border-bottom: 1px solid #f5f5f5;
    flex-shrink: 0;
    flex-grow: 0;
    display: flex;
    padding: 4px;
    align-items: center
}

.chat-header-button {
    flex-shrink: 0;
    font-size: 16px;
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 4px;
    margin-left: 8px;
    cursor: pointer;
    line-height: 1;
    overflow: hidden;
    color: #565656
}

.chat-header-button-danger {
    color: #ff3b3b
}

.chat-header-button-black-light,.chat-header-button-disabled {
    color: #e9e9e9
}

.contact-display {
    padding: 6px;
    display: flex;
    cursor: pointer;
    margin-left: 2px;
    margin-right: 6px;
    flex-grow: 1;
    flex-shrink: 1;
    align-items: center;
    height: 100%;
    border-radius: 4px
}

.contact-display:hover:not(.contact-disabled) {
    background-color: #f5f5f5
}

.chat-header-button:hover:not(.chat-header-button-disabled) {
    background-color: #f5f5f5
}

.wa-bg {
    background-color: #06c270;
    color: #fff
}

.tg-bg {
    background-color: #1458ea;
    color: #fff
}

.fb-bg {
    background-color: #4267b2;
    color: #fff
}

.em-bg {
    background-color: #25615f;
    color: #fff
}

.ol-bg {
    background-color: #9400d3;
    color: #fff
}

.ml-bg {
    background-color: #ffce3a;
    color: #fff
}

.gb-bg {
    background-color: #29bdff;
    color: #fff
}

.sg-bg {
    background-color: #1458ea;
    color: #fff
}

.ig-bg {
    background-color: #e9e9e9;
    color: #1e1e1e
}

.bg-transparent {
    background-color: transparent
}

.bg-green,.bg-success {
    background-color: #06c270;
    color: #fff;
    --mdc-snackbar-container-color: #06c270FF !important;
    --mdc-snackbar-supporting-text-color: #FFFFFFFF !important
}

.bg-green .mat-simple-snackbar-action button,.bg-success .mat-simple-snackbar-action button {
    background-color: #fff
}

.bg-pink-lighten-1,.badge-pink-lighten-1,.bg-pink-lighten-2,.badge-pink-lighten-2 {
    background-color: #ffedf3;
    color: #fff
}

.bg-purple,.badge-purple {
    background-color: #9400d3;
    color: #fff
}

.bg-purple-lighten-1,.badge-purple-lighten-1 {
    background-color: #d9bfff;
    color: #fff
}

.bg-purple-lighten-2,.badge-purple-lighten-2 {
    background-color: #f8f0ff;
    color: #fff
}

.bg-green-lighten-1,.badge-green-lighten-1 {
    background-color: #73feba;
    color: #fff
}

.bg-green-darken-1,.badge-green-darken-1 {
    background-color: #00752b;
    color: #fff
}

.bg-green-lighten-2,.badge-green-lighten-2 {
    background-color: #dcffee;
    color: #1e1e1e
}

.bg-blue,.bg-info {
    background-color: #29bdff;
    color: #fff;
    --mdc-snackbar-container-color: #29bdffFF !important;
    --mdc-snackbar-supporting-text-color: #FFFFFFFF !important
}

.bg-blue .mat-simple-snackbar-action button,.bg-info .mat-simple-snackbar-action button {
    background-color: #fff
}

.bg-call {
    --mdc-snackbar-container-color: #29BDFFFF !important;
    --mdc-snackbar-supporting-text-color: #FFFFFFFF !important;
    --mat-mdc-snack-bar-button-color: #FFFFFFFF !important;
    color: #fff
}

.bg-call .mdc-button {
    background: #06c270
}

.bg-blue-lighten-1 {
    background-color: #bfe2ff;
    color: #fff
}

.bg-blue {
    background-color: #29bdff;
    color: #fff
}

.bg-blue-darken-1 {
    background-color: #1458ea;
    color: #fff
}

.bg-blue-lighten-2 {
    background-color: #edf7ff;
    color: #1e1e1e
}

.bg-black-lighten-1 {
    background-color: #565656;
    color: #fff
}

.bg-black-lighten-2 {
    background-color: #8e8e8e;
    color: #fff
}

.bg-black-lighten-3 {
    background-color: #d2d2d2;
    color: #1e1e1e
}

.bg-black-lighten-4 {
    background-color: #e9e9e9;
    color: #1e1e1e
}

.bg-black-lighten-5 {
    background-color: #f5f5f5;
    color: #1e1e1e
}

.bg-white {
    background-color: #fff;
    color: #1e1e1e
}

.bg-alert,.bg-yellow {
    background-color: #ffce3a;
    color: #fff;
    --mdc-snackbar-container-color: #FFCE3AFF !important;
    --mdc-snackbar-supporting-text-color: #FFFFFFFF !important
}

.bg-alert .mat-simple-snackbar-action button,.bg-yellow .mat-simple-snackbar-action button {
    background-color: #fff
}

.bg-yellow-lighten-1,.badge-yellow-lighten-1 {
    background-color: #ffe79f;
    color: #fff
}

.bg-yellow-lighten-2,.badge-yellow-lighten-2 {
    background-color: #fff9e6;
    color: #1e1e1e
}

.bg-danger,.bg-red {
    background-color: #ff3b3b;
    color: #fff;
    --mdc-snackbar-container-color: #FF3B3BFF !important;
    --mdc-snackbar-supporting-text-color: #FFFFFFFF !important
}

.bg-danger .mat-simple-snackbar-action button,.bg-red .mat-simple-snackbar-action button {
    background-color: #fff
}

.bg-red-darken-1,.badge-red-darken-1 {
    background-color: #8b0007;
    color: #fff
}

.bg-red-lighten-1,.badge-red-lighten-1 {
    background-color: #ff9399;
    color: #fff
}

.bg-red-lighten-2,.badge-red-lighten-2 {
    background-color: #fff1f0;
    color: #1e1e1e
}

.bg-warning,.bg-orange {
    background-color: #ff784b;
    color: #fff;
    --mdc-snackbar-container-color: #FF784BFF !important;
    --mdc-snackbar-supporting-text-color: #FFFFFFFF !important
}

.bg-warning .mat-simple-snackbar-action button,.bg-orange .mat-simple-snackbar-action button {
    background-color: #fff
}

.bg-orange-lighten-1,.badge-orange-lighten-1 {
    background-color: #ffa486;
    color: #fff
}

.bg-orange-lighten-2,.badge-orange-lighten-2 {
    background-color: #fff2e3;
    color: #1e1e1e
}

.bg-wa {
    background-color: #06c270;
    color: #fff
}

.bg-fb {
    background-color: #4267b2;
    color: #fff
}

.bg-ig {
    background-color: #e9e9e9
}

.bg-tg,.bg-sg {
    background-color: #1458ea;
    color: #fff
}

.bg-ol {
    background-color: #9400d3;
    color: #fff
}

.bg-ml {
    background-color: #ffce3a;
    color: #fff
}

.bg-gb {
    background-color: #29bdff;
    color: #fff
}

.bg-em {
    background-color: #25615f;
    color: #fff
}

.label-warning {
    background-color: #fff2e3;
    color: #ff784b
}

.label-danger {
    background-color: #fff1f0;
    color: #ff3b3b
}

.label-alert {
    background-color: #fff9e6;
    color: #ffce3a
}

.label-success {
    background-color: #dcffee;
    color: #06c270
}

.label-info {
    background-color: #edf7ff;
    color: #29bdff
}

.label-default {
    background-color: #f5f5f5;
    color: #1e1e1e
}

.label-black-lighten-3 {
    background-color: #d2d2d2;
    color: #1e1e1e
}

.label-primary,.bg-we,.bg-custom-color {
    background-color: var(--primary-bg-color);
    color: var(--primary-color)
}

.bg-primary-color {
    background-color: var(--primary-color);
    color: var(--primary-fg-color)
}

.outline-green,.outline-success {
    outline-color: #06c270!important
}

.outline-pink-lighten-1,.outline-pink-lighten-2 {
    outline-color: #ffedf3!important
}

.outline-purple {
    outline-color: #9400d3!important
}

.outline-purple-lighten-1 {
    outline-color: #d9bfff!important
}

.outline-purple-lighten-2 {
    outline-color: #f8f0ff!important
}

.outline-green-lighten-1 {
    outline-color: #73feba!important
}

.outline-green-lighten-2 {
    outline-color: #dcffee!important
}

.outline-blue,.outline-info {
    outline-color: #29bdff!important
}

.outline-blue-lighten-1 {
    outline-color: #bfe2ff!important
}

.outline-blue-lighten-2 {
    outline-color: #edf7ff!important
}

.outline-black-lighten-1 {
    outline-color: #565656!important
}

.outline-black-lighten-2 {
    outline-color: #8e8e8e!important
}

.outline-black-lighten-3 {
    outline-color: #d2d2d2!important
}

.outline-black-lighten-4 {
    outline-color: #e9e9e9!important
}

.outline-black-lighten-5 {
    outline-color: #f5f5f5!important
}

.outline-white {
    outline-color: #fff!important
}

.outline-alert,.outline-yellow {
    outline-color: #ffce3a!important
}

.outline-yellow-lighten-1 {
    outline-color: #ffe79f!important
}

.outline-yellow-lighten-2 {
    outline-color: #fff9e6!important
}

.outline-danger,.outline-red {
    outline-color: #ff3b3b!important
}

.outline-red-lighten-1 {
    outline-color: #ff9399!important
}

.outline-red-lighten-2 {
    outline-color: #fff1f0!important
}

.outline-warning,.outline-orange {
    outline-color: #ff784b!important
}

.outline-orange-lighten-1 {
    outline-color: #ffa486!important
}

.outline-orange-lighten-2 {
    outline-color: #fff2e3!important
}

.outline-wa {
    outline-color: #06c270!important
}

.outline-fb {
    outline-color: #4267b2!important
}

.outline-ig {
    outline-color: #e9e9e9!important
}

.outline-tg,.outline-sg {
    outline-color: #1458ea!important
}

.outline-ol {
    outline-color: #9400d3!important
}

.outline-ml {
    outline-color: #ffce3a!important
}

.outline-custom-color {
    outline-color: var(--primary-bg-color)!important
}

.outline-primary-color {
    outline-color: var(--primary-color)!important
}

.fg-white {
    color: #fff
}

.fg-black {
    color: #1e1e1e
}

.fg-success,.fg-green {
    color: #06c270
}

.fg-info,.fg-blue {
    color: #29bdff
}

.fg-blue-darken-1 {
    color: #1458ea
}

.fg-danger,.fg-red {
    color: #ff3b3b
}

.fg-yellow-darken-1 {
    color: #ce9b00
}

.fg-alert,.fg-yellow {
    color: #ffce3a
}

.fg-yellow-lighten-1 {
    color: #ffe79f
}

.fg-yellow-lighten-2 {
    color: #fff9e6
}

.fg-purple {
    color: #9400d3
}

.fg-facebook {
    color: #4267b2
}

.fg-warning,.fg-orange {
    color: #ff784b
}

.fg-black-lighten-1 {
    color: #565656
}

.fg-black-lighten-2 {
    color: #8e8e8e
}

.fg-black-lighten-3 {
    color: #d2d2d2
}

.fg-black-lighten-4 {
    color: #e9e9e9
}

.fg-orange-darken-1 {
    color: #c63100
}

.fg-primary {
    color: var(--primary-color)
}

.fg-wa {
    color: #06c270
}

.fg-fb {
    color: #4267b2
}

.em-fb {
    color: #25615f
}

.fg-ig {
    color: #e9e9e9
}

.fg-tg,.fg-sg {
    color: #1458ea
}

.fg-we {
    color: var(--primary-color)
}

.fg-gb {
    color: #29bdff
}

.fg-ol {
    color: #9400d3
}

.fg-ml {
    color: #ffce3a
}

.cdk-drop-list-dragging {
    background-color: #f5f5f5!important;
    border: 1px dashed #29bdff!important;
    border-radius: 4px!important
}

*::-webkit-scrollbar {
    width: 5px
}

*::-webkit-scrollbar-track {
    background: #ddd
}

*::-webkit-scrollbar-thumb {
    background: #565656
}

.mat-menu-panel::-webkit-scrollbar {
    width: 5px
}

.mat-menu-panel::-webkit-scrollbar-track {
    background: #ddd
}

.mat-menu-panel::-webkit-scrollbar-thumb {
    background: #565656
}

.scroll1 {
    scrollbar-width: thin
}

.scroll1::-webkit-scrollbar {
    width: 3px;
    height: 3px
}

.scroll2::-webkit-scrollbar {
    width: 6px;
    height: 6px
}

.scroll1-small::-webkit-scrollbar {
    width: 2px
}

.scroll1::-webkit-scrollbar-track {
    background: #ddd
}

.scroll1::-webkit-scrollbar-thumb {
    background: #565656;
    border-radius: 40px
}

.gjs-one-bg {
    background-color: #3b3b3b!important
}

.gjs-two-color {
    color: #fff!important
}

.gjs-three-bg {
    background-color: #2f2f2f!important
}

.gjs-four-color-h:hover {
    color: #007bff!important
}

.gjs-toolbar {
    background: #2c3e50!important
}

.gjs-toolbar-item {
    color: #fff!important
}

.mat-ripple {
    overflow: hidden;
    position: relative
}

.mat-ripple:not(:empty) {
    transform: translateZ(0)
}

.mat-ripple.mat-ripple-unbounded {
    overflow: visible
}

.mat-ripple-element {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    transition: opacity,transform 0ms cubic-bezier(0,0,.2,1);
    transform: scale3d(0,0,0)
}

.cdk-high-contrast-active .mat-ripple-element {
    display: none
}

.cdk-visually-hidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap;
    outline: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    left: 0
}

[dir=rtl] .cdk-visually-hidden {
    left: auto;
    right: 0
}

.cdk-overlay-container,.cdk-global-overlay-wrapper {
    pointer-events: none;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%
}

.cdk-overlay-container {
    position: fixed;
    z-index: 1000
}

.cdk-overlay-container:empty {
    display: none
}

.cdk-global-overlay-wrapper {
    display: flex;
    position: absolute;
    z-index: 1000
}

.cdk-overlay-pane {
    position: absolute;
    pointer-events: auto;
    box-sizing: border-box;
    z-index: 1000;
    display: flex;
    max-width: 100%;
    max-height: 100%
}

.cdk-overlay-backdrop {
    position: absolute;
    inset: 0;
    z-index: 1000;
    pointer-events: auto;
    -webkit-tap-highlight-color: transparent;
    transition: opacity .4s cubic-bezier(.25,.8,.25,1);
    opacity: 0
}

.cdk-overlay-backdrop.cdk-overlay-backdrop-showing {
    opacity: 1
}

.cdk-high-contrast-active .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {
    opacity: .6
}

.cdk-overlay-dark-backdrop {
    background: rgba(0,0,0,.32)
}

.cdk-overlay-transparent-backdrop {
    transition: visibility 1ms linear,opacity 1ms linear;
    visibility: hidden;
    opacity: 1
}

.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing {
    opacity: 0;
    visibility: visible
}

.cdk-overlay-backdrop-noop-animation {
    transition: none
}

.cdk-overlay-connected-position-bounding-box {
    position: absolute;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    min-width: 1px;
    min-height: 1px
}

.cdk-global-scrollblock {
    position: fixed;
    width: 100%;
    overflow-y: scroll
}

textarea.cdk-textarea-autosize {
    resize: none
}

textarea.cdk-textarea-autosize-measuring {
    padding: 2px 0!important;
    box-sizing: content-box!important;
    height: auto!important;
    overflow: hidden!important
}

textarea.cdk-textarea-autosize-measuring-firefox {
    padding: 2px 0!important;
    box-sizing: content-box!important;
    height: 0!important
}

@keyframes cdk-text-field-autofill-start {
}

@keyframes cdk-text-field-autofill-end {
}

.cdk-text-field-autofill-monitored:-webkit-autofill {
    animation: cdk-text-field-autofill-start 0s 1ms
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
    animation: cdk-text-field-autofill-end 0s 1ms
}

.mat-focus-indicator {
    position: relative
}

.mat-focus-indicator:before {
    inset: 0;
    position: absolute;
    box-sizing: border-box;
    pointer-events: none;
    display: var(--mat-focus-indicator-display, none);
    border: var(--mat-focus-indicator-border-width, 3px) var(--mat-focus-indicator-border-style, solid) var(--mat-focus-indicator-border-color, transparent);
    border-radius: var(--mat-focus-indicator-border-radius, 4px)
}

.mat-focus-indicator:focus:before {
    content: ""
}

.cdk-high-contrast-active {
    --mat-focus-indicator-display: block
}

.mat-mdc-focus-indicator {
    position: relative
}

.mat-mdc-focus-indicator:before {
    inset: 0;
    position: absolute;
    box-sizing: border-box;
    pointer-events: none;
    display: var(--mat-mdc-focus-indicator-display, none);
    border: var(--mat-mdc-focus-indicator-border-width, 3px) var(--mat-mdc-focus-indicator-border-style, solid) var(--mat-mdc-focus-indicator-border-color, transparent);
    border-radius: var(--mat-mdc-focus-indicator-border-radius, 4px)
}

.mat-mdc-focus-indicator:focus:before {
    content: ""
}

.cdk-high-contrast-active {
    --mat-mdc-focus-indicator-display: block
}

.mat-ripple-element {
    background-color: #0000001a
}

html {
    --mat-option-selected-state-label-text-color: var(--theme-primary-500);
    --mat-option-label-text-color: rgba(0, 0, 0, .87);
    --mat-option-hover-state-layer-color: rgba(0, 0, 0, .04);
    --mat-option-focus-state-layer-color: rgba(0, 0, 0, .04);
    --mat-option-selected-state-layer-color: rgba(0, 0, 0, .04)
}

.mat-accent {
    --mat-option-selected-state-label-text-color: var(--theme-accent-500)
}

.mat-warn {
    --mat-option-selected-state-label-text-color: #f83d3d
}

html {
    --mat-optgroup-label-text-color: rgba(0, 0, 0, .87)
}

.mat-pseudo-checkbox-full {
    color: #0000008a
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
    color: #b0b0b0
}

.mat-primary .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-minimal:after,.mat-primary .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-minimal:after {
    color: var(--theme-primary-500)
}

.mat-primary .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-full,.mat-primary .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-full {
    background: var(--theme-primary-500)
}

.mat-primary .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-full:after,.mat-primary .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-full:after {
    color: #fafafa
}

.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-minimal:after,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-minimal:after {
    color: var(--theme-accent-500)
}

.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-full,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-full {
    background: var(--theme-accent-500)
}

.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-full:after,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-full:after {
    color: #fafafa
}

.mat-accent .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-minimal:after,.mat-accent .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-minimal:after {
    color: var(--theme-accent-500)
}

.mat-accent .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-full,.mat-accent .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-full {
    background: var(--theme-accent-500)
}

.mat-accent .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-full:after,.mat-accent .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-full:after {
    color: #fafafa
}

.mat-warn .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-minimal:after,.mat-warn .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-minimal:after {
    color: #f83d3d
}

.mat-warn .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-full,.mat-warn .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-full {
    background: #f83d3d
}

.mat-warn .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-full:after,.mat-warn .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-full:after {
    color: #fafafa
}

.mat-pseudo-checkbox-disabled.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-minimal:after,.mat-pseudo-checkbox-disabled.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-minimal:after {
    color: #b0b0b0
}

.mat-pseudo-checkbox-disabled.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-full,.mat-pseudo-checkbox-disabled.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-full {
    background: #b0b0b0
}

.mat-app-background {
    background-color: #fafafa;
    color: #000000de
}

.mat-elevation-z0,.mat-mdc-elevation-specific.mat-elevation-z0 {
    box-shadow: 0 0 #0003,0 0 #00000024,0 0 #0000001f
}

.mat-elevation-z1,.mat-mdc-elevation-specific.mat-elevation-z1 {
    box-shadow: 0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f
}

.mat-elevation-z2,.mat-mdc-elevation-specific.mat-elevation-z2 {
    box-shadow: 0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f
}

.mat-elevation-z3,.mat-mdc-elevation-specific.mat-elevation-z3 {
    box-shadow: 0 3px 3px -2px #0003,0 3px 4px #00000024,0 1px 8px #0000001f
}

.mat-elevation-z4,.mat-mdc-elevation-specific.mat-elevation-z4 {
    box-shadow: 0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f
}

.mat-elevation-z5,.mat-mdc-elevation-specific.mat-elevation-z5 {
    box-shadow: 0 3px 5px -1px #0003,0 5px 8px #00000024,0 1px 14px #0000001f
}

.mat-elevation-z6,.mat-mdc-elevation-specific.mat-elevation-z6 {
    box-shadow: 0 3px 5px -1px #0003,0 6px 10px #00000024,0 1px 18px #0000001f
}

.mat-elevation-z7,.mat-mdc-elevation-specific.mat-elevation-z7 {
    box-shadow: 0 4px 5px -2px #0003,0 7px 10px 1px #00000024,0 2px 16px 1px #0000001f
}

.mat-elevation-z8,.mat-mdc-elevation-specific.mat-elevation-z8 {
    box-shadow: 0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f
}

.mat-elevation-z9,.mat-mdc-elevation-specific.mat-elevation-z9 {
    box-shadow: 0 5px 6px -3px #0003,0 9px 12px 1px #00000024,0 3px 16px 2px #0000001f
}

.mat-elevation-z10,.mat-mdc-elevation-specific.mat-elevation-z10 {
    box-shadow: 0 6px 6px -3px #0003,0 10px 14px 1px #00000024,0 4px 18px 3px #0000001f
}

.mat-elevation-z11,.mat-mdc-elevation-specific.mat-elevation-z11 {
    box-shadow: 0 6px 7px -4px #0003,0 11px 15px 1px #00000024,0 4px 20px 3px #0000001f
}

.mat-elevation-z12,.mat-mdc-elevation-specific.mat-elevation-z12 {
    box-shadow: 0 7px 8px -4px #0003,0 12px 17px 2px #00000024,0 5px 22px 4px #0000001f
}

.mat-elevation-z13,.mat-mdc-elevation-specific.mat-elevation-z13 {
    box-shadow: 0 7px 8px -4px #0003,0 13px 19px 2px #00000024,0 5px 24px 4px #0000001f
}

.mat-elevation-z14,.mat-mdc-elevation-specific.mat-elevation-z14 {
    box-shadow: 0 7px 9px -4px #0003,0 14px 21px 2px #00000024,0 5px 26px 4px #0000001f
}

.mat-elevation-z15,.mat-mdc-elevation-specific.mat-elevation-z15 {
    box-shadow: 0 8px 9px -5px #0003,0 15px 22px 2px #00000024,0 6px 28px 5px #0000001f
}

.mat-elevation-z16,.mat-mdc-elevation-specific.mat-elevation-z16 {
    box-shadow: 0 8px 10px -5px #0003,0 16px 24px 2px #00000024,0 6px 30px 5px #0000001f
}

.mat-elevation-z17,.mat-mdc-elevation-specific.mat-elevation-z17 {
    box-shadow: 0 8px 11px -5px #0003,0 17px 26px 2px #00000024,0 6px 32px 5px #0000001f
}

.mat-elevation-z18,.mat-mdc-elevation-specific.mat-elevation-z18 {
    box-shadow: 0 9px 11px -5px #0003,0 18px 28px 2px #00000024,0 7px 34px 6px #0000001f
}

.mat-elevation-z19,.mat-mdc-elevation-specific.mat-elevation-z19 {
    box-shadow: 0 9px 12px -6px #0003,0 19px 29px 2px #00000024,0 7px 36px 6px #0000001f
}

.mat-elevation-z20,.mat-mdc-elevation-specific.mat-elevation-z20 {
    box-shadow: 0 10px 13px -6px #0003,0 20px 31px 3px #00000024,0 8px 38px 7px #0000001f
}

.mat-elevation-z21,.mat-mdc-elevation-specific.mat-elevation-z21 {
    box-shadow: 0 10px 13px -6px #0003,0 21px 33px 3px #00000024,0 8px 40px 7px #0000001f
}

.mat-elevation-z22,.mat-mdc-elevation-specific.mat-elevation-z22 {
    box-shadow: 0 10px 14px -6px #0003,0 22px 35px 3px #00000024,0 8px 42px 7px #0000001f
}

.mat-elevation-z23,.mat-mdc-elevation-specific.mat-elevation-z23 {
    box-shadow: 0 11px 14px -7px #0003,0 23px 36px 3px #00000024,0 9px 44px 8px #0000001f
}

.mat-elevation-z24,.mat-mdc-elevation-specific.mat-elevation-z24 {
    box-shadow: 0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f
}

.mat-theme-loaded-marker {
    display: none
}

html {
    --mat-option-label-text-font: Inter;
    --mat-option-label-text-line-height: 1;
    --mat-option-label-text-size: .875rem;
    --mat-option-label-text-tracking: normal;
    --mat-option-label-text-weight: 400
}

html {
    --mat-optgroup-label-text-font: Inter;
    --mat-optgroup-label-text-line-height: 1;
    --mat-optgroup-label-text-size: .875rem;
    --mat-optgroup-label-text-tracking: normal;
    --mat-optgroup-label-text-weight: 400
}

.mat-mdc-card {
    --mdc-elevated-card-container-color: white;
    --mdc-elevated-card-container-elevation: 0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12);
    --mdc-outlined-card-container-color: white;
    --mdc-outlined-card-outline-color: rgba(0, 0, 0, .12);
    --mdc-outlined-card-container-elevation: 0px 0px 0px 0px rgba(0, 0, 0, .2), 0px 0px 0px 0px rgba(0, 0, 0, .14), 0px 0px 0px 0px rgba(0, 0, 0, .12);
    --mat-card-subtitle-text-color: rgba(0, 0, 0, .54)
}

.mat-mdc-card {
    --mat-card-title-text-font: Roboto, sans-serif;
    --mat-card-title-text-line-height: 32px;
    --mat-card-title-text-size: 24px;
    --mat-card-title-text-tracking: normal;
    --mat-card-title-text-weight: 400;
    --mat-card-subtitle-text-font: Inter;
    --mat-card-subtitle-text-line-height: 1.5rem;
    --mat-card-subtitle-text-size: 1.25rem;
    --mat-card-subtitle-text-tracking: normal;
    --mat-card-subtitle-text-weight: 500
}

.mat-mdc-progress-bar {
    --mdc-linear-progress-active-indicator-color: var(--theme-primary-500);
    --mdc-linear-progress-track-color: var(--theme-primary-500)
}

.mat-mdc-progress-bar .mdc-linear-progress__buffer-dots {
    background-color: var(--theme-primary-500);
    background-color: var(--mdc-linear-progress-track-color, var(--theme-primary-500))
}

@media (forced-colors: active) {
    .mat-mdc-progress-bar .mdc-linear-progress__buffer-dots {
        background-color: ButtonBorder
    }
}

@media all and (-ms-high-contrast: none),(-ms-high-contrast: active) {
    .mat-mdc-progress-bar .mdc-linear-progress__buffer-dots {
        background-color: transparent;
        background-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='var(--theme-primary-500)'/%3E%3C/svg%3E")
    }
}

.mat-mdc-progress-bar .mdc-linear-progress__buffer-bar {
    background-color: var(--theme-primary-500);
    background-color: var(--mdc-linear-progress-track-color, var(--theme-primary-500))
}

.mat-mdc-progress-bar.mat-accent {
    --mdc-linear-progress-active-indicator-color: var(--theme-accent-500);
    --mdc-linear-progress-track-color: var(--theme-accent-500)
}

.mat-mdc-progress-bar.mat-accent .mdc-linear-progress__buffer-dots {
    background-color: var(--theme-accent-500);
    background-color: var(--mdc-linear-progress-track-color, var(--theme-accent-500))
}

@media (forced-colors: active) {
    .mat-mdc-progress-bar.mat-accent .mdc-linear-progress__buffer-dots {
        background-color: ButtonBorder
    }
}

@media all and (-ms-high-contrast: none),(-ms-high-contrast: active) {
    .mat-mdc-progress-bar.mat-accent .mdc-linear-progress__buffer-dots {
        background-color: transparent;
        background-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='var(--theme-accent-500)'/%3E%3C/svg%3E")
    }
}

.mat-mdc-progress-bar.mat-accent .mdc-linear-progress__buffer-bar {
    background-color: var(--theme-accent-500);
    background-color: var(--mdc-linear-progress-track-color, var(--theme-accent-500))
}

.mat-mdc-progress-bar.mat-warn {
    --mdc-linear-progress-active-indicator-color: #f83d3d;
    --mdc-linear-progress-track-color: rgba(248, 61, 61, .25)
}

@keyframes mdc-linear-progress-buffering {
}

.mat-mdc-progress-bar.mat-warn .mdc-linear-progress__buffer-dots {
    background-color: #f83d3d40;
    background-color: var(--mdc-linear-progress-track-color, rgba(248, 61, 61, .25))
}

@media (forced-colors: active) {
    .mat-mdc-progress-bar.mat-warn .mdc-linear-progress__buffer-dots {
        background-color: ButtonBorder
    }
}

@media all and (-ms-high-contrast: none),(-ms-high-contrast: active) {
    .mat-mdc-progress-bar.mat-warn .mdc-linear-progress__buffer-dots {
        background-color: transparent;
        background-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(248, 61, 61, 0.25)'/%3E%3C/svg%3E")
    }
}

.mat-mdc-progress-bar.mat-warn .mdc-linear-progress__buffer-bar {
    background-color: #f83d3d40;
    background-color: var(--mdc-linear-progress-track-color, rgba(248, 61, 61, .25))
}

.mat-mdc-tooltip {
    --mdc-plain-tooltip-container-color: #616161;
    --mdc-plain-tooltip-supporting-text-color: #fff
}

.mat-mdc-tooltip {
    --mdc-plain-tooltip-supporting-text-font: Inter;
    --mdc-plain-tooltip-supporting-text-size: .875rem;
    --mdc-plain-tooltip-supporting-text-weight: 500;
    --mdc-plain-tooltip-supporting-text-tracking: normal
}

html {
    --mdc-filled-text-field-caret-color: var(--theme-primary-500);
    --mdc-filled-text-field-focus-active-indicator-color: var(--theme-primary-500);
    --mdc-filled-text-field-focus-label-text-color: var(--theme-primary-500);
    --mdc-filled-text-field-container-color: whitesmoke;
    --mdc-filled-text-field-disabled-container-color: #fafafa;
    --mdc-filled-text-field-label-text-color: rgba(0, 0, 0, .6);
    --mdc-filled-text-field-disabled-label-text-color: rgba(0, 0, 0, .38);
    --mdc-filled-text-field-input-text-color: rgba(0, 0, 0, .87);
    --mdc-filled-text-field-disabled-input-text-color: rgba(0, 0, 0, .38);
    --mdc-filled-text-field-input-text-placeholder-color: rgba(0, 0, 0, .6);
    --mdc-filled-text-field-error-focus-label-text-color: #f83d3d;
    --mdc-filled-text-field-error-label-text-color: #f83d3d;
    --mdc-filled-text-field-error-caret-color: #f83d3d;
    --mdc-filled-text-field-active-indicator-color: rgba(0, 0, 0, .42);
    --mdc-filled-text-field-disabled-active-indicator-color: rgba(0, 0, 0, .06);
    --mdc-filled-text-field-hover-active-indicator-color: rgba(0, 0, 0, .87);
    --mdc-filled-text-field-error-active-indicator-color: #f83d3d;
    --mdc-filled-text-field-error-focus-active-indicator-color: #f83d3d;
    --mdc-filled-text-field-error-hover-active-indicator-color: #f83d3d;
    --mdc-outlined-text-field-caret-color: var(--theme-primary-500);
    --mdc-outlined-text-field-focus-outline-color: var(--theme-primary-500);
    --mdc-outlined-text-field-focus-label-text-color: var(--theme-primary-500);
    --mdc-outlined-text-field-label-text-color: rgba(0, 0, 0, .6);
    --mdc-outlined-text-field-disabled-label-text-color: rgba(0, 0, 0, .38);
    --mdc-outlined-text-field-input-text-color: rgba(0, 0, 0, .87);
    --mdc-outlined-text-field-disabled-input-text-color: rgba(0, 0, 0, .38);
    --mdc-outlined-text-field-input-text-placeholder-color: rgba(0, 0, 0, .6);
    --mdc-outlined-text-field-error-caret-color: #f83d3d;
    --mdc-outlined-text-field-error-focus-label-text-color: #f83d3d;
    --mdc-outlined-text-field-error-label-text-color: #f83d3d;
    --mdc-outlined-text-field-outline-color: rgba(0, 0, 0, .38);
    --mdc-outlined-text-field-disabled-outline-color: rgba(0, 0, 0, .06);
    --mdc-outlined-text-field-hover-outline-color: rgba(0, 0, 0, .87);
    --mdc-outlined-text-field-error-focus-outline-color: #f83d3d;
    --mdc-outlined-text-field-error-hover-outline-color: #f83d3d;
    --mdc-outlined-text-field-error-outline-color: #f83d3d;
    --mat-form-field-disabled-input-text-placeholder-color: rgba(0, 0, 0, .38)
}

.mat-mdc-form-field-error {
    color: var(--mdc-theme-error, #f83d3d)
}

.mat-mdc-form-field-subscript-wrapper,.mat-mdc-form-field-bottom-align:before {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: var(--mat-form-field-subscript-text-font);
    line-height: var(--mat-form-field-subscript-text-line-height);
    font-size: var(--mat-form-field-subscript-text-size);
    letter-spacing: var(--mat-form-field-subscript-text-tracking);
    font-weight: var(--mat-form-field-subscript-text-weight)
}

.mat-mdc-form-field-focus-overlay {
    background-color: #000000de
}

.mat-mdc-form-field:hover .mat-mdc-form-field-focus-overlay {
    opacity: .04
}

.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
    opacity: .12
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix:after {
    color: #0000008a
}

.mat-mdc-form-field-type-mat-native-select.mat-focused.mat-primary .mat-mdc-form-field-infix:after {
    color: rgba(var(--theme-primary-500),.87)
}

.mat-mdc-form-field-type-mat-native-select.mat-focused.mat-accent .mat-mdc-form-field-infix:after {
    color: rgba(var(--theme-accent-500),.87)
}

.mat-mdc-form-field-type-mat-native-select.mat-focused.mat-warn .mat-mdc-form-field-infix:after {
    color: #f83d3dde
}

.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix:after {
    color: #00000061
}

.mat-mdc-form-field.mat-accent {
    --mdc-filled-text-field-caret-color: var(--theme-accent-500);
    --mdc-filled-text-field-focus-active-indicator-color: var(--theme-accent-500);
    --mdc-filled-text-field-focus-label-text-color: var(--theme-accent-500);
    --mdc-outlined-text-field-caret-color: var(--theme-accent-500);
    --mdc-outlined-text-field-focus-outline-color: var(--theme-accent-500);
    --mdc-outlined-text-field-focus-label-text-color: var(--theme-accent-500)
}

.mat-mdc-form-field.mat-warn {
    --mdc-filled-text-field-caret-color: #f83d3d;
    --mdc-filled-text-field-focus-active-indicator-color: #f83d3d;
    --mdc-filled-text-field-focus-label-text-color: rgba(248, 61, 61, .87);
    --mdc-outlined-text-field-caret-color: #f83d3d;
    --mdc-outlined-text-field-focus-outline-color: #f83d3d;
    --mdc-outlined-text-field-focus-label-text-color: rgba(248, 61, 61, .87)
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
    border-left: 1px solid transparent
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
    border-left: none;
    border-right: 1px solid transparent
}

.mat-mdc-form-field-infix {
    min-height: 52px
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
    top: 26px
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
    --mat-mdc-form-field-label-transform: translateY( -32.75px) scale(var(--mat-mdc-form-field-floating-label-scale, .75));
    transform: var(--mat-mdc-form-field-label-transform)
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mat-mdc-form-field-infix {
    padding-top: 14px;
    padding-bottom: 14px
}

.mat-mdc-text-field-wrapper:not(.mdc-text-field--outlined) .mat-mdc-form-field-infix {
    padding-top: 22px;
    padding-bottom: 6px
}

.mdc-text-field--no-label:not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mat-mdc-form-field-infix {
    padding-top: 14px;
    padding-bottom: 14px
}

html {
    --mdc-filled-text-field-label-text-font: Inter;
    --mdc-filled-text-field-label-text-size: .875rem;
    --mdc-filled-text-field-label-text-tracking: normal;
    --mdc-filled-text-field-label-text-weight: 400;
    --mdc-outlined-text-field-label-text-font: Inter;
    --mdc-outlined-text-field-label-text-size: .875rem;
    --mdc-outlined-text-field-label-text-tracking: normal;
    --mdc-outlined-text-field-label-text-weight: 400;
    --mat-form-field-container-text-font: Inter;
    --mat-form-field-container-text-line-height: 1;
    --mat-form-field-container-text-size: .875rem;
    --mat-form-field-container-text-tracking: normal;
    --mat-form-field-container-text-weight: 400;
    --mat-form-field-outlined-label-text-populated-size: .875rem;
    --mat-form-field-subscript-text-font: Inter;
    --mat-form-field-subscript-text-line-height: 1;
    --mat-form-field-subscript-text-size: .875rem;
    --mat-form-field-subscript-text-tracking: normal;
    --mat-form-field-subscript-text-weight: 500
}

html {
    --mat-select-panel-background-color: white;
    --mat-select-enabled-trigger-text-color: rgba(0, 0, 0, .87);
    --mat-select-disabled-trigger-text-color: rgba(0, 0, 0, .38);
    --mat-select-placeholder-text-color: rgba(0, 0, 0, .6);
    --mat-select-enabled-arrow-color: rgba(0, 0, 0, .54);
    --mat-select-disabled-arrow-color: rgba(0, 0, 0, .38);
    --mat-select-focused-arrow-color: var(--theme-primary-500);
    --mat-select-invalid-arrow-color: rgba(248, 61, 61, .87)
}

html .mat-mdc-form-field.mat-accent {
    --mat-select-panel-background-color: white;
    --mat-select-enabled-trigger-text-color: rgba(0, 0, 0, .87);
    --mat-select-disabled-trigger-text-color: rgba(0, 0, 0, .38);
    --mat-select-placeholder-text-color: rgba(0, 0, 0, .6);
    --mat-select-enabled-arrow-color: rgba(0, 0, 0, .54);
    --mat-select-disabled-arrow-color: rgba(0, 0, 0, .38);
    --mat-select-focused-arrow-color: var(--theme-accent-500);
    --mat-select-invalid-arrow-color: rgba(248, 61, 61, .87)
}

html .mat-mdc-form-field.mat-warn {
    --mat-select-panel-background-color: white;
    --mat-select-enabled-trigger-text-color: rgba(0, 0, 0, .87);
    --mat-select-disabled-trigger-text-color: rgba(0, 0, 0, .38);
    --mat-select-placeholder-text-color: rgba(0, 0, 0, .6);
    --mat-select-enabled-arrow-color: rgba(0, 0, 0, .54);
    --mat-select-disabled-arrow-color: rgba(0, 0, 0, .38);
    --mat-select-focused-arrow-color: rgba(248, 61, 61, .87);
    --mat-select-invalid-arrow-color: rgba(248, 61, 61, .87)
}

html {
    --mat-select-trigger-text-font: Inter;
    --mat-select-trigger-text-line-height: 1;
    --mat-select-trigger-text-size: .875rem;
    --mat-select-trigger-text-tracking: normal;
    --mat-select-trigger-text-weight: 400
}

html {
    --mat-autocomplete-background-color: white
}

.mat-mdc-dialog-container {
    --mdc-dialog-container-color: white;
    --mdc-dialog-subhead-color: rgba(0, 0, 0, .87);
    --mdc-dialog-supporting-text-color: rgba(0, 0, 0, .6)
}

.mat-mdc-dialog-container {
    --mdc-dialog-subhead-font: Roboto, sans-serif;
    --mdc-dialog-subhead-line-height: 32px;
    --mdc-dialog-subhead-size: 24px;
    --mdc-dialog-subhead-weight: 400;
    --mdc-dialog-subhead-tracking: normal;
    --mdc-dialog-supporting-text-font: Inter;
    --mdc-dialog-supporting-text-line-height: 1;
    --mdc-dialog-supporting-text-size: .875rem;
    --mdc-dialog-supporting-text-weight: 400;
    --mdc-dialog-supporting-text-tracking: normal
}

.mat-mdc-standard-chip {
    --mdc-chip-disabled-label-text-color: #212121;
    --mdc-chip-elevated-container-color: #e0e0e0;
    --mdc-chip-elevated-disabled-container-color: #e0e0e0;
    --mdc-chip-focus-state-layer-color: black;
    --mdc-chip-focus-state-layer-opacity: .12;
    --mdc-chip-label-text-color: #212121;
    --mdc-chip-with-icon-icon-color: #212121;
    --mdc-chip-with-icon-disabled-icon-color: #212121;
    --mdc-chip-with-icon-selected-icon-color: #212121;
    --mdc-chip-with-trailing-icon-disabled-trailing-icon-color: #212121;
    --mdc-chip-with-trailing-icon-trailing-icon-color: #212121
}

.mat-mdc-standard-chip.mat-mdc-chip-selected.mat-primary,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mat-primary {
    --mdc-chip-disabled-label-text-color: var(--theme-primary-contrast-500);
    --mdc-chip-elevated-container-color: var(--theme-primary-500);
    --mdc-chip-elevated-disabled-container-color: var(--theme-primary-500);
    --mdc-chip-focus-state-layer-color: black;
    --mdc-chip-focus-state-layer-opacity: .12;
    --mdc-chip-label-text-color: var(--theme-primary-contrast-500);
    --mdc-chip-with-icon-icon-color: var(--theme-primary-contrast-500);
    --mdc-chip-with-icon-disabled-icon-color: var(--theme-primary-contrast-500);
    --mdc-chip-with-icon-selected-icon-color: var(--theme-primary-contrast-500);
    --mdc-chip-with-trailing-icon-disabled-trailing-icon-color: var(--theme-primary-contrast-500);
    --mdc-chip-with-trailing-icon-trailing-icon-color: var(--theme-primary-contrast-500)
}

.mat-mdc-standard-chip.mat-mdc-chip-selected.mat-accent,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mat-accent {
    --mdc-chip-disabled-label-text-color: var(--theme-accent-contrast-500);
    --mdc-chip-elevated-container-color: var(--theme-accent-500);
    --mdc-chip-elevated-disabled-container-color: var(--theme-accent-500);
    --mdc-chip-focus-state-layer-color: black;
    --mdc-chip-focus-state-layer-opacity: .12;
    --mdc-chip-label-text-color: var(--theme-accent-contrast-500);
    --mdc-chip-with-icon-icon-color: var(--theme-accent-contrast-500);
    --mdc-chip-with-icon-disabled-icon-color: var(--theme-accent-contrast-500);
    --mdc-chip-with-icon-selected-icon-color: var(--theme-accent-contrast-500);
    --mdc-chip-with-trailing-icon-disabled-trailing-icon-color: var(--theme-accent-contrast-500);
    --mdc-chip-with-trailing-icon-trailing-icon-color: var(--theme-accent-contrast-500)
}

.mat-mdc-standard-chip.mat-mdc-chip-selected.mat-warn,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mat-warn {
    --mdc-chip-disabled-label-text-color: white;
    --mdc-chip-elevated-container-color: #f83d3d;
    --mdc-chip-elevated-disabled-container-color: #f83d3d;
    --mdc-chip-focus-state-layer-color: black;
    --mdc-chip-focus-state-layer-opacity: .12;
    --mdc-chip-label-text-color: white;
    --mdc-chip-with-icon-icon-color: white;
    --mdc-chip-with-icon-disabled-icon-color: white;
    --mdc-chip-with-icon-selected-icon-color: white;
    --mdc-chip-with-trailing-icon-disabled-trailing-icon-color: white;
    --mdc-chip-with-trailing-icon-trailing-icon-color: white
}

.mat-mdc-chip.mat-mdc-standard-chip {
    --mdc-chip-container-height: 28px
}

.mat-mdc-standard-chip {
    --mdc-chip-label-text-font: Inter;
    --mdc-chip-label-text-line-height: 1;
    --mdc-chip-label-text-size: .875rem;
    --mdc-chip-label-text-tracking: normal;
    --mdc-chip-label-text-weight: 500
}

.mat-mdc-slide-toggle {
    --mdc-switch-selected-focus-state-layer-color: var(--theme-primary-600);
    --mdc-switch-selected-handle-color: var(--theme-primary-600);
    --mdc-switch-selected-hover-state-layer-color: var(--theme-primary-600);
    --mdc-switch-selected-pressed-state-layer-color: var(--theme-primary-600);
    --mdc-switch-selected-focus-handle-color: var(--theme-primary-900);
    --mdc-switch-selected-hover-handle-color: var(--theme-primary-900);
    --mdc-switch-selected-pressed-handle-color: var(--theme-primary-900);
    --mdc-switch-selected-focus-track-color: var(--theme-primary-300);
    --mdc-switch-selected-hover-track-color: var(--theme-primary-300);
    --mdc-switch-selected-pressed-track-color: var(--theme-primary-300);
    --mdc-switch-selected-track-color: var(--theme-primary-300);
    --mdc-switch-disabled-selected-handle-color: #424242;
    --mdc-switch-disabled-selected-icon-color: #fff;
    --mdc-switch-disabled-selected-track-color: #424242;
    --mdc-switch-disabled-unselected-handle-color: #424242;
    --mdc-switch-disabled-unselected-icon-color: #fff;
    --mdc-switch-disabled-unselected-track-color: #424242;
    --mdc-switch-handle-surface-color: var(--mdc-theme-surface, #fff);
    --mdc-switch-handle-elevation-shadow: 0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12);
    --mdc-switch-handle-shadow-color: black;
    --mdc-switch-disabled-handle-elevation-shadow: 0px 0px 0px 0px rgba(0, 0, 0, .2), 0px 0px 0px 0px rgba(0, 0, 0, .14), 0px 0px 0px 0px rgba(0, 0, 0, .12);
    --mdc-switch-selected-icon-color: #fff;
    --mdc-switch-unselected-focus-handle-color: #212121;
    --mdc-switch-unselected-focus-state-layer-color: #424242;
    --mdc-switch-unselected-focus-track-color: #e0e0e0;
    --mdc-switch-unselected-handle-color: #616161;
    --mdc-switch-unselected-hover-handle-color: #212121;
    --mdc-switch-unselected-hover-state-layer-color: #424242;
    --mdc-switch-unselected-hover-track-color: #e0e0e0;
    --mdc-switch-unselected-icon-color: #fff;
    --mdc-switch-unselected-pressed-handle-color: #212121;
    --mdc-switch-unselected-pressed-state-layer-color: #424242;
    --mdc-switch-unselected-pressed-track-color: #e0e0e0;
    --mdc-switch-unselected-track-color: #e0e0e0
}

.mat-mdc-slide-toggle .mdc-form-field {
    color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, .87))
}

.mat-mdc-slide-toggle .mdc-switch--disabled+label {
    color: #00000061
}

.mat-mdc-slide-toggle.mat-accent {
    --mdc-switch-selected-focus-state-layer-color: var(--theme-accent-600);
    --mdc-switch-selected-handle-color: var(--theme-accent-600);
    --mdc-switch-selected-hover-state-layer-color: var(--theme-accent-600);
    --mdc-switch-selected-pressed-state-layer-color: var(--theme-accent-600);
    --mdc-switch-selected-focus-handle-color: var(--theme-accent-900);
    --mdc-switch-selected-hover-handle-color: var(--theme-accent-900);
    --mdc-switch-selected-pressed-handle-color: var(--theme-accent-900);
    --mdc-switch-selected-focus-track-color: var(--theme-accent-300);
    --mdc-switch-selected-hover-track-color: var(--theme-accent-300);
    --mdc-switch-selected-pressed-track-color: var(--theme-accent-300);
    --mdc-switch-selected-track-color: var(--theme-accent-300)
}

.mat-mdc-slide-toggle.mat-warn {
    --mdc-switch-selected-focus-state-layer-color: #e8333c;
    --mdc-switch-selected-handle-color: #e8333c;
    --mdc-switch-selected-hover-state-layer-color: #e8333c;
    --mdc-switch-selected-pressed-state-layer-color: #e8333c;
    --mdc-switch-selected-focus-handle-color: #c2051e;
    --mdc-switch-selected-hover-handle-color: #c2051e;
    --mdc-switch-selected-pressed-handle-color: #c2051e;
    --mdc-switch-selected-focus-track-color: #e77378;
    --mdc-switch-selected-hover-track-color: #e77378;
    --mdc-switch-selected-pressed-track-color: #e77378;
    --mdc-switch-selected-track-color: #e77378
}

.mat-mdc-slide-toggle {
    --mdc-switch-state-layer-size: 44px
}

.mat-mdc-slide-toggle {
    --mat-slide-toggle-label-text-font: Roboto, sans-serif;
    --mat-slide-toggle-label-text-size: .875rem;
    --mat-slide-toggle-label-text-tracking: normal;
    --mat-slide-toggle-label-text-line-height: 1;
    --mat-slide-toggle-label-text-weight: 500
}

.mat-mdc-slide-toggle .mdc-form-field {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto,sans-serif;
    font-family: var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
    font-size: .875rem;
    font-size: var(--mdc-typography-body2-font-size, .875rem);
    line-height: 1.25rem;
    line-height: var(--mdc-typography-body2-line-height, 1.25rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-body2-font-weight, 400);
    letter-spacing: .0178571429em;
    letter-spacing: var(--mdc-typography-body2-letter-spacing, .0178571429em);
    text-decoration: inherit;
    -webkit-text-decoration: var(--mdc-typography-body2-text-decoration, inherit);
    text-decoration: var(--mdc-typography-body2-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-body2-text-transform, inherit)
}

.mat-mdc-radio-button .mdc-form-field {
    color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, .87))
}

.mat-mdc-radio-button.mat-primary {
    --mdc-radio-disabled-selected-icon-color: #000;
    --mdc-radio-disabled-unselected-icon-color: #000;
    --mdc-radio-unselected-hover-icon-color: #212121;
    --mdc-radio-unselected-icon-color: rgba(0, 0, 0, .54);
    --mdc-radio-unselected-pressed-icon-color: rgba(0, 0, 0, .54);
    --mdc-radio-selected-focus-icon-color: var(--theme-primary-500);
    --mdc-radio-selected-hover-icon-color: var(--theme-primary-500);
    --mdc-radio-selected-icon-color: var(--theme-primary-500);
    --mdc-radio-selected-pressed-icon-color: var(--theme-primary-500);
    --mat-radio-ripple-color: #000;
    --mat-radio-checked-ripple-color: var(--theme-primary-500);
    --mat-radio-disabled-label-color: rgba(0, 0, 0, .38)
}

.mat-mdc-radio-button.mat-accent {
    --mdc-radio-disabled-selected-icon-color: #000;
    --mdc-radio-disabled-unselected-icon-color: #000;
    --mdc-radio-unselected-hover-icon-color: #212121;
    --mdc-radio-unselected-icon-color: rgba(0, 0, 0, .54);
    --mdc-radio-unselected-pressed-icon-color: rgba(0, 0, 0, .54);
    --mdc-radio-selected-focus-icon-color: var(--theme-accent-500);
    --mdc-radio-selected-hover-icon-color: var(--theme-accent-500);
    --mdc-radio-selected-icon-color: var(--theme-accent-500);
    --mdc-radio-selected-pressed-icon-color: var(--theme-accent-500);
    --mat-radio-ripple-color: #000;
    --mat-radio-checked-ripple-color: var(--theme-accent-500);
    --mat-radio-disabled-label-color: rgba(0, 0, 0, .38)
}

.mat-mdc-radio-button.mat-warn {
    --mdc-radio-disabled-selected-icon-color: #000;
    --mdc-radio-disabled-unselected-icon-color: #000;
    --mdc-radio-unselected-hover-icon-color: #212121;
    --mdc-radio-unselected-icon-color: rgba(0, 0, 0, .54);
    --mdc-radio-unselected-pressed-icon-color: rgba(0, 0, 0, .54);
    --mdc-radio-selected-focus-icon-color: #f83d3d;
    --mdc-radio-selected-hover-icon-color: #f83d3d;
    --mdc-radio-selected-icon-color: #f83d3d;
    --mdc-radio-selected-pressed-icon-color: #f83d3d;
    --mat-radio-ripple-color: #000;
    --mat-radio-checked-ripple-color: #f83d3d;
    --mat-radio-disabled-label-color: rgba(0, 0, 0, .38)
}

.mat-mdc-radio-button .mdc-radio {
    --mdc-radio-state-layer-size: 36px
}

.mat-mdc-radio-button .mdc-form-field {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Inter));
    font-size: var(--mdc-typography-body2-font-size, .875rem);
    line-height: var(--mdc-typography-body2-line-height, 1);
    font-weight: var(--mdc-typography-body2-font-weight, 500);
    letter-spacing: var(--mdc-typography-body2-letter-spacing, normal);
    -webkit-text-decoration: var(--mdc-typography-body2-text-decoration, inherit);
    text-decoration: var(--mdc-typography-body2-text-decoration, inherit);
    text-transform: var(--mdc-typography-body2-text-transform, none)
}

.mat-mdc-slider {
    --mdc-slider-label-container-color: black;
    --mdc-slider-label-label-text-color: white;
    --mdc-slider-disabled-handle-color: #000;
    --mdc-slider-disabled-active-track-color: #000;
    --mdc-slider-disabled-inactive-track-color: #000;
    --mdc-slider-with-tick-marks-disabled-container-color: #000;
    --mat-mdc-slider-value-indicator-opacity: .6
}

.mat-mdc-slider.mat-primary {
    --mdc-slider-handle-color: var(--theme-primary-500);
    --mdc-slider-focus-handle-color: var(--theme-primary-500);
    --mdc-slider-hover-handle-color: var(--theme-primary-500);
    --mdc-slider-active-track-color: var(--theme-primary-500);
    --mdc-slider-inactive-track-color: var(--theme-primary-500);
    --mdc-slider-with-tick-marks-active-container-color: #000;
    --mdc-slider-with-tick-marks-inactive-container-color: var(--theme-primary-500);
    --mat-mdc-slider-ripple-color: var(--theme-primary-500);
    --mat-mdc-slider-hover-ripple-color: rgba(var(--theme-primary-500), .05);
    --mat-mdc-slider-focus-ripple-color: rgba(var(--theme-primary-500), .2)
}

.mat-mdc-slider.mat-accent {
    --mdc-slider-handle-color: var(--theme-accent-500);
    --mdc-slider-focus-handle-color: var(--theme-accent-500);
    --mdc-slider-hover-handle-color: var(--theme-accent-500);
    --mdc-slider-active-track-color: var(--theme-accent-500);
    --mdc-slider-inactive-track-color: var(--theme-accent-500);
    --mdc-slider-with-tick-marks-active-container-color: #000;
    --mdc-slider-with-tick-marks-inactive-container-color: var(--theme-accent-500);
    --mat-mdc-slider-ripple-color: var(--theme-accent-500);
    --mat-mdc-slider-hover-ripple-color: rgba(var(--theme-accent-500), .05);
    --mat-mdc-slider-focus-ripple-color: rgba(var(--theme-accent-500), .2)
}

.mat-mdc-slider.mat-warn {
    --mdc-slider-handle-color: #f83d3d;
    --mdc-slider-focus-handle-color: #f83d3d;
    --mdc-slider-hover-handle-color: #f83d3d;
    --mdc-slider-active-track-color: #f83d3d;
    --mdc-slider-inactive-track-color: #f83d3d;
    --mdc-slider-with-tick-marks-active-container-color: #fff;
    --mdc-slider-with-tick-marks-inactive-container-color: #f83d3d;
    --mat-mdc-slider-ripple-color: #f83d3d;
    --mat-mdc-slider-hover-ripple-color: rgba(248, 61, 61, .05);
    --mat-mdc-slider-focus-ripple-color: rgba(248, 61, 61, .2)
}

.mat-mdc-slider {
    --mdc-slider-label-label-text-font: Inter;
    --mdc-slider-label-label-text-size: 1.25rem;
    --mdc-slider-label-label-text-line-height: 1.5rem;
    --mdc-slider-label-label-text-tracking: normal;
    --mdc-slider-label-label-text-weight: 500
}

html {
    --mat-menu-item-label-text-color: rgba(0, 0, 0, .87);
    --mat-menu-item-icon-color: rgba(0, 0, 0, .87);
    --mat-menu-item-hover-state-layer-color: rgba(0, 0, 0, .04);
    --mat-menu-item-focus-state-layer-color: rgba(0, 0, 0, .04);
    --mat-menu-container-color: white
}

html {
    --mat-menu-item-label-text-font: Inter;
    --mat-menu-item-label-text-size: .875rem;
    --mat-menu-item-label-text-tracking: normal;
    --mat-menu-item-label-text-line-height: 1;
    --mat-menu-item-label-text-weight: 400
}

.mat-mdc-list-base {
    --mdc-list-list-item-label-text-color: rgba(0, 0, 0, .87);
    --mdc-list-list-item-supporting-text-color: rgba(0, 0, 0, .54);
    --mdc-list-list-item-leading-icon-color: rgba(0, 0, 0, .38);
    --mdc-list-list-item-trailing-supporting-text-color: rgba(0, 0, 0, .38);
    --mdc-list-list-item-trailing-icon-color: rgba(0, 0, 0, .38);
    --mdc-list-list-item-selected-trailing-icon-color: rgba(0, 0, 0, .38);
    --mdc-list-list-item-disabled-label-text-color: black;
    --mdc-list-list-item-disabled-leading-icon-color: black;
    --mdc-list-list-item-disabled-trailing-icon-color: black;
    --mdc-list-list-item-hover-label-text-color: rgba(0, 0, 0, .87);
    --mdc-list-list-item-hover-leading-icon-color: rgba(0, 0, 0, .38);
    --mdc-list-list-item-hover-trailing-icon-color: rgba(0, 0, 0, .38);
    --mdc-list-list-item-focus-label-text-color: rgba(0, 0, 0, .87);
    --mdc-list-list-item-hover-state-layer-color: black;
    --mdc-list-list-item-hover-state-layer-opacity: .04;
    --mdc-list-list-item-focus-state-layer-color: black;
    --mdc-list-list-item-focus-state-layer-opacity: .12
}

.mdc-list-item__start,.mdc-list-item__end {
    --mdc-radio-disabled-selected-icon-color: #000;
    --mdc-radio-disabled-unselected-icon-color: #000;
    --mdc-radio-unselected-hover-icon-color: #212121;
    --mdc-radio-unselected-icon-color: rgba(0, 0, 0, .54);
    --mdc-radio-unselected-pressed-icon-color: rgba(0, 0, 0, .54);
    --mdc-radio-selected-focus-icon-color: var(--theme-primary-500);
    --mdc-radio-selected-hover-icon-color: var(--theme-primary-500);
    --mdc-radio-selected-icon-color: var(--theme-primary-500);
    --mdc-radio-selected-pressed-icon-color: var(--theme-primary-500)
}

.mat-accent .mdc-list-item__start,.mat-accent .mdc-list-item__end {
    --mdc-radio-disabled-selected-icon-color: #000;
    --mdc-radio-disabled-unselected-icon-color: #000;
    --mdc-radio-unselected-hover-icon-color: #212121;
    --mdc-radio-unselected-icon-color: rgba(0, 0, 0, .54);
    --mdc-radio-unselected-pressed-icon-color: rgba(0, 0, 0, .54);
    --mdc-radio-selected-focus-icon-color: var(--theme-accent-500);
    --mdc-radio-selected-hover-icon-color: var(--theme-accent-500);
    --mdc-radio-selected-icon-color: var(--theme-accent-500);
    --mdc-radio-selected-pressed-icon-color: var(--theme-accent-500)
}

.mat-warn .mdc-list-item__start,.mat-warn .mdc-list-item__end {
    --mdc-radio-disabled-selected-icon-color: #000;
    --mdc-radio-disabled-unselected-icon-color: #000;
    --mdc-radio-unselected-hover-icon-color: #212121;
    --mdc-radio-unselected-icon-color: rgba(0, 0, 0, .54);
    --mdc-radio-unselected-pressed-icon-color: rgba(0, 0, 0, .54);
    --mdc-radio-selected-focus-icon-color: #f83d3d;
    --mdc-radio-selected-hover-icon-color: #f83d3d;
    --mdc-radio-selected-icon-color: #f83d3d;
    --mdc-radio-selected-pressed-icon-color: #f83d3d
}

.mat-mdc-list-option {
    --mdc-checkbox-disabled-selected-icon-color: rgba(0, 0, 0, .38);
    --mdc-checkbox-disabled-unselected-icon-color: rgba(0, 0, 0, .38);
    --mdc-checkbox-selected-checkmark-color: #000;
    --mdc-checkbox-selected-focus-icon-color: var(--theme-primary-500);
    --mdc-checkbox-selected-hover-icon-color: var(--theme-primary-500);
    --mdc-checkbox-selected-icon-color: var(--theme-primary-500);
    --mdc-checkbox-selected-pressed-icon-color: var(--theme-primary-500);
    --mdc-checkbox-unselected-focus-icon-color: #212121;
    --mdc-checkbox-unselected-hover-icon-color: #212121;
    --mdc-checkbox-unselected-icon-color: rgba(0, 0, 0, .54);
    --mdc-checkbox-unselected-pressed-icon-color: rgba(0, 0, 0, .54);
    --mdc-checkbox-selected-focus-state-layer-color: var(--theme-primary-500);
    --mdc-checkbox-selected-hover-state-layer-color: var(--theme-primary-500);
    --mdc-checkbox-selected-pressed-state-layer-color: var(--theme-primary-500);
    --mdc-checkbox-unselected-focus-state-layer-color: black;
    --mdc-checkbox-unselected-hover-state-layer-color: black;
    --mdc-checkbox-unselected-pressed-state-layer-color: black
}

.mat-mdc-list-option.mat-accent {
    --mdc-checkbox-disabled-selected-icon-color: rgba(0, 0, 0, .38);
    --mdc-checkbox-disabled-unselected-icon-color: rgba(0, 0, 0, .38);
    --mdc-checkbox-selected-checkmark-color: #000;
    --mdc-checkbox-selected-focus-icon-color: var(--theme-accent-500);
    --mdc-checkbox-selected-hover-icon-color: var(--theme-accent-500);
    --mdc-checkbox-selected-icon-color: var(--theme-accent-500);
    --mdc-checkbox-selected-pressed-icon-color: var(--theme-accent-500);
    --mdc-checkbox-unselected-focus-icon-color: #212121;
    --mdc-checkbox-unselected-hover-icon-color: #212121;
    --mdc-checkbox-unselected-icon-color: rgba(0, 0, 0, .54);
    --mdc-checkbox-unselected-pressed-icon-color: rgba(0, 0, 0, .54);
    --mdc-checkbox-selected-focus-state-layer-color: var(--theme-accent-500);
    --mdc-checkbox-selected-hover-state-layer-color: var(--theme-accent-500);
    --mdc-checkbox-selected-pressed-state-layer-color: var(--theme-accent-500);
    --mdc-checkbox-unselected-focus-state-layer-color: black;
    --mdc-checkbox-unselected-hover-state-layer-color: black;
    --mdc-checkbox-unselected-pressed-state-layer-color: black
}

.mat-mdc-list-option.mat-warn {
    --mdc-checkbox-disabled-selected-icon-color: rgba(0, 0, 0, .38);
    --mdc-checkbox-disabled-unselected-icon-color: rgba(0, 0, 0, .38);
    --mdc-checkbox-selected-checkmark-color: #fff;
    --mdc-checkbox-selected-focus-icon-color: #f83d3d;
    --mdc-checkbox-selected-hover-icon-color: #f83d3d;
    --mdc-checkbox-selected-icon-color: #f83d3d;
    --mdc-checkbox-selected-pressed-icon-color: #f83d3d;
    --mdc-checkbox-unselected-focus-icon-color: #212121;
    --mdc-checkbox-unselected-hover-icon-color: #212121;
    --mdc-checkbox-unselected-icon-color: rgba(0, 0, 0, .54);
    --mdc-checkbox-unselected-pressed-icon-color: rgba(0, 0, 0, .54);
    --mdc-checkbox-selected-focus-state-layer-color: #f83d3d;
    --mdc-checkbox-selected-hover-state-layer-color: #f83d3d;
    --mdc-checkbox-selected-pressed-state-layer-color: #f83d3d;
    --mdc-checkbox-unselected-focus-state-layer-color: black;
    --mdc-checkbox-unselected-hover-state-layer-color: black;
    --mdc-checkbox-unselected-pressed-state-layer-color: black
}

.mat-mdc-list-base.mat-mdc-list-base .mdc-list-item--selected .mdc-list-item__primary-text,.mat-mdc-list-base.mat-mdc-list-base .mdc-list-item--activated .mdc-list-item__primary-text,.mat-mdc-list-base.mat-mdc-list-base .mdc-list-item--selected.mdc-list-item--with-leading-icon .mdc-list-item__start,.mat-mdc-list-base.mat-mdc-list-base .mdc-list-item--activated.mdc-list-item--with-leading-icon .mdc-list-item__start {
    color: var(--theme-primary-500)
}

.mat-mdc-list-base .mdc-list-item--disabled .mdc-list-item__start,.mat-mdc-list-base .mdc-list-item--disabled .mdc-list-item__content,.mat-mdc-list-base .mdc-list-item--disabled .mdc-list-item__end {
    opacity: 1
}

.mat-mdc-list-base {
    --mdc-list-list-item-one-line-container-height: 44px;
    --mdc-list-list-item-two-line-container-height: 60px;
    --mdc-list-list-item-three-line-container-height: 84px
}

.mat-mdc-list-item.mdc-list-item--with-leading-avatar.mdc-list-item--with-one-line,.mat-mdc-list-item.mdc-list-item--with-leading-checkbox.mdc-list-item--with-one-line,.mat-mdc-list-item.mdc-list-item--with-leading-icon.mdc-list-item--with-one-line {
    height: 52px
}

.mat-mdc-list-item.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines,.mat-mdc-list-item.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines,.mat-mdc-list-item.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines {
    height: 68px
}

.mat-mdc-list-base {
    --mdc-list-list-item-label-text-font: Inter;
    --mdc-list-list-item-label-text-line-height: 1;
    --mdc-list-list-item-label-text-size: .875rem;
    --mdc-list-list-item-label-text-tracking: normal;
    --mdc-list-list-item-label-text-weight: 400;
    --mdc-list-list-item-supporting-text-font: Inter;
    --mdc-list-list-item-supporting-text-line-height: 1;
    --mdc-list-list-item-supporting-text-size: .875rem;
    --mdc-list-list-item-supporting-text-tracking: normal;
    --mdc-list-list-item-supporting-text-weight: 500;
    --mdc-list-list-item-trailing-supporting-text-font: Inter;
    --mdc-list-list-item-trailing-supporting-text-line-height: 1;
    --mdc-list-list-item-trailing-supporting-text-size: .875rem;
    --mdc-list-list-item-trailing-supporting-text-tracking: normal;
    --mdc-list-list-item-trailing-supporting-text-weight: 500
}

.mdc-list-group__subheader {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.75rem;
    font-family: Inter;
    letter-spacing: normal
}

html {
    --mat-paginator-container-text-color: rgba(0, 0, 0, .87);
    --mat-paginator-container-background-color: white;
    --mat-paginator-enabled-icon-color: rgba(0, 0, 0, .54);
    --mat-paginator-disabled-icon-color: rgba(0, 0, 0, .12)
}

html {
    --mat-paginator-container-size: 52px
}

.mat-mdc-paginator .mat-mdc-form-field-infix {
    min-height: 40px
}

.mat-mdc-paginator .mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
    top: 20px
}

.mat-mdc-paginator .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
    --mat-mdc-form-field-label-transform: translateY( -26.75px) scale(var(--mat-mdc-form-field-floating-label-scale, .75));
    transform: var(--mat-mdc-form-field-label-transform)
}

.mat-mdc-paginator .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mat-mdc-form-field-infix {
    padding-top: 8px;
    padding-bottom: 8px
}

.mat-mdc-paginator .mat-mdc-text-field-wrapper:not(.mdc-text-field--outlined) .mat-mdc-form-field-infix {
    padding-top: 8px;
    padding-bottom: 8px
}

.mat-mdc-paginator .mdc-text-field--no-label:not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mat-mdc-form-field-infix {
    padding-top: 8px;
    padding-bottom: 8px
}

.mat-mdc-paginator .mat-mdc-text-field-wrapper:not(.mdc-text-field--outlined) .mat-mdc-floating-label {
    display: none
}

html {
    --mat-paginator-container-text-font: Inter;
    --mat-paginator-container-text-line-height: 1;
    --mat-paginator-container-text-size: .875rem;
    --mat-paginator-container-text-tracking: normal;
    --mat-paginator-container-text-weight: 500;
    --mat-paginator-select-trigger-text-size: .875rem
}

.mat-mdc-tab-group,.mat-mdc-tab-nav-bar {
    --mdc-tab-indicator-active-indicator-color: var(--theme-primary-500);
    --mat-tab-header-disabled-ripple-color: rgba(0, 0, 0, .38);
    --mat-tab-header-pagination-icon-color: #000;
    --mat-tab-header-inactive-label-text-color: rgba(0, 0, 0, .6);
    --mat-tab-header-active-label-text-color: var(--theme-primary-500);
    --mat-tab-header-active-ripple-color: var(--theme-primary-500);
    --mat-tab-header-inactive-ripple-color: var(--theme-primary-500);
    --mat-tab-header-inactive-focus-label-text-color: rgba(0, 0, 0, .6);
    --mat-tab-header-inactive-hover-label-text-color: rgba(0, 0, 0, .6);
    --mat-tab-header-active-focus-label-text-color: var(--theme-primary-500);
    --mat-tab-header-active-hover-label-text-color: var(--theme-primary-500);
    --mat-tab-header-active-focus-indicator-color: var(--theme-primary-500);
    --mat-tab-header-active-hover-indicator-color: var(--theme-primary-500)
}

.mat-mdc-tab-group.mat-accent,.mat-mdc-tab-nav-bar.mat-accent {
    --mdc-tab-indicator-active-indicator-color: var(--theme-accent-500);
    --mat-tab-header-disabled-ripple-color: rgba(0, 0, 0, .38);
    --mat-tab-header-pagination-icon-color: #000;
    --mat-tab-header-inactive-label-text-color: rgba(0, 0, 0, .6);
    --mat-tab-header-active-label-text-color: var(--theme-accent-500);
    --mat-tab-header-active-ripple-color: var(--theme-accent-500);
    --mat-tab-header-inactive-ripple-color: var(--theme-accent-500);
    --mat-tab-header-inactive-focus-label-text-color: rgba(0, 0, 0, .6);
    --mat-tab-header-inactive-hover-label-text-color: rgba(0, 0, 0, .6);
    --mat-tab-header-active-focus-label-text-color: var(--theme-accent-500);
    --mat-tab-header-active-hover-label-text-color: var(--theme-accent-500);
    --mat-tab-header-active-focus-indicator-color: var(--theme-accent-500);
    --mat-tab-header-active-hover-indicator-color: var(--theme-accent-500)
}

.mat-mdc-tab-group.mat-warn,.mat-mdc-tab-nav-bar.mat-warn {
    --mdc-tab-indicator-active-indicator-color: #f83d3d;
    --mat-tab-header-disabled-ripple-color: rgba(0, 0, 0, .38);
    --mat-tab-header-pagination-icon-color: #000;
    --mat-tab-header-inactive-label-text-color: rgba(0, 0, 0, .6);
    --mat-tab-header-active-label-text-color: #f83d3d;
    --mat-tab-header-active-ripple-color: #f83d3d;
    --mat-tab-header-inactive-ripple-color: #f83d3d;
    --mat-tab-header-inactive-focus-label-text-color: rgba(0, 0, 0, .6);
    --mat-tab-header-inactive-hover-label-text-color: rgba(0, 0, 0, .6);
    --mat-tab-header-active-focus-label-text-color: #f83d3d;
    --mat-tab-header-active-hover-label-text-color: #f83d3d;
    --mat-tab-header-active-focus-indicator-color: #f83d3d;
    --mat-tab-header-active-hover-indicator-color: #f83d3d
}

.mat-mdc-tab-group.mat-background-primary,.mat-mdc-tab-nav-bar.mat-background-primary {
    --mat-tab-header-with-background-background-color: var(--theme-primary-500);
    --mat-tab-header-with-background-foreground-color: var(--theme-primary-contrast-500)
}

.mat-mdc-tab-group.mat-background-accent,.mat-mdc-tab-nav-bar.mat-background-accent {
    --mat-tab-header-with-background-background-color: var(--theme-accent-500);
    --mat-tab-header-with-background-foreground-color: var(--theme-accent-contrast-500)
}

.mat-mdc-tab-group.mat-background-warn,.mat-mdc-tab-nav-bar.mat-background-warn {
    --mat-tab-header-with-background-background-color: #f83d3d;
    --mat-tab-header-with-background-foreground-color: white
}

.mat-mdc-tab-header {
    --mdc-secondary-navigation-tab-container-height: 44px
}

.mat-mdc-tab-header {
    --mat-tab-header-label-text-font: Inter;
    --mat-tab-header-label-text-size: .875rem;
    --mat-tab-header-label-text-tracking: normal;
    --mat-tab-header-label-text-line-height: 1;
    --mat-tab-header-label-text-weight: 500
}

html {
    --mdc-checkbox-disabled-selected-icon-color: rgba(0, 0, 0, .38);
    --mdc-checkbox-disabled-unselected-icon-color: rgba(0, 0, 0, .38);
    --mdc-checkbox-selected-checkmark-color: #000;
    --mdc-checkbox-selected-focus-icon-color: var(--theme-accent-500);
    --mdc-checkbox-selected-hover-icon-color: var(--theme-accent-500);
    --mdc-checkbox-selected-icon-color: var(--theme-accent-500);
    --mdc-checkbox-selected-pressed-icon-color: var(--theme-accent-500);
    --mdc-checkbox-unselected-focus-icon-color: #212121;
    --mdc-checkbox-unselected-hover-icon-color: #212121;
    --mdc-checkbox-unselected-icon-color: rgba(0, 0, 0, .54);
    --mdc-checkbox-unselected-pressed-icon-color: rgba(0, 0, 0, .54);
    --mdc-checkbox-selected-focus-state-layer-color: var(--theme-accent-500);
    --mdc-checkbox-selected-hover-state-layer-color: var(--theme-accent-500);
    --mdc-checkbox-selected-pressed-state-layer-color: var(--theme-accent-500);
    --mdc-checkbox-unselected-focus-state-layer-color: black;
    --mdc-checkbox-unselected-hover-state-layer-color: black;
    --mdc-checkbox-unselected-pressed-state-layer-color: black
}

.mat-mdc-checkbox.mat-primary {
    --mdc-checkbox-disabled-selected-icon-color: rgba(0, 0, 0, .38);
    --mdc-checkbox-disabled-unselected-icon-color: rgba(0, 0, 0, .38);
    --mdc-checkbox-selected-checkmark-color: #000;
    --mdc-checkbox-selected-focus-icon-color: var(--theme-primary-500);
    --mdc-checkbox-selected-hover-icon-color: var(--theme-primary-500);
    --mdc-checkbox-selected-icon-color: var(--theme-primary-500);
    --mdc-checkbox-selected-pressed-icon-color: var(--theme-primary-500);
    --mdc-checkbox-unselected-focus-icon-color: #212121;
    --mdc-checkbox-unselected-hover-icon-color: #212121;
    --mdc-checkbox-unselected-icon-color: rgba(0, 0, 0, .54);
    --mdc-checkbox-unselected-pressed-icon-color: rgba(0, 0, 0, .54);
    --mdc-checkbox-selected-focus-state-layer-color: var(--theme-primary-500);
    --mdc-checkbox-selected-hover-state-layer-color: var(--theme-primary-500);
    --mdc-checkbox-selected-pressed-state-layer-color: var(--theme-primary-500);
    --mdc-checkbox-unselected-focus-state-layer-color: black;
    --mdc-checkbox-unselected-hover-state-layer-color: black;
    --mdc-checkbox-unselected-pressed-state-layer-color: black
}

.mat-mdc-checkbox.mat-warn {
    --mdc-checkbox-disabled-selected-icon-color: rgba(0, 0, 0, .38);
    --mdc-checkbox-disabled-unselected-icon-color: rgba(0, 0, 0, .38);
    --mdc-checkbox-selected-checkmark-color: #fff;
    --mdc-checkbox-selected-focus-icon-color: #f83d3d;
    --mdc-checkbox-selected-hover-icon-color: #f83d3d;
    --mdc-checkbox-selected-icon-color: #f83d3d;
    --mdc-checkbox-selected-pressed-icon-color: #f83d3d;
    --mdc-checkbox-unselected-focus-icon-color: #212121;
    --mdc-checkbox-unselected-hover-icon-color: #212121;
    --mdc-checkbox-unselected-icon-color: rgba(0, 0, 0, .54);
    --mdc-checkbox-unselected-pressed-icon-color: rgba(0, 0, 0, .54);
    --mdc-checkbox-selected-focus-state-layer-color: #f83d3d;
    --mdc-checkbox-selected-hover-state-layer-color: #f83d3d;
    --mdc-checkbox-selected-pressed-state-layer-color: #f83d3d;
    --mdc-checkbox-unselected-focus-state-layer-color: black;
    --mdc-checkbox-unselected-hover-state-layer-color: black;
    --mdc-checkbox-unselected-pressed-state-layer-color: black
}

.mat-mdc-checkbox .mdc-form-field {
    color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, .87))
}

.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: #00000061
}

html {
    --mdc-checkbox-state-layer-size: 36px
}

.mat-mdc-checkbox .mdc-form-field {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Inter));
    font-size: var(--mdc-typography-body2-font-size, .875rem);
    line-height: var(--mdc-typography-body2-line-height, 1);
    font-weight: var(--mdc-typography-body2-font-weight, 500);
    letter-spacing: var(--mdc-typography-body2-letter-spacing, normal);
    -webkit-text-decoration: var(--mdc-typography-body2-text-decoration, inherit);
    text-decoration: var(--mdc-typography-body2-text-decoration, inherit);
    text-transform: var(--mdc-typography-body2-text-transform, none)
}

.mat-mdc-button.mat-unthemed {
    --mdc-text-button-label-text-color: #000
}

.mat-mdc-button.mat-primary {
    --mdc-text-button-label-text-color: var(--theme-primary-500)
}

.mat-mdc-button.mat-accent {
    --mdc-text-button-label-text-color: var(--theme-accent-500)
}

.mat-mdc-button.mat-warn {
    --mdc-text-button-label-text-color: #f83d3d
}

.mat-mdc-button[disabled][disabled] {
    --mdc-text-button-disabled-label-text-color: rgba(0, 0, 0, .38);
    --mdc-text-button-label-text-color: rgba(0, 0, 0, .38)
}

.mat-mdc-unelevated-button.mat-unthemed {
    --mdc-filled-button-container-color: #fff;
    --mdc-filled-button-label-text-color: #000
}

.mat-mdc-unelevated-button.mat-primary {
    --mdc-filled-button-container-color: var(--theme-primary-500);
    --mdc-filled-button-label-text-color: #000
}

.mat-mdc-unelevated-button.mat-accent {
    --mdc-filled-button-container-color: var(--theme-accent-500);
    --mdc-filled-button-label-text-color: #000
}

.mat-mdc-unelevated-button.mat-warn {
    --mdc-filled-button-container-color: #f83d3d;
    --mdc-filled-button-label-text-color: #fff
}

.mat-mdc-unelevated-button[disabled][disabled] {
    --mdc-filled-button-disabled-container-color: rgba(0, 0, 0, .12);
    --mdc-filled-button-disabled-label-text-color: rgba(0, 0, 0, .38);
    --mdc-filled-button-container-color: rgba(0, 0, 0, .12);
    --mdc-filled-button-label-text-color: rgba(0, 0, 0, .38)
}

.mat-mdc-raised-button.mat-unthemed {
    --mdc-protected-button-container-color: #fff;
    --mdc-protected-button-label-text-color: #000
}

.mat-mdc-raised-button.mat-primary {
    --mdc-protected-button-container-color: var(--theme-primary-500);
    --mdc-protected-button-label-text-color: #000
}

.mat-mdc-raised-button.mat-accent {
    --mdc-protected-button-container-color: var(--theme-accent-500);
    --mdc-protected-button-label-text-color: #000
}

.mat-mdc-raised-button.mat-warn {
    --mdc-protected-button-container-color: #f83d3d;
    --mdc-protected-button-label-text-color: #fff
}

.mat-mdc-raised-button[disabled][disabled] {
    --mdc-protected-button-disabled-container-color: rgba(0, 0, 0, .12);
    --mdc-protected-button-disabled-label-text-color: rgba(0, 0, 0, .38);
    --mdc-protected-button-container-color: rgba(0, 0, 0, .12);
    --mdc-protected-button-label-text-color: rgba(0, 0, 0, .38);
    --mdc-protected-button-container-elevation: 0
}

.mat-mdc-outlined-button {
    --mdc-outlined-button-outline-color: rgba(0, 0, 0, .12)
}

.mat-mdc-outlined-button.mat-unthemed {
    --mdc-outlined-button-label-text-color: #000
}

.mat-mdc-outlined-button.mat-primary {
    --mdc-outlined-button-label-text-color: var(--theme-primary-500)
}

.mat-mdc-outlined-button.mat-accent {
    --mdc-outlined-button-label-text-color: var(--theme-accent-500)
}

.mat-mdc-outlined-button.mat-warn {
    --mdc-outlined-button-label-text-color: #f83d3d
}

.mat-mdc-outlined-button[disabled][disabled] {
    --mdc-outlined-button-label-text-color: rgba(0, 0, 0, .38);
    --mdc-outlined-button-disabled-label-text-color: rgba(0, 0, 0, .38);
    --mdc-outlined-button-outline-color: rgba(0, 0, 0, .12);
    --mdc-outlined-button-disabled-outline-color: rgba(0, 0, 0, .12)
}

.mat-mdc-button,.mat-mdc-outlined-button {
    --mat-mdc-button-persistent-ripple-color: #000;
    --mat-mdc-button-ripple-color: rgba(0, 0, 0, .1)
}

.mat-mdc-button:hover .mat-mdc-button-persistent-ripple:before,.mat-mdc-outlined-button:hover .mat-mdc-button-persistent-ripple:before {
    opacity: .04
}

.mat-mdc-button.cdk-program-focused .mat-mdc-button-persistent-ripple:before,.mat-mdc-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple:before,.mat-mdc-outlined-button.cdk-program-focused .mat-mdc-button-persistent-ripple:before,.mat-mdc-outlined-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple:before {
    opacity: .12
}

.mat-mdc-button:active .mat-mdc-button-persistent-ripple:before,.mat-mdc-outlined-button:active .mat-mdc-button-persistent-ripple:before {
    opacity: .12
}

.mat-mdc-button.mat-primary,.mat-mdc-outlined-button.mat-primary {
    --mat-mdc-button-persistent-ripple-color: var(--theme-primary-500);
    --mat-mdc-button-ripple-color: rgba(var(--theme-primary-500), .1)
}

.mat-mdc-button.mat-accent,.mat-mdc-outlined-button.mat-accent {
    --mat-mdc-button-persistent-ripple-color: var(--theme-accent-500);
    --mat-mdc-button-ripple-color: rgba(var(--theme-accent-500), .1)
}

.mat-mdc-button.mat-warn,.mat-mdc-outlined-button.mat-warn {
    --mat-mdc-button-persistent-ripple-color: #f83d3d;
    --mat-mdc-button-ripple-color: rgba(248, 61, 61, .1)
}

.mat-mdc-raised-button,.mat-mdc-unelevated-button {
    --mat-mdc-button-persistent-ripple-color: #000;
    --mat-mdc-button-ripple-color: rgba(0, 0, 0, .1)
}

.mat-mdc-raised-button:hover .mat-mdc-button-persistent-ripple:before,.mat-mdc-unelevated-button:hover .mat-mdc-button-persistent-ripple:before {
    opacity: .04
}

.mat-mdc-raised-button.cdk-program-focused .mat-mdc-button-persistent-ripple:before,.mat-mdc-raised-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple:before,.mat-mdc-unelevated-button.cdk-program-focused .mat-mdc-button-persistent-ripple:before,.mat-mdc-unelevated-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple:before {
    opacity: .12
}

.mat-mdc-raised-button:active .mat-mdc-button-persistent-ripple:before,.mat-mdc-unelevated-button:active .mat-mdc-button-persistent-ripple:before {
    opacity: .12
}

.mat-mdc-raised-button.mat-primary,.mat-mdc-unelevated-button.mat-primary,.mat-mdc-raised-button.mat-accent,.mat-mdc-unelevated-button.mat-accent {
    --mat-mdc-button-persistent-ripple-color: #000;
    --mat-mdc-button-ripple-color: rgba(0, 0, 0, .1)
}

.mat-mdc-raised-button.mat-warn,.mat-mdc-unelevated-button.mat-warn {
    --mat-mdc-button-persistent-ripple-color: #fff;
    --mat-mdc-button-ripple-color: rgba(255, 255, 255, .1)
}

.mat-mdc-button.mat-mdc-button-base,.mat-mdc-raised-button.mat-mdc-button-base,.mat-mdc-unelevated-button.mat-mdc-button-base,.mat-mdc-outlined-button.mat-mdc-button-base {
    height: 32px;
    margin-top: 0;
    margin-bottom: 0
}

.mat-mdc-button.mat-mdc-button-base .mdc-button__touch,.mat-mdc-raised-button.mat-mdc-button-base .mdc-button__touch,.mat-mdc-unelevated-button.mat-mdc-button-base .mdc-button__touch,.mat-mdc-outlined-button.mat-mdc-button-base .mdc-button__touch {
    height: 100%
}

.mdc-button {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Inter));
    font-size: var(--mdc-typography-button-font-size, .875rem);
    line-height: var(--mdc-typography-button-line-height, 1);
    font-weight: var(--mdc-typography-button-font-weight, 500);
    letter-spacing: var(--mdc-typography-button-letter-spacing, normal);
    -webkit-text-decoration: var(--mdc-typography-button-text-decoration, none);
    text-decoration: var(--mdc-typography-button-text-decoration, none);
    text-transform: var(--mdc-typography-button-text-transform, none)
}

.mat-mdc-icon-button {
    --mdc-icon-button-icon-color: inherit;
    --mat-mdc-button-persistent-ripple-color: #000;
    --mat-mdc-button-ripple-color: rgba(0, 0, 0, .1)
}

.mat-mdc-icon-button:hover .mat-mdc-button-persistent-ripple:before {
    opacity: .04
}

.mat-mdc-icon-button.cdk-program-focused .mat-mdc-button-persistent-ripple:before,.mat-mdc-icon-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple:before {
    opacity: .12
}

.mat-mdc-icon-button:active .mat-mdc-button-persistent-ripple:before {
    opacity: .12
}

.mat-mdc-icon-button.mat-primary {
    --mat-mdc-button-persistent-ripple-color: #6200ee;
    --mat-mdc-button-ripple-color: rgba(98, 0, 238, .1)
}

.mat-mdc-icon-button.mat-accent {
    --mat-mdc-button-persistent-ripple-color: #018786;
    --mat-mdc-button-ripple-color: rgba(1, 135, 134, .1)
}

.mat-mdc-icon-button.mat-warn {
    --mat-mdc-button-persistent-ripple-color: #b00020;
    --mat-mdc-button-ripple-color: rgba(176, 0, 32, .1)
}

.mat-mdc-icon-button.mat-primary {
    --mdc-icon-button-icon-color: var(--theme-primary-500);
    --mat-mdc-button-persistent-ripple-color: var(--theme-primary-500);
    --mat-mdc-button-ripple-color: rgba(var(--theme-primary-500), .1)
}

.mat-mdc-icon-button.mat-accent {
    --mdc-icon-button-icon-color: var(--theme-accent-500);
    --mat-mdc-button-persistent-ripple-color: var(--theme-accent-500);
    --mat-mdc-button-ripple-color: rgba(var(--theme-accent-500), .1)
}

.mat-mdc-icon-button.mat-warn {
    --mdc-icon-button-icon-color: #f83d3d;
    --mat-mdc-button-persistent-ripple-color: #f83d3d;
    --mat-mdc-button-ripple-color: rgba(248, 61, 61, .1)
}

.mat-mdc-icon-button[disabled][disabled] {
    --mdc-icon-button-icon-color: rgba(0, 0, 0, .38);
    --mdc-icon-button-disabled-icon-color: rgba(0, 0, 0, .38)
}

.mat-mdc-icon-button.mat-mdc-button-base {
    --mdc-icon-button-state-layer-size: 44px;
    width: var(--mdc-icon-button-state-layer-size);
    height: var(--mdc-icon-button-state-layer-size);
    padding: 10px
}

.mat-mdc-fab,.mat-mdc-mini-fab {
    --mat-mdc-button-persistent-ripple-color: #000;
    --mat-mdc-button-ripple-color: rgba(0, 0, 0, .1)
}

.mat-mdc-fab:hover .mat-mdc-button-persistent-ripple:before,.mat-mdc-mini-fab:hover .mat-mdc-button-persistent-ripple:before {
    opacity: .04
}

.mat-mdc-fab.cdk-program-focused .mat-mdc-button-persistent-ripple:before,.mat-mdc-fab.cdk-keyboard-focused .mat-mdc-button-persistent-ripple:before,.mat-mdc-mini-fab.cdk-program-focused .mat-mdc-button-persistent-ripple:before,.mat-mdc-mini-fab.cdk-keyboard-focused .mat-mdc-button-persistent-ripple:before {
    opacity: .12
}

.mat-mdc-fab:active .mat-mdc-button-persistent-ripple:before,.mat-mdc-mini-fab:active .mat-mdc-button-persistent-ripple:before {
    opacity: .12
}

.mat-mdc-fab.mat-primary,.mat-mdc-mini-fab.mat-primary,.mat-mdc-fab.mat-accent,.mat-mdc-mini-fab.mat-accent {
    --mat-mdc-button-persistent-ripple-color: #000;
    --mat-mdc-button-ripple-color: rgba(0, 0, 0, .1)
}

.mat-mdc-fab.mat-warn,.mat-mdc-mini-fab.mat-warn {
    --mat-mdc-button-persistent-ripple-color: #fff;
    --mat-mdc-button-ripple-color: rgba(255, 255, 255, .1)
}

.mat-mdc-fab[disabled][disabled],.mat-mdc-mini-fab[disabled][disabled] {
    --mdc-fab-container-color: rgba(0, 0, 0, .12);
    --mdc-fab-icon-color: rgba(0, 0, 0, .38);
    --mat-mdc-fab-color: rgba(0, 0, 0, .38)
}

.mat-mdc-fab.mat-unthemed,.mat-mdc-mini-fab.mat-unthemed {
    --mdc-fab-container-color: white;
    --mdc-fab-icon-color: black;
    --mat-mdc-fab-color: #000
}

.mat-mdc-fab.mat-primary,.mat-mdc-mini-fab.mat-primary {
    --mdc-fab-container-color: var(--theme-primary-500);
    --mdc-fab-icon-color: black;
    --mat-mdc-fab-color: #000
}

.mat-mdc-fab.mat-accent,.mat-mdc-mini-fab.mat-accent {
    --mdc-fab-container-color: var(--theme-accent-500);
    --mdc-fab-icon-color: black;
    --mat-mdc-fab-color: #000
}

.mat-mdc-fab.mat-warn,.mat-mdc-mini-fab.mat-warn {
    --mdc-fab-container-color: #f83d3d;
    --mdc-fab-icon-color: white;
    --mat-mdc-fab-color: #fff
}

.mdc-fab--extended {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Inter));
    font-size: var(--mdc-typography-button-font-size, .875rem);
    line-height: var(--mdc-typography-button-line-height, 1);
    font-weight: var(--mdc-typography-button-font-weight, 500);
    letter-spacing: var(--mdc-typography-button-letter-spacing, normal);
    -webkit-text-decoration: var(--mdc-typography-button-text-decoration, none);
    text-decoration: var(--mdc-typography-button-text-decoration, none);
    text-transform: var(--mdc-typography-button-text-transform, none)
}

.mat-mdc-extended-fab {
    --mdc-extended-fab-label-text-font: Inter;
    --mdc-extended-fab-label-text-size: .875rem;
    --mdc-extended-fab-label-text-tracking: normal;
    --mdc-extended-fab-label-text-weight: 500
}

.mat-mdc-snack-bar-container {
    --mdc-snackbar-container-color: #333333;
    --mdc-snackbar-supporting-text-color: rgba(255, 255, 255, .87);
    --mat-snack-bar-button-color: var(--theme-accent-500)
}

.mat-mdc-snack-bar-container {
    --mdc-snackbar-supporting-text-font: Inter;
    --mdc-snackbar-supporting-text-line-height: 1;
    --mdc-snackbar-supporting-text-size: .875rem;
    --mdc-snackbar-supporting-text-weight: 500
}

html {
    --mat-table-background-color: white;
    --mat-table-header-headline-color: rgba(0, 0, 0, .87);
    --mat-table-row-item-label-text-color: rgba(0, 0, 0, .87);
    --mat-table-row-item-outline-color: rgba(0, 0, 0, .12)
}

html {
    --mat-table-header-container-height: 52px;
    --mat-table-footer-container-height: 48px;
    --mat-table-row-item-container-height: 48px
}

html {
    --mat-table-header-headline-font: Inter;
    --mat-table-header-headline-line-height: 1.5rem;
    --mat-table-header-headline-size: 1.25rem;
    --mat-table-header-headline-weight: 500;
    --mat-table-header-headline-tracking: normal;
    --mat-table-row-item-label-text-font: Inter;
    --mat-table-row-item-label-text-line-height: 1;
    --mat-table-row-item-label-text-size: .875rem;
    --mat-table-row-item-label-text-weight: 500;
    --mat-table-row-item-label-text-tracking: normal;
    --mat-table-footer-supporting-text-font: Inter;
    --mat-table-footer-supporting-text-line-height: 1;
    --mat-table-footer-supporting-text-size: .875rem;
    --mat-table-footer-supporting-text-weight: 500;
    --mat-table-footer-supporting-text-tracking: normal
}

.mat-mdc-progress-spinner {
    --mdc-circular-progress-active-indicator-color: var(--theme-primary-500)
}

.mat-mdc-progress-spinner.mat-accent {
    --mdc-circular-progress-active-indicator-color: var(--theme-accent-500)
}

.mat-mdc-progress-spinner.mat-warn {
    --mdc-circular-progress-active-indicator-color: #f83d3d
}

.mat-badge {
    position: relative
}

.mat-badge.mat-badge {
    overflow: visible
}

.mat-badge-content {
    position: absolute;
    text-align: center;
    display: inline-block;
    border-radius: 50%;
    transition: transform .2s ease-in-out;
    transform: scale(.6);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    pointer-events: none;
    background-color: var(--mat-badge-background-color);
    color: var(--mat-badge-text-color);
    font-family: Roboto,sans-serif;
    font-family: var(--mat-badge-text-font, Roboto, sans-serif);
    font-size: 12px;
    font-size: var(--mat-badge-text-size, 12px);
    font-weight: 600;
    font-weight: var(--mat-badge-text-weight, 600)
}

.cdk-high-contrast-active .mat-badge-content {
    outline: solid 1px;
    border-radius: 0
}

.mat-badge-disabled .mat-badge-content {
    background-color: var(--mat-badge-disabled-state-background-color);
    color: var(--mat-badge-disabled-state-text-color)
}

.mat-badge-hidden .mat-badge-content {
    display: none
}

.ng-animate-disabled .mat-badge-content,.mat-badge-content._mat-animation-noopable {
    transition: none
}

.mat-badge-content.mat-badge-active {
    transform: none
}

.mat-badge-small .mat-badge-content {
    width: 16px;
    height: 16px;
    line-height: 16px;
    font-size: 9px;
    font-size: var(--mat-badge-small-size-text-size, 9px)
}

.mat-badge-small.mat-badge-above .mat-badge-content {
    top: -8px
}

.mat-badge-small.mat-badge-below .mat-badge-content {
    bottom: -8px
}

.mat-badge-small.mat-badge-before .mat-badge-content {
    left: -16px
}

[dir=rtl] .mat-badge-small.mat-badge-before .mat-badge-content {
    left: auto;
    right: -16px
}

.mat-badge-small.mat-badge-after .mat-badge-content {
    right: -16px
}

[dir=rtl] .mat-badge-small.mat-badge-after .mat-badge-content {
    right: auto;
    left: -16px
}

.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {
    left: -8px
}

[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {
    left: auto;
    right: -8px
}

.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {
    right: -8px
}

[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {
    right: auto;
    left: -8px
}

.mat-badge-medium .mat-badge-content {
    width: 22px;
    height: 22px;
    line-height: 22px
}

.mat-badge-medium.mat-badge-above .mat-badge-content {
    top: -11px
}

.mat-badge-medium.mat-badge-below .mat-badge-content {
    bottom: -11px
}

.mat-badge-medium.mat-badge-before .mat-badge-content {
    left: -22px
}

[dir=rtl] .mat-badge-medium.mat-badge-before .mat-badge-content {
    left: auto;
    right: -22px
}

.mat-badge-medium.mat-badge-after .mat-badge-content {
    right: -22px
}

[dir=rtl] .mat-badge-medium.mat-badge-after .mat-badge-content {
    right: auto;
    left: -22px
}

.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {
    left: -11px
}

[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {
    left: auto;
    right: -11px
}

.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {
    right: -11px
}

[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {
    right: auto;
    left: -11px
}

.mat-badge-large .mat-badge-content {
    width: 28px;
    height: 28px;
    line-height: 28px;
    font-size: 24px;
    font-size: var(--mat-badge-large-size-text-size, 24px)
}

.mat-badge-large.mat-badge-above .mat-badge-content {
    top: -14px
}

.mat-badge-large.mat-badge-below .mat-badge-content {
    bottom: -14px
}

.mat-badge-large.mat-badge-before .mat-badge-content {
    left: -28px
}

[dir=rtl] .mat-badge-large.mat-badge-before .mat-badge-content {
    left: auto;
    right: -28px
}

.mat-badge-large.mat-badge-after .mat-badge-content {
    right: -28px
}

[dir=rtl] .mat-badge-large.mat-badge-after .mat-badge-content {
    right: auto;
    left: -28px
}

.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {
    left: -14px
}

[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {
    left: auto;
    right: -14px
}

.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {
    right: -14px
}

[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {
    right: auto;
    left: -14px
}

html {
    --mat-badge-background-color: var(--theme-primary-500);
    --mat-badge-text-color: var(--theme-primary-contrast-500);
    --mat-badge-disabled-state-background-color: #b9b9b9;
    --mat-badge-disabled-state-text-color: rgba(0, 0, 0, .38)
}

.mat-badge-accent {
    --mat-badge-background-color: var(--theme-accent-500);
    --mat-badge-text-color: var(--theme-accent-contrast-500)
}

.mat-badge-warn {
    --mat-badge-background-color: #f83d3d;
    --mat-badge-text-color: white
}

html {
    --mat-badge-text-font: Roboto, sans-serif;
    --mat-badge-text-size: 12px;
    --mat-badge-text-weight: 600;
    --mat-badge-small-size-text-size: 9px;
    --mat-badge-large-size-text-size: 24px
}

html {
    --mat-bottom-sheet-container-text-color: rgba(0, 0, 0, .87);
    --mat-bottom-sheet-container-background-color: white
}

html {
    --mat-bottom-sheet-container-text-font: Inter;
    --mat-bottom-sheet-container-text-line-height: 1;
    --mat-bottom-sheet-container-text-size: .875rem;
    --mat-bottom-sheet-container-text-tracking: normal;
    --mat-bottom-sheet-container-text-weight: 500
}

html {
    --mat-legacy-button-toggle-text-color: rgba(0, 0, 0, .38);
    --mat-legacy-button-toggle-state-layer-color: rgba(0, 0, 0, .12);
    --mat-legacy-button-toggle-selected-state-text-color: rgba(0, 0, 0, .54);
    --mat-legacy-button-toggle-selected-state-background-color: #e0e0e0;
    --mat-legacy-button-toggle-disabled-state-text-color: rgba(0, 0, 0, .26);
    --mat-legacy-button-toggle-disabled-state-background-color: #eeeeee;
    --mat-legacy-button-toggle-disabled-selected-state-background-color: #bdbdbd;
    --mat-standard-button-toggle-text-color: rgba(0, 0, 0, .87);
    --mat-standard-button-toggle-background-color: white;
    --mat-standard-button-toggle-state-layer-color: black;
    --mat-standard-button-toggle-selected-state-background-color: #e0e0e0;
    --mat-standard-button-toggle-selected-state-text-color: rgba(0, 0, 0, .87);
    --mat-standard-button-toggle-disabled-state-text-color: rgba(0, 0, 0, .26);
    --mat-standard-button-toggle-disabled-state-background-color: white;
    --mat-standard-button-toggle-disabled-selected-state-text-color: rgba(0, 0, 0, .87);
    --mat-standard-button-toggle-disabled-selected-state-background-color: #bdbdbd;
    --mat-standard-button-toggle-divider-color: #e0e0e0
}

html {
    --mat-standard-button-toggle-height: 44px
}

html {
    --mat-legacy-button-toggle-text-font: Roboto, sans-serif;
    --mat-standard-button-toggle-text-font: Roboto, sans-serif
}

html {
    --mat-datepicker-calendar-date-selected-state-text-color: var(--theme-primary-contrast-500);
    --mat-datepicker-calendar-date-selected-state-background-color: var(--theme-primary-500);
    --mat-datepicker-calendar-date-selected-disabled-state-background-color: rgba(0, 0, 0, .26);
    --mat-datepicker-calendar-date-today-selected-state-outline-color: var(--theme-primary-contrast-500);
    --mat-datepicker-calendar-date-focus-state-background-color: var(--theme-primary-500);
    --mat-datepicker-calendar-date-hover-state-background-color: var(--theme-primary-500);
    --mat-datepicker-toggle-active-state-icon-color: var(--theme-primary-500);
    --mat-datepicker-calendar-date-in-range-state-background-color: rgba(var(--theme-primary-500), .2);
    --mat-datepicker-calendar-date-in-comparison-range-state-background-color: rgba(249, 171, 0, .2);
    --mat-datepicker-calendar-date-in-overlap-range-state-background-color: #a8dab5;
    --mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color: #46a35e;
    --mat-datepicker-toggle-icon-color: rgba(0, 0, 0, .54);
    --mat-datepicker-calendar-body-label-text-color: rgba(0, 0, 0, .54);
    --mat-datepicker-calendar-period-button-icon-color: rgba(0, 0, 0, .54);
    --mat-datepicker-calendar-navigation-button-icon-color: rgba(0, 0, 0, .54);
    --mat-datepicker-calendar-header-divider-color: rgba(0, 0, 0, .12);
    --mat-datepicker-calendar-header-text-color: rgba(0, 0, 0, .54);
    --mat-datepicker-calendar-date-today-outline-color: rgba(0, 0, 0, .38);
    --mat-datepicker-calendar-date-today-disabled-state-outline-color: rgba(0, 0, 0, .18);
    --mat-datepicker-calendar-date-text-color: rgba(0, 0, 0, .87);
    --mat-datepicker-calendar-date-outline-color: transparent;
    --mat-datepicker-calendar-date-disabled-state-text-color: rgba(0, 0, 0, .38);
    --mat-datepicker-calendar-date-preview-state-outline-color: rgba(0, 0, 0, .24);
    --mat-datepicker-range-input-separator-color: rgba(0, 0, 0, .87);
    --mat-datepicker-range-input-disabled-state-separator-color: rgba(0, 0, 0, .38);
    --mat-datepicker-range-input-disabled-state-text-color: rgba(0, 0, 0, .38);
    --mat-datepicker-calendar-container-background-color: white;
    --mat-datepicker-calendar-container-text-color: rgba(0, 0, 0, .87)
}

.mat-datepicker-content.mat-accent {
    --mat-datepicker-calendar-date-selected-state-text-color: var(--theme-accent-contrast-500);
    --mat-datepicker-calendar-date-selected-state-background-color: var(--theme-accent-500);
    --mat-datepicker-calendar-date-selected-disabled-state-background-color: rgba(0, 0, 0, .26);
    --mat-datepicker-calendar-date-today-selected-state-outline-color: var(--theme-accent-contrast-500);
    --mat-datepicker-calendar-date-focus-state-background-color: var(--theme-accent-500);
    --mat-datepicker-calendar-date-hover-state-background-color: var(--theme-accent-500);
    --mat-datepicker-calendar-date-in-range-state-background-color: rgba(var(--theme-accent-500), .2);
    --mat-datepicker-calendar-date-in-comparison-range-state-background-color: rgba(249, 171, 0, .2);
    --mat-datepicker-calendar-date-in-overlap-range-state-background-color: #a8dab5;
    --mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color: #46a35e
}

.mat-datepicker-content.mat-warn {
    --mat-datepicker-calendar-date-selected-state-text-color: white;
    --mat-datepicker-calendar-date-selected-state-background-color: #f83d3d;
    --mat-datepicker-calendar-date-selected-disabled-state-background-color: rgba(248, 61, 61, .4);
    --mat-datepicker-calendar-date-today-selected-state-outline-color: white;
    --mat-datepicker-calendar-date-focus-state-background-color: rgba(248, 61, 61, .3);
    --mat-datepicker-calendar-date-hover-state-background-color: rgba(248, 61, 61, .3);
    --mat-datepicker-calendar-date-in-range-state-background-color: rgba(248, 61, 61, .2);
    --mat-datepicker-calendar-date-in-comparison-range-state-background-color: rgba(249, 171, 0, .2);
    --mat-datepicker-calendar-date-in-overlap-range-state-background-color: #a8dab5;
    --mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color: #46a35e
}

.mat-datepicker-toggle-active.mat-accent {
    --mat-datepicker-toggle-active-state-icon-color: var(--theme-accent-500)
}

.mat-datepicker-toggle-active.mat-warn {
    --mat-datepicker-toggle-active-state-icon-color: #f83d3d
}

.mat-calendar-controls .mat-mdc-icon-button.mat-mdc-button-base {
    --mdc-icon-button-state-layer-size: 40px;
    width: var(--mdc-icon-button-state-layer-size);
    height: var(--mdc-icon-button-state-layer-size);
    padding: 8px
}

html {
    --mat-datepicker-calendar-text-font: Roboto, sans-serif;
    --mat-datepicker-calendar-text-size: 13px;
    --mat-datepicker-calendar-body-label-text-size: .875rem;
    --mat-datepicker-calendar-body-label-text-weight: 500;
    --mat-datepicker-calendar-period-button-text-size: .875rem;
    --mat-datepicker-calendar-period-button-text-weight: 500;
    --mat-datepicker-calendar-header-text-size: 11px;
    --mat-datepicker-calendar-header-text-weight: 500
}

html {
    --mat-divider-color: rgba(0, 0, 0, .12)
}

html {
    --mat-expansion-container-background-color: white;
    --mat-expansion-container-text-color: rgba(0, 0, 0, .87);
    --mat-expansion-actions-divider-color: rgba(0, 0, 0, .12);
    --mat-expansion-header-hover-state-layer-color: rgba(0, 0, 0, .04);
    --mat-expansion-header-focus-state-layer-color: rgba(0, 0, 0, .04);
    --mat-expansion-header-disabled-state-text-color: rgba(0, 0, 0, .26);
    --mat-expansion-header-text-color: rgba(0, 0, 0, .87);
    --mat-expansion-header-description-color: rgba(0, 0, 0, .54);
    --mat-expansion-header-indicator-color: rgba(0, 0, 0, .54)
}

html {
    --mat-expansion-header-collapsed-state-height: 44px;
    --mat-expansion-header-expanded-state-height: 60px
}

html {
    --mat-expansion-header-text-font: Inter;
    --mat-expansion-header-text-size: 1.25rem;
    --mat-expansion-header-text-weight: 500;
    --mat-expansion-header-text-line-height: inherit;
    --mat-expansion-header-text-tracking: inherit;
    --mat-expansion-container-text-font: Inter;
    --mat-expansion-container-text-line-height: 1;
    --mat-expansion-container-text-size: .875rem;
    --mat-expansion-container-text-tracking: normal;
    --mat-expansion-container-text-weight: 500
}

html {
    --mat-grid-list-tile-header-primary-text-size: .875rem;
    --mat-grid-list-tile-header-secondary-text-size: .875rem;
    --mat-grid-list-tile-footer-primary-text-size: .875rem;
    --mat-grid-list-tile-footer-secondary-text-size: .875rem
}

html {
    --mat-icon-color: inherit
}

.mat-icon.mat-primary {
    --mat-icon-color: var(--theme-primary-500)
}

.mat-icon.mat-accent {
    --mat-icon-color: var(--theme-accent-500)
}

.mat-icon.mat-warn {
    --mat-icon-color: #f83d3d
}

html {
    --mat-sidenav-container-divider-color: rgba(0, 0, 0, .12);
    --mat-sidenav-container-background-color: white;
    --mat-sidenav-container-text-color: rgba(0, 0, 0, .87);
    --mat-sidenav-content-background-color: #fafafa;
    --mat-sidenav-content-text-color: rgba(0, 0, 0, .87);
    --mat-sidenav-scrim-color: rgba(0, 0, 0, .6)
}

html {
    --mat-stepper-header-icon-foreground-color: var(--theme-primary-contrast-500);
    --mat-stepper-header-selected-state-icon-background-color: var(--theme-primary-500);
    --mat-stepper-header-selected-state-icon-foreground-color: var(--theme-primary-contrast-500);
    --mat-stepper-header-done-state-icon-background-color: var(--theme-primary-500);
    --mat-stepper-header-done-state-icon-foreground-color: var(--theme-primary-contrast-500);
    --mat-stepper-header-edit-state-icon-background-color: var(--theme-primary-500);
    --mat-stepper-header-edit-state-icon-foreground-color: var(--theme-primary-contrast-500);
    --mat-stepper-container-color: white;
    --mat-stepper-line-color: rgba(0, 0, 0, .12);
    --mat-stepper-header-hover-state-layer-color: rgba(0, 0, 0, .04);
    --mat-stepper-header-focus-state-layer-color: rgba(0, 0, 0, .04);
    --mat-stepper-header-label-text-color: rgba(0, 0, 0, .54);
    --mat-stepper-header-optional-label-text-color: rgba(0, 0, 0, .54);
    --mat-stepper-header-selected-state-label-text-color: rgba(0, 0, 0, .87);
    --mat-stepper-header-error-state-label-text-color: #f83d3d;
    --mat-stepper-header-icon-background-color: rgba(0, 0, 0, .54);
    --mat-stepper-header-error-state-icon-foreground-color: #f83d3d;
    --mat-stepper-header-error-state-icon-background-color: transparent
}

html .mat-step-header.mat-accent {
    --mat-stepper-header-icon-foreground-color: var(--theme-accent-contrast-500);
    --mat-stepper-header-selected-state-icon-background-color: var(--theme-accent-500);
    --mat-stepper-header-selected-state-icon-foreground-color: var(--theme-accent-contrast-500);
    --mat-stepper-header-done-state-icon-background-color: var(--theme-accent-500);
    --mat-stepper-header-done-state-icon-foreground-color: var(--theme-accent-contrast-500);
    --mat-stepper-header-edit-state-icon-background-color: var(--theme-accent-500);
    --mat-stepper-header-edit-state-icon-foreground-color: var(--theme-accent-contrast-500)
}

html .mat-step-header.mat-warn {
    --mat-stepper-header-icon-foreground-color: white;
    --mat-stepper-header-selected-state-icon-background-color: #f83d3d;
    --mat-stepper-header-selected-state-icon-foreground-color: white;
    --mat-stepper-header-done-state-icon-background-color: #f83d3d;
    --mat-stepper-header-done-state-icon-foreground-color: white;
    --mat-stepper-header-edit-state-icon-background-color: #f83d3d;
    --mat-stepper-header-edit-state-icon-foreground-color: white
}

html {
    --mat-stepper-header-height: 68px
}

html {
    --mat-stepper-container-text-font: Roboto, sans-serif;
    --mat-stepper-header-label-text-font: Inter;
    --mat-stepper-header-label-text-size: .875rem;
    --mat-stepper-header-label-text-weight: 500;
    --mat-stepper-header-error-state-label-text-size: .875rem;
    --mat-stepper-header-selected-state-label-text-size: .875rem;
    --mat-stepper-header-selected-state-label-text-weight: 400
}

.mat-sort-header-arrow {
    color: #757575
}

html {
    --mat-toolbar-container-background-color: whitesmoke;
    --mat-toolbar-container-text-color: rgba(0, 0, 0, .87)
}

.mat-toolbar.mat-primary {
    --mat-toolbar-container-background-color: var(--theme-primary-500);
    --mat-toolbar-container-text-color: var(--theme-primary-contrast-500)
}

.mat-toolbar.mat-accent {
    --mat-toolbar-container-background-color: var(--theme-accent-500);
    --mat-toolbar-container-text-color: var(--theme-accent-contrast-500)
}

.mat-toolbar.mat-warn {
    --mat-toolbar-container-background-color: #f83d3d;
    --mat-toolbar-container-text-color: white
}

html {
    --mat-toolbar-standard-height: 60px;
    --mat-toolbar-mobile-height: 52px
}

html {
    --mat-toolbar-title-text-font: Roboto, sans-serif;
    --mat-toolbar-title-text-line-height: 32px;
    --mat-toolbar-title-text-size: 24px;
    --mat-toolbar-title-text-tracking: normal;
    --mat-toolbar-title-text-weight: 400
}

.mat-tree {
    background: white
}

.mat-tree-node,.mat-nested-tree-node {
    color: #000000de
}

.mat-tree-node {
    min-height: 44px
}

.mat-tree {
    font-family: Roboto,sans-serif
}

.mat-tree-node,.mat-nested-tree-node {
    font-weight: 500;
    font-size: .875rem
}

.mdc-tooltip__surface {
    background-color: #fff!important;
    color: #1e1e1e!important;
    box-shadow: 0 1px 2px -1px #0003,0 2px 2.5px #00000024,0 1px 5px #0000001f
}

* {
    box-sizing: border-box;
    font-family: Inter,Helvetica Neue,"Emoji",sans-serif
}

html,body {
    height: 100%;
    max-height: 1920px;
    margin: 0;
    font-size: .875rem;
    color: #1e1e1e
}

body {
    margin: 0;
    overflow: hidden;
    background-color: #efefef
}

a,a:hover,a:active {
    outline: none!important;
    text-decoration: none!important
}

svg.leader-line {
    stroke-linejoin: round
}

fa-icon {
    line-height: 1
}

.move-cursor {
    cursor: move
}

.hand-cursor {
    cursor: url(https://statics.atenderbem.com/assets/images/openhand.cur)
}

.spinner {
    width: 70px;
    height: 18px;
    margin: -35px 0 0 -9px;
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center
}

.spinner>div {
    width: 18px;
    height: 18px;
    background-color: #333;
    border-radius: 100%;
    display: inline-block;
    animation: bouncedelay 1.4s infinite ease-in-out;
    animation-fill-mode: both
}

.spinner .bounce1 {
    animation-delay: -.32s
}

.spinner .bounce2 {
    animation-delay: -.16s
}

@keyframes bouncedelay {
    0%,80%,to {
        transform: scale(0);
        -webkit-transform: scale(0)
    }

    40% {
        transform: scale(1);
        -webkit-transform: scale(1)
    }
}

.dx-slider-bar {
    margin: 14px 0
}

.remove-button {
    opacity: 0;
    transition: opacity .3s ease-in-out,background-color .2s ease-in-out;
    cursor: pointer;
    font-size: 110%;
    border-radius: 4px;
    color: #8b0007;
    top: 49px;
    right: 50px;
    position: absolute;
    width: 28px;
    min-width: 28px;
    height: 28px;
    min-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center
}

.remove-button:hover {
    background-color: #ff501e33
}

.widget-highlight {
    border: 2px solid #ff784b!important
}

.edit-button {
    opacity: 0;
    transition: opacity .3s ease-in-out;
    cursor: pointer;
    font-size: 8px;
    top: -20px;
    color: #8e8e8e;
    position: absolute;
    right: 0;
    min-width: 18px;
    width: 18px;
    min-height: 18px;
    height: 18px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center
}

.clone-button {
    opacity: 0;
    transition: opacity .3s ease-in-out;
    cursor: pointer;
    font-size: 8px;
    top: -20px;
    color: #8e8e8e;
    position: absolute;
    right: 20px;
    min-width: 18px;
    width: 18px;
    min-height: 18px;
    height: 18px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center
}

.info-button {
    opacity: 0;
    transition: opacity .3s ease-in-out;
    cursor: pointer;
    font-size: 8px;
    top: -20px;
    color: #8e8e8e;
    position: absolute;
    right: 40px;
    min-width: 18px;
    width: 18px;
    min-height: 18px;
    height: 18px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center
}

.error-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #8b0007;
    margin-left: 6px;
    font-size: 16px
}

.transfer-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #29bdff;
    margin-left: 6px;
    font-size: 16px
}

.edit-button:hover,.clone-button:hover,.info-button:hover {
    background-color: #d2d2d2
}

.connector-base {
    width: 1px;
    position: relative;
    flex-shrink: 0
}

.connector {
    right: -18px;
    top: 11px;
    color: #b9b9b9;
    position: absolute;
    z-index: 156
}

.red-connector {
    color: #8b0007
}

.blue-connector {
    color: #1458ea
}

.grip {
    width: 24px;
    min-width: 24px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #8e8e8e;
    cursor: move;
    font-size: 16px
}

.remove-connector {
    opacity: 0;
    transition: opacity .3s ease-in-out;
    z-index: 155;
    color: #fff;
    background-color: #ff3b3b;
    font-size: 8px;
    border-radius: 50%;
    width: 15px;
    min-width: 15px;
    height: 15px;
    min-height: 15px;
    display: flex;
    align-items: center;
    justify-content: center
}

.remove-connector:hover {
    background-color: #8b0007
}

.issue-signal {
    color: #ff784b;
    font-size: 70%;
    top: 0;
    right: 0;
    position: absolute;
    width: 27px;
    height: 27px;
    display: flex;
    align-items: center;
    justify-content: center
}

.danger-signal {
    color: #ff3b3b;
    font-size: 100%;
    top: 0;
    right: 0;
    position: absolute;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center
}

.reason-text {
    margin-top: 3px;
    padding: 1px;
    font-size: 65%;
    border-radius: 2px;
    width: 100%;
    overflow: hidden
}

.message-widget-base {
    width: 128px;
    height: 48px;
    min-height: 48px;
    border-radius: 4px;
    border: 1px solid #d2d2d2;
    background-color: #fff;
    display: flex;
    padding: 4px 10px;
    position: absolute;
    z-index: 15
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: #555;
    margin-left: 6px;
    line-height: 1;
    font-size: 10px;
    font-weight: 500;
    flex-grow: 1;
    flex-shrink: 1;
    overflow: hidden
}

.add-button {
    right: -16px;
    top: 12px;
    color: #1c1c1c;
    position: absolute;
    z-index: 156;
    cursor: pointer
}

.add-button:hover {
    color: #080808
}

.dxc-tooltip {
    z-index: 1000
}

.ck-editor__editable_inline {
    min-height: 200px
}

.cdk-overlay-pane {
    max-width: 100vw!important
}

.swagger-ui .info .title small pre {
    background-color: inherit;
    border: 0
}

.mat-bottom-sheet-container {
    min-width: auto!important
}

.mat-tab-body-wrapper {
    flex-grow: 1
}

.dx-toolbar-items-container {
    margin-bottom: 10px
}

.leader-line {
    z-index: 1;
    position: fixed!important
}

.simple-notification.success {
    background: #06c270!important
}

.simple-notification.success .sn-progress-loader span {
    background: #00752b!important
}

.simple-notification.error {
    background: #ff3b3b!important
}

.simple-notification.error .sn-progress-loader span {
    background: #8b0007!important
}

.simple-notification.info {
    background: #29bdff!important
}

.simple-notification.info .sn-progress-loader span {
    background: #1458ea!important
}

.simple-notification.warn {
    background: #ff784b!important;
    color: #fff!important
}

.simple-notification.warn .sn-progress-loader span {
    background: #c63100!important
}

.simple-notification.warn div .sn-content,.simple-notification.warn div .sn-html,.simple-notification.warn div .sn-title {
    color: #fff!important
}

.simple-notification.alert {
    background: #ffce3a!important
}

.simple-notification.alert .sn-progress-loader span {
    background: #ce9b00!important
}

.simple-notification {
    border-radius: 8px;
    overflow: hidden
}

.mat-mdc-tab-body-wrapper {
    flex-grow: 1
}

.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
    line-height: 3
}

.mat-button-toggle-checked {
    background-color: var(--primary-bg-color)!important;
    color: var(--primary-color)!important
}

.cdk-overlay-container:has(div.higherDialogBackdrop) {
    z-index: 1005
}

.mat-horizontal-stepper-header {
    pointer-events: none!important
}

.emoji-mart .emoji-mart-emoji {
    padding: 8px 4px;
    cursor: pointer
}

.emoji-mart-emoji>span {
    line-height: 1;
    font-size: 22px!important;
    width: auto!important;
    height: auto!important;
    cursor: pointer!important
}

.mat-calendar-arrow {
    fill: #0000008a
}

.mat-datepicker-toggle,.mat-datepicker-content .mat-calendar-next-button,.mat-datepicker-content .mat-calendar-previous-button {
    color: #0000008a
}

.mat-calendar-table-header-divider:after {
    background: rgba(0,0,0,.12)
}

.mat-calendar-table-header,.mat-calendar-body-label {
    color: #0000008a
}

.mat-calendar-body-cell-content,.mat-date-range-input-separator {
    color: #000000de;
    border-color: transparent
}

.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    color: #00000061
}

.mat-form-field-disabled .mat-date-range-input-separator {
    color: #00000061
}

.mat-calendar-body-in-preview {
    color: #0000003d
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    border-color: #00000061
}

.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    border-color: #0000002e
}

.mat-calendar-body-in-range:before {
    background: var(--theme-primary-500)
}

.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range:before {
    background: rgba(249,171,0,.2)
}

.mat-calendar-body-comparison-bridge-start:before,[dir=rtl] .mat-calendar-body-comparison-bridge-end:before {
    background: linear-gradient(to right,var(--theme-primary-500) 50%,rgba(249,171,0,.2) 50%)
}

.mat-calendar-body-comparison-bridge-end:before,[dir=rtl] .mat-calendar-body-comparison-bridge-start:before {
    background: linear-gradient(to left,var(--theme-primary-500) 50%,rgba(249,171,0,.2) 50%)
}

.mat-calendar-body-in-range>.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range:after {
    background: #a8dab5
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,.mat-calendar-body-in-comparison-range>.mat-calendar-body-selected {
    background: #46a35e
}

.mat-calendar-body-selected {
    background-color: var(--theme-primary-500);
    color: var(--theme-primary-contrast-500)
}

.mat-calendar-body-disabled>.mat-calendar-body-selected {
    opacity: .2
}

.mat-calendar-body-today.mat-calendar-body-selected {
    box-shadow: inset 0 0 0 1px var(--theme-primary-contrast-500)
}

.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--theme-primary-500)
}

@media (hover: hover) {
    .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
        background-color:var(--theme-primary-500)
    }
}

.mat-datepicker-content {
    box-shadow: 0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f;
    background-color: #fff;
    color: #000000de
}

.mat-datepicker-content.mat-accent .mat-calendar-body-in-range:before {
    background: var(--theme-accent-500)
}

.mat-datepicker-content.mat-accent .mat-calendar-body-comparison-identical,.mat-datepicker-content.mat-accent .mat-calendar-body-in-comparison-range:before {
    background: rgba(249,171,0,.2)
}

.mat-datepicker-content.mat-accent .mat-calendar-body-comparison-bridge-start:before,.mat-datepicker-content.mat-accent [dir=rtl] .mat-calendar-body-comparison-bridge-end:before {
    background: linear-gradient(to right,var(--theme-accent-500) 50%,rgba(249,171,0,.2) 50%)
}

.mat-datepicker-content.mat-accent .mat-calendar-body-comparison-bridge-end:before,.mat-datepicker-content.mat-accent [dir=rtl] .mat-calendar-body-comparison-bridge-start:before {
    background: linear-gradient(to left,var(--theme-accent-500) 50%,rgba(249,171,0,.2) 50%)
}

.mat-datepicker-content.mat-accent .mat-calendar-body-in-range>.mat-calendar-body-comparison-identical,.mat-datepicker-content.mat-accent .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range:after {
    background: #a8dab5
}

.mat-datepicker-content.mat-accent .mat-calendar-body-comparison-identical.mat-calendar-body-selected,.mat-datepicker-content.mat-accent .mat-calendar-body-in-comparison-range>.mat-calendar-body-selected {
    background: #46a35e
}

.mat-datepicker-content.mat-accent .mat-calendar-body-selected {
    background-color: var(--theme-accent-500);
    color: var(--theme-accent-contrast-500)
}

.mat-datepicker-content.mat-accent .mat-calendar-body-disabled>.mat-calendar-body-selected {
    opacity: .2
}

.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected {
    box-shadow: inset 0 0 0 1px var(--theme-accent-contrast-500)
}

.mat-datepicker-content.mat-accent .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),.mat-datepicker-content.mat-accent .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--theme-accent-500)
}

@media (hover: hover) {
    .mat-datepicker-content.mat-accent .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
        background-color:var(--theme-accent-500)
    }
}

.mat-datepicker-content.mat-warn .mat-calendar-body-in-range:before {
    background: rgba(248,61,61,.2)
}

.mat-datepicker-content.mat-warn .mat-calendar-body-comparison-identical,.mat-datepicker-content.mat-warn .mat-calendar-body-in-comparison-range:before {
    background: rgba(249,171,0,.2)
}

.mat-datepicker-content.mat-warn .mat-calendar-body-comparison-bridge-start:before,.mat-datepicker-content.mat-warn [dir=rtl] .mat-calendar-body-comparison-bridge-end:before {
    background: linear-gradient(to right,rgba(248,61,61,.2) 50%,rgba(249,171,0,.2) 50%)
}

.mat-datepicker-content.mat-warn .mat-calendar-body-comparison-bridge-end:before,.mat-datepicker-content.mat-warn [dir=rtl] .mat-calendar-body-comparison-bridge-start:before {
    background: linear-gradient(to left,rgba(248,61,61,.2) 50%,rgba(249,171,0,.2) 50%)
}

.mat-datepicker-content.mat-warn .mat-calendar-body-in-range>.mat-calendar-body-comparison-identical,.mat-datepicker-content.mat-warn .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range:after {
    background: #a8dab5
}

.mat-datepicker-content.mat-warn .mat-calendar-body-comparison-identical.mat-calendar-body-selected,.mat-datepicker-content.mat-warn .mat-calendar-body-in-comparison-range>.mat-calendar-body-selected {
    background: #46a35e
}

.mat-datepicker-content.mat-warn .mat-calendar-body-selected {
    background-color: #f83d3d;
    color: #fff
}

.mat-datepicker-content.mat-warn .mat-calendar-body-disabled>.mat-calendar-body-selected {
    background-color: #f83d3d66
}

.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected {
    box-shadow: inset 0 0 0 1px #fff
}

.mat-datepicker-content.mat-warn .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),.mat-datepicker-content.mat-warn .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: #f83d3d4d
}

@media (hover: hover) {
    .mat-datepicker-content.mat-warn .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
        background-color:#f83d3d4d
    }
}

.mat-datepicker-content-touch {
    box-shadow: 0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f
}

.mat-datepicker-toggle-active {
    color: var(--theme-primary-500)
}

.mat-datepicker-toggle-active.mat-accent {
    color: var(--theme-accent-500)
}

.mat-datepicker-toggle-active.mat-warn {
    color: #f83d3d
}

.mat-date-range-input-inner[disabled] {
    color: #00000061
}

.mat-calendar-controls .mat-mdc-icon-button.mat-mdc-button-base {
    width: 40px;
    height: 40px;
    padding: 8px
}

.mat-calendar-controls .mat-mdc-icon-button.mat-mdc-button-base .mdc-icon-button__focus-ring {
    max-height: 40px;
    max-width: 40px
}

.mat-calendar-controls .mat-mdc-icon-button.mat-mdc-button-base.mdc-icon-button--reduced-size .mdc-icon-button__ripple {
    width: 40px;
    height: 40px;
    margin: 0
}

.mat-calendar-controls .mat-mdc-icon-button.mat-mdc-button-base.mdc-icon-button--reduced-size .mdc-icon-button__focus-ring {
    max-height: 40px;
    max-width: 40px
}

.mat-calendar-controls .mat-mdc-icon-button.mat-mdc-button-base .mdc-icon-button__touch {
    position: absolute;
    top: 50%;
    height: 40px;
    left: 50%;
    width: 40px;
    transform: translate(-50%,-50%)
}

.mat-calendar-controls .mat-mdc-icon-button.mat-mdc-button-base .mat-mdc-button-touch-target {
    display: none
}

.mat-calendar {
    font-family: Roboto,sans-serif
}

.mat-calendar-body {
    font-size: 13px
}

.mat-calendar-body-label,.mat-calendar-period-button {
    font-size: .875rem;
    font-weight: 500
}

.mat-calendar-table-header th {
    font-size: 11px;
    font-weight: 500
}

.dx-datagrid-rowsview .dx-row>td {
    padding: 4px 8px!important
}

.dx-datagrid-headers .dx-header-row>td {
    padding: 6px 8px!important
}

.dx-datagrid .dx-row {
    min-height: 32px!important
}

.dx-datagrid-rowsview .dx-data-row {
    height: 32px
}

.dx-datagrid-headers .dx-header-row {
    height: 36px
}

.dx-grid-compact .dx-datagrid-rowsview .dx-row>td {
    padding: 2px 6px!important
}

.dx-grid-compact .dx-datagrid .dx-row {
    min-height: 28px!important
}

.dx-grid-compact .dx-datagrid-rowsview .dx-data-row {
    height: 28px
}
