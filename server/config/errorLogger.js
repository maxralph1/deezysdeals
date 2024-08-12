import { existsSync } from 'fs'; 
import { promises as fsPromises } from 'fs'; 
import { join } from 'path'; 
import { formatISO } from 'date-fns'; 

const logEvents = async (message, logFileName) => {
    const dateTime = formatISO(new Date())
    const logItem = `[${dateTime}]\t${message}\n`

    try {
        if (!existsSync(join(__dirname, '..', 'log', 'error'))) {
            await fsPromises.mkdir(join(__dirname, '..', 'log', 'error'), logItem)
        }
        await fsPromises.appendFile(join(__dirname, '..', 'log', logFileName), logItem)
    } catch (err) {
        console.log(err)
    }
}

const logger = (req, res, next) => {
    logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, 'error.log')
    console.log(`${req.method} ${req.path}`)
    next()
}


export { logEvents, logger }