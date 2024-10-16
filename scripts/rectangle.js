function rectangleArea(){

    const getInputWidth = document.getElementById('rectangle-width');

    const widthInput= getInputWidth.value ;

    const width=parseFloat(widthInput);


    const getInputlength = document.getElementById('rectangle-length');

    const lengthInput= getInputlength.value ;

    const length=parseFloat(lengthInput);


     area= width * length;


     const setValue= document.getElementById('rectangle-area');

     setValue.innerText=area;



    
}