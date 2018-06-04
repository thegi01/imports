var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(request, response){
    var parseURL = url.parse(request.url);
    var pathName = parseURL.pathname;
    pathName = pathName.substr(1);

    if(pathName === '') pathName = 'index.html';

    var tmp = pathName.lastIndexOf('.');
    var extension = pathName.substring((tmp+1));


    // 1. 요청된 자원이 있으면
    // if(pathName){
        // 2. 파일을 읽은 후
        fs.readFile(pathName, 'utf-8', function(error, data){
            // 2.1 읽으면서 오류가 발생하면 오류의 내용을
            if(error){
                response.writeHead( 500, {'Content-Type':'text/html'} );
                response.end('<h1>500 Internal Server Error</h1>',  error);
            // 2.2 아무런 오류가 없이 정상적으로 읽기가 완료되면 파일의 내용을 클라이언트에 전달
            } else{
                if( extension === 'css' ){
                    response.writeHead( 200, {'Content-Type':'text/css'} );
                } else {
                    response.writeHead( 200, {'Content-Type':'text/html'} );  
                }
                response.end(data);
            }
        });
    // } else{
    //     response.writeHead( 404, {'Content-Type':'text/html'} );
    //     response.end('404 Page Not Found');
    // }
});

server.listen(80, function(){
    console.log('Server is running...');
});


// 참조중
// https://stackoverflow.com/questions/18006730/node-js-resource-interpreted-as-script-but-transferred-with-mime-type-text-pla