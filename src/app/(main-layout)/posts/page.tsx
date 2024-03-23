import {FC, PropsWithChildren} from "react";
import type {Metadata} from "next";

interface IProps extends PropsWithChildren {

}
export const metadata: Metadata = {
    title: "Posts",
};
const PostsPage: FC<IProps> = () => {
    return (
        <div>
            PostsPage
        </div>
    );
};

export default PostsPage;