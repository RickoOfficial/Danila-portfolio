<template>
	<header>
		<div class="wrapper">
			<nav>
				<div class="left">
					<div class="nav-item">
						<NuxtLink to="/" class="nav-link">🏠</NuxtLink>
					</div>
				</div>
				<div class="right">
					<div class="nav-item">
						<NuxtLink to="/portfolio" class="nav-link">Портфолио</NuxtLink>
					</div>
					<div class="nav-item">
						<NuxtLink to="/works" class="nav-link">Работы</NuxtLink>
					</div>
					<div class="nav-item parent">
						<NuxtLink to="/tools" class="nav-link">Инструменты</NuxtLink>
						<div class="child-wrapper">
							<div class="child">
								<div class="nav-item">
									<NuxtLink to="/tools/generator-mongodb-scheme" class="nav-link">Генератор MongoDB Scheme</NuxtLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	</header>
</template>

<style scoped lang="scss">
	header {
		position: sticky;
		top: 1rem;
		
		.wrapper {
			margin: 1rem auto;
			padding: 12px 24px;
			width: 90%;
			background: var(--white);
			border: 1px solid var(--silver);
			border-radius: 1rem;
			box-sizing: border-box;

			nav {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.left {
					
					.nav-link {
						font-size: 2rem;
					}
				}
				.right {
					display: flex;
					justify-content: space-between;
					align-items: center;

					.nav-item {
						margin-left: 2rem;

						.nav-link {
							color: var(--black);
							text-decoration: none;
							font-size: 1.5rem;
							transition: .3s;
							&:hover {
								color: var(--accent);
							}
						}
						&.parent {
							position: relative;
							&:hover > .child-wrapper {
								display: block;
							}
							
							.child-wrapper {
								display: none;
								position: absolute;
								top: 100%;
								right: 0;
								padding-top: 0.5rem;

								.child {
									position: relative;
									padding: 0.5rem 1rem;
									background: var(--white);
									border: 1px solid var(--silver);
									border-radius: .5rem;

									.nav-item {
										width: max-content;
										margin: 0 0 1rem auto;
										&:last-child {
											margin-bottom: 0;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
</style>

