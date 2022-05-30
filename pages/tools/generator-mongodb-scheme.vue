<template>
	<div class="api-generator">
		<div class="container mb-5">
			<h1>Генератор MongoDB Scheme</h1>
		</div>

		<div class="container">
			<div class="row">
				<div class="col-7">
					<div
						@click="addScheme()"
						class="add-new-scheme mb-3"
					>
						<h2
							v-if="!schemes.length"
							class="h5"
						>Создать схему</h2>
						<h2
							v-else
							class="h5"
						>Добавить схему</h2>
						<span>+</span>
					</div>
					<div
						class="schemes-list-wrapper"
					>
						<div class="schemes-list-title h5">Список схем:</div>
						<ul
							v-if="schemes.length"
							class="schemes-list"
						>
							<li
								v-for="(scheme, i) in schemes"
								:key="i"
								:class="`scheme ${scheme.active ? 'active' : ''}`"
							>
								<div
									class="scheme-top"
								>
									<div class="scheme-name-wrapper">
										<div
											v-if="!scheme.nameIsRedact"
											@click="openScheme(i)"
											class="scheme-name"
										>{{scheme.name}}</div>
										<input v-else class="scheme-name redact" type="text" v-model="scheme.name">
									</div>
									<div class="scheme-controls">
										<div class="start-redact">
											<svg @click="scheme.nameIsRedact = !scheme.nameIsRedact" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"> <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/> <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/> </svg>
										</div>
										<div class="delete">
											<svg @click="deleteScheme(i)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16"> <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/> </svg>
										</div>
									</div>
								</div>
								<table
									class="scheme-props"
								>
									<thead>
										<tr>
											<td>Алиас</td>
											<td>Тип</td>
											<td>Обязательный</td>
											<td>Уникальный</td>
											<td>По умолчанию</td>
										</tr>
									</thead>
									<tbody>
										<tr
											v-for="(prop, j) in scheme.props"
											:key="j"
										>
											<td  class="prop-alias"><input v-model="prop.alias" type="text"></td>
											<td class="prop-type">
												<select v-model="prop.type">
													<option>String</option>
													<option>Number</option>
													<option>Boolean</option>
												</select>
											</td>
											<td class="prop-required">
												<input type="checkbox" v-model="prop.required">
											</td>
											<td class="prop-unique">
												<input type="checkbox" v-model="prop.unique">
											</td>
											<td  class="prop-default"><input v-model="prop.default" type="text"></td>
										</tr>
									</tbody>
								</table>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-5">
					<code>
						<pre>
<span v-for="(scheme, i) in schemes" :key="i" class="scheme-js">const {{scheme.name}}Schema = new Schema({<span v-for="(prop, j) in scheme.props" :key="j" class="scheme-js-prop">
	<span class="scheme-js-name">{{prop.alias}}</span>: {
		<span>type: <span class="scheme-js-type">{{prop.type}}</span>,</span>
		<span>required: <span class="scheme-js-required">{{prop.required}}</span>,</span>
		<span>unique: <span class="scheme-js-unique">{{prop.unique}}</span>,</span>
		<span>default: <span class="scheme-js-default">{{prop.default}}</span>,</span>
	}</span>
})</span>
							</pre>
					</code>
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
					name: 'Доширак',
					active: true,
					props: [
						{ alias: 'id', type: 'String', required: true, unique: true, default: false },
						{ alias: 'name', type: 'String', required: true, unique: false, default: false },
						{ alias: 'price', type: 'Number', required: true, unique: false, default: 0 },
						{ alias: 'published', type: 'Boolean', required: false, unique: false, default: true },
					],
					nameIsRedact: false
				}
			],
		}
	},
	methods: {
		addScheme() {
			this.schemes.push(
				{
					name: 'Название',
					active: true,
					props: [
						{ alias: 'id', type: 'String', required: true, unique: true, default: false },
						{ alias: 'name', type: 'String', required: true, unique: false, default: false },
						{ alias: 'price', type: 'Number', required: true, unique: false, default: 0 },
						{ alias: 'published', type: 'Boolean', required: true, unique: false, default: true },
					],
					nameIsRedact: false
				}
			)
		},
		deleteScheme(schemeIndex) {
			this.schemes.splice(schemeIndex, 1);
		},
		openScheme(schemeIndex) {
			this.schemes[schemeIndex].active = !this.schemes[schemeIndex].active
		}
	}
}
</script>

<style lang="scss" scoped>
	.add-new-scheme {
		display: flex;
		align-items: center;
		cursor: pointer;
		h2 {
			margin-right: 0.5rem;
			color: var(--accent);
			line-height: 1.2rem;
		}
		span {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 1.5rem;
			height: 1.5rem;
			border: 1px solid var(--accent);
			border-radius: 50%;
			color: var(--accent);
		}
	}
	.schemes-list {
		margin-left: 2rem;
		list-style-type: none;
		.scheme {
			position: relative;
			margin-top: 0.5rem;
			.scheme-props {
				display: none;
				margin-left: 1rem;
				.prop-required, .prop-unique {
					text-align: center;
				}
			}
			&.active .scheme-props {
				display: block;
			}
			&.active .scheme-top::before {
				transform: translateY(-50%) rotate(90deg);
			}
			.scheme-top {
				display: flex;
				justify-content: space-between;
				align-items: center;
				position: relative;
				margin-bottom: 0.5rem;
				width: 50%;
			}
			.scheme-top::before {
				content: '';
				position: absolute;
				top: 50%;
				left: -1rem;
				width: 0;
				height: 0;
				border: 0.5rem solid transparent;
				border-left-color: var(--accent);
				border-right: 0;
				transform: translateY(-50%);
				transition: .3s;
			}
			.scheme-name {
				width: 100%;
				padding: 0.5rem 1rem;
				border: 2px solid #fff0;
				font-size: 1rem;
				user-select: none;
				&.redact {
					display: block;
					width: 100%;
					border: 2px solid var(--accent);
					font-size: 1rem;
					outline: none;
					box-sizing: border-box;
				}
			}
			.scheme-name-wrapper {
				width: 80%;
			}
			.scheme-controls {
				display: flex;
				justify-content: space-around;
				align-items: center;
				width: 20%;
				svg {
					transition: .3s;
					cursor: pointer;
					user-select: none;
					&:hover {
						color: var(--accent);
					}
				}
				.delete svg:hover {
					color: var(--accent2);
				}
			}
		}
	}
</style>