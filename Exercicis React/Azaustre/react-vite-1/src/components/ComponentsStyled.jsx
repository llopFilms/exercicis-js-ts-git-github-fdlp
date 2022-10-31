import styled from "styled-components";

export const ContainerS = styled.div`
  background-color: rgba(200, 200, 200, 0.3);
  width: 40rem;
  margin: 10rem auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  border: 0.5rem solid #f56260;
  border-radius: 2rem;
  color: white;
`;

export const CapçaleraS = styled.div`
  align-self: center;
  width: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  .logo {
    width: 10rem;
    border: 0.3rem solid #F56260;
    border-radius: 50%;
    padding: 0.5rem;
  }

  .titol {
    text-align: center;
    line-height: 1.3;
  }
`;

export const LlistaS = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;

  .llista-interior {
    background-color: rgba(50, 50, 50, 0.7);
    border: 0.2rem solid #222;
    border-radius: 1rem;
    height: auto;
    margin: 1rem;
    padding: 2rem;
    font-size: 1.5rem;
    text-align: center;
  }

  .element-llista {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 1rem;
    margin: 1rem 0.5rem 0 2rem;
    list-style: none;
  }

  .lletra-petita {
    font-size: 1rem;
  }

  .lletra-negreta {
    font-weight: bold;
  }

  .casella {
    font-size: 0.7rem;
    font-weight: bold;
    padding: 0.5rem;
    margin-left: 0.5rem;
    border-radius: 0.5rem;
  }

  .verda {
    background-color: #393;
  }

  .vermella {
    background-color: #f56260;
  }

  .lletra-mini {
    font-size: 0.8rem;
  }

  .detalls-llançament {
    text-align: left;
    margin: 0.5rem 1rem 0.5rem 4rem;
    font-size: 0.8rem;
    line-height: 1.5;
    text-align: justify;
  }

  .icona {
    color: #ffed33;
  }
`;
