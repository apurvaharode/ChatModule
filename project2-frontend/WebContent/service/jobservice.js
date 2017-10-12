/**
 *  Service
 */
app.factory('JobService',function($http){
	var jobService={}
var BASE_URL="http://localhost:8081/project2-backend"
	jobService.saveJob=function(job)
	{
	console.log(job)
	return $http.get(BASE_URL+"/savejob",job)
	}
	jobService.listOfJobs=function()
	{
		return $http.get(BASE_URL +"/getalljobs")
	}
jobService.getJobById=fuction(id)
{
	return $http.get(BASE_URL +"/getjobbyid/"+id)
	}
return jobService;
})