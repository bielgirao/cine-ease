export const extractYear = (dateString) => {
    return new Date(dateString).getFullYear();
}

export const formatReleaseDate = (dateString) => {
    const releaseDate = new Date(dateString);
    return releaseDate.toLocaleDateString('en-US');
}

export const formatRating = (rating) => {
    return Math.round(rating * 10) / 10;
}

export const extractDirector = (crew) => {
    const director = crew.filter(crewMember => crewMember.known_for_department === 'Directing')[0];
    return director.name;
}

export const extractTrailer = (videos) => {
    const trailer = videos.filter(video => video.type === 'Trailer')[0];
    if(trailer.site === "YouTube") {
        return `https://www.youtube.com/watch?v=${trailer.key}`
    }
}