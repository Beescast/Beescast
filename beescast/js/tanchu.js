// JavaScript Document
			(function() {

				var dlgtrigger = document.querySelector( '[data-dialog]' ),

					somedialog = document.getElementById( dlgtrigger.getAttribute( 'data-dialog' ) ),
					// svg..
					morphEl = somedialog.querySelector( '.morph-shape' ),
					s = Snap( morphEl.querySelector( 'svg' ) ),
					path = s.select( 'path' ),
					steps = { 
						open : morphEl.getAttribute( 'data-morph-open' ),
						close : morphEl.getAttribute( 'data-morph-close' )
					},
					dlg = new DialogFx( somedialog, {
						onOpenDialog : function( instance ) {
							// animate path
							setTimeout(function() {
								path.stop().animate( { 'path' : steps.open }, 1500, mina.elastic );
							}, 250 );
						},
						onCloseDialog : function( instance ) {
							// animate path
							path.stop().animate( { 'path' : steps.close }, 250, mina.easeout );
						}
					} );

				dlgtrigger.addEventListener( 'click', dlg.toggle.bind(dlg) );

			})();
		
	
// 渐变弹出层
$(document).ready(function(){
 var speed = 600;//动画速度
 $(".race").click(function(event){//绑定事件处理
	event.stopPropagation();
	 $(".racePop").show(speed);
	 $(".racePop-b").hide(speed);
	 $(".racePop-c").hide(speed);
 //var offset = $(event.target).offset();//取消事件冒泡
 //$("#racePop").css({ top:offset.top + $(event.target).height() + "px", left:offset.left });//设置弹出层位置
	 
// $("#racePop").show(speed);//动画显示
 });
 $(document).click(function(event) { $(".racePop").hide(speed) });//单击空白区域隐藏
//$("#racePop").click(function(event) { $("#racePop").hide(speed) });//单击弹出层则自身隐藏
	 
 
});
	
$(document).ready(function(){
 var speed = 600;//动画速度
 $(".race-b").click(function(event){//绑定事件处理
	event.stopPropagation();
	 $(".racePop-b").show(speed);
	 $(".racePop").hide(speed);
	 $(".racePop-c").hide(speed);
 //var offset = $(event.target).offset();//取消事件冒泡
 //$("#racePop").css({ top:offset.top + $(event.target).height() + "px", left:offset.left });//设置弹出层位置
	 
// $("#racePop").show(speed);//动画显示
 });
 $(document).click(function(event) { $(".racePop-b").hide(speed) });//单击空白区域隐藏
//$("#racePop").click(function(event) { $("#racePop").hide(speed) });//单击弹出层则自身隐藏
	 
 
});
	$(document).ready(function(){
 var speed = 600;//动画速度
 $(".race-c").click(function(event){//绑定事件处理
	event.stopPropagation();
	 $(".racePop-c").show(speed);
	 $(".racePop").hide(speed);
	 $(".racePop-b").hide(speed);

 //var offset = $(event.target).offset();//取消事件冒泡
 //$("#racePop").css({ top:offset.top + $(event.target).height() + "px", left:offset.left });//设置弹出层位置
	 
// $("#racePop").show(speed);//动画显示
 });
 $(document).click(function(event) { $(".racePop-c").hide(speed) });//单击空白区域隐藏
//$("#racePop").click(function(event) { $("#racePop").hide(speed) });//单击弹出层则自身隐藏
	 
 
});
$(document).ready(function(){
	//var speed=300;
	$(".photo-box").click(function(){
		//event.stopPropagation();
		$(".portfolio-load").show(300);
	})
})
