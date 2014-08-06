window.onload = function () {
    var started = false;
    var numbersInColumns = [];
    var generatedNumbers = [];
    var startGame;
    //Get All columns
    var col1 = $(".col1");
    var col2 = $(".col2");
    var col3 = $(".col3");
    var col4 = $(".col4");
    var col5 = $(".col5");
    //Get current combination rows
    var alphabetCol = $("#alphabet");
    var numberCol = $("#number");
    //Get buttons
    var startButton = $("#start");
    var bingo = $("#bingo");
    //Current combination
    var alphabets = ["B", "I", "N", "G", "O"];
    var alphabet;
    var number;

    //Generate numbers for each col
    generateNumbersCols(col1, col2, col3, col4, col5);


    $(col1).add(col2).add(col3).add(col4).add(col5).click(function () {
        if (!($(this).hasClass("clicked"))) {
            $(this).addClass('clicked');
        } else {
            $(this).removeClass("clicked");
        }
    });

    startButton.click(function () {
        started = true;
        alphabetCol.text("");
        numberCol.text("");
        //Generate current combination
        generateCurrentCombination();
        startGame = setInterval(function () {
            generateCurrentCombination();
        }, 2000);
        startButton.text("Start new game");
        startButton.hide();
    });

    bingo.click(function () {
        if (!started) {
            alert("Please start a game first");
        }
    });

    function generateNumbersCols() {
        var n = 0;
        col1.each(function () {
            do {
                n = random(1, 15);
            } while (numbersInColumns.indexOf(n) > -1);
            $(this).text(n);
            numbersInColumns.push(n);
        });
        col2.each(function () {
            do {
                n = random(16, 30);
            } while (numbersInColumns.indexOf(n) > -1);
            $(this).text(n);
            numbersInColumns.push(n);
        });
        col3.each(function () {
            do {
                var n = random(31, 45);
            } while (numbersInColumns.indexOf(n) > -1);
            $(this).text(n);
            numbersInColumns.push(n);
        });
        col4.each(function () {
            do {
                n = random(46, 60);
            } while (numbersInColumns.indexOf(n) > -1);
            $(this).text(n);
            numbersInColumns.push(n);
        });
        col5.each(function () {
            do {
                n = random(61, 75);
            } while (numbersInColumns.indexOf(n) > -1);
            $(this).text(n);
            numbersInColumns.push(n);
        });
    }

    function generateCurrentCombination() {
            alphabet = alphabets[random(0, alphabets.length - 1)];
            if (alphabet == "B") {
                do {
                    number = random(1, 15);
                } while (generatedNumbers.indexOf(number) > -1);
                generatedNumbers.push(number);
            }
            else if (alphabet == "I") {
                do {
                    number = random(16, 30);
                } while (generatedNumbers.indexOf(number) > -1);
                generatedNumbers.push(number);
            }
            else if (alphabet == "N") {
                do {
                    number = random(31, 45);
                } while (generatedNumbers.indexOf(number) > -1);
                generatedNumbers.push(number);
            }
            else if (alphabet == "G") {
                do {
                    number = random(46, 60);
                } while (generatedNumbers.indexOf(number) > -1);
                generatedNumbers.push(number);
            }
            else if (alphabet == "O") {
                do {
                    number = random(61, 75);
                } while (generatedNumbers.indexOf(number) > -1);
                generatedNumbers.push(number);
            }

            alphabetCol.append('<td class="alphabet">' + alphabet + '</td>');
            numberCol.append('<td class="number">' + number + '</td>')
    }


    function random(from, to) {
        return Math.floor(Math.random() * (to - from + 1) + from);
    }

};