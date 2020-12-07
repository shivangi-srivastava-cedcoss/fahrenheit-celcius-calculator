function convert1()
        {
            var f,c;
            if(document.getElementById('txtTemp').value!=="")
            {
                document.getElementById("errmsg").innerHTML = "";
                if(document.getElementById('ddlFirst').selectedIndex===0)
                {
                    f=Number(document.getElementById('txtTemp').value);
                    document.getElementById('txtResult').value=Number((f-32)*5/9);
                }
                else
                {
                    c=Number(document.getElementById('txtTemp').value);
                    document.getElementById('txtResult').value=Number(c*(9/5)+32);
                }
            }
            else
            {
                document.getElementById("errmsg").innerHTML = "Enter the value to convert";
            }
            
        }
        function convertion()
        {
            if(document.getElementById('ddlFirst').selectedIndex===0)
            {
                document.getElementById('txtConverter').innerHTML='Fahrenheit to Celsius';
                document.getElementById('ddlSecond').selectedIndex=1;
                convert1();
            }
            else if(document.getElementById('ddlFirst').selectedIndex===1)
            {
                document.getElementById('txtConverter').innerHTML='Celsius to Fahrenheit';
                document.getElementById('ddlSecond').selectedIndex=0;
                convert1();
            }  
        }