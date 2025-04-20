// Story:

// A traveler needs to reach their destination city as quickly as possible. They have several vehicles available, each with a different speed. The traveler wants to determine how many vehicles they can use to reach the destination within a given time limit.

// Problem:

// The traveler is a distance D km away from the destination city and wants to arrive within T hours. They have N vehicles. The speed of the i-th vehicle is Sᵢ km/hr. Calculate the number of vehicles the traveler can use to reach the city on time.

// Input:

// The first line contains three integers N, D, and T. (1 ≤ N ≤ 1000, 1 ≤ D, T ≤ 10⁹)

// The next line contains N integers Sᵢ, representing the speed of the i-th vehicle in km/hr. (1 ≤ Sᵢ ≤ 10⁹)

// Output:

// Print a single integer representing the number of vehicles the traveler can use to reach the destination city on time.

function main(N, D, T, v){
    const min_speed = D/T;
    let ret = 0;

    v.forEach(ele => {
        if(ele >= min_speed){
            ret++;
        }
    });
    return ret;
}

console.log(main(5, 20, 5, [2, 3, 4, 5, 7]))