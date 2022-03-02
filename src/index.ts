import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json())

app.post('/', (req: Request, res: Response) => {
    let array = ["corda", "borda", "onda", "merda"]
    let reg = new RegExp(req.body.reg)
    let result: string[] = []

    array.forEach(element => {
        if (reg.test(element)) {
            result.push(element)
        }
    });

    res.json(result)
})

const PORT = process.env.PORT || 3333
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})