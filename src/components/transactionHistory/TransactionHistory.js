import PropTypes from "prop-types";
import TransactionHistoryItem from "./transactionHistoryItem/TransactionHistoryItem";

const TransactionHistory = ({items}) => {
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map((item) => (
                    <TransactionHistoryItem key={item.id} {...item} />
                ))}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
};

export default TransactionHistory;
