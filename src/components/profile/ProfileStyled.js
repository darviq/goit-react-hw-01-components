import styled from "styled-components";

const Div = styled.div`
    margin: 50px auto 0;
    text-align: center;
    width: 300px;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
    border-radius: 4px;

    .description {
        padding: 30px 0;
    }

    .avatar {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin: 0 auto;
    }

    .name {
        font-size: 24px;
        font-weight: 700;
        padding-top: 15px;
    }

    .tag,
    .location {
        color: rgba(34, 60, 80, 0.4);
        padding-top: 15px;
    }

    .stats {
        display: flex;
        background-color: honeydew;
    }

    .stats li {
        padding: 30px 0 30px;
        flex-basis: 0;
        flex-grow: 1;
        box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
    }

    .label {
        color: rgba(34, 60, 80, 0.4);
    }

    .quantity {
        display: block;
        font-weight: 700;
        font-size: 20px;
    }
`;

export default Div;
