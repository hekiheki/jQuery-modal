;(function($, window, document,undefined) {
  //定义Modal的构造函数
  var Modal = function(ele, opt) {
      this.$element = ele;
      this.defaults = {
        title: null,
        content: "",
        closable: true,
        onOk: null,
        onCancle: null,
        okText: "确定",
        cancleText: "取消",
        drag: false,
        mask: true,
        width: 450,
        height: 200,
        visible: false,
        zIndex: "999"
      };
      for(var key in opt){
        if(!this.defaults.hasOwnProperty(key)){
          jQuery.error("no "+key+" in Modal")
        }
      }
      this.options = $.extend({}, this.defaults, opt)
  }
  //定义Modal的方法
  Modal.prototype = {
      init: function() {
        var _this = this;

        _this.$element.click(function(){
          if($('#modal').length>0){
            _this.modalShow(); 
          }else{
            _this.createModal(); 
          }
        })
        this.callbackFunc("#modal_onOk",this.options.onOk);
        this.callbackFunc("#modal_onCancle",this.options.onCancle);
        if(this.options.closable){
          this.callbackFunc("#modal_close",this.options.onCancle);
        }
        if(this.options.drag){
          this.drag();
        }
      },
      createModal: function(){
        var modalDiv = '<div id="modal" class="modal"></div>',
            width = this.options.width,
            height = this.options.height,
            title,content,onCancleBtn,onOkBtn,modalClose,
            _this = this;
          
        if(_this.options.mask){
          _this.createMask();
          $('#mask').append(modalDiv);
        }else{
          $('body').append(modalDiv);
        }
        if(this.options.closable){
          modalClose = '<i class="modal_icon iconfont icon-close" id="modal_close"></i>';
          $('#modal').append(modalClose);
        }
        if(this.options.title){
          title = '<div id="modal_title" class="modal_title">'+this.options.title+'</div>';
          $('#modal').append(title);
        }
        content = '<div id="modal_content" class="modal_content">'+this.options.content+'</div>';
        onCancleBtn = '<button id="modal_onCancle" class="modal_btn">'+this.options.cancleText+'</button>';
        onOkBtn = '<button id="modal_onOk" class="modal_btn">'+this.options.okText+'</button>';
        var modalButtons = '<div class="modal_buttons">'+onCancleBtn+onOkBtn+'</div>';

        $('#modal').append(content+modalButtons);
        // 设置css
        $('#modal').css({
          "position":"absolute",
          "width": width + "px",
          "height": height + "px",
          "left": "50%",
          "top": "20%",
          "margin-left": -width/2+"px",
          "z-index": this.options.zIndex
        });
      },
      createMask: function(){
        var maskDiv = '<div id="mask"></div>',
            width = $(document).width(),
            height = $(document).height();
        $('body').append(maskDiv);
        $('#mask').css({
          "width": "100%",
          "height": "100%",
          "position": "fixed",
          "left": 0,
          "top": 0,
          "z-index": '998',
          "background": "rgba(0,0,0,.5)"
        });
      },
      callbackFunc: function(element,callback){
        var _this = this;
        $('body').on("click",element,function(){
          _this.modalHide();
          if(typeof callback === 'function'){
            callback();
          }
        })
      },
      onCancleFunc: function(callback){
        var _this = this;
        $('body').on("click","#modal_onCancle",function(){
          _this.modalHide();
          if(typeof callback === 'function'){
            callback();
          }
        })
      },
      modalShow: function(){
        $('#modal').show();
        $('#mask').show();
      },
      modalHide: function(){
        $('#modal').hide();
        $('#mask').hide();
      },
      isDown: false,
      drag: function(){
        var _this = this,
            mouseX,mouseY,objX,objY;
            
        $('body').on('mousedown','#modal',function(e){
          var e = window.event || e;
          var pos = $('#modal').position();
            if(e.button == 0 || e.button == 1){
                (!window.ActiveXObject) ? e.preventDefault() : e.returnValue = false; //取消默认行为
                mouseX = e.clientX;
                mouseY = e.clientY;
                objX = parseInt(pos.left);
                objY = parseInt(pos.top);
                _this.isDown = true;
            }
        })

        $('body').bind('mousemove',function(e){
          if(_this.isDown){
            var e = window.event || e;
            var left = e.clientX - mouseX + objX + "px";
            var top = e.clientY - mouseY + objY + "px";
            $('#modal').css({"top": top,"left": left});
          }
        })
        $('body').bind('mouseup',function(e){
          _this.isDown = false;
        })
      }
  }
  //在插件中使用Modal对象
  $.fn.myModal = function(options) {
      //创建Modal的实体
      var modal = new Modal(this, options);
      //调用其方法
      return modal.init();
  }
})(jQuery, window, document);