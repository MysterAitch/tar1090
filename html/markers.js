// -*- mode: javascript; indent-tabs-mode: nil; c-basic-offset: 8 -*-
"use strict";


// FA icons
let shapes = {
    'airliner': {
        viewBox:'-3.5 -3 32 32',
        w: 32,
        h: 32,
        path: 'M12.51,25.75c-.26,0-.74-.71-.86-1.41l-3.33.86L8,25.29l.08-1.41.11-.07c1.13-.68,2.68-1.64,3.2-2-.37-1.06-.51-3.92-.43-8.52v0L8,13.31C5.37,14.12,1.2,15.39,1,15.5a.5.5,0,0,1-.21,0,.52.52,0,0,1-.49-.45,1,1,0,0,1,.52-1l1.74-.91c1.36-.71,3.22-1.69,4.66-2.43a4,4,0,0,1,0-.52c0-.69,0-1,0-1.14l.25-.13H7.16A1.07,1.07,0,0,1,8.24,7.73,1.12,1.12,0,0,1,9.06,8a1.46,1.46,0,0,1,.26.87L9.08,9h.25c0,.14,0,.31,0,.58l1.52-.84c0-1.48,0-7.06,1.1-8.25a.74.74,0,0,1,1.13,0c1.15,1.19,1.13,6.78,1.1,8.25l1.52.84c0-.32,0-.48,0-.58l.25-.13H15.7A1.46,1.46,0,0,1,16,8a1.11,1.11,0,0,1,.82-.28,1.06,1.06,0,0,1,1.08,1.16V9c0,.19,0,.48,0,1.17a4,4,0,0,1,0,.52c1.75.9,4.4,2.29,5.67,3l.73.38a.9.9,0,0,1,.5,1,.55.55,0,0,1-.5.47h0l-.11,0c-.28-.11-4.81-1.49-7.16-2.2H14.06v0c.09,4.6-.06,7.46-.43,8.52.52.33,2.07,1.29,3.2,2l.11.07L17,25.29l-.33-.09-3.33-.86c-.12.7-.6,1.41-.86,1.41h0Z',
    },
    'balloon': {
        w: 9,
        h: 13,
        noRotate: true,
        viewBox: '0 0 9 13',
        path: 'M3.56,12.75a.49.49,0,0,1-.46-.34L2.63,11a.51.51,0,0,1,.07-.44l.1-.1-2-3.68a.48.48,0,0,1-.05-.17,4.39,4.39,0,0,1-.48-2A4.29,4.29,0,0,1,4.5.25,4.29,4.29,0,0,1,8.75,4.58a4.39,4.39,0,0,1-.48,2,.45.45,0,0,1-.05.17l-2,3.68a.44.44,0,0,1,.1.1.51.51,0,0,1,.07.45L5.9,12.41a.49.49,0,0,1-.46.34Zm1.6-2.43L6.1,8.59A4.22,4.22,0,0,1,5,8.88v1.44ZM4,10.32V8.88A4.22,4.22,0,0,1,2.9,8.59l.94,1.73Z',
    },
    'cessna': {
        w: 32,
        h: 32,
        viewBox: '-7.35 -8 32 32',
        path: 'M8.51,12.75c-.17,0-2-.27-2.56-.35A.41.41,0,0,1,5.6,12V10.87a.41.41,0,0,1,.32-.4l1.81-.37L7.36,6.64H4.75L.6,6a.41.41,0,0,1-.35-.41V4a.41.41,0,0,1,.38-.41l4.09-.28h2.6v-.4l.25,0-.24-.08c0-.21.1-.76.12-1.06A.9.9,0,0,1,8,.94L8.12.54A.41.41,0,0,1,8.5.25a.4.4,0,0,1,.39.29L9,.95a.91.91,0,0,1,.53.75c0,.33.11,1,.13,1.11v.46h2.57l4.12.28a.41.41,0,0,1,.38.41V5.63A.41.41,0,0,1,16.4,6l-4.1.59H9.64L9.26,10.1l1.81.36a.41.41,0,0,1,.32.4V12a.41.41,0,0,1-.34.41c-.56.08-2.37.35-2.55.35Z',
    },
    'heavy_2e': {
        w: 28,
        h: 29,
        viewBox: '0 0 28 29',
        path: 'M9,28.35c0-.16-.17-1,.23-1.36.65-.59,2.82-2.38,3.4-2.86-.51-1.33-.59-5.15-.57-8.22L10,16,.25,19v-.34a1.78,1.78,0,0,1,.82-1.5l7.78-5.07a4.87,4.87,0,0,1-.51-3l0-.22.23,0h2.26l0,.22a8.32,8.32,0,0,1,0,1.81l1.21-.81c0-6.79.18-9.58,1.91-9.87,1.7.14,2,3,2,9.85L17.3,11a8.3,8.3,0,0,1,0-1.8l0-.22h2.51v.24a4.87,4.87,0,0,1-.51,3l7.66,5a1.77,1.77,0,0,1,.8,1.5V19L18,16l-2-.06c0,3.06-.06,6.88-.57,8.21a28.87,28.87,0,0,1,3.5,3A2,2,0,0,1,19,28.34l-.05.31L14.6,26.71c-.14,1.85-.41,1.85-.6,1.85s-.47,0-.6-1.84L9,28.66Z',
    },
    //MD Series
    //MD11 - Standard Scale 63px, 3in4 Non-linear Scale 53px 
    'md11': {
        w: 36,
        h: 31,
        noAspect: true,
        strokeScale: 1.8,
        viewBox: '0 0 64 64',
        path: 'm 32,0.7 0.3,0.1 0.4,0.4 0.5,0.8 0.6,1.4 0.4,1.7 0.7,4.2 0.2,4.1 0,11.8 4.1,3.2 -0.2,-1.1 0,-1.2 0.1,-1.1 0.2,-0.4 2.5,0 0.2,0.4 0.1,1.1 0,1.2 -0.3,1.3 -0.3,0 -0.3,1.5 16.6,13.4 0,0.6 0.4,2.2 0,1.2 -0.4,-0.9 0,0.3 -9.6,-4.6 -0.1,0.6 -0.1,0.3 -0.1,0 -0.1,-0.3 -0.1,-0.8 -4.5,-2.3 -0.1,0.7 -0.1,0.4 -0.1,0 -0.1,-0.4 -0.1,-0.9 -1.1,-0.6 -6.5,-1.4 0,4.4 -0.1,4.2 -0.5,3.7 -0.6,3.3 6.6,5.5 0,3.2 -7,-2.6 -0.1,0.8 -0.2,0.7 -0.3,0 -0.5,2.1 -0.2,0 -0.2,0.6 -0.2,-0.6 -0.2,0 -0.5,-2.1 -0.3,0 -0.2,-0.7 -0.1,-0.8 -7,2.5 0,-3.1 6.6,-5.5 -0.6,-3.3 -0.5,-3.7 -0.1,-4.2 0,-4.4 -6.5,1.4 -1.1,0.6 -0.1,0.9 -0.1,0.3 -0.1,0 -0.1,-0.3 -0.1,-0.7 -4.5,2.3 -0.1,0.8 -0.1,0.3 -0.1,0 -0.1,-0.3 -0.1,-0.6 -9.6,4.6 0,-0.3 -0.4,0.9 0,-1.2 0.4,-2.2 0,-0.6 16.6,-13.4 -0.3,-1.5 -0.3,0 -0.3,-1.3 0,-1.2 0.1,-1.1 0.2,-0.4 2.5,0 0.2,0.4 0.1,1.1 0,1.2 -0.2,1.1 4.1,-3.3 0,-11.7 0.2,-4.1 0.7,-4.2 0.4,-1.7 0.6,-1.4 0.5,-0.8 0.4,-0.4 z',
    },
    // C130 from https://discussions.flightaware.com/ads-b-flight-tracking-f21/some-custom-svg-plane-icons-t37783.html
    // by Peter Lowden
    // licensed under CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/)
    'c130': {
        w: 32,
        h: 34,
        noAspect: true,
        strokeScale: 2,
        viewBox: '0 0 64 64',
        path: 'm 31,1 1,0 1,1 1,2 0,8 3,0 0,-3 1,-1 1,1 0,3 6,0 0,-3 1,-1 1,1 0,3 10,1 0,2 -1,1 -17,3 -5,0 0,10 -1,1 8,2 0,1 -1,1 -8,0 -1,1 -1,-1 -8,0 -1,-1 0,-1 8,-2 -1,-1 0,-10 -5,0 -17,-3 -1,-1 0,-2 10,-1 0,-3 1,-1 1,1 0,3 6,0 0,-3 1,-1 1,1 0,3 3,0 0,-8 1,-2 1,-1 z',
    },
    // c17: thanks to alkissack on github, check out his very nice interface:
    // https://github.com/alkissack/Dump1090-OpenLayers3-html
    'c17': {
        w: 35,
        h: 36,
        strokeScale: 1.8,
        viewBox: '0 0 64 64',
        path: 'm 32.5,1.4 0.5,0.5 0.7,1.5 0.9,2.2 0.5,1.3 0.6,2.2 0.3,2.2 0,3.1 0.5,0.8 0.3,0.8 0.2,1.2 0,1.2 3.1,1.8 -0.2,-1.4 -0.3,0 -0.1,-0.1 -0.2,-1 0,-2.1 0.1,-1 -0.4,0 0,-0.3 0.2,-0.5 0.3,-0.3 0.1,-0.2 2.4,0 0.05,0.2 0.35,0.3 0.2,0.5 0,0.3 -0.4,0 0.1,1 0,2.1 -0.2,1 -0.1,0.1 -0.3,0 -0.3,2 6.3,3.7 -0.2,-1.8 -0.3,0 -0.1,-0.1 -0.2,-1 0,-2.1 0.1,-1 -0.4,0 0,-0.3 0.2,-0.5 0.3,-0.3 0.1,-0.2 2.4,0 0.1,0.2 0.3,0.3 0.2,0.5 0,0.3 -0.4,0 0.1,1 0,2.1 -0.2,1 -0.1,0.1 -0.3,0 -0.4,2.5 12.2,7 0.3,0.2 0.2,0.4 0,0.6 0.9,2.1 0,0.9 -1.4,-1.1 -10.3,-2.2 -0.2,0.5 -0.3,0.1 0,-0.7 -3.6,-0.8 -0.3,0.6 -0.3,0.1 0,-0.9 -2.4,-0.5 -0.1,0.6 -0.3,0.5 -0.3,0.1 0,-1.4 -3.8,-0.8 -0.1,0.6 -0.3,0.5 -0.3,0.1 0,-1.4 -1.5,-0.4 -0.2,1.3 -0.3,1.1 -0.5,1 0,7.8 -0.2,3.9 -0.8,3.8 -0.9,3.1 -0.6,1.5 9.7,6.3 0.4,0.4 0.1,0.4 0,2 -11.4,-2.7 -0.3,2.2 -0.3,-2.2 -11.4,2.7 0,-2 0.1,-0.4 0.4,-0.4 9.7,-6.3 -0.6,-1.5 -0.9,-3.1 -0.8,-3.8 -0.2,-3.9 0,-7.8 -0.5,-1 -0.3,-1.1 -0.2,-1.3 -1.5,0.4 0,1.4 -0.3,-0.1 -0.3,-0.5 -0.1,-0.6 -3.8,0.8 0,1.4 -0.3,-0.1 -0.3,-0.5 -0.1,-0.6 -2.4,0.5 0,0.9 -0.3,-0.1 -0.3,-0.6 -3.6,0.8 0,0.7 -0.3,-0.1 -0.2,-0.5 -10.3,2.2 -1.4,1.1 0,-0.9 0.9,-2.1 0,-0.6 0.2,-0.4 0.3,-0.2 12.2,-7 -0.4,-2.5 -0.3,0 -0.1,-0.1 -0.2,-1 0,-2.1 0.1,-1 -0.4,0 0,-0.3 0.2,-0.5 0.3,-0.3 0.1,-0.2 2.4,0 0.1,0.2 0.3,0.3 0.2,0.5 0,0.3 -0.4,0 0.1,1 0,2.1 -0.2,1 -0.1,0.1 -0.3,0 -0.2,1.8 6.3,-3.7 -0.3,-2 -0.3,0 -0.1,-0.1 -0.2,-1 0,-2.1 0.1,-1 -0.4,0 0,-0.3 0.2,-0.5 0.3,-0.3 0.1,-0.2 2.4,0 0.1,0.2 0.3,0.3 0.2,0.5 0,0.3 -0.4,0 0.1,1 0,2.1 -0.2,1 -0.1,0.1 -0.3,0 -0.2,1.4 3.1,-1.8 0,-1.2 0.2,-1.2 0.3,-0.8 0.5,-0.8 0,-3.1 0.3,-2.2 0.6,-2.2 0.5,-1.3 0.9,-2.2 0.7,-1.5 0.5,-0.5 0.5,-0.2 z',
    },
    // f16: thanks to alkissack on github, check out his very nice interface:
    // https://github.com/alkissack/Dump1090-OpenLayers3-html
    'hi_perf': {
        w: 28,
        h: 23,
        noAspect: true,
        strokeScale: 3.0,
        viewBox: '0 0 64 64',
        path: 'm 31.9,2.7 0.1,3.5 0.4,0.7 0.5,1.5 0.4,1.9 0.4,2.4 0.2,1.8 0.2,0.2 0,0.7 -0.1,0.3 0.1,1.4 0.2,0.2 0.1,0.3 0.4,3.6 0.7,3.8 0.8,3.1 0.6,2 0.2,1.1 0.1,1.5 1.5,1.2 0.1,-0.4 0.1,-0.3 0.1,0.3 0.1,0.7 4.4,3.7 0.1,-0.4 0.1,-0.3 0.1,0.3 0.1,0.7 5.4,4.6 0,-1.8 0.2,-0.7 0,-1.3 -0.1,0 0,-0.3 0.3,-0.2 0.2,-0.4 0,-0.9 0.1,-0.6 0.2,-0.1 0.2,0.1 0.1,0.6 0,0.9 0.2,0.4 0.3,0.2 0,0.3 -0.5,-0.1 -0.1,7.3 0.6,0.6 0,1.4 -1.7,0 0,-1 -13.3,0 0.1,4.2 6.4,5.9 0,2.3 -0.8,1 -5.6,0.1 0,-0.8 -1.5,0 0,-3.3 -0.2,0 -0.2,1.3 0,1 -0.1,0.9 -0.3,0.6 -1.6,0 -0.1,2.9 -0.1,0.2 -0.1,0.1 -0.1,-0.1 -0.1,-0.2 0,-2.9 -1.7,0 -0.3,-0.6 -0.1,-0.9 0,-1 -0.1,-1.3 -0.3,0 0,3.3 -1.5,0 0,0.8 -5.6,0 -0.8,-1.1 0,-2.3 6.4,-5.9 0.1,-4.2 -13.3,0 0,1 -1.7,0 0,-1.4 0.6,-0.6 -0.1,-7.3 -0.5,0.1 0,-0.3 0.3,-0.2 0.2,-0.4 0,-0.9 0.1,-0.6 0.2,-0.1 0.2,0.1 0.1,0.6 0,0.9 0.2,0.4 0.3,0.2 0,0.3 -0.1,0 0,1.3 0.2,0.7 0,1.8 5.4,-4.6 0.1,-0.7 0.1,-0.3 0.1,0.3 0.1,0.4 4.4,-3.7 0.1,-0.7 0.1,-0.3 0.1,0.3 0.1,0.4 1.5,-1.2 0.1,-1.5 0.2,-1.1 0.6,-2 0.8,-3.1 0.7,-3.8 0.4,-3.6 0.1,-0.3 0.2,-0.2 0.1,-1.4 -0.1,-0.3 0,-0.7 0.2,-0.2 0.2,-1.8 0.4,-2.4 0.4,-1.9 0.5,-1.5 0.4,-0.7 z',
    },
    'e3awacs': {
        w: 32,
        h: 32,
        viewBox: '50 0 32 32',
        path: 'M 65.811,0.918 C 65.338,1.311 64.907,3.105 64.761,5.285 c -0.042,0.650 -0.070,2.099 -0.056,3.209 l 0.021,2.031 -2.192,1.652 -2.192,1.652 -0.042,-0.508 c -0.077,-0.900 -0.132,-1.131 -0.257,-1.137 -0.223,-0.014 -0.745,0.020 -0.772,0.047 -0.056,0.054 -0.007,1.835 0.063,2.051 0.035,0.129 0.063,0.244 0.049,0.250 -0.007,0.007 -0.654,0.487 -1.441,1.076 -0.786,0.589 -1.461,1.097 -1.503,1.124 -0.056,0.041 -0.070,-0.176 -0.042,-0.772 0.014,-0.508 0,-0.900 -0.049,-1.015 -0.077,-0.183 -0.090,-0.190 -0.543,-0.169 l -0.473,0.020 -0.056,0.372 c -0.063,0.372 -0.021,1.841 0.063,2.173 0.035,0.162 -0.077,0.257 -1.552,1.367 -1.635,1.225 -2.171,1.726 -2.366,2.227 -0.139,0.366 -0.223,2.762 -0.097,2.762 0.049,0 0.077,-0.210 0.077,-0.609 V 22.480 l 0.278,-0.169 c 0.160,-0.095 0.355,-0.203 0.438,-0.230 0.084,-0.034 1.935,-0.907 4.120,-1.936 l 3.967,-1.868 1.649,-0.332 c 1.468,-0.298 1.705,-0.332 2.150,-0.284 l 0.508,0.047 -0.285,0.183 c -0.738,0.474 -1.274,1.516 -1.274,2.478 0,0.393 0.160,1.002 0.355,1.381 0.202,0.379 0.745,0.927 1.169,1.171 0.306,0.183 0.355,0.237 0.383,0.474 0.021,0.149 0.118,0.819 0.209,1.489 0.118,0.812 0.153,1.239 0.104,1.286 -0.035,0.034 -0.870,0.691 -1.858,1.456 -2.074,1.611 -2.074,1.611 -2.053,2.491 0.021,0.677 0.063,0.867 0.188,0.765 0.049,-0.041 0.884,-0.318 1.858,-0.616 0.974,-0.291 1.949,-0.596 2.164,-0.670 0.480,-0.156 0.445,-0.210 0.515,0.826 0.021,0.399 0.070,0.724 0.097,0.724 0.028,0 0.070,-0.359 0.097,-0.792 0.021,-0.440 0.070,-0.819 0.097,-0.839 0.028,-0.027 0.459,0.081 0.953,0.237 0.501,0.162 1.461,0.460 2.136,0.677 0.682,0.210 1.281,0.399 1.343,0.420 0.090,0.034 0.104,-0.061 0.104,-0.691 0,-0.460 -0.035,-0.792 -0.090,-0.887 -0.042,-0.081 -0.912,-0.792 -1.928,-1.577 -1.016,-0.792 -1.865,-1.456 -1.893,-1.483 -0.028,-0.027 0.021,-0.454 0.111,-0.955 0.090,-0.501 0.188,-1.185 0.216,-1.516 0.049,-0.575 0.056,-0.603 0.257,-0.711 0.731,-0.386 1.350,-1.103 1.566,-1.835 0.348,-1.171 -0.132,-2.620 -1.079,-3.249 -0.195,-0.129 -0.355,-0.257 -0.362,-0.291 0,-0.027 0.230,-0.047 0.515,-0.047 0.348,0 1.058,0.108 2.178,0.332 l 1.656,0.338 4.036,1.896 c 2.220,1.043 4.176,1.970 4.350,2.051 l 0.313,0.156 0.021,0.657 c 0.007,0.366 0.042,0.663 0.077,0.663 0.090,0 0.146,-1.956 0.063,-2.336 -0.188,-0.860 -0.494,-1.198 -2.436,-2.647 l -1.601,-1.198 0.042,-0.278 c 0.084,-0.562 0.125,-1.909 0.063,-2.173 l -0.063,-0.271 -0.466,-0.020 c -0.452,-0.020 -0.466,-0.014 -0.515,0.169 -0.028,0.102 -0.056,0.548 -0.056,0.982 0,0.440 -0.014,0.799 -0.035,0.799 -0.035,0 -2.199,-1.604 -2.798,-2.072 l -0.181,-0.135 0.097,-0.426 c 0.063,-0.264 0.097,-0.691 0.084,-1.144 l -0.021,-0.724 -0.445,-0.020 c -0.257,-0.014 -0.480,0.014 -0.522,0.054 -0.042,0.041 -0.090,0.413 -0.111,0.819 l -0.035,0.745 -2.206,-1.645 -2.206,-1.645 -0.007,-2.166 C 67.391,4.730 67.363,4.168 67.085,2.814 66.911,1.981 66.730,1.500 66.417,1.067 66.194,0.756 66.055,0.722 65.811,0.918 Z',
    },
    'heavy_4e': {
        w: 28,
        h: 30,
        viewBox: '0 0 28 30',
        path: 'M14,29.62c-.23,0-.52-.16-.71-1.33L8.82,29.58V28l3.56-3.52c-.41-1.51-.4-7.57-.4-9.11L8.46,16.59,1.27,20.76l-1,1.68,0-.91c0-2.28.23-2.45.3-2.52s.59-.51,3.5-3.09A10.47,10.47,0,0,1,4,13l0-.22.23,0H6.16v.23a11.63,11.63,0,0,1,0,1.26c.74-.68,1.36-1.28,1.69-1.61a9.54,9.54,0,0,1-.16-3.15l0-.22.23-.05H9.87v.23a11.49,11.49,0,0,1,0,1.31l.87-.84c.67-.66,1.06-1,1.27-1.19,0-6.24.53-8.46,2-8.46,1.23,0,2,1.42,2,8.46.21.17.59.53,1.27,1.19l.88.85a11.45,11.45,0,0,1,0-1.32V9.19h2.18v.24a9.53,9.53,0,0,1-.15,3.18c.33.32.95.93,1.69,1.61a11.5,11.5,0,0,1,0-1.27v-.23H24V13a10.49,10.49,0,0,1-.1,3L27.4,19c.09.09.28.26.32,2.54l0,.91-1-1.68L19.5,16.57,16,15.34c0,1.53.07,7.49-.39,9.11L19.18,28v1.61l-4.46-1.29C14.52,29.46,14.23,29.62,14,29.62Z',
    },
    'helicopter': {
        w: 32,
        h: 34,
        strokeScale: 1.1,
        viewBox: '-8 -9 32 34',
        path: 'M8,17.75c-1.38,0-2.46-.63-2.46-1.43,0-.6.58-1.1,1.49-1.32V12.06A5.27,5.27,0,0,1,6,9.53L1.1,13.6l-.75-1L5.78,8.09c0-.25,0-.51,0-.77a12.28,12.28,0,0,1,.09-1.49L.38,1.24l.7-.89,5,4.2C6.48,3,7.17,2.1,8,2.1s1.52,1,1.91,2.57l5-4.21.75,1L10.1,6.07a12.4,12.4,0,0,1,.06,1.24c0,.22,0,.44,0,.65l5.47,4.59-.7.89L10,9.31a8.44,8.44,0,0,1-.35,1.4,3.83,3.83,0,0,1-.55,1.11L9,12v3c.91.22,1.49.72,1.49,1.32C10.46,17.12,9.38,17.75,8,17.75Z',
    },
    'old_hi_perf': {
        w: 15,
        h: 21,
        viewBox: '0 0 15 21',
        path: 'M3.14,20.76v-1.6l2.57-1.7V16.1H.26V12.25H1.61v1.17L5.28,9.9c.14-1.16,1-8.19,2-9.3L7.5.38l.2.22c1,1.12,1.89,8.14,2,9.3l3.67,3.52V12.25h1.35V16.1H9.29v1.35l2.57,1.7v1.6Z',
    },
    'single_turbo': {
        w: 18,
        h: 18,
        viewBox: '0 0 19 19',
        path: 'M 9.53,0.50 C 9.51,0.54 9.42,0.76 9.38,0.82 9.05,0.53 6.02,0.49 6.02,0.99 c 0.50,0 2.50,0.13 3.33,-0.08 C 8.52,1.63 8.53,3.51 8.23,6.47 L 1.33,7.00 C 0.50,7.07 0.50,7.57 0.50,8.44 L 5.97,9.39 C 6.71,9.58 8.12,10.04 8.12,10.04 c 0,0 0.29,4.81 0.82,6.26 l -2.91,0.67 c 0,0 -0.19,0.63 -0.19,1.20 l 3.54,0.23 0.08,0.11 0.08,-0.11 3.55,-0.20 c -0.00,-0.56 -0.18,-1.20 -0.18,-1.20 L 9.99,16.30 c 0.55,-1.44 0.88,-6.25 0.88,-6.25 0,0 1.41,-0.45 2.15,-0.63 l 5.48,-0.90 c 0.01,-0.87 0.01,-1.38 -0.81,-1.45 L 10.79,6.49 C 10.51,3.52 10.54,1.64 9.71,0.91 10.54,1.13 12.54,1.02 13.04,1.03 13.05,0.52 10.02,0.53 9.68,0.82 9.65,0.76 9.55,0.54 9.53,0.50 Z',
    },
    'jet_nonswept': {
        w: 22,
        h: 22,
        viewBox: '-2.2 -2.2 22 22',
        path: 'M9,17.09l-3.51.61v-.3c0-.65.11-1,.33-1.09L8.5,15a5.61,5.61,0,0,1-.28-1.32l-.53-.41-.1-.69H7.12l0-.21a7.19,7.19,0,0,1-.15-2.19L.24,9.05V8.84c0-1.1.51-1.15.61-1.15L7.8,7.18V2.88C7.8.64,8.89.3,8.93.28L9,.26l.07,0s1.13.36,1.13,2.6v4.3l7,.51c.09,0,.59.06.59,1.15v.21l-6.69,1.16a7.17,7.17,0,0,1-.15,2.19l0,.21h-.47l-.1.69-.53.41A5.61,5.61,0,0,1,9.5,15l2.74,1.28c.2.07.31.43.31,1.08v.3Z',
    },
    'jet_swept': {
        w: 18,
        h: 24,
        viewBox: '-1 -1 20 26',
        path: 'M9.44,23c-.1.6-.35.6-.44.6s-.34,0-.44-.6l-3,.67V22.6A.54.54,0,0,1,6,22.05l2.38-1.12L8,19.33H6.69l0-.2a8.23,8.23,0,0,1-.14-3.85l.06-.18H7.73V13.19h-2L.26,14.29v-.93c0-.28.07-.46.22-.53l7.25-3.6V3.85A4.47,4.47,0,0,1,8.83.49L9,.34l.17.15a4.47,4.47,0,0,1,1.1,3.36V9.23l7.25,3.6c.14.07.22.25.22.53v.93l-5.51-1.1h-2V15.1h1.17l.06.18a8.24,8.24,0,0,1-.15,3.84l0,.2H10l-.36,1.6,2.43,1.14a.52.52,0,0,1,.35.53v1.08Z',
    },
    'twin_large': {
        w: 25,
        h: 25,
        strokeScale: 0.9,
        viewBox: '-2 -2.5 25 25',
        path: 'M10.1,18.34H7l0-.21c-.08-.54,0-.87.11-1L7.19,17l.2,0,2.35-.33c-.16-.82-.42-2.9-.42-3.14s0-2.71,0-3.51H8c-.12,1.34-.41,1.36-.55,1.37h0c-.19,0-.46,0-.6-1.55L.27,9.52l0-.25c.06-.73.31-.9.45-.93l6-.48a3.65,3.65,0,0,1,.3-2,.45.45,0,0,1,.32-.16h0a.39.39,0,0,1,.3.12A3.67,3.67,0,0,1,8,7.77l1.26-.07c0-.71,0-2.92,0-4.48A3.84,3.84,0,0,1,10.1.4a.4.4,0,0,1,.28-.16h.23A.4.4,0,0,1,10.9.4a3.84,3.84,0,0,1,.87,2.81c0,1.55,0,3.77,0,4.48L13,7.77a3.67,3.67,0,0,1,.29-1.94.38.38,0,0,1,.28-.12.46.46,0,0,1,.34.16,3.66,3.66,0,0,1,.3,2l6,.48c.18,0,.43.21.49.94l0,.25-6.53.3c-.14,1.55-.42,1.55-.59,1.55s-.45,0-.57-1.37H11.74c0,.8,0,3.27,0,3.51s-.26,2.32-.42,3.14l2.38.34h.11l.13.13c.15.18.19.51.11,1l0,.21H10.9l-.4,1Z',
    },
    'twin_small': {
        w: 21,
        h: 18,
        strokeScale: 1.1,
        viewBox: '-1 -1.15 21 18',
        path: 'M9.5,15.75c-.21,0-.34-.17-.41-.51l-2.88.23v-.27c0-.78,0-1.11.28-1.13L9,13.1c-.31-1.86-.55-5-.59-5.55l-.08-.09H6.08L.25,6.54v-1A.43.43,0,0,1,.67,5l3.75-.27L5,4.45V3.53H4.73V2.7a.35.35,0,0,1,.34-.35h.07c.12-.52.26-.83.54-.83s.42.31.53.83h.07a.35.35,0,0,1,.34.35v.83H6.36v1l2-.08C8.42.81,9.09.25,9.49.25s1.09.55,1.12,4.21l2,.08v-1h-.25V2.7a.35.35,0,0,1,.34-.35h.07c.12-.52.26-.83.53-.83s.42.31.54.83h.07a.35.35,0,0,1,.34.35v.83H14v.92l.57.32L18.32,5a.42.42,0,0,1,.43.46v1L13,7.46H10.71l-.08.09c0,.56-.27,3.68-.59,5.55l2.46,1c.28,0,.28.35.28,1.13v.27l-2.88-.23C9.84,15.58,9.71,15.75,9.5,15.75Z',
    },
    'alpha_jet': {
        w: 28,
        h: 28,
        viewBox: '33 9 32 32',
        path: 'M49.14 36.015c-.07-.194-.09-.223-.176-.238-.13-.024-.14-.068-.14-.664 0-.277-.012-.504-.027-.504-1.378.334-2.455.604-3.915.961-.014 0-.08-.166-.15-.37-.154-.445-.17-.703-.055-.852 1.33-.883 2.31-1.45 3.795-2.349-.111-.93-.214-1.833-.313-2.697l-.525.021c-.236-.807-.356-1.716-.469-2.41-2.494.435-5.205 1.014-7.794 1.527-.013 0-.024-.115-.024-.256 0-.486.29-1.554.513-1.893.909-.79 2.132-1.51 3.348-2.26.066.04.052.226.08.286l1.15-.515c1.223-.529 1.674-.858 2.698-1.528.127-.555.072-.835.106-1.538l.211-.241.568.036.025-.323c.02-.278.01-.326.01-.326l.184-.027c-.14-9.213 2.22-8.012 1.898.024l.19.02.01.318.01.317h.61l.16.214c.02.515.026.708.068 1.458 1 .74 2.136 1.29 2.77 1.62l1.213.58.036-.308 1.527.962c1.79 1.128 1.827 1.158 1.988 1.636.16.475.298 1.111.313 1.441.008.167.006.303-.006.303-2.779-.55-4.895-.975-7.884-1.572l-.018.127c-.021.777-.206 1.64-.314 2.274-.16.028-.354.03-.548.048-.118.88-.24 1.79-.324 2.673 1.294.783 2.32 1.411 3.686 2.261.062.053.089.126.117.314.033.225.029.27-.06.586a2.575 2.575 0 01-.12.366c-1.355-.264-2.437-.531-3.87-.862l-.186-.042.017.571c-.009.648-.11.572-.11.572-.165.06-.101.15-.162.24l-.032.24-.079-.22z',
    },
    'a225': {
        w: 35,
        h: 35,
        strokeScale: 2,
        viewBox: '79 0 64 64',
        path: ' M123.984 55.377l.768 2.092.09 3.559-.655 1.058-.27 1.78-.43-1.828-10.175-3.944-.655-.072-.36 1.876-2.009.024-.451-1.852h-.564l-10.154 4.233-.316 1.803-.428-1.78-.61-.769-.045-3.92.745-2.044.722 1.275L108.506 51l-.767-17.051-6.882.072-21.12 8.682v-2.309l.79-1.66 11.327-8.176-1.016-1.37.023-3.368.564-.529h1.399l.519.626.113 3.727 3.497-2.573-.587-.986-.09-3.223.339-.697h1.76l.45.577v3.006l3.43-2.405-.654-.77-.022-3.823.586-.457h1.287l.518.601v3.247l3.362-2.886v-8.032l.316-3.512.226-2.212.79-2.67.857-1.515.654-.841.677.048.542.457.654 1.25.587 1.058.541 1.804.316 1.515.271 1.732.113 2.91.225 7.767 3.51 2.97-.091-3.198.429-.59 1.635-.023.395.553.08 3.547-.587.83 3.452 2.429-.09-2.958.406-.746h1.602l.541.577.023 3.391-.61.938 3.633 2.477-.045-3.872.564-.577h1.264l.564.722.045 3.367-.88 1.274 11.192 7.6.79.841.248.842.18.721v1.66l-21.277-7.984-7.04.024-.37 17.152 9.381 5.611z',
    },
    // A400 Courtesy of bukadako:
    // https://discussions.flightaware.com/t/some-custom-svg-plane-icons/18914/195
    'a400': {
        w: 31,
        h: 31,
        strokeScale: 3.5,
        viewBox: '-10 0 140 140',
        path: 'm 60.2353,6.87783 L62.5882,9.40724 L63.1312,5.07692 L63.7059,11.3484 L67.1765,19.0543 L67.4706,39.5837 L70.4118,45.2896 L77.2941,47.8778 L77,43.9367 L78.2941,39.6425 L72.7059,38.7149 L77.4118,38.2896 L79.1176,35.8778 L80.7647,38.2308 L87,38.8914 L80.8235,39.9367 L81.2941,43.4661 L80.9412,48.6199 L93.5294,52.9367 L93.5294,48.3484 L94.2941,44.3484 L89.1765,43.819 L94.1176,42.7602 L95.5882,40.4661 L97.1176,42.7602 L102.471,43.5747 L97.1176,44.5249 L98,48.2896 L97.3756,54.0905 L118.683,62.0181 L118.706,68.6425 L100.941,67.2443 L99.4118,70.0543 L98.9412,67.1131 L91.5294,66.267 L90.7647,68.8778 L89.7059,66.2896 L83.8235,65.7738 L82.9412,69.1719 L82.3529,65.6516 L73.4118,64.819 L72.4706,68.9955 L71.5294,64.5837 L70.7059,68.7602 L67.7647,71.2308 L67.5294,91.5131 L63.9882,110.925 L85.3529,127.348 L86.2941,132.878 L61.5882,123.348 L60.3529,127.466 L59.4118,123.231 L33.5882,132.29 L34.8824,126.878 L56.2353,110.819 L53,91.3484 L52.5882,72.1131 L49.7059,68.7602 L49.1765,64.6425 L48.0588,68.5249 L46.8824,64.8869 L38.4706,65.5747 L37.2941,69.3484 L36.3529,65.9955 L30.6471,66.1719 L29.7059,69.2896 L28.5294,66.3394 L21.4118,67.0679 L20.7059,70.1719 L19.5294,67.1719 L1.39819,68.5611 L1.65611,61.7828 L22.8824,54.2896 L22.5294,48.7014 L23.5882,43.819 L17.7059,43.4661 L23.1765,42.4661 L24.5882,40.1719 L25.8235,42.4661 L31.7059,43.4796 L26.1176,44.3484 L26.7647,48.7602 L26.0588,53.0679 L38.9412,48.7964 L39.1765,43.8778 L40.1176,39.4072 L33.2353,39.0543 L39.7647,37.7014 L41.2941,35.1719 L42.1765,38.0543 L48,38.8326 L42.6471,40.0543 L43.2805,44.0543 L42.8824,47.5837 L50,44.9955 L52.5294,40.1131 L53,18.5249 L56.1765,11.2308 z',
    },
    // V22 Osprey
    'v22_slow': {
        w: 28,
        h: 28,
        strokeScale: 0.9,
        viewBox: '31 1 25 25',
        path: 'M46 21.4h-4.4s-.5-2.2-.1-2.4l.2.3h1v-2.5s-1.4-2.8-1-3.8l-3.7-.4 1.5 3.7-.4.2-2-4.2.2-.2s-.3 0-.4-.4c0 0-.6.1-1-.1l-3.8-.5v-.5l4.8.4s0-1.3 1-.5l2.5-3.3.4.3-2 2.9 3.2.4.6-1v-2s.1-1.2.6-1.7v-.3s.1-.5.3 0l.3-.2s1 .2 1.2 2.3v2l.6.9 3.2-.4-2-2.7.5-.3 2.5 3.3s1-.9 1 .5l4.7-.5v.5l-4.7.6s0 .4-.4.4l.1.2-1.9 4.3-.4-.2 1.6-3.9-4 .5s.4 1-.9 3.8v2.4h1s0-.3.2-.3c0 0 .3 0 0 2.4z',
    },
    'v22_fast': {
        w: 28,
        h: 28,
        strokeScale: 1,
        viewBox: '27 -2.5 25 25',
        path: 'M33.76 6.93l.01.4.2.06.05.07 3.84.45s.18-.36.6-.88c0 0-.26-2.86.6-3.83v-.28l.05-.05s.1-.51.28 0c0 0 .24-.18.3-.15.05.03 1.31.19 1.23 4.3 0 0 .62.84.58.94l3.83-.44.06-.08.23-.08-.01-.4s-.7-.21-4.04-.5l-.12-.13 4.32.01s.43-1.46.88 0l5.11-.07v.06s-4.12.36-4.79.71l-.2-.24.03.52.2.15.06 1.09-.07.14s-.09 1.63-.41 2.37l-.63-.03-.23-1.2-3.91.43s.36.97-.97 3.79l-.1 2.47h1.06s.06-.28.16-.3m0 0s.43-.02-.04 2.41h-4.5s-.46-2.46-.04-2.4c0 0 .12.02.16.29l1.04.01-.08-2.5s-1.2-2.38-.96-3.82l-3.89-.44-.24 1.2-.62.03s-.4-1.1-.43-2.38l-.05-.1.04-1.1.24-.16.01-.5-.2.23s-1.02-.4-4.8-.71v-.07l5.12.05s.42-1.39.86 0h4.34l-.13.14s-3.99.39-4.03.52',
    },
    't38': {
        viewBox:'24 -4 32 32',
        w: 28,
        h: 28,
        strokeScale: 1.2,
        path: 'M41.3 27h-2l-.2-1.8-3.3-.2v-1l3-2s-.2-1.5-.1-3.2l-6.5-.6v-1.5l6.3-3.8s-.6-2.8.4-2.7l.3-.4V4.6s.2-4.3 1-6v-1.4h.1v1.5s1 2.3 1 6l.1 5.1.3.4s1-.3.4 2.7l6.3 3.9v1.4l-6.5.6s.1 1.6 0 3.2l2.9 2v1l-3.3.2z',
    },
    'typhoon': {
        viewBox:'-4 -3 32 32',
        w: 28,
        h: 28,
        strokeScale: 1.2,
        path: 'M13.86 26.47l-1.38-.03-.27 2.13-.33-2.14h-1.32l-.3-2.17-.5-.42-.02-.78-7.54-.4-.26.97s-.42-.05-.32-3.58l.3-1.07.21 1.03 1.2-1.46-.02-1.8-.15-.08.14-.18s.02-.57.2-.66c0 0 .2.02.2.64l.14.16-.12.12v1.3l2.6-3.36s-.04-3.68.56-3.97c0 0 .37-.33.52 2.57l2.61-3.33.01-.35.34-.6.14-1.94.28-.21.06-.97-2.34.68V5.6l2.65-2.7s.22-3.13 1.05-4.58c0 0 .8 1.18 1.05 4.58l2.65 2.7v.96l-2.32-.67.05.95.28.22.17 2.06.28.44.05.4 2.62 3.38s.1-2.63.5-2.6c0 0 .55-.17.55 3.96l2.63 3.35.01-1.29-.15-.1.14-.12s.02-.7.17-.7c0 0 .21-.12.2.66l.15.12-.14.14v1.8l1.21 1.49.15-1.1.3 1.1s.2 3.19-.25 3.53l-.26-.9-7.6.36.02.83-.5.36z',
    },
    'unknown': {
        w: 22,
        h: 22,
        viewBox: "-2.5 -2.5 22 22",
        path: 'M5.25,16.76c-.92,0-1.33-.46-1.39-.86a1,1,0,0,1,.79-1.11c.25-.08,1.22-.43,2.63-1V10.65h-6c-.68,0-1-.35-1-.66a.81.81,0,0,1,.6-.86C1.14,9,4.8,7,7.28,5.63V3c0-1.11.44-2.71,1.23-2.71S9.77,1.84,9.77,3V5.63C12.22,7,15.87,9,16.14,9.13a.8.8,0,0,1,.61.86c-.05.31-.36.67-1.05.67H9.77v3.19l1.61.59,1,.36a1.05,1.05,0,0,1,.8,1.11c-.07.39-.47.86-1.39.86Z',
        size: [22,22]
    },
    // ground stuff:
    'ground_emergency': {
        w: 6,
        h: 15,
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 15" width="6px" height="15px"><defs><style>.cls-1{fill:#5a5a5a;stroke:strokeColor;stroke-width:strokeWidth;}.cls-2{fill:#fff;stroke:none;}</style></defs><title>emergency_dark</title><g id="Layer_2" data-name="Layer 2"><g id="Emergency"><path class="cls-1" d="M1.77,0a3.32,3.32,0,0,0-.63.07L1,.11.86.16h0L.7.23.59.3l0,0L.49.38l0,.06a.15.15,0,0,0,0,0h0v0h0V.9l0,0,0,0h0l0,.07V4c0,.13.06.16.1.23v.3H.09c0,1.32,0,3.38,0,4.8l0,.44C.07,9.82,0,9.88,0,10v2.82c0,.09-.05.14.07.18v1.9a50.76,50.76,0,0,0,5.78,0V13.06C6,13,6,12.93,6,12.84V10c0-.15-.05-.2-.11-.22V9.37c0-1.41,0-3.51,0-4.8H5.55v-.3c0-.08.11-.1.09-.23v-3L5.6,1h0l0,0,0,0V.51h0v0h0a.15.15,0,0,0,0,0,.16.16,0,0,0,0-.06L5.41.32l0,0L5.26.23,5.12.17h0L5,.11l-.16,0A3.45,3.45,0,0,0,4,0H1.77Z"/><path class="cls-2" d="M.77,2.77A4.31,4.31,0,0,1,3,2.33a4.31,4.31,0,0,1,2.26.44l-.38.92A7.51,7.51,0,0,0,3,3.41a7.9,7.9,0,0,0-1.91.27Z"/><path class="cls-2" d="M4.35,8.27a1.05,1.05,0,0,1-.59.93A3.5,3.5,0,0,0,2.62,6.63a1.71,1.71,0,0,1-.56,1.26l-.41.38a1.71,1.71,0,0,0-.56,1.26A1.79,1.79,0,0,0,2.4,11.21H3.6A1.79,1.79,0,0,0,4.92,9.52,1.71,1.71,0,0,0,4.35,8.27Z"/></g></g></svg>',
    },
    'ground_service': {
        w: 6,
        h: 15,
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 15" width="6px" height="15px"><defs><style>.cls-1{fill:#5a5a5a;stroke:strokeColor;stroke-width:strokeWidth;}.cls-2{fill:#fff;stroke:none;}</style></defs><title>service_dark</title><g id="Layer_2" data-name="Layer 2"><g id="Service"><path class="cls-1" d="M1.77,0a3.32,3.32,0,0,0-.63.07L1,.11.86.16h0L.7.23.59.3l0,0L.49.38l0,.06a.15.15,0,0,0,0,0h0v0h0V.9l0,0,0,0h0l0,.07V4c0,.13.06.16.1.23v.3H.09c0,1.32,0,3.38,0,4.8l0,.44C.07,9.82,0,9.88,0,10v2.82c0,.09-.05.14.07.18v1.9a50.76,50.76,0,0,0,5.78,0V13.06C6,13,6,12.93,6,12.84V10c0-.15-.05-.2-.11-.22V9.37c0-1.41,0-3.51,0-4.8H5.55v-.3c0-.08.11-.1.09-.23v-3L5.6,1h0l0,0,0,0V.51h0v0h0a.15.15,0,0,0,0,0,.16.16,0,0,0,0-.06L5.41.32l0,0L5.26.23,5.12.17h0L5,.11l-.16,0A3.45,3.45,0,0,0,4,0H1.77Z"/><path class="cls-2" d="M.77,2.77A4.31,4.31,0,0,1,3,2.33a4.31,4.31,0,0,1,2.26.44l-.38.92A7.51,7.51,0,0,0,3,3.41a7.9,7.9,0,0,0-1.91.27Z"/><path class="cls-2" d="M4.85,8a1.67,1.67,0,0,0-.65-1.3A.12.12,0,0,0,4,6.74v.95a.12.12,0,0,1,0,.09l-.9.65a.12.12,0,0,1-.13,0L2,7.77a.12.12,0,0,1,0-.09V6.73a.11.11,0,0,0-.18-.08A1.72,1.72,0,0,0,1.15,8,1.66,1.66,0,0,0,2,9.4a.19.19,0,0,1,.1.17l0,1.54a.1.1,0,0,0,.11.1H3.78c.07,0,.12,0,.11-.1V9.57A.22.22,0,0,1,4,9.4,1.7,1.7,0,0,0,4.85,8Z"/></g></g></svg>',
    },
    'ground_unknown': {
        w: 6,
        h: 15,
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 15" width="6px" height="15px"><defs><style>.cls-1{fill:#5a5a5a;stroke:strokeColor;stroke-width:strokeWidth;}.cls-2{fill:#fff;stroke:none;}</style></defs><title>unknown_dark</title><g id="Layer_2" data-name="Layer 2"><g id="Unknown"><path class="cls-1" d="M1.77,0a3.32,3.32,0,0,0-.63.07L1,.11.86.16h0L.7.23.59.3l0,0L.49.38l0,.06a.15.15,0,0,0,0,0h0v0h0V.9l0,0,0,0h0l0,.07V4c0,.13.06.16.1.23v.3H.09c0,1.32,0,3.38,0,4.8l0,.44C.07,9.82,0,9.88,0,10v2.82c0,.09-.05.14.07.18v1.9a50.76,50.76,0,0,0,5.78,0V13.06C6,13,6,12.93,6,12.84V10c0-.15-.05-.2-.11-.22V9.37c0-1.41,0-3.51,0-4.8H5.55v-.3c0-.08.11-.1.09-.23v-3L5.6,1h0l0,0,0,0V.51h0v0h0a.15.15,0,0,0,0,0,.16.16,0,0,0,0-.06L5.41.32l0,0L5.26.23,5.12.17h0L5,.11l-.16,0A3.45,3.45,0,0,0,4,0H1.77Z"/><path class="cls-2" d="M.77,2.77A4.31,4.31,0,0,1,3,2.33a4.31,4.31,0,0,1,2.26.44l-.38.92A7.51,7.51,0,0,0,3,3.41a7.9,7.9,0,0,0-1.91.27Z"/><path class="cls-2" d="M4.31,7.51A1.1,1.1,0,0,0,4,7.12a1.55,1.55,0,0,0-.5-.3,2.18,2.18,0,0,0-.77-.12,1.81,1.81,0,0,0-.65.11,1.48,1.48,0,0,0-.5.32,1.43,1.43,0,0,0-.32.48,1.62,1.62,0,0,0-.12.6v.12H2.31V8.2a1,1,0,0,1,0-.25.54.54,0,0,1,.09-.19.42.42,0,0,1,.15-.12.49.49,0,0,1,.22,0,.41.41,0,0,1,.29.09.39.39,0,0,1,.1.3.33.33,0,0,1,0,.19A.65.65,0,0,1,3,8.33l-.22.16a1.61,1.61,0,0,0-.25.22A1.28,1.28,0,0,0,2.33,9a1.2,1.2,0,0,0-.11.45v.37H3.29V9.52a.44.44,0,0,1,.09-.22,1,1,0,0,1,.19-.18l.25-.17a1.35,1.35,0,0,0,.27-.23,1.19,1.19,0,0,0,.21-.33,1.23,1.23,0,0,0,.09-.49A1.06,1.06,0,0,0,4.31,7.51Z"/><rect class="cls-2" x="2.18" y="10.26" width="1.12" height="1.02"/></g></g></svg>',
    },
    'ground_fixed': {
        w: 12,
        h: 12,
        noRotate: true,
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12px" height="12px"><defs><style>.cls-1{fill:#5a5a5a;stroke:strokeColor;stroke-width:strokeWidth;}.cls-2{fill:#fff;stroke:none;}</style></defs><title>fixed_dark</title><g id="Layer_2" data-name="Layer 2"><g id="Fixed"><polygon class="cls-1" points="0 0 0 0.43 0 12 12 12 12 0 0 0"/><path class="cls-2" d="M3.24,2.73,1.36.86h9.29L8.77,2.73A4.29,4.29,0,0,0,3.24,2.73Z"/><circle class="cls-2" cx="6" cy="6" r="3.58" transform="translate(-2.49 6) rotate(-45)"/><path class="cls-2" d="M2.73,3.23a4.29,4.29,0,0,0,0,5.54L.86,10.62V1.37Z"/><path class="cls-2" d="M3.24,9.28a4.29,4.29,0,0,0,5.54,0l1.87,1.87H1.35Z"/><path class="cls-2" d="M9.28,8.77a4.29,4.29,0,0,0,0-5.54l1.86-1.86v9.26Z"/><circle class="cls-1" cx="6" cy="6" r="2" transform="translate(-2.49 6) rotate(-45)"/></g></g></svg>',
    },
    'ground_tower': {
        w: 22,
        h: 18,
        strokeScale: 20,
        noRotate: true,
        viewBox: "-25 -25 690 562",
        path: 'M168.67 192c11 0 18.61-10.83 14.85-21.18-4.93-13.58-7.55-27.98-7.55-42.82s2.62-29.24 7.55-42.82C187.29 74.83 179.68 64 168.67 64h-17.73c-7.01 0-13.46 4.49-15.41 11.23C130.64 92.21 128 109.88 128 128c0 18.12 2.64 35.79 7.54 52.76 1.94 6.74 8.39 11.24 15.4 11.24h17.73zm-120.8-64c0-37.81 9.46-73.41 26.05-104.66C79.56 12.72 71.97 0 59.97 0H40.61c-6.27 0-12.13 3.59-14.73 9.31C8.22 48.13-1.31 91.41.15 137.12c1.24 38.89 10.78 75.94 26.53 109.73 2.62 5.63 8.41 9.14 14.61 9.14h18.87c12.02 0 19.6-12.74 13.94-23.37C57.43 201.39 47.87 165.84 47.87 128zM614.07 9.29C611.46 3.58 605.61 0 599.34 0h-19.43c-11.98 0-19.66 12.66-14.02 23.25 23.26 43.67 32.56 95.83 21.53 150.66-4.16 20.72-11.49 40.35-21.26 58.57-5.72 10.68 1.8 23.52 13.91 23.52h19.24c6.27 0 12.13-3.58 14.73-9.29C630.57 210.48 640 170.36 640 128s-9.42-82.48-25.93-118.71zM489.06 64h-17.73c-11.01 0-18.61 10.83-14.86 21.18 4.93 13.58 7.55 27.98 7.55 42.82s-2.62 29.24-7.55 42.82c-3.76 10.35 3.85 21.18 14.86 21.18h17.73c7.01 0 13.46-4.49 15.41-11.24 4.9-16.97 7.53-34.64 7.53-52.76 0-18.12-2.64-35.79-7.54-52.76-1.94-6.75-8.39-11.24-15.4-11.24zM372.7 187.76C389.31 173.1 400 151.89 400 128c0-44.18-35.82-80-80.01-80-5.52 0-10.92.56-16.12 1.62a79.525 79.525 0 0 0-28.61 12.04c-21.28 14.38-35.27 38.72-35.27 66.34 0 23.86 10.83 44.86 27.4 59.52L143.98 483.68c-3.4 8.16.46 17.52 8.62 20.92l14.78 6.16c8.16 3.4 17.53-.46 20.93-8.62L245.26 368h149.47l56.96 134.15c3.4 8.16 12.77 12.02 20.93 8.62l14.78-6.16c8.16-3.4 12.01-12.77 8.62-20.92L372.7 187.76zM320 96c17.65 0 32 14.36 32 32s-14.36 32-32 32-32-14.36-32-32 14.35-32 32-32zm-54.35 224l47.84-112.66c2.19.18 4.28.66 6.51.66 2.23 0 4.33-.48 6.52-.66L374.35 320h-108.7z',
    },
}

