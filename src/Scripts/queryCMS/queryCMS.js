import {GraphQLClient} from "graphql-request";

export const queryCMS = async (query, token) => {
    try {
        return await new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT, {
            headers: {
                authorization: `Bearer ${token}`
            }
        }).request(query);
    }catch (e) {
        return e
    }
};

