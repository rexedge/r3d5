import * as React from 'react';

export type Props = React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
> & {
	color?: string;
	fontType?: string;
	size?: string;
};

export const RxBtn = ({ children, color, fontType, size, ...props }: Props) => {
	return (
		<button
			className={
				'bg-blue-500 text-white hover:bg-opacity-80 px-3 py-1'
			}
			{...props}
		>
			{children}
		</button>
	);
};