let TypeDesignatorIcons = {
    'SHIP': ['balloon', 1], // Blimp

    'A318': ['airliner', 0.90], // shortened a320 68t
    'A319': ['airliner', 0.93], // shortened a320 75t
    'A19N': ['airliner', 0.93], // shortened a320
    'A320': ['airliner', 0.96], // 78t
    'A20N': ['airliner', 0.96],
    'A321': ['airliner', 0.99], // stretched a320 93t
    'A21N': ['airliner', 0.99], // stretched a320

    'A306': ['heavy_2e', 0.93],
    'A330': ['heavy_2e', 0.96],
    'A332': ['heavy_2e', 0.96],
    'A333': ['heavy_2e', 0.96],
    'A338': ['heavy_2e', 0.96], // 800 neo
    'A339': ['heavy_2e', 0.96], // 900 neo
    'DC10': ['md11', 0.92],
    'MD11': ['md11', 0.96],

    'A359': ['heavy_2e', 1.00],
    'A35K': ['heavy_2e', 1.02],

    'A388': ['heavy_4e', 1.04],

    // dubious since these are old-generation 737s
    // but the shape is similar
    'B731': ['airliner', 0.88],
    'B732': ['airliner', 0.88],
    'B733': ['airliner', 0.90],
    'B734': ['airliner', 0.94],
    'B735': ['airliner', 0.96],

    // these probably need reworking
    // since they vary in length
    'B736': ['airliner', 0.92],
    'B737': ['airliner', 0.93],
    'B738': ['airliner', 0.96],
    'B739': ['airliner', 0.98],

    'J328': ['airliner', 0.78], // 15t
    'E170': ['airliner', 0.82], // 38t
    'E75S/L': ['airliner', 0.82],
    'E75L': ['airliner', 0.82],
    'E75S': ['airliner', 0.82],  // 40t
    'E190': ['airliner', 0.84], // 52t
    'E195': ['airliner', 0.84], // 52t
    'E290': ['airliner', 0.84], // 56t
    'E295': ['airliner', 0.86], // 62t
    'BCS1': ['airliner', 0.86], // 64t
    'BCS3': ['airliner', 0.88], // 70t

    'B741': ['heavy_4e', 0.96],
    'B742': ['heavy_4e', 0.96],
    'B743': ['heavy_4e', 0.96],
    'B744': ['heavy_4e', 0.96],
    'B74D': ['heavy_4e', 0.96],
    'B74S': ['heavy_4e', 0.96],
    'B74R': ['heavy_4e', 0.96],
    'BLCF': ['heavy_2e', 0.96],
    'BSCA': ['heavy_4e', 0.96], // hah!
    'B748': ['heavy_4e', 0.98],

    'B752': ['airliner', 1.04],
    'B753': ['airliner', 1.04],

    'B772': ['heavy_2e', 1.00], // all pretty similar except for length
    'B773': ['heavy_2e', 1.02],
    'B77L': ['heavy_2e', 1.02],
    'B77W': ['heavy_2e', 1.04],

    'C680': ['jet_swept', 0.92], // 14t
    'C68A': ['jet_swept', 0.92], // 14t
    'C750': ['jet_swept', 0.94], // 17t
    'FA50': ['jet_swept', 0.94], // 18t
    'CL30': ['jet_swept', 0.92], // 14t
    'CL35': ['jet_swept', 0.92],
    'CL60': ['jet_swept', 0.96], // 22t
    'GLEX': ['jet_swept', 1],
    'G200': ['jet_swept', 0.92], // 16t
    'G280': ['jet_swept', 0.92], // 18t
    'GL5T': ['jet_swept', 1],
    'GLF2': ['jet_swept', 0.96], // 29t
    'GLF3': ['jet_swept', 0.96], // 31t
    'GLF4': ['jet_swept', 0.96], // 34t
    'GLF5': ['jet_swept', 0.98], // 41t
    'GLF6': ['jet_swept', 1], // 48t
    'E135': ['jet_swept', 0.92], // 20t
    'E35L': ['jet_swept', 0.92], // 24t
    'E145': ['jet_swept', 0.92], // 22t
    'E45X': ['jet_swept', 0.92], // 24t
    'CRJ1': ['jet_swept', 0.92], // 24t
    'CRJ2': ['jet_swept', 0.92], // 24t
    'CRJ7': ['jet_swept', 0.94], // 34t
    'CRJ9': ['jet_swept', 0.96], // 38t
    'CRJX': ['jet_swept', 0.98], // 41t
    'MD80': ['jet_swept', 1.04], // 60t
    'MD81': ['jet_swept', 1.04],
    'MD82': ['jet_swept', 1.04],
    'MD83': ['jet_swept', 1.04],
    'MD87': ['jet_swept', 1.04],
    'MD88': ['jet_swept', 1.04], // 72t
    'B712': ['jet_swept', 1.04], // 54t
    'F100': ['jet_swept', 1], // 45t

    'C501': ['jet_nonswept', 1],
    'C510': ['jet_nonswept', 1],
    'C25A': ['jet_nonswept', 1],
    'C25B': ['jet_nonswept', 1],
    'C25C': ['jet_nonswept', 1],
    'C525': ['jet_nonswept', 1],
    'C550': ['jet_nonswept', 1],
    'C560': ['jet_nonswept', 1],
    'C56X': ['jet_nonswept', 1], // 9t
    'C650': ['jet_nonswept', 1], // 11t
    'LJ35': ['jet_nonswept', 1], // 8t
    'LR35': ['jet_nonswept', 1], // wrong but in database
    'LJ60': ['jet_nonswept', 1], // 10t
    'LR45': ['jet_nonswept', 1], // 10t
    'G150': ['jet_nonswept', 1], // 11t
    'H25A': ['jet_nonswept', 1.04], // 11t
    'H25B': ['jet_nonswept', 1.04], // 11t
    'H25C': ['jet_nonswept', 1.04], // 11t
    'PRM1': ['jet_nonswept', 0.96],
    'E55P': ['jet_nonswept', 0.96],
    'E50P': ['jet_nonswept', 0.96],
    'EA50': ['jet_nonswept', 0.96],
    'HDJT': ['jet_nonswept', 0.96],
    'SF50': ['jet_nonswept', 0.94],


    'A37': ['hi_perf', 1],
    'A700': ['hi_perf', 1],
    'LEOP': ['hi_perf', 1],
    'ME62': ['hi_perf', 1],
    'T2': ['hi_perf', 1],
    'T37': ['hi_perf', 1],
    'T38': ['t38', 1],
    'A10': ['hi_perf', 1],
    'A148': ['hi_perf', 1],
    'A3': ['hi_perf', 1],
    'A6': ['hi_perf', 1],
    'AJET': ['alpha_jet', 1],
    'AT3': ['hi_perf', 1],
    'CKUO': ['hi_perf', 1],
    'EUFI': ['typhoon', 1],
    'F1': ['hi_perf', 1],
    'F111': ['hi_perf', 1],
    'F117': ['hi_perf', 1],
    'F14': ['hi_perf', 1],
    'F15': ['hi_perf', 1],
    'F16': ['hi_perf', 1],
    'F18': ['hi_perf', 1],
    'F22': ['hi_perf', 1],
    'F22A': ['hi_perf', 1],
    'F4': ['hi_perf', 1],
    'F5': ['hi_perf', 1],
    'FOUG': ['hi_perf', 1],
    'J8A': ['hi_perf', 1],
    'J8B': ['hi_perf', 1],
    'JH7': ['hi_perf', 1],
    'LTNG': ['hi_perf', 1],
    'METR': ['hi_perf', 1],
    'MG19': ['hi_perf', 1],
    'MG25': ['hi_perf', 1],
    'MG29': ['hi_perf', 1],
    'MG31': ['hi_perf', 1],
    'MG44': ['hi_perf', 1],
    'MIR4': ['hi_perf', 1],
    'MT2': ['hi_perf', 1],
    'Q5': ['hi_perf', 1],
    'RFAL': ['hi_perf', 1],
    'S3': ['hi_perf', 1],
    'S37': ['hi_perf', 1],
    'SR71': ['hi_perf', 1],
    'SU15': ['hi_perf', 1],
    'SU24': ['hi_perf', 1],
    'SU25': ['hi_perf', 1],
    'SU27': ['hi_perf', 1],
    'T22M': ['hi_perf', 1],
    'T4': ['hi_perf', 1],
    'TOR': ['hi_perf', 1],
    'TU22': ['hi_perf', 1],
    'VAUT': ['hi_perf', 1],
    'WB57': ['hi_perf', 1],
    'Y130': ['hi_perf', 1],
    'YK28': ['hi_perf', 1],
    'BE20': ['twin_large', 0.92],

    'A225': ['a225', 1],

    'C130': ['c130', 1.07],
    'C30J': ['c130', 1.07],

    'A400': ['a400', 1],

    'V22F': ['v22_fast', 1],
    'V22': ['v22_slow', 1],

    'R44': ['helicopter', 1.1],

    'C17': ['c17', 0.82],
    'E3TF': ['e3awacs', 0.88],
    'E3CF': ['e3awacs', 0.88],
    //
    'GND': ['ground_unknown', 1],
    'GRND': ['ground_unknown', 1],
    'SERV': ['ground_service', 1],
    'EMER': ['ground_emergency', 1],
    'TWR': ['ground_tower', 1],
};

