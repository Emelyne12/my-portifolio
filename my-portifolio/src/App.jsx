import {
	AppBar,
	Avatar,
	Box,
	Button,
	Chip,
	Container,
	CssBaseline,
	Grid,
	Stack,
	Toolbar,
	Typography,
	createTheme,
	ThemeProvider,
} from '@mui/material'
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded'
import { Card, Col, Divider, Progress, Row, Space, Statistic, Tag, Timeline } from 'antd'
import { CodeOutlined, MobileOutlined, ProjectOutlined } from '@ant-design/icons'

const theme = createTheme({
	palette: {
		primary: { main: '#c2185b' },
		secondary: { main: '#8e24aa' },
		background: { default: '#fff7fb', paper: '#ffffff' },
	},
	shape: { borderRadius: 14 },
})

const projectItems = [
	{
		title: 'Personal Portfolio',
		icon: <ProjectOutlined style={{ fontSize: 20, color: '#c2185b' }} />,
		description: 'A modern and responsive portfolio that presents my experience and work clearly.',
		tag: 'React',
	},
	{
		title: 'Business Website',
		icon: <CodeOutlined style={{ fontSize: 20, color: '#8e24aa' }} />,
		description: 'A clean business website focused on trust, readability, and conversion.',
		tag: 'UI/UX',
	},
	{
		title: 'Mobile-First Design',
		icon: <MobileOutlined style={{ fontSize: 20, color: '#3949ab' }} />,
		description: 'Responsive interfaces optimized for phones, tablets, and desktop screens.',
		tag: 'Responsive',
	},
]

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
				<AppBar position="sticky" elevation={0} sx={{ bgcolor: 'primary.main' }}>
					<Toolbar sx={{ justifyContent: 'space-between' }}>
						<Typography variant="h6" fontWeight={700}>
							Emelyne Portfolio
						</Typography>
						<Button
							color="inherit"
							variant="outlined"
							startIcon={<DownloadRoundedIcon />}
							href="/cv.pdf"
							download
							sx={{ borderColor: 'rgba(255,255,255,0.6)' }}
						>
							Download CV
						</Button>
					</Toolbar>
				</AppBar>

				<Container maxWidth="lg" sx={{ py: { xs: 6, md: 9 } }}>
					<Box
						sx={{
							p: { xs: 3, md: 5 },
							borderRadius: 4,
							background: 'linear-gradient(135deg, #fce4ec 0%, #f3e5f5 100%)',
							mb: 5,
						}}
					>
						<Stack spacing={2} alignItems="center" textAlign="center">
							<Avatar sx={{ width: 70, height: 70, bgcolor: 'secondary.main', fontWeight: 700 }}>E</Avatar>
							<Typography variant="h3" fontWeight={700} sx={{ fontSize: { xs: 30, md: 42 } }}>
								NIYOMUBYEYI INGABIRE EMELYNE
							</Typography>
							<Typography variant="h6" color="text.secondary">
								Web Designer • Frontend Developer
							</Typography>
							<Space wrap>
								<Tag color="magenta">Material UI</Tag>
								<Tag color="purple">Ant Design</Tag>
								<Tag color="blue">React</Tag>
							</Space>
						</Stack>
					</Box>

					<Grid container spacing={3} sx={{ mb: 5 }}>
						<Grid size={{ xs: 12, md: 8 }}>
							<Card title="About Me" variant="outlined" style={{ borderRadius: 14 }}>
								<Typography color="text.secondary" sx={{ lineHeight: 1.9 }}>
									I am a creative and detail-oriented frontend developer who transforms ideas into clean,
									engaging websites. I focus on responsive layouts, accessible interfaces, and meaningful
									user experiences that work well on mobile and desktop.
								</Typography>
								<Divider style={{ margin: '20px 0' }} />
								<Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
									<Chip label="React" color="primary" />
									<Chip label="JavaScript" color="secondary" />
									<Chip label="Component Libraries" />
								</Stack>
							</Card>
						</Grid>
						<Grid size={{ xs: 12, md: 4 }}>
							<Card title="Quick Stats" variant="outlined" style={{ borderRadius: 14 }}>
								<Row gutter={[16, 16]}>
									<Col span={12}>
										<Statistic title="Projects" value={12} />
									</Col>
									<Col span={12}>
										<Statistic title="Clients" value={6} />
									</Col>
								</Row>
								<Divider style={{ margin: '20px 0' }} />
								<Typography variant="body2" sx={{ mb: 1.5 }}>
									Frontend Confidence
								</Typography>
								<Progress percent={90} strokeColor="#c2185b" />
							</Card>
						</Grid>
					</Grid>

					<Card title="Featured Projects" variant="outlined" style={{ borderRadius: 14, marginBottom: 24 }}>
						<Row gutter={[16, 16]}>
							{projectItems.map((project) => (
								<Col xs={24} md={8} key={project.title}>
									<Card style={{ borderRadius: 12 }}>
										<Space direction="vertical" size={8}>
											{project.icon}
											<Typography variant="h6" fontWeight={600}>
												{project.title}
											</Typography>
											<Typography color="text.secondary">{project.description}</Typography>
											<Tag color="geekblue">{project.tag}</Tag>
										</Space>
									</Card>
								</Col>
							))}
						</Row>
					</Card>

					<Card title="Journey" variant="outlined" style={{ borderRadius: 14, marginBottom: 24 }}>
						<Timeline
							items={[
								{ color: 'purple', children: 'Started frontend development with HTML, CSS, and JavaScript.' },
								{ color: 'magenta', children: 'Built responsive websites and improved design consistency.' },
								{ color: 'blue', children: 'Now building scalable interfaces with MUI and Ant Design.' },
							]}
						/>
					</Card>

					<Box sx={{ textAlign: 'center', py: 4 }}>
						<Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
							Let&apos;s Connect
						</Typography>
						<Button
							variant="contained"
							size="large"
							startIcon={<EmailRoundedIcon />}
							href="mailto:ingabiremelyne1234@gmail.com"
							sx={{ borderRadius: 8, px: 3 }}
						>
							ingabiremelyne1234@gmail.com
						</Button>
						<Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
							Built with <RocketLaunchRoundedIcon sx={{ fontSize: 16, verticalAlign: 'middle' }} /> React,
							Material UI, and Ant Design.
						</Typography>
					</Box>
				</Container>
			</Box>
		</ThemeProvider>
	)
}

export default App
