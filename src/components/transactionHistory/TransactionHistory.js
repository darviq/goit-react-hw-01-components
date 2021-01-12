import PropTypes from "prop-types";
import TransactionHistoryItem from "./transactionHistoryItem/TransactionHistoryItem";
import styled from "styled-components";

const Table = styled.table`
    margin: 50px auto;
    width: 600px;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);

    tr {
        height: 50px;
    }

    td {
        box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
    }

    tbody tr:nth-child(odd) {
        background-color: honeydew;
    }
`;

const TransactionHistory = ({items}) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <TransactionHistoryItem key={item.id} {...item} />
                ))}
            </tbody>
        </Table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
};

export default TransactionHistory;
