var opacity = 0;
// var myRow, myCol;// oldVersion maybe we need letter // todo check if we need or not
// Table 1
var table = document.createElement( 'table' );
var btnTable =document.getElementById( 'btn-table' );
// var numberOf = document.getElementById( 'numberOf' ); oldVersion maybe we need letter // todo check if we need or not
//table 2
var multiplDiv = document.getElementById('multiplDiv');
var divTable = document.createElement('div');
var tableTitle = document.createElement('p');
var multipleP = document.createElement( 'p');
var btnTableX =document.getElementById( 'btn-tableX' );
var titleTableX = document.getElementById('titleTableX');

//quiz
var divQuiz = document.getElementById('divQuiz');
var submitBTN = document.getElementById('submitBtn');
var  quizInputAll, resultAll;

//div -- btn
// var tableAlert = document.getElementById( 'tableAlert' ); // oldVersion maybe we need letter // todo check if we need or not
// var inputGrp = document.getElementById( 'inputGrp' ); oldVersion maybe we need letter // todo check if we need or not

//region Table maker function ==> myTable
/* -------------------------------------------- */
var myTable = function () {
    var i,j, tr, td, z=0;
    // var numberOf = document.getElementById('numberOf').value * 1;
    //numberController( numberOf )
    document.getElementById( 'table' ).appendChild( table );
    for (j=1; j<=11  ; j++ ) {
        tr = document.createElement( 'tr' );
        table.appendChild( tr );
        for ( i=1; i<=11; i++ ) {
            if ( i === 1 && j === 1 ) {
                td = document.createElement( 'td' );
                td.innerHTML = "."
                tr.appendChild( td );
                td.classList.add('bg-success');
            } else if ( i === 1 && j !== 1 ){
                td = document.createElement( 'td' );
                td.innerHTML = j-1;
                tr.appendChild( td );
                td.classList.add('bg-success');
            } else if ( j === 1 && i > 1 ){
                td = document.createElement( 'td' );
                td.innerHTML = i-1;
                tr.appendChild( td );
                td.classList.add('bg-success');
            } else {
                td = document.createElement( 'td' );
                td.innerHTML = ++z;
                tr.appendChild( td );
                if ( i < j ) {
                    td.classList.add('yellow-down');
                } else if( i > j ) {
                    td.classList.add('yellow-up');
                } else {
                    td.classList.add('bg-danger');
                }
            }
        }
    }
}
//endregion

//region Hide the input and change inner the btn text /btnHidden( el )
var btnHidden = function (el) {
    el.innerHTML = '<i class="bi bi-eye-slash"></i> Hidden';
    //numberOf.style.display = 'none';
}
//endregion

//region input controller // if number and if is between 1 and 100 // display error // Forget for the moment Old function for display table maybe I need later // todo check if I need or delete
// var numberController = function (num) {
//     if ( !isNaN(num) && num > 0 && num <= 100 ) {
//         myRow = num;
//         myCol = myRow;
//     }else {
//         if ( num < 1 || num > 100 ) {
//             tableAlert.innerHTML = 'die Zahl muss zwischen 1 und 100 liegen, standardmäßig ist sie 10';
//             inputGrp.style.width = '450px';
//         }else {
//             tableAlert.innerHTML = 'Sie haben einen Charakter eingegeben';
//             inputGrp.style.width = '200px';
//         }
//         tableAlert.classList.remove('d-none');
//         myRow = 10;
//         myCol = 10;
//     }
// }
//endregion

//region Opacity function //  myOpacity()
var myOpacity =function () {
    if (opacity<1) {
        opacity += .01;
        setTimeout(function(){myOpacity()},30);
    }
    table.style.opacity = opacity;
}
//endregion

//region Function for the table without children // table is empty // noTable()
var noTable = function () {
    table.innerHTML = '';
    // numberOf.style.display = 'initial';
    // inputGrp.style.width = '150px';
    btnTable.innerHTML = 'Show Table 1'
    // numberOf.value = '';
    // numberOf.focus();
    opacity = 0;
    // tableAlert.classList.add( 'd-none' );
    btnTableX.disabled  = false;
}
//endregion

