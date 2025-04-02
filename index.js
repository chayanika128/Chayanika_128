document.getElementById("clickbtn").addEventListener("click",function(){
    alert(" Email - chayanikapatra723@gmail.com");})
    
    document.getElementById("clickbtn1").addEventListener("click",function(){
        alert(" Mob.no - 7479325422");})



        let inp = document.getElementById("textin");
        let outp = document.getElementById("keyout");

        inp.addEventListener("keydown",function(){
            outp.textContent="I pressed  " +   event.key +  "  key";
        });
        inp.addEventListener("keyup",function(){
            outp.style.color="blue";
        });

        

        let input = document.getElementById("copy");
        let output = document.getElementById("output");
        
        input.addEventListener("copy",function(){
            output.textContent ="text is copied";
            output.style.color ="blue";
        });
        input.addEventListener("select",function(){
        output.textContent="text is selected";
        output.style.color="green";
        });
        input.addEventListener("paste",function() {
              output.textContent="text is pasted";
              output.style.color="pink";
        });
        input.addEventListener("cut",function(){
            output.textContent="text is cut";
            output.style.color="red";
        });
