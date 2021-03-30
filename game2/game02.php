<?php
include("../functions.php");
pageTop("Connect Four",["stylesheets/reset.css","stylesheets/main3.css", "stylesheets/game02.css"], ["js/jquery-3.4.1.js","js/connectfour.js","js/MainCf.js"]);

?>

        <section class="section" id="second">
            <br>
            <br>
            <h4 id="gametext">It's <span id="player">red</span>'s turn!</h4>
            <div id="board"></div>
            <br>
            <button id="restart">Restart</button>
            <br>
            <br>
            <p id="game02description">Connect Four</p>
            <br>
            <p id="game02description">Click on spaces to place piece in slot.</p>
            <p id="game02description">Try to connect four of one color either</p>
            <p id="game02description">horizontally, vertically, or diagonally.</p>
        </section>

<?
pageBottom();
?>