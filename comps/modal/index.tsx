import React from 'react';
// import Classes from './index.module.css';

interface ModalProps {
	children: React.ReactNode;
	show: boolean;
	onClose: () => void;
}

const Modal = ({ children, show, onClose }: ModalProps) => {
	return (
		<div
			className='z-50 h-full w-full absolute bg-opacity-80 backdrop-filter backdrop-blur-[2px]'
			hidden={!show}
		>
			<div className='flex items-center justify-center min-h-screen relative'>
				<div className='relative z-50 w-full max-w-lg mx-auto bg-white text-black rounded-lg shadow-lg md:max-w-2xl'>
					{children}
					<button onClick={onClose}>close</button>
				</div>
			</div>
		</div>
	);
};

interface ModalHeaderProps {
	children: React.ReactNode;
}

const ModalHeader = ({ children }: ModalHeaderProps) => {
	return <div className='modal-header'>{children}</div>;
};

interface ModalBodyProps {
	children: React.ReactNode;
}

const ModalBody = ({ children }: ModalBodyProps) => {
	return <div className='modal-body'>{children}</div>;
};

interface ModalFooterProps {
	children: React.ReactNode;
}

const ModalFooter = ({ children }: ModalFooterProps) => {
	return <div className='modal-footer'>{children}</div>;
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
