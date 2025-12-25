import { Request, Response } from "express";
import toon from "@toon-format/toon";

import { EXAMPLE_MOCK } from "../mocks";

export class DeveloperController {
  public static async all(req: Request, res: Response) {
    res.send(toon.encode(EXAMPLE_MOCK.developers));
  }
  public static async json(req: Request, res: Response) {
    res.send(EXAMPLE_MOCK.developers);
  }
}
