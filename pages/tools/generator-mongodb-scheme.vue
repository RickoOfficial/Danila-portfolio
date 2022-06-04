<template>
	<div class="api-generator">
		<Notification ref="Notification"/>
		<div class="container mb-5">
			<h1>Генератор MongoDB Scheme</h1>
		</div>

		<div class="wrapper">
			<div class="row">
				<div class="col-7">

					<div @click="createScheme()" class="add-scheme-btn h5 mb-3">
						Создать схему
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/> </svg>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/> </svg>
					</div>
					<div class="schemes-list">
						<div
							v-for="(scheme, schemeIndex) in schemes"
							:key="schemeIndex"
							:class="`scheme ${scheme.show ? 'show': ''}`"
						>
							<div @click="scheme.show = !scheme.show" class="scheme-head">
								<div class="scheme-name h6">{{scheme.name}}</div>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16"> <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/> </svg>
							</div>
							<div v-show="scheme.show" class="scheme-body">
								<!-- Название -->
								<div class="scheme-name-redact">
									<div class="h6">Название: </div>
									<input type="text" v-model="scheme.nameForRedact" :disabled="!scheme.nameIsRedact">
									<div class="controls">
										<div
											v-if="!scheme.nameIsRedact"
											@click="scheme.nameIsRedact = !scheme.nameIsRedact" class="non-redact"
										>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#5757FF" class="bi bi-pencil" viewBox="0 0 16 16"> <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/> </svg>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#5757FF" class="bi bi-pencil-fill" viewBox="0 0 16 16"> <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/> </svg>
										</div>
										<div v-else class="is-redact">
											<div @click="unSaveNewName(schemeIndex)" class="un-save-btn">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#dc3545" class="bi bi-x-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> </svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#dc3545" class="bi bi-x-circle-fill" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/> </svg>
											</div>
											<div @click="saveNewName(schemeIndex)" class="save-btn">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#198754" class="bi bi-check-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/> <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/> </svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#198754" class="bi bi-check-circle-fill" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/> </svg>
											</div>
										</div>
									</div>
									<button @click="deleteScheme(schemeIndex)" class="delete-scheme">Удалить схему</button>
								</div>
								<!-- /Название -->

								<button class="add-prop">Добавить свойство</button>
							</div>
						</div>
					</div>

				</div>
				<div class="col-5">
					
					<Code :code="code" />

				</div>
			</div>
		</div>

	</div>
</template>

<script>
import Notification from '~/components/Notification.vue'
export default {
	components: {
		Notification
	},
	data() {
		return {
			schemes: [
				{
					name: 'product',
					props: [
						{ alias: 'id', type: 'String', required: true, unique: true, default: false },
						{ alias: 'name', type: 'String', required: true, unique: false, default: "`Стандартное название`" },
						{ alias: 'price', type: 'Number', required: true, unique: false, default: 123 },
						{ alias: 'published', type: 'Boolean', required: false, unique: false, default: true },
					],
					show: true,
					nameIsRedact: false,
					nameForRedact: 'product',
				}
			],
			code: ''
		}
	},
	methods: {
		createScheme() {
			this.schemes.unshift({
				name: 'name',
				props: [],
				show: true,
				nameIsRedact: true,
				nameForRedact: 'name'
			})
		},
		deleteScheme(schemeIndex) {
			this.schemes.splice(schemeIndex, 1);
		},
		saveNewName(schemeIndex) {
			if(this.schemes[schemeIndex].nameForRedact.length == 0) {
				this.$refs.Notification.open({
					title: 'Ошибка в названии схемы',
					type: 'warning',
					body: 'Минимальная длинна <br>названия схемы - <b><u>1 символ</b></u>',
				})
				return false
			}
			if(this.schemes[schemeIndex].nameForRedact.indexOf(' ') != -1) {
				this.$refs.Notification.open({
					title: 'Ошибка в названии схемы',
					type: 'warning',
					body: 'В названии присутствуют <b><u>пробелы</b></u>',
				})
				return false
			}
			if(this.schemes[schemeIndex].nameForRedact.search(/\W/) != -1 || this.schemes[schemeIndex].nameForRedact.search(/[а-яёА-ЯЁ]/) != -1) {
				this.$refs.Notification.open({
					title: 'Ошибка в названии схемы',
					type: 'warning',
					body: 'Название должно состоять только из букв английского алфавита',
				})
				return false
			}
			if(this.schemes[schemeIndex].nameForRedact.search(/[0-9]/) != -1) {
				this.$refs.Notification.open({
					title: 'Ошибка в названии схемы',
					type: 'warning',
					body: 'В названии присутствуют <b><u>цифры</b></u>',
				})
				return false
			}
			this.schemes[schemeIndex].nameIsRedact = false
			this.schemes[schemeIndex].name = this.schemes[schemeIndex].nameForRedact
		},
		unSaveNewName(schemeIndex) {
			this.schemes[schemeIndex].nameForRedact = this.schemes[schemeIndex].name
			this.schemes[schemeIndex].nameIsRedact = false
		}
	},
	watch: {
		schemes: {
			handler: function (val, oldVal) {
				this.code = '';
				val.forEach(item => {
					this.code += `const <span class="green">${item.name}</span> = new <span class="green">Schema</span>({`
					item.props.forEach(prop => {
						this.code += `\n\t<span class="light-blue">${prop.alias}:</span> {\n\t\t<span class="light-blue">type:</span> <span class="green">${prop.type}</span>,\n\t\t<span class="light-blue">required:</span> ${prop.required},\n\t\t<span class="light-blue">unique:</span> ${prop.unique},\n\t\t<span class="light-blue">default:</span> ${prop.default}\n\t},`
					})
					this.code += `\n})\n`
				})
				this.code = this.code.replace(/(const|new|true|false)/g, '<span class="blue">$1</span>')
				this.code = this.code.replace(/({|})/g, '<span class="pink">$1</span>')
				this.code = this.code.replace(/(\(|\))/g, '<span class="yellow">$1</span>')
				this.code = this.code.replace(/`(.*)`/g, '<span class="brown">"$1"</span>')
				this.code = this.code.replace(/ (\d+)/g, ' <span class="light-green">$1</span>')
				this.code = this.code.split('\n')
			},
			deep: true
		},
	}
}
</script>

