import React from "react";
import { Recette } from "./Recette";
import { Produit } from "./Produit";
import { RecetteAvailable } from "./RecetteAvailable";

export const MonFrigo = () => {
  return (
    <div>
      MonFrigo
      <Recette />
      <Produit />
      <RecetteAvailable />
    </div>
  );
};