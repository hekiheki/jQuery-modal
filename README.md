# jQuery-modal

## API

<table>
        <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
        </tr>
        <tr>
            <td>title</td>
            <td>标题</td>
            <td>string | DOM</td>
            <td>无</td>
        </tr>
        <tr>
            <td>content</td>
            <td>内容</td>
            <td>string | DOM</td>
            <td>无</td>
        </tr>
        <tr>
            <td>closable</td>
            <td>是否显示右上角的关闭按钮</td>
            <td>boolean</td>
            <td>true</td>
        </tr>
        <tr>
            <td>okText</td>
            <td>确定按钮文字</td>
            <td>string</td>
            <td>确定</td>
        </tr>
        <tr>
            <td>cancleText</td>
            <td>取消按钮文字</td>
            <td>string</td>
            <td>取消</td>
        </tr>
        <tr>
            <td>width</td>
            <td>设置myModal宽度</td>
            <td>Number</td>
            <td>450</td>
        </tr>
        <tr>
            <td>height</td>
            <td>设置myModal高度</td>
            <td>Number</td>
            <td>200</td>
        </tr>
        <tr>
            <td>zIndex</td>
            <td>设置 myModal 的 z-index</td>
            <td>Number</td>
            <td>999</td>
        </tr>
        <tr>
            <td>mask</td>
            <td>是否展示遮罩</td>
            <td>boolean</td>
            <td>true</td>
        </tr>
        <tr>
            <td>drag</td>
            <td>是否可以拖动 myModal</td>
            <td>boolean</td>
            <td>false</td>
        </tr>
        <tr>
            <td>onOk</td>
            <td>点击确定回调</td>
            <td>function()</td>
            <td>无</td>
        </tr>        
        <tr>
            <td>onCancle</td>
            <td>点击遮罩层或右上角叉或取消按钮的回调</td>
            <td>function()</td>
            <td>无</td>
        </tr>       
</table>

## 如何使用

``` javascript
<link rel="stylesheet" href="modal.css">
// 引入jquery文件
<script src="jquery.min.js"></script>
// 引入modal.js
<script src="modal.js"></script>
<script>
	//点击selecter会出现myModal框
	$(selecter).myModal({
		// set oprions here
		...
	})
</script>
```
