// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import membars from "../../../data/membars";


export default function handler(req, res) {

    res.status(200).json(membars);
}
