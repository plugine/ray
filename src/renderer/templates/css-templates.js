const base =
`html{height:100%}body{height:100%;margin:0;padding:15px;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Droid Sans,Helvetica Neue;}`
const main =
`blockquote,h1,h2,h3,h4,h5,h6,ol,p,pre,ul{margin:0;padding:0;counter-reset:a b c d e f g h i}ol,ul{padding-left:1.5em}ol>li,ul>li{list-style-type:none}ul>li:before{content:"\\2022"}ul[data-checked=false],ul[data-checked=true]{pointer-events:none}ul[data-checked=false]>li *,ul[data-checked=true]>li *{pointer-events:all}ul[data-checked=false]>li:before,ul[data-checked=true]>li:before{color:#777;cursor:pointer;pointer-events:all}ul[data-checked=true]>li:before{content:"\\2611"}ul[data-checked=false]>li:before{content:"\\2610"}li:before{display:inline-block;white-space:nowrap;width:1.2em}li:not(.ql-direction-rtl):before{margin-left:-1.5em;margin-right:.5em;text-align:right}li.ql-direction-rtl:before{margin-left:.5em;margin-right:-1.5em}ol li:not(.ql-direction-rtl),ul li:not(.ql-direction-rtl){padding-left:1.5em}ol li.ql-direction-rtl,ul li.ql-direction-rtl{padding-right:1.5em}ol li{counter-reset:a b c d e f g h i;counter-increment:j}ol li:before{content:counter(j,decimal) ". "}ol li.ql-indent-1{counter-increment:a}ol li.ql-indent-1:before{content:counter(a,lower-alpha) ". "}ol li.ql-indent-1{counter-reset:b c d e f g h i}ol li.ql-indent-2{counter-increment:b}ol li.ql-indent-2:before{content:counter(b,lower-roman) ". "}ol li.ql-indent-2{counter-reset:c d e f g h i}ol li.ql-indent-3{counter-increment:c}ol li.ql-indent-3:before{content:counter(c,decimal) ". "}ol li.ql-indent-3{counter-reset:d e f g h i}ol li.ql-indent-4{counter-increment:d}ol li.ql-indent-4:before{content:counter(d,lower-alpha) ". "}ol li.ql-indent-4{counter-reset:e f g h i}ol li.ql-indent-5{counter-increment:e}ol li.ql-indent-5:before{content:counter(e,lower-roman) ". "}ol li.ql-indent-5{counter-reset:f g h i}ol li.ql-indent-6{counter-increment:f}ol li.ql-indent-6:before{content:counter(f,decimal) ". "}ol li.ql-indent-6{counter-reset:g h i}ol li.ql-indent-7{counter-increment:g}ol li.ql-indent-7:before{content:counter(g,lower-alpha) ". "}ol li.ql-indent-7{counter-reset:h i}ol li.ql-indent-8{counter-increment:h}ol li.ql-indent-8:before{content:counter(h,lower-roman) ". "}ol li.ql-indent-8{counter-reset:i}ol li.ql-indent-9{counter-increment:i}ol li.ql-indent-9:before{content:counter(i,decimal) ". "}.ql-indent-1:not(.ql-direction-rtl){padding-left:3em}li.ql-indent-1:not(.ql-direction-rtl){padding-left:4.5em}.ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:3em}li.ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:4.5em}.ql-indent-2:not(.ql-direction-rtl){padding-left:6em}li.ql-indent-2:not(.ql-direction-rtl){padding-left:7.5em}.ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:6em}li.ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:7.5em}.ql-indent-3:not(.ql-direction-rtl){padding-left:9em}li.ql-indent-3:not(.ql-direction-rtl){padding-left:10.5em}.ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:9em}li.ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:10.5em}.ql-indent-4:not(.ql-direction-rtl){padding-left:12em}li.ql-indent-4:not(.ql-direction-rtl){padding-left:13.5em}.ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:12em}li.ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:13.5em}.ql-indent-5:not(.ql-direction-rtl){padding-left:15em}li.ql-indent-5:not(.ql-direction-rtl){padding-left:16.5em}.ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:15em}li.ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:16.5em}.ql-indent-6:not(.ql-direction-rtl){padding-left:18em}li.ql-indent-6:not(.ql-direction-rtl){padding-left:19.5em}.ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:18em}li.ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:19.5em}.ql-indent-7:not(.ql-direction-rtl){padding-left:21em}li.ql-indent-7:not(.ql-direction-rtl){padding-left:22.5em}.ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:21em}li.ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:22.5em}.ql-indent-8:not(.ql-direction-rtl){padding-left:24em}li.ql-indent-8:not(.ql-direction-rtl){padding-left:25.5em}.ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:24em}li.ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:25.5em}.ql-indent-9:not(.ql-direction-rtl){padding-left:27em}li.ql-indent-9:not(.ql-direction-rtl){padding-left:28.5em}.ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:27em}li.ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:28.5em}.ql-video{display:block;max-width:100%}.ql-video.ql-align-center{margin:0 auto}.ql-video.ql-align-right{margin:0 0 0 auto}.ql-bg-black{background-color:#000}.ql-bg-red{background-color:#e60000}.ql-bg-orange{background-color:#f90}.ql-bg-yellow{background-color:#ff0}.ql-bg-green{background-color:#008a00}.ql-bg-blue{background-color:#06c}.ql-bg-purple{background-color:#93f}.ql-color-white{color:#fff}.ql-color-red{color:#e60000}.ql-color-orange{color:#f90}.ql-color-yellow{color:#ff0}.ql-color-green{color:#008a00}.ql-color-blue{color:#06c}.ql-color-purple{color:#93f}.ql-font-serif{font-family:Georgia,Times New Roman,serif}.ql-font-monospace{font-family:Monaco,Courier New,monospace}.ql-size-small{font-size:.75em}.ql-size-large{font-size:1.5em}.ql-size-huge{font-size:2.5em}.ql-direction-rtl{direction:rtl;text-align:inherit}.ql-align-center{text-align:center}.ql-align-justify{text-align:justify}.ql-align-right{text-align:right}.ql-blank:before{color:rgba(0,0,0,.6);content:attr(data-placeholder);font-style:italic;left:15px;pointer-events:none;position:absolute;right:15px}h1{font-size:2em}h2{font-size:1.5em}h3{font-size:1.17em}h4{font-size:1em}h5{font-size:.83em}h6{font-size:.67em}a{text-decoration:underline}blockquote{border-left:4px solid #ccc;margin-bottom:5px;margin-top:5px;padding-left:16px}code,pre{background-color:#f0f0f0;border-radius:3px}pre{white-space:pre-wrap;margin-bottom:5px;margin-top:5px;padding:5px 10px}code{font-size:85%;padding:2px 4px}pre.ql-syntax{background-color:#23241f;color:#f8f8f2;overflow:visible}img{max-width:100%}`

export {
  base,
  main
}