/**
 *FriendService 
 */
app.factory('FriendService',function($http){
	var friendService={}
	var BASE_URL="http://localhost:8081/project2-backend"
		friendService.suggestedUsers=function(){
		return $http.get(BASE_URL +"/suggestedusers")
	}
	friendService.sendFriendRequest=function(toId){
		return $http.post(BASE_URL +"/friendrequest/"+toId)
	}
 	friendService.pendingRequests=function(){
		return $http.get(BASE_URL +"/pendingrequests")
	}
	friendService.updatePendingRequest=function(){
		return $http.put(BASE_URL +"/updatependingrequest",request)
	}
	friendService.getUserDetails=function(fromId){
		return $http.get(BASE_URL +"/getuserdetails/"+fromId)
	}
	friendService.getFriend=function(){
		return $http.get(BASE_URL +"/getfriends")
	}
	return friendService;
	
})