<template>
	<code>
		<!-- <pre><span v-for="i in code.length"><span class="i">{{i}}.</span>	{{code[i]}}</span></pre> -->
		<pre><span v-for="(row, i) in code" :key="i" class="code-row"><span v-html="row + '\n'"></span></span></pre>
	</code>
</template>

<script>
export default {
	props: ['code'],
}
</script>

<style lang="scss" scoped>
	code {
		pre {
			background: #1e1e1e;
			color: var(--white);
			line-height: 1.3;
		}
	}
</style>