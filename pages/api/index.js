

import executeQuery from "../../lib/db";



export default async (req, res)=> {
    try {
        console.log('req.body: >>>> ',req.body);

        const result = await executeQuery({
            query: '',
            values: [req.body.content]
        });
    }
    catch (edrror) {
        console.log(error);
    }
}









