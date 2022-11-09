import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(200, 200, 200, 0.3);
  width: 80rem;
  margin: 10rem auto;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  border: 0.5rem solid #f56260;
  border-radius: 2rem;
  color: white;
`;

export const Capçalera = styled.div`
  margin: 2rem auto;
  align-self: center;
  width: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  .logo {
    width: 20rem;
    border: 0.3rem solid #F56260;
    border-radius: 50%;
    padding: 0.5rem;
    opacity: .8;
  }

  .titol {
    text-transform: uppercase;
    font-size: 4rem;
    text-align: center;
    line-height: 1.3;
    letter-spacing: .4rem;
    word-spacing: 2rem;
  }
`;

export const Llista = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;

  .llista-interior {
    background-color: rgba(50, 50, 50, 0.8);
    border: 0.4rem solid #333;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem 3rem;
    padding: 2rem 0;
    font-size: 2.5rem;
    text-align: center;
  }

  .li0 {
    margin-bottom: 2rem;
  }

  .element-llista {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 0.5rem;
    color: #c0c0c0;
    font-size: 2rem;
    margin: 1rem 1rem 0 2rem;
    list-style: none;
  }

  .element-llista a {
    color: #fff;
    font-size: 1.8rem;
    text-decoration: none;
  }

  .element-llista-dins {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 0.5rem;
    color: #c0c0c0;
    font-size: 2rem;
    margin: 1rem 1rem 0 2rem;
    list-style: none;
  }

  .lletra-petita {
    color: #c0c0c0;
    font-size: 1.8rem;
  }

  .lletra-negreta {
    margin: 0 1rem;
    font-weight: bold;
  }

  .casella {
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 0.8rem;
    margin-left: 1rem;
    border-radius: 0.5rem;
  }

  .verda {
    background-color: #393;
  }

  .vermella {
    background-color: #f56260;
  }

  .lletra-mini {
    color: #fff;
    margin-left: 0.5rem;
    font-size: 1.3rem;
    padding-top: 0.2rem;
  }

  .detalls-llançament {
    margin: 1.5rem 2.5rem 2rem 6rem;
    font-size: 1.5rem;
    line-height: 1.5;
    text-align: justify;
  }

  .detalls-llançament-llista {
    color: #fff;
    font-size: 1.9rem;
  }

  .icona {
    color: #ffed33;
  }

  .boto-detalls {
    background: #815bff;
    border: 0.3rem solid #333;
    border-radius: 1rem;
    padding: 1rem 2rem;
    color: #fff;
    cursor: pointer;
  }
`;

export const LlistaDetalls = styled(Llista)`
  color: #fff;

`; 
