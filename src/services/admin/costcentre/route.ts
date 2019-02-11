
import { Request, Response } from "express";

export default [
  {
    path: "/api/admin/costcentre",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send("This is Cost Centre");
    }
  }
];