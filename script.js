var number = 0;

        function green(element) {
            element.style.backgroundColor = "green"
            var new_number = number + 1;
            number = new_number;
            console.log(new_number);
            document.getElementById("number").innerHTML = new_number;
            document.getElementById("number").style.color = "green"
            document.getElementById('negative').style.setProperty('background-color', 'initial');
        }



        function red(element) {
            element.style.backgroundColor = "red"
            document.getElementById('positive').style.setProperty('background-color', 'initial');

            if (number <= 0) {
                new_number = number - 1;

                document.getElementById("number").innerHTML = new_number;
                document.getElementById("number").style.color = "red";
               
                number = new_number;
            }

            if (number > 0) {
                new_number = number - 1;
                document.getElementById("number").innerHTML = new_number;
                number = new_number;
                document.getElementById("number").style.color = "green"
            }
        }

        function reset(element) {
            number = 0;
            document.getElementById("number").innerHTML = number;
            document.getElementById("number").style.color = 'black';
            document.getElementById('negative').style.setProperty('background-color', 'initial');
            document.getElementById('positive').style.setProperty('background-color', 'initial');
        }

