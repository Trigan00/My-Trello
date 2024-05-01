import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

const style = {
	boxSizing: 'border-box',
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	maxWidth: 450,
	width: '100%',
	bgcolor: 'background.paper',
	borderRadius: '20px',
	boxShadow: 24,
	p: '30px'
}

interface MyModalProps {
	isModal: boolean
	setIsModal: React.Dispatch<React.SetStateAction<boolean>>
	children: React.ReactNode
	onClose?: () => void
}

export default function MyModal({
	isModal,
	setIsModal,
	children,
	onClose
}: MyModalProps) {
	const onCloseHandler = () => {
		onClose && onClose()
		setIsModal(false)
	}

	return (
		<Modal
			open={isModal}
			onClose={onCloseHandler}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
			componentsProps={{
				backdrop: {
					sx: {
						backgroundColor: 'rgba(0, 0, 0, 0.3)',
						backdropFilter: 'blur(5px)'
					}
				}
			}}
		>
			<Box sx={style}>{children}</Box>
		</Modal>
	)
}
