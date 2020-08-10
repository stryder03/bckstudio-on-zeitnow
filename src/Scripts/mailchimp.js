export const mailchimpPopup = (c,h,i,m,p) => {
    m=c.createElement(h),
        p=c.getElementsByTagName(h)[0],
        m.async=1,
        m.src=i,
        p.parentNode.insertBefore(m,p)
};

