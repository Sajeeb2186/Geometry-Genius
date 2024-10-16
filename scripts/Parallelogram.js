function parallelogramArea(){

    const getInputbase = document.getElementById('parallelogram-base');

    const baseInput= getInputbase.value ;

    const base=parseFloat(baseInput);


    const getInputheight = document.getElementById('parallelogram-height');

    const heightInput= getInputheight.value ;

    const height=parseFloat(heightInput);


     area= base * height;


     const setValue= document.getElementById('parallelogram-Area');

     setValue.innerText=area;



    
}