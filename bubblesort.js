function myFunction()
{
    var ele1=document.getElementById("ele1").value;
    var ele2=document.getElementById("ele2").value;
    var ele3=document.getElementById("ele3").value;
    var ele4=document.getElementById("ele4").value;
    var arr=[ele1,ele2,ele3,ele4];

   

    for(var i = 0; i < arr.length; i++)
    {
        // Last i elements are already in place  
        for(var j = 0; j < ( arr.length - i -1 ); j++){
            
          // Checking if the item at present iteration 
          // is greater than the next iteration
          if(arr[j] > arr[j+1]){
              
            // If the condition is true then swap them
            var temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j+1] = temp
          }
        }
    }

    document.getElementById("ele1").value=arr[0];
    document.getElementById("ele2").value=arr[1];
    document.getElementById("ele3").value=arr[2];
    document.getElementById("ele4").value=arr[3];
    

}
