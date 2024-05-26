function con() {
    let yearel = document.getElementById("year").value;
    let semel = document.getElementById("sem").value;
    let P = document.getElementById("pa");
  /*  P.textContent = "You will be redirected to" + " " + yearel + " " + "year" + " " + semel + " " + "Sem" + " " + "syllabus";
*/
        var timer = setTimeout(function() {
            if (yearel === "1st" ) 
            {
                if(semel === "1st")
                {
                    window.location = "1stsemsubjects.html";
                }
                else if(semel==="2nd")
                {
                    window.location = "2ndsemsubjects.html";
                }
                else
                {
                    alert("please choose semester");

                }
            }
        
      
            else if (yearel === "2nd" ) 
            {
                if(semel === "1st")
                {
                    window.location = "3rdsemsubjects.html";
                }
                else if(semel==="2nd")
                {
                    window.location = "4thsemsubjects.html";
                }
                else
                {
                    alert("please choose semester");

                }
            }

            else if (yearel === "3rd" ) 
            {
                if(semel === "1st")
                {
                    window.location = "5thsemsubjects.html";
                }
                else if(semel==="2nd")
                {
                    window.location = "6thsemsubjects.html";
                }
                else
                {
                    alert("please choose semester");

                }
            }
           
            else if (yearel === "4th" ) 
            {
                if(semel === "1st")
                {
                    window.location = "7thsemsubjects.html";
                }
                else if(semel==="2nd")
                {
                    window.location = "8thsemsubjects.html";
                }
                else
                {
                    alert("please choose semester");

                }
            }
            else{
                alert("please choose year");

            }
        }, 5000);

    }

