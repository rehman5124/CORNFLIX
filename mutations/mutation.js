export const rateMovies = async(props) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${props.id}/rating?guest_session_id=238c7e304803220bb976c21ea8d8f5bf&api_key=4cd185c5217a168ea706686d5d711127`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            accept: "application/json",
        },
        body: `{"value":8.5}`
    })

    return res.json();
}