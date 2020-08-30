import express from 'express';

export class ExpressAPI {
    public init(): void {
        const app = express();
        const port = 3000;
        app.get('/', (req, res) => {
            res.send('This is the root.');
        });
        app.listen(port, err => {
            if (err) {
                return console.error(err);
            }
            return console.log(`server is listening on ${port}`);
        });
    } 
}  