var wrap = document.getElementById('wrap');

/* Insert Tempalte Function */
var insertTempate = function(node, link){
    link.addEventListener('load', function(){
        var tp = this.import.querySelector('template');
        window.importCssFile(tp);
        var clone = document.importNode(tp.content, true);
        wrap.insertBefore(clone, node);
        node.remove();
    }, false);
};

/* Import Css File Function */
var importCssFile = function( tp ){
    var css = tp.dataset.css;
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href= './resources/css/' + css + '.css';
    document.head.appendChild(link);
};


/* link import 생성 및 Template 추가 */
var includes = document.querySelectorAll('[data-include]');
for(var i=0 ; i<includes.length ; i++){
    var node = includes[i];
    var link = document.createElement('link'); 
    link.rel = 'import';
    link.href = node.dataset.include +'.html';            
    window.insertTempate(node, link);
    document.head.appendChild(link);
}


