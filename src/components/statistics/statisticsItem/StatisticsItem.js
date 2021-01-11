import PropTypes from "prop-types";

const StatisticsItem = ({label, percentage}) => {
    return (
        <li className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
        </li>
    );
};

StatisticsItem.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number,
};

export default StatisticsItem;
