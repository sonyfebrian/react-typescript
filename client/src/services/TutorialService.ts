import http from "../http-common";
import ITutorialData from "../types/Tutorial";

const getAll = () => {
    return http.get<Array<ITutorialData>>("/tutorials");
};

const get = (id:any) => {
    return http.get<ITutorialData>(`/tutorials/${id}`);
}

const create = (data: ITutorialData) => {
    return http.post<ITutorialData>("/tutorials", data);
}

const update = (id:any, data:ITutorialData) => {
    return http.put<any>(`/tutorilas/${id}`, data);
}

const remove = (id:any) => {
    return http.delete<any>(`/tutorials/${id}`);
}

const removeAll = (id:any) => {
    return http.delete<any>(`/tutorials`);
}

const findbyTitle = (title: string) => {
    return http.get<Array<ITutorialData>>(`/tutorials?title=${title}`)
};

const TutorialService = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findbyTitle

}

export default TutorialService;