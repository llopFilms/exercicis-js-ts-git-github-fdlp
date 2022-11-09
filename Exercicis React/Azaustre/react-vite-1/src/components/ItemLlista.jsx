import React from "react";
import { Link } from "react-router-dom";
import {
  IoRocketOutline,
  IoArrowForwardCircleOutline,
  IoCalendarOutline,
} from "react-icons/io5";
import dayjs from "dayjs";
import "dayjs/locale/ca";

export const ItemLlista = (coet) => (
  <ul className="llista-interior">
    <div className="li0">
      <i className="icona">
        <IoRocketOutline />
      </i>
      <span className="lletra-petita">&nbsp;Missió:</span>
      <span className="lletra-negreta">{coet.mission_name}</span>
      <span className="lletra-petita">({coet.launch_year})</span>
    </div>
    <li className="element-llista li1">
      <i className="icona">
        <IoArrowForwardCircleOutline />
      </i>
      Èxit del llançament:
      {coet.launch_success ? (
        <span className="casella verda">Afirmatiu</span>
      ) : (
        <span className="casella vermella">Negatiu</span>
      )}
    </li>
    <div className="li2">
      <li className="element-llista">
        <i className="icona">
          <IoArrowForwardCircleOutline />
        </i>
        Detalls del llançament:&nbsp;&nbsp;
        <i className="icona">
          <IoCalendarOutline />
        </i>
        <span className="lletra-mini">
          {dayjs(coet.launch_date_local).locale("ca-es").format("D MMMM, YYYY")}
        </span>
      </li>
      <p className="detalls-llançament">
        {coet.details ? coet.details : "Sense detalls"}
      </p>
      <Link to={`/coet/${coet.flight_number}`}>
        <button className="casella boto-detalls">Més detalls . . .</button>
      </Link>
    </div>
  </ul>
);
