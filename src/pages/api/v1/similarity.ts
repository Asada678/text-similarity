import { withMethods } from "@/lib/api-middleware/with-methods";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {};

export default withMethods(["POST"], handler);
