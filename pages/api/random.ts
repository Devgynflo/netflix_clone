import { NextApiRequest, NextApiResponse } from "next";

import prismaDb from "@/lib/prismadb";
import { serverAuth } from "@/lib/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    await serverAuth(req,res);

    const movieCount = await prismaDb.movie.count();
    const randomIndex = Math.floor(Math.random() * movieCount);

    const randomMovies = await prismaDb.movie.findMany({
      take: 1, // Spécifie combien d'objets doivent être renvoyés dans la liste (depuis le début)
      skip: randomIndex, //Spécifie combien d'objets de la liste doivent être ignorés.
    });

    return res.status(200).json(randomMovies[0]);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
