import { useState } from 'react'
import {
	ArrowRight,
	BriefcaseBusiness,
	Download,
	Mail,
	Menu,
	Smartphone,
	Sparkles,
	UserRound,
	X,
} from 'lucide-react'

const navLinks = [
	{ label: 'Home', href: '#home' },
	{ label: 'About', href: '#about' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Contact', href: '#contact' },
]

const projects = [
	{
		title: 'Personal Portfolio',
		description: 'A modern, responsive portfolio showcasing my skills, projects, and journey.',
		icon: Sparkles,
	},
	{
		title: 'Business Website',
		description: 'A clean, professional website built for a local business to reach more clients.',
		icon: BriefcaseBusiness,
	},
	{
		title: 'Mobile-Friendly Design',
		description: 'Beautiful and accessible designs that look great on all devices.',
		icon: Smartphone,
	},
]

function App() {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<div className="min-h-screen bg-pink-50 text-slate-800">
			<header className="sticky top-0 z-50 border-b border-pink-200 bg-pink-600/95 backdrop-blur">
				<nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
					<h2 className="text-2xl font-bold text-white">Emelyne</h2>

					<button
						type="button"
						onClick={() => setMenuOpen((prev) => !prev)}
						className="rounded-md p-2 text-white md:hidden"
						aria-label="Toggle menu"
					>
						{menuOpen ? <X size={22} /> : <Menu size={22} />}
					</button>

					<ul className="hidden items-center gap-6 md:flex">
						{navLinks.map((link) => (
							<li key={link.label}>
								<a className="text-white transition hover:text-pink-100" href={link.href}>
									{link.label}
								</a>
							</li>
						))}
						<li>
							<a
								href="/cv.pdf"
								download
								className="inline-flex items-center gap-2 rounded-full bg-pink-400 px-4 py-2 text-sm font-semibold text-white transition hover:bg-pink-300"
							>
								<Download size={16} />
								Download CV
							</a>
						</li>
					</ul>
				</nav>

				{menuOpen && (
					<div className="border-t border-pink-500 bg-pink-600 px-5 pb-4 md:hidden">
						<ul className="space-y-3 pt-4">
							{navLinks.map((link) => (
								<li key={link.label}>
									<a
										className="block text-white"
										href={link.href}
										onClick={() => setMenuOpen(false)}
									>
										{link.label}
									</a>
								</li>
							))}
							<li>
								<a
									href="/cv.pdf"
									download
									className="inline-flex items-center gap-2 rounded-full bg-pink-400 px-4 py-2 text-sm font-semibold text-white"
								>
									<Download size={16} />
									Download CV
								</a>
							</li>
						</ul>
					</div>
				)}
			</header>

			<main>
				<section
					id="home"
					className="flex min-h-[80vh] items-center justify-center bg-gradient-to-r from-pink-200 to-pink-100 px-5 py-16 text-center"
				>
					<div className="max-w-3xl space-y-5">
						<h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">
							Hello, I&apos;m <span className="text-pink-600">NIYOMUBYEYI INGABIRE EMELYNE</span>
						</h1>
						<p className="text-lg text-slate-700 sm:text-xl">
							A Passionate <strong>Web Designer</strong> &amp; <strong>Frontend Developer</strong>
						</p>
						<a
							href="#about"
							className="inline-flex items-center gap-2 rounded-full bg-pink-500 px-6 py-3 font-semibold text-white transition hover:bg-pink-600"
						>
							Discover More
							<ArrowRight size={18} />
						</a>
					</div>
				</section>

				<section id="about" className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8">
					<h2 className="mb-5 text-3xl font-bold text-pink-600">About Me</h2>
					<p className="mx-auto max-w-3xl leading-8 text-slate-700">
						I am a creative and detail-oriented Web Designer and Frontend Developer who loves turning
						ideas into stunning, functional websites. My goal is to design digital experiences that are
						not only visually beautiful but also easy to use, responsive, and meaningful.
						<br />
						<br />
						With a heart for innovation and a passion for technology, I strive to build solutions that
						empower people and create impact.
					</p>
				</section>

				<section id="projects" className="bg-pink-100 px-5 py-16 sm:px-8">
					<div className="mx-auto max-w-6xl">
						<h2 className="mb-8 text-center text-3xl font-bold text-pink-600">My Projects</h2>
						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{projects.map((project) => {
								const Icon = project.icon

								return (
									<article
										key={project.title}
										className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1"
									>
										<div className="mb-4 inline-flex rounded-full bg-pink-100 p-3 text-pink-600">
											<Icon size={22} />
										</div>
										<h3 className="mb-2 text-xl font-semibold text-slate-900">{project.title}</h3>
										<p className="text-slate-700">{project.description}</p>
									</article>
								)
							})}
						</div>
					</div>
				</section>

				<section id="contact" className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8">
					<h2 className="mb-4 text-3xl font-bold text-pink-600">Let&apos;s Connect</h2>
					<p className="mx-auto mb-6 max-w-2xl text-slate-700">
						I&apos;d love to hear from you! Whether you have a project in mind, want to collaborate, or
						just want to say hi, feel free to reach out.
					</p>
					<a
						href="mailto:ingabiremelyne1234@gmail.com"
						className="inline-flex items-center gap-2 rounded-full bg-pink-500 px-6 py-3 font-semibold text-white transition hover:bg-pink-600"
					>
						<Mail size={18} />
						ingabiremelyne1234@gmail.com
					</a>
				</section>
			</main>

			<footer className="bg-pink-600 px-5 py-6 text-center text-white">
				<p className="inline-flex items-center gap-2">
					Made by NIYOMUBYEYI INGABIRE EMELYNE
					<UserRound size={16} />
					© {new Date().getFullYear()}
				</p>
			</footer>
		</div>
	)
}

export default App
