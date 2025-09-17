import styles from './Skeleton.module.css'

function Skeleton() {
	return (
		<article className={styles.skeletonContainer}>
			<div className={styles.square}></div>
			<div className={styles.line}></div>
			<div className={styles.line}></div>
			<div className={styles.line}></div>
			<div className={styles.line}></div>

			<div>
				{[...Array(5)].map((_, idx) => <span key={idx} className={styles.starsSquare}></span>)}
			</div>

			<div className={styles.retangle}></div>
		</article>
	)
}

export default Skeleton