angular.module('app', [])
  .controller('AppController', function ($http, $interval) {
    var vm = this

    getHomeworks()
    $interval(function () {
      getHomeworks()
    }, 5000)

    vm.submit = function (input) {
      saveHomework(input)
    }

    vm.toThaiDateTime = function (date) {
      return moment(date).format("Do MMMM YYYY, h:mm:ss")
    }

    function getHomeworks () {
      $http.get('/api/iot')
        .then(function success (response) {
          vm.homeworks = response.data
        }, function error (response) {
          alert(response.data.message)
        })
    }

    function saveHomework (data) {
      $http.post('/', data)
        .then(function success (response) {
          console.log(response)
          getHomeworks()
          alert('Success')
        }, function error (response) {
          alert(response.data.message)
        })
    }

    // vm.Del = function (id,index){
    //   //console.log(id,index)
    //  $http.delete('/api/iot/'+id)
    //       .success(function(data) {
    //         vm.homeworks.splice(index,1)
            
            
    //       })
    //       .error(function(data) {
    //         console.log('Error: ' + data)
    //       })
        

    // }
  })
