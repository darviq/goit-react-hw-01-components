import PropTypes from "prop-types";
import StatisticsItem from "./statisticsItem/StatisticsItem";
import Section from "./StatisticsStyled";

const Statistics = ({title, stats}) => {
    return (
        <Section>
            {title && <h2 className="title">{title}</h2>}

            <ul className="statList">
                {stats.map((item) => (
                    <StatisticsItem key={item.id} {...item} />
                ))}
            </ul>
        </Section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object),
};

export default Statistics;
