export const apiEndpoints = {
    getImages: `https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=${process.env.GATSBY_FLICKR_API_KEY}&gallery_id=72157712102906287&format=json&nojsoncallback=1`,
    creteGhIssue: `https://api.github.com/repos/fme-fi/fme-website/issues`,
    getAllGhIssues: 'https://api.github.com/repos/fme-fi/fme-website/issues',
}
