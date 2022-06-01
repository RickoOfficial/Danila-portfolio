<template>
	<transition name="animation">
		<div v-if="isOpen" :class="`Notification ${type}`">
			<div class="title h6">{{title}}</div>
			<div class="divider"></div>
			<div v-html="body" class="body"></div>
		</div>
	</transition>
</template>

<script>
export default {
	data() {
		return {
			isOpen: false,
			title: 'Заголовок уведомления',
			body: 'Тело уведомления',
			type: 'success',
			time: 3000,
			timer: undefined
		}
	},
	methods: {
		open({title, body = '', type = '', time = 3000}) {
			if(!title) { return new Error('Не указан title для уведомления') }
			if(this.isOpen) {
				this.waitClose({title: title, body: body, type: type, time: time})
			} else {
				this.isOpen = true
				this.title = title
				this.body = body
				this.type = type
				this.time = time
				this.timer = setTimeout(() => {this.close()}, this.time)
			}
		},
		close() {
			clearTimeout(this.timer)
			this.timer = undefined
			this.isOpen = false;
		},
		waitClose({title, body, type, time}) {
			if(this.isOpen) {
				setTimeout(() => {this.waitClose({title, body, type, time})}, this.time/100)
				return
			}
			this.open({title, body, type, time})
		}
	}
}
</script>

<style lang="scss" scoped>
	.Notification {
		position: fixed;
		top: 1rem;
		right: 1rem;
		padding: 0.5rem 1rem;
		min-width: 300px;
		max-width: 400px;
		background-color: var(--accent);
		border-radius: 0.5rem;
		box-sizing: border-box;
		z-index: 100;
		.title {
			margin-bottom: 0.3rem;
		}
		.divider {
			margin-bottom: 0.5em;
			width: 100%;
			height: 2px;
			background-color: var(--white);
			opacity: 0.5;
		}
		& * {
			color: var(--white);
		}
		&.success { background-color: #198754; }
		&.error { background-color: #dc3545; }
		&.warning { background-color: #ffc107; & * { color: var(--black); } }
	}
	.animation-enter-active { transition: .3s; }
	.animation-enter { right: -100%; }
	.animation-enter-to { right: 1rem; }
	.animation-leave-active { transition: 1.2s; }
	.animation-leave { right: 1rem; }
	.animation-leave-to { right: -100%; }
</style>