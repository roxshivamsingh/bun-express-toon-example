import * as express from "express";
import * as toon from "@toon-format/toon";

import { EXAMPLE_MOCK } from "../mocks";

export class DeveloperController {
  public static async all(req: express.Request, res: express.Response) {
    res.send(toon.encode(EXAMPLE_MOCK.developers));
  }
  public static async json(req: express.Request, res: express.Response) {
    res.send(EXAMPLE_MOCK.developers);
  }
}
