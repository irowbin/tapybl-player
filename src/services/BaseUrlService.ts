export class BaseUrlService {
    static get baseUrl(){
        return process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8080' : 'https://tapybl-backend.onrender.com'
    }
}
