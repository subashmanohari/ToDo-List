

$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});


//click on x to delete
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove(); 
	});
	event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
	if(event.which===13){
		var todoText= $(this).val();
		$(this).val("");
		//create a new li
		$("ul").append('<li><span><i class="fa fa-trash" aria-hidden="true"></i> </span>'+ todoText+'</li>');
	}
})

$(".fa-plus-square-o").click(function(){
	$("input[type='text']").fadeToggle();
})