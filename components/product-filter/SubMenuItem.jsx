import { useEffect, useState } from 'react'
const SubMenuItem = ({ filterStyles, text, query, setQuery }) => {
	return (
		<span className={filterStyles.subMenuItem}>
			<span
				className={filterStyles.subMenuItemText}
				onClick={() => setQuery(text)}>
				{text}
			</span>
		</span>
	)
}

export default SubMenuItem
