/**
 * BlogPostDetail controller
 * http://localhost:8080/project2_frontend/index.html#/blogpostforapproval/302
 *  http://localhost:8080/project2_frontend/index.html#/blogpostdetail/304
 */
app.controller('BlogPostDetailController',function($scope,$location,BlogPostService,$routeParams){
	var id=$routeParams.id
	$scope.showRejectionTxt=false
	$scope.isLiked=false;
	/*
	 * statement will fetch blogpost object for the given id
	 * $scope.blogPost - details about blogpost for given id
	 * for $scope.blogPost user is posting a comment
	 */
	BlogPostService.getBlogPostById(id).then(function(response){
		$scope.blogPost=response.data
		console.log(response.data)
	},function(response){
		console.log(response.status)
		if(response.status==401)
			$location.path('/login')
			
	})
	
	$scope.updateApproval=function(){
		console.log($scope.blogPost)
		BlogPostService.updateApproval($scope.blogPost).then(function(response){
			$location.path('/getallblogs')
		},function(response){
			if(response.data==401)
				$location.path('/login')
			else
			$location.path('/blogpostforapproval/'+id)
		})
	}
    $scope.setValueForRejectionTxt=function(val){
    	$scope.showRejectionTxt=val
    }	
    
    $scope.addComment=function(){
    	/*
    	 * Assign blogPost object to the property blogPost in blogComment
    	 * blogComment.setBlogPost(blogPost)
    	 * we are assigning value for FK blogpost_id in blogcomment table
    	 */
    	console.log('before assigning blogPost to blogComment.blogPost is ' + $scope.blogComment)
    	//to set the value for FK blogPost_id in blogcomment table
    	$scope.blogComment.blogPost=$scope.blogPost//blogPost for which user has posted the comment
    	console.log('After assigning blogPost to blogComment.blogPost is ' + $scope.blogComment)
    	BlogPostService.addComment($scope.blogComment).then(function(response){
    		$scope.blogComment.commentText=''
    		console.log(response.data)//BlogComment
    		getBlogComments()
    	},function(response){
    		console.log(response.data)//Error
    	})
    }
    
    function getBlogComments(){
    	BlogPostService.getBlogComments(id).then(function(response){
    		$scope.blogComments=response.data //List<BlogComment>
    	},function(response){
    		console.log(response.status)
    	})
    }
    $scope.updateLikes=function(){
    	$scope.isLiked=!$scope.isLiked
    	if($scope.isLiked){
    		$scope.blogPost.likes=$scope.blogPost.likes+1
    	}
    	else
    		{
    		$scope.blogPost.likes=$scope.blogPost.likes-1;
    		}
    	BlogPostService.updateApproval($scope.blogPost).then(function(response){
    		console.log(response.data)
    	},function(response){
    		console.log(response.data)
    	})
    }
    
    getBlogComments()
})