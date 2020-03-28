var movies =[
    {
        title: "Mad Max",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Frozen",
        rating: 4.5,
        hasWatched: false
    },
    {
        title: "Les Miserables",
        rating: 3.5,
        hasWatched: false
    }
];

movies.forEach(function(movie) {
    var watched = ["you have not seen", "you have watched"];
    console.log(watched[movie.hasWatched ? 1 : 0], movie.title, movie.rating, "stars");
});

 