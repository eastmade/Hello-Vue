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
