
let form=document.querySelector("form");
form.addEventListener("submit",()=>{
    let height=parseInt(document.querySelector("#height").value);
    let weight=parseInt(document.querySelector("#weight").value);
    let elem=document.querySelector(".output");

    if(height==="" || height < 0 || isNaN(height)){
        elem.innerHTML=`<b>Please enter valid input ${height}</b>`;
    }
    else if(weight==="" || weight<0 || isNaN(weight)){
        elem.innerHTML=`<b>Please enter valid input ${weight}</b>`;
    }
    else{
        let result=(weight/((weight*weight)/1000)).toFixed(2)
        
        if(result<18.6){
            elem.innerHTML=`<b> It is under Weight and the current value is ${result} </b>`
        }
        else if(result>18.6 && result<24.9){
            elem.innerHTML=`<b> It is Normal range and the current value is ${result} </b>`
        }
        else{
            elem.innerHTML=`<b> It is overweight and the current value is ${result} </b>`
        }
        
        
    }
    
    
})
