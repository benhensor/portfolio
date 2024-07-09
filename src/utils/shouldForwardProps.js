import { isValidMotionProp } from 'framer-motion'

const shouldForwardProp = (prop) => {
	return !isValidMotionProp(prop) || prop === 'children' || prop === 'as'
}

export default shouldForwardProp
