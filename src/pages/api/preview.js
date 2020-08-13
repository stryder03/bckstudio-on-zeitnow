
// route and params to call: /api/preview?token=7634b554961c40378a8769fe67194f4c&page=
export default async (req, res) => {
    // token can be checked into VCS, only gives read access to draft version of cms
    if (req.query.token !== process.env.USER_API_TOKEN) {
        return res.status(401).json({ message: "Invalid token" })
    }
    // Enable Preview Mode by setting the cookies
    res.setPreviewData({token: process.env.GRAPH_CMS_PREVIEW_TOKEN_SERVER}, {
    });

    // Redirect to the classes-encounters page
    res.writeHead(307, { Location: "/" + req.query.page });
    res.end()
}
