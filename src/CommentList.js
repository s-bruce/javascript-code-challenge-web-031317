class CommentList {

	constructor(comments){
		this.comments = comments
	}

	render() {
		const lis = this.comments.map(comment => comment.render())
		return `<ul>${lis.join('')}</ul>`
	}

	addComment(commentText){
		const newComment = new Comment(commentText)
		this.comments.push(newComment)
	}
}