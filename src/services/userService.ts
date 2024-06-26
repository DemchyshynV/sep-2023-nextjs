import {apiService, IRes} from "@/services/apiService";
import {IUser} from "@/interfaces/userInterface";
import {urls} from "@/constants/urls";
import {IPost} from "@/interfaces/postInterface";

const userService = {
    getAll:():IRes<IUser[]> =>apiService.get(urls.users.base),
    getPosts:(id:number|string):IRes<IPost[]> =>apiService.get(urls.users.getPosts(id))
}

export {
    userService
}