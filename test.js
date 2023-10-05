let body=$response.body.replace(RegExp($argument,"g"),"google");//响应体替换😏
let headers=$response.headers;
$done({headers,body})