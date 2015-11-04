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

    vm.login = function(){
      window.location = "login.html"
    }


    vm.log = function(input){
      console.log(input)
      $http.post('/login' , { username : input.username })
       .then(function success (response) {
            console.log(response)
            if(response.data[0].username == input.username ){
              console.log("have")
            }else  console.log("don't have")
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



    vm.graph0 = function(){
      $http.get('/api/iot')
              .then(function success (response) {
         
                  var data = {
                              labels: [],
                              datasets: [
                                  {
                                      label: "temperature",
                                      fillColor: "rgba(255,0,0,0.2)",
                                      strokeColor: "rgba(255,0,0,1)",
                                      pointColor: "rgba(255,0,0,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(220,220,220,1)",
                                      data: []
                                  },
                                  {
                                      label: "relative_humidity",
                                      fillColor: "rgba(69,187,91,0.2)",
                                      strokeColor: "rgba(69,187,91,1)",
                                      pointColor: "rgba(69,187,91,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(151,187,205,1)",
                                      data: []
                                  }
                              ]
                          };

               var ctx = document.getElementById("c").getContext("2d")
               var myLineChart = new Chart(ctx).Line(data);

               
                  for(var i =0;i<response.data.length;i++){
                    if (response.data[i].iot_id==0){
                         myLineChart.addData([response.data[i].temperature, response.data[i].relative_humidity] ,vm.toThaiDateTime(response.data[i].timestamp));
                       }
                   
                }
               

              }, function error (response) {
                alert(response.data.message)
              }) 
      
    }

    vm.graph1 = function(){
      $http.get('/api/iot')
              .then(function success (response) {
         
                  var data = {
                              labels: [],
                              datasets: [
                                  {
                                      label: "temperature",
                                      fillColor: "rgba(255,0,0,0.2)",
                                      strokeColor: "rgba(255,0,0,1)",
                                      pointColor: "rgba(255,0,0,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(220,220,220,1)",
                                      data: []
                                  },
                                  {
                                      label: "relative_humidity",
                                      fillColor: "rgba(69,187,91,0.2)",
                                      strokeColor: "rgba(69,187,91,1)",
                                      pointColor: "rgba(69,187,91,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(151,187,205,1)",
                                      data: []
                                  }
                              ]
                          };

               var ctx = document.getElementById("cc").getContext("2d")
               var myLineChart = new Chart(ctx).Line(data);

               
                  for(var i =0;i<response.data.length;i++){
                    if (response.data[i].iot_id==1){
                         myLineChart.addData([response.data[i].temperature, response.data[i].relative_humidity] ,vm.toThaiDateTime(response.data[i].timestamp));
                       }
                    
                   
                }
               

              }, function error (response) {
                alert(response.data.message)
              }) 
      
    }

    vm.graph2 = function(){
      $http.get('/api/iot')
              .then(function success (response) {
         
                  var data = {
                              labels: [],
                              datasets: [
                                  {
                                      label: "temperature",
                                      fillColor: "rgba(255,0,0,0.2)",
                                      strokeColor: "rgba(255,0,0,1)",
                                      pointColor: "rgba(255,0,0,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(220,220,220,1)",
                                      data: []
                                  },
                                  {
                                      label: "relative_humidity",
                                      fillColor: "rgba(69,187,91,0.2)",
                                      strokeColor: "rgba(69,187,91,1)",
                                      pointColor: "rgba(69,187,91,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(151,187,205,1)",
                                      data: []
                                  }
                              ]
                          };

               var ctx = document.getElementById("ccc").getContext("2d")
               var myLineChart = new Chart(ctx).Line(data);

               
                  for(var i =0;i<response.data.length;i++){
                    if (response.data[i].iot_id==2){
                         myLineChart.addData([response.data[i].temperature, response.data[i].relative_humidity] ,vm.toThaiDateTime(response.data[i].timestamp));
                       }
                    
                   
                }
               

              }, function error (response) {
                alert(response.data.message)
              }) 
      
    }
    vm.graph3 = function(){
      $http.get('/api/iot')
              .then(function success (response) {
         
                  var data = {
                              labels: [],
                              datasets: [
                                  {
                                      label: "temperature",
                                      fillColor: "rgba(255,0,0,0.2)",
                                      strokeColor: "rgba(255,0,0,1)",
                                      pointColor: "rgba(255,0,0,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(220,220,220,1)",
                                      data: []
                                  },
                                  {
                                      label: "relative_humidity",
                                      fillColor: "rgba(69,187,91,0.2)",
                                      strokeColor: "rgba(69,187,91,1)",
                                      pointColor: "rgba(69,187,91,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(151,187,205,1)",
                                      data: []
                                  }
                              ]
                          };

               var ctx = document.getElementById("cccc").getContext("2d")
               var myLineChart = new Chart(ctx).Line(data);

               
                  for(var i =0;i<response.data.length;i++){
                    if (response.data[i].iot_id==3){
                         myLineChart.addData([response.data[i].temperature, response.data[i].relative_humidity] ,vm.toThaiDateTime(response.data[i].timestamp));
                       }
                    
                   
                }
               

              }, function error (response) {
                alert(response.data.message)
              }) 
      
    }
    vm.graph4 = function(){
      $http.get('/api/iot')
              .then(function success (response) {
         
                  var data = {
                              labels: [],
                              datasets: [
                                  {
                                      label: "temperature",
                                      fillColor: "rgba(255,0,0,0.2)",
                                      strokeColor: "rgba(255,0,0,1)",
                                      pointColor: "rgba(255,0,0,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(220,220,220,1)",
                                      data: []
                                  },
                                  {
                                      label: "relative_humidity",
                                      fillColor: "rgba(69,187,91,0.2)",
                                      strokeColor: "rgba(69,187,91,1)",
                                      pointColor: "rgba(69,187,91,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(151,187,205,1)",
                                      data: []
                                  }
                              ]
                          };

               var ctx = document.getElementById("ccccc").getContext("2d")
               var myLineChart = new Chart(ctx).Line(data);

               
                  for(var i =0;i<response.data.length;i++){
                    if (response.data[i].iot_id==4){
                         myLineChart.addData([response.data[i].temperature, response.data[i].relative_humidity] ,vm.toThaiDateTime(response.data[i].timestamp));
                       }
                    
                   
                }
               

              }, function error (response) {
                alert(response.data.message)
              }) 
      
    }
    vm.graph5 = function(){
      $http.get('/api/iot')
              .then(function success (response) {
         
                  var data = {
                              labels: [],
                              datasets: [
                                  {
                                      label: "temperature",
                                      fillColor: "rgba(255,0,0,0.2)",
                                      strokeColor: "rgba(255,0,0,1)",
                                      pointColor: "rgba(255,0,0,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(220,220,220,1)",
                                      data: []
                                  },
                                  {
                                      label: "relative_humidity",
                                      fillColor: "rgba(69,187,91,0.2)",
                                      strokeColor: "rgba(69,187,91,1)",
                                      pointColor: "rgba(69,187,91,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(151,187,205,1)",
                                      data: []
                                  }
                              ]
                          };

               var ctx = document.getElementById("cccccc").getContext("2d")
               var myLineChart = new Chart(ctx).Line(data);

               
                  for(var i =0;i<response.data.length;i++){
                    if (response.data[i].iot_id==5){
                         myLineChart.addData([response.data[i].temperature, response.data[i].relative_humidity] ,vm.toThaiDateTime(response.data[i].timestamp));
                       }
                    
                   
                }
               

              }, function error (response) {
                alert(response.data.message)
              }) 
      
    }
    vm.graph6 = function(){
      $http.get('/api/iot')
              .then(function success (response) {
         
                  var data = {
                              labels: [],
                              datasets: [
                                  {
                                      label: "temperature",
                                      fillColor: "rgba(255,0,0,0.2)",
                                      strokeColor: "rgba(255,0,0,1)",
                                      pointColor: "rgba(255,0,0,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(220,220,220,1)",
                                      data: []
                                  },
                                  {
                                      label: "relative_humidity",
                                      fillColor: "rgba(69,187,91,0.2)",
                                      strokeColor: "rgba(69,187,91,1)",
                                      pointColor: "rgba(69,187,91,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(151,187,205,1)",
                                      data: []
                                  }
                              ]
                          };

               var ctx = document.getElementById("ccccccc").getContext("2d")
               var myLineChart = new Chart(ctx).Line(data);

               
                  for(var i =0;i<response.data.length;i++){
                    if (response.data[i].iot_id==6){
                         myLineChart.addData([response.data[i].temperature, response.data[i].relative_humidity] ,vm.toThaiDateTime(response.data[i].timestamp));
                       }
                    
                   
                }
               

              }, function error (response) {
                alert(response.data.message)
              }) 
      
    }
    vm.graph7 = function(){
      $http.get('/api/iot')
              .then(function success (response) {
         
                  var data = {
                              labels: [],
                              datasets: [
                                  {
                                      label: "temperature",
                                      fillColor: "rgba(255,0,0,0.2)",
                                      strokeColor: "rgba(255,0,0,1)",
                                      pointColor: "rgba(255,0,0,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(220,220,220,1)",
                                      data: []
                                  },
                                  {
                                      label: "relative_humidity",
                                      fillColor: "rgba(69,187,91,0.2)",
                                      strokeColor: "rgba(69,187,91,1)",
                                      pointColor: "rgba(69,187,91,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(151,187,205,1)",
                                      data: []
                                  }
                              ]
                          };

               var ctx = document.getElementById("cccccccc").getContext("2d")
               var myLineChart = new Chart(ctx).Line(data);

               
                  for(var i =0;i<response.data.length;i++){
                    if (response.data[i].iot_id==7){
                         myLineChart.addData([response.data[i].temperature, response.data[i].relative_humidity] ,vm.toThaiDateTime(response.data[i].timestamp));
                       }
                    
                   
                }
               

              }, function error (response) {
                alert(response.data.message)
              }) 
      
    }

    vm.graph8 = function(){
      $http.get('/api/iot')
              .then(function success (response) {
         
                  var data = {
                              labels: [],
                              datasets: [
                                  {
                                      label: "temperature",
                                      fillColor: "rgba(255,0,0,0.2)",
                                      strokeColor: "rgba(255,0,0,1)",
                                      pointColor: "rgba(255,0,0,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(220,220,220,1)",
                                      data: []
                                  },
                                  {
                                      label: "relative_humidity",
                                      fillColor: "rgba(69,187,91,0.2)",
                                      strokeColor: "rgba(69,187,91,1)",
                                      pointColor: "rgba(69,187,91,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(151,187,205,1)",
                                      data: []
                                  }
                              ]
                          };

               var ctx = document.getElementById("ccccccccc").getContext("2d")
               var myLineChart = new Chart(ctx).Line(data);

               
                  for(var i =0;i<response.data.length;i++){
                    if (response.data[i].iot_id==8){
                         myLineChart.addData([response.data[i].temperature, response.data[i].relative_humidity] ,vm.toThaiDateTime(response.data[i].timestamp));
                       }
                    
                   
                }
               

              }, function error (response) {
                alert(response.data.message)
              }) 
      
    }
    vm.graph9 = function(){
      $http.get('/api/iot')
              .then(function success (response) {
         
                  var data = {
                              labels: [],
                              datasets: [
                                  {
                                      label: "temperature",
                                      fillColor: "rgba(255,0,0,0.2)",
                                      strokeColor: "rgba(255,0,0,1)",
                                      pointColor: "rgba(255,0,0,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(220,220,220,1)",
                                      data: []
                                  },
                                  {
                                      label: "relative_humidity",
                                      fillColor: "rgba(69,187,91,0.2)",
                                      strokeColor: "rgba(69,187,91,1)",
                                      pointColor: "rgba(69,187,91,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(151,187,205,1)",
                                      data: []
                                  }
                              ]
                          };

               var ctx = document.getElementById("cccccccccc").getContext("2d")
               var myLineChart = new Chart(ctx).Line(data);

               
                  for(var i =0;i<response.data.length;i++){
                    if (response.data[i].iot_id==9){
                         myLineChart.addData([response.data[i].temperature, response.data[i].relative_humidity] ,vm.toThaiDateTime(response.data[i].timestamp));
                       }
                    
                   
                }
               

              }, function error (response) {
                alert(response.data.message)
              }) 
      
    }



  })
