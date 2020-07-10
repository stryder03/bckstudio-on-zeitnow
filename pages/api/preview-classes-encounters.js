
// route and params to call: /api/preview-classes-encounters?secret=7634b554961c40378a8769fe67194f4c
export default async (req, res) => {
    // Check the secret and next parameters
    // This secret should only be known to this API route and the CMS
    if (req.query.secret !== process.env.USER_API_TOKEN) {
        return res.status(401).json({ message: 'Invalid token' })
    }
    // Enable Preview Mode by setting the cookies

    res.setPreviewData({token: process.env.GRAPH_CMS_PREVIEW_TOKEN_SERVER});

    // Redirect to the classes-encounters page
    res.writeHead(307, { Location: "/classes-encounters" });
    res.end()
}
