<?php
include("../functions.php");
pageTop("home",["stylesheets/reset.css","stylesheets/main.css","stylesheets/game04.css"], ["js/phaser.js","js/game04.js"]);
?>

<section class="section" id="first">
			<br>
			<br>
            <div id="game"></div>
			<br>
            <div class="description">
                <h4 style="padding-left: 240px; font-size: 30px; color: white;">Moon Survival</h4>
                <p class="gameDescription" style="padding-bottom: 15px; padding-left: 241px; font-size: 15px; color: white;">
                     
                    <br>
                    How to Play:
                    <br>
                    <br>
                    a - left
                    <br>
                    d - right
                    <br>
                    w - jump
                    <br>
                </p>
            </div>
        </section>

<?
pageBottom();
?>