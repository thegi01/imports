var wrap = document.getElementById('wrap');

/* Include Template */
// Template Include 
var insertTempate = function(node, link){
    link.addEventListener('load', function(){
        var tp = this.import.querySelector('template');
        var clone = document.importNode(tp.content, true);
        wrap.insertBefore(clone, node);
        node.remove();
    }, false);
};
// link import 생성 및 추가 
var includes = document.querySelectorAll('[data-include]');
for(var i=0 ; i<includes.length ; i++){
    var node = includes[i];
    var link = document.createElement('link'); 
    link.rel = 'import';
    link.href = node.dataset.include +'.html';            
    document.head.appendChild(link);
    insertTempate(node, link);
}