// Maps ICAO aircraft type description codes (e.g. "L2J") to aircraft icons. This is used if the ICAO type designator (e.g. "B731")
// cannot be found in the TypeDesignatorIcons mappings. The key can be one of the following:
//   - Single character: The basic aircraft type letter code (e.g. "H" for helicopter).
//   - Three characters: The ICAO type description code (e.g. "L2J" for landplanes with 2 jet engines).
//   - Five characters: The ICAO type description code concatenated with the wake turbulence category code, separated by
//     a dash (e.g. "L2J-M").

let TypeDescriptionIcons = {
    'H': ['helicopter', 1],

    'L1P': ['cessna', 1],
    'L1T': ['single_turbo', 1],
    'L1J': ['hi_perf', 0.92],

    'L2P': ['twin_small', 1],
    'L2T': ['twin_large', 0.96],
    'L2T-M': ['twin_large', 1.12],

    'L1J-L': ['jet_nonswept', 1], // < 7t
    'L2J-L': ['jet_nonswept', 1], // < 7t
    'L2J-M': ['airliner', 1], // < 136t
    'L2J-H': ['heavy_2e', 0.96], // > 136t

    'L3J-H': ['md11', 1], // > 136t

    'L4T-M': ['c130', 1],
    'L4T-H': ['c130', 1.15],

    'L4J-H': ['heavy_4e' , 0.96],
};

