/**
 * Created by aleksandrzukov on 29.03.17.
 */

function Check() {
    $("#res").remove();
    //-------------------------------------------Запись состояний чекбоксов-----------
    //Group 6+
    var a = document.getElementById('1').checked;
    var b = document.getElementById('2').checked;
    var c = document.getElementById('3').checked;
    //Group 12+
    var d = document.getElementById('4').checked;
    var e = document.getElementById('5').checked;
    var f = document.getElementById('6').checked;
    //Group 16+
    var g = document.getElementById('7').checked;
    var h = document.getElementById('8').checked;
    var k = document.getElementById('9').checked;
    var j = document.getElementById('10').checked;
    var n = document.getElementById('11').checked;
    //Group 18+
    var m = document.getElementById('12').checked;
    var o = document.getElementById('13').checked;
    var p = document.getElementById('14').checked;
    var q = document.getElementById('15').checked;
    var r = document.getElementById('16').checked;
    var s = document.getElementById('17').checked;


    //-------------------------------------------Проверка на пренадлежность к группе 6+-----------

    if (((a) || (b) || (c)) && (!d) && (!e) && (!f) && (!g) && (!h) && (!k) && (!j) && (!n) && (!m) && (!o) && (!p) && (!q) && (!r) && (!s)){
        //-------------------------------------------Вывод результата-----------
        $("#result").append('<div class="p-y-3 section" id="res" draggable="true"> ' +
            '<div class="container"> ' +
            '<div class="row">' +
            '<div class="col-md-2">' +
            '</div>' +
            '<div class="col-md-2">' +
            '<img id="img" src="img/6+.png" class="img-fluid img-thumbnail">' +
            '</div> ' +
            '<div class="col-md-8" id="info">' +
            '</div>' +
            '<h1 class="text-primary">Рейтинг данной игры "6+"</h1> ' +
            '<p class="lead">По результатам тестирования данная игра получила рейтинг "6+"</p>' +
            '</div>' +
            '</div>' +
            '</div>');
    }

    //-------------------------------------------Проверка на пренадлежность к группе 12+-----------
    else if (((d) || (e) || (f)) && (!g) && (!h) && (!k) && (!j) && (!n) && (!m) && (!o) && (!p) && (!q) && (!r) && (!s)){
        //-------------------------------------------Вывод результата-----------
        $("#result").append('<div class="p-y-3 section" id="res" draggable="true"> ' +
            '<div class="container"> ' +
            '<div class="row">' +
            '<div class="col-md-2">' +
            '</div>' +
            '<div class="col-md-2">' +
            '<img id="img" src="img/12+.png" class="img-fluid img-thumbnail">' +
            '</div> ' +
            '<div class="col-md-8" id="info">' +
            '</div>' +
            '<h1 class="text-primary">Рейтинг данной игры "12+"</h1> ' +
            '<p class="lead">По результатам тестирования данная игра получила рейтинг "12+"</p>' +
            '</div>' +
            '</div>' +
            '</div>');
    }

    //-------------------------------------------Проверка на пренадлежность к группе 16+-----------
    else if (((g) || (h) || (k) || (j) || (n)) && (!m) && (!o) && (!p) && (!q) && (!r) && (!s)){
        //-------------------------------------------Вывод результата-----------
        $("#result").append('<div class="p-y-3 section" id="res" draggable="true"> ' +
            '<div class="container"> ' +
            '<div class="row">' +
            '<div class="col-md-2">' +
            '</div>' +
            '<div class="col-md-2">' +
            '<img id="img" src="img/16+.png" class="img-fluid img-thumbnail">' +
            '</div> ' +
            '<div class="col-md-8" id="info">' +
            '</div>' +
            '<h1 class="text-primary">Рейтинг данной игры "16+"</h1> ' +
            '<p class="lead">По результатам тестирования данная игра получила рейтинг "16+"</p>' +
            '</div>' +
            '</div>' +
            '</div>');
    }

    //-------------------------------------------Проверка на пренадлежность к группе 18+-----------
    else if ((m) || (o) || (p) || (q) || (r) || (s)){
        //-------------------------------------------Вывод результата-----------
        $("#result").append('<div class="p-y-3 section" id="res" draggable="true"> ' +
            '<div class="container"> ' +
            '<div class="row">' +
            '<div class="col-md-2">' +
            '</div>' +
            '<div class="col-md-2">' +
            '<img id="img" src="img/18+.png" class="img-fluid img-thumbnail">' +
            '</div> ' +
            '<div class="col-md-8" id="info">' +
            '</div>' +
            '<h1 class="text-primary">Рейтинг данной игры "18+"</h1> ' +
            '<p class="lead">По результатам тестирования данная игра получила рейтинг "18+"</p>' +
            '</div>' +
            '</div>' +
            '</div>');
    }

    //-------------------------------------------Проверка на пренадлежность к группе 0+-----------
    else if ((!a) && (!b) && (!c) && (!d) && (!e) && (!f) && (!g) && (!h) && (!k) && (!j) && (!n) && (!m) && (!o) && (!p) && (!q) && (!r) && (!s)){
        //-------------------------------------------Вывод результата-----------
        $("#result").append('<div class="p-y-3 section" id="res" draggable="true"> ' +
            '<div class="container"> ' +
            '<div class="row">' +
            '<div class="col-md-2">' +
            '</div>' +
            '<div class="col-md-2">' +
            '<img id="img" src="img/0+.png" class="img-fluid img-thumbnail">' +
            '</div> ' +
            '<div class="col-md-8" id="info">' +
            '</div>' +
            '<h1 class="text-primary">Рейтинг данной игры "0+"</h1> ' +
            '<p class="lead">По результатам тестирования данная игра получила рейтинг "0+"</p>' +
            '</div>' +
            '</div>' +
            '</div>');
    }

    //-------------------------------------------Очистка чекбоксов-----------
    for (var z = 1; z < 18; z++){
        document.getElementById(z).checked = false;
    }

}
