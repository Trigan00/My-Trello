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
	resetFunc?: () => void
}

export default function MyModal({
	isModal,
	setIsModal,
	children,
	resetFunc
}: MyModalProps) {
	const onCloseHandler = () => {
		resetFunc && resetFunc()
		setIsModal(false)
	}

	return (
		<Modal
			open={isModal}
			onClose={onCloseHandler}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box sx={style}>{children}</Box>
		</Modal>
	)
}
