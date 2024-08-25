// @ts-nocheck

import Head from 'next/head'
import Script from 'next/script'

import './css/bootstrap-grid.min.css'
import './css/bootstrap-reboot.min.css'
import './css/bootstrap.min.css'
import './css/jarallax.css'
import './css/mbr-additional.css'
import './css/mobirise2.css'
import './css/style.css'
import './css/style_1.css'
import './css/styles.css'

export default function Home() {
	return (
		<>
			<Head>
				<meta charSet='UTF-8' />
				<meta
					httpEquiv='X-UA-Compatible'
					content='IE=edge'
				/>
				<meta
					name='generator'
					content='Mobirise v5.9.13, a.mobirise.com'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, minimum-scale=1'
				/>
				<link
					rel='shortcut icon'
					href='images/photo-1461280360983-bd93eaa5051b.jpeg'
					type='image/x-icon'
				/>
				<meta
					name='description'
					content='Trackker is a modern task-tracker platform designed for youth teams and students, enhancing productivity and collaboration with a sleek interface.'
				/>
				<title>Trackker Task Tracker</title>

				<link
					rel='preload'
					href='https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap&display=swap'
					as='style'
					onload="this.onload=null;this.rel='stylesheet'"
				/>

				<style
					dangerouslySetInnerHTML={{
						__html:
							'\n.navbar-fixed-top {\n  top: auto;\n}\n#mobiriseBanner.container-banner {\n  height: 8rem;\n  opacity: 1;\n  -webkit-animation: 4s linear animationHeight;\n  -moz-animation: 4s linear animationHeight;\n    -o-animation: 4s linear animationHeight;\n       animation: 4s linear animationHeight;\n       transition: all  0.5s;\n}\n#mobiriseBanner.container-banner.container-banner-closing {\n  pointer-events: none;\n  height: 0;\n  opacity: 0;\n  -webkit-animation: 0.5s linear animationClosing;\n  -moz-animation:  0.5s linear animationClosing;\n    -o-animation:  0.5s linear animationClosing;\n       animation:  0.5s linear animationClosing;\n}\n#mobiriseBanner .banner {\n  min-height: 8rem;\n  position:fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: #fff;\n  padding: 10px;\n  opacity:1;\n  -webkit-animation: 4s linear animationBanner;\n  -moz-animation: 4s linear animationBanner;\n    -o-animation: 4s linear animationBanner;\n       animation: 4s linear animationBanner;\n  z-index: 1031;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n#mobiriseBanner .banner p {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n  animation: none;\n  visibility: visible;\n}\n#mobiriseBanner .buy-license {\n  text-decoration: underline;\n}\n#mobiriseBanner .banner .btn {\n  margin: 0.3rem 0.5rem;\n  animation: none;\n  visibility: visible;\n}\n.navbar.opened {\n    z-index: 1032;\n}\n@-webkit-keyframes animationBanner { 0% { opacity: 0; top: -8rem; } 75% { opacity: 0; top: -8rem; } 100% { opacity: 1; top: 0; } }\n@-moz-keyframes animationBanner { 0% { opacity: 0; top: -8rem; } 75% { opacity: 0; top: -8rem; } 100% { opacity: 1; top: 0; } }\n@-o-keyframes animationBanner { 0% { opacity: 0; top: -8rem; } 75% { opacity: 0; top: -8rem; } 100% { opacity: 1; top: 0; } }\n   @keyframes animationBanner { 0% { opacity: 0; top: -8rem; } 75% { opacity: 0; top: -8rem; } 100% { opacity: 1; top: 0; } }\n@-webkit-keyframes animationHeight { 0% { height: 0; } 75% { height: 0; } 100% { height: 8rem; } }\n@-moz-keyframes animationHeight { 0% { height: 0; } 75% { height: 0; } 100% { height: 8rem; } }\n@-o-keyframes animationHeight { 0% { height: 0; } 75% { height: 0; } 100% { height: 8rem; } }\n   @keyframes animationHeight { 0% { height: 0; } 75% { height: 0; } 100% { height: 8rem; } }\n   \n@-webkit-keyframes animationClosing { 0% { height: 8rem; opacity: 1; } 30% { height: 8rem; opacity: 0.5;} 100% { height: 0; opacity: 0;} }\n@-moz-keyframes animationClosing { 0% { height: 8rem; opacity: 1; } 30% { height: 8rem; opacity: 0.5;} 100% { height: 0; opacity: 0;} }\n@-o-keyframes animationClosing { 0% { height: 8rem; opacity: 1; } 30% { height: 8rem; opacity: 0.5;} 100% { height: 0; opacity: 0;} }\n@keyframes animationClosing { 0% { height: 8rem; opacity: 1; } 30% { height: 8rem; opacity: 0.5;} 100% { height: 0; opacity: 0;} }\n\n@media(max-width: 767px) {\n  #mobiriseBanner.container-banner {\n    height: 12rem;\n  }\n  #mobiriseBanner .banner {\n    min-height: 12rem;\n  }\n  @-webkit-keyframes animationBanner { 0% { opacity: 0; top: -12rem; } 75% { opacity: 0; top: -12rem; } 100% { opacity: 1; top: 0; } }\n  @-moz-keyframes animationBanner { 0% { opacity: 0; top: -12rem; } 75% { opacity: 0; top: -12rem; } 100% { opacity: 1; top: 0; } }\n  @-o-keyframes animationBanner { 0% { opacity: 0; top: -12rem; } 75% { opacity: 0; top: -12rem; } 100% { opacity: 1; top: 0; } }\n    @keyframes animationBanner { 0% { opacity: 0; top: -12rem; } 75% { opacity: 0; top: -12rem; } 100% { opacity: 1; top: 0; } }\n  @-webkit-keyframes animationHeight { 0% { height: 0; } 75% { height: 0; } 100% { height: 12rem; } }\n  @-moz-keyframes animationHeight { 0% { height: 0; } 75% { height: 0; } 100% { height: 12rem; } }\n  @-o-keyframes animationHeight { 0% { height: 0; } 75% { height: 0; } 100% { height: 12rem; } }\n    @keyframes animationHeight { 0% { height: 0; } 75% { height: 0; } 100% { height: 12rem; } }\n\n  @-webkit-keyframes animationClosing { 0% { height: 12rem; opacity: 1; } 30% { height: 12rem; opacity: 0.5;} 100% { height: 0; opacity: 0;} }\n  @-moz-keyframes animationClosing { 0% { height: 12rem; opacity: 1; } 30% { height: 12rem; opacity: 0.5;} 100% { height: 0; opacity: 0;} }\n  @-o-keyframes animationClosing { 0% { height: 12rem; opacity: 1; } 30% { height: 12rem; opacity: 0.5;} 100% { height: 0; opacity: 0;} }\n  @keyframes animationClosing { 0% { height: 12rem; opacity: 1; } 30% { height: 12rem; opacity: 0.5;} 100% { height: 0; opacity: 0;} }\n}\n'
					}}
				/>
			</Head>

			<div>
				<section
					data-bs-version='5.1'
					className='menu menu2 cid-ulgxlwX2Tw'
					// once='menu'
					id='menu-5-ulgxlwX2Tw'
				>
					<nav className='navbar navbar-dropdown navbar-fixed-top navbar-expand-lg'>
						<div className='container'>
							<div className='navbar-brand'>
								<span className='navbar-logo'>
									<a href='#'>
										<img
											src='images/photo-1461280360983-bd93eaa5051b.jpeg'
											alt='Mobirise Website Builder'
											style={{ height: '4.3rem' }}
										/>
									</a>
								</span>
								<span className='navbar-caption-wrap'>
									<a
										className='navbar-caption text-black display-4'
										href='#'
									>
										Trackker
									</a>
								</span>
							</div>
							<button
								className='navbar-toggler'
								type='button'
								data-toggle='collapse'
								data-bs-toggle='collapse'
								data-target='#navbarSupportedContent'
								data-bs-target='#navbarSupportedContent'
								aria-controls='navbarNavAltMarkup'
								aria-expanded='false'
								aria-label='Toggle navigation'
							>
								<div className='hamburger'>
									<span />
									<span />
									<span />
									<span />
								</div>
							</button>
							<div
								className='collapse navbar-collapse'
								id='navbarSupportedContent'
							>
								{/* <ul
									className='navbar-nav nav-dropdown'
									data-app-modern-menu='true'
								>
									<li className='nav-item'>
										<a
											className='nav-link link text-black display-4'
											href='https://mobiri.se'
										>
											Главная
										</a>
									</li>
									<li className='nav-item'>
										<a
											className='nav-link link text-black display-4'
											href='https://mobiri.se'
											aria-expanded='false'
										>
											О нас
										</a>
									</li>
									<li className='nav-item'>
										<a
											className='nav-link link text-black display-4'
											href='https://mobiri.se'
										>
											Контакты
										</a>
									</li>
								</ul> */}
								<div className='navbar-buttons mbr-section-btn'>
									<a
										className='btn btn-primary display-4'
										href='https://trackker.ru/auth'
									>
										Начать сейчас
									</a>
								</div>
							</div>
						</div>
					</nav>
				</section>
				<section
					data-bs-version='5.1'
					className='header18 cid-ulgxlwYJ7v mbr-fullscreen'
					data-bg-video='https://www.youtube.com/embed/XYAghEq5Lfw?autoplay=1&loop=1&playlist=XYAghEq5Lfw&t=20&mute=1&playsinline=1&controls=0&showinfo=0&autohide=1&allowfullscreen=true&mode=transparent'
					id='hero-16-ulgxlwYJ7v'
				>
					<div
						className='mbr-overlay'
						style={{ opacity: '0.5', backgroundColor: 'rgb(0, 0, 0)' }}
					/>
					<div className='container-fluid'>
						<div className='row'>
							<div className='content-wrap col-12 col-md-12'>
								<h1 className='mbr-section-title mbr-fonts-style mbr-white mb-4 display-1'>
									<strong>Трекер Задач</strong>
								</h1>
								<p className='mbr-fonts-style mbr-text mbr-white mb-4 display-7'>
									Управляйте задачами с легкостью и стилем!
								</p>
								<div className='mbr-section-btn'>
									<a
										className='btn btn-white-outline display-7'
										href='https://mobiri.se'
									>
										Узнать больше
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					data-bs-version='5.1'
					className='header18 cid-ulgxlwZidb mbr-fullscreen'
					data-bg-video='https://www.youtube.com/embed/5GlS9pyqBgM?autoplay=1&loop=1&playlist=5GlS9pyqBgM&t=20&mute=1&playsinline=1&controls=0&showinfo=0&autohide=1&allowfullscreen=true&mode=transparent'
					id='video-5-ulgxlwZidb'
				>
					<div
						className='mbr-overlay'
						style={{ opacity: '0.3', backgroundColor: 'rgb(0, 0, 0)' }}
					/>
					<div className='container-fluid'>
						<div className='row'></div>
					</div>
				</section>
				<section
					data-bs-version='5.1'
					className='gallery10 cid-ulgxlwZtDK'
					id='features-69-ulgxlwZtDK'
				>
					<div className='container-fluid'>
						<div className='loop-container'>
							<div
								className='item display-1'
								data-linewords='Современный дизайн для молодежных команд * Легкость в использовании и навигации * '
								data-direction={-1}
								data-speed='0.05'
							>
								☁️ Best offers ☁️ Free delivery ☁️ Perfect design ☁️ Comfort ☁️
								Support 24/7 ☁️ Vibes
							</div>
							<div
								className='item display-1'
								data-linewords='Современный дизайн для молодежных команд * Легкость в использовании и навигации * '
								data-direction={-1}
								data-speed='0.05'
							>
								☁️ Best offers ☁️ Free delivery ☁️ Perfect design ☁️ Comfort ☁️
								Support 24/7 ☁️ Vibes
							</div>
						</div>
					</div>
				</section>
				<section
					data-bs-version='5.1'
					className='article2 cid-ulgxlwZvdu'
					id='about-us-2-ulgxlwZvdu'
				>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col-12 col-md-12 col-lg-6 image-wrapper'>
								<img
									className='w-100'
									src='images/photo-1494883759339-0b042055a4ee.jpeg'
									alt='Mobirise Website Builder'
								/>
							</div>
							<div className='col-12 col-md-12 col-lg'>
								<div className='text-wrapper align-left'>
									<h1 className='mbr-section-title mbr-fonts-style mb-4 display-2'>
										<strong>О компании Trackker</strong>
									</h1>
									<p className='mbr-text align-left mbr-fonts-style mb-3 display-7'>
										Мы - Trackker, команда из �&nbsp;оссии, которая создает
										уникальный инструмент для управления задачами. Мы понимаем,
										что молодежные команды нуждаются в чем-то более
										захватывающем, чем просто скучные списки задач.
									</p>
									<p className='mbr-text align-left mbr-fonts-style mb-3 display-7'>
										Наш сайт - это не просто трекер, это ваш личный помощник,
										который всегда под рукой. Мы сделали его легким, стильным и,
										что самое главное, веселым! Забудьте о рутинных задачах, с
										Trackker вы сможете сосредоточиться на том, что
										действительно важно.
									</p>
									<p className='mbr-text align-left mbr-fonts-style mb-3 display-7'>
										Присоединяйтесь к нам и откройте для себя мир, где
										управление задачами становится увлекательным приключением.
										Trackker - это не просто инструмент, это ваш новый лучший
										друг в мире задач!
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					data-bs-version='5.1'
					className='people05 cid-ulgxlwZHEl'
					id='testimonials-5-ulgxlwZHEl'
				>
					<div className='container'>
						<div className='row mb-5 justify-content-center'>
							<div className='col-12 mb-0 content-head'>
								<h3 className='mbr-section-title mbr-fonts-style align-center mb-0 display-2'>
									<strong>Отзывы</strong>
								</h3>
							</div>
						</div>
						<div className='row'>
							<div className='item features-without-image col-12 col-md-6 col-lg-4 active'>
								<div className='item-wrapper'>
									<div className='card-box align-left'>
										<p className='card-text mbr-fonts-style display-7'>
											Trackker изменил нашу командную работу к лучшему!
										</p>
										<div className='img-wrapper mt-4 mb-3'>
											<img
												src='images/photo-1633594708103-e6e41891b679.jpeg'
												alt=''
												data-slide-to={0}
												data-bs-slide-to={0}
											/>
										</div>
										<h5 className='card-title mbr-fonts-style display-7'>
											<strong>Анна</strong>
										</h5>
									</div>
								</div>
							</div>
							<div className='item features-without-image col-12 col-md-6 col-lg-4'>
								<div className='item-wrapper'>
									<div className='card-box align-left'>
										<p className='card-text mbr-fonts-style display-7'>
											Легко использовать и невероятно полезно!
										</p>
										<div className='img-wrapper mt-4 mb-3'>
											<img
												src='images/photo-1679746584014-fb31d4eb0a5e.jpeg'
												data-slide-to={1}
												data-bs-slide-to={1}
												alt=''
											/>
										</div>
										<h5 className='card-title mbr-fonts-style display-7'>
											<strong>Иван</strong>
										</h5>
									</div>
								</div>
							</div>
							<div className='item features-without-image col-12 col-md-6 col-lg-4'>
								<div className='item-wrapper'>
									<div className='card-box align-left'>
										<p className='card-text mbr-fonts-style display-7'>
											Наша продуктивность взлетела до небес!
										</p>
										<div className='img-wrapper mt-4 mb-3'>
											<img
												src='images/photo-1615065591984-6800446436a1.jpeg'
												data-slide-to={2}
												data-bs-slide-to={2}
												alt=''
											/>
										</div>
										<h5 className='card-title mbr-fonts-style display-7'>
											<strong>Мария</strong>
										</h5>
									</div>
								</div>
							</div>
							<div className='item features-without-image col-12 col-md-6 col-lg-4'>
								<div className='item-wrapper'>
									<div className='card-box align-left'>
										<p className='card-text mbr-fonts-style display-7'>
											Trackker — это просто находка для студентов!
										</p>
										<div className='img-wrapper mt-4 mb-3'>
											<img
												src='images/photo-1563170423-18f482d82cc8.jpeg'
												data-slide-to={4}
												data-bs-slide-to={4}
												alt=''
											/>
										</div>
										<h5 className='card-title mbr-fonts-style display-7'>
											<strong>Дмитрий</strong>
										</h5>
									</div>
								</div>
							</div>
							<div className='item features-without-image col-12 col-md-6 col-lg-4'>
								<div className='item-wrapper'>
									<div className='card-box align-left'>
										<p className='card-text mbr-fonts-style display-7'>
											Супер удобный интерфейс и классные функции!
										</p>
										<div className='img-wrapper mt-4 mb-3'>
											<img
												src='images/photo-1681075401974-907cc62a4373.jpeg'
												data-slide-to={6}
												data-bs-slide-to={6}
												alt=''
											/>
										</div>
										<h5 className='card-title mbr-fonts-style display-7'>
											<strong>Елена</strong>
										</h5>
									</div>
								</div>
							</div>
							<div className='item features-without-image col-12 col-md-6 col-lg-4'>
								<div className='item-wrapper'>
									<div className='card-box align-left'>
										<p className='card-text mbr-fonts-style display-7'>
											Я не могу представить свою жизнь без Trackker!
										</p>
										<div className='img-wrapper mt-4 mb-3'>
											<img
												src='images/photo-1607556114526-058f5efdf49e.jpeg'
												data-slide-to={7}
												data-bs-slide-to={7}
												alt=''
											/>
										</div>
										<h5 className='card-title mbr-fonts-style display-7'>
											<strong>Сергей</strong>
										</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					data-bs-version='5.1'
					className='image02 cid-ulgxlwZ7cF mbr-fullscreen mbr-parallax-background'
					id='image-13-ulgxlwZ7cF'
				>
					<div className='container'>
						<div className='row' />
					</div>
				</section>
				<section
					data-bs-version='5.1'
					className='news08 cid-ulgxlwZv7X'
					id='blog-5-ulgxlwZv7X'
				>
					<div className='container'>
						<div className='row justify-content-center mb-5'>
							<div className='col-12 content-head'>
								<div className='mbr-section-head'>
									<h4 className='mbr-section-title mbr-fonts-style align-center mb-0 display-2'>
										<strong>Блог Trackker</strong>
									</h4>
								</div>
							</div>
						</div>
						<div className='row'>
							<div className='item features-image col-12 col-md-6 col-lg-6 active'>
								<div className='item-wrapper'>
									<div className='item-img mb-3'>
										<img
											src='images/photo-1524123927353-2436c0c66a1f.jpeg'
											alt='Mobirise Website Builder'
											title=''
											data-slide-to={0}
											data-bs-slide-to={0}
										/>
									</div>
									<div className='item-content align-left'>
										<h5 className='item-title mbr-fonts-style mt-0 mb-3 display-7'>
											2024-08-01
										</h5>
										<h6 className='item-subtitle mbr-fonts-style mb-3 display-5'>
											<strong>Как организовать команду мечты</strong>
										</h6>
										<p className='mbr-text mbr-fonts-style mb-3 display-7'>
											Советы по созданию идеальной команды для проектов.
										</p>
									</div>
								</div>
							</div>
							<div className='item features-image col-12 col-md-6 col-lg-6'>
								<div className='item-wrapper'>
									<div className='item-img mb-3'>
										<img
											src='images/photo-1491438590914-bc09fcaaf77a.jpeg'
											alt='Mobirise Website Builder'
											title=''
											data-slide-to={1}
											data-bs-slide-to={1}
										/>
									</div>
									<div className='item-content align-left'>
										<h5 className='item-title mbr-fonts-style mt-0 mb-3 display-7'>
											2024-07-15
										</h5>
										<h6 className='item-subtitle mbr-fonts-style mb-3 display-5'>
											<strong>Топ-5 приложений для продуктивности</strong>
										</h6>
										<p className='mbr-text mbr-fonts-style mb-3 display-7'>
											Лучшие приложения, которые помогут вам работать быстрее.
										</p>
									</div>
								</div>
							</div>
							<div className='item features-image col-12 col-md-6 col-lg-6'>
								<div className='item-wrapper'>
									<div className='item-img mb-3'>
										<img
											src='images/photo-1438761681033-6461ffad8d80.jpeg'
											alt='Mobirise Website Builder'
											title=''
											data-slide-to={2}
											data-bs-slide-to={3}
										/>
									</div>
									<div className='item-content align-left'>
										<h5 className='item-title mbr-fonts-style mt-0 mb-3 display-7'>
											2024-06-20
										</h5>
										<h6 className='item-subtitle mbr-fonts-style mb-3 display-5'>
											<strong>Как не сойти с ума на учёбе</strong>
										</h6>
										<p className='mbr-text mbr-fonts-style mb-3 display-7'>
											Стратегии для сохранения спокойствия во время учёбы.
										</p>
									</div>
								</div>
							</div>
							<div className='item features-image col-12 col-md-6 col-lg-6'>
								<div className='item-wrapper'>
									<div className='item-img mb-3'>
										<img
											src='images/photo-1484712401471-05c7215830eb.jpeg'
											alt='Mobirise Website Builder'
											title=''
											data-slide-to={3}
											data-bs-slide-to={4}
										/>
									</div>
									<div className='item-content align-left'>
										<h5 className='item-title mbr-fonts-style mt-0 mb-3 display-7'>
											2024-05-10
										</h5>
										<h6 className='item-subtitle mbr-fonts-style mb-3 display-5'>
											<strong>Секреты успешного тайм-менеджмента</strong>
										</h6>
										<p className='mbr-text mbr-fonts-style mb-3 display-7'>
											Как управлять своим временем, чтобы успевать всё.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					data-bs-version='5.1'
					className='list1 cid-ulgxlx0xxZ'
					id='faq-1-ulgxlx0xxZ'
				>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col-12 col-md-12 col-lg-10 m-auto'>
								<div className='content'>
									<div className='row justify-content-center mb-5'>
										<div className='col-12 content-head'>
											<div className='mbr-section-head'>
												<h4 className='mbr-section-title mbr-fonts-style align-center mb-0 display-2'>
													<strong>Часто задаваемые вопросы</strong>
												</h4>
											</div>
										</div>
									</div>
									<div
										id='bootstrap-accordion_8'
										className='panel-group accordionStyles accordion'
										role='tablist'
										aria-multiselectable='true'
									>
										<div className='card'>
											<div
												className='card-header'
												role='tab'
												id='headingOne'
											>
												<a
													role='button'
													className='panel-title collapsed'
													data-toggle='collapse'
													data-bs-toggle='collapse'
													data-core=''
													href='#collapse1_8'
													aria-expanded='false'
													aria-controls='collapse1'
												>
													<h6 className='panel-title-edit mbr-semibold mbr-fonts-style mb-0 display-5'>
														Что такое Trackker?
													</h6>
													<span className='sign mbr-iconfont mobi-mbri-arrow-down' />
												</a>
											</div>
											<div
												id='collapse1_8'
												className='panel-collapse noScroll collapse'
												role='tabpanel'
												aria-labelledby='headingOne'
												data-parent='#accordion'
												data-bs-parent='#bootstrap-accordion_8'
											>
												<div className='panel-body'>
													<p className='mbr-fonts-style panel-text display-7'>
														Trackker — это ваш личный помощник для управления
														задачами!
													</p>
												</div>
											</div>
										</div>
										<div className='card'>
											<div
												className='card-header'
												role='tab'
												id='headingOne'
											>
												<a
													role='button'
													className='panel-title collapsed'
													data-toggle='collapse'
													data-bs-toggle='collapse'
													data-core=''
													href='#collapse2_8'
													aria-expanded='false'
													aria-controls='collapse2'
												>
													<h6 className='panel-title-edit mbr-semibold mbr-fonts-style mb-0 display-5'>
														Как начать использовать Trackker?
													</h6>
													<span className='sign mbr-iconfont mobi-mbri-arrow-down' />
												</a>
											</div>
											<div
												id='collapse2_8'
												className='panel-collapse noScroll collapse'
												role='tabpanel'
												aria-labelledby='headingOne'
												data-parent='#accordion'
												data-bs-parent='#bootstrap-accordion_8'
											>
												<div className='panel-body'>
													<p className='mbr-fonts-style panel-text display-7'>
														Просто зарегистрируйтесь и начните создавать задачи!
													</p>
												</div>
											</div>
										</div>
										<div className='card'>
											<div
												className='card-header'
												role='tab'
												id='headingOne'
											>
												<a
													role='button'
													className='panel-title collapsed'
													data-toggle='collapse'
													data-bs-toggle='collapse'
													data-core=''
													href='#collapse3_8'
													aria-expanded='false'
													aria-controls='collapse3'
												>
													<h6 className='panel-title-edit mbr-semibold mbr-fonts-style mb-0 display-5'>
														Есть ли мобильное приложение?
													</h6>
													<span className='sign mbr-iconfont mobi-mbri-arrow-down' />
												</a>
											</div>
											<div
												id='collapse3_8'
												className='panel-collapse noScroll collapse'
												role='tabpanel'
												aria-labelledby='headingOne'
												data-parent='#accordion'
												data-bs-parent='#bootstrap-accordion_8'
											>
												<div className='panel-body'>
													<p className='mbr-fonts-style panel-text display-7'>
														Да, у нас есть мобильное приложение для удобства!
													</p>
												</div>
											</div>
										</div>
										<div className='card'>
											<div
												className='card-header'
												role='tab'
												id='headingOne'
											>
												<a
													role='button'
													className='panel-title collapsed'
													data-toggle='collapse'
													data-bs-toggle='collapse'
													data-core=''
													href='#collapse4_8'
													aria-expanded='false'
													aria-controls='collapse4'
												>
													<h6 className='panel-title-edit mbr-semibold mbr-fonts-style mb-0 display-5'>
														Как связаться с поддержкой?
													</h6>
													<span className='sign mbr-iconfont mobi-mbri-arrow-down' />
												</a>
											</div>
											<div
												id='collapse4_8'
												className='panel-collapse noScroll collapse'
												role='tabpanel'
												aria-labelledby='headingOne'
												data-parent='#accordion'
												data-bs-parent='#bootstrap-accordion_8'
											>
												<div className='panel-body'>
													<p className='mbr-fonts-style panel-text display-7'>
														Напишите нам на support@trackker.com, и мы ответим!
													</p>
												</div>
											</div>
										</div>
										<div className='card'>
											<div
												className='card-header'
												role='tab'
												id='headingOne'
											>
												<a
													role='button'
													className='panel-title collapsed'
													data-toggle='collapse'
													data-bs-toggle='collapse'
													data-core=''
													href='#collapse5_8'
													aria-expanded='false'
													aria-controls='collapse5'
												>
													<h6 className='panel-title-edit mbr-semibold mbr-fonts-style mb-0 display-5'>
														Можно ли использовать бесплатно?
													</h6>
													<span className='sign mbr-iconfont mobi-mbri-arrow-down' />
												</a>
											</div>
											<div
												id='collapse5_8'
												className='panel-collapse noScroll collapse'
												role='tabpanel'
												aria-labelledby='headingOne'
												data-parent='#accordion'
												data-bs-parent='#bootstrap-accordion_8'
											>
												<div className='panel-body'>
													<p className='mbr-fonts-style panel-text display-7'>
														Да, у нас есть бесплатный тариф для студентов!
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					data-bs-version='5.1'
					className='gallery07 cid-ulgxlx2wMz'
					id='gallery-14-ulgxlx2wMz'
				>
					<div className='container-fluid gallery-wrapper'>
						<div className='row justify-content-center'>
							<div className='col-12 content-head'></div>
						</div>
						<div className='grid-container'>
							<div
								className='grid-container-3 moving-left'
								style={{ transform: 'translate3d(-200px, 0px, 0px)' }}
							>
								<div className='grid-item'>
									<img
										src='images/photo-1548964643-0765c5d29abe.jpeg'
										alt='Mobirise Website Builder'
									/>
								</div>
								<div className='grid-item'>
									<img
										src='images/photo-1502444330042-d1a1ddf9bb5b.jpeg'
										alt='Mobirise Website Builder'
									/>
								</div>
								<div className='grid-item'>
									<img
										src='images/photo-1484906413231-53ef3d6c2f9b.jpeg'
										alt='Mobirise Website Builder'
									/>
								</div>
								<div className='grid-item'>
									<img
										src='images/photo-1484906468498-4d81f1001881.jpeg'
										alt='Mobirise Website Builder'
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					data-bs-version='5.1'
					className='features023 cid-ulgxlx2xnp'
					id='metrics-1-ulgxlx2xnp'
				>
					<div className='container'>
						<div className='row content-row justify-content-center'>
							<div className='item features-without-image col-12 col-md-6 col-lg-4 item-mb'>
								<div className='item-wrapper'>
									<div className='title mb-2 mb-md-3'>
										<span className='num mbr-fonts-style display-1'>
											<strong>500+</strong>
										</span>
									</div>
									<h4 className='card-title mbr-fonts-style display-5'>
										<strong>Счастливые пользователи</strong>
									</h4>
								</div>
							</div>
							<div className='item features-without-image col-12 col-md-6 col-lg-4 item-mb'>
								<div className='item-wrapper'>
									<div className='title mb-2 mb-md-3'>
										<span className='num mbr-fonts-style display-1'>
											<strong>1000+</strong>
										</span>
									</div>
									<h4 className='card-title mbr-fonts-style display-5'>
										<strong>Завершенные задачи</strong>
									</h4>
								</div>
							</div>
							<div className='item features-without-image col-12 col-md-6 col-lg-4 item-mb'>
								<div className='item-wrapper'>
									<div className='title mb-2 mb-md-3'>
										<span className='num mbr-fonts-style display-1'>
											<strong>24/7</strong>
										</span>
									</div>
									<h4 className='card-title mbr-fonts-style display-5'>
										<strong>Поддержка на связи</strong>
									</h4>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					data-bs-version='5.1'
					className='people03 cid-ulgxlx3rWQ'
					id='team-1-ulgxlx3rWQ'
				>
					<div className='container-fluid'>
						<div className='row justify-content-center'>
							<div className='col-12 content-head'>
								<div className='mbr-section-head mb-5'>
									<h4 className='mbr-section-title mbr-fonts-style align-center mb-0 display-2'>
										<strong>Наша команда</strong>
									</h4>
								</div>
							</div>
						</div>
						<div className='row'>
							<div className='item features-image col-12 col-md-6 col-lg-3'>
								<div className='item-wrapper'>
									<div className='item-img mb-3'>
										<img
											src='images/photo-1536548665027-b96d34a005ae.jpeg'
											alt='Mobirise Website Builder'
											title=''
										/>
									</div>
									<div className='item-content align-left'>
										<h5 className='item-title mbr-fonts-style display-5'>
											<strong>Иван</strong>
										</h5>
										<h6 className='item-subtitle mbr-fonts-style mb-3 display-7'>
											�&nbsp;азработчик
										</h6>
									</div>
								</div>
							</div>
							<div className='item features-image col-12 col-md-6 col-lg-3'>
								<div className='item-wrapper'>
									<div className='item-img mb-3'>
										<img
											src='images/photo-1541385767762-a55c33eb0c80.jpeg'
											alt='Mobirise Website Builder'
											title=''
										/>
									</div>
									<div className='item-content align-left'>
										<h5 className='item-title mbr-fonts-style display-5'>
											<strong>Анна</strong>
										</h5>
										<h6 className='item-subtitle mbr-fonts-style mb-3 display-7'>
											Дизайнер
										</h6>
									</div>
								</div>
							</div>
							<div className='item features-image col-12 col-md-6 col-lg-3'>
								<div className='item-wrapper'>
									<div className='item-img mb-3'>
										<img
											src='images/photo-1489980721706-f487dab89c24.jpeg'
											alt='Mobirise Website Builder'
											title=''
										/>
									</div>
									<div className='item-content align-left'>
										<h5 className='item-title mbr-fonts-style display-5'>
											<strong>Сергей</strong>
										</h5>
										<h6 className='item-subtitle mbr-fonts-style mb-3 display-7'>
											Менеджер
										</h6>
									</div>
								</div>
							</div>
							<div className='item features-image col-12 col-md-6 col-lg-3'>
								<div className='item-wrapper'>
									<div className='item-img mb-3'>
										<img
											src='images/photo-1608652763120-59aab1d8125c.jpeg'
											alt='Mobirise Website Builder'
											title=''
											data-slide-to={3}
											data-bs-slide-to={3}
										/>
									</div>
									<div className='item-content align-left'>
										<h5 className='item-title mbr-fonts-style display-5'>
											<strong>Ольга</strong>
										</h5>
										<h6 className='item-subtitle mbr-fonts-style mb-3 display-7'>
											Маркетолог
										</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					data-bs-version='5.1'
					className='video04 cid-ulgxlx3af9'
					id='video-6-ulgxlx3af9'
				>
					<div className='container'>
						<div className='mbr-section-head mb-5'>
							<h4 className='mbr-section-title mbr-fonts-style mb-0 mt-0 display-2'>
								<strong>Погрузитесь в Trackker</strong>
							</h4>
						</div>
						<div className='row justify-content-center'>
							<div className='col-12 col-md-10 video-block'>
								<div className='video-wrapper'>
									<iframe
										width={720}
										height={405}
										src='https://rutube.ru/play/embed/79f45fac2f211d41b583f451c8617119/'
										frameBorder={0}
										allow='clipboard-write; autoplay'
										webkitallowfullscreen=''
										mozallowfullscreen=''
										allowFullScreen=''
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					data-bs-version='5.1'
					className='article13 cid-ulgxlx43Ds'
					id='call-to-action-3-ulgxlx43Ds'
				>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='card col-md-12 col-lg-10'>
								<div className='card-wrapper'>
									<div className='card-box align-left'>
										<h4 className='card-title mbr-fonts-style display-2'>
											<strong>Присоединяйтесь к нам сегодня!</strong>
										</h4>
										<div className='mbr-section-btn mt-4'>
											<a
												className='btn btn-primary display-4'
												href='https://mobiri.se'
											>
												Начать сейчас
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					data-bs-version='5.1'
					className='social05 cid-ulgxlx5URJ'
					id='follow-us-2-ulgxlx5URJ'
				>
					<div className='container'>
						<div className='row'>
							<h3 className='mbr-section-title align-center mb-5 mbr-fonts-style display-2'>
								<strong>Следите за нами!</strong>
							</h3>
							<div className='col-12'>
								<div className='social-row'>
									<div className='soc-item'>
										<a
											href='https://mobiri.se/'
											target='_blank'
										>
											<span className='mbr-iconfont socicon socicon-facebook' />
										</a>
									</div>
									<div className='soc-item'>
										<a
											href='https://mobiri.se/'
											target='_blank'
										>
											<span className='mbr-iconfont socicon-twitter socicon' />
										</a>
									</div>
									<div className='soc-item'>
										<a
											href='https://mobiri.se/'
											target='_blank'
										>
											<span className='mbr-iconfont socicon-instagram socicon' />
										</a>
									</div>
									<div className='soc-item'>
										<a
											href='https://mobiri.se/'
											target='_blank'
										>
											<span className='mbr-iconfont socicon socicon-linkedin' />
										</a>
									</div>
									<div className='soc-item'>
										<a
											href='https://mobiri.se/'
											target='_blank'
										>
											<span className='mbr-iconfont socicon socicon-twitch' />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					data-bs-version='5.1'
					className='form5 cid-ulgxlx5ppl'
					id='contact-form-2-ulgxlx5ppl'
				>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col-12 content-head'>
								<div className='mbr-section-head mb-5'>
									<h3 className='mbr-section-title mbr-fonts-style align-center mb-0 display-2'>
										<strong>Свяжитесь с нами</strong>
									</h3>
								</div>
							</div>
						</div>
						<div className='row justify-content-center'>
							<div
								className='col-lg-8 mx-auto mbr-form'
								data-form-type='formoid'
							>
								<form
									action='https://mobirise.eu/'
									method='POST'
									className='mbr-form form-with-styler'
									data-form-title='Form Name'
								>
									<input
										type='hidden'
										name='email'
										data-form-email='true'
										defaultValue='jw6OlfK+545i3Ww4xUQHjQ8AIiPs+EST0szN+ksCXSgaoXHJrGlUhlPhab9sLPHPHsa+x7Nb+WCRFvnwUkh05J8mo9sgoG7lptyQFux/mwlXcvMBRBzDFh97N6Dh02UB'
									/>
									<div className='row'>
										<div
											hidden='hidden'
											data-form-alert=''
											className='alert alert-success col-12'
										>
											Thanks for filling out the form!
										</div>
										<div
											hidden='hidden'
											data-form-alert-danger=''
											className='alert alert-danger col-12'
										>
											Oops...! some problem!
										</div>
									</div>
									<div className='dragArea row'>
										<div
											className='col-md col-sm-12 form-group mb-3'
											data-for='name'
										>
											<input
												type='text'
												name='name'
												placeholder='Имя'
												data-form-field='name'
												className='form-control'
												defaultValue=''
												id='name-contact-form-2-ulgxlx5ppl'
											/>
										</div>
										<div
											className='col-md col-sm-12 form-group mb-3'
											data-for='email'
										>
											<input
												type='email'
												name='email'
												placeholder='Email'
												data-form-field='email'
												className='form-control'
												defaultValue=''
												id='email-contact-form-2-ulgxlx5ppl'
											/>
										</div>
										<div
											className='col-12 form-group mb-3'
											data-for='textarea'
										>
											<textarea
												name='textarea'
												placeholder='Сообщение'
												data-form-field='textarea'
												className='form-control'
												id='textarea-contact-form-2-ulgxlx5ppl'
												defaultValue={''}
											/>
										</div>
										<div className='col-lg-12 col-md-12 col-sm-12 align-center mbr-section-btn'>
											<button
												type='submit'
												className='btn btn-primary display-7'
											>
												Отправить
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
				<section
					data-bs-version='5.1'
					className='contacts03 cid-ulgxlx5PmU'
					id='contacts-11-ulgxlx5PmU'
				>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col-lg-4'>
								<div className='col-12 col-md-12'>
									<h5 className='mbr-section-title mbr-fonts-style mt-0 mb-4 display-2'>
										<strong>Контакты</strong>
									</h5>
									<p className='mbr-section-subtitle mbr-fonts-style mt-0 mb-4 display-7'>
										Телефон: +7 123 456 7890
										<br />: info@trackker.ru
										<br />: Москва, ул. Примерная, 1
										<br />
										Часы работы: Пн-Пт: 9:00 - 18:00
									</p>
								</div>
							</div>
							<div className='col-lg-8 side-features'>
								<div className='google-map'>
									<iframe
										frameBorder={0}
										style={{ border: 0 }}
										src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6045.3003145248895!2d-73.9884657!3d40.7477229!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9ac1f1b85%3A0x7e33d1c0e7af3be4!2zMzUwIDV0aCBBdmUsIE5ldyBZb3JrLCBOWSAxMDExOCwg0KHQqNCQ!5e0!3m2!1sru!2sru!4v1689597362021!5m2!1sen!2sen'
										allowFullScreen=''
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					data-bs-version='5.1'
					className='footer4 cid-ulgxlx5AHK'
					// once='footers'
					id='footer-4-ulgxlx5AHK'
				>
					<div className='container'>
						<div className='media-container-row align-center mbr-white'>
							<div className='col-12'>
								<p className='mbr-text mb-0 mbr-fonts-style display-7'>
									© 2024 Trackker. Все права защищены.
								</p>
							</div>
						</div>
					</div>
				</section>

				<Script src='js/jquery.min.js'></Script>
				<Script src='js/bootstrap.bundle.min.js'></Script>
				<Script src='js/jarallax.js'></Script>
				<Script src='js/smooth-scroll.js'></Script>
				<Script src='js/index.js'></Script>
				<Script src='js/navbar-dropdown.js'></Script>
				<Script src='js/player.js'></Script>
				<Script src='js/mbr-switch-arrow.js'></Script>
				<Script src='js/scroll-gallery.js'></Script>
				<Script src='js/script.js'></Script>
				<Script src='js/formoid.min.js'></Script>
			</div>
		</>
	)
}
