$(document).ready(function () {
    var field = $("#cards");
    var alphabets = ['B', 'I', 'N', 'G', 'O'];
    var numberCards = 2;
    generateField(numberCards);


    function generateField(cards) {
        var output = '';
        for (var i = 1; i <= cards ; i++) {
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
                    if(j == 3 && k == 3) {
                        output += '<td class="asterisk">*</td>';
                        continue;
                    }
                    output += '<td class="col' + k + '"></td>';
                }
                output += '</tr>';
            }

            output += '</table>';

        }
        field.html(output);
    }
});

//<table>
//    <tr>
//        <td class="alphabets">B</td>
//        <td class="alphabets">I</td>
//        <td class="alphabets">N</td>
//        <td class="alphabets">G</td>
//        <td class="alphabets">O</td>
//    </tr>
//    <tr>
//        <td class="col1"></td>
//        <td class="col2"></td>
//        <td class="col3"></td>
//        <td class="col4"></td>
//        <td class="col5"></td>
//    </tr>
//    <tr>
//        <td class="col1"></td>
//        <td class="col2"></td>
//        <td class="col3"></td>
//        <td class="col4"></td>
//        <td class="col5"></td>
//    </tr>
//    <tr>
//        <td class="col1"></td>
//        <td class="col2"></td>
//        <td class="asterics">*</td>
//        <td class="col4"></td>
//        <td class="col5"></td>
//    </tr>
//    <tr>
//        <td class="col1"></td>
//        <td class="col2"></td>
//        <td class="col3"></td>
//        <td class="col4"></td>
//        <td class="col5"></td>
//    </tr>
//    <tr>
//        <td class="col1"></td>
//        <td class="col2"></td>
//        <td class="col3"></td>
//        <td class="col4"></td>
//        <td class="col5"></td>
//    </tr>
//</table>