import axios from 'axios';

export function HeadersInterceptor() {
    axios.interceptors.request.use(request => {
        request.headers.common['Access-Control-Allow-Origin'] = '*';
        request.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';

        return request;
    });
}
