import PropTypes from "prop-types";
import Li from "./StatisticsItemStyled";

const StatisticsItem = ({label, percentage}) => {
    return (
        <Li>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
        </Li>
    );
};

StatisticsItem.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number,
};

export default StatisticsItem;
