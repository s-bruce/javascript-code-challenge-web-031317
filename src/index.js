$(document).ready(function(){

	const commentList = new CommentList([])
  
	$("#note-form").submit(function(event){
		event.preventDefault()
		const commentText = $("input[type=text]").val()
		commentList.addComment(commentText)
		const commentsHtml = commentList.render()
		$("#comment-list").html(commentsHtml)
		$("input[type=text]").val("")
	})
	
})