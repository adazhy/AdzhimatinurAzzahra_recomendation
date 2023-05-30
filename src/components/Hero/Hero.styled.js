import styled from "styled-components";

const StyledHero = styled.div`
    margin: 3rem auto;
    padding: 5rem;

    .hero {
        display: flex;
        flex-direction: column;
        text-align: center;
    }  

    .hero__left {
        margin-bottom: 1rem;
    }

    h2 {
        color: #666699;
        margin-bottom: 1rem;
        font-size: 2.44rem;
    }

    h3 {
        color: #b5179e;
        margin-bottom: 1rem;
        font-size: 1.59rem;
    }

    p {
        color: #64748b;
        margin-bottom: 1rem;  
    }

    img {
        max-width: 100%;
        height: auto;
        border-radius: 25px;
        margin-left: 5rem;
    }

    @media (min-width: 768px) {
    }

    /* Large Screen */
    @media (min-width: 992px) {
        max-width: 1200px;

    .hero {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
    }

    .hero__left {
        flex-basis: 40%;
    }

    .hero__right {
        flex-basis: 60%;
    }
    }
`;

export default StyledHero;