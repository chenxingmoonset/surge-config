/*surge app已不可用(取消了$notification API)*/
function Notify_Demo()
{
var Title,SubTitle,Content;
Title="主标题";
SubTitle="子标题";
Content="要推送的内容";
$notification.post(Title,SubTitle,Content);
//console.log(Content);
}
//Call function;
Notify_Demo();
$done()