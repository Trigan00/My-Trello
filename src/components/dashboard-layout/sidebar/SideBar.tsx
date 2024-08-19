import {
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	Typography
} from '@mui/material'
import { MyDrawer } from './MyDrawer'
import { MainListItems } from './MainListItems'
import { NewWorkspace } from './NewWorkspace'
import NextLink from 'next/link'
import Image from 'next/image'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import { COLORS } from '@/constants/color.constants'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { DIMENSIONS } from '@/constants/dimension.constants'
import { useMedia } from '@/hooks/useMedia'

interface ISideBar {
	open: boolean
	toggleDrawer: () => void
}

export default function SideBar({ open, toggleDrawer }: ISideBar) {
	const matches = useMedia(DIMENSIONS.MD)

	const onClickHandler = () => {
		matches && toggleDrawer()
	}

	return (
		<MyDrawer
			open={open}
			onClose={onClickHandler}
		>
			<NewWorkspace />
			<List
				sx={{ p: ' 0 15px' }}
				component='nav'
			>
				<ListItemButton
					sx={{ mb: 1, p: '10px 0' }}
					onClick={onClickHandler}
					component={NextLink}
					href={DASHBOARD_PAGES.HOME}
				>
					<ListItemIcon sx={{ minWidth: 'auto' }}>
						<Image
							src='/svg/inbox.svg'
							alt={'inbox'}
							width={20}
							height={20}
						/>
					</ListItemIcon>
					<Typography
						fontSize={14}
						fontWeight={500}
						pl={1}
						color={COLORS.textBlack}
					>
						{'Входящие'}
					</Typography>
				</ListItemButton>
				<Divider />
				<MainListItems onClickHandler={onClickHandler} />
			</List>
		</MyDrawer>
	)
}
