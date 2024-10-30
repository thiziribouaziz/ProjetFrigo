import React, { useEffect, useState } from "react";
import axios from "axios";

export const Recette = () => {
  const [mesrecettes, setMesrecettes] = useState([]); //définir un état de mes recettes

  async function recupererRecette() {
    try {
      const response = await axios.get("http://localhost:3095/produits");
      console.log(response.data);
      setMesrecettes(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    console.log("test");
    recupererRecette();
  }, []);

  return (
    <div>
      Recette
      <div>
        {mesrecettes.map((marecette) => (
          <p key={marecette.id}>{marecette.nom}</p>
        ))}
      </div>
    </div>
  );
};