let CategoryIcons = {
    "A1" : ['cessna', 1],// < 7t

    "A2" : ['jet_swept', 0.94], // < 34t

    "A3" : ['airliner', 0.96], // < 136t

    "A4" : ['airliner', 1], // < 136t

    "A5" : ['heavy_2e', 0.92], // > 136t

    "A6" : ['hi_perf', 0.94],

    "A7" : ['helicopter', 1],

    "B2" : ['balloon', 1],

    'C0' : ['ground_unknown', 1],

    'C1' : ['ground_emergency', 1],

    'C2' : ['ground_service', 1],

    'C3' : ['ground_tower', 1],
};

function getBaseMarker(category, typeDesignator, typeDescription, wtc) {
    if (typeDesignator in TypeDesignatorIcons) {
        let shape = TypeDesignatorIcons[typeDesignator][0];
        let scaling = TypeDesignatorIcons[typeDesignator][1];
        return [shape, scaling];
    }

    if (typeDescription !== undefined && typeDescription !== null && typeDescription.length === 3) {
        if (wtc !== undefined && wtc !== null && wtc.length === 1) {
            let typeDescriptionWithWtc = typeDescription + "-" + wtc;
            if (typeDescriptionWithWtc === "L2J-M" && category === "A2") {
                return ["jet_swept", 1];
            }
            if (typeDescriptionWithWtc in TypeDescriptionIcons) {
                let shape = TypeDescriptionIcons[typeDescriptionWithWtc][0];
                let scaling = TypeDescriptionIcons[typeDescriptionWithWtc][1];
                return [shape, scaling];
            }
        }

        if (typeDescription in TypeDescriptionIcons) {
            let shape = TypeDescriptionIcons[typeDescription][0];
            let scaling = TypeDescriptionIcons[typeDescription][1];
            return [shape, scaling];
        }

        let basicType = typeDescription.charAt(0);
        if (basicType in TypeDescriptionIcons) {
            return [TypeDescriptionIcons[basicType][0], 1];
        }
    }

    if (category in CategoryIcons) {
        return CategoryIcons[category];
    }

    return ['unknown', 1];
}

function svgShapeToURI(shape, fillColor, strokeColor, strokeWidth){

    strokeWidth *= (shape.strokeScale ? shape.strokeScale : 1);

    if (!shape.path) {
        let svg = shape.svg.replace('fillColor', fillColor).replace('strokeColor', strokeColor).replace('strokeWidth', strokeWidth);
        return "data:image/svg+xml;base64," + btoa(svg);
    }


    let svg = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="' + shape.viewBox + '" '
        + (shape.noAspect ? 'preserveAspectRatio="none" ' : '')
        + 'width="' + shape.w + '" height="' + shape.h + '">'
        + '<path fill="' + fillColor + '" stroke="' + strokeColor + '" stroke-width="' + strokeWidth + '" '
        + 'd="' + shape.path + '"/></svg>';

    return "data:image/svg+xml;base64," + btoa(svg);
}
