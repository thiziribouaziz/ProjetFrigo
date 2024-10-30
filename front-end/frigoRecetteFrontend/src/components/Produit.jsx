import React, { useEffect, useState } from "react";
import axios from "axios";

export const Produit = () => {
  const [mesproduits, setMesproduits] = useState([]); //définir un état de mes produits

  async function recupererProduit() {
    try {
      const response = await axios.get("http://localhost:3095/produits");
      console.log(response.data);
      setMesproduits(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    console.log("test");
    recupererProduit();
  }, []);

  return (
    <div>
      Produit
      <div>
        {mesproduits.map((monproduit) => (
          <p key={monproduit.id}>{monproduit.nom}</p>
        ))}
      </div>
    </div>
  );
};