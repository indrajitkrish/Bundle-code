function show1(className){
    document.getElementById(className).style.display ='none';
  }
  function show2(className){
   let lastnumber = className.slice(-1);
   for(let i=1;i<=3;i++)
   {
     if(i != lastnumber)
     {
        let addnumber = "div-table"+ i;
        show1(addnumber);
     }
   }
    document.getElementById(className).style.display = 'block';
  }