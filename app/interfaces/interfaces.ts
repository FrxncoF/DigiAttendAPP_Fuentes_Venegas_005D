export interface RespuestaTopHeadLines {
    status: string;
    data: Datas[];
}

export interface Datas {
    date: string;
    title: string;
    type: string;
    inalienable: boolean;
    extra: string;
}
