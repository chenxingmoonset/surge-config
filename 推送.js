function Notify_Demo()
{
var Title,SubTitle,Content;
Title="主标题";
SubTitle="子标题";
Content="要推送的内容";
$nitification.post.(Title,SubTitle,Content);
//console.log(Content);
}
//Call function;
Notify_Demo();
$done()