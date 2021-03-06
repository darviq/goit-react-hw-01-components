import styled from "styled-components";

const Li = styled.li`
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
    display: flex;
    height: 100px;
    align-items: center;

    .status {
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        padding-top: auto;
        margin-left: 20px;
        background-color: ${props => (props.isOnline ? "green" : "red")};
    }

    .avatar {
        height: 80px;
        width: 80px;
        border-radius: 15px;
        border: 1px solid rgba(34, 60, 80, 0.4);
        margin-left: 20px;
    }

    .name {
        margin-left: 20px;
        font-size: 24px;
        font-weight: 700;
    }
`;

export default Li;
