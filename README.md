<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdn.rawgit.com/jgthms/minireset.css/master/minireset.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Jua&amp;subset=korean" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
    <style>
        /* resets */
        * {
            color: inherit;
        }

        input {
            font: inherit;
            border: unset;
            background: unset;
        }

        input:focus {
            outline: unset;
        }

        :root {
            font: 1rem/1.175 "BlinkMacSystemFont", -apple-system, "Jua", sans-seri;
        }

        #app {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100vw;
            height: 100vh;
            font-weight: 900;
            font-size: 8rem;
            color: whitesmoke;
            background: lightslategray;
        }

        input {
            text-align: center;
        }

        img {
            width: 8rem;
            height: 8rem;
            vertical-align: calc(-0.12109375em);
        }

        [debug],
        [debug] *:not(g):not(path) {
            color: hsla(210, 100%, 100%, 0.9) !important;
            background: hsla(210, 100%, 50%, 0.5) !important;
            outline: solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;

            box-shadow: none !important;
            filter: none !important;
        }
    </style>
</head>

<body>

    <div id="app">
        <input type="text" v-model="message2"></input>
        <p v-html="
					message1.slice(0, 7) +
					message2 +
					message1.slice(12)
			"></p>
    </div>

    <script>
        "use strict"

        // emojify returns the corresponding emoji image
        function emojify(name) {
            var out = `<img src="emojis/UltimateHandsomeCoati-size_restricted.gif">`
            return out
        }

        var app = new Vue({
            el: "#app",
            data: {
                message1: "Hello, World! " + emojify("celebration"),
                message2: "Vue"
            }
        })
    </script>

</body>

</html>
