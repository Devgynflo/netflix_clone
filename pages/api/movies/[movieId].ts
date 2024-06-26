import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";
import { serverAuth } from "@/lib/serverAuth";

export default async  function handler(req: NextApiRequest, res: NextApiResponse) {
  

  try {
    if (req.method !== "GET") {
      return res.status(405).end();
    }

    await serverAuth(req, res);
    const { movieId } = req.query;
    if (typeof movieId !== "string" || !movieId) {
      throw new Error("Invalid ID");
    }

    const movie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!movie) {
      throw new Error("Invalid ID");
    }

    return res.status(200).json(movie);
  } catch (error) {
    console.log("🚀 ~ file: [movieId].ts:13 ~ handler ~ error:", error);
    return res.status(405).end();
  }
}
