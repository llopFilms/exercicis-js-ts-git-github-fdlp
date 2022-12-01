import { Container } from "./PanellStyled";

const Panell = ({ handleChange, handleClick, pagines, idiomes }) => (
  <Container>
    <div>
      <label htmlFor="pagines">Número de pàgines</label>
      <div>
        <button id="paginesInc" onClick={handleClick}>
          +
        </button>
        <input
          id="pagines"
          type="text"
          min="0"
          value={pagines}
          onChange={handleChange}
        />
        <button id="paginesDec" onClick={handleClick}>
          -
        </button>
      </div>
    </div>
    <div>
      <label htmlFor="idiomes">Número d'idiomes</label>
      <div>
        <button id="idiomesInc" onClick={handleClick}>
          +
        </button>
        <input
          id="idiomes"
          type="text"
          min="0"
          value={idiomes}
          onChange={handleChange}
        />
        <button id="idiomesDec" onClick={handleClick}>
          -
        </button>
      </div>
    </div>
  </Container>
);

export default Panell;
