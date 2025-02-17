//1. The URL where our planet data is located is: "https://handlers.education.launchcode.org/static/planets.json".
//2. Add the code to fetch this URL
//   -The data you receive as a response should be an array containing 6 objects
//3. show the first planet name and distance(first index of the array data)
//4. let's dynamically change which planet's info we're displaying each time the element with id "destination" is clicked. To do this:
//      a) Declare a counter variable, index that changes each time a click event takes place.
//      b) Use the value of index as the position in the planets array to use in the template literal.
//      c) Lastly, to ensure that the value of the index does not surpass the length of the planets array, implement a mechanism to control the maximum allowed value for the index

////////Answer///////////
const planetsUrl = "https://handlers.education.launchcode.org/static/planets.json";


const destinationDiv = document.getElementById("destination");
let index = 0;


async function fetchAndDisplayPlanets() {
    try {
        
        const response = await fetch(planetsUrl);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const planets = await response.json();

        
        destinationDiv.addEventListener("click", () => {
            // 
            if (index >= planets.length) {
                index = 0; 
            }

            
            const planet = planets[index];
            destinationDiv.innerHTML = `
                <h3>Planet: ${planet.name}</h3>
                <p>Distance: ${planet.distance} light years</p>
            `;

        
            index++;
        });

        
        const firstPlanet = planets[0];
        destinationDiv.innerHTML = `
            <h3>Planet: ${firstPlanet.name}</h3>
            <p>Distance: ${firstPlanet.distance} light years</p>
        `;
    } catch (error) {
        console.error("Error fetching planets:", error);
    }
}

fetchAndDisplayPlanets();