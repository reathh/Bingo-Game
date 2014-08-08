window.onload = function () {
    var speed = 3000;
    var numberCards = 1;
    var numberGeneratedNumbers = 20;
    var started = false;
    var numbersInColumns = [];
    var generatedNumbers = [];
    var startGame;
    //Get field and columns
    var allCards = $("#cards");
    var field = $("#play-field");
    var rest = $("#rest");
    var bingos = $("#bingos span");
    //Generator elements
    var generator = $("#generator");
    var alphabet;
    var number;
    var alphabets = ["B", "I", "N", "G", "O"];
    //Get buttons and inputs
    var startButton = $("#start");
    var bingo = $("#bingo");

    //How many Bingos
    if (readCookie("bingos") == null) {
        createCookie("bingos", "0", 9999);
    }
    bingos.text(checkHowManyBingos());

    //Darken buttons onclick
    $("button").mousedown(function () {
        $(this).css({"border-style": "inset", "background-color": "#99E12D"});
    });
    $("button").mouseup(function () {
        $(this).css({"border-style": "outset", "background-color": "greenyellow"});
    });

    startButton.click(function () {
        if (started) {
            clearInterval(startGame);
        }
        numberCards = $("#n-cards").val();
        generateField(numberCards);
        if (numberCards == 1) {
            field.css({"width": "260px"});
        }
        if (numberCards >= 2) {
            field.css({"width": "550px"});
        }
        if (numberCards > 4) {
            var widthHeightCells = 45 - (numberCards * 2) + "px";
            field.css({"width": "100%", "text-align": "center"});
            $("td").css({"width": widthHeightCells, "height": widthHeightCells});
            rest.css({"display": "block", "text-align": "center"});
        } else {
            var widthHeightCells = 45 + "px";
            field.css({"text-align": "left"});
            $("td").css({"width": widthHeightCells, "height": widthHeightCells});
            rest.css({"display": "inline-block", "text-align": "left"});
        }
        numbersInColumns = [];
        generatedNumbers = [];
        generator.text("");
        //Generate numbers in cols
        generateNumbersCols();
        //Generate current combination
        generateCurrentCombination();
        startGame = setInterval(function () {
            generateCurrentCombination();
        }, speed);
        startButton.text("Start new game");
        started = true;
    });


    bingo.click(function () {
        if (!started) {
            alert("Please start a game first");
        } else {
            if (checkBingo()) {
                alert("Bingo");
                createCookie("bingos", parseInt(checkHowManyBingos()) + 1, 9999);
                bingos.text(checkHowManyBingos());
            }
        }
    });


    function generateField(cards) {
        var output = '';
        for (var i = 1; i <= cards; i++) {
            output += '<table id="card' + i + '">';

            output += '<tr>';
            for (var j = 0; j < alphabets.length; j++) {
                var currLett = alphabets[j];
                output += '<td class="alphabets">' + currLett + '</td>';
            }
            output += ('</tr>');
            for (var j = 1; j <= 5; j++) {
                output += '<tr>';
                for (var k = 1; k <= 5; k++) {
                    if (j == 3 && k == 3) {
                        output += '<td class="asterisk">*</td>';
                        continue;
                    }
                    output += '<td class="col' + k + '"></td>';
                }
                output += '</tr>';
            }

            output += '</table>';

        }
        allCards.html(output);


        var allCol1 = $(".col1");
        var allCol2 = $(".col2");
        var allCol3 = $(".col3");
        var allCol4 = $(".col4");
        var allCol5 = $(".col5");

        $(allCol1).add(allCol2).add(allCol3).add(allCol4).add(allCol5).click(function () {
            $(this).toggleClass('clicked');
        });
    }

    function generateNumbersCols() {
        var n = 0;
        for (var i = 1; i <= numberCards; i++) {
            var col1 = $("#card" + i + " .col1");
            var col2 = $("#card" + i + " .col2");
            var col3 = $("#card" + i + " .col3");
            var col4 = $("#card" + i + " .col4");
            var col5 = $("#card" + i + " .col5");

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
            numbersInColumns = [];
        }
    }

    function generateCurrentCombination() {
        if (generatedNumbers.length < numberGeneratedNumbers) {
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

            generator.append('<div class="alphabet">' + alphabet + '<div class="number">' + number + '</div></div>');
            if (generatedNumbers.length % 10 == 0) {
                generator.append('<br>');
            }
        } else {
            clearInterval(startGame);
            started = false;
        }

    }

    function checkBingo() {
        var allNumbers = [];
        for (var i = 1; i <= 75; i++) {
            allNumbers.push(i);
        }
        generatedNumbers = allNumbers;
        var bingo = false;
        for (var i = 1; i <= numberCards; i++) {
            var numberCols = $("#card" + i + " tr:first").children().length;
            for (var j = 1; j <= numberCols; j++) {
                for (var k = 1; k <= 2; k++) {
                    if (k == 1) { // We are checking for horizontal bingo
                        var horizontal = true;
                        var currCol = $("#card" + i + " tr:eq(" + j + ")").children().not(".asterisk");
                    }
                    else if (k == 2) { // We are checking for vertical bingo
                        var vertical = true;
                        var currCol = $("#card" + i + " .col" + j);
                    }

                    currCol.each(function () {
                        if ($(this).hasClass("clicked")) {
                            if (generatedNumbers.indexOf(parseInt($(this).text())) == -1) {
                                if (k == 1) horizontal = false;
                                else if (k == 2) vertical = false;
                            }
                        } else {
                            if (k == 1) horizontal = false;
                            else if (k == 2) vertical = false;
                        }
                    });
                    if (vertical || horizontal) {
                        bingo = true
                    }
                }
            }

            if (bingo) {
                return true;
            } else {
                return false;
            }
        }
    }

    function checkHowManyBingos() {
        return readCookie("bingos");
    }


    function createCookie(name, value, days) {
        var expires;

        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        } else {
            expires = "";
        }
        document.cookie = encodeURI(name) + "=" + encodeURI(value) + expires + "; path=/";
    }

    function readCookie(name) {
        var nameEQ = encodeURI(name) + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return decodeURI(c.substring(nameEQ.length, c.length));
        }
        return null;
    }

    function random(from, to) {
        return Math.floor(Math.random() * (to - from + 1) + from);
    }

};