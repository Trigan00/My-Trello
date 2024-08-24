export default function bgGradient(props: {
	direction?: string
	startColor?: string
	endColor?: string
	imgUrl?: string
	color?: string
}) {
	const direction = props?.direction || 'to bottom'
	const startColor = props?.startColor
	const endColor = props?.endColor
	const imgUrl = props?.imgUrl
	const color = props?.color

	if (imgUrl) {
		return {
			background: `linear-gradient(${direction}, ${startColor || color}, ${
				endColor || color
			}), url(${imgUrl})`,
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center center'
		}
	}

	return {
		background: `linear-gradient(${direction}, ${startColor}, ${endColor})`
	}
}
