declare module 'r3d5-components' {
	export interface TextProps {
		size: string;
		color: string;
		type: string;
		children: React.ReactNode;
	}

	export const Text: React.FC<TextProps>;
}
