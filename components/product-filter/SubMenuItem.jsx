const SubMenuItem = ({ filterStyles, text }) => {
	return (
		<span className={filterStyles.subMenuItem}>
			<span className={filterStyles.subMenuItemText}>{text}</span>
		</span>
	)
}

export default SubMenuItem
