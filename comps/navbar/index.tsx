import Link from 'next/link';

interface NavbarProps {
	links?: { href: string; label: string }[];
}

const NavBar: React.FC<NavbarProps> = ({
	links = [
		{ href: '/about', label: 'About' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/contact', label: 'Contact' },
	],
}) => {
	return (
		<nav className='fixed top-0 z-50 w-full bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm'>
			<div className='container px-4 mx-auto flex justify-between'>
				<Link href='/'>
					<span className='text-2xl font-bold text-gray-800 hover:text-gray-600'>
						My Website
					</span>
				</Link>

				<ul className='flex space-x-4'>
					{links.map((link) => (
						<li key={link.href}>
							<Link href={link.href}>
								<span className='text-gray-800 hover:text-gray-600'>
									{link.label}
								</span>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
