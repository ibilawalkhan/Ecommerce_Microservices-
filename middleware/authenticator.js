import jwt from 'jsonwebtoken'

export default function isAuthenticated(req, res, next) {
    const token = req.headers.authorization.split(' ')[1]
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' })
    }

    try {
        const decoded = jwt.verify(token, "secret")
        req.user = decoded
        next()
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' })
    }
} 