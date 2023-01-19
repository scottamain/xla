hljs.registerLanguage("mlir",function(){"use strict";return function(e){
var s="[\\w\\d_$.]+",n={className:"type",
begin:"[x\\b\\s]*(i\\d+|f(16|32|64)|bf16)"},a={className:"attr",
begin:"\\([^)>]*\\)\\s*->\\s*\\([^)>]*\\)"},r={className:"type",variants:[a]}
;return{name:"MLIR",keywords:"func module br cond_br return",contains:[n,{
className:"type",begin:"!"+s},e.C_LINE_COMMENT_MODE,e.QUOTE_STRING_MODE,{
className:"type",begin:"(memref|tensor|vector)<\\b",end:">",
keywords:"memref tensor vector",contains:[{className:"number",variants:[{
begin:"[*]x"},{begin:"((\\?|\\d+)\\s*x\\s*)+"}]},"self",n,r]},{
className:"keyword",begin:"affine_map<",end:">",keywords:"affine_map",
contains:[a]},{className:"title",variants:[{begin:"@"+s},{begin:"@\\d+"}]},{
className:"symbol",variants:[{begin:"%"+s+"([:#]\\d+)?"},{begin:"\\^"+s},{
begin:"#"+s}]},e.C_NUMBER_MODE]}}}());

document$.subscribe(() => {
  hljs.highlightAll()
})
