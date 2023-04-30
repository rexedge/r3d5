import React from 'react';

export interface TextProps {
	size: string;
	color: string;
	type: string;
	children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({ size, color, type, children }) => {
	const className = `text-${size} text-${color} text-${type}`;

	return <p className={className}>{children}</p>;
};
