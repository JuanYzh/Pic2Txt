/*拖拽的目标对象------ document 监听drop 并防止浏览器打开客户端的图片*/
document.ondragover = function (e) {
    e.preventDefault();  //只有在ondragover中阻止默认行为才能触发 ondrop 而不是 ondragleave
};
document.ondrop = function (e) {
    e.preventDefault();  //阻止 document.ondrop的默认行为  *** 在新窗口中打开拖进的图片
};
/*拖拽的源对象----- 客户端的一张图片 */
/*拖拽目标对象-----div#container  若图片释放在此元素上方，则需要在其中显示*/
drag.ondragover = function (e) {
    e.preventDefault();
};
drag.ondrop = function (e) {
    console.log(e.dataTransfer);
//        chrome 此处的显示有误
    var list = e.dataTransfer.files;
    for (var i = 0; i < list.length; i++) {
        var f = list[i];
//      console.log(f);
        reader(f);
//            读取指定文件的内容 作为“数据URL”
//            reader.readAsDataURL(f);
//            当客户端文件读取完成 触发onload事件
        }
    };
function reader(f) {
    var reader = new FileReader();
    reader.readAsDataURL(f);
    reader.onload = function () {
//            console.log(reader.result);
        var img = new Image();
        img.src = reader.result;
        drag.appendChild(img);

        }
    }
