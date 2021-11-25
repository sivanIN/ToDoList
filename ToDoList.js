// fetch('https://jsonplaceholder.typicode.com/todos/')
//   .then(response => response.json())
//   .then(json => console.log(json))

 var list=document.getElementById("list");
  
  function loadData() {
    const request = new XMLHttpRequest();
    request.open("get", "https://jsonplaceholder.typicode.com/todos/");
    request.onload = () => {
        
            // const json = JSON.stringify(request.responseText);
            // data = JSON.parse(json);
          
            // console.log(data)
          

           
            // TodoList(data);
            // var data = JSON.stringify([{"model": "app.mdl", "pk": 1, "fields": {"name": "test", "rank": 1}}]);
            data = JSON.parse(request.responseText);
            
 
   data.forEach(function(element){
    const ul = document.createElement("ul");
    const p = document.createElement("p");
   p.textContent="Task"
    
    // console.log(element);
  var obj=element
   var result = Object.entries(obj);
    console.log(result);
    for(var i=0;i<10;i++){

      var student =result[i]
      
    }
    console.log(student)
   
    result.forEach((cell) => {
      // console.log(cell)
      const li = document.createElement("li");
     
      
             li.textContent=cell
             ul.appendChild(li);
    })
    p.appendChild(ul)
document.getElementById("demo").appendChild(p)
});
             
        };
        
    request.send();
}

function TodoList(data){
alert("hii")
 

          //  let test =""
          //  for(let i=0;i<10;i++){ 
          //     test += json[i].title ;
          //  }   
          //  console.log(test)
        //   data.forEach(function(element){
        //     console.log(element);
        //     element.forEach((cell) => {
              
        //       console.log(cell)
        //     })
            
        // });          
          //  document.getElementById("demo").innerHTML = test

}

function check(){
  alert("One Item is completed ")
}



document.addEventListener("DOMContentLoaded",()=>{ loadData();})