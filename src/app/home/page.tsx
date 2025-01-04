// @ts-nocheck

import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'

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
					content='.'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, minimum-scale=1'
				/>
				<link
					rel='shortcut icon'
					href='images/logo.png'
					type='image/x-icon'
				/>
				<title>Trackker - Трекер Задач</title>
				<link
					rel='stylesheet'
					href='css/mobirise2.css'
				/>
				<link
					rel='stylesheet'
					href='css/bootstrap.min.css'
				/>
				<link
					rel='stylesheet'
					href='css/bootstrap-grid.min.css'
				/>
				<link
					rel='stylesheet'
					href='css/bootstrap-reboot.min.css'
				/>
				<link
					rel='stylesheet'
					href='css/jarallax.css'
				/>
				<link
					rel='stylesheet'
					href='css/style.css'
				/>
				<link
					rel='stylesheet'
					href='css/styles.css'
				/>
				<link
					rel='stylesheet'
					href='css/style_1.css'
				/>
				<link
					rel='preload'
					href='https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;700&display=swap&display=swap'
					as='style'
					onload="this.onload=null;this.rel='stylesheet'"
				/>
				<noscript>
					<link
						rel='stylesheet'
						href='https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;700&display=swap&display=swap'
					/>
				</noscript>

				<link
					rel='stylesheet'
					href='css/mbr-additional.css'
					type='text/css'
				/>
				<style
					dangerouslySetInnerHTML={{
						__html:
							'\n.navbar-fixed-top {\n  top: auto;\n}\n\n.navbar.opened {\n    z-index: 1032;\n}\n@-webkit-keyframes animationBanner { 0% { opacity: 0; top: -8rem; } 75% { opacity: 0; top: -8rem; } 100% { opacity: 1; top: 0; } }\n@-moz-keyframes animationBanner { 0% { opacity: 0; top: -8rem; } 75% { opacity: 0; top: -8rem; } 100% { opacity: 1; top: 0; } }\n@-o-keyframes animationBanner { 0% { opacity: 0; top: -8rem; } 75% { opacity: 0; top: -8rem; } 100% { opacity: 1; top: 0; } }\n   @keyframes animationBanner { 0% { opacity: 0; top: -8rem; } 75% { opacity: 0; top: -8rem; } 100% { opacity: 1; top: 0; } }\n@-webkit-keyframes animationHeight { 0% { height: 0; } 75% { height: 0; } 100% { height: 8rem; } }\n@-moz-keyframes animationHeight { 0% { height: 0; } 75% { height: 0; } 100% { height: 8rem; } }\n@-o-keyframes animationHeight { 0% { height: 0; } 75% { height: 0; } 100% { height: 8rem; } }\n   @keyframes animationHeight { 0% { height: 0; } 75% { height: 0; } 100% { height: 8rem; } }\n   \n@-webkit-keyframes animationClosing { 0% { height: 8rem; opacity: 1; } 30% { height: 8rem; opacity: 0.5;} 100% { height: 0; opacity: 0;} }\n@-moz-keyframes animationClosing { 0% { height: 8rem; opacity: 1; } 30% { height: 8rem; opacity: 0.5;} 100% { height: 0; opacity: 0;} }\n@-o-keyframes animationClosing { 0% { height: 8rem; opacity: 1; } 30% { height: 8rem; opacity: 0.5;} 100% { height: 0; opacity: 0;} }\n@keyframes animationClosing { 0% { height: 8rem; opacity: 1; } 30% { height: 8rem; opacity: 0.5;} 100% { height: 0; opacity: 0;} }\n\n@media(max-width: 767px) {\n  #mobiriseBanner.container-banner {\n    height: 12rem;\n  }\n  #mobiriseBanner .banner {\n    min-height: 12rem;\n  }\n  @-webkit-keyframes animationBanner { 0% { opacity: 0; top: -12rem; } 75% { opacity: 0; top: -12rem; } 100% { opacity: 1; top: 0; } }\n  @-moz-keyframes animationBanner { 0% { opacity: 0; top: -12rem; } 75% { opacity: 0; top: -12rem; } 100% { opacity: 1; top: 0; } }\n  @-o-keyframes animationBanner { 0% { opacity: 0; top: -12rem; } 75% { opacity: 0; top: -12rem; } 100% { opacity: 1; top: 0; } }\n    @keyframes animationBanner { 0% { opacity: 0; top: -12rem; } 75% { opacity: 0; top: -12rem; } 100% { opacity: 1; top: 0; } }\n  @-webkit-keyframes animationHeight { 0% { height: 0; } 75% { height: 0; } 100% { height: 12rem; } }\n  @-moz-keyframes animationHeight { 0% { height: 0; } 75% { height: 0; } 100% { height: 12rem; } }\n  @-o-keyframes animationHeight { 0% { height: 0; } 75% { height: 0; } 100% { height: 12rem; } }\n    @keyframes animationHeight { 0% { height: 0; } 75% { height: 0; } 100% { height: 12rem; } }\n\n  @-webkit-keyframes animationClosing { 0% { height: 12rem; opacity: 1; } 30% { height: 12rem; opacity: 0.5;} 100% { height: 0; opacity: 0;} }\n  @-moz-keyframes animationClosing { 0% { height: 12rem; opacity: 1; } 30% { height: 12rem; opacity: 0.5;} 100% { height: 0; opacity: 0;} }\n  @-o-keyframes animationClosing { 0% { height: 12rem; opacity: 1; } 30% { height: 12rem; opacity: 0.5;} 100% { height: 0; opacity: 0;} }\n  @keyframes animationClosing { 0% { height: 12rem; opacity: 1; } 30% { height: 12rem; opacity: 0.5;} 100% { height: 0; opacity: 0;} }\n}\n'
					}}
				/>
			</Head>

			<div>
				<>
					<section
						data-bs-version='5.1'
						className='menu menu2 cid-um6VgOIFSX'
						// once='menu'
						id='menu-5-um6VgOIFSX'
					>
						<nav className='navbar navbar-dropdown navbar-fixed-top navbar-expand-lg'>
							<div className='container'>
								<div className='navbar-brand'>
									<span className='navbar-logo'></span>
									<span className='navbar-caption-wrap'>
										<a
											className='navbar-caption text-black display-4'
											href='https://trackker.ru'
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
									<ul
										className='navbar-nav nav-dropdown'
										data-app-modern-menu='true'
									>
										<li className='nav-item'>
											<a
												className='nav-link link text-black display-4'
												href='https://trackker.ru/home'
											>
												Главная
											</a>
										</li>
										<li className='nav-item'>
											<a
												className='nav-link link text-black display-4'
												href='https://trackker.ru/blog'
												aria-expanded='false'
											>
												Блог
											</a>
										</li>
										<li className='nav-item'>
											<a
												className='nav-link link text-black display-4'
												href='https://trackker.ru/about'
											>
												О нас
											</a>
										</li>
									</ul>
									<div className='navbar-buttons mbr-section-btn'>
										<a
											className='btn btn-primary display-4'
											href='https://trackker.ru/auth'
										>
											Перейти к приложению
										</a>
									</div>
								</div>
							</div>
						</nav>
					</section>
					<section
						data-bs-version='5.1'
						className='header16 cid-um6VgOJKAU mbr-fullscreen mbr-parallax-background'
						id='hero-17-um6VgOJKAU'
					>
						<div className='container-fluid'>
							<div className='row'>
								<div className='content-wrap col-12 col-md-12'>
									<h1 className='mbr-section-title mbr-fonts-style mbr-white mb-4 display-1'>
										<strong className='first-des'>
											Управляйте задачами с легкостью
										</strong>
									</h1>
									<div className='mbr-section-btn'>
										<a
											className='btn btn-white-outline display-7'
											href='https://trackker.ru/auth'
										>
											Начать работу
										</a>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section
						data-bs-version='5.1'
						className='list1 cid-um6VgOLsux'
						id='faq-1-um6VgOLsux'
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
											id='bootstrap-accordion_10'
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
														href='#collapse1_10'
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
													id='collapse1_10'
													className='panel-collapse noScroll collapse'
													role='tabpanel'
													aria-labelledby='headingOne'
													data-parent='#accordion'
													data-bs-parent='#bootstrap-accordion_10'
												>
													<div className='panel-body'>
														<p className='mbr-fonts-style panel-text display-7'>
															Trackker — это ваш личный помощник в мире задач!
															Он создан для студентов и небольших IT команд,
															чтобы упростить таск-менеджмент.
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
														href='#collapse4_10'
														aria-expanded='false'
														aria-controls='collapse4'
													>
														<h6 className='panel-title-edit mbr-semibold mbr-fonts-style mb-0 display-5'>
															Как работает интеграция с Telegram?
														</h6>
														<span className='sign mbr-iconfont mobi-mbri-arrow-down' />
													</a>
												</div>
												<div
													id='collapse4_10'
													className='panel-collapse noScroll collapse'
													role='tabpanel'
													aria-labelledby='headingOne'
													data-parent='#accordion'
													data-bs-parent='#bootstrap-accordion_10'
												>
													<div className='panel-body'>
														<p className='mbr-fonts-style panel-text display-7'>
															Получайте уведомления и управляйте задачами прямо
															в Telegram! Удобно, не правда ли?
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
														href='#collapse5_10'
														aria-expanded='false'
														aria-controls='collapse5'
													>
														<h6 className='panel-title-edit mbr-semibold mbr-fonts-style mb-0 display-5'>
															Что может AI бот?
														</h6>
														<span className='sign mbr-iconfont mobi-mbri-arrow-down' />
													</a>
												</div>
												<div
													id='collapse5_10'
													className='panel-collapse noScroll collapse'
													role='tabpanel'
													aria-labelledby='headingOne'
													data-parent='#accordion'
													data-bs-parent='#bootstrap-accordion_10'
												>
													<div className='panel-body'>
														<p className='mbr-fonts-style panel-text display-7'>
															Наш AI бот поставит задачу прямо из голосового
															сообщения!
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
						className='footer3 cid-um6VgONbg3'
						// once='footers'
						id='footer-3-um6VgONbg3'
					>
						<div className='container'>
							<div className='row'>
								<div className='row-links'>
									<ul className='header-menu'>
										<li className='header-menu-item mbr-fonts-style display-5'>
											<a
												href='#'
												className='text-white'
											>
												О нас
											</a>
										</li>
										<li className='header-menu-item mbr-fonts-style display-5'>
											<a
												href='#'
												className='text-white'
											>
												Услуги
											</a>
										</li>
										<li className='header-menu-item mbr-fonts-style display-5'>
											<a
												href='#'
												className='text-white'
											>
												Контакты
											</a>
										</li>
										<li className='header-menu-item mbr-fonts-style display-5'>
											<a
												href='#'
												className='text-white'
											>
												Поддержка
											</a>
										</li>
									</ul>
								</div>
								<div className='col-12 mt-5'>
									<p className='mbr-fonts-style copyright display-7'>
										© 2024 Trackker. Все права защищены. Проект поддержан Фондом содействия инновациям в рамках программы "Студенческий стартап" федерального проекта "Платформа университетского технологического предпринимательства"
									</p>
								</div>
							</div>
						</div>
						<div
							style={{
								display: 'flex',
								justifyContent: 'right',
								marginRight: '10px'
							}}
						>
							<Image
								src='/assets/fasie.png'
								alt='logo'
								style={{ width: '200px' }}
								width={200}
								height={100}
							/>
						</div>
					</section>
				</>

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
