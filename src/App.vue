<template>
	<div id="app">
		<Headers/>
    		<router-view/>
    		<Footers/>
  	</div>
</template>

<script>
import Headers from "./components/Headers"
import Footers from "./components/Footers"
export default {
	name: 'App',
  	components : {
  		Headers,
  		Footers
  	}
}
</script>

<style>
body, h2, h3, p,ul, audio, video {
  margin: 0;
  font: inherit;
    padding: 0;
}
body {
  line-height: 1;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}
</style>
