 

 function triangleArea(){

    const getInputBase = document.getElementById('triangle-base');

    const baseInput=getInputBase.value;

    const base=parseFloat(baseInput);



    const getInputHeight = document.getElementById('triangle-height');

    const heightInput=getInputHeight.value;

    const height=parseFloat(heightInput);


    const area= 0.5 * base * height;

    console.log('Area of the triangle is:', area);



    const TriangleFind= document.getElementById('triangle-Area');

     TriangleFind.innerText=area ;


 }



 