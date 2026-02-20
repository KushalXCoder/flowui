// Storing in local data, as don't wanna create a server and backend for just storing the
// stars count

"use client";

type CacheData = {
    stars: number;
    expiry: number;
};

export const fetchStars = async () => {
    // Works as a cache
    const cached = localStorage.getItem("stars");

    if(cached) {
        const { stars, expiry } = JSON.parse(cached);

        if(Date.now() < expiry) {
            return stars;
        } else {
            localStorage.removeItem("stars");
        }
    }

    try {
        const res = await fetch("https://api.github.com/repos/KushalXCoder/flowui");
        
        if(!res.ok) {
            console.log("Error fetching stars");
            return -1;
        }
        
        const data = await res.json();
        const stars = data.stargazers_count;

        const cacheData : CacheData = {
            stars,
            expiry: Date.now() + 15 * 60 * 1000, // 15 min expiry
        };

        localStorage.setItem("stars", JSON.stringify(cacheData));

        return stars;
    } catch (error) {
        console.log("Server Error");
        return -1;
    }
}