import {queryCMS} from "./queryCMS";

describe('CMS Query API with CLIENT Token', () => {
    it('should return status code 200', async() => {
        const expected = 200;
        const actual = await queryCMS(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT, process.env.NEXT_PUBLIC_GRAPHCMS_WEBCLIENT_API_TOKEN).res.status;

        expect(actual).toBe(expected);
    });
});
