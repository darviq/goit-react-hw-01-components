import styled from "styled-components";

const Li = styled.li`
    background-color: hotpink;
    flex-basis: 0;
    flex-grow: 1;
    padding: 20px 0;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
    background-color: honeydew;

    .label {
        color: rgba(34, 60, 80, 0.4);
    }

    .percentage {
        padding-top: 10px;
        display: block;
        font-weight: 700;
        font-size: 24px;
    }
`;

export default Li;
