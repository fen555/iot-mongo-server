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

    vm.Del = function (id,index){
      //console.log(id,index)
     $http.delete('/api/iot/'+id)
          .success(function(data) {
            vm.homeworks.splice(index,1)
            
            
          })
          .error(function(data) {
            console.log('Error: ' + data)
          })
        

    }

    vm.login = function(){
      window.location = "login.html"
    }


    vm.log = function(){
      console.log(vm.username + " " + vm.password)
      $http.post('/login' , { username : vm.username,password : vm.password })
       .then(function success (response) {
            console.log(response)
            if(response.data[0] != null){
              if(response.data[0].username == vm.username ){
                console.log("have")
                window.location = "report.html"
              }else  console.log("don't have")
            }else   console.log("don't have")
         })
    }

    vm.register = function(regis){
      console.log(regis)
      $http.post('/api/member', regis)
          .then(function success (response) {

            console.log(response)
            
            alert('Success')
          }, function error (response) {
            alert(response.data.message)
        })
    }



    vm.graph_T = function(){
          $http.get('/api/iot')
                  .then(function success (response) {
             
                      var data = {
                          labels: [],
                          datasets: [
                              {
                                  label: "MAX",
                                  fillColor: "rgba(100,220,220,0.5)",
                                  strokeColor: "rgba(100,220,220,0.8)",
                                  highlightFill: "rgba(100,220,220,0.75)",
                                  highlightStroke: "rgba(100,220,220,1)",
                                  data: []
                              },
                              {
                                  label: "MIN",
                                  fillColor: "rgba(151,187,205,0.5)",
                                  strokeColor: "rgba(151,187,205,0.8)",
                                  highlightFill: "rgba(151,187,205,0.75)",
                                  highlightStroke: "rgba(151,187,205,1)",
                                  data: []
                              }
                              ,
                              {
                                  label: "AVG",
                                  fillColor: "rgba(220,220,100,0.5)",
                                  strokeColor: "rgba(220,220,100,0.8)",
                                  highlightFill: "rgba(220,220,100,0.75)",
                                  highlightStroke: "rgba(220,220,100,1)",
                                  data: []
                              }
                          ]
                      };

                   var ctx = document.getElementById("Temperature").getContext("2d")
                  
                    var myLineChart = new Chart(ctx).Bar(data);
                   
                   for(var s = 0;s<10;s++){
                      var max = 0;
                      var sum = 0;
                      var count = 0;
                      var avg = 0;
                      for(var i =0;i<response.data.length;i++){
                          if (response.data[i].iot_id==s){
                                // console.log("="+response.data[i].temperature+">"+max)

                              if(parseInt(response.data[i].temperature)> parseInt(max)) { 
                                // console.log("if"+response.data[i].temperature)

                                max = response.data[i].temperature }
                                sum = sum + parseInt(response.data[i].temperature);
                                count = count + 1;
                             }
                             if(parseInt(i) == parseInt(response.data.length)-1){
                                var min = max;
                                for(var i =0;i<response.data.length;i++){
                                    if (parseInt(response.data[i].iot_id)==s){
                                         
                                        if(parseInt(response.data[i].temperature) < parseInt(min)) { min = response.data[i].temperature }
                                        
                                       }
                                }
                                 avg = sum/count;
                                console.log(sum + " " + count + " " + avg)
                                 myLineChart.addData([max,min,avg],"IOT-"+s);
                             }
                      }
                      
                  }

                  }, function error (response) {
                    alert(response.data.message)
                  }) 
          
        }

      vm.graph_R = function(){
          $http.get('/api/iot')
                  .then(function success (response) {
             
                      var data = {
                          labels: [],
                          datasets: [
                              {
                                  label: "MAX",
                                  fillColor: "rgba(100,220,220,0.5)",
                                  strokeColor: "rgba(100,220,220,0.8)",
                                  highlightFill: "rgba(100,220,220,0.75)",
                                  highlightStroke: "rgba(100,220,220,1)",
                                  data: []
                              },
                              {
                                  label: "MIN",
                                  fillColor: "rgba(151,187,205,0.5)",
                                  strokeColor: "rgba(151,187,205,0.8)",
                                  highlightFill: "rgba(151,187,205,0.75)",
                                  highlightStroke: "rgba(151,187,205,1)",
                                  data: []
                              }
                              ,
                              {
                                  label: "AVG",
                                  fillColor: "rgba(220,220,100,0.5)",
                                  strokeColor: "rgba(220,220,100,0.8)",
                                  highlightFill: "rgba(220,220,100,0.75)",
                                  highlightStroke: "rgba(220,220,100,1)",
                                  data: []
                              }
                          ]
                      };

                   var ctx = document.getElementById("humidity").getContext("2d")
                  
                    var myLineChart = new Chart(ctx).Bar(data);
                   
                   for(var s = 0;s<10;s++){
                      var max = 0;
                      var sum = 0;
                      var count = 0;
                      var avg = 0;
                      for(var i =0;i<response.data.length;i++){
                          if (response.data[i].iot_id==s){

                              if(parseInt(response.data[i].relative_humidity)> parseInt(max)) { 

                                max = response.data[i].relative_humidity }
                                sum = sum + parseInt(response.data[i].relative_humidity);
                                count = count + 1;
                             }
                             if(parseInt(i) == parseInt(response.data.length)-1){
                                var min = max;
                                for(var i =0;i<response.data.length;i++){
                                    if (parseInt(response.data[i].iot_id)==s){
                                         
                                        if(parseInt(response.data[i].relative_humidity) < parseInt(min)) { min = response.data[i].relative_humidity }
                                        
                                       }
                                }
                                 avg = sum/count;
                                console.log(sum + " " + count + " " + avg)
                                 myLineChart.addData([max,min,avg],"IOT-"+s);
                             }
                      }
                      
                  }

                  }, function error (response) {
                    alert(response.data.message)
                  }) 
          
        }


  })