<style lang="scss" scoped>
	.wrapper {
		margin: 0 auto;
		width: 90%;
	}
	.add-scheme-btn {
		display: flex;
		align-items: center;
		color: var(--accent);
		cursor: pointer;
		user-select: none;
		svg { margin-left: 0.5rem; width: 1.5rem; height: 1.5rem; }
		.bi-plus-circle-fill { display: none; }
		&:hover { .bi-plus-circle { display: none; } .bi-plus-circle-fill { display: block; } }
	}
	.schemes-list {
		list-style-type: none;
		.scheme {
			position: relative;
			margin-bottom: 1rem;
			overflow: hidden;
			.scheme-head {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0.5rem 1rem;
				border-radius: 0.5rem;
				background: var(--accent);
				cursor: pointer;
				transition: .3s;
				.scheme-name { color: var(--white); }
				svg { fill: var(--white); transform: rotate(90deg); transition: .3s; }
			}
			.scheme-body {
				margin-top: -4px;
				padding: 1rem;
				border: 2px solid var(--accent);
				.scheme-name-redact {
					display: flex;
					align-items: center;
					.h6 { margin-right: 0.5rem; }
					input { position: relative; padding: 0.3rem 0.5rem; width: 20%; border: none; border: 1px dashed var(--accent); color: var(--black); font-size: 16px; outline: none; }
					input[disabled] { background: transparent; border: 1px solid var(--accent); color: var(--black); }
					.controls {
						svg { width: 1.5rem; height: 1.5rem; cursor: pointer; user-select: none; }
						.is-redact {
							display: flex;
							align-items: center;
							div {
								margin-left: 1rem;
							}
						}
						.non-redact {
							display: flex;
							margin-left: 1rem;
							.bi-pencil-fill { display: none; }
							&:hover {
								.bi-pencil { display: none; }
								.bi-pencil-fill { display: block; }
							}
						}
						.save-btn {
							display: flex;
							justify-content: center;
							align-items: center;
							.bi-check-circle-fill { display: none; }
							&:hover {
								.bi-check-circle { display: none; }
								.bi-check-circle-fill { display: block; }
							}
						}
						.un-save-btn {
							display: flex;
							justify-content: center;
							align-items: center;
							.bi-x-circle-fill { display: none; }
							&:hover {
								.bi-x-circle { display: none; }
								.bi-x-circle-fill { display: block; }
							}
						}
					}
					.delete-scheme {
						margin-left: auto;
						background: var(--accent2);
						color: var(--white);
						font-family: 'Neo Sans Pro', sans-serif;
						font-size: 1rem;
						transition: 0.3s;
						&:hover { background: var(--accent2-hover); }
					}
				}
			}
			&.show {
				.scheme-head {
					border-radius: 0.5rem 0.5rem 0 0;
					svg {
						transform: none;
					}
				}
			}
		}
	}
</style>