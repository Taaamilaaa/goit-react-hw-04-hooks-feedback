import PropTypes from 'prop-types'; // 
import styles from "./section.module.css"

export function Section({ title, children }) {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>{title}</h2>
            {children}
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element,
}