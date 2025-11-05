import React from 'react';
import { ShoppingCart, Link2, Settings, Cloud, Lightbulb, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const services = [
	{ id: 'ecommerce', title: 'Soluciones de E-Commerce', desc: 'Plataformas e‑commerce seguras, optimizadas y adaptadas a tu negocio.', icon: ShoppingCart },
	{ id: 'integracion', title: 'Integración de Sistemas', desc: 'Conectamos tus aplicaciones para eliminar silos y automatizar flujos.', icon: Link2 },
	{ id: 'personalizacion', title: 'Personalización de Software', desc: 'Adaptamos soluciones para encajar con tus procesos y usuarios.', icon: Settings },
	{ id: 'saas', title: 'Desarrollo SAAS', desc: 'Arquitectura escalable y gestión en nube para productos SaaS.', icon: Cloud },
	{ id: 'consultoria', title: 'Consultoría Tecnológica', desc: 'Estrategia, roadmap y acompañamiento en transformación digital.', icon: Lightbulb },
	{ id: 'talento', title: 'Contrato de Talento IT', desc: 'Reclutamiento y colocación de perfiles IT especializados.', icon: Users },
];

const Services: React.FC = () => {
	const navigate = useNavigate();

	const handleClick = (id: string) => {
		navigate(`/services#${id}`);
	};

	return (
		<section id="services" className="py-20 sm:py-32">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-4xl sm:text-5xl font-bold mb-4">Nuestros Servicios</h2>
					<p className="text-muted-foreground max-w-3xl mx-auto">Ofrecemos soluciones a medida para transformar digitalmente tu empresa.</p>
				</div>

				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{services.map((s, idx) => {
						const Icon = s.icon;
						return (
							<button
								key={s.id}
								onClick={() => handleClick(s.id)}
								className="group relative overflow-hidden rounded-2xl bg-card p-6 text-left shadow-md transition hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary"
								style={{ transitionDelay: `${idx * 40}ms` }}
								aria-label={`Ver detalles de ${s.title}`}>
								<div className="absolute -inset-0.5 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 transition group-hover:opacity-100 group-focus:opacity-100 rounded-2xl blur-sm" />

								<div className="relative z-10 flex items-start gap-4">
									<div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 text-primary transition-transform group-hover:scale-105">
										<Icon className="h-6 w-6" />
									</div>

									<div className="flex-1">
										<h3 className="text-lg font-semibold mb-2">{s.title}</h3>
										<p className="text-sm text-muted-foreground">{s.desc}</p>
									</div>
								</div>

								{/* removed "Ver más" and arrow per request */}
							</button>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Services;
