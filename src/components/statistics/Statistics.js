import PropTypes from "prop-types";
import StatisticsItem from "./statisticsItem/StatisticsItem";
import styles from "./Statistics.module.css";

const Statistics = ({title, stats}) => {
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}

            <ul className={styles.statList}>
                {stats.map((item) => (
                    <StatisticsItem key={item.id} {...item} />
                ))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object),
};

export default Statistics;
