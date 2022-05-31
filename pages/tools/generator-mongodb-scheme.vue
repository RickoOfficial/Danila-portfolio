<template>
	<div class="api-generator">
		<div class="container mb-5">
			<h1>Генератор MongoDB Scheme</h1>
		</div>

		<div class="container-fluid">
			<div class="row">
				<div class="offset-1 col-10">
					<div class="row">
						<div class="col-8">

							<div class="add-scheme-btn h5 mb-3">
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
									<transition name="fadeHeight">
										<div v-if="scheme.show" class="scheme-body">
											<div class="scheme-name-redact">
												<div class="h6">Название: </div>
												<input type="text" v-model="scheme.nameForRedact" :disabled="!scheme.nameIsRedact">
												<div class="controls">
													<svg v-if="!scheme.nameIsRedact" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="is-redact bi bi-pencil-square" viewBox="0 0 16 16"> <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/> <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/> </svg>
												</div>
											</div>
										</div>
									</transition>
								</div>
							</div>

						</div>
						<div class="col-4"></div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
export default {
	data() {
		return {
			schemes: [
				{
					name: 'product',
					props: [
						{ alias: 'id', type: 'String', required: true, unique: true, default: false },
						{ alias: 'name', type: 'String', required: true, unique: false, default: false },
						{ alias: 'price', type: 'Number', required: true, unique: false, default: 0 },
						{ alias: 'published', type: 'Boolean', required: false, unique: false, default: true },
					],
					show: true,
					nameIsRedact: false,
					nameForRedact: 'product',
				}
			],
		}
	},
	methods: {
		
	}
}
</script>

<style lang="scss" scoped>
	.add-scheme-btn {
		display: flex;
		align-items: center;
		color: var(--accent);
		cursor: pointer;
		user-select: none;
		svg {
			margin-left: 0.5rem;
			width: 1.5rem;
			height: 1.5rem;
		}
		.bi-plus-circle-fill {
			display: none;
		}
		&:hover {
			.bi-plus-circle { display: none; }
			.bi-plus-circle-fill { display: block; }
		}
	}
	.schemes-list {
		list-style-type: none;
		.scheme {
			position: relative;
			overflow: hidden;
			.scheme-head {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0.5rem 1rem;
				border-radius: 0.5rem;
				background: var(--accent);
				transition: .3s;
				.scheme-name {
					color: var(--white);
				}
				svg {
					fill: var(--white);
					transform: rotate(90deg);
					transition: .3s;
				}
			}
			.scheme-body {
				margin-top: -4px;
				padding: 1rem;
				border: 2px solid var(--accent);
				.scheme-name-redact {
					display: flex;
					align-items: center;
					.h6 { margin-right: 0.5rem; }
					input {
						padding: 0.3rem 0.5rem;
						border: none;
						border-bottom: 1px solid var(--accent);
						color: var(--black);
						font-size: 16px;
						outline: none;
					}
					input[disabled] {
						background: transparent;
						border-bottom: 1px solid #fff0;
						color: var(--black);
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

	.fadeHeight-enter-active { display: block; overflow: hidden; transition: .6s; }
	.fadeHeight-enter { max-height: 0; }
	.fadeHeight-enter-to { max-height: 100vh; }
	.fadeHeight-leave-active { overflow: hidden; transition: .3s; }
	.fadeHeight-leave { max-height: 100vh; }
	.fadeHeight-leave-to { max-height: 0; }
</style>