//region Einmaleins function ==> writeTable()
var writeTable = function () {
    var textOutput = '';
    multiplDiv.classList.add('d-flex', 'flex-wrap');

    for (var j=1; j <= 10; j++) {
        multiplDiv.appendChild( divTable );
        divTable.classList.add('text-center', 'col-auto', 'col-md-2', 'mx-2', 'my-3', 'py-auto', 'text-light');
        divTable.style.borderRadius = '15px';

        //region Div Background color // switch
        switch ( j ){
            case ( 1 ):
            case ( 7 ):
                divTable.style.backgroundColor = '#0c374d';
                break;
            case ( 2 ):
            case ( 8 ):
                divTable.style.background = '#1287a8' ;
                break;
            case ( 3 ):
            case ( 9 ):
                divTable.style.backgroundColor = '#93a661';
                break;
            case ( 4 ):
                divTable.style.backgroundColor = '#d3b53d';
                break;
            case ( 5 ):
                divTable.style.backgroundColor = '#da621e';
                break;
            case ( 6 ):
                divTable.style.backgroundColor = '#ad2a1a';
                break;
            case ( 10 ):
                divTable.style.backgroundColor = '#ebc944';
                break;
        }
        //endregion

        for (var i=1; i <= 10; i++) {
            if ( i === 1 ) {
                tableTitle.classList.add('text-csenter', 'px-4');
                tableTitle.style.fontSize = '150%';
                tableTitle.style.fontWeight = 'bold';
                divTable.appendChild( tableTitle );
                tableTitle.innerHTML = j + 'er-Reihe';
                tableTitle = document.createElement( 'p' )
            }
            var result = i * j;
            textOutput =  i + ' * ' + j + ' = ' + result;
            multipleP.innerHTML = textOutput;
            multipleP.style.fontSize = '125%';
            divTable.classList.add('divTable');
            divTable.appendChild( multipleP );
            multipleP = document.createElement( 'p');
        }

        divTable = document.createElement('div')
    }
}
//endregion/()

//region funcion quiz // print out the random multiplication of the quiz // quiz()
var quiz = function () {
    var quizOutput, numA, numB, result;
    resultAll = [];
    quizInputAll = [];
    quizOutput = document.createElement('div');
    submitBTN.classList.add('btn', 'btn-primary');
    submitBTN.type = 'button';
    submitBTN.innerHTML = 'Submit';
    submitBTN.id = 'submitBtn';
    for (var i = 1; i <= 10; i++) {
        numA = Math.floor(Math.random() * 10) + 1;
        numB = Math.floor(Math.random() * 10) + 1;
        result = numA * numB;
        resultAll.push(result);
        quizOutput = document.createElement('div');
        //quizOutput.id = 'quiz' + i;
        var outPutText = '<div class="input-group mb-3 mx-auto">';
        outPutText += '<span class="input-group-text" id="quizN';
        outPutText += i + '">';
        outPutText += numA + ' x ' + numB + ' =</span>';
        outPutText += '<input type="text" class="form-control"  aria-label="quiz" value="" id="inputQuizN' + i + '"></div>';

        quizOutput.innerHTML = outPutText;
        divQuiz.appendChild( quizOutput );

    }
    divQuiz.appendChild( submitBTN );

}
//endregion

//region On click function ==> BTN table 1
document.getElementById('btn-table').onclick = function () {
    if (table.firstChild) {
        noTable();
    } else {
        table.style.opacity = opacity;
        btnHidden(btnTable);
        myTable();
        myOpacity();
        btnTableX.disabled  = true;
        //writeTable();
    }
}
//endregion

//region On click function ==> BTN table 2
document.getElementById('btn-tableX').onclick = function () {
    if (multiplDiv.firstChild) {
        multiplDiv.classList.add('d-none');
        multiplDiv.innerHTML = '';
        btnTableX.innerHTML = 'Show Table 2';
        titleTableX.classList.add('d-none')
        btnTable.disabled  = false;
    } else {
        multiplDiv.classList.remove('d-none');
        btnHidden(btnTableX);
        titleTableX.classList.remove('d-none');
        btnTable.disabled  = true;
        writeTable();
    }
}
//endregion


//region get All input by click on Submit
document.getElementById('submitBtn').onclick = function () {
    for (var j = 1; j <= 10; j++) {
        quizInputAll =  (quizInputAll.length >= 10) ? [] : quizInputAll  ;
        quizInputAll.push(document.getElementById('inputQuizN' + j).value);
        console.log(quizInputAll)
    }

    // we control the all input // here // ToDo
}
//endregion

// todo function compare input and result in loop
// todo better input and check one after one
// todo edit the wrong input/answer.
// todo Print out the result with congratulations
// todo test and end

window.onload = function (){
    quiz();
    // writeTable();
}